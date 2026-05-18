import * as React from "react";
import { DustLogoSquare } from "@/components/logos/dust";
import { H1, P } from "@/components/content";
import { cn } from "@/lib/utils";

/*
 * MarketplaceHero — Lindy-inspired hero for the /integrations marketplace.
 *
 * Central Dust logo tile flanked by a row of partner logos that fade at the
 * edges, with a subtle radial glow behind the Dust mark. Designed to scale
 * cleanly to 100+ apps — pass any subset of the platform logos as the
 * `logos` array.
 */

interface MarketplaceHeroProps {
  title?: string;
  subtitle?: string;
  /**
   * Partner logo components to show flanking the central Dust mark.
   * Pass an even number (or roughly even) — they split left/right.
   */
  logos: { Logo: React.ComponentType<{ className?: string }>; tint?: string }[];
  className?: string;
}

export function MarketplaceHero({
  title = "Integrations",
  subtitle = "Connect Dust to your favorite tools and data sources. Build AI agents that work with your entire stack.",
  logos,
  className,
}: MarketplaceHeroProps) {
  const half = Math.ceil(logos.length / 2);
  const left = logos.slice(0, half);
  const right = logos.slice(half);

  return (
    <section className={cn("relative overflow-hidden bg-background", className)}>
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 pb-10 text-center md:pt-16 md:pb-14">
        {/* Logo constellation */}
        <div className="relative mb-8 flex h-24 w-full items-center justify-center sm:h-28">
          {/* Soft golden glow behind the Dust mark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-32 w-32 rounded-full bg-golden-200/40 blur-2xl sm:h-40 sm:w-40"
          />

          {/* Fade overlays so logos at the edges drop off cleanly */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-48"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-48"
          />

          <div className="relative flex items-center justify-center gap-3 sm:gap-5">
            {left.map(({ Logo, tint }, i) => (
              <LogoTile key={`l-${i}`} Logo={Logo} tint={tint} />
            ))}
            {/* Center: Dust logo, larger + with subtle ring */}
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-background shadow-md ring-4 ring-golden-100 sm:h-16 sm:w-16">
              <DustLogoSquare className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            {right.map(({ Logo, tint }, i) => (
              <LogoTile key={`r-${i}`} Logo={Logo} tint={tint} />
            ))}
          </div>
        </div>

        <H1
          mono
          className="text-center text-5xl font-medium leading-tight text-foreground md:text-6xl"
        >
          {title}
        </H1>
        <P size="lg" className="mt-5 max-w-2xl text-muted-foreground">
          {subtitle}
        </P>
      </div>
    </section>
  );
}

function LogoTile({
  Logo,
  tint,
}: {
  Logo: React.ComponentType<{ className?: string }>;
  tint?: string;
}) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background shadow-sm sm:h-12 sm:w-12">
      <Logo className={cn("h-6 w-6 sm:h-7 sm:w-7", tint ?? "text-foreground")} />
    </div>
  );
}
