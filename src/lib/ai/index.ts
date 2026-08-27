import { mockAIService } from "./mock-service";
import type { AIService } from "./types";

/**
 * Single seam for AI. Swap `aiService` for an implementation that calls
 * server functions hitting /api/ai/concierge, /api/ai/routine,
 * /api/ai/product-guide, /api/ai/review-summary, /api/ai/visual-search.
 */
export const aiService: AIService = mockAIService;
export const AI_IS_MOCK = true;
export type {
  AIService,
  BeautyProfile,
  ConciergeMessage,
  RoutineResult,
  SearchAnswerResult,
} from "./types";
