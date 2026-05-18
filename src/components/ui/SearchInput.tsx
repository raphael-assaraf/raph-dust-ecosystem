import * as React from "react";
import { MagnifyingGlassIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/*
 * Search input matching Sparkle's SearchInput visual style: pill-rounded,
 * leading magnifier icon, larger touch target than the standard Input.
 *
 * Use the controlled API: pass `value` and `onChange` (a string callback).
 */

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  className?: string;
  autoFocus?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search…",
  name,
  className,
  autoFocus,
}: SearchInputProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full rounded-full border border-border bg-background py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
      />
    </div>
  );
}
