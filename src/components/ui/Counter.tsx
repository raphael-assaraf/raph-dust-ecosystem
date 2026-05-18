import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
 * Counter — small numeric badge, like the count next to a notification icon
 * or button label. Color follows Sparkle conventions (primary/highlight/...).
 */

const counterVariants = cva(
  "inline-flex items-center justify-center rounded-full font-mono font-medium tabular-nums",
  {
    variants: {
      variant: {
        primary: "bg-gray-100 text-foreground",
        highlight: "bg-blue-100 text-blue-700",
        warning: "bg-rose-100 text-rose-700",
        success: "bg-green-100 text-green-700",
      },
      size: {
        xs: "h-4 min-w-4 px-1 text-[10px]",
        sm: "h-5 min-w-5 px-1.5 text-xs",
        md: "h-6 min-w-6 px-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

interface CounterProps extends VariantProps<typeof counterVariants> {
  value: number;
  className?: string;
  /** When true, displays "99+" for values >99. */
  cap?: boolean;
}

export function Counter({ value, variant, size, className, cap = true }: CounterProps) {
  const display = cap && value > 99 ? "99+" : String(value);
  return (
    <span className={cn(counterVariants({ variant, size }), className)}>{display}</span>
  );
}
