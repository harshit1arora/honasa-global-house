import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Building2, ArrowRight, FlaskConical, Compass } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { EcosystemResponse } from "@/components/site/EcosystemResponse";
import { GlobalClimateBeauty } from "@/components/site/GlobalClimateBeauty";
import { HonasaPortfolioSection } from "@/components/site/HonasaPortfolioSection";
import { OurStorySection } from "@/components/site/OurStorySection";
import { brands } from "@/data/brands";
import { getProduct } from "@/data/products";
import { useSite } from "@/lib/site-state";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Honasa Consumer | House of Digital-First Brands" },
      {
        name: "description",
        content:
          "Discover purpose-driven personal care built around your individual biology. An intelligent global ecosystem connecting you to 8 specialized brand laboratories." },
    ] }),
  component: Home });

function Home() {
  const { setQuizOpen, setConciergeOpen } = useSite();

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-clay selection:text-white">
      {/* 01. Hero Statement */}
      <Hero />

      {/* 02. Interactive Routine Engine */}
      <EcosystemResponse />

      {/* 03. Digital-First House of Brands Portfolio */}
      <HonasaPortfolioSection />

      {/* 04. Our Founding Story */}
      <OurStorySection />

      {/* 04. Science & R&D Laboratory */}
      <section className="border-b border-border/60 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-clay">
                <FlaskConical className="size-3.5" />
                <span>Science-First Formulation</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Evidence-Led Science.
                <br />
                Formulated Without Compromise.
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed">
                We analyze organic consumer skin data and clinical feedback before our chemists synthesize a single molecule. Every formula undergoes rigorous dermatological stress-testing across UV indices and humidity levels.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-1">
                  <span className="font-display text-3xl font-bold text-foreground">100%</span>
                  <p className="text-xs text-muted-foreground">
                    Dermatologically tested formulations safe for sensitive barriers.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-card p-5 space-y-1">
                  <span className="font-display text-3xl font-bold text-clay">Photostable</span>
                  <p className="text-xs text-muted-foreground">
                    Active molecules tested for high UV & humidity stability.
                  </p>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/science"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer shadow-sm"
                >
                  <span>Trace R&D Science</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/shop"
                  className="rounded-full border border-border/80 bg-card px-6 py-3.5 text-xs sm:text-sm font-semibold hover:bg-secondary cursor-pointer"
                >
                  View Tested Formulations
                </Link>
              </div>
            </div>

            {/* R&D Standard Showcase */}
            <div className="rounded-3xl border border-border bg-linear-to-br from-secondary/40 via-card to-secondary/20 p-8 sm:p-10 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  The Honasa Standard
                </span>
                <span className="rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-semibold">
                  MadeSafe™ Certified
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Clinical Bio-Actives",
                    desc: "Precision actives (Salicylic, Niacinamide, Vitamin C, Hyaluronic) paired with soothing botanicals." },
                  {
                    title: "Strictly Clean Standard",
                    desc: "Strictly free of parabens, sulfates, mineral oils, and synthetic fillers." },
                  {
                    title: "Extreme Climate Stress Testing",
                    desc: "Tested in environmental chambers at 45°C and 85% RH to guarantee zero formula separation." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/80 bg-background/90 p-5 space-y-1.5"
                  >
                    <h4 className="font-display text-base font-bold text-foreground">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Global Climate Adaptation */}
      <GlobalClimateBeauty />

      {/* 06. Global Brand Gateway Lockup */}
      <section className="relative bg-ink text-white py-20 md:py-28 px-5 md:px-8 overflow-hidden border-t border-white/10">
        {/* Ambient Gradient Glows */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-linear-to-tr from-emerald-600/20 via-teal-500/15 to-emerald-400/10 blur-3xl opacity-70" />

        <div className="relative mx-auto max-w-[1240px]">
          <div className="rounded-3xl border border-emerald-500/20 bg-white/5 p-8 sm:p-14 md:p-16 backdrop-blur-2xl shadow-2xl text-center space-y-8">
            {/* Bold Minimalist Statement */}
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] max-w-4xl mx-auto">
              EIGHT HOUSES.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-300 via-teal-200 to-emerald-100">
                ONE UNIFIED REGIMEN.
              </span>
            </h2>

            {/* Concise Punchy Subtitle */}
            <p className="text-base sm:text-xl text-white/80 max-w-xl mx-auto font-normal leading-relaxed">
              Instant active formulation matching across 8 specialized laboratories. Engineered for your biology and climate.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setQuizOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs sm:text-sm font-bold text-ink hover:bg-emerald-50 hover:text-emerald-950 cursor-pointer shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Start 90s Routine Match</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/shop"
                preload="intent"
                className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-8 py-4 text-xs sm:text-sm font-bold text-emerald-100 hover:bg-emerald-500/20 cursor-pointer backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Explore Universal Shop
              </Link>
            </div>

            {/* Micro Feature Proof Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-emerald-200/60">
              <span>8 Autonomous Houses</span>
              <span>•</span>
              <span>90-Second Match</span>
              <span>•</span>
              <span>Climate Calibrated</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
