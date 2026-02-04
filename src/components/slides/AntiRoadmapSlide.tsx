"use client";

import {
  ShieldOff,
  ArrowRight,
  AlertTriangle,
  Orbit,
  Target,
  Megaphone,
  Puzzle,
  Users,
} from "lucide-react";

const antiItems = [
  {
    icon: Orbit,
    title: "Chase \"add-on\" partnerships with big platforms",
    example: "e.g. heavy investment to become an AWS / Azure add-on",
    color: "#E14322",
    bg: "#FEF2F0",
    reasoning:
      "Dust needs to be a center of gravity, not a satellite. Integrations are a product & retention flywheel, not a revenue driver yet (unlike Aircall + Salesforce at scale).",
    caveat:
      "Exception: support integrations that reinforce a partner ecosystem for service firms — that compounds.",
  },
  {
    icon: Target,
    title: "Spread across too many ecosystems at once",
    example: "e.g. Shopify agencies + Salesforce integrators + enterprise consulting firms simultaneously",
    color: "#FE9C1A",
    bg: "#FFF8E1",
    reasoning:
      "We need to be strong in one ecosystem that serves our play. Today that's SaaS — sales ops tech, marketing ops, RevOps (Gong, Clay, HubSpot orbit).",
    caveat:
      "Prioritize based on: (1) what customers actually do with Dust today, (2) where thriving service firm communities exist (e.g. HubSpot ecosystem, marketing ops), (3) our target ICPs (SaaS orgs with scaled RevOps / LegalOps / ProductOps). We need to define our \"agency ICP.\"",
  },
  {
    icon: Puzzle,
    title: "Misalign with product roadmap",
    example: "e.g. chasing a partner integration Dust doesn't plan to build",
    color: "#1C91FF",
    bg: "#E9F7FF",
    reasoning:
      "We prioritize ecosystem work based on the product roadmap. No point chasing a partnership we can't technically deliver on.",
    caveat:
      "Unless our API or a service firm can enable the integration independently — then it's a community/marketplace play, not a product dependency.",
  },
  {
    icon: Megaphone,
    title: "Misalign with Dust marketing & ICP",
    example: "e.g. agencies pushing Dust into segments outside our core narrative",
    color: "#D97AB0",
    bg: "#FDF2F8",
    reasoning:
      "Partners should reinforce core marketing themes and feed into our quarterly content calendar, community events, and company narrative — not dilute it.",
    caveat:
      "A bunch of agencies pushing Dust for an off-ICP segment < those same agencies feeding into content + events. We can allocate a small experimental % for frontier bets.",
  },
  {
    icon: Users,
    title: "Scale the partner team ahead of product pull",
    example: "e.g. hiring 5 partner managers before partners can self-serve",
    color: "#418B5C",
    bg: "#E8F5E9",
    reasoning:
      "If the product isn't partner-ready (self-serve onboarding, clear deployment playbook, reliable APIs), every partner becomes a support burden. Enablement cost outpaces revenue.",
    caveat:
      "Build the enablement layer first (docs, templates, academy), prove the motion with a few partners, then hire to scale what already works.",
  },
];

export function AntiRoadmapSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-6">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="dust-badge mb-3">
          <ShieldOff className="h-3.5 w-3.5" />
          Strategic Discipline
        </span>
        <h2 className="text-2xl sm:text-3xl font-mono font-medium tracking-tight">
          <span className="kw-red">Anti</span>-Roadmap
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
          What we believe we should <strong>not</strong> do — and why.
          Knowing where not to invest is as important as the roadmap itself.
        </p>
      </div>

      {/* Anti-items */}
      <div className="max-w-4xl mx-auto w-full space-y-3">
        {antiItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="dust-card !p-0 overflow-hidden">
              <div className="flex items-stretch">
                {/* Color strip */}
                <div
                  className="w-1 shrink-0"
                  style={{ background: item.color }}
                />

                <div className="flex-1 px-4 py-3">
                  {/* Title row */}
                  <div className="flex items-start gap-2.5 mb-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-lg shrink-0 mt-0.5"
                      style={{ background: item.bg }}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm leading-snug">
                        Don&apos;t: {item.title}
                      </h3>
                      <span className="text-[11px] text-muted-foreground italic">
                        {item.example}
                      </span>
                    </div>
                  </div>

                  {/* Reasoning + caveat */}
                  <div className="grid sm:grid-cols-2 gap-2 ml-[2.375rem]">
                    <div className="flex items-start gap-1.5">
                      <ArrowRight
                        className="h-3 w-3 mt-0.5 shrink-0"
                        style={{ color: item.color }}
                      />
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        {item.reasoning}
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <AlertTriangle
                        className="h-3 w-3 mt-0.5 shrink-0 text-dust-golden"
                      />
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-medium text-foreground">Caveat:</span>{" "}
                        {item.caveat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
