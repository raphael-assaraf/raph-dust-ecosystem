"use client";

import {
  Handshake,
  Wine,
  Target,
  Crown,
  Building,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Identify & Warm Up",
    icon: Target,
    desc: "Pure BD at leadership or sales leadership level. Identify strategic partners whose customer base overlaps with Dust's ICP.",
    who: "Leadership + BD",
    color: "#1C91FF",
    bg: "#E9F7FF",
  },
  {
    step: "02",
    title: "Wine & Dine",
    icon: Wine,
    desc: "Relationship building at the executive level. Dinners, events, offsites. Build trust and mutual vision before going operational.",
    who: "Leadership",
    color: "#FE9C1A",
    bg: "#FFF8E1",
  },
  {
    step: "03",
    title: "Co-Design & Roadmap",
    icon: Building,
    desc: "Joint planning on integration depth, go-to-market, and resource commitment. Gets priority on the product roadmap.",
    who: "Product + Partnerships",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    step: "04",
    title: "Execute & Scale",
    icon: TrendingUp,
    desc: "Operational handoff to the partner team. Integration build, co-marketing launch, joint selling, and ongoing management.",
    who: "Partner Team",
    color: "#418B5C",
    bg: "#E8F5E9",
  },
];

const partnershipTypes = [
  {
    name: "SaaS Co-Sell",
    desc: "Deep integration + joint GTM with complementary SaaS tools. Think Clay, Gong — but at strategic scale with shared pipeline.",
    icon: Handshake,
    color: "#1C91FF",
    bg: "#E9F7FF",
  },
  {
    name: "SI / Consulting",
    desc: "Big 4 or boutique consultancies that embed Dust into AI transformation engagements for enterprise clients.",
    icon: Building,
    color: "#418B5C",
    bg: "#E8F5E9",
  },
  {
    name: "Platform Ecosystem",
    desc: "Becoming part of larger platform plays — Salesforce AppExchange, Microsoft partnerships, GCP Marketplace.",
    icon: Crown,
    color: "#FE9C1A",
    bg: "#FFF8E1",
  },
];

export function EnterpriseSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="dust-badge mb-3">
          <Handshake className="h-3.5 w-3.5 text-[#FE9C1A]" />
          Strategic Track
        </span>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
          <span className="gradient-text">Enterprise</span> Partnerships
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          High-touch, leadership-initiated partnerships that require relationship
          building and strategic alignment before execution.
        </p>
      </div>

      {/* Motion: step by step */}
      <div className="grid gap-3 sm:grid-cols-2 mb-6">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.step} className="dust-card flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold text-muted-foreground/40">
                  {s.step}
                </span>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: s.bg }}
                >
                  <Icon className="h-4 w-4" style={{ color: s.color }} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{s.title}</h4>
                  <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded-full border border-border">
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

      {/* Partnership types */}
      <div className="grid gap-3 sm:grid-cols-3">
        {partnershipTypes.map((pt) => {
          const Icon = pt.icon;
          return (
            <div key={pt.name} className="dust-card">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-md"
                  style={{ background: pt.bg }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: pt.color }} />
                </div>
                <h4 className="font-medium text-sm">{pt.name}</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pt.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Key insight */}
      <div className="mt-6 dust-card-flat text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">Key insight:</span>{" "}
          Enterprise partnerships are initiated top-down but succeed when the
          partner team executes bottom-up with enablement, integration support,
          and co-marketing.
        </p>
      </div>
    </div>
  );
}
