import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
 * Lightweight version of Sparkle's Avatar. Renders an icon or initials in a
 * sized, rounded container. Matches Sparkle's sizes + compound-rounded
 * behavior (size determines corner radius).
 */

const avatarVariants = cva(
  "flex shrink-0 items-center justify-center overflow-hidden bg-muted",
  {
    variants: {
      size: {
        xxs: "h-5 w-5 rounded",
        xs: "h-7 w-7 rounded-md",
        sm: "h-9 w-9 rounded-lg",
        md: "h-12 w-12 rounded-xl",
        lg: "h-16 w-16 rounded-2xl",
        xl: "h-20 w-20 rounded-[22px]",
      },
      bordered: {
        true: "border border-border",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      bordered: true,
    },
  }
);

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  icon?: React.ComponentType<{ className?: string }>;
  initials?: string;
  className?: string;
  iconClassName?: string;
}

const ICON_SIZE_CLASSES = {
  xxs: "h-3 w-3",
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-7 w-7",
  lg: "h-9 w-9",
  xl: "h-12 w-12",
} as const;

export function Avatar({
  size = "md",
  bordered = true,
  icon: Icon,
  initials,
  className,
  iconClassName,
}: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size, bordered }), className)}>
      {Icon && (
        <Icon
          className={cn(
            ICON_SIZE_CLASSES[size ?? "md"],
            "text-foreground",
            iconClassName
          )}
        />
      )}
      {!Icon && initials && (
        <span className="font-semibold text-foreground">{initials}</span>
      )}
    </div>
  );
}
