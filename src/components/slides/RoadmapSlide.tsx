"use client";

import {
  Map,
  CheckCircle2,
  Circle,
  Rocket,
  Clock,
  Repeat,
} from "lucide-react";

const phases = [
  {
    name: "Phase 1 — Foundation",
    timeframe: "Now",
    color: "#418B5C",
    bg: "#E8F5E9",
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
    color: "#1C91FF",
    bg: "#E9F7FF",
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
    color: "#8B5CF6",
    bg: "#F3F0FF",
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
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="dust-badge mb-3">
          <Map className="h-3.5 w-3.5" />
          What Comes Next
        </span>
        <h2 className="text-3xl sm:text-4xl font-mono font-medium tracking-tight">
          <span className="kw-blue">Road</span><span className="kw-golden">map</span>
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
              className="dust-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: phase.bg }}
                  >
                    <PhaseIcon className="h-3.5 w-3.5" style={{ color: phase.color }} />
                  </div>
                  <h3 className="font-medium">{phase.name}</h3>
                </div>
                <span
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: phase.bg, color: phase.color }}
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
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: phase.color }} />
                    ) : (
                      <Circle className="h-4 w-4 text-gray-200 shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        item.done
                          ? "text-muted-foreground line-through text-xs"
                          : "text-muted-foreground text-xs"
                      }
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
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-dust-blue font-medium px-3 py-1.5 rounded-full border border-dust-blue/20 bg-[#E9F7FF]">
          <Repeat className="h-3 w-3" />
          <span>This is a living document — navigate back to dive deeper</span>
        </div>
      </div>
    </div>
  );
}
