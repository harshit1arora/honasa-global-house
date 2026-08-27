import { brands } from "@/data/brands";
import { products, getProduct } from "@/data/products";
import { markets } from "@/lib/localization";

export interface KnowledgeSnippet {
  category: "company" | "brand" | "product" | "science" | "climate" | "support";
  title: string;
  content: string;
  sourceUrl?: string;
}

export const HONASA_KNOWLEDGE_BASE: KnowledgeSnippet[] = [
  {
    category: "company",
    title: "Honasa Consumer Limited Overview",
    content: `Honasa Consumer Limited is a digital-first, multi-brand personal care house listed on NSE and BSE. Honasa operates eight specialized brand houses: Mamaearth, The Derma Co., Aqualogica, BBlunt, Dr. Sheth's, Staze, Luminéve, and Reginald Men. Instead of generic one-size-fits-all products, Honasa analyzes organic consumer signals and formulates targeted regimens for individual skin biology, hair needs, and global climates.`,
    sourceUrl: "/about",
  },
  {
    category: "company",
    title: "Leadership & Founders",
    content: `Honasa Consumer was founded by Varun Alagh (CEO & Co-founder) and Ghazal Alagh (Chief Innovation Officer & Co-founder). Key leaders include Raman Preet Sohi (CFO), Snigdha Anand (Chief Legal & Compliance Officer), Tarun Aggarwal (VP Technology), and Kaustav Guha (VP R&D).`,
    sourceUrl: "/leadership-team",
  },
  {
    category: "brand",
    title: "The 8 Autonomous Brand Houses",
    content: `1. Mamaearth: Toxin-free botanical science, MadeSafe™ certified, tear-free baby care, Ubtan skin glow range.
2. The Derma Co.: Clinical active dermaceuticals (2% Salicylic Acid, 10% Niacinamide, 15% Vitamin C, 1% Hyaluronic Acid).
3. Aqualogica: Water-light gel hydration and SPF 50 PA++++ sunscreens with zero white-cast.
4. BBlunt: Salon-grade hair care, anti-humidity formulas, heat protection, moisture repair.
5. Dr. Sheth's: Bio-active fusion combining Indian traditional ingredients (Haldi, Kesar, Ashwagandha) with dermatologist actives (Vitamin C, Kojic Acid).
6. Staze: 24-hour longwear color cosmetics, high-pigment zero-smudge makeup.
7. Luminéve: Luxury peptide night repair, squalane complexes, moisture barrier restoration.
8. Reginald Men: Streamlined men's grooming, charcoal face wash, beard oils, 3-in-1 shower gels.`,
    sourceUrl: "/brands",
  },
  {
    category: "science",
    title: "Science & R&D Formulation Standards",
    content: `Every Honasa product undergoes rigorous dermatological stress-testing in environmental chambers at 45°C and 85% relative humidity to guarantee photostability and zero separation. Formulations are 100% dermatologically tested, certified toxin-free (MadeSafe™), and free of parabens, sulfates, mineral oils, and phthalates.`,
    sourceUrl: "/science",
  },
  {
    category: "climate",
    title: "Global Climate Adaptation Engine",
    content: `Formulations are calibrated for specific climate zones:
- India (IN): High humidity & urban exposure (water-burst gel textures, BHA serums).
- UAE (AE): Extreme 45°C heat & UV index 11+ (photostable SPF 50+ & ceramides).
- UK (GB): Cool winds & central heating (lipid-rich squalane & peptide balms).
- US (US): Seasonal atmospheric swings (adaptogenic hydration & niacinamide).
- Singapore (SG): Tropical 85% RH (anti-humidity frizz control & featherweight serums).
- Australia (AU): Intense oceanic UV (water-resistant SPF 50+ & post-sun antioxidants).`,
    sourceUrl: "/",
  },
  {
    category: "support",
    title: "Human Support, Contact & Orders",
    content: `For corporate compliance, investor queries, or human support:
- Compliance Email: compliance@honasa.in
- Registered Address: Honasa Consumer Ltd, Sector 44, Gurugram, Haryana, India.
- Live Order & Routine Consultation: 90-second AI Routine Quiz available on-site.
- Returns & Quality Guarantee: Certified toxin-free, 100% dermatologist tested.`,
    sourceUrl: "/terms-and-conditions",
  },
];

/**
 * Retrieve targeted knowledge context based on user query, current route, and active market.
 */
