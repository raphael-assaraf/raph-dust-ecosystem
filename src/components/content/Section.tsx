import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Section primitives ported from dust-main's ContentComponents.tsx.
 *
 * `FullWidthSection` is the one we were missing — it breaks out of any parent
 * max-width to render a true full-bleed band (so we can do bg-blue-50 strips
 * for the bottom CTA, etc., like dust.tt does).
 *
 * `Section` is the standard centered, padded section we already had inline.
 */

interface FullWidthSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function FullWidthSection({ children, className, id }: FullWidthSectionProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Max-width container for content. Defaults to 4xl (matches dust.tt sections). */
  maxWidth?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  /** Add top/bottom padding. Defaults to py-12 md:py-16 (matches dust.tt rhythm). */
  padded?: boolean;
}

const MAX_WIDTH_CLASSES = {
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

export function Section({
  children,
  className,
  maxWidth = "4xl",
  padded = true,
}: SectionProps) {
  return (
    <section className={padded ? "py-12 md:py-16" : undefined}>
      <div className={cn("mx-auto px-6", MAX_WIDTH_CLASSES[maxWidth], className)}>
        {children}
      </div>
    </section>
  );
}
