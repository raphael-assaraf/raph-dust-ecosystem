import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Card used in the integrations marketplace grid and in "Related integrations"
 * sections. Mirrors dust.tt's IntegrationCard from
 * dust-main/front/pages/integrations/index.tsx — vertical layout (logo on top,
 * name + description + action count below), green hover border, subtle shadow.
 *
 * Tags are small badges shown at the top-right of the card:
 * - "native"  = Dust built this integration (vs. third-party MCP)
 * - "mcp"     = uses the MCP protocol
 * Cards can carry both tags (Dust-built MCP), one (legacy Dust connector =
 * only "native", or third-party MCP = only "mcp"), or none.
 */

export type IntegrationTag = "native" | "mcp";

export interface IntegrationCardData {
  name: string;
  slug: string;
  description?: string;
  actions?: number;
  logo: React.ComponentType<{ className?: string }>;
  /** Optional tailwind text-color class to tint the logo (some logos use currentColor). */
  tint?: string;
  /** Technical-origin badges shown at the top-right of the card. */
  tags?: IntegrationTag[];
}

const TAG_STYLES: Record<IntegrationTag, { label: string; className: string }> = {
  native: {
    label: "Native",
    className: "bg-green-50 text-green-700 border-green-200",
  },
  mcp: {
    label: "MCP",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
};

interface IntegrationCardProps {
  integration: IntegrationCardData;
  className?: string;
}

export function IntegrationCard({ integration, className }: IntegrationCardProps) {
  const Logo = integration.logo;
  return (
    <Link
      href={`/integrations/${integration.slug}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:border-green-200 hover:shadow-sm",
        className
      )}
    >
      {/* Tag badges, top-right */}
      {integration.tags && integration.tags.length > 0 && (
        <div className="absolute right-3 top-3 flex flex-wrap items-center gap-1">
          {integration.tags.map((t) => {
            const s = TAG_STYLES[t];
            return (
              <span
                key={t}
                className={cn(
                  "rounded-md border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  s.className
                )}
              >
                {s.label}
              </span>
            );
          })}
        </div>
      )}

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted">
        <Logo className={cn("h-7 w-7", integration.tint ?? "text-foreground")} />
      </div>
      <h3 className="text-base font-semibold text-foreground">{integration.name}</h3>
      {integration.description && (
        <p className="mt-1 line-clamp-2 flex-grow text-sm text-muted-foreground">
          {integration.description}
        </p>
      )}
      {integration.actions !== undefined && (
        <p className="mt-3 text-xs text-muted-foreground">
          {integration.actions} action{integration.actions !== 1 ? "s" : ""} available
        </p>
      )}
    </Link>
  );
}
