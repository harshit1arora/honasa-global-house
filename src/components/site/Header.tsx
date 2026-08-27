import { useState, useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ShieldCheck, Building2, ShoppingBag, Menu, X, Search, User, Heart, ChevronDown } from "lucide-react";
import { markets } from "@/lib/localization";
import { useSite } from "@/lib/site-state";
import honasaLogo from "@/assets/honasa-logo.png";

export function Header() {
  const {
    market,
    setMarketCode,
    cartCount,
    setConciergeOpen,
    setSearchOpen,
    setCartOpen,
    setProfileOpen,
    profile,
    wishlist } = useSite();

  const [isScrolled, setIsScrolled] = useState(false);
  const [marketDropdownOpen, setMarketDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [insideHonasaOpen, setInsideHonasaOpen] = useState(false);
  const insideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInsideMouseEnter = () => {
    if (insideTimeoutRef.current) clearTimeout(insideTimeoutRef.current);
    setInsideHonasaOpen(true);
  };

  const handleInsideMouseLeave = () => {
    insideTimeoutRef.current = setTimeout(() => {
      setInsideHonasaOpen(false);
    }, 200);
  };

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryNavLinks = [
    { label: "Ecosystem", to: "/" },
    { label: "Houses", to: "/brands" },
    { label: "Shop", to: "/shop" },
    { label: "Science", to: "/science" },
    { label: "The Edit", to: "/journal" },
  ];

  const insideHonasaLinks = [
    { label: "Our Values", to: "/our-values" },
    { label: "Our Mission", to: "/our-mission" },
    { label: "Our Story", to: "/our-story" },
    { label: "Leadership Team", to: "/leadership-team" },
    { label: "Our Accomplishments", to: "/our-accomplishments" },
  ];

  const isInsideHonasaActive =
    currentPath === "/about" ||
    currentPath === "/our-values" ||
    currentPath === "/our-mission" ||
    currentPath === "/our-story" ||
    currentPath === "/leadership-team" ||
    currentPath === "/our-accomplishments";

  return (
    <header className="sticky top-3 sm:top-5 z-50 mx-auto max-w-[1360px] px-3 sm:px-6 transition-all duration-500">
      {/* Floating Glass Island Pill Container */}
      <div
        className={`relative flex items-center justify-between rounded-full border transition-all duration-500 px-4 sm:px-6 py-2 sm:py-2.5 ${
          isScrolled
            ? "border-clay/40 bg-background/85 dark:bg-card/85 backdrop-blur-2xl shadow-2xl ring-1 ring-clay/20"
            : "border-border/60 bg-background/70 dark:bg-card/70 backdrop-blur-xl shadow-lg"
        }`}
      >
        {/* Left: Brand Logo & Text Lockup */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 focus:outline-none group cursor-pointer"
          >
            <img
              src={honasaLogo}
              alt="Honasa Consumer"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-display text-sm sm:text-base font-bold tracking-tight text-foreground leading-none group-hover:text-clay transition-colors">
                HONASA
              </span>
              <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-muted-foreground leading-tight">
                CONSUMER
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Modern Floating Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 rounded-full bg-secondary/40 p-1 border border-border/40 backdrop-blur-md">
          {primaryNavLinks.map((link) => {
            const isActive = currentPath === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                preload="intent"
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Inside Honasa Dropdown Pill */}
          <div
            className="relative"
            onMouseEnter={handleInsideMouseEnter}
            onMouseLeave={handleInsideMouseLeave}
          >
            <div className="flex items-center">
              <Link
                to="/about"
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isInsideHonasaActive
                    ? "bg-foreground text-background shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                Inside
              </Link>
              <button
                type="button"
                onClick={() => setInsideHonasaOpen((prev) => !prev)}
                className="p-1 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <ChevronDown
                  className={`size-3 transition-transform duration-300 ${
                    insideHonasaOpen ? "rotate-180 text-foreground" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu with Seamless Padding Bridge & Grace Period */}
            {insideHonasaOpen && (
              <div className="absolute top-full left-0 pt-2.5 w-56 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="rounded-3xl border border-border/80 bg-card/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <div className="flex flex-col py-1 space-y-0.5">
                    {insideHonasaLinks.map((sub) => {
                      const isSubActive = currentPath === sub.to;
                      return (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => setInsideHonasaOpen(false)}
                          className={`rounded-2xl px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer ${
                            isSubActive
                              ? "bg-clay/15 text-clay font-bold"
                              : "text-foreground hover:bg-secondary hover:text-clay"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                    <div className="pt-1.5 mt-1 border-t border-border/50">
                      <Link
                        to="/about"
                        onClick={() => setInsideHonasaOpen(false)}
                        className="rounded-2xl px-4 py-2 text-[0.6875rem] font-bold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors block"
                      >
                        Overview & House Thesis →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Modern Gen-Z Interactive Utility Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* AI Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search formulations"
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            title="Search formulations & AI answers"
          >
            <Search className="size-4" />
          </button>

          {/* Market Pill */}
          <div className="relative">
            <button
              onClick={() => setMarketDropdownOpen(!marketDropdownOpen)}
              className="flex items-center gap-1 rounded-full border border-border/80 bg-secondary/50 px-2.5 py-1 text-xs font-semibold text-foreground hover:bg-secondary transition-all duration-300 cursor-pointer"
            >
              <span className="text-sm">{market.flag ?? "🌐"}</span>
              <span className="text-[0.6875rem] font-bold">{market.code}</span>
            </button>

            {marketDropdownOpen && (
              <div className="absolute right-0 mt-3 w-52 rounded-3xl border border-border bg-card p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
                <span className="block px-3 py-1.5 text-[0.625rem] font-bold uppercase tracking-widest text-muted-foreground">
                  Select Country & Region
                </span>
                {markets.map((m) => (
                  <button
                    key={m.code}
                    onClick={() => {
                      setMarketCode(m.code);
                      setMarketDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between rounded-2xl px-3 py-2 text-left text-xs cursor-pointer ${
                      market.code === m.code
                        ? "bg-clay/15 text-clay font-bold"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{m.flag}</span>
                      <span>{m.country}</span>
                    </span>
                    <span className="text-[0.6875rem] text-muted-foreground">{m.currency}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={() => setProfileOpen(true)}
            aria-label="Wishlist"
            className="relative rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Heart className="size-4" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-clay text-[0.625rem] font-bold text-white shadow-sm">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Routine Cart */}
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Routine Cart"
            className="relative rounded-full bg-primary p-2 text-primary-foreground shadow-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="size-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-clay text-[0.625rem] font-bold text-white shadow-sm ring-2 ring-background">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Badge */}
          <button
            onClick={() => setProfileOpen(true)}
            aria-label="My Profile"
            className="flex items-center gap-1.5 rounded-full border border-clay/40 bg-clay/10 px-2.5 py-1 text-xs font-bold text-clay hover:bg-clay/20 transition-all cursor-pointer shadow-xs"
            title={`Logged in as ${profile.userName || "Shivang Jain"}`}
          >
            <div className="flex size-5 items-center justify-center rounded-full bg-clay text-[0.625rem] font-extrabold text-white uppercase">
              {profile.userName
                ? profile.userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : "SJ"}
            </div>
            <span className="hidden xl:inline font-display text-[0.75rem] font-bold text-foreground">
              {profile.userName || "Shivang Jain"}
            </span>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="lg:hidden rounded-full p-2 text-foreground hover:bg-secondary cursor-pointer"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 rounded-3xl border border-border bg-card/95 p-6 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-3 duration-300">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
            <div className="flex items-center gap-2">
              <img src={honasaLogo} alt="Honasa" className="h-8 w-auto object-contain" />
              <span className="font-display text-sm font-bold text-foreground">HONASA CONSUMER</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {primaryNavLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  preload="intent"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-xs tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-primary font-bold text-primary-foreground"
                      : "font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Inside Honasa Group */}
            <div className="rounded-2xl border border-border/70 bg-secondary/30 p-3 space-y-1 mt-1">
              <Link
                to="/about"
                preload="intent"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-bold tracking-wider uppercase block px-2 ${
                  isInsideHonasaActive ? "text-clay" : "text-foreground"
                }`}
              >
                Inside Honasa
              </Link>
              <div className="flex flex-col gap-1 pl-2 border-l border-border/60 ml-2 mt-2">
                {insideHonasaLinks.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    preload="intent"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
