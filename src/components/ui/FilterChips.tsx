"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/*
 * FilterChips — interactive multi-select pill list. Selected = filled blue,
 * unselected = outlined. Use for filter rows on marketplace/catalog pages.
 */

interface FilterChipsProps {
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  className?: string;
}

export function FilterChips({ options, selected, onChange, className }: FilterChipsProps) {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              isSelected
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-border bg-background text-muted-foreground hover:border-blue-200 hover:text-foreground"
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
