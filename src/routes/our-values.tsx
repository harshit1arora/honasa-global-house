import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Building2, Zap, HeartHandshake, Users, Compass, Trophy, Target, Rocket, CheckCircle2, Quote, ChevronRight, ArrowRight } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

export const Route = createFileRoute("/our-values")({
  head: () => ({
    meta: [
      { title: "GrowCode & Our Values : Honasa Consumer Limited" },
      {
        name: "description",
        content:
          "Explore GrowCode: the common code of six core values shaping the culture, decisions, and growth across Honasa Consumer Limited and its house of 8 brands." },
    ] }),
  component: OurValuesPage });

interface ValueCard {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  color: string;
  badge: string;
  inAction: string;
  metric: string;
  metricLabel: string;
  principles: string[];
}

const VALUES_DATA: ValueCard[] = [
  {
    id: "do-more-with-less",
    title: "DO MORE WITH LESS",
    tagline: "Think creatively. Drive impact without over-relying on resources",
    summary:
      "Frugality is not a constraint - it is our primary engine for creativity. We prioritize high-leverage experiments and lean cycles over bloated budgets.",
    color: "emerald",
    badge: "Agility & Frugality",
    inAction:
      "Rapid prototyping in targeted micro-batches before scaling to millions of consumers.",
    metric: "10x",
    metricLabel: "Experimentation leverage",
    principles: [
      "Resourcefulness beats sheer spending power every time.",
      "Identify the single highest-impact lever before committing capital.",
      "Eliminate bureaucratic excess and invest directly in formula quality.",
    ] },
  {
    id: "act-now",
    title: "ACT NOW",
    tagline: "Speed is a superpower",
    summary:
      "In a dynamic global market, momentum is everything. We favor rapid execution, real-world testing, and immediate feedback over prolonged deliberation.",
    color: "sky",
    badge: "Speed & Execution",
    inAction:
      "Proprietary 45-day idea-to-shelf formulation engine powered by consumer data signals.",
    metric: "45 Days",
    metricLabel: "Idea to shelf engine",
    principles: [
      "Bias for action: a good decision executed today beats a perfect plan next month.",
      "Short feedback loops with active consumers over hypothetical debates.",
      "Treat velocity as our greatest strategic moat against legacy conglomerates.",
    ] },
  {
    id: "obsess-over-consumer",
    title: "OBSESS OVER CONSUMER",
    tagline: "Be their voice in every decision",
    summary:
      "We invert traditional corporate beauty. Before our chemists synthesize a molecule, we analyze millions of organic consumer conversations, dermatology queries, and climate needs.",
    color: "teal",
    badge: "Customer Centricity",
    inAction:
      "5M+ monthly direct consumer data points informing clean ingredient selection.",
    metric: "100%",
    metricLabel: "Barrier safe & toxin-free",
    principles: [
      "Listen obsessively: every product originates from real consumer pain points.",
      "Zero compromise on certified toxin-free safety and dermatological efficacy.",
      "Measure success not by unit shipments, but by repeated consumer trust.",
    ] },
  {
    id: "own-it",
    title: "OWN IT",
    tagline: "Act like an entrepreneur, drive outcomes, not tasks",
    summary:
      "Every Honasian operates with founder-level accountability. We don't just complete assignments - we own end-to-end outcomes with pride and responsibility.",
    color: "indigo",
    badge: "Founder Mindset",
    inAction:
      "Autonomous brand pods with cross-functional authority and end-to-end P&L ownership.",
    metric: "100%",
    metricLabel: "Accountability focus",
    principles: [
      "Take personal responsibility for the result, not just the activity.",
      "Be radically transparent about hurdles and proactively seek solutions.",
      "Think long-term like an owner while executing with daily urgency.",
    ] },
  {
    id: "push-boundaries",
    title: "PUSH BOUNDARIES",
    tagline: "Be bold. Think big. Shape what's next",
    summary:
      "We reject the status quo. From India's first digital-native house of beauty to clinical climate stress testing, we dare to build what others deem impossible.",
    color: "amber",
    badge: "Audacious Vision",
    inAction:
      "Extreme environmental chamber stress testing (45°C, 85% RH) to guarantee tropical active stability.",
    metric: "8 Houses",
    metricLabel: "Challenging legacy FMCG",
    principles: [
      "Question category norms and invent new paradigms in personal care.",
      "Embrace ambitious bets that expand the frontier of clean active beauty.",
      "Learn fearlessly from bold experiments that do not pan out.",
    ] },
  {
    id: "think-we-before-me",
    title: "THINK WE BEFORE ME",
    tagline: "Win together, grow together",
    summary:
      "Honasa is an interconnected ecosystem, not a collection of competing silos. We share research, technology, and insights openly so the entire house flourishes.",
    color: "emerald",
    badge: "Unified Culture",
    inAction:
      "Shared R&D labs, supply chains, and customer data infrastructure across all 8 brand worlds.",
    metric: "1 Team",
    metricLabel: "United ecosystem",
    principles: [
      "Collective mission always supersedes individual or brand-level ego.",
      "Foster psychological safety, mutual respect, and unreserved celebration of peers.",
      "Share knowledge and breakthroughs generously across all 8 houses.",
    ] },
];

