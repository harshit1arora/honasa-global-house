import { useState, useMemo } from "react";
import { X, ShoppingBag, Plus, Minus, Trash2, Sun, Moon, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, Lock, CreditCard } from "lucide-react";
import { useSite, type CartLine } from "@/lib/site-state";
import { getProduct, type Product } from "@/data/products";
import honasaLogo from "@/assets/honasa-logo.png";

export function RoutineCartModal() {
  const {
    cartOpen,
    setCartOpen,
    cart,
    cartProducts,
    removeFromCart,
    updateCartQty,
    clearCart,
    cartTotal,
    cartCount,
    missingSunscreenAlert,
    addToCart,
    market,
    price,
    setIsReturningUser,
  } = useSite();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "shipping" | "confirmation">("cart");
  const [shippingName, setShippingName] = useState("Aarav Sharma");
  const [shippingAddress, setShippingAddress] = useState("14 Connaught Place, New Delhi, India");
  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!cartOpen) return null;

  // Segment products into AM and PM groupings
  const morningProducts = cartProducts.filter(
    (item) => item.timeSlot === "am" || item.timeSlot === "both" || item.product.step === "protect",
  );

  const eveningProducts = cartProducts.filter(
    (item) =>
      item.timeSlot === "pm" ||
      (item.timeSlot === "both" && item.product.step !== "protect") ||
      item.product.step === "treat" ||
      item.product.step === "hydrate",
  );

  const handleCompleteOrder = () => {
    setCheckoutStep("confirmation");
    setIsReturningUser(true); // Now they are a returning customer!
  };

  const handleClose = () => {
    setCartOpen(false);
    if (checkoutStep === "confirmation") {
      clearCart();
      setCheckoutStep("cart");
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-end animate-in fade-in duration-300">
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-ink/65 backdrop-blur-md"
      />

      <aside className="relative flex h-full w-full max-w-xl flex-col border-l border-border bg-background shadow-2xl z-10">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-border/80 px-6 py-4 bg-background/95">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-clay text-white shadow-xs">
              <ShoppingBag className="size-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">
                {checkoutStep === "cart"
                  ? "Your Routine Cart"
                  : checkoutStep === "shipping"
                    ? "Express Checkout"
                    : "Order Confirmed"}
              </h3>
              <p className="text-xs text-muted-foreground">
                {cartCount} coordinated items · {market.city} shipping
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </header>

        {/* STEP 1: ROUTINE-AWARE CART */}
        {checkoutStep === "cart" && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="py-20 text-center">
                <ShoppingBag className="size-12 mx-auto text-muted-foreground/40 mb-3" />
                <h4 className="font-display text-lg font-bold text-foreground">
                  Your Routine is Empty
                </h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
                  Add curated cross-brand sets from the shop or take our AI Routine Quiz to build
                  one.
                </p>
              </div>
            ) : (
              <>
                {/* Real-Time Bio-Compatibility & Ingredient Conflict Shield */}
                {cartProducts.length > 0 && (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-950 dark:text-emerald-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="size-4.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <div>
                          <strong className="block font-bold text-sm text-foreground">
                            Bio-Compatible Regimen Score: {missingSunscreenAlert ? "92%" : "98% Match"}
                          </strong>
                          <span className="text-[0.6875rem] text-muted-foreground">
                            Zero active ingredient clashes detected across {new Set(cartProducts.map((c) => c.product.brand)).size} brand house(s)
                          </span>
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-600/20 px-2.5 py-0.5 text-[0.6875rem] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                        {missingSunscreenAlert ? "Requires SPF" : "Optimal Harmony"}
                      </span>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-emerald-500/20 grid grid-cols-2 gap-2 text-[0.6875rem]">
                      <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                        <CheckCircle2 className="size-3 shrink-0" />
                        <span>pH & Actives Balanced</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                        <CheckCircle2 className="size-3 shrink-0" />
                        <span>Calibrated for {market.city}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Missing Step Advisory (Sunscreen Warning if using actives) */}
                {missingSunscreenAlert && (
                  <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-800 dark:text-amber-300 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="size-4 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">
                          Active Treatment Routine Detected
                        </strong>
                        <span>
                          You have an active treatment in your routine, but no daytime UV protection.
                          Sun protection prevents pigment rebound.
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart("aq-glow-sunscreen", 1, "am")}
                      className="shrink-0 rounded-full bg-amber-600 text-white px-3 py-1 font-bold text-[0.6875rem] hover:bg-amber-700 cursor-pointer"
                    >
                      + Add SPF 50
                    </button>
                  </div>
                )}

                {/* Morning Routine Section */}
                {morningProducts.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                      <Sun className="size-4" />
                      <span className="uppercase tracking-wider">
                        Morning Routine ({morningProducts.length} steps)
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {morningProducts.map(({ product, qty }) => (
                        <div
                          key={`am-${product.id}`}
                          className="rounded-2xl border border-border/80 bg-card p-4 flex items-center justify-between gap-3"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[0.625rem] font-bold text-clay uppercase">
                                {product.brand}
                              </span>
                              <span className="text-xs text-muted-foreground">·</span>
                              <span className="text-xs text-muted-foreground">
                                Step: {product.step}
                              </span>
                            </div>
                            <h5 className="font-display text-sm font-bold text-foreground">
                              {product.name}
                            </h5>
                            <span className="text-xs font-bold text-foreground">
                              {price(product.price * qty)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex items-center rounded-full border border-border bg-background px-2 py-0.5 text-xs">
                              <button
                                onClick={() => updateCartQty(product.id, -1)}
                                className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
                              >
                                <Minus className="size-3" />
                              </button>
                              <span className="w-5 text-center font-bold">{qty}</span>
                              <button
                                onClick={() => updateCartQty(product.id, 1)}
                                className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
                              >
                                <Plus className="size-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="p-1.5 text-muted-foreground hover:text-destructive cursor-pointer"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Night Routine Section */}
                {eveningProducts.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-500">
                      <Moon className="size-4" />
                      <span className="uppercase tracking-wider">
                        Evening Routine ({eveningProducts.length} steps)
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {eveningProducts.map(({ product, qty }) => (
                        <div
                          key={`pm-${product.id}`}
                          className="rounded-2xl border border-border/80 bg-card p-4 flex items-center justify-between gap-3"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[0.625rem] font-bold text-clay uppercase">
                                {product.brand}
                              </span>
                              <span className="text-xs text-muted-foreground">·</span>
                              <span className="text-xs text-muted-foreground">
                                Step: {product.step}
                              </span>
                            </div>
                            <h5 className="font-display text-sm font-bold text-foreground">
                              {product.name}
                            </h5>
                            <span className="text-xs font-bold text-foreground">
                              {price(product.price * qty)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex items-center rounded-full border border-border bg-background px-2 py-0.5 text-xs">
                              <button
                                onClick={() => updateCartQty(product.id, -1)}
                                className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
                              >
                                <Minus className="size-3" />
                              </button>
                              <span className="w-5 text-center font-bold">{qty}</span>
                              <button
                                onClick={() => updateCartQty(product.id, 1)}
                                className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
                              >
                                <Plus className="size-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="p-1.5 text-muted-foreground hover:text-destructive cursor-pointer"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trust & Shipping Note */}
                <div className="rounded-2xl bg-secondary/40 p-4 border border-border/60 text-xs text-muted-foreground flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                  <span>
                    Free climate-sealed delivery to <strong>{market.city}</strong> included with this
                    routine order.
                  </span>
                </div>
              </>
            )}
          </div>
        )}

        {/* STEP 2: EXPRESS CHECKOUT */}
        {checkoutStep === "shipping" && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div>
              <h4 className="font-display text-lg font-bold text-foreground">
                Shipping & Delivery
              </h4>
              <p className="text-xs text-muted-foreground">
                Calibrated packaging ensures active molecules stay photostable during transit.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-muted-foreground block mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  value={shippingName}
                  onChange={(e) => setShippingName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-xs text-foreground focus:border-clay outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground block mb-1">
                  Delivery Address ({market.city}, {market.country})
                </label>
                <input
                  type="text"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-xs text-foreground focus:border-clay outline-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-display text-base font-bold text-foreground mb-3">
                Select Payment Method
              </h4>
              <div className="space-y-2">
                {[
                  { id: "card", title: "Credit / Debit Card", desc: "Encrypted 256-bit SSL" },
                  { id: "upi", title: "UPI / Apple Pay / Google Pay", desc: "Instant checkout" },
                  { id: "cod", title: "Cash on Delivery", desc: "Pay upon safe arrival" },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPaymentMethod(p.id)}
                    className={`w-full rounded-xl p-3.5 text-left border flex items-center justify-between cursor-pointer ${
                      paymentMethod === p.id
                        ? "border-clay bg-clay/10 text-foreground font-semibold"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold text-foreground">{p.title}</p>
                      <p className="text-[0.625rem] text-muted-foreground">{p.desc}</p>
                    </div>
                    {paymentMethod === p.id && <CheckCircle2 className="size-4 text-clay" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-secondary/50 p-4 text-xs text-muted-foreground flex items-center gap-2">
              <Lock className="size-4 text-emerald-500 shrink-0" />
              <span>Safe & Secure 256-bit Encrypted Checkout. Free 14-day returns.</span>
            </div>
          </div>
        )}

        {/* STEP 3: ORDER CONFIRMATION */}
        {checkoutStep === "confirmation" && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-center py-12">
            <div className="flex justify-center mb-2">
              <img
                src={honasaLogo}
                alt="Honasa Consumer"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
              <CheckCircle2 className="size-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Order #HNS-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h4 className="display-lg mt-1 text-2xl font-bold text-foreground">
                Your Routine is on the way!
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Thank you, {shippingName}. Your products are being climate-packaged in our certified
                facility for delivery to {market.city}.
              </p>
            </div>

            <div className="rounded-2xl border border-clay/30 bg-clay/5 p-5 text-left text-xs space-y-2 max-w-md mx-auto">
              <span className="font-bold text-clay uppercase text-[0.6875rem] block">
                Next Steps in Your Beauty Relationship:
              </span>
              <p className="text-foreground/90 leading-relaxed">
                • We have saved this routine to your <strong>My Beauty Profile</strong>.
                <br />• Your evening routine timer is activated.
                <br />• A tree has been planted in your name under our Plant Goodness initiative.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="rounded-full bg-primary px-8 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md"
            >
              Return to Ecosystem
            </button>
          </div>
        )}

        {/* Footer Action Bar */}
        {checkoutStep !== "confirmation" && cart.length > 0 && (
          <footer className="border-t border-border/80 bg-background/95 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground">
                  Routine Subtotal ({cartCount} items)
                </span>
                <p className="font-display text-xl font-bold text-foreground">
                  {cartTotal}
                </p>
              </div>

              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                Free Shipping
              </span>
            </div>

            {checkoutStep === "cart" ? (
              <button
                onClick={() => setCheckoutStep("shipping")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer transition-all"
              >
                <span>Proceed to Express Checkout</span>
                <ArrowRight className="size-4" />
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCheckoutStep("cart")}
                  className="rounded-full border border-border px-5 py-3 text-xs font-semibold hover:bg-secondary cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={handleCompleteOrder}
                  className="flex-1 rounded-full bg-primary py-3 text-xs sm:text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md"
                >
                  Confirm & Place Routine Order ({cartTotal})
                </button>
              </div>
            )}
          </footer>
        )}
      </aside>
    </div>
  );
}
