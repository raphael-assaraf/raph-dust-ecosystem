import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
 * Button — modeled after Sparkle's Button, simplified for our marketing-site mockup.
 *
 * Defaults are tuned to dust.tt's marketing pages:
 * - `variant` defaults to "highlight" (blue) — this is what every primary
 *   CTA on dust.tt uses, NOT the dark "primary" variant Sparkle reserves for
 *   in-product UI.
 * - `size="md"` is the marketing-page default (h-12, px-4, rounded-2xl).
 * - Rounding is derived from size (xs → rounded-lg, sm → rounded-xl,
 *   md → rounded-2xl) matching Sparkle, unless `isRounded` is true (pill).
 */
const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center whitespace-nowrap select-none transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none"
  ),
  {
    variants: {
      variant: {
        highlight:
          "bg-blue-500 text-blue-50 hover:bg-blue-400 active:bg-blue-600 border border-transparent",
        "highlight-secondary":
          "border border-border bg-background text-blue-500 hover:bg-blue-50 hover:border-blue-200",
        primary:
          "bg-gray-800 text-gray-50 hover:bg-gray-700 active:bg-gray-900 border border-transparent",
        outline:
          "border border-border bg-background text-foreground hover:bg-gray-50 hover:border-gray-200",
        ghost:
          "border border-transparent text-foreground hover:bg-gray-100",
        "ghost-secondary":
          "border border-transparent text-muted-foreground hover:bg-gray-100 hover:text-foreground",
      },
      size: {
        xs: "h-7 px-2.5 gap-1.5 text-xs font-semibold rounded-lg",
        sm: "h-9 px-3 gap-2 text-sm font-semibold rounded-xl",
        md: "h-12 px-4 py-2 gap-2.5 text-base font-semibold rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "highlight",
      size: "md",
    },
  }
);

type IconType = React.ComponentType<{ className?: string }> | React.ReactElement;

interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  label?: string;
  icon?: IconType;
  iconRight?: IconType;
  className?: string;
  isRounded?: boolean;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps | "children"> {
  href?: never;
  children?: React.ReactNode;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  onClick?: never;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function renderIcon(icon: IconType, className: string) {
  if (React.isValidElement(icon)) {
    return <span className={cn("shrink-0", className)}>{icon}</span>;
  }
  const Comp = icon as React.ComponentType<{ className?: string }>;
  return <Comp className={cn("h-4 w-4 shrink-0", className)} />;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, icon, iconRight, variant, size, className, isRounded, children, ...props }, ref) => {
    const content = (
      <>
        {icon && renderIcon(icon, "")}
        {(label ?? children) && <span>{label ?? children}</span>}
        {iconRight && renderIcon(iconRight, "")}
      </>
    );

    const classes = cn(
      buttonVariants({ variant, size }),
      isRounded && "rounded-full",
      className
    );

    if ("href" in props && props.href) {
      const { href, target, rel } = props;
      return (
        <Link href={href} target={target} rel={rel} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
