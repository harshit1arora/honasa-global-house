import { ShieldCheck, Building2, MessageSquare, X } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

interface ChatbotLauncherProps {
  isOpen: boolean;
  onToggle: () => void;
  unreadCount?: number;
}

export function ChatbotLauncher({ isOpen, onToggle, unreadCount = 0 }: ChatbotLauncherProps) {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 transition-all duration-300">
      <button
        onClick={onToggle}
        aria-label={isOpen ? "Close AI Assistant" : "Open Honasa AI Assistant"}
        className={`group relative flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer shadow-2xl ${
          isOpen
            ? "size-12 sm:size-14 bg-card border border-border text-foreground hover:scale-105"
            : "size-14 sm:size-16 bg-linear-to-r from-ink via-primary to-ink text-white ring-2 ring-clay/40 hover:scale-110 active:scale-95"
        }`}
      >
        {/* Ambient Pulsing Glow Aura */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-clay/30 blur-md animate-pulse opacity-70 group-hover:opacity-100" />
        )}

        {/* Content */}
        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <X className="size-5 sm:size-6 transition-transform duration-300 group-hover:rotate-90 text-foreground" />
          ) : (
            <div className="flex items-center gap-1.5 px-2">
              <img src={honasaLogo} alt="Honasa AI" className="h-5 sm:h-6 w-auto object-contain brightness-0 invert" />
            </div>
          )}
        </div>

        {/* Unread Counter Badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-clay text-[0.625rem] font-bold text-white shadow-md ring-2 ring-background">
            {unreadCount}
          </span>
        )}

        {/* Label Tooltip on Desktop */}
        {!isOpen && (
          <div className="absolute right-full mr-3 hidden md:flex items-center gap-2 rounded-full border border-border/80 bg-card/95 px-3.5 py-1.5 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <ShieldCheck/>
            <span className="text-xs font-bold text-foreground">Ask Honasa AI</span>
          </div>
        )}
      </button>
    </div>
  );
}
