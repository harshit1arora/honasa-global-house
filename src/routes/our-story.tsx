import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck, Building2, Heart, Recycle, TrendingUp, Award, Calendar, Layers, ChevronRight, Bell, Leaf, FlaskConical, Droplets, CheckCircle2 } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "The Journey of Honasa : Our Story" },
      {
        name: "description",
        content:
          "From Asia's 1st MadeSafe certified brand for babies in 2016 to an 8-brand publicly listed beauty ecosystem: explore the complete journey of Honasa Consumer Limited." },
    ] }),
  component: OurStoryPage });

interface TimelineMilestone {
  year: string;
  badge: string;
  title: string;
  brandFocus: string;
  tagline: string;
  story: string;
  impactMetrics: { label: string; val: string }[];
  highlightColor: string;
  accentBg: string;
  isLandmark?: boolean;
}

const MILESTONES: TimelineMilestone[] = [
  {
    year: "2016",
    badge: "The Genesis",
    title: "Asia's 1st MadeSafe Certified Brand",
    brandFocus: "Mamaearth Baby Care",
    tagline: "Born out of parental love and relentless consumer safety",
    story:
      "When Varun and Ghazal Alagh were expecting their son Agastya, they discovered that virtually all baby care products on Indian shelves contained parabens, sulfates, and toxic additives. Refusing to compromise, they founded Mamaearth - becoming Asia's very first brand to earn the strict MadeSafe certification for baby personal care.",
    impactMetrics: [
      { label: "Certification", val: "MadeSafe Asia #1" },
      { label: "Formulation", val: "100% Toxin-Free" },
      { label: "Founding Focus", val: "Baby Care" },
    ],
    highlightColor: "#22b486",
    accentBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" },
  {
    year: "2017",
    badge: "Category Expansion",
    title: "Crafting Safe Personal Care For Adults",
    brandFocus: "Mamaearth Personal Care",
    tagline: "Re-imagining traditional Indian beauty rituals with clean clinical actives",
    story:
      "Recognizing that mothers and families wanted the same clean, toxin-free safety for themselves, Mamaearth expanded into adult hair and skincare. Breakthroughs like the Ubtan Face Wash and Onion Hair Oil modernized ancestral Indian wellness rituals into certified toxin-free daily staples.",
    impactMetrics: [
      { label: "Category", val: "Skin, Hair & Body" },
      { label: "Safety Standard", val: "PETA Cruelty-Free" },
      { label: "Philosophy", val: "Goodness Inside" },
    ],
    highlightColor: "#16a34a",
    accentBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30" },
  {
    year: "2020",
    badge: "Science-Backed Skincare",
    title: "The Derma Co. Launch",
    brandFocus: "The Derma Co.",
    tagline: "Honest active percentages without the marketing smoke and mirrors",
    story:
      "Indian consumers began demanding evidence-backed active skincare to treat acne, hyperpigmentation, and barrier damage. Honasa created The Derma Co., pioneering transparent active ingredient percentages (Salicylic Acid, Niacinamide, Vitamin C) paired with dermatologist-designed regimens.",
    impactMetrics: [
      { label: "Category", val: "Active Dermaceuticals" },
      { label: "Transparency", val: "100% Active Disclosure" },
      { label: "Clinical Testing", val: "Dermatologist Approved" },
    ],
    highlightColor: "#0284c7",
    accentBg: "bg-sky-500/10 text-sky-600 border-sky-500/30" },
  {
    year: "2021",
    badge: "Tropical Climate Science",
    title: "Aqualogica Launch",
    brandFocus: "Aqualogica",
    tagline: "Light-as-water hydration formulated for hot, humid tropical climates",
    story:
      "Heavier western sunscreens and moisturizers felt sticky and suffocating in the Indian heat. Honasa engineered Aqualogica with Unique Water Lock Technology and fruit actives - pioneering ultra-light, zero-white-cast sunscreens and dewy gels tailor-made for high UV and humidity.",
    impactMetrics: [
      { label: "Innovation", val: "Water Lock Tech" },
      { label: "Sun Protection", val: "SPF 50+ PA++++" },
      { label: "Texture", val: "Zero-White-Cast" },
    ],
    highlightColor: "#06b6d4",
    accentBg: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30" },
  {
    year: "2022",
    badge: "The Multi-House Era & Unicorn Status",
    title: "₹100 Cr Milestones & Strategic Acquisitions",
    brandFocus: "Dr. Sheth's & BBlunt",
    tagline: "Welcoming legacy masters and crossing unicorn scale",
    story:
      "The Derma Co. crossed the historic milestone of ₹100 Cr ARR in record time. Honasa expanded into professional salon care by acquiring BBlunt and dermatological Indian skincare with Dr. Sheth's, cementing its identity as an autonomous house of brands and crossing Unicorn valuation status.",
    impactMetrics: [
      { label: "ARR Milestone", val: "The Derma Co. ₹100 Cr" },
      { label: "Ecosystem Houses", val: "BBlunt & Dr. Sheth's" },
      { label: "Valuation", val: "Unicorn Status" },
    ],
    highlightColor: "#8b5cf6",
    accentBg: "bg-purple-500/10 text-purple-600 border-purple-500/30" },
  {
    year: "2023",
    badge: "Public Market Milestone",
    title: "Historic IPO on BSE & NSE",
    brandFocus: "Honasa Consumer Ltd. Listing",
    tagline: "Ringing the bell as India's premier digital-native BPC company",
    story:
      "Honasa Consumer Limited debuted on India's national exchanges (BSE & NSE) in a landmark initial public offering. Ringing the bell in Mumbai marked a milestone of public trust, proving that clean ethics, digital speed, and purpose-driven consumer care can scale into an enduring institution.",
    impactMetrics: [
      { label: "Exchange", val: "BSE & NSE Listed" },
      { label: "Ticker", val: "HONASA" },
      { label: "Shareholder Trust", val: "Institutional & Retail" },
    ],
    highlightColor: "#f59e0b",
    accentBg: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    isLandmark: true },
  {
    year: "2024",
    badge: "Scale & High-Performance Color",
    title: "The Derma Co. Reaches ₹500 Cr ARR & Staze Launch",
    brandFocus: "The Derma Co. & Staze",
    tagline: "Accelerating consumer adoption and reimagining performance color",
    story:
      "The Derma Co. surged past ₹500 Cr ARR - becoming one of the fastest active skincare brands in Indian history to hit this velocity. Honasa simultaneously unveiled Staze, an innovative color cosmetics house designed for multi-wear longevity in tropical climates.",
    impactMetrics: [
      { label: "ARR Milestone", val: "The Derma Co. ₹500 Cr" },
      { label: "New House", val: "Staze Color Cosmetics" },
      { label: "Reach", val: "10M+ Households" },
    ],
    highlightColor: "#ec4899",
    accentBg: "bg-pink-500/10 text-pink-600 border-pink-500/30" },
  {
    year: "2025+",
    badge: "Global Frontier",
    title: "8 Autonomous Houses & International Expansion",
    brandFocus: "Luminéve & Reginald Men",
    tagline: "Circadian night repair and modern men's wellness built for the world",
    story:
      "Honasa completes its 8-brand architecture with Luminéve (circadian cellular night repair) and Reginald Men (biological men's care). Today, the ecosystem operates with global climate intelligence, exporting India's formulation mastery to international markets across the GCC, SE Asia, and beyond.",
    impactMetrics: [
      { label: "Brand Universe", val: "8 Specialized Houses" },
      { label: "Global Reach", val: "India, GCC & SE Asia" },
      { label: "Annual Scale", val: "₹2000+ Cr Ecosystem" },
    ],
    highlightColor: "#22b486",
    accentBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    isLandmark: true },
];

function OurStoryPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2016");
  const currentMilestone = MILESTONES.find((m) => m.year === selectedYear) ?? MILESTONES[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-clay selection:text-white">
      {/* 1. Header Banner */}
      <div className="border-b border-border/80 bg-linear-to-b from-secondary/30 via-background to-background py-14 md:py-20 px-5 md:px-8">
        <div className="mx-auto max-w-[1440px] space-y-6">
          <div className="flex items-center justify-between pb-6 border-b border-border/60">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors bg-secondary/80 hover:bg-secondary px-3.5 py-1.5 rounded-full"
            >
              <ArrowLeft className="size-3.5" />
              <span>Inside Honasa</span>
            </Link>

            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-clay">
              Corporate Heritage & Milestones
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-clay/10 px-3.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-clay border border-clay/20">
                  The Journey of Honasa
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Our Story
              </h1>

              {/* Exact user-provided narrative text */}
              <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed max-w-2xl">
                Founded in 2016, Mamaearth started as Asia's 1st Brand with MadeSafe certified
                products for babies and soon moved on to crafting safe personal care for adults.
                We're Cruelty-Free certified by PETA. We are also Plastic Positive, which means we
                recycle more plastic than we use. Our love & care for the world we live in is at the
                forefront of who we are.
              </p>
            </div>

            {/* 4 Certification Badges */}
            <div className="grid grid-cols-2 gap-3 shrink-0 w-full sm:w-auto">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 space-y-1">
                <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-600">
                  <ShieldCheck className="size-4" />
                </span>
                <p className="font-display text-xs font-bold text-foreground">Asia's 1st MadeSafe</p>
                <p className="text-[0.625rem] text-muted-foreground">Certified Baby Care</p>
              </div>

              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-3.5 space-y-1">
                <span className="flex size-7 items-center justify-center rounded-lg bg-sky-500/20 text-sky-600">
                  <Heart className="size-4" />
                </span>
                <p className="font-display text-xs font-bold text-foreground">PETA Cruelty-Free</p>
                <p className="text-[0.625rem] text-muted-foreground">Zero Animal Testing</p>
              </div>

              <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-3.5 space-y-1">
                <span className="flex size-7 items-center justify-center rounded-lg bg-teal-500/20 text-teal-600">
                  <Recycle className="size-4" />
                </span>
                <p className="font-display text-xs font-bold text-foreground">100% Plastic Positive</p>
                <p className="text-[0.625rem] text-muted-foreground">Recycle More Than We Use</p>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-3.5 space-y-1">
                <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-600">
                  <Building2 className="size-4" />
                </span>
                <p className="font-display text-xs font-bold text-foreground">BSE & NSE Listed</p>
                <p className="text-[0.625rem] text-muted-foreground">Public Consumer House</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Timeline & River of Growth */}
      <section className="py-12 md:py-16 px-5 md:px-8">
        <div className="mx-auto max-w-[1440px] space-y-12">
          {/* Section Subheader & Scrubber */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-border/70">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-clay" />
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                  Chronological Odyssey
                </span>
              </div>
              <h2 className="font-display mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                The River of Growth (2016 – 2025+)
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Click any year to explore how an idea born out of parental love grew into an
                8-brand personal care ecosystem.
              </p>
            </div>

            {/* Year Selector Pills */}
            <div className="flex flex-wrap gap-1.5 rounded-2xl border border-border/80 bg-card p-1.5 shadow-xs">
              {MILESTONES.map((m) => (
                <button
                  key={m.year}
                  onClick={() => setSelectedYear(m.year)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    selectedYear === m.year
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>
          </div>

          {/* Active Milestone Spotlight Feature Card */}
          <div className="rounded-3xl border-2 border-clay/40 bg-linear-to-br from-card via-card to-secondary/30 p-6 sm:p-10 shadow-lg space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/70">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-clay">
                    {currentMilestone.year}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-bold border ${currentMilestone.accentBg}`}
                  >
                    {currentMilestone.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  {currentMilestone.title}
                </h3>
                <p className="text-xs sm:text-sm italic text-muted-foreground">
                  "{currentMilestone.tagline}"
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-3 flex items-center gap-2">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
                  House In Focus:
                </span>
                <span className="font-display text-sm font-bold text-foreground">
                  {currentMilestone.brandFocus}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed max-w-4xl font-normal">
              {currentMilestone.story}
            </p>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {currentMilestone.impactMetrics.map((met, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border/80 bg-background/90 p-4 space-y-1"
                >
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
                    {met.label}
                  </span>
                  <p className="font-display text-lg font-bold text-foreground">{met.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. The Visual Continuous River Roadmap */}
          <div className="relative pt-6">
            {/* Center Winding Vertical Line on Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-linear-to-b from-emerald-500 via-sky-500 to-amber-500 rounded-full opacity-40" />

            <div className="space-y-8 lg:space-y-12">
              {MILESTONES.map((m, idx) => {
                const isEven = idx % 2 === 0;
                const isCurrent = selectedYear === m.year;

                return (
                  <div
                    key={m.year}
                    onClick={() => setSelectedYear(m.year)}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 cursor-pointer group ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full lg:w-1/2">
                      <div
                        className={`rounded-3xl border p-6 transition-all duration-300 ${
                          isCurrent
                            ? "border-clay shadow-xl bg-card scale-[1.02]"
                            : "border-border/80 bg-card/60 hover:border-clay/60 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/50">
                          <span className="font-display text-2xl font-black text-foreground group-hover:text-clay transition-colors">
                            {m.year}
                          </span>
                          <span className={`rounded-full px-2.5 py-0.5 text-[0.6875rem] font-bold border ${m.accentBg}`}>
                            {m.brandFocus}
                          </span>
                        </div>

                        <h4 className="font-display text-lg font-bold text-foreground mt-1">
                          {m.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                          {m.story}
                        </p>

                        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                          <span className="text-[0.6875rem] text-muted-foreground italic">
                            "{m.tagline}"
                          </span>
                          <span className="text-clay font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>Explore</span>
                            <ChevronRight className="size-3" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node Center Marker */}
                    <div className="hidden lg:flex size-10 items-center justify-center rounded-full border-4 border-background bg-clay text-white shadow-md z-10 font-display text-xs font-bold">
                      {idx + 1}
                    </div>

                    {/* Empty Opposite Column for Desktop balance */}
                    <div className="hidden lg:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Founders' Origin Note */}
          <div className="rounded-3xl border border-border/80 bg-ink text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 size-80 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                <Leaf className="size-3.5" />
                The Founders' Promise
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                "Our love & care for the world we live in is at the forefront of who we are."
              </h3>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                What began in 2016 out of our kitchen table has grown into an ecosystem touching
                over 10 million households across India and the world. Through every milestone - from
                MadeSafe certification to ringing the opening bell on the BSE and NSE - our compass
                remains unchanged: toxin-free formulations, radical consumer obsession, and leaving
                the planet greener than we found it.
              </p>

              <div className="pt-3 flex items-center gap-3">
                <div className="size-10 rounded-full bg-white/15 flex items-center justify-center font-bold text-xs">
                  V & G
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">Varun & Ghazal Alagh</p>
                  <p className="text-xs text-white/60">Co-Founders · Honasa Consumer Limited</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Navigation Footer */}
          <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/our-mission"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Previous: Vision & Mission</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link
                to="/about"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                All About Honasa
              </Link>
              <Link
                to="/leadership-team"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
              >
                <span>Next: Leadership Team</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
