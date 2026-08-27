import { products, type Concern, type Product } from "@/data/products";
import { brands } from "@/data/brands";
import { markets } from "@/lib/localization";
import type {
  AIService,
  BeautyProfile,
  ConciergeMessage,
  RoutineResult,
  SearchAnswerResult,
} from "./types";

/**
 * MOCK INTELLIGENCE LAYER : deterministic, rule-based responses simulating
 * a high-performance LLM / RAG beauty concierge service.
 *
 * SAFETY GUARDRAIL:
 * It never diagnoses clinical illnesses; always phrases advice in terms of
 * "commonly used for" / "formulated to support" / "consult a dermatologist for persistent concerns".
 */

const MEDICAL_FLAGS = [
  "cyst",
  "bleeding",
  "infection",
  "rash all over",
  "severe eczema",
  "psoriasis",
  "hair loss patches",
  "alopecia",
  "burn",
  "fungal",
  "prescription",
];

const CONCERN_KEYWORDS: Record<Concern, string[]> = {
  acne: ["acne", "pimple", "breakout", "congest", "blackhead", "oily", "blemish", "sebum"],
  pigmentation: ["pigment", "mark", "dark spot", "tan", "uneven", "melasma", "discolor"],
  dryness: ["dry", "dehydrat", "flak", "tight", "parched", "rough"],
  dullness: ["dull", "glow", "radian", "tired skin", "bright", "lackluster"],
  aging: ["age", "ageing", "aging", "fine line", "wrinkle", "firm", "mature"],
  sun: ["sun", "spf", "sunscreen", "uv", "tanning", "photo"],
  "hair-fall": ["hair fall", "hairfall", "thinning", "shedding", "density"],
  frizz: ["frizz", "dry hair", "rough hair", "unmanage", "flyaway", "curly"],
  scalp: ["scalp", "dandruff", "itchy head", "flaking scalp"],
  makeup: ["makeup", "lipstick", "foundation", "look", "cosmetic", "tint"],
  baby: ["baby", "infant", "toddler", "kid", "gentle wash"],
  grooming: ["men", "beard", "shave", "grooming", "guy", "male"],
  wellness: ["supplement", "nutrition", "inside out", "collagen", "biotin", "health"],
};

export const detectConcerns = (text: string): Concern[] => {
  const lower = text.toLowerCase();
  const found = (Object.keys(CONCERN_KEYWORDS) as Concern[]).filter((c) =>
    CONCERN_KEYWORDS[c].some((k) => lower.includes(k)),
  );
  return found.length ? found : ["dullness"];
};

const detectMarket = (text: string) => {
  const lower = text.toLowerCase();
  return markets.find(
    (m) => lower.includes(m.city.toLowerCase()) || lower.includes(m.country.toLowerCase()),
  );
};

const pick = (
  concerns: Concern[],
  step: string,
  audience?: BeautyProfile["audience"],
  budget?: BeautyProfile["budget"],
): Product => {
  const pool = products.filter((p) => p.step === step);
  let scoped = audience === "men" ? pool.filter((p) => p.category === "men") : pool;
  if (!scoped.length) scoped = pool;
  if (!scoped.length) scoped = products;

  // Filter by budget if requested
  if (budget === "value") {
    const valuePicks = scoped.filter((p) => p.price <= 499);
    if (valuePicks.length) scoped = valuePicks;
  }

  return scoped.find((p) => p.concerns.some((c) => concerns.includes(c))) ?? scoped[0]!;
};

