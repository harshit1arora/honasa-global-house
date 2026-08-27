/**
 * Production analytics event tracker for Honasa AI Chatbot & Site Events
 */

export type ChatbotEventType =
  | "chatbot_opened"
  | "chatbot_closed"
  | "message_sent"
  | "response_received"
  | "suggested_question_clicked"
  | "human_handoff_clicked"
  | "lead_started"
  | "lead_submitted"
  | "conversation_started"
  | "conversation_cleared"
  | "product_card_clicked"
  | "routine_added_from_chat";

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined | null;
}

export function trackChatbotEvent(event: ChatbotEventType, payload?: AnalyticsPayload): void {
  try {
    const timestamp = new Date().toISOString();
    const eventData = {
      event,
      timestamp,
      path: typeof window !== "undefined" ? window.location.pathname : "",
      ...payload,
    };

    // Log to console in development mode
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event: ${event}]`, eventData);
    }

    // Dispatch custom DOM event for external listeners / GTM / Segment
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("honasa_analytics", {
          detail: eventData,
        })
      );
    }
  } catch (error) {
    console.error("Failed to track analytics event:", error);
  }
}
