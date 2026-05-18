"use client";

import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

/*
 * Tooltip — lightweight wrapper around @radix-ui/react-tooltip with Dust styling.
 * Wrap your app once with <TooltipProvider>; then use <Tooltip> per trigger.
 */

export const TooltipProvider = RadixTooltip.Provider;

interface TooltipProps {
  trigger: React.ReactNode;
  label: React.ReactNode;
  shortcut?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delayMs?: number;
}

export function Tooltip({
  trigger,
  label,
  shortcut,
  side = "top",
  align = "center",
  delayMs = 200,
}: TooltipProps) {
  return (
    <RadixTooltip.Root delayDuration={delayMs}>
      <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          align={align}
          sideOffset={6}
          className={cn(
            "z-50 inline-flex max-w-xs items-center gap-2 rounded-lg bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-md",
            "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0",
            "data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1"
          )}
        >
          {label}
          {shortcut && (
            <span className="rounded bg-white/15 px-1 py-px font-mono text-[10px] uppercase tracking-wide text-white/80">
              {shortcut}
            </span>
          )}
          <RadixTooltip.Arrow className="fill-gray-900" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}
