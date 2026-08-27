import { createFileRoute } from "@tanstack/react-router";
import { UniversalShop } from "@/components/site/UniversalShop";
import { ShieldCheck, Building2, ArrowRight } from "lucide-react";
import { useSite } from "@/lib/site-state";
import honasaLogo from "@/assets/honasa-logo.png";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Universal Shop : Honasa Global Beauty Ecosystem" },
      {
        name: "description",
        content:
          "Shop across all 8 specialized Honasa houses: Mamaearth, The Derma Co., Aqualogica, BBlunt, Dr. Sheth's, Staze, Luminéve, and Reginald Men." },
    ] }),
  component: ShopPage });

function ShopPage() {
  const { setQuizOpen, setConciergeOpen } = useSite();

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Banner */}
      <div className="border-b border-border/70 bg-secondary/30 py-12 px-5 md:px-8">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                The Universal Catalog
              </span>
            </div>
            <h1 className="font-display mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Formulations For Every Need.
            </h1>
            <p className="mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore science-backed actives, hydrating sun protection, salon haircare, and clean
              everyday essentials engineered by our 8 specialized houses.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuizOpen(true)}
              className="rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-sm transition-all"
            >
              Build My Routine Quiz →
            </button>
            <button
              onClick={() => setConciergeOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold text-foreground hover:bg-secondary cursor-pointer"
            >
              <ShieldCheck/>
              <span>Ask AI Matcher</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Universal Shop Component */}
      <UniversalShop />
    </div>
  );
}
