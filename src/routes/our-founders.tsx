import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/our-founders")({
  beforeLoad: () => {
    throw redirect({ to: "/leadership-team" });
  },
});
