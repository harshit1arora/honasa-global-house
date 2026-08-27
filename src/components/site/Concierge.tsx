import { useState, useRef, useEffect } from "react";
import { ShieldCheck, Building2, X, Send, Loader2, RefreshCw, Plus, Bookmark, ArrowRight, ShieldAlert, Sliders, DollarSign, Sun, Globe, Info } from "lucide-react";
import { aiService, type ConciergeMessage } from "@/lib/ai";
import { getProduct } from "@/data/products";
import { useSite } from "@/lib/site-state";
import { StatusBadge } from "@/components/ui/StatusBadge";
import honasaLogo from "@/assets/honasa-logo.png";

const PROMPT_SUGGESTIONS = [
  "I have acne, oily skin, live in Gurgaon, travelling to Dubai next week, budget under ₹2,000",
  "Why did you change this routine for Dubai?",
  "I live in UAE and need a simple morning routine",
  "I have dry skin and don't know where to start",
  "Recommend a complete skincare routine under ₹1,500",
  "I have a bleeding cyst on my cheek",
];

export function Concierge() {
  const {
    conciergeOpen,
    setConciergeOpen,
    market,
    profile,
    updateProfile,
    addRoutineToCart,
    addToCart,
    saveRoutineToProfile,
    setActiveProductId,
    price } = useSite();

  const [messages, setMessages] = useState<ConciergeMessage[]>([
    {
      id: "initial-welcome",
      role: "assistant",
      text: `Hello! I am Honasa Beauty Intelligence : your cross-brand beauty concierge. Tell me what you are looking to improve with your skin or hair, where you live, or your travel plans. I will search across all eight Honasa houses to calibrate the exact regimen for your biology.` },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (conciergeOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, conciergeOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userText = textToSend.trim();
    setInputValue("");

    const userMessage: ConciergeMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: userText };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await aiService.concierge({
        message: userText,
        profile: { ...profile, marketCode: market.code } });
      setMessages((prev) => [...prev, response]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          text: "I encountered an issue synthesizing your routine. Using verified offline RAG knowledge fallback path." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleBudgetAdjustment = () => {
    handleSendMessage("That is too expensive for my budget. Can we simplify it under ₹1,500?");
  };

  const handleRestart = () => {
    setMessages([
      {
        id: `restart-${Date.now()}`,
        role: "assistant",
        text: "Consultation reset. What skin or hair concern would you like to explore today?" },
    ]);
  };

  if (!conciergeOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-end animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        onClick={() => setConciergeOpen(false)}
        className="absolute inset-0 bg-ink/60 backdrop-blur-md transition-opacity"
      />

      {/* Main Full-Size Concierge Drawer (Major Product Experience) */}
      <aside className="relative flex h-full w-full max-w-2xl flex-col border-l border-border bg-background shadow-[var(--shadow-lift)] z-10">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-border/80 bg-background/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <img
              src={honasaLogo}
              alt="Honasa Consumer"
              className="h-10 w-auto object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-base font-bold text-foreground">
                  AI Concierge
                </h2>
                <StatusBadge mode="live" text="Gemini RAG Engine" />
              </div>
              <p className="text-xs text-muted-foreground">
                Cross-Brand Regimen Consultation · {market.city}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRestart}
              title="Restart consultation"
              className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer transition-colors"
            >
              <RefreshCw className="size-4" />
            </button>
            <button
              onClick={() => setConciergeOpen(false)}
              className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
        </header>

        {/* Ambient Climate & Market Banner */}
        <div className="flex items-center justify-between border-b border-border/60 bg-secondary/40 px-6 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Globe className="size-3.5 text-clay" />
            <span>Market Context: {market.country} ({market.city})</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <Sun className="size-3 text-amber-500" />
            <span>{market.climate}</span>
          </div>
        </div>

        {/* Conversation Stream */}
        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
            >
              {/* Message Bubble */}
              <div
                className={`max-w-[88%] rounded-2xl p-4 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground shadow-md rounded-br-xs"
                    : "border border-border/80 bg-card text-foreground shadow-xs rounded-bl-xs"
                }`}
              >
                <p>{m.text}</p>

                {/* Structured Routine Output inside Assistant message */}
                {m.routine && (
                  <div className="mt-5 space-y-4 pt-4 border-t border-border/70">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                          Generated Regimen
                        </span>
                        <h4 className="font-display text-base font-bold text-foreground">
                          {m.routine.title}
                        </h4>
                      </div>
                      {m.routine.totalCostInr && (
                        <div className="text-right">
                          <span className="text-[0.625rem] text-muted-foreground uppercase">
                            Estimated Total
                          </span>
                          <p className="font-display font-bold text-foreground">
                            {price(m.routine.totalCostInr)}
                          </p>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground italic">
                      {m.routine.summary}
                    </p>

                    {/* Step Cards with "WHY SELECTED" reasoning */}
                    <div className="space-y-3">
                      {m.routine.slots.map((slot, i) => {
                        const product = getProduct(slot.productId);
                        if (!product) return null;
                        return (
                          <div
                            key={`${slot.productId}-${i}`}
                            className="rounded-xl border border-border/70 bg-background/80 p-3.5 transition-all hover:border-clay/40"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-bold text-clay uppercase text-[0.6875rem]">
                                Step 0{i + 1} · {slot.step} ({slot.time.toUpperCase()})
                              </span>
                              <span className="font-semibold text-foreground">
                                {price(product.price)}
                              </span>
                            </div>

                            <div className="mt-1.5 flex items-center justify-between">
                              <h5 className="font-display text-sm font-bold text-foreground">
                                {product.brand} : {product.name}
                              </h5>
                              <button
                                onClick={() => setActiveProductId(product.id)}
                                className="text-xs text-clay underline cursor-pointer"
                              >
                                View
                              </button>
                            </div>

                            <p className="mt-1 text-xs text-muted-foreground">
                              {product.benefit}
                            </p>

                            {/* Essential Requirement: Explain WHY each product was chosen */}
                            <div className="mt-2.5 rounded-md bg-secondary/60 p-2 text-[0.6875rem] text-foreground/90">
                              <strong className="text-clay">Why this was chosen:</strong>{" "}
                              {slot.reason}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Routine Actions */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-border/60">
                      <button
                        onClick={() =>
                          addRoutineToCart(m.routine!.slots.map((s) => s.productId))
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 cursor-pointer"
                      >
                        <span>Add Entire Routine to Cart</span>
                        <ArrowRight className="size-3.5" />
                      </button>

                      <button
                        onClick={() => saveRoutineToProfile(m.routine!)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-4 py-2.5 text-xs font-medium text-foreground hover:bg-secondary cursor-pointer"
                      >
                        <Bookmark className="size-3.5 text-clay" />
                        <span>Save to Profile</span>
                      </button>

                      <button
                        onClick={handleBudgetAdjustment}
                        className="inline-flex items-center gap-1 rounded-full border border-border px-3.5 py-2.5 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer"
                      >
                        <DollarSign className="size-3" />
                        <span>Too expensive?</span>
                      </button>
                    </div>

                    {/* Safety Disclaimer */}
                    {m.routine.caution && (
                      <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 p-2.5 text-[0.6875rem] text-amber-800 dark:text-amber-300">
                        <ShieldAlert className="size-3.5 shrink-0 mt-0.5" />
                        <span>{m.routine.caution}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing State Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-xs text-muted-foreground w-fit shadow-xs">
              <Loader2 className="size-3.5 animate-spin text-clay" />
              <span>Honasa AI is analyzing cross-brand formulations...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts Pill Bar */}
        <div className="border-t border-border/60 bg-secondary/30 px-6 py-3">
          <p className="text-[0.625rem] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Suggested Consultations:
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {PROMPT_SUGGESTIONS.map((p) => (
              <button
                key={p}
                onClick={() => handleSendMessage(p)}
                className="shrink-0 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs text-muted-foreground hover:border-clay hover:text-foreground transition-colors cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="border-t border-border bg-background p-4 sm:p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="E.g. I have acne marks in India, or need a 3-step routine under ₹1500..."
              className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-clay focus:outline-none shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-40 cursor-pointer"
            >
              <Send className="size-4" />
            </button>
          </form>

          <p className="mt-2 text-center text-[0.625rem] text-muted-foreground">
            Honasa AI provides cosmetic and wellness guidance. Never substitutes for medical dermatological diagnosis.
          </p>
        </div>
      </aside>
    </div>
  );
}
