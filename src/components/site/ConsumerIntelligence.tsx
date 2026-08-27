import { useState } from "react";
import { ShieldCheck, Building2, MessageSquare, Database, Lightbulb, FlaskConical, Rocket, RefreshCw, CheckCircle2 } from "lucide-react";
import { consumerIntelligenceStages, type IntelligenceStage } from "@/data/content";
import { StatusBadge } from "@/components/ui/StatusBadge";

const STAGE_ICONS = [
  MessageSquare,
  Database,
  Lightbulb,
  FlaskConical,
  Rocket,
  RefreshCw,
  CheckCircle2,
];

export function ConsumerIntelligence() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = consumerIntelligenceStages[activeStageIdx]!;

  return (
    <section className="border-b border-border/80 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2">
            <StatusBadge mode="concept" text="Future-State Concept Vision" />
          </div>
          <p className="eyebrow flex items-center gap-2 text-clay">
            <span className="size-1.5 rounded-full bg-clay" />
            The Feedback Flywheel
          </p>
          <h2 className="display-lg mt-2 text-foreground font-semibold">
            We Listen Before We Build.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Traditional FMCG companies spend 18 months in closed boardrooms guessing what consumers
            need. Honasa operates as a consumer-listening engine: listening directly to daily
            struggles, analyzing signals, and formulating in continuous rapid release sprints.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Navigator */}
        <div className="mt-12">
          {/* Horizontal Step Pills */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-border/70">
            {consumerIntelligenceStages.map((stage, idx) => {
              const isCurrent = activeStageIdx === idx;
              const Icon = STAGE_ICONS[idx] ?? MessageSquare;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`shrink-0 flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                      : "border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="size-3.5" />
                  <span>
                    {stage.number}. {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Deep-Dive Card */}
          <div className="mt-8 rounded-3xl border border-clay/30 bg-card/90 p-6 md:p-10 shadow-lg backdrop-blur-md">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-clay uppercase">
                  <span>Stage {activeStage.number} of 07</span>
                  <span>·</span>
                  <span>{activeStage.metric}</span>
                </div>

                <h3 className="display-lg mt-2 text-2xl sm:text-3xl font-bold text-foreground">
                  {activeStage.title}: {activeStage.subtitle}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Example Signal Box */}
                <div className="mt-6 rounded-2xl border border-border/80 bg-secondary/50 p-4 sm:p-5">
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
                    Example Conceptual Signal
                  </span>
                  <p className="mt-1 text-sm font-display font-semibold italic text-foreground">
                    {activeStage.signalSample}
                  </p>
                </div>
              </div>

              {/* Right Side: Visual Metric & Outcome */}
              <div className="rounded-2xl border border-border bg-background/80 p-6 sm:p-8 flex flex-col justify-between h-full shadow-inner">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-clay/15 text-clay mb-4">
                    <ShieldCheck/>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Key Pipeline Metric
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">
                    {activeStage.metric}
                  </h4>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-clay">
                      Actionable Product Outcome
                    </span>
                    <p className="mt-1 text-sm text-foreground/90 leading-relaxed font-medium">
                      {activeStage.outcome}
                    </p>
                  </div>
                </div>

                {/* Navigation Stepper Controls */}
                <div className="mt-8 flex items-center justify-between pt-4 border-t border-border/60">
                  <button
                    onClick={() => setActiveStageIdx((prev) => Math.max(0, prev - 1))}
                    disabled={activeStageIdx === 0}
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 cursor-pointer"
                  >
                    ← Previous Stage
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {activeStageIdx + 1} of {consumerIntelligenceStages.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveStageIdx((prev) =>
                        Math.min(consumerIntelligenceStages.length - 1, prev + 1),
                      )
                    }
                    disabled={activeStageIdx === consumerIntelligenceStages.length - 1}
                    className="text-xs font-semibold text-clay hover:underline disabled:opacity-30 cursor-pointer"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
