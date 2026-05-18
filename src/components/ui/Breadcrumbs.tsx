import * as React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/*
 * Breadcrumb trail — matches Sparkle's Breadcrumbs visual: ChevronRight
 * separators, muted-foreground intermediate links, foreground for the last.
 */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-1.5 text-xs">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const content =
            item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast ? "text-foreground" : "text-muted-foreground")}>
                {item.label}
              </span>
            );
          return (
            <li key={i} className="flex items-center gap-1.5">
              {content}
              {!isLast && (
                <ChevronRightIcon className="h-3 w-3 text-muted-foreground/60" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
