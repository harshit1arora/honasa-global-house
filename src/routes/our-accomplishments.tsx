import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Trophy, Award, ShieldCheck, Building2, Calendar, X, ExternalLink, CheckCircle2 } from "lucide-react";
import honasaLogo from "@/assets/honasa-logo.png";

// Accomplishment Image Imports
import gptw2024 from "@/assets/accomplishments/gptw-2024-2025.png";
import superstartupsAsia from "@/assets/accomplishments/superstartups-asia.png";
import et40Under40 from "@/assets/accomplishments/et-40-under-40.png";
import gptw2022 from "@/assets/accomplishments/gptw-2022-2023.png";
import gptw2021 from "@/assets/accomplishments/gptw-2021-2022.png";
import gptw2020 from "@/assets/accomplishments/gptw-2020-2021.png";
import gq30Influential from "@/assets/accomplishments/gq-30-influential.png";
import indiasMostAdmired from "@/assets/accomplishments/indias-most-admired-brand.png";
import nielsenBases2020 from "@/assets/accomplishments/nielsen-bases-2020.png";
import toiMotherChild2020 from "@/assets/accomplishments/toi-mother-child-2020.png";
import forbesAsiaPower2022 from "@/assets/accomplishments/forbes-asia-power-2022.png";
import businessTodayMpw2024 from "@/assets/accomplishments/business-today-mpw-2024.png";
import fortuneMpw2025 from "@/assets/accomplishments/fortune-mpw-2025.png";
import hurunIndiaTop200 from "@/assets/accomplishments/hurun-india-top-200-2024.png";
import impact50Women2024 from "@/assets/accomplishments/impact-50-women-2024.png";
import womenOnTop from "@/assets/accomplishments/women-on-top.png";
import feminaFab65 from "@/assets/accomplishments/femina-fab-65.png";
import ficciYoungLeaders2024 from "@/assets/accomplishments/ficci-young-leaders-2024.png";
import dermaCoMyntraRisingStar from "@/assets/accomplishments/derma-co-myntra-rising-star.png";
import flipkartFlipstars2024 from "@/assets/accomplishments/flipkart-flipstars-2024.png";
import graziaIndieBeauty2025 from "@/assets/accomplishments/grazia-indie-beauty-2025.png";

export const Route = createFileRoute("/our-accomplishments")({
  head: () => ({
    meta: [
      { title: "Our Accomplishments : Honasa Consumer Limited" },
      {
        name: "description",
        content:
          "Explore the landmark milestones, national accolades, Forbes recognitions, Great Place to Work certifications, and industry innovation awards won by Honasa Consumer Limited." },
    ] }),
  component: OurAccomplishmentsPage });

type AccomplishmentCategory = "all" | "workplace" | "leadership" | "innovation" | "retail";

interface AccomplishmentItem {
  id: string;
  title: string;
  image: string;
  year: string;
  organization: string;
  category: AccomplishmentCategory;
  categoryLabel: string;
  description: string;
  highlight?: string;
}

