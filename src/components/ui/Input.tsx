import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Text input matching Sparkle's visual style (rounded-lg, border-border,
 * focus ring blue). Forwards ref; supports all standard HTML input props.
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, id, ...props }, ref) => {
    const inputId = id ?? React.useId();
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500",
            error && "border-rose-300 focus:ring-rose-500/30 focus:border-rose-500",
            className
          )}
          {...props}
        />
        {(hint || error) && (
          <p
            className={cn(
              "mt-1 text-xs",
              error ? "text-rose-500" : "text-muted-foreground"
            )}
          >
            {error ?? hint}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
