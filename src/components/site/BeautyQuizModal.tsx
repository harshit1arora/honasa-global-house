import { useState } from "react";
import { X, ShieldCheck, Building2, ArrowRight, ArrowLeft, Check, Globe, Clock, DollarSign, Droplets, Share2 } from "lucide-react";
import { useSite } from "@/lib/site-state";
import { markets } from "@/lib/localization";
import { buildRoutine } from "@/lib/ai/mock-service";
import { getProduct, type Concern } from "@/data/products";
import type { RoutineResult } from "@/lib/ai/types";
import honasaLogo from "@/assets/honasa-logo.png";

interface StepOption {
  id: string;
  label: string;
  desc?: string;
}

const STEP_CONCERNS: { id: Concern; label: string; icon: string }[] = [
  { id: "acne", label: "Acne & Blemishes", icon: "🔴" },
  { id: "pigmentation", label: "Dark Spots & Tan", icon: "✨" },
  { id: "dryness", label: "Dryness & Tightness", icon: "💧" },
  { id: "dullness", label: "Dullness & Glow", icon: "☀️" },
  { id: "sun", label: "Sun & UV Defense", icon: "🛡️" },
  { id: "aging", label: "Fine Lines & Firmness", icon: "⏳" },
  { id: "frizz", label: "Hair Frizz & Breakage", icon: "💇" },
  { id: "hair-fall", label: "Hair Fall & Density", icon: "🌱" },
  { id: "grooming", label: "Men's Grooming", icon: "🧔" },
  { id: "baby", label: "Baby & Gentle Care", icon: "👶" },
  { id: "wellness", label: "Inside-Out Wellness", icon: "🌿" },
  { id: "makeup", label: "Long-Wear Makeup", icon: "💄" },
];

