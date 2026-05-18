"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/*
 * Carousel — Sparkle/dust.tt-style horizontal scroller with snap and
 * left/right arrow buttons. Items are passed as children and rendered in a
 * scrollable flex row. Use for feature cards, testimonials, partner logos.
 */

interface CarouselProps {
  children: React.ReactNode;
  /** Width of each item; controls how many show at once. */
  itemClassName?: string;
  className?: string;
  /** Optional title rendered above the carousel with the controls. */
  title?: React.ReactNode;
  /** Hide arrows (e.g. for auto-scrolling marquee mode). */
  showArrows?: boolean;
}

export function Carousel({
  children,
  itemClassName = "w-80",
  className,
  title,
  showArrows = true,
}: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scroll = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className={cn("w-full", className)}>
      {(title || showArrows) && (
        <div className="mb-6 flex items-center justify-between gap-4">
          {title}
          {showArrows && (
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scroll(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-background"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-background"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}
      <div
        ref={scrollerRef}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} className={cn("snap-start shrink-0", itemClassName)}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
