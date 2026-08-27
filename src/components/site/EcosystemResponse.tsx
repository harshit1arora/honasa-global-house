import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Building2, ArrowRight, Check, Plus } from "lucide-react";
import { brands } from "@/data/brands";
import { products, concernLabels, getProduct, type Concern } from "@/data/products";
import { useSite } from "@/lib/site-state";

interface NeedOption {
  id: Concern;
  label: string;
  relevantBrandSlugs: string[];
  aiInsight: string;
  suggestedProductIds: string[];
}

const NEED_OPTIONS: NeedOption[] = [
  {
    id: "acne",
    label: "Acne + Marks",
    relevantBrandSlugs: ["the-derma-co", "aqualogica"],
    aiInsight:
      "For active congestion and post-acne marks, The Derma Co. provides clinical 2% Salicylic Acid and 10% Niacinamide, balanced by Aqualogica's non-comedogenic water-light sunscreen.",
    suggestedProductIds: ["tdc-salicylic-serum", "tdc-niacinamide-serum", "aq-glow-sunscreen"] },
  {
    id: "sun",
    label: "Sun Protection + Hydration",
    relevantBrandSlugs: ["aqualogica", "dr-sheths"],
    aiInsight:
      "Aqualogica's Dewy SPF 50 provides zero-white-cast UV shielding, while Dr. Sheth's Haldi & Vitamin C provides morning antioxidant defense against environmental photoaging.",
    suggestedProductIds: ["aq-glow-sunscreen", "aq-hydrate-gel", "ds-haldi-vitc-serum"] },
  {
    id: "dryness",
    label: "Dehydration + Barrier Repair",
    relevantBrandSlugs: ["aqualogica", "lumineve", "dr-sheths"],
    aiInsight:
      "Aqualogica supplies multi-depth hyaluronic acid for day-time hydration, while Luminéve replenishes barrier lipids and squalane through the night.",
    suggestedProductIds: ["aq-hydrate-gel", "lu-night-repair-cream", "me-ubtan-face-wash"] },
  {
    id: "dullness",
    label: "Dullness + Radiance",
    relevantBrandSlugs: ["mamaearth", "dr-sheths", "aqualogica"],
    aiInsight:
      "Mamaearth's traditional Ubtan botanical cleanse pairs synergistically with Dr. Sheth's Haldi & Vitamin C formulation for sustained natural illumination.",
    suggestedProductIds: ["me-ubtan-face-wash", "ds-haldi-vitc-serum", "aq-glow-sunscreen"] },
  {
    id: "frizz",
    label: "Hair Frizz + Breakage",
    relevantBrandSlugs: ["bblunt", "mamaearth"],
    aiInsight:
      "BBlunt's salon-developed Argan and Provitamin formulas smooth cuticle porosity, backed by Mamaearth's nourishing pre-wash onion follicular ritual.",
    suggestedProductIds: ["bb-intense-moisture-shampoo", "me-onion-hair-oil"] },
  {
    id: "grooming",
    label: "Men's Grooming & Clarity",
    relevantBrandSlugs: ["reginald-men", "the-derma-co"],
    aiInsight:
      "Reginald Men streamlines charcoal cleansing and oil control into under 60 seconds, paired with The Derma Co's active pore clarifying serums.",
    suggestedProductIds: ["rg-charcoal-face-wash", "tdc-salicylic-serum"] },
  {
    id: "baby",
    label: "Gentle Baby & Family Care",
    relevantBrandSlugs: ["mamaearth"],
    aiInsight:
      "Mamaearth's foundational Made Safe certified baby care ensures tear-free oat protein cleansers with zero parabens or artificial fragrances.",
    suggestedProductIds: ["me-baby-shampoo"] },
];

export function EcosystemResponse() {
  const {
    selectedConcern,
    setSelectedConcern,
    setActiveProductId,
    addRoutineToCart,
    addToCart,
    price } = useSite();

  const activeNeed = useMemo(() => {
    return NEED_OPTIONS.find((n) => n.id === selectedConcern) ?? NEED_OPTIONS[0]!;
  }, [selectedConcern]);

  const relevantBrandSet = useMemo(() => {
    return new Set(activeNeed.relevantBrandSlugs);
  }, [activeNeed]);

  const routineProducts = useMemo(() => {
    return activeNeed.suggestedProductIds
      .map((id) => getProduct(id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
  }, [activeNeed]);

  const routineCostInr = useMemo(() => {
    return routineProducts.reduce((acc, p) => acc + p.price, 0);
  }, [routineProducts]);

  return (
    <section id="ecosystem-section" className="relative border-b border-border/60 bg-background py-8 md:py-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Targeted Formulations. Zero Confusion.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Select your skin or hair priority to receive a unified routine formulated for you.
          </p>
        </div>

        {/* Interactive Need Selector Chips */}
        <div className="mt-10 flex flex-wrap gap-3">
          {NEED_OPTIONS.map((opt) => {
            const isSelected = activeNeed.id === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedConcern(opt.id)}
                className={`group relative inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]"
                    : "border border-border/80 bg-card text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-clay/40"
                }`}
              >
                {isSelected && <ShieldCheck/>}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* AI Insight Card */}
        <motion.div
          key={activeNeed.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-3xl border border-clay/30 bg-clay/5 p-6 md:p-8 backdrop-blur-md space-y-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-clay/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-clay text-white shadow-xs">
                <ShieldCheck/>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-clay">
                  Formulation Insight
                </span>
                <p className="text-sm font-semibold text-foreground">
                  Care pathway for <span className="text-clay">{activeNeed.label}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium">Matching Houses:</span>
              <div className="flex flex-wrap gap-2">
                {activeNeed.relevantBrandSlugs.map((slug) => (
                  <span
                    key={slug}
                    className="rounded-full border border-clay/30 bg-background px-3 py-1 text-xs font-bold text-foreground"
                  >
                    {brands.find((b) => b.slug === slug)?.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed max-w-4xl">
            {activeNeed.aiInsight}
          </p>
        </motion.div>

        {/* Dynamic Cross-Brand Routine Reveal */}
        <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 md:p-10 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/70 pb-6">
            <div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Recommended Regimen
              </span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-foreground">
                Your Complete Pathway: {activeNeed.label}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full md:w-auto">
              <div className="text-left sm:text-right">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                  Total Routine Cost
                </p>
                <p className="font-display text-xl font-bold text-foreground">
                  {price(routineCostInr)}
                </p>
              </div>

              <button
                onClick={() => addRoutineToCart(activeNeed.suggestedProductIds)}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-full sm:w-auto"
              >
                <span>Add Entire Routine to Bag</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Routine Steps Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {routineProducts.map((prod, idx) => (
              <div
                key={prod.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-background p-6 transition-all duration-300 hover:border-clay/60 hover:shadow-lg space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Step 0{idx + 1} · {prod.step}
                    </span>
                    <span className="text-xs font-bold text-clay uppercase tracking-wider">
                      {prod.brand}
                    </span>
                  </div>

                  <h4 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-clay transition-colors">
                    {prod.name}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {prod.benefit}
                  </p>

                  <div className="mt-4 rounded-xl bg-secondary/60 p-3 text-xs text-foreground/90 leading-relaxed border border-border/50">
                    <strong className="text-foreground font-semibold">Formulation role:</strong> {prod.why}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-base font-bold text-foreground">
                    {price(prod.price)}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProductId(prod.id)}
                      className="text-xs text-muted-foreground hover:text-foreground underline cursor-pointer font-medium"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => addToCart(prod.id, 1)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-foreground hover:bg-clay hover:text-white transition-all cursor-pointer"
                    >
                      <Plus className="size-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