export function BeautyQuizModal() {
  const {
    quizOpen,
    setQuizOpen,
    market,
    setMarketCode,
    addRoutineToCart,
    saveRoutineToProfile,
    setActiveProductId,
    price } = useSite();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedConcerns, setSelectedConcerns] = useState<Concern[]>(["acne"]);
  const [currentRoutineLevel, setCurrentRoutineLevel] = useState("basic");
  const [selectedMarketCode, setSelectedMarketCode] = useState(market.code);
  const [skinFeel, setSkinFeel] = useState<"oily" | "dry" | "combination" | "sensitive" | "normal">("combination");
  const [timeEffort, setTimeEffort] = useState<"minimal" | "balanced" | "complete">("balanced");
  const [budgetLevel, setBudgetLevel] = useState<"value" | "mid" | "premium">("mid");

  const [generatedRoutine, setGeneratedRoutine] = useState<RoutineResult | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  if (!quizOpen) return null;

  const toggleConcern = (id: Concern) => {
    setSelectedConcerns((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((x) => x !== id) : prev) : [...prev, id],
    );
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Generate Routine
      const result = buildRoutine({
        concerns: selectedConcerns,
        skinFeel,
        marketCode: selectedMarketCode,
        effort: timeEffort,
        budget: budgetLevel });
      setGeneratedRoutine(result);
      setCurrentStep(7); // Result step
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setGeneratedRoutine(null);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        onClick={() => setQuizOpen(false)}
        className="absolute inset-0 bg-ink/70 backdrop-blur-md"
      />

      {/* Modal Container */}
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl z-10">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-border/80 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <img
              src={honasaLogo}
              alt="Honasa Consumer"
              className="h-7 w-auto object-contain"
            />
            <span className="font-display font-bold text-foreground">
              Build My Honasa Routine
            </span>
            <span className="text-xs text-muted-foreground">· Guided Consultation</span>
          </div>

          <button
            onClick={() => setQuizOpen(false)}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Progress Bar (if step <= 6) */}
        {currentStep <= 6 && (
          <div className="h-1 w-full bg-secondary">
            <div
              className="h-full bg-clay transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            />
          </div>
        )}

        {/* Step Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {/* STEP 1: Concerns */}
          {currentStep === 1 && (
            <div>
              <p className="eyebrow text-clay">Step 01 / 06</p>
              <h3 className="display-lg mt-1 text-xl sm:text-2xl font-bold text-foreground">
                What are you looking to improve?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Select one or more concerns. We formulate routines across brands based on synergy.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {STEP_CONCERNS.map((c) => {
                  const isChecked = selectedConcerns.includes(c.id);
                  return (
                    <button
                      key={c.id}
                      onClick={() => toggleConcern(c.id)}
                      className={`flex items-center gap-3 rounded-2xl p-4 text-left transition-all cursor-pointer ${
                        isChecked
                          ? "border-2 border-clay bg-clay/10 text-foreground shadow-xs font-semibold"
                          : "border border-border/80 bg-card hover:bg-secondary text-muted-foreground"
                      }`}
                    >
                      <span className="text-lg">{c.icon}</span>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm">{c.label}</p>
                      </div>
                      {isChecked && <Check className="size-4 text-clay shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Current Routine */}
          {currentStep === 2 && (
            <div>
              <p className="eyebrow text-clay">Step 02 / 06</p>
              <h3 className="display-lg mt-1 text-xl sm:text-2xl font-bold text-foreground">
                Tell us about your current daily routine.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Knowing what your skin is accustomed to helps us introduce actives safely.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    id: "none",
                    label: "Starting Fresh (No daily routine)",
                    desc: "I just wash with water or generic soap; looking to build a clean baseline." },
                  {
                    id: "basic",
                    label: "Simple Routine (1–2 products)",
                    desc: "I use a cleanser and whatever moisturizer or SPF is nearby." },
                  {
                    id: "advanced",
                    label: "Multi-Step Enthusiast (3+ products)",
                    desc: "I actively layer serums, treatments, and daily sun protection." },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentRoutineLevel(item.id)}
                    className={`w-full rounded-2xl p-4 text-left transition-all cursor-pointer ${
                      currentRoutineLevel === item.id
                        ? "border-2 border-clay bg-clay/10 text-foreground shadow-xs"
                        : "border border-border bg-card hover:bg-secondary text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-display text-base font-bold text-foreground">
                        {item.label}
                      </p>
                      {currentRoutineLevel === item.id && (
                        <Check className="size-4 text-clay" />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Location & Climate */}
          {currentStep === 3 && (
            <div>
              <p className="eyebrow text-clay">Step 03 / 06</p>
              <h3 className="display-lg mt-1 text-xl sm:text-2xl font-bold text-foreground">
                Where do you live?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ambient humidity, UV index, and pollution directly influence how your skin absorbs
                textures.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {markets.map((m) => (
                  <button
                    key={m.code}
                    onClick={() => {
                      setSelectedMarketCode(m.code);
                      setMarketCode(m.code);
                    }}
                    className={`rounded-2xl p-4 text-left transition-all cursor-pointer ${
                      selectedMarketCode === m.code
                        ? "border-2 border-clay bg-clay/10 text-foreground shadow-xs"
                        : "border border-border bg-card hover:bg-secondary text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm">
                        {m.country}
                      </span>
                      {selectedMarketCode === m.code && (
                        <Check className="size-4 text-clay" />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-clay font-medium">{m.climate}</p>
                    <p className="mt-1 text-[0.6875rem] text-muted-foreground">
                      {m.climateNote}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Skin Feel */}
          {currentStep === 4 && (
            <div>
              <p className="eyebrow text-clay">Step 04 / 06</p>
              <h3 className="display-lg mt-1 text-xl sm:text-2xl font-bold text-foreground">
                What does your skin feel like midday?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                This dictates whether we formulate with water gels, barrier lipids, or oil-balancing
                zinc.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: "oily", title: "Oily / Shiny", desc: "Excess shine across forehead and nose" },
                  { id: "combination", title: "Combination", desc: "Oily T-zone, normal to dry cheeks" },
                  { id: "dry", title: "Dry / Parched", desc: "Feels tight, looks dull or flaky" },
                  { id: "sensitive", title: "Sensitive", desc: "Easily flushes, stings with perfumes" },
                  { id: "normal", title: "Balanced", desc: "Rarely feels greasy or uncomfortably dry" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSkinFeel(item.id as any)}
                    className={`rounded-2xl p-4 text-left transition-all cursor-pointer ${
                      skinFeel === item.id
                        ? "border-2 border-clay bg-clay/10 text-foreground shadow-xs font-semibold"
                        : "border border-border bg-card hover:bg-secondary text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm font-bold text-foreground">{item.title}</p>
                    <p className="mt-1 text-[0.6875rem] text-muted-foreground">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Time Commitment */}
          {currentStep === 5 && (
            <div>
              <p className="eyebrow text-clay">Step 05 / 06</p>
              <h3 className="display-lg mt-1 text-xl sm:text-2xl font-bold text-foreground">
                How much time do you actually want to spend?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Consistency beats complexity. We build routines you'll genuinely follow.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    id: "minimal",
                    title: "Quick 2-Minute Essentials",
                    desc: "2 critical steps: Cleanse + Sun Protection / Night Cream." },
                  {
                    id: "balanced",
                    title: "Balanced 5-Minute Routine",
                    desc: "3 steps: Cleanse + Target Treatment Active + Hydrate & Protect." },
                  {
                    id: "complete",
                    title: "Comprehensive 10-Minute Ritual",
                    desc: "Full morning and evening multi-step self-care regimen." },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeEffort(item.id as any)}
                    className={`w-full rounded-2xl p-4 text-left transition-all cursor-pointer ${
                      timeEffort === item.id
                        ? "border-2 border-clay bg-clay/10 text-foreground shadow-xs"
                        : "border border-border bg-card hover:bg-secondary text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-display text-base font-bold text-foreground">
                        {item.title}
                      </p>
                      {timeEffort === item.id && (
                        <Check className="size-4 text-clay" />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Budget Preference */}
          {currentStep === 6 && (
            <div>
              <p className="eyebrow text-clay">Step 06 / 06</p>
              <h3 className="display-lg mt-1 text-xl sm:text-2xl font-bold text-foreground">
                What is your target budget?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Honasa offers value everyday staples through to high-performance active treatments.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  {
                    id: "value",
                    title: "Value Focused (< ₹1,000 / $15)",
                    desc: "Prioritize everyday affordable heroes without compromising safety." },
                  {
                    id: "mid",
                    title: "Balanced Masstige (₹1,000 – ₹2,500)",
                    desc: "Mix of dermatological actives and botanical hydrators." },
                  {
                    id: "premium",
                    title: "Comprehensive Premium (> ₹2,500)",
                    desc: "Night peptides, active serums, and salon-grade formulations." },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBudgetLevel(item.id as any)}
                    className={`w-full rounded-2xl p-4 text-left transition-all cursor-pointer ${
                      budgetLevel === item.id
                        ? "border-2 border-clay bg-clay/10 text-foreground shadow-xs"
                        : "border border-border bg-card hover:bg-secondary text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-display text-base font-bold text-foreground">
                        {item.title}
                      </p>
                      {budgetLevel === item.id && (
                        <Check className="size-4 text-clay" />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 7: Generated Personalized Routine */}
          {currentStep === 7 && generatedRoutine && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-clay/15 px-2.5 py-0.5 text-xs font-bold text-clay uppercase">
                    Your Personalized Regimen
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    Formulated across the Honasa ecosystem
                  </span>
                </div>
                <h3 className="display-lg mt-2 text-2xl font-bold text-foreground">
                  {generatedRoutine.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {generatedRoutine.summary}
                </p>
              </div>

              {/* Product Cards */}
              <div className="space-y-3">
                {generatedRoutine.slots.map((slot, idx) => {
                  const product = getProduct(slot.productId);
                  if (!product) return null;
                  return (
                    <div
                      key={`${slot.productId}-${idx}`}
                      className="rounded-2xl border border-border/80 bg-card p-4 transition-all hover:border-clay/40"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-clay uppercase">
                          Step 0{idx + 1} · {slot.step} ({slot.time.toUpperCase()})
                        </span>
                        <span className="font-bold text-foreground">
                          {price(product.price)}
                        </span>
                      </div>

                      <div className="mt-1.5 flex items-center justify-between">
                        <h4 className="font-display text-base font-bold text-foreground">
                          {product.brand} : {product.name}
                        </h4>
                        <button
                          onClick={() => setActiveProductId(product.id)}
                          className="text-xs text-clay underline cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {product.benefit}
                      </p>

                      <div className="mt-2.5 rounded-lg bg-secondary/60 p-2.5 text-[0.6875rem] text-foreground/90">
                        <strong className="text-clay">Why this fits:</strong> {slot.reason}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total & Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-secondary/50 p-4 border border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Complete Regimen Total
                  </p>
                  <p className="font-display text-xl font-bold text-foreground">
                    {price(generatedRoutine.totalCostInr ?? 0)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      addRoutineToCart(generatedRoutine.slots.map((s) => s.productId));
                      setQuizOpen(false);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer"
                  >
                    <span>Add Entire Routine to Cart</span>
                    <ArrowRight className="size-4" />
                  </button>

                  <button
                    onClick={() => saveRoutineToProfile(generatedRoutine)}
                    className="rounded-full border border-border bg-card px-4 py-3 text-xs font-medium text-foreground hover:bg-secondary cursor-pointer"
                  >
                    Save to Profile
                  </button>

                  <button
                    onClick={() => {
                      setCopiedShare(true);
                      navigator.clipboard?.writeText(
                        `Check out my custom Climate-Adaptive Skincare Routine calibrated for ${market.city}! https://honasa-global.com/routine/${generatedRoutine.title.toLowerCase().replace(/\s+/g, "-")}`
                      );
                      setTimeout(() => setCopiedShare(false), 2500);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-clay/40 bg-clay/10 px-4 py-3 text-xs font-bold text-clay hover:bg-clay/20 cursor-pointer transition-all"
                  >
                    <Share2 className="size-3.5" />
                    <span>{copiedShare ? "Regimen Link Copied!" : "Share Regimen Card"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Navigation (Steps 1 to 6) */}
        {currentStep <= 6 && (
          <div className="flex items-center justify-between border-t border-border/80 bg-background/90 px-6 py-4 backdrop-blur-md">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 cursor-pointer"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer"
            >
              <span>{currentStep === 6 ? "Build My Routine" : "Next Step"}</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        )}

        {currentStep === 7 && (
          <div className="flex items-center justify-between border-t border-border/80 px-6 py-3 bg-secondary/30">
            <button
              onClick={resetQuiz}
              className="text-xs text-muted-foreground hover:text-foreground underline cursor-pointer"
            >
              Retake Consultation
            </button>
            <button
              onClick={() => setQuizOpen(false)}
              className="text-xs font-semibold text-foreground hover:text-clay cursor-pointer"
            >
              Close Consultation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
