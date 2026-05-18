"use client";

import * as RadixCollapsible from "@radix-ui/react-collapsible";

/*
 * Collapsible — re-export of Radix's primitive with no styling overrides.
 * Sparkle uses this for in-content expanders (e.g. "Show more"). Style
 * with className on each subcomponent at the call site.
 */

export const Collapsible = RadixCollapsible.Root;
export const CollapsibleTrigger = RadixCollapsible.Trigger;
export const CollapsibleContent = RadixCollapsible.Content;
