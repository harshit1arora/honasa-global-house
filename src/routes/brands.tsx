import { createFileRoute } from "@tanstack/react-router";
import { HouseOfBrands } from "@/components/site/HouseOfBrands";
import { HonasaPortfolioSection } from "@/components/site/HonasaPortfolioSection";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "The House of Brands: Honasa Consumer" },
      {
        name: "description",
        content:
          "Digital-first house of brands built for next-gen consumer needs. Explore Mamaearth, The Derma Co., Aqualogica, BBlunt, Dr. Sheth's, Staze, Luminéve, and Reginald Men." },
    ] }),
  component: BrandsPage });

function BrandsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Portfolio Overview Section */}
      <HonasaPortfolioSection />

      {/* Brand Exploration Catalog */}
      <HouseOfBrands />
    </div>
  );
}
