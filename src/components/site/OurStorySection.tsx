import { Link } from "@tanstack/react-router";
import { ShieldCheck, Building2, ArrowRight, Heart, Users } from "lucide-react";
import foundersImg from "@/assets/founders-story.png";

export function OurStorySection() {
  return (
    <section className="border-b border-border/60 bg-background py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 size-[500px] rounded-full bg-clay/10 blur-3xl opacity-40" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Founders Portrait Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-3 shadow-2xl">
                <img
                  src={foundersImg}
                  alt="Ghazal and Varun Alagh - Founders of Honasa Consumer & Mamaearth"
                  className="h-auto w-full object-contain rounded-2xl"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:right-4 rounded-2xl border border-border/80 bg-card/95 p-3 sm:p-4 shadow-xl backdrop-blur-md flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-1rem)]">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <ShieldCheck className="size-4 sm:size-5" />
                </div>
                <div>
                  <span className="text-[0.5625rem] sm:text-[0.625rem] font-bold uppercase tracking-wider text-muted-foreground block">
                    Established 2016
                  </span>
                  <span className="text-[0.6875rem] sm:text-xs font-bold text-foreground block whitespace-nowrap">
                    Asia's 1st MadeSafe™ Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Narrative & Learn More CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-clay">
                <Heart className="size-3.5 fill-clay/20 text-clay" />
                <span>Our Founding Story</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Driven by Love. Powered by Listening.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
              <p>
                Our journey began in 2016 when our founders, Ghazal and Varun, were blessed with their first child. As new parents, they were paranoid and wanted to find safe & toxin-free products for their baby. But every product they found - be it a shampoo or a lotion - was laden with harmful substances and toxins. That was the moment they decided to initiate the change themselves. Mamaearth was born as Asia's first brand with Made Safe certified products - a brand by parents, for parents.
              </p>
              <p>
                We've built a community of digitally active mothers to understand their needs better and used those insights to define the product innovation roadmap for Mamaearth. This deep focus on product quality and consumer listening continues to be a core value for us. While Mamaearth started as a brand for baby care products, we soon realized that consumers were looking for clean beauty products for themselves too. Hence, we expanded into all segments of the Beauty & Personal care industry through Mamaearth and other new brands.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/our-story"
                preload="intent"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] cursor-pointer"
              >
                <span>Learn More About Our Story</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
