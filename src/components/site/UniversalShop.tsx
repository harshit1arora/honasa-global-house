import { useState, useMemo } from "react";
import { ShieldCheck, Building2, Filter, Search, Plus, Heart, Star, Check, ArrowRight, SlidersHorizontal } from "lucide-react";
import { products, type Category, type Concern, type Product } from "@/data/products";
import { brands } from "@/data/brands";
import { productImage } from "@/data/images";
import { useSite } from "@/lib/site-state";

const CATEGORIES: { id: Category | "all" | "routines"; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "skin", label: "Skin" },
  { id: "hair", label: "Hair" },
  { id: "baby", label: "Baby" },
  { id: "makeup", label: "Makeup" },
  { id: "men", label: "Men's Grooming" },
  { id: "wellness", label: "Wellness" },
  { id: "routines", label: "Cross-Brand Sets" },
];

export function UniversalShop() {
  const {
    price,
    addToCart,
    addRoutineToCart,
    toggleWishlist,
    isWishlisted,
    setActiveProductId,
    selectedConcern,
    market } = useSite();

  const [selectedCategory, setSelectedCategory] = useState<Category | "all" | "routines">("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [filterConcern, setFilterConcern] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== "all" && selectedCategory !== "routines" && p.category !== selectedCategory) {
        return false;
      }
      if (selectedBrand !== "all" && p.brand !== selectedBrand) {
        return false;
      }
      if (filterConcern !== "all" && !p.concerns.includes(filterConcern as Concern)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchIng = p.ingredients.some((i) => i.name.toLowerCase().includes(q));
        if (!matchName && !matchBrand && !matchIng) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedBrand, filterConcern, searchQuery, sortBy]);

  // Pre-curated Cross-Brand Routine Sets
  const crossBrandSets = [
    {
      id: "set-glow-am",
      title: "The Morning Radiant Defense Set",
      subtitle: "Ubtan Cleanse + Haldi Vitamin C + Dewy SPF 50",
      brands: ["Mamaearth", "Dr. Sheth's", "Aqualogica"],
      productIds: ["me-ubtan-face-wash", "ds-haldi-vitc-serum", "aq-glow-sunscreen"],
      description:
        "Engineered for daytime environmental defense. Combines traditional brightening botanicals with clinical antioxidants and broad-spectrum water-light sunscreen.",
      priceTotal: 349 + 699 + 449 },
    {
      id: "set-clear-pm",
      title: "The Night Clarifying & Repair Set",
      subtitle: "2% Salicylic Acid + Overnight Renewal Peptides",
      brands: ["The Derma Co.", "Luminéve"],
      productIds: ["tdc-salicylic-serum", "lu-night-repair-cream"],
      description:
        "Evenings are when skin cellular turnover peaks. Clarifies deep pore sebum with BHA, followed by peptide cushioning for non-irritating overnight recovery.",
      priceTotal: 599 + 899 },
  ];

  return (
    <section id="shop-section" className="border-b border-border/80 bg-background py-6 md:py-8">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-2 text-clay">
              <span className="size-1.5 rounded-full bg-clay" />
              Unified House Catalog
            </p>
            <h2 className="display-lg mt-2 text-foreground font-semibold">
              Universal Shop.
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl">
              Shop freely across all eight houses in one basket. Find solutions by concern, active
              ingredient, or curated cross-brand regimens.
            </p>
          </div>

          {/* Search in Catalog */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or actives..."
              className="w-full rounded-full border border-border bg-card/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-clay focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-border/70">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "border border-border bg-card/40 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filter & Sort Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-3.5 text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1 font-semibold text-foreground">
              <SlidersHorizontal className="size-3.5 text-clay" />
              <span>Filters:</span>
            </span>

            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground outline-none cursor-pointer"
            >
              <option value="all">All Brands ({brands.length})</option>
              {brands.map((b) => (
                <option key={b.slug} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>

            {/* Concern Filter */}
            <select
              value={filterConcern}
              onChange={(e) => setFilterConcern(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground outline-none cursor-pointer"
            >
              <option value="all">All Concerns</option>
              <option value="acne">Acne & Blemishes</option>
              <option value="sun">Sun Protection</option>
              <option value="pigmentation">Pigmentation & Tan</option>
              <option value="dryness">Dryness</option>
              <option value="dullness">Dullness & Glow</option>
              <option value="frizz">Hair Frizz</option>
              <option value="hair-fall">Hair Fall</option>
              <option value="grooming">Men's Grooming</option>
              <option value="baby">Baby Care</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground outline-none cursor-pointer"
            >
              <option value="featured">Featured Relevance</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Cross-Brand Regimen Sets (if "routines" category or "all") */}
        {(selectedCategory === "all" || selectedCategory === "routines") && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <ShieldCheck/>
                Featured Cross-Brand Regimens
              </h3>
              <span className="text-xs text-muted-foreground">
                One-click complete routines
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {crossBrandSets.map((set) => (
                <div
                  key={set.id}
                  className="rounded-3xl border border-clay/30 bg-card/90 p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {set.brands.map((b) => (
                          <span
                            key={b}
                            className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.625rem] font-bold text-foreground"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-bold text-clay">
                        {price(set.priceTotal)}
                      </span>
                    </div>

                    <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                      {set.title}
                    </h4>
                    <p className="text-xs font-medium text-clay mt-0.5">{set.subtitle}</p>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {set.description}
                    </p>

                    {/* Step pills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {set.productIds.map((pid) => {
                        const p = products.find((x) => x.id === pid);
                        return (
                          <button
                            key={pid}
                            onClick={() => setActiveProductId(pid)}
                            className="rounded-lg border border-border/80 bg-background px-2.5 py-1 text-[0.6875rem] text-muted-foreground hover:text-foreground cursor-pointer"
                          >
                            {p?.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {set.productIds.length} items bundled
                    </span>
                    <button
                      onClick={() => addRoutineToCart(set.productIds)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 cursor-pointer"
                    >
                      <span>Add Complete Set</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        {selectedCategory !== "routines" && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold text-foreground">
                Individual Formulations ({filteredProducts.length})
              </h3>
              <span className="text-xs text-muted-foreground">
                Calibrated for {market.city} climate
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center">
                <p className="text-sm text-muted-foreground">
                  No products matched your current filters. Try selecting "All Brands" or clearing
                  search.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((p) => {
                  const isWish = isWishlisted(p.id);
                  const isAiRecommended =
                    selectedConcern && p.concerns.includes(selectedConcern);

                  return (
                    <div
                      key={p.id}
                      className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-4 transition-all duration-300 hover:border-clay/60 hover:shadow-xl"
                    >
                      <div>
                        {/* Image Container with Wishlist & AI badge */}
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-secondary/50">
                          <img
                            src={productImage(p.image)}
                            alt={p.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          {/* Brand Pill */}
                          <span className="absolute top-2.5 left-2.5 rounded-full bg-background/90 px-2.5 py-0.5 text-[0.625rem] font-bold text-foreground backdrop-blur-md">
                            {p.brand}
                          </span>

                          {/* Wishlist Button */}
                          <button
                            onClick={() => toggleWishlist(p.id)}
                            aria-label="Wishlist"
                            className="absolute top-2.5 right-2.5 rounded-full bg-background/80 p-2 text-muted-foreground backdrop-blur-md hover:text-clay cursor-pointer shadow-xs"
                          >
                            <Heart
                              className={`size-3.5 ${isWish ? "fill-clay text-clay" : ""}`}
                            />
                          </button>

                          {/* AI Recommendation Tag */}
                          {isAiRecommended && (
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-[0.625rem] font-semibold text-white backdrop-blur-md">
                              <ShieldCheck/>
                              <span>AI Recommend for You</span>
                            </div>
                          )}
                        </div>

                        {/* Title & Ratings */}
                        <div className="mt-3.5 flex items-center justify-between text-xs">
                          <span className="text-[0.625rem] uppercase tracking-wider font-semibold text-muted-foreground">
                            Step: {p.step}
                          </span>
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="size-3 fill-amber-500" />
                            <span className="text-xs font-bold text-foreground">
                              {p.rating}
                            </span>
                            <span className="text-[0.625rem] text-muted-foreground">
                              ({(p.reviews / 1000).toFixed(1)}k)
                            </span>
                          </div>
                        </div>

                        <h4
                          onClick={() => setActiveProductId(p.id)}
                          className="mt-1 font-display text-sm font-bold text-foreground group-hover:text-clay transition-colors cursor-pointer"
                        >
                          {p.name}
                        </h4>

                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                          {p.benefit}
                        </p>

                        {/* "Why might this be right for me?" AI hover peek */}
                        <div className="mt-2.5 rounded-md bg-secondary/60 p-2 text-[0.6875rem] text-foreground/80 opacity-90 group-hover:opacity-100 transition-opacity">
                          <span className="font-semibold text-clay">Why:</span> {p.why}
                        </div>
                      </div>

                      {/* Card Footer: Price & Quick Add */}
                      <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/60">
                        <div>
                          <p className="font-display text-sm font-bold text-foreground">
                            {price(p.price)}
                          </p>
                          <span className="text-[0.625rem] text-muted-foreground">{p.size}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setActiveProductId(p.id)}
                            className="text-xs text-muted-foreground hover:text-foreground underline cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => addToCart(p.id, 1)}
                            className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 cursor-pointer"
                          >
                            <Plus className="size-3" />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
