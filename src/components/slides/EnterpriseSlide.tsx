"use client";

import {
  Handshake,
  Wine,
  Target,
  ArrowRight,
  Crown,
  Building,
  Users,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Identify & Warm Up",
    icon: Target,
    desc: "Pure BD work at leadership or sales leadership level. Identify strategic partners whose customer base overlaps with Dust's ICP.",
    who: "Leadership + BD",
    color: "text-blue-400",
  },
  {
    step: "02",
    title: "Wine & Dine",
    icon: Wine,
    desc: "Relationship building at the executive level. Dinners, events, offsites. Establish trust and mutual vision before going operational.",
    who: "Leadership",
    color: "text-amber-400",
  },
  {
    step: "03",
    title: "Co-Design & Roadmap",
    icon: Building,
    desc: "Joint planning on integration depth, go-to-market, and resource commitment. Gets taken into the product roadmap with priority.",
    who: "Product + Partnerships",
    color: "text-violet-400",
  },
  {
    step: "04",
    title: "Execute & Scale",
    icon: TrendingUp,
    desc: "Operational handoff to the partner team. Integration build, co-marketing launch, joint selling, and ongoing partnership management.",
    who: "Partner Team",
    color: "text-emerald-400",
  },
];

const examples = [
  {
    name: "SaaS Co-Sell",
    desc: "Deep integration + joint GTM with complementary SaaS tools. Think Clay, Gong — but at strategic scale with shared pipeline.",
    icon: Handshake,
  },
  {
    name: "SI / Consulting",
    desc: "Big 4 or boutique consultancies that embed Dust into AI transformation engagements for enterprise clients.",
    icon: Building,
  },
  {
    name: "Platform Ecosystem",
    desc: "Becoming part of larger platform plays — Salesforce AppExchange, Microsoft partnerships, etc.",
    icon: Crown,
  },
];

export function EnterpriseSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3 text-amber-400">
          <Handshake className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            Strategic Track
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="gradient-text">Enterprise</span> Partnerships
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          High-touch, leadership-initiated partnerships that require relationship
          building and strategic alignment before execution.
        </p>
      </div>

      {/* Motion: step by step */}
      <div className="mb-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="rounded-xl border border-dust-border bg-dust-surface/50 p-4 flex gap-3 transition-all hover:border-dust-primary/20"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-muted-foreground/50">
                    {s.step}
                  </span>
                  <Icon className={cn("h-5 w-5", s.color)} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{s.title}</h4>
                    <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded-full border border-dust-border">
                      {s.who}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Partnership types */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <Users className="h-3.5 w-3.5" />
          Partnership Types
        </h4>
        <div className="grid gap-3 sm:grid-cols-3">
          {examples.map((ex) => {
            const Icon = ex.icon;
            return (
              <div
                key={ex.name}
                className="rounded-xl border border-dust-border bg-dust-surface/30 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-dust-primary" />
                  <h4 className="font-medium text-sm">{ex.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ex.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key insight */}
      <div className="mt-6 rounded-lg border border-amber-400/20 bg-amber-400/5 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-amber-400 font-medium">Key insight:</span>{" "}
          Enterprise partnerships are initiated top-down but succeed when the
          partner team can execute bottom-up with the right enablement, integration
          support, and co-marketing muscle.
        </p>
      </div>
    </div>
  );
}
