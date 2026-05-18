import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * UseCaseGrid — a row of 3 cards that translate an MCP integration's
 * technical capabilities into human-recognizable "jobs to be done."
 *
 * The system: every integration page renders 3 (occasionally 2 or 4) cards.
 * Each card pairs an icon, a JTBD title (broad, recognizable), a one-liner
 * description, and an optional small list of the MCP tools that enable it.
 *
 * Reusable across every partner page — pass partner-specific use cases.
 */

type ColorVariant = "blue" | "green" | "golden" | "rose" | "pink" | "violet";

const COLOR_CLASSES: Record<ColorVariant, { iconBg: string; iconText: string }> = {
  blue: { iconBg: "bg-blue-50", iconText: "text-blue-600" },
  green: { iconBg: "bg-green-50", iconText: "text-green-700" },
  golden: { iconBg: "bg-golden-50", iconText: "text-golden-700" },
  rose: { iconBg: "bg-rose-50", iconText: "text-rose-600" },
  pink: { iconBg: "bg-pink-50", iconText: "text-pink-600" },
  violet: { iconBg: "bg-violet-50", iconText: "text-violet-600" },
};

export interface UseCase {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  /** Optional: which MCP tools enable this use case (rendered as small chips). */
  tools?: string[];
  color?: ColorVariant;
}

interface UseCaseGridProps {
  useCases: UseCase[];
  className?: string;
}

export function UseCaseGrid({ useCases, className }: UseCaseGridProps) {
  const cols =
    useCases.length === 2
      ? "sm:grid-cols-2"
      : useCases.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-5", cols, className)}>
      {useCases.map((uc, i) => {
        const Icon = uc.icon;
        const c = COLOR_CLASSES[uc.color ?? "blue"];
        return (
          <div
            key={i}
            className="flex flex-col rounded-2xl border border-border bg-background p-6"
          >
            <div
              className={cn(
                "mb-5 flex h-11 w-11 items-center justify-center rounded-xl",
                c.iconBg
              )}
            >
              <Icon className={cn("h-5 w-5", c.iconText)} />
            </div>
            <h3 className="text-base font-semibold text-foreground">{uc.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {uc.description}
            </p>
            {uc.tools && uc.tools.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {uc.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