/* Custom bespoke illustrations matching the user's vector drawings */
function CardIllustration({ id }: { id: string }) {
  switch (id) {
    case "do-more-with-less":
      return (
        <svg
          viewBox="0 0 240 180"
          className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle background grid */}
          <line x1="20" y1="150" x2="220" y2="150" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="20" y1="100" x2="220" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="20" y1="50" x2="220" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

          {/* Stepladder */}
          <path d="M175 150 L195 70" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M195 70 L210 150" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="179" y1="130" x2="206" y2="130" stroke="#475569" strokeWidth="2" />
          <line x1="184" y1="105" x2="201" y2="105" stroke="#475569" strokeWidth="2" />
          <line x1="189" y1="85" x2="198" y2="85" stroke="#475569" strokeWidth="2" />

          {/* Huge Rising Arrow */}
          <path
            d="M35 140 L105 110 L150 75 L190 35"
            stroke="#22b486"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M170 30 L198 32 L196 60 Z"
            fill="#22b486"
          />

          {/* Team pushing upward together */}
          {/* Figure 1 (Left supporting) */}
          <circle cx="55" cy="115" r="7" fill="#3b82f6" />
          <path d="M55 122 L55 140 L45 150 M55 140 L65 150" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M55 128 L68 116" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />

          {/* Figure 2 (Middle pushing) */}
          <circle cx="100" cy="92" r="7" fill="#22b486" />
          <path d="M100 99 L100 120 L90 150 M100 120 L110 150" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M100 106 L112 88" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" />

          {/* Figure 3 (Center leader) */}
          <circle cx="140" cy="65" r="7" fill="#3b82f6" />
          <path d="M140 72 L140 100 L130 150 M140 100 L148 150" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M140 78 L152 64" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />

          {/* Figure 4 (On ladder celebrating at top) */}
          <circle cx="190" cy="55" r="6" fill="#22b486" />
          <path d="M190 61 L190 85 L182 105 M190 85 L196 105" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M190 68 L178 50 M190 68 L200 45" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "act-now":
      return (
        <svg
          viewBox="0 0 240 180"
          className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Target Bullseye on top right */}
          <circle cx="195" cy="50" r="22" stroke="#3b82f6" strokeWidth="3" fill="#eff6ff" />
          <circle cx="195" cy="50" r="14" stroke="#22b486" strokeWidth="3" fill="#f0fdf4" />
          <circle cx="195" cy="50" r="6" fill="#22b486" />

          {/* Motion Trails */}
          <path d="M30 65 L90 65" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M40 115 L110 115" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M50 145 L130 145" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

          {/* Paper Airplane 1 (Top leader) */}
          <g transform="translate(100, 35) rotate(-8)">
            <polygon points="0,20 65,0 45,35 25,24" fill="#3b82f6" />
            <polygon points="0,20 65,0 25,24" fill="#60a5fa" />
            {/* Person flying on it pointing forward */}
            <circle cx="28" cy="2" r="5" fill="#1e293b" />
            <path d="M28 7 L28 18 M28 10 L45 0" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Paper Airplane 2 (Middle) */}
          <g transform="translate(55, 75) rotate(-5)">
            <polygon points="0,20 60,0 42,32 24,22" fill="#22b486" />
            <polygon points="0,20 60,0 24,22" fill="#34d399" />
            {/* Person working with laptop */}
            <circle cx="24" cy="5" r="5" fill="#1e293b" />
            <path d="M24 10 L24 20 M24 13 L34 18" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Paper Airplane 3 (Bottom) */}
          <g transform="translate(90, 115) rotate(-12)">
            <polygon points="0,20 58,0 40,32 23,22" fill="#3b82f6" />
            <polygon points="0,20 58,0 23,22" fill="#93c5fd" />
            {/* Person with lightbulb idea */}
            <circle cx="25" cy="5" r="5" fill="#1e293b" />
            <path d="M25 10 L25 20 M25 12 L35 7" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <circle cx="38" cy="2" r="3" fill="#f59e0b" />
          </g>
        </svg>
      );

    case "obsess-over-consumer":
      return (
        <svg
          viewBox="0 0 240 180"
          className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Table / Collaboration desk */}
          <rect x="50" y="115" width="140" height="12" rx="6" fill="#e2e8f0" />
          <line x1="70" y1="127" x2="70" y2="155" stroke="#94a3b8" strokeWidth="3" />
          <line x1="170" y1="127" x2="170" y2="155" stroke="#94a3b8" strokeWidth="3" />

          {/* Dialogue balloon with consumer signals */}
          <rect x="35" y="45" width="30" height="18" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="43" cy="54" r="2" fill="#3b82f6" />
          <circle cx="50" cy="54" r="2" fill="#3b82f6" />
          <circle cx="57" cy="54" r="2" fill="#3b82f6" />

          {/* Central Analytics / Consumer chart on table */}
          <circle cx="120" cy="52" r="20" fill="#f0fdf4" stroke="#22b486" strokeWidth="2" />
          <path d="M110 57 L117 48 L123 52 L131 43" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Person 1 (Left analyst holding tablet) */}
          <circle cx="65" cy="78" r="7" fill="#3b82f6" />
          <path d="M65 85 L65 115 M55 115 L75 115" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M65 92 L78 98" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          <rect x="75" y="93" width="12" height="16" rx="2" fill="#1e293b" />

          {/* Person 2 (Center team leader pointing at analytics) */}
          <circle cx="115" cy="72" r="8" fill="#22b486" />
          <path d="M115 80 L115 115 M105 115 L125 115" stroke="#22b486" strokeWidth="3" strokeLinecap="round" />
          <path d="M115 88 L130 80" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" />

          {/* Person 3 (Right researcher typing on laptop) */}
          <circle cx="165" cy="78" r="7" fill="#3b82f6" />
          <path d="M165 85 L165 115 M155 115 L175 115" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="145,115 160,115 158,103 147,103" fill="#1e293b" />
        </svg>
      );

    case "own-it":
      return (
        <svg
          viewBox="0 0 240 180"
          className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pie Chart / Ownership metric on upper left */}
          <circle cx="65" cy="55" r="18" fill="#3b82f6" />
          <path d="M65 55 L65 37 A18 18 0 0 1 83 55 Z" fill="#22b486" />
          <circle cx="65" cy="55" r="7" fill="#ffffff" />

          {/* Bar Chart card */}
          <rect x="155" y="95" width="45" height="35" rx="5" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="162" y="112" width="6" height="12" fill="#3b82f6" rx="1" />
          <rect x="172" y="105" width="6" height="19" fill="#22b486" rx="1" />
          <rect x="182" y="100" width="6" height="24" fill="#3b82f6" rx="1" />

          {/* Road map puzzle boundary board on right */}
          <path
            d="M140 40 C160 30, 180 50, 195 40 C205 55, 185 70, 200 80"
            stroke="#cbd5e1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
          />

          {/* Dynamic Leader in Center */}
          <circle cx="115" cy="75" r="8" fill="#1e293b" />
          {/* Hair */}
          <path d="M107 72 C107 65, 123 65, 123 72" fill="#1e293b" />
          {/* Torso */}
          <path d="M115 83 L115 130 L102 165 M115 130 L128 165" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" />
          {/* Left hand holding tablet */}
          <path d="M115 92 L95 102" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
          <rect x="85" y="95" width="16" height="22" rx="2" fill="#1e293b" />
          {/* Right hand pointing authoritatively at roadmap */}
          <path d="M115 92 L150 70" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "push-boundaries":
      return (
        <svg
          viewBox="0 0 240 180"
          className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Podium steps */}
          <rect x="50" y="125" width="40" height="35" rx="3" fill="#e2e8f0" />
          <rect x="95" y="105" width="40" height="55" rx="3" fill="#cbd5e1" />
          <rect x="140" y="75" width="40" height="85" rx="3" fill="#94a3b8" />

          {/* Person 1 on Podium 1 looking through telescope */}
          <circle cx="70" cy="98" r="6" fill="#22b486" />
          <path d="M70 104 L70 125" stroke="#22b486" strokeWidth="2.5" />
          <line x1="70" y1="108" x2="88" y2="96" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

          {/* Person 2 on Podium 2 with ideas */}
          <circle cx="115" cy="78" r="6" fill="#3b82f6" />
          <path d="M115 84 L115 105" stroke="#3b82f6" strokeWidth="2.5" />
          <circle cx="115" cy="62" r="5" fill="#f59e0b" />
          <line x1="115" y1="52" x2="115" y2="48" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Person 3 on Highest Podium 3 holding trophy */}
          <circle cx="160" cy="48" r="7" fill="#22b486" />
          <path d="M160 55 L160 75" stroke="#22b486" strokeWidth="3" />
          {/* Raised arms with trophy */}
          <path d="M160 62 L150 42 M160 62 L172 40" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" />
          {/* Trophy cup */}
          <path d="M170 32 L182 32 L178 44 C176 48 174 48 174 48 L170 32 Z" fill="#3b82f6" />
          <line x1="176" y1="48" x2="176" y2="52" stroke="#3b82f6" strokeWidth="2" />
          <line x1="172" y1="52" x2="180" y2="52" stroke="#3b82f6" strokeWidth="2" />

          {/* Sparkling stars / constellation above */}
          <path d="M190 20 L193 25 L198 26 L194 30 L195 35 L190 32 L185 35 L186 30 L182 26 L187 25 Z" fill="#fbbf24" />
        </svg>
      );

    case "think-we-before-me":
      return (
        <svg
          viewBox="0 0 240 180"
          className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trophy of shared victory */}
          <g transform="translate(105, 95)">
            <rect x="0" y="0" width="28" height="30" rx="3" fill="#3b82f6" />
            <path d="M8 8 L14 16 L20 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <path d="M-5 5 C-10 5 -10 15 -2 18" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M33 5 C38 5 38 15 30 18" stroke="#3b82f6" strokeWidth="2" fill="none" />
          </g>

          {/* Left Team Member celebrating */}
          <circle cx="70" cy="72" r="7" fill="#3b82f6" />
          <path d="M70 79 L70 120 L60 150 M70 120 L78 150" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
          {/* Raised high-five hand */}
          <path d="M70 88 L95 65" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />

          {/* Center Colleague raising hands */}
          <circle cx="102" cy="55" r="7" fill="#22b486" />
          <path d="M102 62 L102 95 L95 140 M102 95 L110 140" stroke="#22b486" strokeWidth="3" strokeLinecap="round" />
          <path d="M102 70 L95 50 M102 70 L115 50" stroke="#22b486" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right Team Member high-fiving */}
          <circle cx="165" cy="65" r="8" fill="#22b486" />
          <path d="M165 73 L165 115 L155 150 M165 115 L175 150" stroke="#22b486" strokeWidth="3.5" strokeLinecap="round" />
          {/* Raised high-five hand meeting center */}
          <path d="M165 82 L135 60" stroke="#22b486" strokeWidth="3" strokeLinecap="round" />

          {/* High five spark */}
          <circle cx="115" cy="58" r="3" fill="#f59e0b" />
          <line x1="115" y1="52" x2="115" y2="48" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="120" y1="56" x2="124" y2="54" stroke="#f59e0b" strokeWidth="1.5" />
        </svg>
      );

    default:
      return null;
  }
}

