import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Building2, ArrowRight, Zap, Heart, CheckCircle2 } from "lucide-react";
import { brands, getBrand } from "@/data/brands";
import brandCollage from "@/assets/honasa-brand-collage-full.png";

export function HonasaPortfolioSection() {
  const [activeBrandSlug, setActiveBrandSlug] = useState<string | null>(null);

  const activeBrand = activeBrandSlug ? getBrand(activeBrandSlug) : null;

  return (
    <section id="brand-universe" className="border-b border-border/60 bg-linear-to-b from-secondary/30 via-background to-secondary/20 py-8 md:py-12 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-clay/10 blur-3xl opacity-50" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Superhead */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border/60">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-clay">
              <ShieldCheck/>
              <span>Digital-First House of Brands</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Built for Next-Gen Beauty Needs
            </h2>
          </div>

          <Link
            to="/brands"
            preload="intent"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-6 py-2.5 text-xs font-semibold text-foreground hover:border-clay hover:text-clay transition-all cursor-pointer shadow-xs whitespace-nowrap self-start md:self-auto"
          >
            <span>Explore All 8 Brands</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Main 2-Column Lockup (As shown in reference image) */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Brand Portfolio Graphic collage with luxury card treatment */}
          <div className="lg:col-span-6 relative">
            <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-4 sm:p-8 shadow-xl transition-all duration-500 hover:border-clay/50 hover:shadow-2xl">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white p-4 flex items-center justify-center border border-border/40">
                <img
                  src={brandCollage}
                  alt="Honasa Consumer House of Brands Portfolio : Mamaearth, The Derma Co, Aqualogica, Dr. Sheth's, BBlunt, Staze, Luminéve, Reginald Men"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-102"
                />
              </div>

              {/* Interactive Brand Pills Bar */}
              <div className="mt-6 flex flex-wrap gap-2">
                {brands.map((b) => (
                  <button
                    key={b.slug}
                    onClick={() => setActiveBrandSlug(activeBrandSlug === b.slug ? null : b.slug)}
                    className={`rounded-full px-3 py-1 text-[0.6875rem] font-bold transition-all cursor-pointer ${
                      activeBrandSlug === b.slug
                        ? "bg-clay text-white shadow-sm"
                        : "border border-border/80 bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>

              {/* Active Brand Popover Spotlight if clicked */}
              {activeBrand && (
                <div className="mt-4 rounded-2xl border border-clay/30 bg-clay/5 p-4 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-clay uppercase tracking-wider">
                      {activeBrand.positioning}
                    </span>
                    <button
                      onClick={() => setActiveBrandSlug(null)}
                      className="text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      Close ×
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-foreground leading-relaxed">
                    {activeBrand.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Honasa Consumer Limited Brand Story & Purpose */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Honasa Consumer Limited
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                Honasa Consumer Limited is a digital-first house of brands catering to the diverse needs of millennial customers. We are building a new generation of beauty and personal care brands: driven by purpose, powered by technology, and focused on evolving consumer needs.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                From natural personal care to science-backed skincare and a modern take on Ayurveda, each of our brands has a unique proposition, created for millennials.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                Today, our in-house portfolio of brands comprises household favorites like Mamaearth, The Derma Co., Aqualogica, Lumineve, and Staze. We have also made strategic acquisitions to strengthen our portfolio: BBlunt (Products and Services), Dr. Sheth's (dermatologist formulated skincare brand), and Reginald Men.
              </p>
            </div>

            {/* Value Pillar Chips */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              <div className="rounded-2xl border border-border/80 bg-card p-3 sm:p-4 text-center shadow-xs">
                <span className="block font-display text-lg sm:text-2xl font-bold text-clay">10M+</span>
                <span className="text-[0.625rem] sm:text-[0.6875rem] font-semibold text-muted-foreground uppercase tracking-wider block mt-0.5">Millennial Families</span>
              </div>
              <div className="rounded-2xl border border-border/80 bg-card p-3 sm:p-4 text-center shadow-xs">
                <span className="block font-display text-lg sm:text-2xl font-bold text-clay">8</span>
                <span className="text-[0.625rem] sm:text-[0.6875rem] font-semibold text-muted-foreground uppercase tracking-wider block mt-0.5">Purpose Brands</span>
              </div>
              <div className="rounded-2xl border border-border/80 bg-card p-3 sm:p-4 text-center shadow-xs">
                <span className="block font-display text-lg sm:text-2xl font-bold text-clay">Asia's 1st</span>
                <span className="text-[0.625rem] sm:text-[0.6875rem] font-semibold text-muted-foreground uppercase tracking-wider block mt-0.5">MadeSafe™</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
