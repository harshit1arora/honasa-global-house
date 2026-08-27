import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { getProduct, type Concern, type Product } from "@/data/products";
import { defaultMarket, formatPrice, markets, type Market } from "@/lib/localization";
import type { BeautyProfile, RoutineResult } from "@/lib/ai/types";

export interface CartLine {
  productId: string;
  qty: number;
  timeSlot?: "am" | "pm" | "both" | undefined;
}

export interface UserSavedRoutine {
  id: string;
  title: string;
  createdAt: string;
  products: { id: string; step: string; time: "am" | "pm" | "both" }[];
}

interface SiteState {
  market: Market;
  setMarketCode: (code: string) => void;
  price: (inr: number) => string;

  // Cart
  cart: CartLine[];
  addToCart: (productId: string, qty?: number | undefined, timeSlot?: "am" | "pm" | "both" | undefined) => void;
  addRoutineToCart: (productIds: string[]) => void;
  removeFromCart: (productId: string) => void;
  updateCartQty: (productId: string, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: string;
  cartProducts: { product: Product; qty: number; timeSlot?: "am" | "pm" | "both" | undefined }[];
  missingSunscreenAlert: boolean;


  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Ecosystem Response / Selected Need
  selectedConcern: Concern | null;
  setSelectedConcern: (concern: Concern | null) => void;

  // User Profile & Returning Experience
  profile: BeautyProfile;
  updateProfile: (partial: Partial<BeautyProfile>) => void;
  isReturningUser: boolean;
  setIsReturningUser: (val: boolean) => void;
  savedRoutines: UserSavedRoutine[];
  saveRoutineToProfile: (routine: RoutineResult) => void;

  // Modals & Drawers
  activeProductId: string | null;
  setActiveProductId: (id: string | null) => void;
  conciergeOpen: boolean;
  setConciergeOpen: (open: boolean) => void;
  quizOpen: boolean;
  setQuizOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  checkoutOpen: boolean;
  setCheckoutOpen: (open: boolean) => void;
  profileOpen: boolean;
  setProfileOpen: (open: boolean) => void;
  brandModalSlug: string | null;
  setBrandModalSlug: (slug: string | null) => void;

  // Quick Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const SiteContext = createContext<SiteState | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [marketCode, setMarketCode] = useState(defaultMarket!.code);
  const [cart, setCart] = useState<CartLine[]>([
    { productId: "me-ubtan-face-wash", qty: 1, timeSlot: "both" },
    { productId: "tdc-salicylic-serum", qty: 1, timeSlot: "pm" },
  ]);
  const [wishlist, setWishlist] = useState<string[]>(["aq-glow-sunscreen", "ds-haldi-vitc-serum"]);
  const [selectedConcern, setSelectedConcern] = useState<Concern | null>("acne");

  const [isReturningUser, setIsReturningUser] = useState(true);
  const [profile, setProfile] = useState<BeautyProfile>({
    userName: "Shivang Jain",
    userRole: "Executive Founder & VIP Member",
    concerns: ["acne", "pigmentation"],
    skinFeel: "combination",
    marketCode: defaultMarket!.code,
    effort: "balanced",
    budget: "mid",
    audience: "any",
  });

  const [savedRoutines, setSavedRoutines] = useState<UserSavedRoutine[]>([
    {
      id: "routine-starter",
      title: "Daily Clarifying & Glow Ritual",
      createdAt: "Saved 3 days ago",
      products: [
        { id: "me-ubtan-face-wash", step: "Cleanse", time: "both" },
        { id: "tdc-salicylic-serum", step: "Treat", time: "pm" },
        { id: "aq-hydrate-gel", step: "Hydrate", time: "both" },
        { id: "aq-glow-sunscreen", step: "Protect", time: "am" },
      ],
    },
  ]);

  // Modals state
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [brandModalSlug, setBrandModalSlug] = useState<string | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 3200);
  }, []);

  const market = useMemo(
    () => markets.find((m) => m.code === marketCode) ?? defaultMarket!,
    [marketCode],
  );

  // Automatically sync profile marketCode with active market
  useEffect(() => {
    setProfile((prev) => ({ ...prev, marketCode }));
  }, [marketCode]);

  const addToCart = useCallback(
    (productId: string, qty = 1, timeSlot?: "am" | "pm" | "both" | undefined) => {
      const prod = getProduct(productId);
      const slot: "am" | "pm" | "both" = timeSlot ?? (prod?.step === "protect" ? "am" : prod?.step === "treat" ? "pm" : "both");


      setCart((prev) => {
        const found = prev.find((l) => l.productId === productId);
        if (found) {
          return prev.map((l) => (l.productId === productId ? { ...l, qty: l.qty + qty } : l));
        }
        return [...prev, { productId, qty, timeSlot: slot }];
      });
      showToast(`Added ${prod?.name ?? "product"} to your routine`);
    },
    [showToast],
  );

  const addRoutineToCart = useCallback(
    (productIds: string[]) => {
      setCart((prev) => {
        const next = [...prev];
        productIds.forEach((id) => {
          const prod = getProduct(id);
          const slot = prod?.step === "protect" ? "am" : prod?.step === "treat" ? "pm" : "both";
          const existing = next.find((l) => l.productId === id);
          if (existing) {
            existing.qty += 1;
          } else {
            next.push({ productId: id, qty: 1, timeSlot: slot });
          }
        });
        return next;
      });
      showToast(`Added complete routine (${productIds.length} items) to your cart!`);
      setCartOpen(true);
    },
    [showToast],
  );

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const updateCartQty = useCallback((productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((l) => {
          if (l.productId === productId) {
            const nextQty = l.qty + delta;
            return nextQty > 0 ? { ...l, qty: nextQty } : null;
          }
          return l;
        })
        .filter((l): l is CartLine => l !== null),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleWishlist = useCallback(
    (productId: string) => {
      setWishlist((prev) => {
        const exists = prev.includes(productId);
        if (exists) {
          showToast("Removed from wishlist");
          return prev.filter((id) => id !== productId);
        } else {
          showToast("Saved to your wishlist");
          return [...prev, productId];
        }
      });
    },
    [showToast],
  );

  const isWishlisted = useCallback((productId: string) => wishlist.includes(productId), [wishlist]);

  const updateProfile = useCallback((partial: Partial<BeautyProfile>) => {
    setProfile((prev) => ({ ...prev, ...partial }));
  }, []);

  const saveRoutineToProfile = useCallback(
    (routine: RoutineResult) => {
      const newRoutine: UserSavedRoutine = {
        id: `routine-${Date.now()}`,
        title: routine.title,
        createdAt: "Just now",
        products: routine.slots.map((s) => ({
          id: s.productId,
          step: s.step,
          time: s.time,
        })),
      };
      setSavedRoutines((prev) => [newRoutine, ...prev]);
      showToast("Routine saved to your Beauty Profile!");
    },
    [showToast],
  );

  const cartProducts = useMemo(() => {
    return cart
      .map((line) => {
        const p = getProduct(line.productId);
        return p ? { product: p, qty: line.qty, timeSlot: line.timeSlot } : null;
      })
      .filter((x): x is NonNullable<typeof x> => Boolean(x));
  }, [cart]);

  // Intelligence check: Has active/treatment product in cart, but missing SPF protection
  const missingSunscreenAlert = useMemo(() => {
    const hasTreatment = cartProducts.some((item) => item.product.step === "treat");
    const hasSPF = cartProducts.some(
      (item) => item.product.step === "protect" || item.product.category === "skin" && item.product.concerns.includes("sun"),
    );
    return hasTreatment && !hasSPF;
  }, [cartProducts]);

  const value = useMemo<SiteState>(() => {
    const totalInr = cart.reduce(
      (sum, line) => sum + (getProduct(line.productId)?.price ?? 0) * line.qty,
      0,
    );

    return {
      market,
      setMarketCode,
      price: (inr: number) => formatPrice(inr, market),

      cart,
      addToCart,
      addRoutineToCart,
      removeFromCart,
      updateCartQty,
      clearCart,
      cartCount: cart.reduce((n, l) => n + l.qty, 0),
      cartTotal: formatPrice(totalInr, market),
      cartProducts,
      missingSunscreenAlert,

      wishlist,
      toggleWishlist,
      isWishlisted,

      selectedConcern,
      setSelectedConcern,

      profile,
      updateProfile,
      isReturningUser,
      setIsReturningUser,
      savedRoutines,
      saveRoutineToProfile,

      activeProductId,
      setActiveProductId,
      conciergeOpen,
      setConciergeOpen,
      quizOpen,
      setQuizOpen,
      searchOpen,
      setSearchOpen,
      cartOpen,
      setCartOpen,
      checkoutOpen,
      setCheckoutOpen,
      profileOpen,
      setProfileOpen,
      brandModalSlug,
      setBrandModalSlug,

      toastMessage,
      showToast,
    };
  }, [
    market,
    cart,
    cartProducts,
    missingSunscreenAlert,
    wishlist,
    selectedConcern,
    profile,
    isReturningUser,
    savedRoutines,
    activeProductId,
    conciergeOpen,
    quizOpen,
    searchOpen,
    cartOpen,
    checkoutOpen,
    profileOpen,
    brandModalSlug,
    toastMessage,
    addToCart,
    addRoutineToCart,
    removeFromCart,
    updateCartQty,
    clearCart,
    toggleWishlist,
    isWishlisted,
    updateProfile,
    saveRoutineToProfile,
    showToast,
  ]);

  return (
    <SiteContext.Provider value={value}>
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-120 flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-xs font-medium text-white shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="inline-block size-2 rounded-full bg-emerald-400" />
          {toastMessage}
        </div>
      )}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
