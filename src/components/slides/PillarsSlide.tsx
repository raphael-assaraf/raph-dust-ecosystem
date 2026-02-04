"use client";

import { Award, Blocks, Users, ArrowUpRight } from "lucide-react";
import { BrowserMockup } from "@/components/BrowserMockup";

const pillars = [
  {
    icon: Award,
    title: "Experts",
    subtitle: "Service Partners",
    color: "#418B5C",
    colorLight: "#E8F5E9",
    url: "dust.tt/experts",
    items: [
      "Tiered program: Registered → Certified → Premier",
      "Public expert directory with badges",
      "Dust Academy — certification & training",
      "Revenue share & deal registration",
      "Co-marketing & case study spotlights",
    ],
    preview: {
      headline: "Find a Dust Expert",
      sub: "Browse certified partners ready to help you get the most out of Dust.",
    },
  },
  {
    icon: Blocks,
    title: "Apps",
    subtitle: "Integrations & Marketplace",
    color: "#1C91FF",
    colorLight: "#E9F7FF",
    url: "dust.tt/apps",
    items: [
      "Native integrations (Clay, Gong, Slack…)",
      "Product templates & pre-built agents",
      "API-driven builder ecosystem",
      "Community-contributed workflows",
      "Co-marketing with SaaS partners",
    ],
    preview: {
      headline: "Dust App Marketplace",
      sub: "Explore integrations, templates, and agents built by Dust and the community.",
    },
  },
  {
    icon: Users,
    title: "Community",
    subtitle: "DevRel & User Stories",
    color: "#FE9C1A",
    colorLight: "#FFF8E1",
    url: "dust.tt/community",
    items: [
      "DevRel driving builder engagement",
      "User use case showcases & stories",
      "Notion-style local meetups",
      "Influencer partnerships & content",
      "Grassroots feedback into roadmap",
    ],
    preview: {
      headline: "Dust Community",
      sub: "Stories, events, and conversations from the builders shaping AI work.",
    },
  },
];

export function PillarsSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
          Three <span className="gradient-text">Ecosystem Pillars</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Everything lives under the Dust Partner Ecosystem — three
          distinct tracks that reinforce each other.
        </p>
      </div>

      {/* Pillar cards with mockup previews */}
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.title} className="flex flex-col gap-4">
              {/* Browser mockup preview */}
              <BrowserMockup url={pillar.url}>
                <div className="p-4 border-b border-border">
                  <div
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium mb-2"
                    style={{ background: pillar.colorLight, color: pillar.color }}
                  >
                    <Icon className="h-3 w-3" />
                    {pillar.title}
                  </div>
                  <h4 className="font-medium text-sm">{pillar.preview.headline}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {pillar.preview.sub}
                  </p>
                </div>
                {/* Mini placeholder grid */}
                <div className="p-4 grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="h-8 rounded-md"
                      style={{ background: pillar.colorLight }}
                    />
                  ))}
                </div>
              </BrowserMockup>

              {/* Feature list */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: pillar.colorLight }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{pillar.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-none">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-1.5 text-xs text-muted-foreground"
                    >
                      <ArrowUpRight
                        className="h-3 w-3 mt-0.5 shrink-0"
                        style={{ color: pillar.color }}
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

      {/* Cross-pollination */}
      <div className="mt-6 dust-card-flat text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">Cross-pollination:</span>{" "}
          DevRel surfaces Experts in marketing. Integrations inspire new use cases. Community signals what to build next.
        </p>
      </div>
    </div>
  );
}
