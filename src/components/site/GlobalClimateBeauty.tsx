import { Globe, Sun, ShieldCheck, Building2 } from "lucide-react";
import { markets } from "@/lib/localization";
import { useSite } from "@/lib/site-state";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function GlobalClimateBeauty() {
  const { market, setMarketCode, addRoutineToCart } = useSite();

  const climateAdvisoryMap: Record<string, { heroFocus: string; textureNote: string; recommendedIds: string[] }> = {
    IN: {
      heroFocus: "High Humidity & Urban Exposure",
      textureNote:
        "Water-burst gel textures and oil-soluble BHA serums prevent congestion without heavy occlusive traps.",
      recommendedIds: ["me-ubtan-face-wash", "tdc-salicylic-serum", "aq-glow-sunscreen"] },
    AE: {
      heroFocus: "Extreme Arid Heat & Intense UV",
      textureNote:
        "Photostable broad-spectrum SPF 50+ paired with barrier-replenishing ceramides to protect against 45°C ambient heat.",
      recommendedIds: ["aq-glow-sunscreen", "aq-hydrate-gel", "ds-haldi-vitc-serum"] },
    GB: {
      heroFocus: "Cool Climate & Central Heating",
      textureNote:
        "Lipid-rich squalane and peptide balms to offset transepidermal water loss from low ambient moisture.",
      recommendedIds: ["lu-night-repair-cream", "ds-haldi-vitc-serum"] },
    US: {
      heroFocus: "Seasonal Atmospheric Shifts",
      textureNote:
        "Adaptogenic hydration and antioxidant defense to maintain barrier elasticity through changing weather fronts.",
      recommendedIds: ["aq-hydrate-gel", "tdc-niacinamide-serum", "aq-glow-sunscreen"] },
    SG: {
      heroFocus: "Tropical Moisture & Urban Humidity",
      textureNote:
        "Featherweight pore-refining serums and anti-humidity salon haircare to tame frizz in 85% relative humidity.",
      recommendedIds: ["bb-intense-moisture-shampoo", "aq-hydrate-gel"] },
    AU: {
      heroFocus: "High Oceanic Sun Intensity",
      textureNote:
        "Water-resistant SPF 50+ and soothing post-sun antioxidants to preserve collagen fibers from photoaging.",
      recommendedIds: ["aq-glow-sunscreen", "ds-haldi-vitc-serum"] } };

  const currentAdvisory = climateAdvisoryMap[market.code] ?? climateAdvisoryMap["IN"]!;

  return (
    <section className="border-b border-border/60 bg-background py-8 md:py-12">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-clay">
            <Globe className="size-3.5" />
            <span>Global Climate Adaptation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Formulated For Every Country & Climate.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Formulations stress-tested to perform flawlessly across global markets and weather conditions.
          </p>
        </div>

        {/* Global Country Switcher */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* Country Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {markets.map((m) => {
              const isSelected = market.code === m.code;
              return (
                <button
                  key={m.code}
                  onClick={() => setMarketCode(m.code)}
                  className={`rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-2 border-clay bg-clay/10 shadow-lg scale-[1.02]"
                      : "border border-border/80 bg-card hover:bg-secondary text-muted-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{m.flag}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-clay">
                      {m.currency}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-base font-bold text-foreground">
                    {m.country}
                  </h3>
                  <p className="text-xs text-muted-foreground">{m.code} Region</p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-foreground">
                    <Sun className="size-3.5 text-amber-500" />
                    <span>{m.climate}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Climate Advisory Box */}
          <div className="rounded-3xl border border-clay/30 bg-card p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-border/80 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-clay text-white shadow-xs">
                  <Globe className="size-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-clay">
                    Country Profile
                  </span>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    {market.country}
                  </h4>
                </div>
              </div>

              <span className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-foreground">
                {market.currency} Currency
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Environmental Focus
                </span>
                <p className="mt-1 font-display text-lg font-bold text-foreground">
                  {currentAdvisory.heroFocus}
                </p>
              </div>

              <div className="rounded-2xl bg-secondary/60 p-5 border border-border/70 text-sm text-foreground/90 leading-relaxed">
                <span className="font-bold text-clay block mb-1">
                  Formulation Priority for {market.country}:
                </span>
                {currentAdvisory.textureNote}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => addRoutineToCart(currentAdvisory.recommendedIds)}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 cursor-pointer"
                >
                  <ShieldCheck />
                  <span>Add {market.country} Recommended Routine</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Travel & Climate Shift Routine Builder */}
        <div className="mt-14 rounded-3xl border border-clay/30 bg-card/90 p-6 md:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                  Travel & Climate Shift Engine
                </span>
                <StatusBadge mode="simulated" text="Climate Telemetry Engine" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Traveling from Gurgaon (India) → Dubai (UAE)?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Side-by-side climate recalibration showing why formulations change between weather zones.
              </p>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {/* Gurgaon Side */}
            <div className="rounded-2xl border border-border bg-secondary/40 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <span>🇮🇳</span> Gurgaon (Origin Market)
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.6875rem] font-semibold text-muted-foreground">
                  Monsoon / Humid
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Ambient Conditions:</strong> 82% Relative Humidity, urban particulate matter, sweat accumulation.
              </p>
              <div className="space-y-2 pt-1">
                <div className="rounded-xl bg-card p-3 text-xs border border-border/60">
                  <strong className="text-clay block">Cleanse + Treat:</strong>
                  Mamaearth Ubtan Wash + The Derma Co 2% Salicylic Acid
                  <p className="text-[0.6875rem] text-muted-foreground mt-0.5">
                    Dissolves trapped humidity sebum without clogging pores.
                  </p>
                </div>
              </div>
            </div>

            {/* Dubai Side */}
            <div className="rounded-2xl border border-clay/40 bg-clay/5 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-clay uppercase tracking-wider flex items-center gap-1.5">
                  <span>🇦🇪</span> Dubai (Destination Market)
                </span>
                <span className="rounded-full bg-clay/20 px-2.5 py-0.5 text-[0.6875rem] font-bold text-clay">
                  Arid Desert / 42°C Heat
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                <strong>Ambient Conditions:</strong> 42°C Dry Heat, UV Index 11+, continuous indoor AC, desalinated water.
              </p>
              <div className="space-y-2 pt-1">
                <div className="rounded-xl bg-card p-3 text-xs border border-clay/30">
                  <strong className="text-emerald-600 dark:text-emerald-400 block">Recalibrated Climate Swap:</strong>
                  Aqualogica Dewy SPF 50 + BBlunt Hard Water Chelating Shampoo
                  <p className="text-[0.6875rem] text-muted-foreground mt-0.5">
                    Swaps heavy creams for water-burst SPF & chelates mineral deposits from desalinated shower water.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1 text-amber-950 dark:text-amber-200">
              <strong className="block font-bold text-sm">
                Why Did We Change This?
              </strong>
              <span>
                In Dubai's arid heat and high UV index, skin rapidly loses moisture to air conditioning while hair absorbs desalinated water minerals. We swapped heavy occlusives for water-light SPF protection and hard-water chelating hair care.
              </span>
            </div>
            <button
              onClick={() => addRoutineToCart(["aq-glow-sunscreen", "bb-intense-moisture-shampoo", "aq-hydrate-gel"])}
              className="shrink-0 rounded-full bg-amber-600 text-white px-5 py-2.5 font-bold text-xs hover:bg-amber-700 cursor-pointer shadow-xs transition-all"
            >
              1-Click Dubai Climate Swap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