export const buildRoutine = (profile: BeautyProfile): RoutineResult => {
  const concerns = profile.concerns.length ? profile.concerns : (["dullness"] as Concern[]);
  const market = markets.find((m) => m.code === profile.marketCode);
  const hairFocus = concerns.some((c) => ["hair-fall", "frizz", "scalp"].includes(c));
  const babyFocus = concerns.includes("baby");
  const menFocus = concerns.includes("grooming") || profile.audience === "men";

  let slots;
  if (babyFocus) {
    slots = [
      {
        step: "Gentle Cleanse",
        product: products.find((p) => p.category === "baby") ?? pick(concerns, "wash"),
        time: "both" as const,
        reason: "Mild, tear-free formulation suitable for delicate infant skin barriers.",
      },
      {
        step: "Hydrate & Protect",
        product: products.find((p) => p.id === "me-ubtan-face-wash") ?? pick(concerns, "hydrate"),
        time: "both" as const,
        reason: "Gentle nourishment without artificial fragrances or harsh surfactants.",
      },
    ];
  } else if (menFocus) {
    slots = [
      {
        step: "Daily Cleanse",
        product: products.find((p) => p.id === "rg-charcoal-face-wash") ?? pick(concerns, "cleanse", "men"),
        time: "both" as const,
        reason: "Activated charcoal draws out pollution and excess oil in under 30 seconds.",
      },
      {
        step: "Targeted Hydration",
        product: pick(concerns, "hydrate"),
        time: "both" as const,
        reason: "Lightweight gel texture absorbs instantly with no greasy sheen under facial hair.",
      },
      {
        step: "UV Shield",
        product: pick(concerns, "protect"),
        time: "am" as const,
        reason: "Non-greasy sun defense essential for preventing premature lines and dark spots.",
      },
    ];
  } else if (hairFocus) {
    slots = [
      {
        step: "Pre-wash Treatment",
        product: pick(concerns, "treat"),
        time: "pm" as const,
        reason: "Nourishes the follicular environment before shampooing to reduce mechanical breakage.",
      },
      {
        step: "Salon Wash",
        product: pick(concerns, "wash"),
        time: "am" as const,
        reason: "Smooths the hair cuticle and infuses moisture without weighing down strands.",
      },
      {
        step: "Daily Barrier Protection",
        product: pick(concerns, "protect"),
        time: "am" as const,
        reason: "Completes morning prep with lightweight sun and urban defense.",
      },
    ];
  } else {
    slots = [
      {
        step: "Cleanse",
        product: pick(concerns, "cleanse", profile.audience, profile.budget),
        time: "both" as const,
        reason: "Prepares skin by dissolving surface impurities without disrupting the lipid mantle.",
      },
      {
        step: "Treat (Actives)",
        product: pick(concerns, "treat", profile.audience, profile.budget),
        time: "pm" as const,
        reason: "Selected targeted active to address your primary concern at proven concentration.",
      },
      {
        step: "Hydrate",
        product: pick(concerns, "hydrate", profile.audience, profile.budget),
        time: "both" as const,
        reason: market?.climate.includes("Humid")
          ? "Water-light fluid engineered to hydrate without feeling occlusive in humidity."
          : "Cushions active treatments and prevents transepidermal water loss.",
      },
      {
        step: "Protect (SPF)",
        product: pick(concerns, "protect", profile.audience, profile.budget),
        time: "am" as const,
        reason: "Non-negotiable daily defense to protect your skin barrier and prevent UV damage.",
      },
    ];
  }

  // Effort trimming
  let trimmed = slots;
  if (profile.effort === "minimal" && slots.length > 2) {
    trimmed = [slots[0]!, slots[slots.length - 1]!];
  } else if (profile.effort === "balanced" && slots.length > 3) {
    trimmed = slots.slice(0, 3);
  }

  const totalCostInr = trimmed.reduce((acc, s) => acc + s.product.price, 0);

  return {
    title: babyFocus
      ? "Gentle Baby Care Routine"
      : menFocus
        ? "Streamlined Men's Daily Regimen"
        : hairFocus
          ? "Cuticle & Scalp Routine"
          : "Personalized Honasa Routine",
    summary: market
      ? `Tailored for ${concerns.join(" + ")} in ${market.country} (${market.climate}). ${market.climateNote}`
      : `Built around ${concerns.join(" + ")} across Honasa's specialized houses, optimized for your daily rhythm.`,
    slots: trimmed.map((s) => ({
      step: s.step,
      productId: s.product.id,
      time: s.time,
      reason: s.reason,
    })),
    totalCostInr,
    caution:
      "General product guidance only : not a clinical diagnosis. If experiencing persistent irritation or pain, please consult a dermatologist.",
  };
};

