import honasaLogo from "@/assets/honasa-logo.png";

export function ChatbotTyping() {
  return (
    <div className="flex items-start gap-2.5 animate-in fade-in duration-300">
      <div className="flex size-7 items-center justify-center rounded-full border border-clay/30 bg-background p-1.5 shrink-0 mt-0.5 shadow-2xs">
        <img src={honasaLogo} alt="AI" className="h-full w-auto object-contain dark:invert animate-pulse" />
      </div>

      <div className="rounded-2xl border border-border/80 bg-card px-4 py-3 shadow-2xs">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-clay animate-bounce [animation-delay:-0.3s]" />
          <span className="size-2 rounded-full bg-clay animate-bounce [animation-delay:-0.15s]" />
          <span className="size-2 rounded-full bg-clay animate-bounce" />
          <span className="text-xs text-muted-foreground ml-2 font-medium">
            Formulating response...
          </span>
        </div>
      </div>
    </div>
  );
}
