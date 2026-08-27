import { useState, useRef, useEffect } from "react";
import type { ConciergeMessage } from "@/lib/ai/types";
import {
  getOrCreateConversationId,
  loadStoredMessages,
  saveStoredMessages,
  clearStoredMessages,
} from "@/lib/ai/conversation-store";
import { ChatbotHeader } from "./ChatbotHeader";
import { ChatbotWelcome } from "./ChatbotWelcome";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatbotTyping } from "./ChatbotTyping";
import { ChatbotInput } from "./ChatbotInput";
import { LeadCaptureModal } from "./LeadCaptureModal";
import { useRouterState } from "@tanstack/react-router";
import { useSite } from "@/lib/site-state";
import { trackChatbotEvent } from "@/lib/analytics";
import { sendChatMessage } from "@/lib/ai/chat-fn";

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatbotPanel({ isOpen, onClose }: ChatbotPanelProps) {
  const { market } = useSite();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const [messages, setMessages] = useState<ConciergeMessage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [lastUserMessage, setLastUserMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Initialize stored history
  useEffect(() => {
    const history = loadStoredMessages();
    setMessages(history);
  }, []);

  // Sync to local storage whenever messages update
  useEffect(() => {
    if (messages.length > 0) {
      saveStoredMessages(messages);
    }
  }, [messages]);

  // Lock body scroll on mobile when chat is open
  useEffect(() => {
    if (isOpen) {
      trackChatbotEvent("chatbot_opened");
      if (window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isGenerating, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isGenerating) return;

    const convId = getOrCreateConversationId();
    setLastUserMessage(text);

    const userMessage: ConciergeMessage = {
      id: `msg_user_${Date.now()}`,
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsGenerating(true);
    trackChatbotEvent("message_sent", { conversationId: convId, text });

    abortControllerRef.current = new AbortController();

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      // Invoke server function (executes securely on server with access to process.env.GEMINI_API_KEY)
      const data = await sendChatMessage({
        data: {
          message: text,
          conversationId: convId,
          history: historyPayload,
          currentPath,
          marketCode: market.code,
        },
      });

      const assistantMessage: ConciergeMessage = {
        id: data.id || `msg_ai_${Date.now()}`,
        role: "assistant",
        text: data.text || "I have processed your request.",
        routine: data.suggestedProductIds
          ? {
              title: "Recommended Regimen",
              summary: "Formulated for your concern",
              slots: data.suggestedProductIds.map((pid: string, idx: number) => ({
                step: `Step 0${idx + 1}`,
                productId: pid,
                reason: "Clinical formulation synergy",
                time: "am",
              })),
            }
          : undefined,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      trackChatbotEvent("response_received", { conversationId: convId });

      if (data.actionRequired === "handoff") {
        setLeadModalOpen(true);
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.name === "AbortError") {
        console.log("Chat generation stopped by user.");
      } else {
        console.error("Chat generation failed:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: `err_${Date.now()}`,
            role: "assistant",
            text: "Something went wrong synthesizing your response. Please verify your connection or try again.",
          },
        ]);
      }
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null;
    }
  };

  const handleStopGenerating = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsGenerating(false);
    }
  };

  const handleClearChat = () => {
    clearStoredMessages();
    setMessages([]);
  };

  const handleNewSession = () => {
    clearStoredMessages();
    setMessages([]);
    trackChatbotEvent("conversation_started");
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        onClick={onClose}
        className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      />

      {/* Main Chat Panel Window */}
      <div
        className="fixed z-50 flex flex-col bg-card border border-border/80 shadow-2xl overflow-hidden transition-all duration-300 inset-x-0 bottom-0 top-12 rounded-t-3xl md:top-auto md:bottom-24 md:right-6 md:left-auto md:w-[420px] md:h-[640px] md:max-h-[calc(100vh-120px)] md:rounded-3xl animate-in slide-in-from-bottom-5 duration-300"
      >
        {/* Header */}
        <ChatbotHeader
          onClose={() => {
            trackChatbotEvent("chatbot_closed");
            onClose();
          }}
          onClear={handleClearChat}
          onNewSession={handleNewSession}
          onOpenHandoff={() => setLeadModalOpen(true)}
        />

        {/* Conversation Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
          {/* Welcome State when empty */}
          {messages.length === 0 ? (
            <ChatbotWelcome
              onSelectSuggestion={handleSendMessage}
              currentPath={currentPath}
            />
          ) : (
            messages.map((msg) => (
              <ChatMessageItem
                key={msg.id}
                message={msg}
                onRetry={() => handleSendMessage(lastUserMessage)}
                onOpenHandoff={() => setLeadModalOpen(true)}
              />
            ))
          )}

          {/* Typing Indicator */}
          {isGenerating && <ChatbotTyping />}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <ChatbotInput
          onSend={handleSendMessage}
          isGenerating={isGenerating}
          onStop={handleStopGenerating}
        />
      </div>

      {/* Human Handoff / Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialMessage={lastUserMessage}
      />
    </>
  );
}
