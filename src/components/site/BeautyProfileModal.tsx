import { useState } from "react";
import { X, User, Heart, Bookmark, Calendar, ShieldCheck, Building2, ArrowRight, Sun, Moon, Clock, Trash2, CheckCircle2 } from "lucide-react";
import { useSite } from "@/lib/site-state";
import { getProduct } from "@/data/products";
import honasaLogo from "@/assets/honasa-logo.png";

export function BeautyProfileModal() {
  const {
    profileOpen,
    setProfileOpen,
    profile,
    updateProfile,
    isReturningUser,
    setIsReturningUser,
    savedRoutines,
    wishlist,
    toggleWishlist,
    addRoutineToCart,
    addToCart,
    setActiveProductId,
    market,
    price } = useSite();

  const [activeTab, setActiveTab] = useState<"routine" | "saved" | "wishlist" | "preferences">("routine");

  if (!profileOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div
        onClick={() => setProfileOpen(false)}
        className="absolute inset-0 bg-ink/75 backdrop-blur-md"
      />

      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-background/95">
          <div className="flex items-center gap-3">
            <img
              src={honasaLogo}
              alt="Honasa Consumer"
              className="h-8 w-auto object-contain"
            />
            <div>
              <h3 className="font-display font-bold text-foreground">
                My Beauty Profile
              </h3>
              <p className="text-xs text-muted-foreground">
                Personalized Skin Memory & Routine Architecture
              </p>
            </div>
          </div>

          <button
            onClick={() => setProfileOpen(false)}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Logged In User VIP Header Banner */}
        <div className="border-b border-border/70 bg-clay/5 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-clay text-white font-display text-base font-bold shadow-md">
              {profile.userName
                ? profile.userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : "SJ"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay">
                  {profile.userRole || "Executive Founder & VIP Member"}
                </span>
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span className="text-[0.6875rem] font-semibold text-emerald-600 dark:text-emerald-400">Authenticated</span>
              </div>
              <p className="font-display text-lg font-bold text-foreground leading-tight">
                {profile.userName || "Shivang Jain"}
              </p>
              <p className="text-xs text-muted-foreground">
                Calibrated for {market.city}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-clay/30 bg-card px-3 py-1.5 text-xs font-bold text-clay shadow-xs">
              Shivang Jain · Executive VIP
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border/80 px-6 gap-6 text-xs sm:text-sm font-semibold bg-secondary/20">
          <button
            onClick={() => setActiveTab("routine")}
            className={`py-3 transition-colors cursor-pointer ${
              activeTab === "routine"
                ? "border-b-2 border-clay text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Active Routine
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`py-3 transition-colors cursor-pointer ${
              activeTab === "saved"
                ? "border-b-2 border-clay text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Saved Regimens ({savedRoutines.length})
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`py-3 transition-colors cursor-pointer ${
              activeTab === "wishlist"
                ? "border-b-2 border-clay text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Wishlist ({wishlist.length})
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`py-3 transition-colors cursor-pointer ${
              activeTab === "preferences"
                ? "border-b-2 border-clay text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Skin Attributes
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* TAB 1: Active Routine */}
          {activeTab === "routine" && (
            <div className="space-y-6">
              {/* Credible Next Best Action Card (Golden Journey Step 8) */}
              <div className="rounded-2xl border border-clay/40 bg-clay/10 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[0.625rem] font-bold uppercase tracking-wider text-clay flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    <span>Next Best Action · Intelligent Reorder</span>
                  </span>
                  <span className="rounded-full bg-clay/20 px-2 py-0.5 text-[0.625rem] font-semibold text-clay">
                    Rule-Based Timing
                  </span>
                </div>
                <h5 className="font-display text-sm font-bold text-foreground">
                  Your Aqualogica Glow+ Dewy Sunscreen (50g) is running low
                </h5>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Based on your routine activation 18 days ago, your daily broad-spectrum SPF is at ~40% capacity. Reorder suggested in 12 days to prevent coverage gap.
                </p>
                <div className="pt-1 flex items-center gap-3">
                  <button
                    onClick={() => addToCart("aq-glow-sunscreen", 1, "am")}
                    className="rounded-full bg-clay text-white px-4 py-1.5 text-xs font-bold hover:bg-clay/90 cursor-pointer shadow-xs"
                  >
                    1-Click Reorder ({price(449)})
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-clay uppercase">Today's Regimen</span>
                  <h4 className="font-display text-lg font-bold text-foreground">
                    Evening Clarifying & Repair Ritual
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Moon className="size-4 text-indigo-400" />
                  <span>Scheduled for 9:30 PM</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    step: "Cleanse",
                    prodId: "me-ubtan-face-wash",
                    time: "PM",
                    tip: "Warm water wash to dissolve SPF and daytime particulate matter." },
                  {
                    step: "Treat",
                    prodId: "tdc-salicylic-serum",
                    time: "PM",
                    tip: "Apply 2-3 drops focusing on the T-zone for active pore unclogging." },
                  {
                    step: "Hydrate",
                    prodId: "aq-hydrate-gel",
                    time: "PM",
                    tip: "Lightweight moisture shield preventing overnight dehydration." },
                ].map((item, idx) => {
                  const p = getProduct(item.prodId);
                  if (!p) return null;
                  return (
                    <div
                      key={item.prodId}
                      className="rounded-2xl border border-border/80 bg-card p-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[0.625rem] font-bold text-clay uppercase">
                              {item.step}
                            </span>
                            <span className="text-xs text-muted-foreground">·</span>
                            <span className="text-xs font-semibold text-foreground">
                              {p.brand}
                            </span>
                          </div>
                          <h5 className="font-display text-sm font-bold text-foreground">
                            {p.name}
                          </h5>
                          <p className="text-[0.6875rem] text-muted-foreground mt-0.5">
                            {item.tip}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(p.id, 1)}
                        className="shrink-0 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold hover:bg-primary hover:text-primary-foreground cursor-pointer"
                      >
                        Repurchase ({price(p.price)})
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Saved Regimens */}
          {activeTab === "saved" && (
            <div className="space-y-4">
              {savedRoutines.length === 0 ? (
                <p className="text-xs text-muted-foreground py-8 text-center">
                  No saved routines yet. Build one with the AI Concierge or Quiz!
                </p>
              ) : (
                savedRoutines.map((sr) => (
                  <div
                    key={sr.id}
                    className="rounded-2xl border border-border/80 bg-card p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display text-base font-bold text-foreground">
                          {sr.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">{sr.createdAt}</span>
                      </div>
                      <button
                        onClick={() => addRoutineToCart(sr.products.map((p) => p.id))}
                        className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                      {sr.products.map((item) => {
                        const prod = getProduct(item.id);
                        return (
                          <span
                            key={item.id}
                            className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-foreground font-medium"
                          >
                            {item.step}: {prod?.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: Wishlist */}
          {activeTab === "wishlist" && (
            <div className="space-y-3">
              {wishlist.length === 0 ? (
                <p className="text-xs text-muted-foreground py-8 text-center">
                  Your wishlist is currently empty.
                </p>
              ) : (
                wishlist.map((pid) => {
                  const p = getProduct(pid);
                  if (!p) return null;
                  return (
                    <div
                      key={pid}
                      className="rounded-2xl border border-border/80 bg-card p-4 flex items-center justify-between gap-4"
                    >
                      <div>
                        <span className="text-[0.625rem] font-bold text-clay uppercase">
                          {p.brand}
                        </span>
                        <h5
                          onClick={() => {
                            setActiveProductId(p.id);
                            setProfileOpen(false);
                          }}
                          className="font-display text-sm font-bold text-foreground hover:text-clay cursor-pointer"
                        >
                          {p.name}
                        </h5>
                        <p className="text-xs text-muted-foreground">{p.benefit}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-foreground mr-2">
                          {price(p.price)}
                        </span>
                        <button
                          onClick={() => addToCart(p.id, 1)}
                          className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => toggleWishlist(p.id)}
                          className="p-1.5 text-muted-foreground hover:text-destructive cursor-pointer"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 4: Skin Attributes Preferences */}
          {activeTab === "preferences" && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Primary Concerns on File
                </span>
                <p className="font-display text-base font-bold text-foreground mt-1">
                  {profile.concerns.join(", ")}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Midday Skin Feel
                  </span>
                  <p className="font-display text-base font-bold text-foreground mt-1 capitalize">
                    {profile.skinFeel || "Combination"}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Target Routine Effort
                  </span>
                  <p className="font-display text-base font-bold text-foreground mt-1 capitalize">
                    {profile.effort || "Balanced (3 steps)"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
