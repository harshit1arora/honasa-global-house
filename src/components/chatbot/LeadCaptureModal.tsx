import { useState } from "react";
import { X, Send, CheckCircle, Mail, PhoneCall, ShieldCheck, Building2 } from "lucide-react";
import { trackChatbotEvent } from "@/lib/analytics";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export function LeadCaptureModal({ isOpen, onClose, initialMessage = "" }: LeadCaptureModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    trackChatbotEvent("lead_submitted", { name, email, message });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
        >
          <X className="size-4" />
        </button>

        {submitted ? (
          <div className="text-center space-y-4 py-4">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <CheckCircle className="size-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              We'll Be In Touch Shortly!
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Thank you, <strong className="text-foreground">{name}</strong>. Our beauty compliance & product specialists have received your message and will reach out to <strong className="text-foreground">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="w-full rounded-full bg-primary py-3 text-xs font-bold text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer"
              >
                Return to Chatbot
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/10 px-3 py-1 text-[0.6875rem] font-bold text-clay uppercase tracking-wider">
                <ShieldCheck/>
                <span>Human Handoff Request</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Talk to a Beauty Specialist
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need specialized assistance? Leave your email and a member of our product intelligence team will reach out directly.
              </p>
            </div>

            {error && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-600 dark:text-rose-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-clay focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. priya@example.com"
                  className="w-full rounded-xl border border-border/80 bg-background px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-clay focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  How can we help? (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Describe your skin concern or product question..."
                  className="w-full rounded-xl border border-border/80 bg-background p-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-clay focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-bold text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer"
                >
                  <Send className="size-3.5" />
                  <span>Submit Support Request</span>
                </button>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/60">
                  <a
                    href="mailto:compliance@honasa.in"
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    <Mail className="size-3.5" />
                    <span>compliance@honasa.in</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
