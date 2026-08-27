import { ShieldCheck, Building2, X, RefreshCw, Plus, Headphones, Minus } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

interface ChatbotHeaderProps {
  onClose: () => void;
  onClear: () => void;
  onNewSession: () => void;
  onOpenHandoff: () => void;
}

export function ChatbotHeader({
  onClose,
  onClear,
  onNewSession,
  onOpenHandoff }: ChatbotHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border/80 bg-card/90 px-4 py-3.5 backdrop-blur-xl shrink-0">
      {/* Left: Avatar & Identity Status */}
      <div className="flex items-center gap-3">
        <div className="relative flex size-9 items-center justify-center rounded-full bg-background border border-clay/40 p-1.5 shadow-md shrink-0">
          <img src={honasaLogo} alt="Honasa AI" className="h-full w-auto object-contain dark:invert" />
          <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-2 ring-card" />
        </div>

        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-display text-sm font-bold text-foreground leading-none">
              Honasa AI Concierge
            </h3>
            <span className="rounded-full bg-clay/15 px-1.5 py-0.5 text-[0.625rem] font-bold text-clay uppercase">
              AI
            </span>
          </div>
          <p className="text-[0.6875rem] text-muted-foreground font-medium mt-0.5">
            Formulation Intelligence • Online
          </p>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={onOpenHandoff}
          title="Talk to human support"
          aria-label="Talk to human support"
          className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
        >
          <Headphones className="size-4" />
        </button>

        <button
          onClick={onNewSession}
          title="New session"
          aria-label="New chat session"
          className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
        >
          <Plus className="size-4" />
        </button>

        <button
          onClick={onClear}
          title="Clear conversation"
          aria-label="Clear chat history"
          className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
        >
          <RefreshCw className="size-3.5" />
        </button>

        <button
          onClick={onClose}
          title="Close chatbot"
          aria-label="Close assistant"
          className="rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer ml-1"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
