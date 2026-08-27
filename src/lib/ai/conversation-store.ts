import type { ConciergeMessage } from "./types";
import { trackChatbotEvent } from "@/lib/analytics";

const STORAGE_KEY = "honasa_chat_conversation_v2";
const CONV_ID_KEY = "honasa_chat_conv_id_v2";

export function getOrCreateConversationId(): string {
  if (typeof window === "undefined") return "conv_ssr";
  let convId = localStorage.getItem(CONV_ID_KEY);
  if (!convId) {
    convId = `conv_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(CONV_ID_KEY, convId);
  }
  return convId;
}

export function loadStoredMessages(): ConciergeMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ConciergeMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveStoredMessages(messages: ConciergeMessage[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error("Failed to save chat messages to localStorage:", error);
  }
}

export function clearStoredMessages(): string {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(CONV_ID_KEY);
  }
  const newConvId = getOrCreateConversationId();
  trackChatbotEvent("conversation_cleared", { conversationId: newConvId });
  return newConvId;
}
