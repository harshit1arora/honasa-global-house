import { createFileRoute } from "@tanstack/react-router";
import { CorporateLayer } from "@/components/site/CorporateLayer";
import { SustainabilityImpact } from "@/components/site/SustainabilityImpact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Inside Honasa : House Thesis, Leadership & Careers" },
      {
        name: "description",
        content:
          "Learn about Honasa Consumer Ltd., our executive leadership, career opportunities in technology and formulation, and investor relations.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Corporate Layer: About, Leadership, Careers, Investors */}
      <CorporateLayer />

      {/* Sustainability & Impact: Plant Goodness & Plastic Positive */}
      <SustainabilityImpact />
    </div>
  );
}
