import { useState } from "react";
import { BookOpen, ShieldCheck, Building2, ArrowRight, Clock, User, Plus } from "lucide-react";
import { editorialArticles, type EditorialArticle } from "@/data/content";
import { getProduct } from "@/data/products";
import { productImage } from "@/data/images";
import { useSite } from "@/lib/site-state";

export function BeautyEditorial() {
  const { addRoutineToCart, setActiveProductId, price } = useSite();
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | null>(null);

  return (
    <section id="editorial-section" className="border-b border-border/80 bg-secondary/25 py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-2 text-clay">
              <span className="size-1.5 rounded-full bg-clay" />
              Journal & Insights
            </p>
            <h2 className="display-lg mt-2 text-foreground font-semibold">
              The Beauty Edit.
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              Editorial guidance written by cosmetic chemists, dermatologists, and brand founders.
              No fluffy marketing : just bio-compatibility, active layering, and climate strategies.
            </p>
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {editorialArticles.map((art) => {
            const routineProds = art.routineProductIds
              .map((id) => getProduct(id))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));

            const totalCostInr = routineProds.reduce((sum, p) => sum + p.price, 0);

            return (
              <article
                key={art.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-clay/50 hover:shadow-xl"
              >
                <div>
                  {/* Article Image Cover */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-secondary">
                    <img
                      src={productImage(art.image)}
                      alt={art.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[0.625rem] font-bold text-clay uppercase shadow-xs">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      <span>{art.readTime}</span>
                      <span>·</span>
                      <span>{art.publishedAt}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedArticle(art)}
                      className="font-display mt-3 text-lg font-bold text-foreground leading-snug group-hover:text-clay transition-colors cursor-pointer"
                    >
                      {art.title}
                    </h3>

                    <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-foreground">
                      <span>By {art.author.name}</span>
                      <span className="text-muted-foreground font-normal">({art.author.role})</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Commerce CTA: "SHOP THIS ROUTINE" */}
                <div className="border-t border-border/70 bg-secondary/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                      Formulated Regimen
                    </span>
                    <span className="text-xs font-bold text-foreground">
                      {price(totalCostInr)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="flex-1 rounded-full border border-border bg-background py-2 text-xs font-semibold text-foreground hover:bg-secondary cursor-pointer"
                    >
                      Read Article
                    </button>

                    <button
                      onClick={() => addRoutineToCart(art.routineProductIds)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-xs"
                    >
                      <Plus className="size-3" />
                      <span>Shop Routine</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            onClick={() => setSelectedArticle(null)}
            className="absolute inset-0 bg-ink/75 backdrop-blur-md"
          />

          <div className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-background p-6 sm:p-10 shadow-2xl z-10">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <span className="text-xs font-bold uppercase text-clay">
                {selectedArticle.category} · {selectedArticle.readTime}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto space-y-6">
              <h2 className="display-lg text-2xl sm:text-3xl font-bold text-foreground">
                {selectedArticle.title}
              </h2>
              <p className="text-sm font-semibold text-clay">{selectedArticle.subtitle}</p>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <img
                  src={productImage(selectedArticle.image)}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-foreground/90 leading-relaxed font-normal">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="rounded-2xl bg-secondary/60 p-5 border border-border">
                <strong className="text-xs font-bold text-clay uppercase block mb-1">
                  Key Scientific Takeaway:
                </strong>
                <p className="font-display font-medium text-sm text-foreground">
                  {selectedArticle.keyTakeaway}
                </p>
              </div>

              {/* Shop This Routine inside modal */}
              <div className="rounded-2xl border border-clay/30 bg-clay/5 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">
                    Shop the products featured in this guide
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {selectedArticle.routineProductIds.length} synergized steps
                  </p>
                </div>

                <button
                  onClick={() => {
                    addRoutineToCart(selectedArticle.routineProductIds);
                    setSelectedArticle(null);
                  }}
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md"
                >
                  Add Entire Routine to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
