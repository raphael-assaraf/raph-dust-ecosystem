"use client";

import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {
  label?: string;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(({ className, label, ...props }, ref) => {
  const id = React.useId();
  const checkbox = (
    <RadixCheckbox.Root
      ref={ref}
      id={id}
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-border bg-background transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30",
        "data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <RadixCheckbox.Indicator className="flex items-center justify-center text-current">
        <CheckIcon className="h-3.5 w-3.5" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
  if (!label) return checkbox;
  return (
    <div className="flex items-center gap-2">
      {checkbox}
      <label htmlFor={id} className="text-sm text-foreground cursor-pointer">
        {label}
      </label>
    </div>
  );
});
Checkbox.displayName = "Checkbox";
