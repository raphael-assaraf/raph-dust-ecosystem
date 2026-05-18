import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Hoverable — Sparkle's small interactive wrapper: pulls in slightly on hover
 * with a soft lift. Use to make cards/items feel clickable.
 */

interface HoverableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Hoverable({ children, className, ...props }: HoverableProps) {
  return (
    <div
      className={cn(
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
