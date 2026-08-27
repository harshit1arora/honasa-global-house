import { Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowUp } from "lucide-react";
import { brands } from "@/data/brands";
import { useSite } from "@/lib/site-state";
import honasaLogo from "@/assets/honasa-logo.png";

export function Footer() {
  const { setConciergeOpen, setQuizOpen } = useSite();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/80 bg-linear-to-b from-background via-secondary/20 to-background overflow-hidden pt-16 pb-8">
      {/* Background Ambient Glow Gradients */}
      <div className="pointer-events-none absolute bottom-0 right-0 size-[600px] rounded-full bg-clay/10 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute top-1/2 left-0 size-[400px] rounded-full bg-emerald-500/5 blur-3xl opacity-40" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 space-y-12">
        {/* Middle: Modern 4-Column Directory */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand Lore */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3 group">
              <img
                src={honasaLogo}
                alt="Honasa Consumer"
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <span className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground leading-none group-hover:text-clay transition-colors">
                  HONASA
                </span>
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-muted-foreground leading-tight">
                  CONSUMER
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Building a new generation of digital-first beauty & personal care brand houses. Driven by technology, real consumer signals, and climate adaptation.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-2">
              <ShieldCheck className="size-4 text-emerald-500" />
              <span>NSE & BSE Listed · Certified Clean</span>
            </div>
          </div>

          {/* Col 2: The 8 Brands Pill Grid */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4">
              The 8 Autonomous Houses
            </p>
            <div className="flex flex-wrap gap-2">
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  to="/brands"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-clay hover:text-clay hover:scale-105 transition-all duration-300 shadow-2xs"
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: b.accent }}
                  />
                  <span>{b.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Ecosystem Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4">
              Ecosystem
            </p>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Universal Shop</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/science" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Science & R&D Lab</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>The Beauty Edit</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setQuizOpen(true)}
                  className="text-muted-foreground hover:text-foreground cursor-pointer text-left transition-colors flex items-center justify-between w-full group"
                >
                  <span>90s AI Consultation</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4">
              Inside Honasa
            </p>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <Link to="/our-values" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Values
                </Link>
              </li>
              <li>
                <Link to="/our-mission" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Story & Milestones
                </Link>
              </li>
              <li>
                <Link to="/leadership-team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link to="/our-accomplishments" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accomplishments
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Floating Back to Top Button */}
        <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={honasaLogo} alt="Honasa" className="h-4 w-auto object-contain opacity-75" />
            <p>© {new Date().getFullYear()} Honasa Consumer Ltd. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <span className="opacity-30">·</span>
            <Link to="/terms-of-use" className="hover:text-foreground transition-colors">
              Terms of Use
            </Link>
            <span className="opacity-30">·</span>
            <a href="mailto:compliance@honasa.in" className="hover:text-foreground transition-colors">
              compliance@honasa.in
            </a>
          </div>

          {/* Modern Magnetic Pill Back-To-Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-2 text-xs font-bold text-foreground shadow-sm hover:border-clay hover:text-clay hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
