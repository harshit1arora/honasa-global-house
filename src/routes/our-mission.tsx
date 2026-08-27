import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Target, ShieldCheck, Building2, Compass, Lightbulb, Heart, TrendingUp, Smile, Crown, HeartHandshake, MapPin, Flame, Award, Layers, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

export const Route = createFileRoute("/our-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission : Honasa Consumer Limited" },
      {
        name: "description",
        content:
          "Honasa lives to provide innovative, high-quality products purposefully crafted specifically for the needs of evolving Indians across the BPC category." },
    ] }),
  component: OurMissionPage });

function OurMissionPage() {
  const [activeTab, setActiveTab] = useState<"all" | "vision" | "mission">("all");
  const [craftedAspect, setCraftedAspect] = useState<number>(0);

  const CRAFTED_FOR_INDIA_PILLARS = [
    {
      title: "Skin & Hair Biology",
      headline: "Melanin-rich barriers & varied undertones",
      desc: "Indian skin has higher baseline melanin and is significantly more prone to post-inflammatory hyperpigmentation (PIH). Rather than generic bleaching agents, our formulas use gentle, photostable tyrosinase inhibitors like Niacinamide, Kojic Acid, and Alpha Arbutin paired with soothing botanicals like Turmeric and Rice Water.",
      stat: "Melanin-Tolerant",
      statLabel: "Active chemistry" },
    {
      title: "Extreme Tropical Weather",
      headline: "Tested for 45°C heat & 85% relative humidity",
      desc: "Imported Western formulations often melt, feel heavy, or clog pores in tropical humidity. Honasa products undergo climate-chamber stress tests so sunscreens absorb in seconds with zero white cast, and moisturizers hydrate without stickiness.",
      stat: "45°C & 85% RH",
      statLabel: "Climate tested" },
    {
      title: "Cultural & Occasion Nuances",
      headline: "Traditions re-engineered with clinical rigor",
      desc: "From Sunday Champi hair-oiling rituals to wedding Ubtan glow traditions, we honor ancestral wisdom by extracting active clinical compounds (Amla, Bhringraj, Besan, Saffron) and removing the harsh sulfur, mineral oils, and sticky residues of the past.",
      stat: "100% Certified",
      statLabel: "Toxin-free modern rituals" },
    {
      title: "Digital Feedback Loop",
      headline: "Listening via consumer-facing tech products",
      desc: "Traditional conglomerates rely on annual market surveys. Honasa decodes over 5 million direct consumer signals, search queries, and dermatologist reviews monthly, enabling a 45-day idea-to-shelf innovation cycle.",
      stat: "5M+ Signals",
      statLabel: "Analyzed monthly" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-clay selection:text-white">
      {/* 1. Editorial Luxury Hero Header */}
      <div className="relative overflow-hidden border-b border-border/80 bg-linear-to-b from-secondary/40 via-background to-background py-14 md:py-20 px-5 md:px-8">
        {/* Subtle Ambient Radial Lighting */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-linear-to-tr from-clay/15 via-amber-200/10 to-transparent blur-3xl opacity-70" />

        <div className="relative mx-auto max-w-[1440px]">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-border/60">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors bg-secondary/80 hover:bg-secondary px-3.5 py-1.5 rounded-full"
            >
              <ArrowLeft className="size-3.5" />
              <span>Inside Honasa</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-clay animate-pulse" />
              <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-clay">
                Corporate Manifesto
              </span>
            </div>
          </div>

          {/* Central Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-4">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-clay/10 px-3.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-clay border border-clay/20">
                  Honasa Consumer Limited
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Vision & Mission
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Honasa lives to provide innovative, high-quality products purposefully crafted
                specifically for the needs of evolving Indians across the Beauty & Personal Care
                (BPC) category.
              </p>
            </div>

            {/* Quick Segment Filter Pill */}
            <div className="flex items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-xs">
              <button
                onClick={() => setActiveTab("all")}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Full Architecture
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "vision"
                    ? "bg-clay text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Vision (The What)
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "mission"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Mission (The How)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-12 md:py-16 md:px-8 space-y-16">
        {/* ========================================================================= */}
        {/* SECTION 1: VISION */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "vision") && (
          <section id="vision-section" className="space-y-8 animate-in fade-in duration-300">
            {/* Vision Banner Card */}
            <div className="rounded-3xl border border-clay/30 bg-linear-to-r from-clay/10 via-card to-amber-500/5 p-8 sm:p-10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-clay">
                  <Target className="size-4" />
                  The Vision Statement
                </span>
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                  Pillar 01 · Purpose & Aspiration
                </span>
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                "Honasa lives to provide innovative, high-quality products purposefully crafted
                specifically for the needs of evolving Indians across the BPC category."
              </blockquote>

              <p className="text-xs sm:text-sm text-muted-foreground">
                Deconstructing what this means across our 5 core pillars of innovation, quality, and
                consumer understanding:
              </p>
            </div>

            {/* 5 Vision Detail Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Innovative Products */}
              <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-clay/60 hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600">
                      <Lightbulb className="size-5" />
                    </div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Vision Dimension 01
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-clay transition-colors">
                    Innovative Products
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    We define this as products which can meet unmet demands, enhance convenience,
                    reduce daily stress, increase effectiveness, and dramatically improve consumer
                    efficiency.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {["Unmet Demands", "Enhanced Convenience", "Zero Stress", "Proven Efficacy"].map(
                      (pill, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-secondary/80 px-2 py-0.5 text-[0.625rem] font-medium text-foreground"
                        >
                          {pill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Card 2: High Quality Products */}
              <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-clay/60 hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                      <ShieldCheck className="size-5" />
                    </div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Vision Dimension 02
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-clay transition-colors">
                    High Quality Products
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    We define this as products which day in and day out satisfy consumer needs, serve
                    their intended biological purpose flawlessly, and consistently exceed established
                    industry standards.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="size-4" />
                    <span>Certified Toxin-Free & Clinically Verified</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Consumer Needs */}
              <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-clay/60 hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-600">
                      <Heart className="size-5" />
                    </div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Vision Dimension 03
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-clay transition-colors">
                    Consumer Needs
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    We understand that a consumer cannot be boxed into a rigid demographic type. Her
                    needs change based on occasions and need states. As a company, we exist to serve
                    her needs in the best way possible - and never judge them.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[0.625rem] font-semibold uppercase text-muted-foreground block">
                    Our Stance:
                  </span>
                  <p className="text-xs font-medium text-foreground">
                    Zero judgment · Fluid across occasions & life stages
                  </p>
                </div>
              </div>

              {/* Card 4: Evolving Indians */}
              <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-clay/60 hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-600">
                      <TrendingUp className="size-5" />
                    </div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Vision Dimension 04
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-clay transition-colors">
                    Evolving Indians
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    The Indian consumer who, with growing disposable income and an evolving
                    consciousness, seeks brands that help establish her upward movement in life. She
                    is willing to pay a premium of 20–30% if that provides both functional and
                    emotional upgrade.
                  </p>
                </div>

                {/* 20-30% Premiumization Graphic */}
                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="rounded-2xl bg-secondary/50 p-3 flex items-center justify-between">
                    <span className="text-[0.6875rem] font-bold uppercase text-muted-foreground">
                      Premiumization Willingness:
                    </span>
                    <span className="rounded-full bg-clay px-2.5 py-0.5 text-xs font-bold text-white">
                      +20% to +30%
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 5: BPC Category */}
              <div className="rounded-3xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-clay/60 hover:shadow-md transition-all group sm:col-span-2 lg:col-span-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-600">
                      <Smile className="size-5" />
                    </div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Vision Dimension 05
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-clay transition-colors">
                    The BPC Category (Beauty & Personal Care)
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    We define beauty and personal care as products and services which help fulfill
                    essential consumer needs of taking care of self and family, honoring the deep
                    human desire of looking good, and feeling profoundly more confident every day.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 grid grid-cols-3 gap-3">
                  <div className="text-center p-2 rounded-xl bg-secondary/30">
                    <span className="text-[0.6875rem] font-bold text-foreground block">Care</span>
                    <span className="text-[0.625rem] text-muted-foreground">Self & Family</span>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-secondary/30">
                    <span className="text-[0.6875rem] font-bold text-foreground block">Radiance</span>
                    <span className="text-[0.625rem] text-muted-foreground">Looking Good</span>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-secondary/30">
                    <span className="text-[0.6875rem] font-bold text-foreground block">Empowerment</span>
                    <span className="text-[0.625rem] text-muted-foreground">Feeling Confident</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 2: MISSION */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "mission") && (
          <section id="mission-section" className="space-y-8 animate-in fade-in duration-300">
            {/* Mission Banner Card */}
            <div className="rounded-3xl border border-emerald-500/30 bg-linear-to-r from-emerald-500/10 via-card to-sky-500/5 p-8 sm:p-10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <Compass className="size-4" />
                  The Mission Statement
                </span>
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                  Pillar 02 · Execution & Brand Building
                </span>
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                "We execute our vision through our aspirational and purposeful brands which make our
                consumers feel better about themselves and their choices so that they choose us across
                all their premiumization occasions."
              </blockquote>

              <p className="text-xs sm:text-sm text-muted-foreground">
                How we translate this mandate into reality across four foundational execution engines:
              </p>
            </div>

            {/* 4 Mission Pillars Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Pillar 1: Aspirational Brands */}
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-4 hover:border-emerald-500/60 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600">
                    <Crown className="size-6" />
                  </div>
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-3 py-0.5 rounded-full">
                    Aspiration & Mobility
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground">
                  Aspirational Brands
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We believe that consumers choose brands to not only meet their functional needs but
                  also express their emotional desires. One of them is to celebrate moving up on the
                  societal ladder. To express and celebrate this, we build aspirational brands which
                  help our consumers fulfill their emotional desires.
                </p>

                <div className="rounded-2xl bg-secondary/40 p-4 border border-border/60">
                  <span className="text-[0.6875rem] font-bold uppercase text-foreground block mb-1">
                    Functional + Emotional Upgrade:
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Products that perform with clinical precision while feeling like a luxurious,
                    rewarding personal ritual.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Purposeful Brands */}
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-4 hover:border-emerald-500/60 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                    <HeartHandshake className="size-6" />
                  </div>
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-3 py-0.5 rounded-full">
                    Higher Purpose & Trust
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground">
                  Purposeful Brands
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Our brands will always serve a higher purpose in making the world a more beautiful
                  place. We achieve this through community contributions, radical transparency, and
                  honest communications.
                </p>

                <div className="rounded-2xl bg-secondary/40 p-4 border border-border/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Plant Goodness: 500,000+ trees planted linked to orders</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Plastic Positive: Recycling more plastic than we consume</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground">
                    <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                    <span>Clean Label: Complete percentage disclosure on active skincare</span>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Crafted for India (Spotlight Engine) */}
              <div className="sm:col-span-2 rounded-3xl border-2 border-clay/50 bg-linear-to-br from-card via-secondary/20 to-card p-6 sm:p-10 space-y-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/10 px-3 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                      <MapPin className="size-3.5" />
                      Core Moat & Competitive Advantage
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                      Crafted for India. Never Just Adapted.
                    </h3>
                  </div>

                  <span className="rounded-full bg-clay text-white px-4 py-1 text-xs font-bold shadow-xs">
                    Formulated For Indian Biology
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-4xl">
                  For the longest time, India has been treated as an "adapt" market for most
                  products. We recognize that the evolving Indian middle class is looking for products
                  which are crafted specifically for them rather than adapted or imported for them. We
                  deliver to this by understanding Indian skin, hair, weather, environment, and
                  cultural nuances in deep detail - encapsulating them into our product concepts,
                  formulas, communications, and go-to-market strategies. We base this on our strong
                  data orientation and understanding of consumers driven by different consumer-facing
                  technology products that we have built.
                </p>

                {/* Interactive Dimension Tabs for Crafted for India */}
                <div className="pt-2 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {CRAFTED_FOR_INDIA_PILLARS.map((pillar, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCraftedAspect(idx)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                          craftedAspect === idx
                            ? "bg-foreground text-background shadow-sm"
                            : "border border-border bg-background hover:bg-secondary text-muted-foreground"
                        }`}
                      >
                        {pillar.title}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-border/80 bg-background/90 p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-base font-bold text-foreground">
                        {CRAFTED_FOR_INDIA_PILLARS[craftedAspect]!.headline}
                      </h4>
                      <span className="rounded-full bg-clay/15 text-clay px-2.5 py-0.5 text-xs font-bold">
                        {CRAFTED_FOR_INDIA_PILLARS[craftedAspect]!.stat}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {CRAFTED_FOR_INDIA_PILLARS[craftedAspect]!.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 4: Premiumisation as Celebration */}
              <div className="sm:col-span-2 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 space-y-4 hover:border-clay/60 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-clay/15 text-clay">
                    <ShieldCheck/>
                  </div>
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay bg-clay/10 px-3 py-0.5 rounded-full">
                    Aspirational Elevation
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground">
                  Premiumisation: The Celebration of Personal Evolution
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  We define premiumization as the process of helping the consumer celebrate their own
                  success & evolution by choosing a more aspirational product. When an Indian consumer
                  achieves a milestone - a promotion, a graduation, starting a family, or simply
                  deciding to prioritize her well-being - her choice of skincare and personal care should
                  affirm that triumph.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 space-y-1">
                    <span className="text-xs font-bold text-foreground">Self-Celebration</span>
                    <p className="text-[0.6875rem] text-muted-foreground">
                      Upgrading daily hygiene routines into luxurious self-care rituals.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 space-y-1">
                    <span className="text-xs font-bold text-foreground">Active Trust</span>
                    <p className="text-[0.6875rem] text-muted-foreground">
                      Paying for pure, dermatologist-backed active concentrations with zero filler.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 space-y-1">
                    <span className="text-xs font-bold text-foreground">Multi-Occasion Match</span>
                    <p className="text-[0.6875rem] text-muted-foreground">
                      8 specialized houses ready for everyday, celebration, or clinical needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 3: NAVIGATION & NEXT STEPS */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/our-values"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Previous: GrowCode & Our Values</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/about"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              All About Honasa
            </Link>
            <Link
              to="/our-story"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              <span>Next: Our Story</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
