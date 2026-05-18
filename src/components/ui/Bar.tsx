import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Bar — Sparkle's progress bar primitive. Just a filled track segment
 * over a muted background. Width prop accepts 0-100.
 */

interface BarProps {
  value: number;
  max?: number;
  className?: string;
  trackClassName?: string;
  fillClassName?: string;
}

export function Bar({
  value,
  max = 100,
  className,
  trackClassName,
  fillClassName,
}: BarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", trackClassName, className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className={cn("h-full rounded-full bg-blue-500 transition-[width] duration-300", fillClassName)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
