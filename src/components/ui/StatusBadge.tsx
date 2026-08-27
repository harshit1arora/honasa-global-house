import React from "react";

export type BadgeMode = "live" | "simulated" | "concept";

interface StatusBadgeProps {
  mode: BadgeMode;
  text?: string;
  className?: string;
}

export function StatusBadge({ mode, text, className = "" }: StatusBadgeProps) {
  if (mode === "live") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 ${className}`}
        title="Live functionality backed by real product data and active service layer"
      >
        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>{text ?? "Live"}</span>
      </span>
    );
  }

  if (mode === "simulated") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 ${className}`}
        title="Simulated for demonstration purposes"
      >
        <span className="size-1.5 rounded-full bg-amber-500" />
        <span>{text ?? "Simulated for Demo"}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 ${className}`}
      title="Future-state strategic concept vision"
    >
      <span className="size-1.5 rounded-full bg-purple-500" />
      <span>{text ?? "Future-State Concept"}</span>
    </span>
  );
}
