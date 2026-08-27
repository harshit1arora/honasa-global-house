import type { Concern } from "@/data/products";

export interface BeautyProfile {
  userName?: string | undefined;
  userEmail?: string | undefined;
  userRole?: string | undefined;
  concerns: Concern[];
  skinFeel?: "oily" | "dry" | "combination" | "sensitive" | "normal" | undefined;
  marketCode?: string | undefined;
  effort?: "minimal" | "balanced" | "complete" | undefined;
  budget?: "value" | "mid" | "premium" | undefined;
  audience?: "women" | "men" | "baby" | "any" | undefined;
}

export interface RoutineSlot {
  step: string;
  productId: string;
  reason: string;
  time: "am" | "pm" | "both";
}

export interface RoutineResult {
  title: string;
  summary: string;
  slots: RoutineSlot[];
  caution?: string | undefined;
  totalCostInr?: number | undefined;
}

export interface ConciergeMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  routine?: RoutineResult | undefined;
  suggestedProductIds?: string[] | undefined;
}

export interface SearchAnswerResult {
  query: string;
  aiAnswer: string;
  matchedProductIds: string[];
  matchedBrandSlugs: string[];
  suggestedRoutine?: RoutineResult | undefined;
  editorialArticleIds: string[];
}

/**
 * Service contract for the real AI layer. The mock implementation in
 * `mock-service.ts` satisfies the same interface so it can be swapped for
 * server functions calling /api/ai/* without touching UI code.
 */
export interface AIService {
  concierge(input: {
    message: string;
    profile: BeautyProfile;
    history?: { role: "user" | "assistant"; text: string }[] | undefined;
  }): Promise<ConciergeMessage>;
  routine(input: { profile: BeautyProfile }): Promise<RoutineResult>;
  productGuide(input: { productId: string; question: string }): Promise<string>;
  reviewSummary(input: { productId: string }): Promise<string>;
  visualSearch(input: { fileName: string; styleName?: string | undefined }): Promise<{ note: string; productIds: string[] }>;
  searchAnswer(input: { query: string }): Promise<SearchAnswerResult>;
}
