"use client";

import { Award, Store, Users, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Award,
    title: "Experts",
    subtitle: "Service Partners",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400/5",
    glowColor: "bg-emerald-400/10",
    items: [
      "Partner program with tiers & badges",
      "Expert directory for customer discovery",
      "Dust Academy — certification & training",
      "Revenue share & deal registration",
      "Co-marketing & case study spotlights",
    ],
  },
  {
    icon: Store,
    title: "Marketplace",
    subtitle: "Integrations & Templates",
    color: "text-dust-primary",
    borderColor: "border-dust-primary/20",
    bgColor: "bg-dust-primary/5",
    glowColor: "bg-dust-primary/10",
    items: [
      "Native integrations (Clay, Gong, etc.)",
      "Product templates & pre-built agents",
      "API-driven builder ecosystem",
      "Integration marketplace listing",
      "Co-marketing with SaaS partners",
    ],
  },
  {
    icon: Users,
    title: "Community",
    subtitle: "DevRel & User Stories",
    color: "text-violet-400",
    borderColor: "border-violet-400/20",
    bgColor: "bg-violet-400/5",
    glowColor: "bg-violet-400/10",
    items: [
      "DevRel driving builder engagement",
      "User use case showcases & stories",
      'Local meetups (Notion-style events)',
      "Influencer partnerships & content",
      "Grassroots feedback into roadmap",
    ],
  },
];

export function PillarsSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Three <span className="gradient-text">Ecosystem Pillars</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Everything lives under the Dust Partner Ecosystem — with three
          distinct tracks that reinforce each other.
        </p>
      </div>

      {/* Pillar cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={cn(
                "group relative rounded-xl border p-5 transition-all hover:scale-[1.02]",
                pillar.borderColor,
                pillar.bgColor
              )}
            >
              {/* Glow */}
              <div
                className={cn(
                  "absolute -inset-px rounded-xl opacity-0 blur-xl transition-opacity group-hover:opacity-100",
                  pillar.glowColor
                )}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg border",
                      pillar.borderColor,
                      pillar.bgColor
                    )}
                  >
                    <Icon className={cn("h-5 w-5", pillar.color)} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowUpRight
                        className={cn("h-3.5 w-3.5 mt-0.5 shrink-0", pillar.color)}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cross-pollination note */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          <span className="text-foreground font-medium">Cross-pollination:</span>{" "}
          DevRel feeds Experts by surfacing them in marketing. Integrations
          inspire new use cases. Community signals what to build next.
        </p>
      </div>
    </div>
  );
}
