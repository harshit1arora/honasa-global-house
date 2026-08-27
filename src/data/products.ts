export type Category =
  | "skin"
  | "hair"
  | "body"
  | "baby"
  | "makeup"
  | "men"
  | "wellness";

export type Concern =
  | "acne"
  | "pigmentation"
  | "dryness"
  | "dullness"
  | "aging"
  | "sun"
  | "hair-fall"
  | "frizz"
  | "scalp"
  | "makeup"
  | "baby"
  | "grooming"
  | "wellness";

export type RoutineStep = "cleanse" | "treat" | "hydrate" | "protect" | "wash" | "style" | "colour" | "supplement";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  step: RoutineStep;
  price: number; // base price in INR
  size: string;
  benefit: string;
  ingredients: { name: string; role: string; note: string }[];
  concerns: Concern[];
  skinTypes: string[];
  rating: number;
  reviews: number;
  vegan: boolean;
  crueltyFree: boolean;
  usage: string;
  why: string;
  image: string;
}

const IMG = {
  nature: "world-nature",
} as const;
void IMG;

export const products: Product[] = [
  {
    id: "me-rice-dewy-facewash",
    name: "Rice Dewy Bright Face Wash",
    brand: "Mamaearth",
    category: "skin",
    step: "cleanse",
    price: 359,
    size: "150 ml",
    benefit: "Gently cleanses, hydrates & brightens skin for a glass skin finish",
    ingredients: [
      { name: "Rice Water", role: "Glass skin hydration", note: "Rich in minerals to clear and hydrate skin." },
      { name: "Niacinamide (B3+)", role: "Tone support", note: "Helps fade dark spots and support barrier radiance." },
    ],
    concerns: ["dullness", "dryness", "pigmentation"],
    skinTypes: ["all"],
    rating: 4.6,
    reviews: 306,
    vegan: true,
    crueltyFree: true,
    usage: "Lather onto damp face morning and night, massage gently and rinse.",
    why: "Combines ferment-inspired rice water with clinical B3+ for daily glass skin radiance.",
    image: "me-rice-facewash",
  },
  {
    id: "me-rosemary-shampoo",
    name: "Rosemary Anti-Hair Fall Shampoo",
    brand: "Mamaearth",
    category: "hair",
    step: "wash",
    price: 314,
    size: "250 ml",
    benefit: "Removes mineral buildup from hard water & strengthens hair against hair fall",
    ingredients: [
      { name: "Rosemary Oil", role: "Scalp stimulation", note: "Promotes healthier microcirculation around hair follicles." },
      { name: "Methi Dana (Fenugreek)", role: "Strength complex", note: "Traditional seed protein that combats breakage." },
      { name: "Sodium Gluconate", role: "Hard water chelator", note: "Binds and neutralizes mineral deposits causing stiffness." },
    ],
    concerns: ["hair-fall", "scalp", "frizz"],
    skinTypes: ["all hair"],
    rating: 4.7,
    reviews: 214,
    vegan: true,
    crueltyFree: true,
    usage: "Apply generously to damp scalp and hair, lather thoroughly and rinse.",
    why: "Hard water minerals strip hair elasticity; this formula neutralizes heavy deposits.",
    image: "me-rosemary-shampoo",
  },
  {
    id: "me-ubtan-face-wash",
    name: "Ubtan Natural Glow Face Wash",
    brand: "Mamaearth",
    category: "skin",
    step: "cleanse",
    price: 359,
    size: "150 ml",
    benefit: "Tan removal and natural radiance with Turmeric & Saffron",
    ingredients: [
      { name: "Turmeric", role: "Tan removal", note: "Antioxidant-rich herb used for natural skin radiance." },
      { name: "Saffron", role: "Luminous tone", note: "Calms redness and enhances natural skin tone." },
      { name: "Walnut Beads", role: "Gentle exfoliation", note: "Sloughs off dead surface cells and environmental pollution." },
    ],
    concerns: ["dullness", "pigmentation", "sun"],
    skinTypes: ["normal", "oily", "combination"],
    rating: 4.8,
    reviews: 545,
    vegan: true,
    crueltyFree: true,
    usage: "Massage onto wet face, focusing on tanned areas, then rinse thoroughly.",
    why: "India's No. 1 Ubtan formula for instant glow and pollution tan defense.",
    image: "me-ubtan-facewash",
  },
  {
    id: "me-moisture-matte-lipstick",
    name: "Moisture Matte Longstay Lipstick",
    brand: "Mamaearth",
    category: "makeup",
    step: "colour",
    price: 449,
    size: "2 g",
    benefit: "12-hour long stay with 8-hour moisture matte finish",
    ingredients: [
      { name: "Avocado Oil", role: "Moisture seal", note: "Keeps lips nourished without cracking or drying out." },
      { name: "Vitamin E", role: "Antioxidant comfort", note: "Prevents pigmentation and softens lip texture." },
    ],
    concerns: ["makeup"],
    skinTypes: ["all"],
    rating: 4.8,
    reviews: 180,
    vegan: true,
    crueltyFree: true,
    usage: "Glide smoothly onto upper and lower lips. Reapply as desired.",
    why: "MadeSafe certified lipstick delivering intense pigment with zero toxic chemicals.",
    image: "makeup",
  },
  {
    id: "me-lemon-shampoo",
    name: "Lemon Anti-Dandruff Shampoo",
    brand: "Mamaearth",
    category: "hair",
    step: "wash",
    price: 279,
    size: "250 ml",
    benefit: "Up to 100% dandruff reduction in 1 wash with Lemon & Aloe Vera",
    ingredients: [
      { name: "Lemon Extract", role: "Scalp balancing", note: "Natural citric acid that regulates excess sebum and flakes." },
      { name: "Aloe Vera", role: "Scalp soothing", note: "Cools itchy scalp irritation while maintaining moisture." },
    ],
    concerns: ["scalp", "hair-fall", "frizz"],
    skinTypes: ["all hair"],
    rating: 4.8,
    reviews: 168,
    vegan: true,
    crueltyFree: true,
    usage: "Massage into wet scalp, leave for 2 minutes, then rinse completely.",
    why: "Eliminates stubborn dandruff flakes without drying out the natural hair shaft.",
    image: "me-lemon-shampoo",
  },
  {
    id: "tdc-salicylic-serum",
    name: "2% Salicylic Acid Serum",
    brand: "The Derma Co.",
    category: "skin",
    step: "treat",
    price: 599,
    size: "30 ml",
    benefit: "Commonly used for congestion and breakout-prone skin",
    ingredients: [
      { name: "Salicylic Acid 2%", role: "BHA exfoliant", note: "Oil-soluble, so it works inside the pore lining." },
      { name: "Zinc PCA", role: "Oil balance", note: "Often paired with BHAs on oilier skin." },
      { name: "Panthenol", role: "Buffer", note: "Helps offset the dryness actives can cause." },
    ],
    concerns: ["acne", "dullness"],
    skinTypes: ["oily", "combination"],
    rating: 4.4,
    reviews: 9310,
    vegan: true,
    crueltyFree: true,
    usage: "Start 3 nights a week on clean skin, then build up if skin stays comfortable.",
    why: "A well-studied active for congestion, at a percentage that suits beginners.",
    image: "tdc-salicylic-serum",
  },
  {
    id: "tdc-niacinamide-serum",
    name: "10% Niacinamide Serum",
    brand: "The Derma Co.",
    category: "skin",
    step: "treat",
    price: 549,
    size: "30 ml",
    benefit: "May help the look of marks left behind by breakouts",
    ingredients: [
      { name: "Niacinamide 10%", role: "Tone support", note: "Widely used for uneven tone and visible pores." },
      { name: "Zinc", role: "Sebum support", note: "Frequently formulated alongside niacinamide." },
    ],
    concerns: ["pigmentation", "acne"],
    skinTypes: ["oily", "combination", "normal"],
    rating: 4.5,
    reviews: 14020,
    vegan: true,
    crueltyFree: true,
    usage: "Once daily, morning or night, before moisturiser.",
    why: "Pairs calmly with most routines and rarely competes with other steps.",
    image: "tdc-niacinamide-serum",
  },
  {
    id: "aq-glow-sunscreen",
    name: "Glow+ Dewy Sunscreen SPF 50",
    brand: "Aqualogica",
    category: "skin",
    step: "protect",
    price: 449,
    size: "50 g",
    benefit: "Lightweight broad-spectrum protection with a dewy finish",
    ingredients: [
      { name: "Hyaluronic Acid", role: "Hydration", note: "Holds water at the surface for a plumper look." },
      { name: "Papaya Extract", role: "Fresh finish", note: "Part of the brand's fruit-led signature." },
    ],
    concerns: ["sun", "dryness", "pigmentation"],
    skinTypes: ["all"],
    rating: 4.6,
    reviews: 22190,
    vegan: true,
    crueltyFree: true,
    usage: "Every morning as the last skincare step. Reapply through long sun exposure.",
    why: "Sun care is the step that protects everything else you spend money on.",
    image: "aq-glow-sunscreen",
  },
  {
    id: "aq-hydrate-gel",
    name: "Hydrate+ Dewy Gel Moisturiser",
    brand: "Aqualogica",
    category: "skin",
    step: "hydrate",
    price: 399,
    size: "50 g",
    benefit: "Water-light hydration for humid climates",
    ingredients: [
      { name: "Coconut Water", role: "Light hydration", note: "Absorbs quickly without a heavy film." },
      { name: "Hyaluronic Acid", role: "Humectant", note: "Layers well under sunscreen." },
    ],
    concerns: ["dryness", "dullness"],
    skinTypes: ["oily", "combination"],
    rating: 4.4,
    reviews: 11800,
    vegan: true,
    crueltyFree: true,
    usage: "Twice daily after serum.",
    why: "Keeps actives comfortable without adding weight in heat and humidity.",
    image: "aq-hydrate-gel",
  },
  {
    id: "ds-haldi-vitc-serum",
    name: "Haldi & Vitamin C Serum",
    brand: "Dr. Sheth's",
    category: "skin",
    step: "treat",
    price: 699,
    size: "30 ml",
    benefit: "Morning radiance step for dull-looking skin",
    ingredients: [
      { name: "Vitamin C", role: "Antioxidant", note: "Commonly used in the morning under sunscreen." },
      { name: "Haldi (Turmeric)", role: "Traditional brightener", note: "A long-standing Indian skincare ingredient." },
    ],
    concerns: ["dullness", "pigmentation", "aging"],
    skinTypes: ["all"],
    rating: 4.5,
    reviews: 6420,
    vegan: true,
    crueltyFree: true,
    usage: "Each morning on clean skin, followed by moisturiser and sunscreen.",
    why: "Pairs a modern antioxidant with an ingredient many people already trust.",
    image: "ds-haldi-vitc-serum",
  },
  {
    id: "bb-intense-moisture-shampoo",
    name: "Intense Moisture Shampoo",
    brand: "BBlunt",
    category: "hair",
    step: "wash",
    price: 545,
    size: "250 ml",
    benefit: "Softer, more manageable hair after washing",
    ingredients: [
      { name: "Argan Oil", role: "Smoothing", note: "Helps hair feel less rough through drying." },
      { name: "Provitamin B5", role: "Moisture", note: "Frequently used for dry, brittle-feeling hair." },
    ],
    concerns: ["frizz", "dryness"],
    skinTypes: ["dry hair", "frizzy hair"],
    rating: 4.3,
    reviews: 5310,
    vegan: false,
    crueltyFree: true,
    usage: "Two to three washes a week, focusing on the scalp.",
    why: "Frizz is usually a moisture problem before it is a styling problem.",
    image: "bb-intense-shampoo",
  },
  {
    id: "me-onion-hair-oil",
    name: "Onion Hair Oil",
    brand: "Mamaearth",
    category: "hair",
    step: "treat",
    price: 399,
    size: "150 ml",
    benefit: "Pre-wash oiling ritual for hair that feels weak",
    ingredients: [
      { name: "Onion Oil", role: "Scalp ritual", note: "A widely used ingredient in Indian hair care." },
      { name: "Redensyl", role: "Hair care active", note: "Included in many hair-thinning focused formulas." },
    ],
    concerns: ["hair-fall", "scalp"],
    skinTypes: ["all hair"],
    rating: 4.4,
    reviews: 31200,
    vegan: true,
    crueltyFree: true,
    usage: "Massage into the scalp 30-60 minutes before washing, twice a week.",
    why: "A habit-friendly step for people worried about hair thinning. Persistent hair loss deserves a doctor's opinion.",
    image: "me-onion-hairoil",
  },
  {
    id: "st-long-wear-lip",
    name: "Stay-All-Day Liquid Lip",
    brand: "Staze",
    category: "makeup",
    step: "colour",
    price: 649,
    size: "5 ml",
    benefit: "Full-pigment colour built for long days",
    ingredients: [
      { name: "Vitamin E", role: "Comfort", note: "Softens the feel of a long-wear formula." },
      { name: "Film formers", role: "Wear time", note: "Keeps colour in place through meals and heat." },
    ],
    concerns: ["makeup"],
    skinTypes: ["all"],
    rating: 4.2,
    reviews: 2140,
    vegan: true,
    crueltyFree: true,
    usage: "Apply from the centre outwards, let it set for 30 seconds.",
    why: "Long wear without the tight, cracked finish long wear usually means.",
    image: "st-liquid-lip",
  },
  {
    id: "lu-night-repair-cream",
    name: "Overnight Renewal Cream",
    brand: "Luminéve",
    category: "skin",
    step: "hydrate",
    price: 899,
    size: "50 g",
    benefit: "A richer final step for the evening",
    ingredients: [
      { name: "Peptides", role: "Firm-look support", note: "Common in evening-focused skincare." },
      { name: "Squalane", role: "Barrier feel", note: "Helps skin feel cushioned overnight." },
    ],
    concerns: ["aging", "dryness"],
    skinTypes: ["dry", "normal"],
    rating: 4.6,
    reviews: 1870,
    vegan: true,
    crueltyFree: true,
    usage: "Every evening as the last step.",
    why: "Evenings are when most people are actually consistent.",
    image: "lu-night-repair",
  },
  {
    id: "rg-charcoal-face-wash",
    name: "Charcoal Daily Face Wash",
    brand: "Reginald Men",
    category: "men",
    step: "cleanse",
    price: 299,
    size: "100 ml",
    benefit: "A quick, no-nonsense cleanse for oilier skin",
    ingredients: [
      { name: "Activated Charcoal", role: "Fresh finish", note: "Popular in grooming formulas for a clean feel." },
      { name: "Menthol", role: "Cooling", note: "Gives an immediate refreshed sensation." },
    ],
    concerns: ["grooming", "acne"],
    skinTypes: ["oily", "combination"],
    rating: 4.1,
    reviews: 3260,
    vegan: true,
    crueltyFree: true,
    usage: "Morning and after workouts.",
    why: "The one step most men will actually do every day.",
    image: "men",
  },
  {
    id: "me-baby-shampoo",
    name: "Gentle Cleansing Baby Shampoo",
    brand: "Mamaearth",
    category: "baby",
    step: "wash",
    price: 299,
    size: "200 ml",
    benefit: "Mild, tear-free bath-time cleanse",
    ingredients: [
      { name: "Oat Protein", role: "Mildness", note: "Chosen for very sensitive scalps." },
      { name: "Coconut-derived cleansers", role: "Gentle wash", note: "Low-irritation surfactant base." },
    ],
    concerns: ["baby"],
    skinTypes: ["sensitive"],
    rating: 4.7,
    reviews: 26400,
    vegan: true,
    crueltyFree: true,
    usage: "As needed at bath time.",
    why: "Made for the most cautious buyer in the household.",
    image: "baby",
  },
  {
    id: "hh-glow-collagen",
    name: "Inside-Out Glow Blend",
    brand: "Honasa Health",
    category: "wellness",
    step: "supplement",
    price: 999,
    size: "200 g",
    benefit: "An inside-out addition to a beauty routine",
    ingredients: [
      { name: "Vitamin C", role: "Everyday nutrient", note: "Part of general nutritional support." },
      { name: "Biotin", role: "Hair and nail nutrient", note: "Commonly included in beauty nutrition." },
    ],
    concerns: ["wellness", "dullness"],
    skinTypes: ["all"],
    rating: 4.2,
    reviews: 640,
    vegan: false,
    crueltyFree: true,
    usage: "One serving daily with water. Not a substitute for medical advice or a balanced diet.",
    why: "Beauty routines increasingly start with nutrition, not only topicals.",
    image: "nature",
  },
];

export const concernLabels: Record<Concern, string> = {
  acne: "Acne",
  pigmentation: "Pigmentation",
  dryness: "Dryness",
  dullness: "Dullness",
  aging: "Ageing",
  sun: "Sun protection",
  "hair-fall": "Hair fall",
  frizz: "Frizz",
  scalp: "Scalp",
  makeup: "Makeup",
  baby: "Baby care",
  grooming: "Men's grooming",
  wellness: "Wellness",
};

export const categoryLabels: Record<Category, string> = {
  skin: "Skin",
  hair: "Hair",
  body: "Body",
  baby: "Baby",
  makeup: "Makeup",
  men: "Men's Grooming",
  wellness: "Wellness",
};

export const getProduct = (id: string) => products.find((p) => p.id === id);
