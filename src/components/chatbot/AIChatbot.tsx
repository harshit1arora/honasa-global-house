import { useSite } from "@/lib/site-state";
import { ChatbotLauncher } from "./ChatbotLauncher";
import { ChatbotPanel } from "./ChatbotPanel";

export function AIChatbot() {
  const { conciergeOpen, setConciergeOpen } = useSite();

  return (
    <>
      <ChatbotLauncher
        isOpen={conciergeOpen}
        onToggle={() => setConciergeOpen(!conciergeOpen)}
      />
      <ChatbotPanel
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
      />
    </>
  );
}
