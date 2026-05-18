import * as React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { H3 } from "@/components/content";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

/*
 * Ported from dust-main/front/components/home/FunctionCard.tsx — a
 * department/use-case card with a colored top visual area + bulleted
 * features + a "Learn more" CTA. Reusable for any marketing page that
 * needs to showcase a list of features/solutions.
 */

type ColorVariant = "green" | "blue" | "golden" | "rose";

const COLOR_CLASSES: Record<ColorVariant, { card: string; visual: string }> = {
  green: { card: "bg-green-50", visual: "bg-green-100" },
  blue: { card: "bg-blue-50", visual: "bg-blue-100" },
  golden: { card: "bg-golden-50", visual: "bg-golden-100" },
  rose: { card: "bg-rose-50", visual: "bg-rose-100" },
};

interface FeatureCardProps {
  title: string;
  features: string[];
  color?: ColorVariant;
  /** Optional top visual — image src OR a React element (e.g. an icon). */
  visualSrc?: string;
  visual?: React.ReactNode;
  href?: string;
  ctaLabel?: string;
}

export function FeatureCard({
  title,
  features,
  color = "blue",
  visualSrc,
  visual,
  href,
  ctaLabel = "Learn more",
}: FeatureCardProps) {
  const c = COLOR_CLASSES[color];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl">
      <div className={cn("h-60 w-full rounded-t-2xl px-4 pb-0 pt-4", c.card)}>
        <div
          className={cn(
            "flex h-full w-full items-center justify-center rounded-xl p-4",
            c.visual
          )}
        >
          {visualSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={visualSrc}
              alt={`${title} visual`}
              className="h-full w-full object-contain"
            />
          ) : (
            visual
          )}
        </div>
      </div>
      <div className={cn("flex flex-grow flex-col gap-2 rounded-b-2xl px-8 pb-8 pt-4", c.card)}>
        <H3 mono className="text-gray-900">
          {title}
        </H3>
        <ul className="copy-base flex-grow font-medium text-gray-700">
          {features.map((feature, i) => (
            <li key={i} className="flex min-h-6 items-start gap-1 py-1.5 text-gray-700">
              <div className="pt-1">
                <ChevronRightIcon className="h-4 w-4" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        {href && (
          <div className="mt-4">
            <Link href={href}>
              <Button variant="outline" label={ctaLabel} size="sm" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
