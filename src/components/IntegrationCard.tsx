import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Card used in the integrations marketplace grid and in "Related integrations"
 * sections. Mirrors dust.tt's IntegrationCard from
 * dust-main/front/pages/integrations/index.tsx — vertical layout (logo on top,
 * name + description + action count below), green hover border, subtle shadow.
 *
 * Note: the `tags` field is retained on the data type for future use (e.g.
 * faceting, internal filters), but is intentionally NOT rendered on the card.
 * The Native/MCP distinction was deemed low-signal for end users — most won't
 * know or care which side built the integration.
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
  /** Retained for data modeling; not currently rendered on the card. */
  tags?: IntegrationTag[];
}

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
