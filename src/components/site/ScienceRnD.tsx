import { useState } from "react";
import { FlaskConical, Atom, ShieldCheck, Microscope, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { traceProducts, type TraceProduct } from "@/data/content";
import { useSite } from "@/lib/site-state";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ScienceRnD() {
  const { setActiveProductId } = useSite();
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const activeProduct = traceProducts[selectedProductIdx]!;
  const currentStep = activeProduct.steps[activeStepIdx]!;

  return (
    <section id="science-section" className="border-b border-border/80 bg-secondary/30 py-6 md:py-8">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2">
            <StatusBadge mode="simulated" text="Simulated R&D Traceability" />
          </div>
          <p className="eyebrow flex items-center gap-2 text-clay">
            <span className="size-1.5 rounded-full bg-clay" />
            Rigorous Clean Formulations
          </p>
          <h2 className="display-lg mt-2 text-foreground font-semibold">
            Science, Not Just Marketing.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            We reject gimmick concentrations and non-bioavailable actives. Every formula is
            engineered around physiological skin barriers, certified clean matrices, and real-world
            stability testing.
          </p>
        </div>

        {/* 4 Pillars of Honasa R&D */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Atom,
              title: "Bio-Available Molecules",
              desc: "Targeted actives at optimal pH buffers (3.8–5.5) ensuring actual follicular penetration without barrier damage." },
            {
              icon: FlaskConical,
              title: "Clean Matrix Design",
              desc: "100% free of parabens, mineral oil, sulfates, and artificial allergens. Tested for non-comedogenic tolerance." },
            {
              icon: ShieldCheck,
              title: "Clinical Testing Panels",
              desc: "Repeat insult patch testing (HRIPT) and ophthalmological safety across diverse Fitzpatrick skin types I through VI." },
            {
              icon: Microscope,
              title: "Multi-Climate Stability",
              desc: "Formulations stress-tested between 4°C and 45°C to withstand desert dryness and tropical monsoon humidity." },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-clay/50 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-clay/15 text-clay mb-4">
                <pillar.icon className="size-5" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Signature Interactive Tool: "TRACE THE PRODUCT" */}
        <div className="mt-16 rounded-3xl border border-clay/30 bg-card p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-clay text-white px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider">
                  Interactive R&D Explorer
                </span>
                <span className="text-xs text-muted-foreground">· Trace The Molecule</span>
              </div>
              <h3 className="display-lg mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                Trace The Product: From Signal to Molecule.
              </h3>
            </div>

            {/* Product Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Select Formula:</span>
              <div className="flex gap-1.5">
                {traceProducts.map((tp, idx) => (
                  <button
                    key={tp.id}
                    onClick={() => {
                      setSelectedProductIdx(idx);
                      setActiveStepIdx(0);
                    }}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      selectedProductIdx === idx
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "border border-border bg-secondary/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tp.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stepper Timeline Navigation */}
          <div className="mt-8 grid grid-cols-5 gap-2 border-b border-border/70 pb-6">
            {activeProduct.steps.map((st, idx) => {
              const isCurrent = activeStepIdx === idx;
              const isPast = activeStepIdx > idx;
              return (
                <button
                  key={st.stepNumber}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`text-left p-2 rounded-xl transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-clay/10 border-b-2 border-clay"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                    Step {st.stepNumber}
                  </span>
                  <p className="mt-1 font-display text-xs font-bold text-foreground truncate">
                    {st.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Content */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="eyebrow text-clay">
                Phase {currentStep.stepNumber} of 05 · {activeProduct.brand}
              </span>
              <h4 className="display-lg mt-1 text-2xl font-bold text-foreground">
                {currentStep.title}: {currentStep.subtitle}
              </h4>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {currentStep.description}
              </p>

              {/* Scientific Note Callout */}
              <div className="mt-6 rounded-2xl border border-clay/30 bg-clay/5 p-4 text-xs text-foreground/90">
                <span className="font-bold text-clay uppercase text-[0.625rem] block mb-1">
                  Chemical / Biological Note
                </span>
                <p>{currentStep.scientificNote}</p>
              </div>
            </div>

            {/* Step Specifications Box */}
            <div className="rounded-2xl border border-border bg-secondary/40 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Formulation Parameters
              </span>
              <div className="mt-4 space-y-3">
                {currentStep.details.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center justify-between rounded-xl bg-card p-3 border border-border/60 text-xs"
                  >
                    <span className="font-medium text-muted-foreground">{d.label}</span>
                    <span className="font-bold text-foreground">{d.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60">
                <button
                  onClick={() => setActiveStepIdx((p) => Math.max(0, p - 1))}
                  disabled={activeStepIdx === 0}
                  className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 cursor-pointer"
                >
                  ← Previous
                </button>
                <button
                  onClick={() =>
                    setActiveProductId(activeProduct.id)
                  }
                  className="text-xs font-semibold text-clay hover:underline cursor-pointer"
                >
                  Inspect Final Product →
                </button>
                <button
                  onClick={() =>
                    setActiveStepIdx((p) =>
                      Math.min(activeProduct.steps.length - 1, p + 1),
                    )
                  }
                  disabled={activeStepIdx === activeProduct.steps.length - 1}
                  className="text-xs text-clay font-bold hover:underline disabled:opacity-30 cursor-pointer"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
