import { ShieldCheck, Building2, ArrowRight, HelpCircle, ShoppingBag, FlaskConical, Compass, UserCheck } from "lucide-react";
import { trackChatbotEvent } from "@/lib/analytics";
import honasaLogo from "@/assets/honasa-logo.png";

interface ChatbotWelcomeProps {
  onSelectSuggestion: (text: string) => void;
  currentPath?: string;
}

export function ChatbotWelcome({ onSelectSuggestion, currentPath = "/" }: ChatbotWelcomeProps) {
  const getContextualSuggestions = (): { label: string; icon: React.ReactNode }[] => {
    if (currentPath.includes("/shop")) {
      return [
        { label: "Which product is best for oily skin & acne?", icon: <ShoppingBag className="size-3 text-clay" /> },
        { label: "Show sunscreens with zero white-cast", icon: <ShieldCheck/> },
        { label: "Compare serums under ₹600", icon: <HelpCircle className="size-3 text-emerald-500" /> },
        { label: "I want to talk to human support", icon: <UserCheck className="size-3 text-sky-500" /> },
      ];
    }

    if (currentPath.includes("/science")) {
      return [
        { label: "How do you stress-test formulas at 45°C?", icon: <FlaskConical className="size-3 text-clay" /> },
        { label: "What is MadeSafe™ certification?", icon: <ShieldCheck/> },
        { label: "Explain active dermaceutical formulations", icon: <HelpCircle className="size-3 text-amber-500" /> },
        { label: "Find routine for sensitive skin", icon: <UserCheck className="size-3 text-sky-500" /> },
      ];
    }

    if (currentPath.includes("/brands")) {
      return [
        { label: "Compare Mamaearth vs The Derma Co.", icon: <Compass className="size-3 text-clay" /> },
        { label: "Which house is specialized for frizzy hair?", icon: <ShieldCheck/> },
        { label: "Explain Luminéve luxury night repair", icon: <FlaskConical className="size-3 text-emerald-500" /> },
        { label: "Show complete 8 house list", icon: <HelpCircle className="size-3 text-sky-500" /> },
      ];
    }

    // Default Homepage Suggestions
    return [
      { label: "What does Honasa Consumer do?", icon: <ShieldCheck/> },
      { label: "Help me find a personalized routine", icon: <Compass className="size-3 text-amber-500" /> },
      { label: "Recommend products for high humidity", icon: <FlaskConical className="size-3 text-emerald-500" /> },
      { label: "I want to talk to a human", icon: <UserCheck className="size-3 text-sky-500" /> },
    ];
  };

  const suggestions = getContextualSuggestions();

  const handleChipClick = (suggestionText: string) => {
    trackChatbotEvent("suggested_question_clicked", { question: suggestionText });
    onSelectSuggestion(suggestionText);
  };

  return (
    <div className="rounded-2xl border border-clay/20 bg-linear-to-b from-clay/10 via-card to-card p-5 space-y-4 shadow-sm animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-start gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl border border-clay/30 bg-background p-2 shadow-xs shrink-0">
          <img src={honasaLogo} alt="Honasa AI" className="h-full w-auto object-contain dark:invert" />
        </div>
        <div className="space-y-1">
          <h4 className="font-display text-base font-bold text-foreground">
            Hi 👋 I'm Honasa AI.
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            I'm your intelligent beauty concierge. I search across all 8 Honasa specialized houses to match exact formulations to your skin biology and climate.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-border/60">
        <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
          Suggested Questions:
        </p>
        <div className="flex flex-col gap-2">
          {suggestions.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleChipClick(chip.label)}
              className="group flex items-center justify-between rounded-xl border border-border/80 bg-background/90 px-3.5 py-2.5 text-left text-xs font-medium text-foreground hover:border-clay hover:bg-clay/5 transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                {chip.icon}
                <span>{chip.label}</span>
              </div>
              <ArrowRight className="size-3 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
