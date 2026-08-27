import { useState, useRef, useEffect } from "react";
import { Send, Square, ShieldCheck, Building2 } from "lucide-react";

interface ChatbotInputProps {
  onSend: (text: string) => void;
  isGenerating?: boolean;
  onStop?: () => void;
  placeholder?: string;
}

const MAX_CHARS = 500;

export function ChatbotInput({
  onSend,
  isGenerating = false,
  onStop,
  placeholder = "Ask about skin concerns, products, or routines..." }: ChatbotInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!value.trim() || isGenerating) return;
    onSend(value.trim());
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARS) {
      setValue(text);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-border/80 bg-card/95 p-3 sm:p-4 backdrop-blur-xl shrink-0 space-y-2"
    >
      <div className="relative flex items-center rounded-2xl border border-border/80 bg-background focus-within:border-clay focus-within:ring-2 focus-within:ring-clay/20 transition-all duration-200 shadow-inner">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder={placeholder}
          className="w-full resize-none border-none bg-transparent py-3 pl-4 pr-12 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />

        <div className="absolute right-2 flex items-center gap-1">
          {isGenerating ? (
            <button
              type="button"
              onClick={onStop}
              title="Stop generating"
              aria-label="Stop response generation"
              className="flex size-8 items-center justify-center rounded-full bg-rose-500 text-white shadow-xs hover:bg-rose-600 cursor-pointer transition-transform active:scale-95"
            >
              <Square className="size-3.5 fill-current" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!value.trim()}
              aria-label="Send message"
              className={`flex size-8 items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                value.trim()
                  ? "bg-primary text-primary-foreground shadow-md hover:scale-105 active:scale-95"
                  : "bg-secondary text-muted-foreground/40 cursor-not-allowed"
              }`}
            >
              <Send className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-1 text-[0.625rem] text-muted-foreground font-medium">
        <span className="flex items-center gap-1">
          <ShieldCheck/>
          <span>Press Enter to send, Shift+Enter for new line</span>
        </span>
        <span>
          {value.length}/{MAX_CHARS}
        </span>
      </div>
    </form>
  );
}
