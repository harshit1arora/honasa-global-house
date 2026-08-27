import { useState } from "react";
import { ArrowRight, ShieldCheck, Building2, Compass } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { brands } from "@/data/brands";
import { useSite } from "@/lib/site-state";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function Hero() {
  const { setConciergeOpen, setQuizOpen } = useSite();

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-linear-to-b from-background via-secondary/15 to-background py-6 md:py-10">
      {/* Background Decorative Ambient Radial Gradients */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 size-[800px] rounded-full bg-linear-to-tr from-clay/15 via-amber-200/10 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute top-1/3 right-0 size-[500px] rounded-full bg-clay/10 blur-3xl opacity-40" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <StatusBadge mode="live" text="Live Intelligence Layer" />
              <StatusBadge mode="simulated" text="Demo Mode" />
            </div>

            {/* Cinematic High-Impact Founders Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.02]">
              Crafting Fresh Solutions.
              <br />
              <span className="text-clay">Never Copying.</span>
            </h1>

            {/* Editorial Body */}
            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              One company that built 10 purpose-driven brand houses in 10 years. Formulated from real consumer signals and clinical evidence, tailored to your unique skin, hair, and climate.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setQuizOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Find Your Personalized Routine</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("brand-universe");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/80 px-7 py-4 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:bg-secondary hover:border-clay/50 cursor-pointer shadow-xs"
              >
                <Compass className="size-4 text-muted-foreground" />
                <span>Explore 8 Houses</span>
              </button>
            </div>

            {/* Clean Proof Bar */}
            <div className="pt-6 border-t border-border/60 flex items-center justify-between gap-4 text-left">
              <div>
                <span className="font-display text-2xl font-bold text-foreground">8</span>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Specialized Houses</p>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-clay">Clean</span>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Dermatologist Tested</p>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-foreground">2</span>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Primary Markets (IN & AE)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Lockup */}
          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border/80 bg-secondary shadow-2xl">
              <img
                src={heroPortrait}
                alt="Honasa Consumer : Global Beauty Ecosystem"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Lower Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/60 p-5 backdrop-blur-xl text-white space-y-2">
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span className="font-semibold tracking-widest uppercase text-[0.6875rem] text-amber-300">
                    The Formulation Principle
                  </span>
                  <span className="text-white/60">Cross-Brand Precision</span>
                </div>
                <p className="font-display text-lg font-medium leading-snug">
                  Targeted active ingredients, calibrated for real-world climates.
                </p>
                <div className="flex items-center gap-2 text-xs text-white/70 pt-1">
                  <ShieldCheck className="size-4 text-emerald-400" />
                  <span>MadeSafe™ Certified · Toxin Free</span>
                </div>
              </div>
            </div>

            {/* Orbiting Brand Badges */}
            <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md">
              <span className="size-2.5 rounded-full bg-emerald-500" />
              <div>
                <p className="text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
                  Botanical Science
                </p>
                <p className="text-xs font-bold text-foreground">Mamaearth</p>
              </div>
            </div>

            <div className="absolute top-1/3 -right-6 hidden sm:flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-md">
              <span className="size-2.5 rounded-full bg-sky-500" />
              <div>
                <p className="text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
                  Active Dermaceuticals
                </p>
                <p className="text-xs font-bold text-foreground">The Derma Co.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

