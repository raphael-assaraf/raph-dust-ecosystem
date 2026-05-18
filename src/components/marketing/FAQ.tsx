"use client";

import * as React from "react";
import { useState } from "react";
import { PlusIcon, DashIcon } from "@/components/icons";
import { H2 } from "@/components/content";
import { cn } from "@/lib/utils";

/*
 * Ported from dust-main/front/components/home/FAQ.tsx.
 * Plain expander, no Radix dep. Items closed by default.
 */

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

interface FAQItemComponentProps {
  item: FAQItem;
  defaultOpen?: boolean;
}

function FAQItemComponent({ item, defaultOpen = false }: FAQItemComponentProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground">{item.question}</span>
        <span
          className={cn(
            "ml-6 flex h-6 w-6 flex-shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          {isOpen ? <DashIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
        </span>
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ title = "FAQ", items, className }: FAQProps) {
  return (
    <div className={cn("w-full", className)}>
      <H2 className="mb-12 text-left text-foreground">{title}</H2>
      <div className="w-full">
        {items.map((item, index) => (
          <FAQItemComponent key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
