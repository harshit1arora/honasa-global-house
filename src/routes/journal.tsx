import { createFileRoute } from "@tanstack/react-router";
import { BeautyEditorial } from "@/components/site/BeautyEditorial";
import { ReviewsCommunity } from "@/components/site/ReviewsCommunity";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Beauty Edit & Community : Honasa Journal" },
      {
        name: "description",
        content:
          "Formulation deep dives, routine masterclasses, and verified community reviews with AI consensus across all 8 Honasa houses." },
    ] }),
  component: JournalPage });

function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* The Beauty Edit Magazine */}
      <BeautyEditorial />

      {/* Verified Community Reviews & AI Consensus */}
      <ReviewsCommunity />
    </div>
  );
}
