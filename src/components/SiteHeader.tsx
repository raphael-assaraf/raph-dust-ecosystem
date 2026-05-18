"use client";

import * as React from "react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { DustLogo } from "@/components/logos/dust";
import { Button } from "@/components/ui";
import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/*
 * Header matching dust.tt's MainNavigation pattern:
 * - At rest: h-24 (96px) with the big colorful DustLogo (h-8)
 * - On scroll (>12px): shrinks to h-16, gains border + backdrop blur
 * - Desktop: dropdown menus on hover for Product / Solutions / Resources
 * - Right side: Sign in / Contact sales / Try for free (blue highlight)
 *
 * Adapted from dust-main/front/components/home/menu/MainNavigation.tsx +
 * dust-main/front/components/home/ScrollingHeader.tsx, simplified for our
 * mockup site (one shared header for all routes).
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
      { title: "Become a Partner", href: "/partners" },
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
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo + main nav */}
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Dust home" className="block shrink-0">
            <DustLogo
              className={cn(
                "w-auto transition-[height] duration-200",
                isScrolled ? "h-6" : "h-8"
              )}
            />
          </Link>
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
                            isColumnStart={
                              item.rows ? i % item.rows === 0 : i === 0
                            }
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right side CTAs */}
        <div className="flex items-center gap-2">
          <a
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-block"
            href="#"
          >
            Sign in
          </a>
          <Button href="#" variant="outline" size="xs" className="hidden sm:inline-flex">
            Contact sales
          </Button>
          <Button href="#" variant="highlight" size="xs">
            Try for free
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
