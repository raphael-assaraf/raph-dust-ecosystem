"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/*
 * Top-of-page colored banner, ported from
 * dust-main/front/components/home/AnnouncementBanner.tsx.
 * Hides on scroll. Sits at the top of the viewport with a "New" pill +
 * message + arrow. Use for time-bound announcements (fundraise, launch, etc.).
 */

const SCROLL_HIDE_THRESHOLD_PX = 12;

interface AnnouncementBannerProps {
  href: string;
  text: string;
  /** Pill label (default: "New"). */
  pill?: string;
  /** Hide while server-rendering / not yet ready. */
  show?: boolean;
}

export function AnnouncementBanner({
  href,
  text,
  pill = "New",
  show = true,
}: AnnouncementBannerProps) {
  const [hidden, setHidden] = useState(false);

  const sync = useCallback(() => {
    setHidden(window.scrollY > SCROLL_HIDE_THRESHOLD_PX);
  }, []);

  useEffect(() => {
    if (!show) return;
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [show, sync]);

  if (!show) return null;

  return (
    <Link
      href={href}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={cn(
        "group fixed left-0 right-0 top-0 z-[60] flex h-10 w-full items-center justify-center gap-2 bg-blue-500 px-4 text-white transition-[transform,opacity] duration-200 ease-out",
        hidden
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      )}
    >
      <span className="inline-flex h-5 flex-shrink-0 items-center rounded-full bg-white px-2 text-[10px] font-semibold uppercase leading-none tracking-[0.06em] text-blue-500">
        {pill}
      </span>
      <span className="truncate text-xs font-medium tracking-tight sm:text-sm">{text}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      >
        <line x1="3" y1="8" x2="13" y2="8" />
        <polyline points="9 4 13 8 9 12" />
      </svg>
    </Link>
  );
}