function OurValuesPage() {
  const [activeValueId, setActiveValueId] = useState<string>(VALUES_DATA[0]!.id);
  const activeValue = VALUES_DATA.find((v) => v.id === activeValueId) ?? VALUES_DATA[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500 selection:text-white">
      {/* 1. Botanical Green Hero Banner (Directly matches Screenshot 1) */}
      <div className="relative overflow-hidden bg-linear-to-r from-[#20aa7d] via-[#24b587] to-[#1c986e] text-white py-14 md:py-20 px-5 md:px-8 shadow-lg">
        {/* Foliage Leaf Silhouettes along the top and bottom borders */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          {/* Top leaves */}
          <svg className="absolute -top-6 left-4 w-32 h-32 fill-white" viewBox="0 0 100 100">
            <path d="M10 20 Q50 0 80 30 Q40 50 10 20 Z" />
            <path d="M20 40 Q70 10 90 60 Q40 70 20 40 Z" />
            <path d="M5 60 Q60 40 85 90 Q30 80 5 60 Z" />
          </svg>
          <svg className="absolute -top-8 right-6 w-40 h-40 fill-white" viewBox="0 0 100 100">
            <path d="M90 20 Q50 0 20 30 Q60 50 90 20 Z" />
            <path d="M80 40 Q30 10 10 60 Q60 70 80 40 Z" />
            <path d="M95 60 Q40 40 15 90 Q70 80 95 60 Z" />
          </svg>
          {/* Bottom foliage fronds */}
          <svg className="absolute -bottom-8 left-10 w-48 h-24 fill-white" viewBox="0 0 200 100">
            <path d="M0 100 Q40 30 70 60 Q90 20 120 70 Q140 10 170 80 Q185 30 200 100 Z" />
          </svg>
          <svg className="absolute -bottom-8 right-12 w-48 h-24 fill-white" viewBox="0 0 200 100">
            <path d="M0 100 Q30 20 60 70 Q90 10 120 80 Q150 25 180 65 L200 100 Z" />
          </svg>
        </div>

        {/* Ambient Radial Highlight */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px]">
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between pb-6 mb-4 border-b border-white/20">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md"
            >
              <ArrowLeft className="size-3.5" />
              <span>Inside Honasa</span>
            </Link>

            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-emerald-100/90">
              Corporate Culture & Manifesto
            </span>
          </div>

          {/* Central GrowCode Title Lockup */}
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="space-y-1 max-w-xl">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-xs">
                GrowCode
              </h1>
              <p className="text-base sm:text-lg text-emerald-50 italic font-medium leading-snug">
                A common code of values shaping our culture, decisions, & growth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Body Section: Our Values */}
      <section className="py-12 md:py-16 px-5 md:px-8">
        <div className="mx-auto max-w-[1440px] space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Our Values
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Six foundational pillars engineered not as poster quotes, but as daily decision-making
              frameworks across our 8 autonomous laboratories.
            </p>
          </div>

          {/* 3. The 6 Visual GrowCode Cards Grid (Exact match to Screenshots 2 & 3) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES_DATA.map((val) => {
              const isSelected = activeValueId === val.id;
              return (
                <div
                  key={val.id}
                  onClick={() => setActiveValueId(val.id)}
                  className={`group relative rounded-3xl border-2 transition-all duration-300 p-6 flex flex-col justify-between bg-card cursor-pointer ${
                    isSelected
                      ? "border-sky-500 shadow-xl ring-2 ring-sky-500/20 bg-linear-to-b from-card via-card to-secondary/30"
                      : "border-sky-300/80 hover:border-sky-400 hover:shadow-lg"
                  }`}
                >
                  <div>
                    {/* Value Card Title (Bold and Clean) */}
                    <div className="text-center pt-2 pb-4 border-b border-border/50">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        {val.badge}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#22b486] uppercase group-hover:text-sky-600 transition-colors">
                        {val.title}
                      </h3>
                    </div>

                    {/* Vector Illustration */}
                    <div className="py-4 flex items-center justify-center bg-radial from-secondary/30 to-transparent rounded-2xl my-2">
                      <CardIllustration id={val.id} />
                    </div>

                    {/* Italicized Tagline (Matches the user's screenshots) */}
                    <div className="pt-2 text-center">
                      <p className="text-sm font-medium italic text-sky-700 dark:text-sky-400 leading-relaxed px-2">
                        "{val.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Key Operational Insight */}
                  <div className="mt-5 pt-4 border-t border-border/60">
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {val.summary}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs font-semibold">
                      <span className="text-clay flex items-center gap-1">
                        <span>See practice</span>
                        <ChevronRight className="size-3 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.6875rem] font-bold text-foreground">
                        {val.metric}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. Interactive Spotlight: How We Practice This Value Every Day */}
          <div className="mt-14 rounded-3xl border border-border/80 bg-linear-to-br from-card via-secondary/20 to-card p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-border/70">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay/10 px-3 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                  <ShieldCheck/>
                  GrowCode In Action
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Living "{activeValue.title}"
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  "{activeValue.tagline}"
                </p>
              </div>

              {/* Metric Card */}
              <div className="rounded-2xl border border-border bg-background p-4 flex items-center gap-4 shadow-xs">
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#22b486]">
                    {activeValue.metric}
                  </span>
                  <p className="text-[0.6875rem] uppercase font-semibold text-muted-foreground">
                    {activeValue.metricLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 pt-6 items-center">
              <div className="space-y-4">
                <h4 className="font-display text-base font-bold text-foreground">
                  Operational Application Across Honasa:
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeValue.summary}
                </p>

                <div className="rounded-2xl bg-secondary/40 border border-border/70 p-4">
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay block mb-1">
                    Real-World Benchmark:
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    {activeValue.inAction}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-base font-bold text-foreground">
                  The Three Ground Rules:
                </h4>
                <div className="space-y-2.5">
                  {activeValue.principles.map((p, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/80 p-3"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#22b486] mt-0.5" />
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Founders' Perspective on GrowCode */}
          <div className="rounded-3xl border border-border/80 bg-ink text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -bottom-16 size-80 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative max-w-3xl space-y-6">
              <Quote className="size-10 text-emerald-400/60" />

              <blockquote className="font-display text-lg sm:text-2xl font-medium leading-relaxed">
                "Culture isn't what's written on the walls of an office; it's the instincts people rely
                on when nobody is watching. GrowCode is our compass - whether formulating a new active
                for sensitive skin, designing supply chain logistics, or listening to consumer reviews
                at 2 AM."
              </blockquote>

              <div className="flex items-center gap-4 pt-2 border-t border-white/15">
                <div className="flex size-11 items-center justify-center rounded-full bg-white/10 font-display font-bold text-white text-sm">
                  VA & GA
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm text-white">
                    Varun Alagh & Ghazal Alagh
                  </h5>
                  <p className="text-xs text-white/60">
                    Co-Founders · Honasa Consumer Limited
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Navigation Footer to Other Inside Honasa Pages */}
          <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground text-center sm:text-left">
              <span>Next up in Inside Honasa:</span>
              <span className="ml-2 font-semibold text-foreground">Our Mission & Purpose</span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/about"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                All About Honasa
              </Link>
              <Link
                to="/our-mission"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
              >
                <span>Read Our Mission</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
