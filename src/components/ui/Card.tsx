import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
 * Modeled after Sparkle's Card. Variants kept aligned with the original.
 */
const cardVariants = cva(
  cn(
    "flex flex-col text-left",
    "border overflow-hidden transition-all",
    "text-foreground"
  ),
  {
    variants: {
      variant: {
        primary: "bg-muted border-transparent",
        active: "bg-muted border-border",
        highlight: "bg-blue-50 border-transparent",
        warning: "bg-rose-50 border-transparent",
        secondary: "bg-background border-border",
        tertiary: "bg-background border-transparent",
      },
      size: {
        xs: "px-2 py-1.5 rounded-lg",
        sm: "p-3 rounded-xl",
        md: "p-4 rounded-2xl",
        lg: "p-5 rounded-3xl",
      },
      interactive: {
        true: "cursor-pointer hover:bg-gray-100 active:bg-gray-200",
        false: "",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
      interactive: false,
    },
  }
);

interface BaseCardProps extends VariantProps<typeof cardVariants> {
  className?: string;
  children?: React.ReactNode;
}

interface CardAsDiv extends BaseCardProps, Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseCardProps | "children"> {
  href?: never;
}

interface CardAsLink extends BaseCardProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
}

export type CardProps = CardAsDiv | CardAsLink;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant, size, interactive, className, children, ...props }, ref) => {
    const isInteractive = interactive || ("href" in props && Boolean(props.href)) || ("onClick" in props && Boolean(props.onClick));
    const classes = cn(cardVariants({ variant, size, interactive: isInteractive }), className);

    if ("href" in props && props.href) {
      const { href, target, rel } = props;
      return (
        <Link href={href} target={target} rel={rel} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <div
        ref={ref}
        className={classes}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
