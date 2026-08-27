import { useState } from "react";
import { Star, ShieldCheck, Building2, Filter, CheckCircle2, ThumbsUp, MapPin } from "lucide-react";
import { communityReviews, type CommunityReview } from "@/data/content";
import { getProduct } from "@/data/products";
import { useSite } from "@/lib/site-state";

export function ReviewsCommunity() {
  const { setActiveProductId, price } = useSite();
  const [filterClimate, setFilterClimate] = useState<string>("all");
  const [filterSkinType, setFilterSkinType] = useState<string>("all");

  const filteredReviews = communityReviews.filter((r) => {
    if (filterClimate !== "all" && !r.climate.toLowerCase().includes(filterClimate.toLowerCase())) {
      return false;
    }
    if (filterSkinType !== "all" && !r.skinType.toLowerCase().includes(filterSkinType.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <section className="border-b border-border/80 bg-background py-6 md:py-8">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-2 text-clay">
            <span className="size-1.5 rounded-full bg-clay" />
            Verified Community Feedback
          </p>
          <h2 className="display-lg mt-2 text-foreground font-semibold">
            Real People. Real Routines.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Beauty products perform differently across ambient climates, genetics, and lifestyles.
            Read authentic reviews filtered by your environment.
          </p>
        </div>

        {/* AI Review Consensus Summary Box */}
        <div className="mt-8 rounded-3xl border border-clay/30 bg-clay/5 p-6 md:p-8 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-clay text-white shadow-xs">
              <ShieldCheck/>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-clay">
                  AI Review Synthesis
                </span>
                <span className="text-xs text-muted-foreground">· 74,000+ Analyzed Reviews</span>
              </div>
              <h3 className="font-display mt-1 text-lg font-bold text-foreground">
                Cross-Brand Community Consensus:
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3 text-xs text-foreground/90">
                <div className="rounded-xl bg-background/80 p-3 border border-border/60">
                  <strong className="text-clay block mb-1">Non-Greasy Absorption:</strong>
                  92% of oily and combination skin reviewers in humid climates note zero greasy
                  residue under sun protection.
                </div>
                <div className="rounded-xl bg-background/80 p-3 border border-border/60">
                  <strong className="text-clay block mb-1">Active Tolerance:</strong>
                  Less than 2% reported transient irritation when introducing The Derma Co 2% BHA
                  serum into basic routines.
                </div>
                <div className="rounded-xl bg-background/80 p-3 border border-border/60">
                  <strong className="text-clay block mb-1">Cross-Brand Synergy:</strong>
                  Users pairing Mamaearth botanicals with clinical active serums reported 38% higher
                  consistency rates.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Row */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/70 bg-secondary/30 p-3.5 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-foreground">Filter Reviews:</span>

            <select
              value={filterClimate}
              onChange={(e) => setFilterClimate(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground outline-none cursor-pointer"
            >
              <option value="all">All Climates</option>
              <option value="humid">Tropical / Humid (India)</option>
              <option value="arid">Desert Arid (UAE)</option>
              <option value="cool">Cool / Winter (UK)</option>
              <option value="moderate">Moderate Urban (US / Global)</option>
            </select>

            <select
              value={filterSkinType}
              onChange={(e) => setFilterSkinType(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground outline-none cursor-pointer"
            >
              <option value="all">All Skin Profiles</option>
              <option value="oily">Oily & Acne-Prone</option>
              <option value="dry">Dry & Sensitive</option>
              <option value="combination">Combination</option>
            </select>
          </div>

          <span className="text-muted-foreground">
            Showing {filteredReviews.length} community stories
          </span>
        </div>

        {/* Reviews Cards Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm hover:border-clay/40 transition-all"
            >
              <div>
                {/* Author & Location */}
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display font-bold text-foreground text-sm">
                        {rev.author}
                      </h4>
                      {rev.verifiedPurchase && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.5625rem] font-bold text-emerald-600">
                          <CheckCircle2 className="size-2.5" /> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-[0.6875rem] text-muted-foreground mt-0.5">
                      {rev.skinType} · {rev.ageGroup}
                    </p>
                  </div>

                  <div className="text-right text-xs">
                    <span className="flex items-center gap-1 text-clay font-medium text-[0.6875rem]">
                      <MapPin className="size-3" /> {rev.location} ({rev.climate})
                    </span>
                    <span className="text-[0.625rem] text-muted-foreground">{rev.date}</span>
                  </div>
                </div>

                {/* Rating Stars & Title */}
                <div className="mt-4 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-500" />
                  ))}
                </div>

                <h5 className="font-display text-base font-bold text-foreground mt-2">
                  "{rev.title}"
                </h5>

                <p className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Paired Products Footer */}
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[0.625rem] font-semibold text-muted-foreground uppercase">
                    Routine:
                  </span>
                  {rev.pairedProducts.map((pid) => {
                    const prod = getProduct(pid);
                    return (
                      <button
                        key={pid}
                        onClick={() => setActiveProductId(pid)}
                        className="rounded-md border border-border bg-secondary px-2 py-1 text-[0.625rem] font-medium text-foreground hover:bg-clay hover:text-white transition-colors cursor-pointer"
                      >
                        {prod?.name}
                      </button>
                    );
                  })}
                </div>

                <span className="flex items-center gap-1 text-[0.625rem] text-muted-foreground">
                  <ThumbsUp className="size-3" /> {rev.helpfulCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
