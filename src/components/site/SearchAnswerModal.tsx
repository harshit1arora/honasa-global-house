import { useState } from "react";
import { X, Search, Camera, ShieldCheck, Building2, ArrowRight, Upload, BookOpen, Check, ShieldAlert } from "lucide-react";
import { useSite } from "@/lib/site-state";
import { aiService, type SearchAnswerResult } from "@/lib/ai";
import { getProduct, type Product } from "@/data/products";
import { brands } from "@/data/brands";
import { editorialArticles } from "@/data/content";

const PRESET_LOOKS = [
  { id: "look-dewy", label: "Glass Dewy Skin Look", styleName: "glow dewy glass" },
  { id: "look-salon", label: "High-Volume Salon Blowout", styleName: "hair blowout curl" },
  { id: "look-matte", label: "Bold Matte Lip Aesthetic", styleName: "makeup lip matte" },
];

export function SearchAnswerModal() {
  const {
    searchOpen,
    setSearchOpen,
    setActiveProductId,
    addRoutineToCart,
    addToCart,
    price } = useSite();

  const [activeMode, setActiveMode] = useState<"text" | "visual">("text");
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchAnswerResult | null>(null);

  // Visual search state
  const [visualNote, setVisualNote] = useState<string | null>(null);
  const [visualProductIds, setVisualProductIds] = useState<string[]>([]);
  const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);

  if (!searchOpen) return null;

  const handleTextSearch = async (term: string) => {
    if (!term.trim()) return;
    setQuery(term);
    setIsSearching(true);
    try {
      const result = await aiService.searchAnswer({ query: term });
      setSearchResult(result);
    } finally {
      setIsSearching(false);
    }
  };

  const handleVisualSearch = async (lookName: string) => {
    setIsAnalyzingImage(true);
    try {
      const res = await aiService.visualSearch({ fileName: lookName, styleName: lookName });
      setVisualNote(res.note);
      setVisualProductIds(res.productIds);
    } finally {
      setIsAnalyzingImage(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div
        onClick={() => setSearchOpen(false)}
        className="absolute inset-0 bg-ink/75 backdrop-blur-md"
      />

      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl z-10">
        {/* Top Switcher Bar */}
        <div className="flex items-center justify-between border-b border-border/80 px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveMode("text")}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeMode === "text"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Search className="size-3.5" />
              <span>Search = Answer Engine</span>
            </button>

            <button
              onClick={() => setActiveMode("visual")}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeMode === "visual"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Camera className="size-3.5 text-clay" />
              <span>Visual Search (Look Matcher)</span>
            </button>
          </div>

          <button
            onClick={() => setSearchOpen(false)}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* MODE 1: Search as an Answer Engine */}
        {activeMode === "text" && (
          <div className="flex-1 overflow-y-auto p-6">
            {/* Search Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTextSearch(query);
              }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask anything: 'acne', 'sunscreen for humid weather', 'salicylic acid'..."
                className="w-full rounded-full border border-border bg-card/80 pl-11 pr-24 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-clay focus:outline-none shadow-xs"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Quick Keyword Pills */}
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="text-muted-foreground py-1">Popular:</span>
              {["acne", "sunscreen", "niacinamide", "hair frizz", "baby wash", "glowing skin"].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => handleTextSearch(term)}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-muted-foreground hover:text-foreground hover:border-clay cursor-pointer"
                  >
                    {term}
                  </button>
                ),
              )}
            </div>

            {/* AI Synthesized Answer Box */}
            {isSearching ? (
              <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-center text-xs text-muted-foreground animate-pulse">
                Synthesizing cross-brand answers, ingredients, and matching routines...
              </div>
            ) : searchResult ? (
              <div className="mt-8 space-y-6 animate-in fade-in duration-200">
                {/* AI Answer Summary */}
                <div className="rounded-2xl border border-clay/30 bg-clay/5 p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-clay uppercase">
                    <ShieldCheck/>
                    <span>AI Synthesized Answer</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/90 leading-relaxed font-medium">
                    {searchResult.aiAnswer}
                  </p>
                </div>

                {/* Matching Brands */}
                {searchResult.matchedBrandSlugs.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                      Specialized Houses
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {searchResult.matchedBrandSlugs.map((slug: string) => {
                        const b = brands.find((x) => x.slug === slug);
                        return (
                          <span
                            key={slug}
                            className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground"
                          >
                            {b?.name} · {b?.positioning}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Matching Products Grid */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                    Formulations ({searchResult.matchedProductIds.length})
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {searchResult.matchedProductIds.map((pid: string) => {
                      const prod = getProduct(pid);
                      if (!prod) return null;
                      return (
                        <div
                          key={pid}
                          className="rounded-2xl border border-border/80 bg-card p-4 flex items-center justify-between gap-3 hover:border-clay/40"
                        >
                          <div>
                            <span className="text-[0.625rem] font-bold text-clay uppercase">
                              {prod.brand}
                            </span>
                            <h5
                              onClick={() => {
                                setActiveProductId(prod.id);
                                setSearchOpen(false);
                              }}
                              className="font-display text-sm font-bold text-foreground hover:text-clay cursor-pointer"
                            >
                              {prod.name}
                            </h5>
                            <span className="text-xs font-semibold text-foreground">
                              {price(prod.price)}
                            </span>
                          </div>

                          <button
                            onClick={() => addToCart(prod.id, 1)}
                            className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
                          >
                            Add
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Suggested Routine */}
                {searchResult.suggestedRoutine && (
                  <div className="rounded-2xl border border-border bg-secondary/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                        Complete Regimen
                      </span>
                      <h4 className="font-display text-base font-bold text-foreground">
                        {searchResult.suggestedRoutine.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {searchResult.suggestedRoutine.slots.length} coordinated steps
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        addRoutineToCart(
                          searchResult.suggestedRoutine!.slots.map((s: { productId: string }) => s.productId),
                        );
                        setSearchOpen(false);
                      }}
                      className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-xs"
                    >
                      Add Complete Regimen

                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}

        {/* MODE 2: Visual Search (Look Matcher Simulation) */}
        {activeMode === "visual" && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Search With An Image.
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Upload or select an inspiration look to analyze its texture, aesthetic, and
                finish. Our vision architecture maps the visual style to exact Honasa product
                combinations.
              </p>
            </div>

            {/* Upload Zone */}
            <div className="rounded-3xl border-2 border-dashed border-border bg-card/50 p-8 text-center hover:border-clay/60 transition-colors">
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-clay/10 text-clay mb-3">
                <Upload className="size-6" />
              </div>
              <p className="font-display text-sm font-bold text-foreground">
                Drop your inspiration photo here, or browse files
              </p>
              <p className="text-[0.6875rem] text-muted-foreground mt-1">
                Supports JPG, PNG, WEBP. (Simulated look matching)
              </p>
            </div>

            {/* Quick Sample Looks */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                Or test with preset aesthetics:
              </span>
              <div className="grid sm:grid-cols-3 gap-3">
                {PRESET_LOOKS.map((look) => (
                  <button
                    key={look.id}
                    onClick={() => handleVisualSearch(look.styleName)}
                    className="rounded-2xl border border-border bg-card p-4 text-left hover:border-clay hover:bg-secondary cursor-pointer transition-all"
                  >
                    <span className="text-xs font-bold text-foreground block">
                      {look.label}
                    </span>
                    <span className="text-[0.625rem] text-clay font-medium mt-1 block">
                      Analyze Look →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Match Results */}
            {isAnalyzingImage ? (
              <div className="rounded-2xl border border-border bg-card p-6 text-center text-xs text-muted-foreground animate-pulse">
                Analyzing visual parameters, radiance index, and texture finish...
              </div>
            ) : visualNote ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="rounded-2xl border border-clay/30 bg-clay/5 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-clay mb-1">
                    <ShieldCheck/>
                    <span>Computer Vision Detection</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{visualNote}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Formulations to Recreate This Look:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {visualProductIds.map((pid) => {
                      const prod = getProduct(pid);
                      if (!prod) return null;
                      return (
                        <div
                          key={pid}
                          className="rounded-2xl border border-border bg-card p-4 flex items-center justify-between gap-3"
                        >
                          <div>
                            <span className="text-[0.625rem] font-bold text-clay uppercase">
                              {prod.brand}
                            </span>
                            <h5
                              onClick={() => {
                                setActiveProductId(prod.id);
                                setSearchOpen(false);
                              }}
                              className="font-display text-sm font-bold text-foreground hover:text-clay cursor-pointer"
                            >
                              {prod.name}
                            </h5>
                            <span className="text-xs font-bold text-foreground">
                              {price(prod.price)}
                            </span>
                          </div>

                          <button
                            onClick={() => addToCart(prod.id, 1)}
                            className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
                          >
                            Add
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => {
                    addRoutineToCart(visualProductIds);
                    setSearchOpen(false);
                  }}
                  className="w-full rounded-full bg-primary py-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md"
                >
                  Add Complete Look Regimen to Cart
                </button>
              </div>
            ) : null}

            <p className="text-center text-[0.625rem] text-muted-foreground pt-2">
              Visual search is intended for aesthetic and look recreation. It does not diagnose
              clinical skin conditions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
