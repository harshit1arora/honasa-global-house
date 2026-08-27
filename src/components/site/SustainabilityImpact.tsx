import { ShieldCheck, Building2, Leaf, Recycle, HeartHandshake } from "lucide-react";
import { sustainabilityMetrics } from "@/data/content";

const METRIC_ICONS = [Recycle, Leaf, ShieldCheck, HeartHandshake];

export function SustainabilityImpact() {
  return (
    <section className="border-b border-border/80 bg-background py-6 md:py-8">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-2 text-clay">
            <span className="size-1.5 rounded-full bg-clay" />
            Beauty With A Purpose
          </p>
          <h2 className="display-lg mt-2 text-foreground font-semibold">
            Real Responsibility. Verified Impact.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            We do not treat sustainability as an investor footnote. From recycling surplus plastic
            to planting geo-tagged trees with smallholder farmers, purpose is embedded directly into
            every formulation we ship.
          </p>
        </div>

        {/* 4 Impact Metrics Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sustainabilityMetrics.map((item, idx) => {
            const Icon = METRIC_ICONS[idx] ?? Leaf;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-clay/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6">
                    <Icon className="size-6" />
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="display-lg font-display text-3xl sm:text-4xl font-bold text-foreground">
                      {item.metric}
                    </span>
                    <span className="text-xs font-bold text-clay uppercase">
                      {item.unit}
                    </span>
                  </div>

                  <h3 className="font-display mt-2 text-base font-bold text-foreground">
                    {item.label}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground block">
                    Verification Standard
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    {item.verifiedBy}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Plant Goodness Story Banner */}
        <div className="mt-12 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Continuous Community Stewardship
              </span>
              <h3 className="font-display mt-1 text-xl sm:text-2xl font-bold text-foreground">
                Your routine grows real forests.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                When you order through the Honasa house, a tree is planted in your name in degraded
                rural landscapes. You receive coordinates, farmer details, and photo updates as your
                tree matures.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="rounded-2xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground">
                GPS Geo-Tagged Tracking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