const ACCOMPLISHMENTS: AccomplishmentItem[] = [
  // Row 1
  {
    id: "gptw-2024-2025",
    title: "Great Place To Work Jan 2024 - Jan 2025",
    image: gptw2024,
    year: "2024 – 2025",
    organization: "Great Place to Work® Institute India",
    category: "workplace",
    categoryLabel: "Workplace & Culture",
    description:
      "Certified as a Great Place to Work in India, recognizing Honasa's employee-centric culture, agile growth environment, and inclusive talent practices across all 8 brand verticals.",
    highlight: "Conducted through rigorous Trust Index assessment and Culture Audit benchmarks." },
  {
    id: "superstartups-asia",
    title: "Super Start Ups Asia",
    image: superstartupsAsia,
    year: "2019",
    organization: "SuperStartUps Asia",
    category: "innovation",
    categoryLabel: "Brand & Innovation",
    description:
      "Awarded the SuperStartUps Asia Gold Trophy for Mamaearth, celebrating high-velocity consumer adoption, disruptive D2C speed, and purpose-driven brand creation in Asia.",
    highlight: "Recognized as Asia's breakout consumer brand solving unmet parenting and self-care needs." },
  {
    id: "et-40-under-40",
    title: "ET 40 Under Forty",
    image: et40Under40,
    year: "2021",
    organization: "The Economic Times & Spencer Stuart",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Recognized among India's top business leaders under the age of 40 by The Economic Times, honoring transformative leadership in building a multi-brand FMCG house.",
    highlight: "Celebrates visionary entrepreneurs redefining Indian corporate industry." },

  // Row 2
  {
    id: "gptw-2022-2023",
    title: "Great Places To Work",
    image: gptw2022,
    year: "Dec 2022 – Dec 2023",
    organization: "Great Place to Work® Institute India",
    category: "workplace",
    categoryLabel: "Workplace & Culture",
    description:
      "Certified for exceptional workplace trust, high-performance camaraderie, and people-first leadership across all Honasa operating brands and corporate hubs.",
    highlight: "Recognizing high trust and psychological safety across fast-scaling business pods." },
  {
    id: "gptw-2021-2022",
    title: "Great Places To Work",
    image: gptw2021,
    year: "Dec 2021 – Dec 2022",
    organization: "Great Place to Work® Institute India",
    category: "workplace",
    categoryLabel: "Workplace & Culture",
    description:
      "National workplace certification upholding GrowCode organizational values and psychological safety for agile brand teams during rapid omnichannel expansion.",
    highlight: "Endorsement of Honasa's collaborative and entrepreneurial culture." },
  {
    id: "gptw-2020-2021",
    title: "Great Places To Work",
    image: gptw2020,
    year: "Dec 2020 – Nov 2021",
    organization: "Great Place to Work® Institute India",
    category: "workplace",
    categoryLabel: "Workplace & Culture",
    description:
      "Inaugural Great Place to Work certification achieved during high pandemic disruption, validating Honasa's strong employee care and flexible digital collaboration systems.",
    highlight: "Demonstrated exemplary organizational resilience and employee empathy." },

  // Row 3
  {
    id: "gq-30-influential-2022",
    title: "GQ's 30 Most Influential Young Indians Of 2022 (Ghazal Alagh)",
    image: gq30Influential,
    year: "2022",
    organization: "GQ India",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Honoring Ghazal Alagh among the 30 Most Influential Young Indians shaping modern Indian culture, digital-first entrepreneurship, and clean consumer choices.",
    highlight: "Selected for pioneering toxin-free beauty formulations and purpose-led brands." },
  {
    id: "indias-most-admired-brand",
    title: "India's Most Admired Brand",
    image: indiasMostAdmired,
    year: "2021 – 2022",
    organization: "Herald Global & BARC Asia (Prestigious Brands Asia)",
    category: "innovation",
    categoryLabel: "Brand & Innovation",
    description:
      "Conferred with the Prestigious Brands Asia award for outstanding consumer trust, brand equity, and purpose-led product innovation across India and Southeast Asia.",
    highlight: "Audited on market performance, brand recall, and sustainability commitments." },
  {
    id: "nielsen-bases-2020",
    title: "Nielsen BASES Breakthrough Innovations 2020",
    image: nielsenBases2020,
    year: "2020",
    organization: "NielsenIQ BASES",
    category: "innovation",
    categoryLabel: "Brand & Innovation",
    description:
      "Breakthrough Innovation Award conferred upon Honasa Consumer Pvt. Ltd. (Mamaearth) for pioneering certified toxin-free formulations that established new consumer personal care benchmarks.",
    highlight: "Recognized as one of the fastest consumer goods brands in India to reach mass adoption." },

  // Row 4
  {
    id: "toi-mother-child-2020",
    title: "The Times Of India Most Valued Mother & Child Brands 2020",
    image: toiMotherChild2020,
    year: "2020",
    organization: "The Times of India & Femina",
    category: "innovation",
    categoryLabel: "Brand & Innovation",
    description:
      "Voted India's Most Valued Mother & Child Brand for Mamaearth's MadeSafe-certified baby care formulations trusted by millions of Indian parents.",
    highlight: "Asia's 1st Brand with MadeSafe certification for baby personal care." },
  {
    id: "forbes-asia-power-2022",
    title: "Forbes Asia's Power Businesswomen 2022",
    image: forbesAsiaPower2022,
    year: "2022",
    organization: "Forbes Asia",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Ghazal Alagh named to Forbes Asia's prestigious annual list of 20 top women leaders breaking new ground in the Asian business landscape.",
    highlight: "Spotlight on visionary female leadership taking an Indian consumer company to unicorn scale." },
  {
    id: "business-today-mpw-2024",
    title: "Business Today: Most Powerful Women 2024",
    image: businessTodayMpw2024,
    year: "2024",
    organization: "Business Today",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Celebrated in Business Today's Most Powerful Women in Indian Business for institutionalizing innovation velocity and steering Honasa through its benchmark public IPO on BSE & NSE.",
    highlight: "Recognizing high-impact female business leadership across corporate India." },

  // Row 5
  {
    id: "fortune-mpw-2025",
    title: "Fortune Most Powerful Women 2025",
    image: fortuneMpw2025,
    year: "2025",
    organization: "Fortune India",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Featured in Fortune India's Most Powerful Women 2025, honoring transformative corporate governance, high-velocity R&D scaling, and institutional capital efficiency.",
    highlight: "Recognized as a leading corporate visionary in modern Indian consumer markets." },
  {
    id: "hurun-india-top-200-2024",
    title: "Hurun India's Top 200 Self-Made Entrepreneurs Of The Millennia 2024 List",
    image: hurunIndiaTop200,
    year: "2024",
    organization: "Hurun Report India",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Ranked among India's top self-made entrepreneurs who built disruptive, multi-thousand-crore enterprises in the 21st century without legacy family conglomerates.",
    highlight: "Honoring visionary founders building generational enterprises." },
  {
    id: "impact-50-women-2024",
    title: "IMPACT 50 Most Influential Women 2024",
    image: impact50Women2024,
    year: "2024",
    organization: "Exchange4media & IMPACT Magazine",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Recognized among the 50 Most Influential Women in Media, Marketing, and Advertising for pioneering digital-first D2C brand building and authentic consumer storytelling.",
    highlight: "Celebrated for transformative digital consumer engagement strategies." },

  // Row 6
  {
    id: "women-on-top",
    title: "Women On Top",
    image: womenOnTop,
    year: "2023",
    organization: "Women On Top",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Celebrating trailblazing female founders who redefined Indian corporate leadership, promoted green manufacturing, and built iconic household consumer brands.",
    highlight: "Honoring executive leadership and inclusive business practices." },
  {
    id: "femina-fab-65",
    title: "Femina Fab 65",
    image: feminaFab65,
    year: "2024",
    organization: "Femina & Mamaearth Beautiful Indians",
    category: "innovation",
    categoryLabel: "Brand & Innovation",
    description:
      "Celebrating 65 inspiring icons of goodness and social impact across cinema, sports, entrepreneurship, and public service at the Mamaearth Beautiful Indians initiative.",
    highlight: "Celebration of everyday goodness and transformative social empowerment." },
  {
    id: "ficci-young-leaders-2024",
    title: "FICCI Young Leaders Inspiring Women Leader Award 2024",
    image: ficciYoungLeaders2024,
    year: "2024",
    organization: "Federation of Indian Chambers of Commerce & Industry (FICCI)",
    category: "leadership",
    categoryLabel: "Leadership & Founders",
    description:
      "Conferred the Inspiring Women Leader Award by the FICCI Young Leaders Forum for fostering women-led entrepreneurship, sustainable beauty formulations, and domestic manufacturing.",
    highlight: "Honoring national economic contributions and industrial innovation." },

  // Row 7
  {
    id: "derma-co-myntra-rising-star",
    title: "The Derma Co. Was Awarded The Best Skincare Brand At The Myntra Rising Star Event",
    image: dermaCoMyntraRisingStar,
    year: "2024",
    organization: "Myntra Beauty & ELLE India",
    category: "retail",
    categoryLabel: "Industry & Retail Milestones",
    description:
      "The Derma Co. awarded Best Skincare Brand at the Myntra Rising Star Beauty Awards for pioneering science-backed active skincare formulations at mass-premium pricing.",
    highlight: "Selected as India's fastest-scaling active ingredient skincare brand on Myntra." },
  {
    id: "flipkart-flipstars-2024",
    title: "Highest GMV Achieved In BGM - Honasa Awarded At Flipkart Flipstars '24",
    image: flipkartFlipstars2024,
    year: "2024",
    organization: "Flipkart",
    category: "retail",
    categoryLabel: "Industry & Retail Milestones",
    description:
      "Honored with the Highest GMV Achieved in Beauty, General Merchandise & Personal Care at Flipkart Flipstars 2024, acknowledging omnichannel retail dominance and consumer trust.",
    highlight: "Top grossing beauty house across Flipkart's national festive sales." },
  {
    id: "grazia-indie-beauty-2025",
    title: "Grazia Indie Beauty Superstars 2025",
    image: graziaIndieBeauty2025,
    year: "2025",
    organization: "Grazia India & Myntra Beauty",
    category: "retail",
    categoryLabel: "Industry & Retail Milestones",
    description:
      "Recognized as Indie Beauty Superstars 2025 for shaping trendsetting personal care, colour cosmetics, and next-generation youth beauty cultures across digital India.",
    highlight: "Celebrated for innovative formulations and high-performance beauty lines." },
];

