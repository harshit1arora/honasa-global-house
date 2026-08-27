import { useState } from "react";
import { X, ShieldCheck, Building2, Star, Plus, Minus, ArrowRight, Clock, Heart, Droplet, Check, Info } from "lucide-react";
import { getProduct, type RoutineStep } from "@/data/products";
import { brands, getBrand } from "@/data/brands";
import { productImage } from "@/data/images";
import { aiService } from "@/lib/ai";
import { useSite } from "@/lib/site-state";

export function ProductDetailModal() {
  const {
    activeProductId,
    setActiveProductId,
    addToCart,
    toggleWishlist,
    isWishlisted,
    price } = useSite();

  const [activeTab, setActiveTab] = useState<"ingredients" | "how-to-use" | "routine" | "ask-ai">("ingredients");
  const [selectedIngredientIdx, setSelectedIngredientIdx] = useState<number>(0);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!activeProductId) return null;
  const product = getProduct(activeProductId);
  if (!product) return null;

  const brand = brands.find((b) => b.name === product.brand);
  const wish = isWishlisted(product.id);

  const handleAskAi = async (q: string) => {
    setAiQuestion(q);
    setIsAiLoading(true);
    try {
      const ans = await aiService.productGuide({ productId: product.id, question: q });
      setAiAnswer(ans);
    } catch {
      setAiAnswer("Unable to fetch product intelligence at this time.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const routineSteps: { step: RoutineStep; label: string }[] = [
    { step: "cleanse", label: "Cleanse" },
    { step: "treat", label: "Treat" },
    { step: "hydrate", label: "Hydrate" },
    { step: "protect", label: "Protect" },
  ];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        onClick={() => setActiveProductId(null)}
        className="absolute inset-0 bg-ink/75 backdrop-blur-md"
      />

      {/* Modal Card */}
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl z-10">
        {/* Top Floating Close Button */}
        <button
          onClick={() => setActiveProductId(null)}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-md hover:bg-secondary cursor-pointer shadow-xs"
        >
          <X className="size-5" />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Upper Section: Image Gallery & Hero Commerce Info */}
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8 border-b border-border/80">
            {/* Left: Product Visual */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-secondary/30">
              <img
                src={productImage(product.image)}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[0.6875rem] font-bold text-clay uppercase shadow-xs">
                {product.brand}
              </div>
            </div>

            {/* Right: Commerce Details */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="eyebrow text-clay">{product.category.toUpperCase()} · STEP: {product.step.toUpperCase()}</p>
                <h2 className="display-lg mt-1 text-2xl sm:text-3xl font-bold text-foreground">
                  {product.name}
                </h2>

                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="size-4 fill-amber-500" />
                    <span className="text-sm font-bold text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground underline">
                    {product.reviews.toLocaleString()} verified reviews
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{product.size}</span>
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-foreground">
                    {price(product.price)}
                  </span>
                  <span className="text-xs text-muted-foreground">Incl. all taxes</span>
                </div>

                {/* Key Benefit */}
                <p className="mt-4 text-sm text-foreground/90 leading-relaxed font-medium">
                  {product.benefit}
                </p>

                {/* AI Why Note */}
                <div className="mt-4 rounded-xl border border-clay/30 bg-clay/5 p-3 text-xs text-foreground/90 flex items-start gap-2">
                  <ShieldCheck/>
                  <div>
                    <strong className="text-clay">Why this product:</strong> {product.why}
                  </div>
                </div>
              </div>

              {/* Add to Cart & Wishlist Actions */}
              <div className="mt-6 pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity Controls */}
                  <div className="flex items-center rounded-full border border-border bg-card px-2 py-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product.id, quantity);
                      setActiveProductId(null);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-foreground border border-border px-5 py-3 text-xs sm:text-sm font-semibold shadow-xs hover:bg-secondary/80 cursor-pointer transition-all"
                  >
                    <Plus className="size-4" />
                    <span>Add Single Item ({price(product.price * quantity)})</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Wishlist"
                    className={`rounded-full border border-border p-3 transition-colors cursor-pointer ${
                      wish ? "bg-clay/15 text-clay border-clay" : "hover:bg-secondary text-muted-foreground"
                    }`}
                  >
                    <Heart className={`size-4 ${wish ? "fill-clay" : ""}`} />
                  </button>
                </div>

                {/* 1-Click Complete Cross-House Regimen Bundle CTA */}
                <button
                  onClick={() => {
                    addToCart(product.id, 1);
                    if (product.step !== "cleanse") addToCart("me-ubtan-face-wash", 1, "am");
                    if (product.step !== "protect") addToCart("aq-glow-sunscreen", 1, "am");
                    if (product.step !== "treat") addToCart("tdc-salicylic-serum", 1, "pm");
                    setActiveProductId(null);
                  }}
                  className="w-full inline-flex items-center justify-between rounded-2xl bg-gradient-to-r from-clay via-amber-600 to-clay px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:opacity-95 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-amber-200" />
                    <span>Add Full 3-House Synergistic Regimen</span>
                  </div>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[0.6875rem] uppercase tracking-wider font-extrabold">
                    Save 15% Bundle
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Lower Deep-Dive Tabs */}
          <div className="p-6 md:p-8">
            <div className="flex border-b border-border/80 gap-6 text-xs sm:text-sm font-semibold">
              <button
                onClick={() => setActiveTab("ingredients")}
                className={`pb-3 transition-colors cursor-pointer ${
                  activeTab === "ingredients"
                    ? "border-b-2 border-clay text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                What's Inside ({product.ingredients.length})
              </button>
              <button
                onClick={() => setActiveTab("how-to-use")}
                className={`pb-3 transition-colors cursor-pointer ${
                  activeTab === "how-to-use"
                    ? "border-b-2 border-clay text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                How To Use (AM/PM)
              </button>
              <button
                onClick={() => setActiveTab("routine")}
                className={`pb-3 transition-colors cursor-pointer ${
                  activeTab === "routine"
                    ? "border-b-2 border-clay text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Where It Fits
              </button>
              <button
                onClick={() => setActiveTab("ask-ai")}
                className={`pb-3 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "ask-ai"
                    ? "border-b-2 border-clay text-clay"
                    : "text-muted-foreground hover:text-clay"
                }`}
              >
                <ShieldCheck/>
                <span>Ask AI</span>
              </button>
            </div>

            {/* TAB 1: What's Inside? (Interactive Ingredient Cards) */}
            {activeTab === "ingredients" && (
              <div className="mt-6 space-y-4">
                <p className="text-xs text-muted-foreground">
                  Click any ingredient to inspect its bio-molecular role and general skin benefits:
                </p>

                <div className="grid sm:grid-cols-3 gap-3">
                  {product.ingredients.map((ing, idx) => {
                    const isSelected = selectedIngredientIdx === idx;
                    return (
                      <button
                        key={ing.name}
                        onClick={() => setSelectedIngredientIdx(idx)}
                        className={`rounded-xl p-4 text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-2 border-clay bg-clay/10 text-foreground shadow-xs"
                            : "border border-border/80 bg-card hover:bg-secondary text-muted-foreground"
                        }`}
                      >
                        <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                          {ing.role}
                        </span>
                        <h4 className="mt-1 font-display text-sm font-bold text-foreground">
                          {ing.name}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                          {ing.note}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Ingredient Detail Card */}
                {product.ingredients[selectedIngredientIdx] && (
                  <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-clay uppercase">
                          Featured Bio-Active
                        </span>
                        <h4 className="font-display text-base font-bold text-foreground">
                          {product.ingredients[selectedIngredientIdx]?.name}
                        </h4>
                      </div>
                      <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground border border-border">
                        Role: {product.ingredients[selectedIngredientIdx]?.role}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
                      {product.ingredients[selectedIngredientIdx]?.note}
                    </p>

                    <div className="mt-3 grid sm:grid-cols-2 gap-3 text-xs pt-3 border-t border-border/60">
                      <div>
                        <span className="text-muted-foreground">General Benefit:</span>
                        <p className="font-medium text-foreground">
                          Promotes cellular repair and moisture balance without irritation.
                        </p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Who May Prefer It:</span>
                        <p className="font-medium text-foreground">
                          Ideal for {product.skinTypes.join(", ")} skin seeking targeted support.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: How To Use (AM / PM Timeline) */}
            {activeTab === "how-to-use" && (
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-clay" />
                    <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
                      Application Guidelines
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
                    {product.usage}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
                    <span className="text-xs font-bold uppercase text-amber-500">Morning (AM)</span>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {product.step === "protect"
                        ? "Crucial morning step. Apply generously 15 minutes before UV exposure."
                        : product.step === "cleanse"
                          ? "Gently massage over damp skin for 30 seconds to dissolve overnight sebum."
                          : "Lightweight layering prior to sunscreen application."}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/30 p-4">
                    <span className="text-xs font-bold uppercase text-indigo-400">Night (PM)</span>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {product.step === "treat"
                        ? "Optimal time for cell renewal. Apply 2-3 drops on clean, dry skin."
                        : product.step === "hydrate"
                          ? "Apply as the cushioning final layer to lock in active treatments overnight."
                          : "Cleanse away daily urban pollution and sweat."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Where It Fits In Your Routine */}
            {activeTab === "routine" && (
              <div className="mt-6 space-y-6">
                <p className="text-xs text-muted-foreground">
                  Visual Routine Pathway: see exactly when this formula goes onto your skin:
                </p>

                <div className="grid grid-cols-4 gap-2 text-center">
                  {routineSteps.map((s, idx) => {
                    const isCurrent = s.step === product.step;
                    return (
                      <div
                        key={s.step}
                        className={`rounded-2xl p-4 transition-all ${
                          isCurrent
                            ? "border-2 border-clay bg-clay/10 text-foreground font-bold shadow-md"
                            : "border border-border/80 bg-card text-muted-foreground"
                        }`}
                      >
                        <span className="text-[0.625rem] uppercase tracking-wider text-muted-foreground">
                          Step 0{idx + 1}
                        </span>
                        <h4 className="mt-1 text-sm font-display">{s.label}</h4>
                        {isCurrent && (
                          <span className="mt-2 inline-block rounded-full bg-clay text-[0.5625rem] font-bold text-white px-2 py-0.5">
                            THIS PRODUCT
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 4: Ask AI About This Product */}
            {activeTab === "ask-ai" && (
              <div className="mt-6 space-y-4">
                <p className="text-xs text-muted-foreground">
                  Select a common question or ask our beauty intelligence engine:
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Can I layer this with Vitamin C?",
                    "How often should I use it?",
                    "Will it pill under makeup?",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleAskAi(q)}
                      className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground hover:border-clay hover:text-foreground transition-colors cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* AI Response Display */}
                {isAiLoading ? (
                  <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground animate-pulse">
                    Analyzing formulation compatibility...
                  </div>
                ) : aiAnswer ? (
                  <div className="rounded-2xl border border-clay/30 bg-clay/5 p-4 text-sm text-foreground leading-relaxed">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-clay mb-1">
                      <ShieldCheck/>
                      <span>Answer for: "{aiQuestion}"</span>
                    </div>
                    <p>{aiAnswer}</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
