import worldNature from "@/assets/world-nature.jpg";
import worldScience from "@/assets/world-science.jpg";
import worldHydration from "@/assets/world-hydration.jpg";
import worldHair from "@/assets/world-hair.jpg";
import worldMakeup from "@/assets/world-makeup.jpg";
import worldNight from "@/assets/world-night.jpg";
import worldMen from "@/assets/world-men.jpg";
import worldDerm from "@/assets/world-derm.jpg";

export type BrandDesire =
  | "nature"
  | "science"
  | "hydration"
  | "hair"
  | "makeup"
  | "men"
  | "night"
  | "wellness";

export interface Brand {
  slug: string;
  name: string;
  wordmark: string;
  positioning: string;
  description: string;
  consumerProblem: string;
  heroProductId: string;
  image: string;
  accent: string;
  accentForeground: string;
  desires: BrandDesire[];
  worldLine: string;
}

/**
 * Positioning copy is written from publicly stated brand propositions.
 * No performance, clinical or sustainability figures are asserted here.
 */
export const brands: Brand[] = [
  {
    slug: "mamaearth",
    name: "Mamaearth",
    wordmark: "MAMAEARTH",
    positioning: "Nature-led everyday beauty and care",
    description:
      "The brand that started Honasa. Gentle, natural-first formulations for faces, bodies, hair and babies : made for daily life rather than special occasions.",
    consumerProblem: "“I want something gentle I can trust for my whole family.”",
    heroProductId: "me-ubtan-face-wash",
    image: worldNature,
    accent: "oklch(0.56 0.11 145)",
    accentForeground: "oklch(0.98 0.005 145)",
    desires: ["nature", "hair"],
    worldLine: "Everyday care, rooted in nature.",
  },
  {
    slug: "the-derma-co",
    name: "The Derma Co.",
    wordmark: "THE DERMA CO.",
    positioning: "Science-backed active skincare",
    description:
      "Concern-first skincare built around well-studied actives and clear percentages, for people who want to know exactly what they are putting on their skin.",
    consumerProblem: "“I have acne and marks and I want actives that make sense.”",
    heroProductId: "tdc-salicylic-serum",
    image: worldScience,
    accent: "oklch(0.52 0.14 250)",
    accentForeground: "oklch(0.98 0.005 250)",
    desires: ["science"],
    worldLine: "Actives, explained.",
  },
  {
    slug: "aqualogica",
    name: "Aqualogica",
    wordmark: "AQUALOGICA",
    positioning: "Hydration and fresh, glowing skin",
    description:
      "Fruit-and-water inspired hydration for humid mornings and long days : lightweight textures that sit well under sun care and makeup.",
    consumerProblem: "“My skin feels dehydrated but I hate heavy creams.”",
    heroProductId: "aq-glow-sunscreen",
    image: worldHydration,
    accent: "oklch(0.65 0.13 220)",
    accentForeground: "oklch(0.2 0.02 220)",
    desires: ["hydration"],
    worldLine: "Water, fruit, glow.",
  },
  {
    slug: "bblunt",
    name: "BBlunt",
    wordmark: "BBLUNT",
    positioning: "Salon-inspired haircare and styling",
    description:
      "Born in the salon chair. Haircare and styling for shine, hold and blowout-style finish you can recreate at home.",
    consumerProblem: "“I want salon hair without the salon appointment.”",
    heroProductId: "bb-intense-moisture-shampoo",
    image: worldHair,
    accent: "oklch(0.55 0.18 15)",
    accentForeground: "oklch(0.98 0.005 15)",
    desires: ["hair"],
    worldLine: "Salon language, at home.",
  },
  {
    slug: "dr-sheths",
    name: "Dr. Sheth's",
    wordmark: "DR. SHETH'S",
    positioning: "Dermatologist-rooted skincare with Indian ingredients",
    description:
      "Formulated in a dermatologist lineage, pairing modern skincare science with ingredients long used in Indian skincare tradition.",
    consumerProblem: "“I want dermatologist thinking, made for my skin tone.”",
    heroProductId: "ds-haldi-vitc-serum",
    image: worldDerm,
    accent: "oklch(0.66 0.14 70)",
    accentForeground: "oklch(0.2 0.02 70)",
    desires: ["science", "nature"],
    worldLine: "Derm science, Indian roots.",
  },
  {
    slug: "staze",
    name: "Staze",
    wordmark: "STAZE",
    positioning: "High-performance makeup",
    description:
      "Long-wear colour built for heat, humidity and full days : pigment that behaves like skincare underneath.",
    consumerProblem: "“I need makeup that survives my day.”",
    heroProductId: "st-long-wear-lip",
    image: worldMakeup,
    accent: "oklch(0.52 0.2 20)",
    accentForeground: "oklch(0.98 0.005 20)",
    desires: ["makeup"],
    worldLine: "Colour that stays.",
  },
  {
    slug: "lumineve",
    name: "Luminéve",
    wordmark: "LUMINÉVE",
    positioning: "Night-focused skincare",
    description:
      "A quieter ritual for the hours your skin repairs : richer textures, slower steps, evening-appropriate actives.",
    consumerProblem: "“My evenings are the only time I actually care for my skin.”",
    heroProductId: "lu-night-repair-cream",
    image: worldNight,
    accent: "oklch(0.5 0.12 285)",
    accentForeground: "oklch(0.98 0.005 285)",
    desires: ["night"],
    worldLine: "The night shift.",
  },
  {
    slug: "reginald-men",
    name: "Reginald Men",
    wordmark: "REGINALD",
    positioning: "Men's personal care",
    description:
      "Grooming without the guesswork : short routines for beard, hair, face and body that men actually keep up with.",
    consumerProblem: "“Give me three products, not thirteen.”",
    heroProductId: "rg-charcoal-face-wash",
    image: worldMen,
    accent: "oklch(0.45 0.03 240)",
    accentForeground: "oklch(0.98 0.005 240)",
    desires: ["men"],
    worldLine: "Grooming, simplified.",
  },
];

export const desireLabels: Record<BrandDesire, string> = {
  nature: "Nature",
  science: "Science",
  hydration: "Hydration",
  hair: "Hair",
  makeup: "Makeup",
  men: "Men's grooming",
  night: "Night skincare",
  wellness: "Wellness",
};

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
export const brandByName = (name: string) => brands.find((b) => b.name === name);
