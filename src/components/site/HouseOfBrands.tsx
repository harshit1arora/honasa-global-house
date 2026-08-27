import { useState } from "react";
import { ArrowRight, Compass, ShieldCheck, Building2, Check, ExternalLink } from "lucide-react";
import { brands, type BrandDesire, desireLabels, type Brand } from "@/data/brands";
import { getProduct } from "@/data/products";
import { productImage } from "@/data/images";
import { useSite } from "@/lib/site-state";
import { StatusBadge } from "@/components/ui/StatusBadge";

const DESIRE_LIST: BrandDesire[] = [
  "nature",
  "science",
  "hydration",
  "hair",
  "makeup",
  "men",
  "night",
  "wellness",
];

export function HouseOfBrands() {
  const { setActiveProductId, setBrandModalSlug } = useSite();
  const [selectedDesire, setSelectedDesire] = useState<BrandDesire | "all">("all");
  const [activeBrandModal, setActiveBrandModal] = useState<Brand | null>(null);

  const filteredBrands = brands.filter((b) => {
    if (selectedDesire === "all") return true;
    return b.desires.includes(selectedDesire);
  });

  return (
    <section id="brands-section" className="border-b border-border/80 bg-secondary/25 py-6 md:py-8">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <StatusBadge mode="live" text="8 Autonomous House Portfolios" />
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2 text-clay">
              <span className="size-1.5 rounded-full bg-clay" />
              The Honasa House
            </p>
            <h2 className="display-lg mt-2 text-foreground font-semibold">
              Eight Worlds. One Intelligence.
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              Each house carries its own aesthetic, laboratory philosophy, and targeted formulations.
              Rather than generic corporate uniformity, Honasa preserves the soul of each brand.
            </p>
          </div>
        </div>

        {/* "WHICH HONASA WORLD IS YOURS?" Need-First Philosophy Filter */}
        <div className="mt-10 rounded-2xl border border-border bg-card/80 p-5 md:p-6 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                Find Your World
              </span>
              <h3 className="font-display text-base font-bold text-foreground">
                Which philosophy speaks to you?
              </h3>
            </div>

            {/* Desire Chips */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDesire("all")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  selectedDesire === "all"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                All Worlds ({brands.length})
              </button>
              {DESIRE_LIST.map((des) => {
                const isSelected = selectedDesire === des;
                return (
                  <button
                    key={des}
                    onClick={() => setSelectedDesire(des)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {desireLabels[des]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Brand Worlds Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBrands.map((b) => {
            const heroProd = getProduct(b.heroProductId);
            return (
              <div
                key={b.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-clay/50 hover:shadow-2xl"
              >
                {/* Brand Visual Ambience Header */}
                <div>
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-secondary">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <span
                      className="absolute top-3 left-3 size-3 rounded-full shadow-md"
                      style={{ backgroundColor: b.accent }}
                    />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[0.625rem] font-bold uppercase tracking-widest text-amber-300">
                        {b.wordmark}
                      </span>
                      <h4 className="font-display text-lg font-bold leading-tight">
                        {b.name}
                      </h4>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-bold text-clay">
                      {b.positioning}
                    </p>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {b.description}
                    </p>

                    {/* Consumer Problem Quote */}
                    <div className="mt-3 rounded-xl bg-secondary/60 p-3 text-[0.6875rem] italic text-foreground/90 border-l-2 border-clay">
                      {b.consumerProblem}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Hero Product & Explore CTA */}
                <div className="mt-6 pt-4 border-t border-border/70">
                  {heroProd && (
                    <div className="mb-3 flex items-center justify-between text-xs">
                      <span className="text-[0.625rem] text-muted-foreground uppercase font-semibold">
                        Hero formulation:
                      </span>
                      <button
                        onClick={() => setActiveProductId(heroProd.id)}
                        className="text-xs font-semibold text-foreground hover:text-clay truncate max-w-[150px] cursor-pointer"
                      >
                        {heroProd.name}
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveBrandModal(b)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  >
                    <span>Enter {b.name} World</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Side-by-Side House Decision Matrix */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-card p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                Strategic Portfolio Comparison
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Side-by-Side House Decision Matrix
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Compare formulation philosophies, active ingredients, and climate suitability across our 8 houses.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border/80 bg-secondary/40 text-muted-foreground font-semibold uppercase text-[0.6875rem]">
                  <th className="py-3 px-4">Brand House</th>
                  <th className="py-3 px-4">Formulation Philosophy</th>
                  <th className="py-3 px-4">Core Active Ingredient</th>
                  <th className="py-3 px-4">Target Consumer Concern</th>
                  <th className="py-3 px-4">Best Climate Match</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  { house: "Mamaearth", philosophy: "Natural Botanical Science", active: "Rice Water & Turmeric", concern: "Gentle Daily Cleanse & Glow", climate: "Hot / Humid (India)", heroId: "me-ubtan-face-wash" },
                  { house: "The Derma Co.", philosophy: "Clinical Dermaceuticals", active: "2% Salicylic & Niacinamide", concern: "Acne Congestion & Dark Marks", climate: "Urban / All Climates", heroId: "tdc-salicylic-serum" },
                  { house: "Aqualogica", philosophy: "Water-Light Gel Hydration", active: "Hyaluronic & Coconut Water", concern: "Dehydration & UV Protection", climate: "Arid Heat / Extreme Sun (UAE)", heroId: "aq-glow-sunscreen" },
                  { house: "BBlunt", philosophy: "Salon Professional Hair Care", active: "Argan Oil & Provitamin B5", concern: "Frizz & Hard Water Damage", climate: "High Humidity & Coastal", heroId: "bb-intense-moisture-shampoo" },
                  { house: "Dr. Sheth's", philosophy: "Ayurvedic + Clinical Fusion", active: "Haldi (Turmeric) & Vit C", concern: "Stubborn Pigmentation", climate: "Polluted / High UV", heroId: "ds-haldi-vitc-serum" },
                  { house: "Staze", philosophy: "24H High-Pigment Cosmetics", active: "Avocado Oil & Vit E", concern: "Longwear Makeup Comfort", climate: "All-Day Wear", heroId: "me-moisture-matte-lipstick" },
                  { house: "Luminéve", philosophy: "Peptide Barrier Renewal", active: "Peptides & Squalane", concern: "Overnight Repair & Dryness", climate: "Cool / Arid AC (UK/US)", heroId: "lu-night-repair-cream" },
                  { house: "Reginald Men", philosophy: "Streamlined Men's Grooming", active: "Activated Charcoal & Menthol", concern: "Excess Sebum & Razor Burn", climate: "Workout Heat", heroId: "rg-charcoal-face-wash" },
                ].map((row) => (
                  <tr key={row.house} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-3.5 px-4 font-display font-bold text-foreground">{row.house}</td>
                    <td className="py-3.5 px-4 text-muted-foreground">{row.philosophy}</td>
                    <td className="py-3.5 px-4 font-semibold text-clay">{row.active}</td>
                    <td className="py-3.5 px-4 text-foreground">{row.concern}</td>
                    <td className="py-3.5 px-4 text-muted-foreground">{row.climate}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setActiveProductId(row.heroId)}
                        className="rounded-full bg-secondary px-3 py-1 font-semibold text-foreground text-[0.6875rem] hover:bg-clay hover:text-white transition-colors cursor-pointer"
                      >
                        Explore →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Brand World Detail Modal Drawer */}
      {activeBrandModal && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            onClick={() => setActiveBrandModal(null)}
            className="absolute inset-0 bg-ink/75 backdrop-blur-md"
          />

          <div className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-border bg-background p-6 md:p-8 shadow-2xl z-10">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="size-4 rounded-full"
                  style={{ backgroundColor: activeBrandModal.accent }}
                />
                <div>
                  <span className="text-[0.625rem] font-bold uppercase tracking-widest text-clay">
                    {activeBrandModal.wordmark}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {activeBrandModal.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveBrandModal(null)}
                className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <img
                  src={activeBrandModal.image}
                  alt={activeBrandModal.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <p className="font-display text-lg text-white font-medium">
                    "{activeBrandModal.worldLine}"
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Core Proposition
                </h4>
                <p className="mt-1 text-sm text-foreground leading-relaxed">
                  {activeBrandModal.description}
                </p>
              </div>

              <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-clay">
                  The Consumer Problem Solved
                </h4>
                <p className="mt-1 font-display text-base font-semibold text-foreground">
                  {activeBrandModal.consumerProblem}
                </p>
              </div>

              {/* Hero product showcase */}
              {getProduct(activeBrandModal.heroProductId) && (
                <div className="rounded-2xl border border-clay/30 bg-clay/5 p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                      Hero Formulation
                    </span>
                    <h5 className="font-display text-base font-bold text-foreground">
                      {getProduct(activeBrandModal.heroProductId)?.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {getProduct(activeBrandModal.heroProductId)?.benefit}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveProductId(activeBrandModal.heroProductId);
                      setActiveBrandModal(null);
                    }}
                    className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
                  >
                    View Product
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