export const mockAIService: AIService = {
  async concierge({ message, profile }) {
    await new Promise((r) => setTimeout(r, 650)); // realistic streaming delay

    const lower = message.toLowerCase();

    // 1. Safety check
    if (MEDICAL_FLAGS.some((flag) => lower.includes(flag))) {
      return {
        id: `msg-${Date.now()}`,
        role: "assistant",
        text: "It sounds like you may be experiencing a clinical or spreading skin condition. While Honasa offers supportive daily personal care, our products are not medical treatments. We strongly encourage having this examined by a qualified dermatologist or medical practitioner before introducing new active formulas.",
      };
    }

    // 2. Budget adjustment inquiry
    if (lower.includes("expensive") || lower.includes("budget") || lower.includes("cheaper") || lower.includes("under 1000")) {
      const budgetRoutine = buildRoutine({ ...profile, budget: "value", effort: "minimal" });
      return {
        id: `msg-${Date.now()}`,
        role: "assistant",
        text: "I understand completely! Let's streamline this into a high-impact, budget-friendly 2-step essentials routine. We keep the most critical steps (a gentle cleanser and daily broad-spectrum SPF) while holding the total price down.",
        routine: budgetRoutine,
      };
    }

    // 3. Complexity simplification inquiry
    if (lower.includes("simple") || lower.includes("lazy") || lower.includes("2 step") || lower.includes("quick") || lower.includes("minimal")) {
      const quickRoutine = buildRoutine({ ...profile, effort: "minimal" });
      return {
        id: `msg-${Date.now()}`,
        role: "assistant",
        text: "Here is your simplified minimalist routine. By focusing on Cleanse + Protect, you get 80% of the long-term benefits in under 90 seconds every morning.",
        routine: quickRoutine,
      };
    }

    // 4. Extract concerns and location
    const detected = detectConcerns(message);
    const matchedMarket = detectMarket(message);
    const combinedProfile: BeautyProfile = {
      ...profile,
      concerns: detected,
      marketCode: matchedMarket ? matchedMarket.code : profile.marketCode,
    };

    const routine = buildRoutine(combinedProfile);

    let intro = `Based on your note regarding ${detected.join(" and ")}, here is an intelligent cross-brand routine tailored from across the Honasa house.`;
    if (matchedMarket) {
      intro += ` I have calibrated the textures for ${matchedMarket.country}'s ${matchedMarket.climate.toLowerCase()} conditions.`;
    }

    return {
      id: `msg-${Date.now()}`,
      role: "assistant",
      text: `${intro} Each product has been selected for clean synergy and zero active conflict.`,
      routine,
    };
  },

  async routine({ profile }) {
    await new Promise((r) => setTimeout(r, 450));
    return buildRoutine(profile);
  },

  async productGuide({ productId, question }) {
    await new Promise((r) => setTimeout(r, 400));
    const p = products.find((x) => x.id === productId);
    const q = question.toLowerCase();

    if (!p) return "Product not found. Please select an active product.";

    if (q.includes("vitamin c") || q.includes("layer")) {
      if (p.id.includes("salicylic")) {
        return "Because this serum contains 2% Salicylic Acid (BHA), we recommend using Vitamin C in the morning under sunscreen and reserving this BHA serum for nighttime application to prevent pH interference and potential tingling.";
      }
      return `Yes, ${p.name} pairs very well with Vitamin C. Apply thin water-based serums first, followed by this formula, and finish with daily sunscreen.`;
    }

    if (q.includes("often") || q.includes("frequency")) {
      return `For beginners, introduce ${p.name} 2 to 3 times per week. Once your skin tolerance is established, you can safely move to ${p.usage.toLowerCase()}`;
    }

    if (q.includes("makeup") || q.includes("pill")) {
      return `${p.name} features an ultra-lightweight water-burst texture that absorbs cleanly within 30 seconds. It will not pill or ball up under foundation or concealer.`;
    }

    return `${p.name} is formulated with ${p.ingredients.map((i) => i.name).join(", ")}. It is designed to be ${p.benefit.toLowerCase()} and fits smoothly into your ${p.step} step.`;
  },

  async reviewSummary({ productId }) {
    await new Promise((r) => setTimeout(r, 350));
    const p = products.find((x) => x.id === productId);
    if (!p) return "No review summary available.";

    return `Based on ${p.reviews.toLocaleString()} verified customer reviews:
• 91% reported visible improvement in ${p.concerns[0] ?? "skin clarity"} within 3 weeks.
• Frequent praise for non-greasy absorption and zero pore clogging in humid weather.
• Less than 1.4% reported initial mild purging, which resolved within 7 days.`;
  },

  async visualSearch({ fileName, styleName }) {
    await new Promise((r) => setTimeout(r, 600));
    const s = (styleName || fileName).toLowerCase();

    if (s.includes("hair") || s.includes("blowout") || s.includes("curl")) {
      return {
        note: "Detected: Salon texture, frizz-control and high-shine hair finish.",
        productIds: ["bb-intense-moisture-shampoo", "me-onion-hair-oil"],
      };
    }

    if (s.includes("glow") || s.includes("dewy") || s.includes("glass")) {
      return {
        note: "Detected: Dewy glass skin look with luminous finish and hydrated barrier.",
        productIds: ["aq-glow-sunscreen", "ds-haldi-vitc-serum", "aq-hydrate-gel"],
      };
    }

    if (s.includes("makeup") || s.includes("lip") || s.includes("matte")) {
      return {
        note: "Detected: High-definition lip color with long-wear matte pigment.",
        productIds: ["st-long-wear-lip", "aq-glow-sunscreen"],
      };
    }

    return {
      note: "Detected: Balanced, fresh everyday skin routine with clean clarifying actives.",
      productIds: ["me-ubtan-face-wash", "tdc-salicylic-serum", "aq-glow-sunscreen"],
    };
  },

  async searchAnswer({ query }) {
    await new Promise((r) => setTimeout(r, 450));
    const q = query.toLowerCase();
    const detectedConcerns = detectConcerns(query);

    // Matching products
    const matchedProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.concerns.some((c) => q.includes(c) || detectedConcerns.includes(c)) ||
        p.ingredients.some((i) => q.includes(i.name.toLowerCase())),
    );

    // Matching brands
    const matchedBrandSlugs = brands
      .filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.positioning.toLowerCase().includes(q) ||
          b.desires.some((d) => q.includes(d)),
      )
      .map((b) => b.slug);

    const routine = buildRoutine({ concerns: detectedConcerns });

    const aiAnswer = `For "${query}", the Honasa ecosystem addresses this through specialized science and clean formulations. ${
      detectedConcerns.includes("acne")
        ? "The Derma Co. provides dermatologist-grade BHA actives to clarify pores, while Aqualogica delivers weightless hydration that prevents irritation without clogging."
        : detectedConcerns.includes("sun")
          ? "Aqualogica and Dr. Sheth's offer broad-spectrum SPF 50+ PA++++ formulations that leave zero white cast on warm undertones and withstand sweat."
          : "We recommend pairing gentle natural botanical cleansing with targeted science-backed active serums."
    }`;

    return {
      query,
      aiAnswer,
      matchedProductIds: matchedProducts.slice(0, 6).map((p) => p.id),
      matchedBrandSlugs: matchedBrandSlugs.length ? matchedBrandSlugs : ["the-derma-co", "aqualogica"],
      suggestedRoutine: routine,
      editorialArticleIds: ["art-active-layering", "art-climate-routine"],
    };
  },
};
