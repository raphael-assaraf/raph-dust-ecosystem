"use client";

import * as React from "react";
import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/*
 * Dropdown — Sparkle-styled wrapper around @radix-ui/react-dropdown-menu.
 * Includes basic item, separator, label, sub-menu and checkbox/radio.
 */

export const Dropdown = RadixMenu.Root;
export const DropdownTrigger = RadixMenu.Trigger;
export const DropdownGroup = RadixMenu.Group;
export const DropdownPortal = RadixMenu.Portal;
export const DropdownSub = RadixMenu.Sub;
export const DropdownRadioGroup = RadixMenu.RadioGroup;

export const DropdownContent = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <DropdownPortal>
    <RadixMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-background p-1.5 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
        className
      )}
      {...props}
    />
  </DropdownPortal>
));
DropdownContent.displayName = "DropdownContent";

export const DropdownItem = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Item> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <RadixMenu.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors",
      "focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownItem.displayName = "DropdownItem";

export const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RadixMenu.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2.5 text-sm text-foreground outline-none transition-colors",
      "focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <RadixMenu.ItemIndicator>
        <CheckIcon className="h-3.5 w-3.5" />
      </RadixMenu.ItemIndicator>
    </span>
    {children}
  </RadixMenu.CheckboxItem>
));
DropdownCheckboxItem.displayName = "DropdownCheckboxItem";

export const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Label>
>(({ className, ...props }, ref) => (
  <RadixMenu.Label
    ref={ref}
    className={cn(
      "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
      className
    )}
    {...props}
  />
));
DropdownLabel.displayName = "DropdownLabel";

export const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof RadixMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.Separator>
>(({ className, ...props }, ref) => (
  <RadixMenu.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
DropdownSeparator.displayName = "DropdownSeparator";

export const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <RadixMenu.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors",
      "focus:bg-gray-100 data-[state=open]:bg-gray-100",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-3.5 w-3.5" />
  </RadixMenu.SubTrigger>
));
DropdownSubTrigger.displayName = "DropdownSubTrigger";

export const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof RadixMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof RadixMenu.SubContent>
>(({ className, ...props }, ref) => (
  <RadixMenu.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-background p-1.5 shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DropdownSubContent.displayName = "DropdownSubContent";
