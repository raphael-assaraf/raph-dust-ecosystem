"use client";

import * as React from "react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { DustLogo } from "@/components/logos/dust";
import { Button } from "@/components/ui";
import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/*
 * Header — 1:1 with dust.tt's LandingLayout composition of
 * ScrollingHeader + MainNavigation.
 *
 * Confirmed by reading dust-main/front/components/home/LandingLayout.tsx:
 * - Header is h-24 at rest, h-16 on scroll (>12px), gains backdrop blur
 * - Logo is exactly h-[24px] w-[96px] (the wordmark viewBox 1:1) on desktop
 * - Inner container: `flex h-full w-full items-center gap-4 px-6 xl:gap-10`
 * - Right side: Sign in (text), Try for free (outline), Contact sales (highlight)
 *
 * On scroll the logo doesn't shrink in dust.tt's implementation — only the
 * container height changes. Logo stays at 24px.
 */

const SCROLL_THRESHOLD_PX = 12;

type NavItem = {
  title: string;
  href?: string;
  items?: { title: string; href?: string; isExternal?: boolean }[];
  rows?: number;
};

const MAIN_NAV: NavItem[] = [
  {
    title: "Product",
    rows: 2,
    items: [
      { title: "Product", href: "#" },
      { title: "Chrome Extension", href: "#" },
      { title: "Frames", href: "#" },
      { title: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Solutions",
    rows: 5,
    items: [
      { title: "Departments" },
      { title: "Sales", href: "#" },
      { title: "Customer Support", href: "#" },
      { title: "Marketing & Content", href: "#" },
      { title: "Engineering", href: "#" },
      { title: "Industries" },
      { title: "B2B SaaS", href: "#" },
      { title: "Consulting", href: "#" },
      { title: "Financial Services", href: "#" },
      { title: "Insurance", href: "#" },
    ],
  },
  {
    title: "Resources",
    rows: 4,
    items: [
      { title: "Build" },
      { title: "Get Started", href: "#" },
      { title: "Guides & Tutorials", href: "#" },
      { title: "Academy", href: "#" },
      { title: "Explore" },
      { title: "Blog", href: "#" },
      { title: "Customer Stories", href: "#" },
      { title: "Webinars", href: "#" },
      { title: "Connect" },
      { title: "Slack Community", href: "#" },
      { title: "Become a Partner", href: "/become-a-partner" },
    ],
  },
  { title: "Security", href: "#" },
  { title: "Pricing", href: "#" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const checkScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[height,background-color,border-color,backdrop-filter] duration-200 ease-out",
        isScrolled
          ? "h-16 border-border bg-background/80 backdrop-blur-lg"
          : "h-24 border-transparent bg-background"
      )}
    >
      <div className="flex h-full w-full items-center gap-4 px-6 xl:gap-10">
        {/* Desktop logo — exact dust.tt sizing */}
        <Link
          href="/"
          aria-label="Dust home"
          className="hidden h-[24px] w-[96px] shrink-0 xl:block"
        >
          <DustLogo className="h-full w-full" />
        </Link>
        {/* Mobile logo */}
        <Link
          href="/"
          aria-label="Dust home"
          className="block h-[24px] w-[96px] shrink-0 xl:hidden"
        >
          <DustLogo className="h-full w-full" />
        </Link>

        {/* Main nav with dropdowns */}
        <nav
          aria-label="Main"
          className="relative z-10 hidden items-center gap-1 xl:flex"
        >
          {MAIN_NAV.map((item) => {
            if (item.href) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="inline-flex h-9 items-center px-4 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              );
            }
            const isOpen = openId === item.title;
            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setOpenId(item.title)}
                onMouseLeave={() => setOpenId(null)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className="inline-flex h-9 items-center gap-1 px-4 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground focus:outline-none"
                >
                  {item.title}
                  <ChevronDownIcon
                    className={cn(
                      "mt-px h-3 w-3 opacity-40 transition-transform duration-200",
                      isOpen ? "rotate-180" : "rotate-0"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  role="menu"
                  aria-label={item.title}
                  className={cn(
                    "absolute left-0 top-full origin-top pt-2 transition-[opacity,transform] duration-200 ease-out",
                    isOpen
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-1 scale-[0.97] opacity-0"
                  )}
                >
                  <div className="flex min-w-[180px] flex-col gap-3 rounded-2xl border border-border/60 bg-background p-5 shadow-[0_2px_6px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.03)]">
                    <ul
                      className={cn(
                        "grid grid-flow-col gap-x-10 gap-y-2",
                        item.rows ? `grid-rows-${item.rows}` : "grid-rows-3"
                      )}
                    >
                      {item.items?.map((sub, i) => (
                        <DropdownItem
                          key={sub.title || `spacer-${i}`}
                          title={sub.title}
                          href={sub.href}
                          isColumnStart={item.rows ? i % item.rows === 0 : i === 0}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right side CTAs — order + variants now match dust.tt */}
        <div className="flex flex-grow items-center justify-end gap-4">
          <a
            className="hidden h-9 items-center justify-center rounded-md text-base font-medium text-foreground/70 transition-colors hover:text-foreground hover:underline hover:underline-offset-4 xl:inline-flex"
            href="#"
          >
            Sign in
          </a>
          <Button href="#" variant="outline" size="sm">
            Try for free
          </Button>
          <Button href="#" variant="highlight" size="sm" className="hidden xs:inline-flex">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  );
}

interface DropdownItemProps {
  title?: string;
  href?: string;
  isColumnStart?: boolean;
}

function DropdownItem({ title, href, isColumnStart }: DropdownItemProps) {
  if (!href) {
    return (
      <li className={cn("pb-0.5", isColumnStart ? "pt-0" : "pt-3")}>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40">
          {title}
        </span>
      </li>
    );
  }
  return (
    <li>
      <Link
        href={href}
        role="menuitem"
        className="block whitespace-nowrap py-0.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
      >
        {title}
      </Link>
    </li>
  );
}
