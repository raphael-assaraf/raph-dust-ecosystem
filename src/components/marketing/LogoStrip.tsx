import * as React from "react";
import { H4 } from "@/components/content";
import { cn } from "@/lib/utils";

/*
 * "Trusted by N organizations" style logo wall. Lightweight version of
 * dust-main/front/components/home/TrustedBy.tsx — accepts an array of logo
 * React components (use the Sparkle platform logos in src/components/logos/).
 * Title and "Join them" CTA optional.
 */

interface LogoStripProps {
  logos: React.ComponentType<{ className?: string }>[];
  title?: React.ReactNode;
  className?: string;
  size?: "default" | "large";
}

export function LogoStrip({
  logos,
  title,
  className,
  size = "default",
}: LogoStripProps) {
  const isLarge = size === "large";
  return (
    <div className={cn("flex flex-col items-center", isLarge ? "py-8" : "py-6", className)}>
      {title && (
        <H4 className="mb-6 w-full text-center text-foreground">{title}</H4>
      )}
      <div
        className={cn(
          "flex flex-wrap items-center justify-center",
          isLarge
            ? "gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16"
            : "gap-x-6 gap-y-4 sm:gap-x-10 lg:gap-x-12"
        )}
      >
        {logos.map((Logo, i) => (
          <Logo
            key={i}
            className={cn(
              "text-muted-foreground/70 transition-colors hover:text-foreground",
              isLarge ? "h-10 w-auto" : "h-8 w-auto"
            )}
          />
        ))}
      </div>
    </div>
  );
}