const CATEGORY_TABS: { id: AccomplishmentCategory; label: string; count: number }[] = [
  { id: "all", label: "All Recognitions", count: ACCOMPLISHMENTS.length },
  {
    id: "workplace",
    label: "Workplace & Culture",
    count: ACCOMPLISHMENTS.filter((a) => a.category === "workplace").length },
  {
    id: "leadership",
    label: "Leadership & Founders",
    count: ACCOMPLISHMENTS.filter((a) => a.category === "leadership").length },
  {
    id: "innovation",
    label: "Brand & Innovation",
    count: ACCOMPLISHMENTS.filter((a) => a.category === "innovation").length },
  {
    id: "retail",
    label: "Retail & Industry",
    count: ACCOMPLISHMENTS.filter((a) => a.category === "retail").length },
];

function OurAccomplishmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<AccomplishmentCategory>("all");
  const [activeModalItem, setActiveModalItem] = useState<AccomplishmentItem | null>(null);

  const filteredAccomplishments =
    selectedCategory === "all"
      ? ACCOMPLISHMENTS
      : ACCOMPLISHMENTS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-clay selection:text-white">
      {/* 1. Header Navigation & Hero */}
      <div className="border-b border-border/80 bg-linear-to-b from-secondary/30 via-background to-background py-12 md:py-16 px-5 md:px-8">
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
              Track Record & Recognition
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-clay/10 px-3.5 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-clay border border-clay/20 flex items-center gap-1.5">
                  <Trophy className="size-3" />
                  <span>21 Landmark Honors</span>
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Our Accomplishments
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                From pioneering Asia's first MadeSafe baby care brand to ringing the bell at BSE &
                NSE : explore the awards, workplace certifications, and national honors celebrating
                our pursuit of purposeful beauty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-3 shadow-xs text-xs font-semibold text-muted-foreground">
                <ShieldCheck className="size-4 text-emerald-600 ml-1" />
                <span className="pr-2">4x Great Place to Work®</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-3 shadow-xs text-xs font-semibold text-muted-foreground">
                <Building2 className="size-4 text-sky-600 ml-1" />
                <span className="pr-2">BSE & NSE Listed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-10 md:py-14 md:px-8 space-y-10">
        {/* 2. Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-border/70">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[0.625rem] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-background/80 text-muted-foreground"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. The 3-Column Responsive Accomplishments Grid (Exact Match to User Reference) */}
        <section className="space-y-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAccomplishments.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group rounded-3xl p-5 border border-border/80 bg-card hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Image Card: Rounded with Clean Background */}
                  <div className="overflow-hidden rounded-2xl bg-secondary/30 flex items-center justify-center p-3 h-52 sm:h-56 transition-colors group-hover:bg-secondary/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title Below Image: Exactly matching Screenshot Wording & Style */}
                  <div className="text-center space-y-1.5 px-2">
                    <h3 className="font-display text-sm sm:text-base font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[0.6875rem] font-medium text-muted-foreground uppercase tracking-wider">
                      {item.organization} · {item.year}
                    </p>
                  </div>
                </div>

                {/* Subtle Action Link */}
                <div className="pt-3 text-center">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:underline">
                    <span>View Accomplishment Details</span>
                    <ExternalLink className="size-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Cross-Navigation to Other "Inside Honasa" Pages */}
        <div className="pt-10 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/leadership-team"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Previous: Leadership Team</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/our-values"
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Our Values
            </Link>
            <Link
              to="/our-mission"
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Our Mission
            </Link>
            <Link
              to="/our-story"
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Our Story
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              <span>Inside Honasa Overview</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. MODAL DIALOG: Detailed View on Card Click */}
      {/* ========================================================================= */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              aria-label="Close accomplishment modal"
              className="absolute top-5 right-5 rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <div className="space-y-6">
              {/* Award Image Container */}
              <div className="overflow-hidden rounded-2xl bg-secondary/30 flex items-center justify-center p-6 max-h-72">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="max-h-60 max-w-full object-contain rounded-xl"
                />
              </div>

              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-clay/10 px-3 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wider text-clay border border-clay/20">
                    {activeModalItem.categoryLabel}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-0.5 text-[0.6875rem] font-bold text-muted-foreground flex items-center gap-1">
                    <Calendar className="size-3" />
                    <span>{activeModalItem.year}</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground">
                  {activeModalItem.title}
                </h3>

                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  Presented by {activeModalItem.organization}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeModalItem.description}
              </p>

              {/* Key Highlight / Fact */}
              {activeModalItem.highlight && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs font-medium text-foreground/90">
                    {activeModalItem.highlight}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
