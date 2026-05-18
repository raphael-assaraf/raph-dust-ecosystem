import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * DustDecoration — small pair of Dust brand shapes (green circle + pink
 * crescent) used to decorate pastel section cards, mirroring the testimonial
 * blocks on dust.tt. Subtle, brand-style accent. Use sparingly — one or two
 * per section.
 *
 * Place inside a relative-positioned container. Pass `position` to anchor it.
 */

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const POSITION_CLASSES: Record<Corner, string> = {
  "top-left": "top-6 left-6",
  "top-right": "top-6 right-6 rotate-90",
  "bottom-left": "bottom-6 left-6 -rotate-90",
  "bottom-right": "bottom-6 right-6 rotate-180",
};

interface DustDecorationProps {
  position: Corner;
  /** Render an enlarged version (slightly bigger shapes). */
  size?: "sm" | "md";
  className?: string;
}

export function DustDecoration({
  position,
  size = "sm",
  className,
}: DustDecorationProps) {
  const dim = size === "sm" ? "h-3.5" : "h-5";
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 flex items-center gap-1",
        POSITION_CLASSES[position],
        className
      )}
    >
      {/* Green circle (Dust brand tea-green) */}
      <span className={cn("inline-block aspect-square rounded-full bg-green-200", dim)} />
      {/* Pink crescent (half circle facing right) */}
      <svg
        viewBox="0 0 24 24"
        className={cn("inline-block", dim, "aspect-square")}
        fill="none"
        aria-hidden
      >
        <path d="M0 0a12 12 0 010 24V0z" fill="#FFC3DF" />
      </svg>
    </div>
  );
}
