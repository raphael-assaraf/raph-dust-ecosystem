"use client";

import {
  Map,
  CheckCircle2,
  Circle,
  ArrowRight,
  Rocket,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  {
    name: "Phase 1 — Foundation",
    timeframe: "Now",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    icon: CheckCircle2,
    items: [
      { text: "Define Experts program structure (tiers, badges, benefits)", done: false },
      { text: "Design partner directory & academy MVP", done: false },
      { text: "Hire Partner Manager / BD", done: false },
      { text: "Map existing integrations (Clay, Gong) as case studies", done: true },
      { text: "Architecture the ecosystem website tracks", done: false },
      { text: "French market: Next40 partner pipeline", done: true },
    ],
  },
  {
    name: "Phase 2 — Launch",
    timeframe: "Next",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    icon: Clock,
    items: [
      { text: "Launch Experts program publicly with first cohort", done: false },
      { text: "Hire Solutions Engineer (SE + DevRel hybrid)", done: false },
      { text: "Ship integration marketplace v1", done: false },
      { text: "Launch Dust Academy with certification track", done: false },
      { text: "First Notion-style community meetups", done: false },
      { text: "Co-marketing motions with 2-3 SaaS partners", done: false },
    ],
  },
  {
    name: "Phase 3 — Scale",
    timeframe: "Later",
    color: "text-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    icon: Rocket,
    items: [
      { text: "Scale Expert directory to 50+ certified partners", done: false },
      { text: "Dedicated partner marketing hire", done: false },
      { text: "Enterprise partnership program launch", done: false },
      { text: "Template marketplace with community contributions", done: false },
      { text: "Regional meetup chapters (US, France, EMEA)", done: false },
      { text: "Revenue share & deal registration at scale", done: false },
    ],
  },
];

export function RoadmapSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3 text-muted-foreground">
          <Map className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            What Comes Next
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="gradient-text">Roadmap</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Sequencing matters. Build the foundation, launch with early wins,
          then scale with the flywheel spinning.
        </p>
      </div>

      {/* Phases */}
      <div className="grid gap-4">
        {phases.map((phase) => {
          const PhaseIcon = phase.icon;
          return (
            <div
              key={phase.name}
              className={cn(
                "rounded-xl border p-5 transition-all",
                phase.border,
                phase.bg
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <PhaseIcon className={cn("h-5 w-5", phase.color)} />
                  <h3 className="font-semibold">{phase.name}</h3>
                </div>
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-0.5 rounded-full border",
                    phase.border,
                    phase.color
                  )}
                >
                  {phase.timeframe}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2">
                {phase.items.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-2 text-sm"
                  >
                    {item.done ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                    )}
                    <span
                      className={cn(
                        item.done
                          ? "text-muted-foreground line-through"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-dust-primary/20 bg-dust-primary/5 px-4 py-2 text-sm text-dust-primary">
          <Rocket className="h-4 w-4" />
          <span>This is a living document — navigate back to dive deeper into any section</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
