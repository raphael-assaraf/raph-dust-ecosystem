"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/*
 * ScrollProgressText — text whose words light up as the user scrolls past
 * them. Sparkle uses this for marquee-style story moments on the home page.
 * Pass plain text as children; we split on whitespace.
 */

interface ScrollProgressTextProps {
  children: string;
  className?: string;
  /** Color of dimmed (not yet active) words. */
  dimColor?: string;
  /** Color of activated words. */
  activeColor?: string;
}

export function ScrollProgressText({
  children,
  className,
  dimColor = "text-muted-foreground/30",
  activeColor = "text-foreground",
}: ScrollProgressTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the bottom of the element is at the bottom of the viewport;
      // 1 when the top of the element is at the top.
      const total = rect.height + vh;
      const traveled = Math.max(0, Math.min(total, vh - rect.top));
      setProgress(traveled / total);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const words = children.split(/\s+/);
  const activeUpTo = Math.floor(progress * words.length);

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((w, i) => (
        <span
          key={i}
          className={cn(
            "mr-[0.25em] transition-colors duration-300",
            i <= activeUpTo ? activeColor : dimColor
          )}
        >
          {w}
        </span>
      ))}
    </p>
  );
}
