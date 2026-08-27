import { createFileRoute } from "@tanstack/react-router";
import { ScienceRnD } from "@/components/site/ScienceRnD";
import { ConsumerIntelligence } from "@/components/site/ConsumerIntelligence";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "Science & Consumer Intelligence : Honasa R&D" },
      {
        name: "description",
        content:
          "Science, not just marketing. Explore our 4 R&D formulation pillars, interactive Trace The Product tool, and our 7-stage consumer listening flywheel." },
    ] }),
  component: SciencePage });

function SciencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Science & R&D with Trace The Product */}
      <ScienceRnD />

      {/* Consumer Intelligence: "We Listen Before We Build" */}
      <ConsumerIntelligence />
    </div>
  );
}
