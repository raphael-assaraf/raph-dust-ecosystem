import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
 * Modeled after Sparkle's Chip. Same color tokens, simpler API.
 */
const chipVariants = cva("inline-flex box-border items-center border", {
  variants: {
    size: {
      mini: "rounded-md min-h-5 text-xs font-medium px-1.5 py-1 gap-0.5",
      xs: "rounded-lg min-h-7 text-xs font-semibold px-3 gap-1 tracking-tight",
      sm: "rounded-xl min-h-9 text-sm font-semibold px-4 gap-1.5 tracking-tight",
    },
    color: {
      primary: "bg-muted border-border text-foreground",
      highlight: "bg-blue-100 border-blue-200 text-blue-900",
      success: "bg-green-100 border-green-200 text-green-900",
      info: "bg-golden-100 border-golden-200 text-golden-900",
      warning: "bg-rose-100 border-rose-200 text-rose-900",
      green: "bg-green-100 border-green-200 text-green-900",
      blue: "bg-blue-100 border-blue-200 text-blue-900",
      rose: "bg-rose-100 border-rose-200 text-rose-900",
      golden: "bg-golden-100 border-golden-200 text-golden-900",
      white: "bg-background border-border text-foreground",
    },
  },
  defaultVariants: {
    size: "xs",
    color: "primary",
  },
});

export interface ChipProps
  extends VariantProps<typeof chipVariants>,
    Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ size, color, label, icon: Icon, children, className, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(chipVariants({ size, color }), className)} {...props}>
        {Icon && <Icon className={cn(size === "mini" ? "h-3 w-3" : "h-3.5 w-3.5")} />}
        {label ?? children}
      </span>
    );
  }
);
Chip.displayName = "Chip";
