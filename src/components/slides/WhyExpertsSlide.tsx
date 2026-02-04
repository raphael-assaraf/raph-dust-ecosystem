"use client";

import {
  DollarSign,
  Star,
  Orbit,
  ArrowRight,
  TrendingUp,
  Megaphone,
  Network,
} from "lucide-react";

const pillars = [
  {
    icon: DollarSign,
    title: "Make Money",
    subtitle: "Referral revenue",
    color: "#418B5C",
    colorLight: "#E8F5E9",
    points: [
      "Referral fees on every customer they bring in",
      "Implementation & consulting revenue on Dust deployments",
      "Recurring managed-service opportunities",
    ],
    callout: "Direct economic incentive — simple, proven, scalable.",
  },
  {
    icon: Star,
    title: "Status & FOMO",
    subtitle: "They want in",
    color: "#FE9C1A",
    colorLight: "#FFF8E1",
    points: [
      "They see our marquee customers and want access",
      "Our marketing, fundraise, and influencer campaigns create buzz",
      "Being a \"Dust Expert\" = credibility signal in the AI space",
    ],
    callout: "Trust and brand gravity — they come to us because we're where the action is.",
  },
  {
    icon: Orbit,
    title: "Ecosystem Gravity",
    subtitle: "Center of orbit",
    color: "#1C91FF",
    colorLight: "#E9F7FF",
    points: [
      "Easier to catch partners that orbit an ecosystem than chase them one by one",
      "We become the center of gravity for their client base",
      "Supporting integrations into their stack compounds our value",
    ],
    callout: "Work with all Shopify agencies on one orbit — far from the orbit of Clay and Salesforce.",
  },
];

export function WhyExpertsSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-6">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-2xl sm:text-3xl font-mono font-medium tracking-tight">
          Why <span className="kw-golden">Experts</span> Will <span className="kw-blue">Work</span> With <span className="kw-pink">Us</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
          Three reinforcing reasons service partners will invest in Dust —
          each one makes the others stronger.
        </p>
      </div>

      {/* Three pillars */}
      <div className="grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto w-full mb-5">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="dust-card !p-0 overflow-hidden">
              {/* Pillar header */}
              <div
                className="flex items-center gap-2.5 px-4 py-3 border-b border-border"
                style={{ background: p.colorLight }}
              >
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
                  style={{ background: "white" }}
                >
                  <Icon className="h-4 w-4" style={{ color: p.color }} />
                </div>
                <div>
                  <h3 className="font-medium text-sm" style={{ color: p.color }}>
                    {p.title}
                  </h3>
                  <span className="text-[10px] text-muted-foreground">{p.subtitle}</span>
                </div>
              </div>

              {/* Points */}
              <div className="px-4 py-3 space-y-2">
                {p.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ArrowRight
                      className="h-3 w-3 mt-0.5 shrink-0"
                      style={{ color: p.color }}
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Callout */}
              <div className="px-4 pb-3">
                <div
                  className="text-[11px] font-medium px-3 py-2 rounded-lg leading-snug"
                  style={{ background: p.colorLight, color: p.color }}
                >
                  {p.callout}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom insight */}
      <div className="max-w-3xl mx-auto w-full dust-card-flat !bg-muted/50">
        <div className="flex items-start gap-3">
          <Network className="h-5 w-5 text-dust-blue shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm mb-1">The Compounding Effect</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Each integration we support makes Dust more valuable to the service firms who specialize in that stack.
              Each expert who joins brings their client base into our orbit. This creates a <span className="text-foreground font-medium">gravitational pull</span> —
              it&apos;s easier to attract all the agencies in one ecosystem than to chase individual partnerships.
              We aim to become the center of gravity, not compete on the periphery of established platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
