"use client";

import {
  Repeat,
  MessageSquare,
  FileText,
  Package,
  Calendar,
  Blocks,
  GraduationCap,
  ArrowDown,
  Sparkles,
} from "lucide-react";

const loopSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Customer Conversation",
    desc: "Talk to Clay about how their power users build prospecting workflows with Dust agents. Surface the use case.",
    who: "Partner Manager",
    color: "#1C91FF",
    bg: "#E9F7FF",
  },
  {
    step: 2,
    icon: FileText,
    title: "Story & Case Study",
    desc: "Publish a co-branded case study: \"How Clay + Dust agents automate lead enrichment & outreach.\" Social push from both sides.",
    who: "Partner Marketing",
    color: "#418B5C",
    bg: "#E8F5E9",
  },
  {
    step: 3,
    icon: Package,
    title: "Template on Marketplace",
    desc: "\"Clay Lead Enrichment Agent\" template published on dust.tt/apps — with Clay branding, a customer quote, and one-click deploy.",
    who: "Solutions Engineer",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    step: 4,
    icon: Calendar,
    title: "Community Event",
    desc: "Host a meetup with a Clay-certified agency showing doc ingestion + enrichment workflows. Agency influencers post on LinkedIn.",
    who: "Community + Experts",
    color: "#FE9C1A",
    bg: "#FFF8E1",
  },
  {
    step: 5,
    icon: Blocks,
    title: "Native Integration",
    desc: "Based on demand signal, ship the Clay native connector on the App Marketplace. Co-announce with a joint webinar.",
    who: "Product + Partnerships",
    color: "#1C91FF",
    bg: "#E9F7FF",
  },
  {
    step: 6,
    icon: GraduationCap,
    title: "Academy & Partner Enablement",
    desc: "Push the use case to all Experts via Academy. Partners source new clients wanting this workflow. New stories feed Step 1.",
    who: "Academy + Experts",
    color: "#418B5C",
    bg: "#E8F5E9",
  },
];

export function ExecutionLoopSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="dust-badge mb-3">
          <Repeat className="h-3.5 w-3.5 text-[#1C91FF]" />
          Execution Loop
        </span>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
          The Flywheel <span className="gradient-text">In Action</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          A concrete example of how one partnership activates
          the entire ecosystem — from conversation to scaled enablement.
        </p>
      </div>

      {/* Example header */}
      <div className="dust-card-flat mb-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Sparkles className="h-4 w-4 text-dust-blue" />
          <span className="font-medium">Example: Clay + Dust Partnership Loop</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Each step feeds the next. The loop compounds with every partner.
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-2">
        {loopSteps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.step}>
              <div className="dust-card flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
                    style={{ background: s.bg }}
                  >
                    <Icon className="h-4 w-4" style={{ color: s.color }} />
                  </div>
                  <span className="text-[9px] font-bold text-muted-foreground/50 mt-1">
                    {String(s.step).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-medium text-sm">{s.title}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground shrink-0">
                      {s.who}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              {i < loopSteps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="h-3.5 w-3.5 text-gray-200" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Loop back */}
      <div className="mt-3 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-dust-blue font-medium px-3 py-1.5 rounded-full border border-dust-blue/20 bg-[#E9F7FF]">
          <Repeat className="h-3 w-3" />
          New stories from partners feed Step 1 — the loop compounds
        </div>
      </div>
    </div>
  );
}
