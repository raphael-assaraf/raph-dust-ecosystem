import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Ported (and simplified for our Tailwind v4 setup) from dust-main's
 * front/components/home/ContentComponents.tsx. These are the typography
 * primitives every Dust marketing page uses; matching them is what makes a
 * page "feel" like dust.tt without per-page font sizing.
 *
 * H1..H5 default to sans (heading-*); pass `mono` for the Geist Mono variant
 * (heading-mono-*) used in heroes and feature titles.
 */

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

const HEADING_CLASSES: Record<HeadingTag, string> = {
  h1: "heading-5xl md:heading-6xl text-left",
  h2: "heading-3xl lg:heading-4xl xl:heading-5xl text-left",
  h3: "heading-xl lg:heading-2xl xl:heading-3xl text-left",
  h4: "heading-lg lg:heading-xl xl:heading-2xl text-left",
  h5: "heading-lg text-left",
};

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  mono?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

function makeHeading(Tag: HeadingTag) {
  function Heading({ children, className, mono, id, style }: HeadingProps) {
    const base = mono
      ? `${HEADING_CLASSES[Tag].replace(/heading-/g, "heading-mono-")} font-mono`
      : `${HEADING_CLASSES[Tag]} font-sans`;
    return (
      <Tag id={id} style={style} className={cn(base, className)}>
        {children}
      </Tag>
    );
  }
  Heading.displayName = Tag.toUpperCase();
  return Heading;
}

export const H1 = makeHeading("h1");
export const H2 = makeHeading("h2");
export const H3 = makeHeading("h3");
export const H4 = makeHeading("h4");
export const H5 = makeHeading("h5");

const P_CLASSES = {
  xxs: "copy-xs",
  xs: "copy-sm",
  sm: "copy-base",
  md: "copy-lg",
  lg: "copy-xl",
} as const;

interface PProps {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof P_CLASSES;
}

export function P({ children, className, size = "md" }: PProps) {
  return (
    <p className={cn(P_CLASSES[size], "font-sans", className)}>{children}</p>
  );
}

const A_CLASSES = {
  primary: "text-blue-500 hover:text-blue-500 active:text-blue-400",
  secondary: "text-foreground hover:text-gray-800 active:text-muted-foreground",
  tertiary:
    "text-muted-foreground hover:text-gray-500 active:text-muted-foreground",
} as const;

interface AProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof A_CLASSES;
}

export function A({
  children,
  className,
  variant = "primary",
  href,
  ...rest
}: AProps) {
  const classes = cn(
    "cursor-pointer font-semibold transition-all duration-300 ease-out hover:underline hover:underline-offset-4 font-sans",
    A_CLASSES[variant],
    className
  );
  if (href) {
    return (
      <a {...rest} href={href} className={classes}>
        {children}
      </a>
    );
  }
  return <span className={classes}>{children}</span>;
}

interface StrongProps {
  children: React.ReactNode;
  className?: string;
}

export function Strong({ children, className }: StrongProps) {
  return (
    <strong className={cn("font-sans font-semibold", className)}>
      {children}
    </strong>
  );
}
