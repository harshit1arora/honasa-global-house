import { useState } from "react";
import { ShieldCheck, Building2, Copy, Check, ExternalLink, Plus, RefreshCw, ShoppingBag, UserCheck } from "lucide-react";
import type { ConciergeMessage } from "@/lib/ai/types";
import { getProduct } from "@/data/products";
import { useSite } from "@/lib/site-state";
import { trackChatbotEvent } from "@/lib/analytics";
import honasaLogo from "@/assets/honasa-logo.png";

interface ChatMessageItemProps {
  message: ConciergeMessage;
  onRetry?: () => void;
  onOpenHandoff?: () => void;
}

export function ChatMessageItem({ message, onRetry, onOpenHandoff }: ChatMessageItemProps) {
  const { addToCart, setActiveProductId, setQuizOpen, price } = useSite();
  const [copied, setCopied] = useState(false);

  const isUser = message.role === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Basic markdown formatter helper (bolds, bullet points, links)
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Bullet list items
      if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
        const content = line.trim().substring(2);
        return (
          <li key={idx} className="ml-4 list-disc space-y-1">
            {parseInlineMarkdown(content)}
          </li>
        );
      }

      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="leading-relaxed">
          {parseInlineMarkdown(line)}
        </p>
      );
    });
  };

  const parseInlineMarkdown = (text: string) => {
    // Simple inline bold parser **bold**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div
      className={`flex flex-col gap-2 ${
        isUser ? "items-end" : "items-start"
      } animate-in fade-in slide-in-from-bottom-2 duration-300`}
    >
      {/* Message Header Label */}
      <div className="flex items-center gap-1.5 px-1 text-[0.6875rem] font-semibold text-muted-foreground">
        {isUser ? (
          <span>You</span>
        ) : (
          <span className="flex items-center gap-1.5 font-bold text-foreground">
            <img src={honasaLogo} alt="Honasa AI" className="h-3.5 w-auto object-contain dark:invert" />
            <span className="text-clay font-display">Honasa AI</span>
          </span>
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={`relative max-w-[88%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-xs shadow-sm"
            : "bg-card border border-border/80 text-foreground rounded-bl-xs shadow-xs"
        }`}
      >
        <div className="space-y-1.5">{renderFormattedText(message.text)}</div>

        {/* Copy Button for Assistant */}
        {!isUser && (
          <div className="mt-3 pt-2 border-t border-border/50 flex items-center justify-between text-[0.6875rem] text-muted-foreground">
            <span className="font-medium text-muted-foreground/70">Verified R&D Formulation</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
              title="Copy response"
            >
              {copied ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        )}
      </div>

      {/* Embedded Suggested Product Cards & Direct Navigation CTAs */}
      {((message.suggestedProductIds && message.suggestedProductIds.length > 0) || (message.routine?.slots && message.routine.slots.length > 0)) && (
        <div className="mt-2 w-full max-w-[92%] space-y-2">
          <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
            Matched Formulations & Exact Destinations:
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {(message.suggestedProductIds || message.routine?.slots?.map((s) => s.productId) || []).map((prodId: string) => {
              const prod = getProduct(prodId);
              if (!prod) return null;
              return (
                <div
                  key={prod.id}
                  className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-3 shadow-2xs transition-all hover:border-clay"
                >
                  <div>
                    <div className="flex items-center justify-between text-[0.625rem] text-muted-foreground font-bold uppercase">
                      <span>{prod.brand}</span>
                      <span className="text-clay">Step: {prod.step}</span>
                    </div>
                    <p className="mt-1 font-display text-xs font-bold text-foreground group-hover:text-clay transition-colors line-clamp-1">
                      {prod.name}
                    </p>
                    <p className="text-[0.6875rem] text-muted-foreground line-clamp-2 mt-0.5">
                      {prod.benefit}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-border/50 flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-foreground">{price(prod.price)}</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setActiveProductId(prod.id)}
                        className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[0.6875rem] font-semibold text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="size-3" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => {
                          addToCart(prod.id, 1);
                          trackChatbotEvent("product_card_clicked", { productId: prod.id });
                        }}
                        className="inline-flex items-center gap-1 rounded-full bg-clay text-white px-2.5 py-1 text-[0.6875rem] font-bold hover:bg-clay/90 transition-colors cursor-pointer"
                      >
                        <Plus className="size-3" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Embedded Action Buttons */}
      {!isUser && (
        <div className="flex flex-wrap gap-2 pt-1 max-w-[90%]">
          <button
            onClick={() => setQuizOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/5 px-3 py-1.5 text-[0.6875rem] font-semibold text-clay hover:bg-clay/15 transition-colors cursor-pointer"
          >
            <ShieldCheck/>
            <span>Take 90s Quiz</span>
          </button>

          {onOpenHandoff && (
            <button
              onClick={onOpenHandoff}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card px-3 py-1.5 text-[0.6875rem] font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
            >
              <UserCheck className="size-3" />
              <span>Talk to Human</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