export function retrieveRelevantKnowledge(
  userQuery: string,
  currentPath?: string,
  marketCode?: string
): { contextText: string; sources: { title: string; url: string }[] } {
  const queryLower = userQuery.toLowerCase();
  const matchedSnippets: KnowledgeSnippet[] = [];
  const sources: { title: string; url: string }[] = [];

  // Match brands
  brands.forEach((brand) => {
    if (
      queryLower.includes(brand.name.toLowerCase()) ||
      queryLower.includes(brand.slug.toLowerCase())
    ) {
      matchedSnippets.push({
        category: "brand",
        title: `House: ${brand.name}`,
        content: `${brand.name} (${brand.positioning}): ${brand.description} Core focus: ${brand.consumerProblem}`,
        sourceUrl: `/brands`,
      });
    }
  });

  // Match products
  products.forEach((prod) => {
    const prodName = prod.name.toLowerCase();
    const prodBrand = prod.brand.toLowerCase();
    const prodBenefit = prod.benefit.toLowerCase();

    if (
      queryLower.includes(prodName) ||
      queryLower.includes(prodBrand) ||
      queryLower.includes(prod.step) ||
      queryLower.split(" ").some((term) => term.length > 3 && prodBenefit.includes(term))
    ) {
      const activeMarket = markets.find((m) => m.code === (marketCode || "IN")) ?? markets[0]!;
      const localizedPrice = `${activeMarket.symbol}${Math.round(prod.price * activeMarket.rate).toLocaleString()}`;

      matchedSnippets.push({
        category: "product",
        title: `Product: ${prod.name}`,
        content: `Product ID: ${prod.id} | Brand: ${prod.brand} | Name: ${prod.name} | Price: ${localizedPrice} (₹${prod.price}) | Benefit: ${prod.benefit} | Step: ${prod.step} | Formulation Role: ${prod.why}`,
        sourceUrl: `/shop`,
      });
    }
  });

  // Match key topic areas
  if (queryLower.includes("acne") || queryLower.includes("oily") || queryLower.includes("bha") || queryLower.includes("salicylic")) {
    const salicylic = getProduct("tdc-salicylic-serum");
    if (salicylic) {
      matchedSnippets.push({
        category: "product",
        title: "Acne Care Recommendation",
        content: `For acne & marks: ${salicylic.brand} ${salicylic.name} (${salicylic.benefit}). Role: ${salicylic.why}`,
        sourceUrl: "/shop",
      });
    }
  }

  if (queryLower.includes("sun") || queryLower.includes("spf") || queryLower.includes("uv") || queryLower.includes("sunscreen")) {
    const sunscreen = getProduct("aq-glow-sunscreen");
    if (sunscreen) {
      matchedSnippets.push({
        category: "product",
        title: "Sun Protection Recommendation",
        content: `For UV protection: ${sunscreen.brand} ${sunscreen.name} (${sunscreen.benefit}). Role: ${sunscreen.why}`,
        sourceUrl: "/shop",
      });
    }
  }

  if (queryLower.includes("hair") || queryLower.includes("frizz") || queryLower.includes("shampoo")) {
    const shampoo = getProduct("bb-intense-moisture-shampoo");
    if (shampoo) {
      matchedSnippets.push({
        category: "product",
        title: "Hair Care Recommendation",
        content: `For dry/frizzy hair: ${shampoo.brand} ${shampoo.name} (${shampoo.benefit}). Role: ${shampoo.why}`,
        sourceUrl: "/shop",
      });
    }
  }

  if (
    queryLower.includes("human") ||
    queryLower.includes("contact") ||
    queryLower.includes("talk") ||
    queryLower.includes("support") ||
    queryLower.includes("email")
  ) {
    const supportSnippet = HONASA_KNOWLEDGE_BASE.find((k) => k.category === "support");
    if (supportSnippet) matchedSnippets.push(supportSnippet);
  }

  // Include general company & science snippet if few matches
  if (matchedSnippets.length < 2) {
    HONASA_KNOWLEDGE_BASE.slice(0, 3).forEach((s) => matchedSnippets.push(s));
  }

  // Format context text
  const contextLines = matchedSnippets.slice(0, 6).map((s) => {
    if (s.sourceUrl) {
      sources.push({ title: s.title, url: s.sourceUrl });
    }
    return `[${s.title}]: ${s.content}`;
  });

  // Deduplicate sources
  const uniqueSources = sources.filter(
    (src, index, self) => index === self.findIndex((t) => t.url === src.url && t.title === src.title)
  );

  return {
    contextText: contextLines.join("\n\n"),
    sources: uniqueSources.slice(0, 3),
  };
}
