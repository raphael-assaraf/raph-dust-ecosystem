"use client";

import {
  Building2,
  UserCircle,
  Wrench,
  Target,
  Lightbulb,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const roles = [
  {
    icon: Target,
    title: "Partner Manager / BD",
    scope: "Hunt & Manage",
    color: "#1C91FF",
    bg: "#E9F7FF",
    responsibilities: [
      "Recruit service partners (channel BD)",
      "Own Expert program — tiers, badges, lifecycle",
      "Manage partner directory & publish program",
      "Coordinate partner co-marketing with Marketing",
      "Own Dust Academy content & certifications",
      "Partner events & meetup program",
    ],
    note: "Mirrors the Dust PM role, focused on partner ecosystem.",
  },
  {
    icon: Wrench,
    title: "Solutions Engineer",
    scope: "Enable & Build",
    color: "#418B5C",
    bg: "#E8F5E9",
    responsibilities: [
      "Technical enablement (onboarding, training)",
      "Mini DevRel — builder engagement, API support",
      "Integration demos & proof-of-concepts",
      "Technical content: guides, tutorials, docs",
      "Support partner implementations",
      "Feed product roadmap with partner needs",
    ],
    note: "Flexible: part SE, part DevRel, part technical PM.",
  },
  {
    icon: Megaphone,
    title: "Partner Marketing",
    scope: "Amplify & Co-market",
    color: "#FE9C1A",
    bg: "#FFF8E1",
    responsibilities: [
      "Co-marketing with SaaS integration partners",
      "Partner case studies & success stories",
      "Event marketing & conference strategy",
      "Influencer & content partnerships",
      "Integrated marketing across US & France",
      "Community marketing & user story programs",
    ],
    note: "Leverages US marketing strength. Long-term: dedicated team.",
  },
];

const adjacentRoles = [
  {
    icon: UserCircle,
    title: "Your Role (Raphael)",
    desc: "Strategic advisory — team design, program architecture, GTM sequencing, connecting the dots between all three pillars.",
    color: "#1C91FF",
    bg: "#E9F7FF",
  },
  {
    icon: Lightbulb,
    title: "Leadership / Sales BD",
    desc: "Enterprise partnership initiation at leadership level. Wine & dine, strategic BD, then hand off to partner team.",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
];

export function TeamSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="dust-badge mb-3">
          <Building2 className="h-3.5 w-3.5" />
          Team Organization
        </span>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
          <span className="gradient-text">Team</span> & Roles
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Reproducing the Dust team structure, centered on the partner ecosystem.
          Flexible roles that overlap — because early-stage requires it.
        </p>
      </div>

      {/* Core roles */}
      <div className="grid gap-4 mb-6">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <div key={role.title} className="dust-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: role.bg }}
                  >
                    <Icon className="h-4 w-4" style={{ color: role.color }} />
                  </div>
                  <h3 className="font-medium">{role.title}</h3>
                </div>
                <span
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: role.bg, color: role.color }}
                >
                  {role.scope}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-3">
                {role.responsibilities.map((r) => (
                  <div
                    key={r}
                    className="flex items-start gap-1.5 text-xs text-muted-foreground"
                  >
                    <ArrowRight className="h-3 w-3 mt-0.5 shrink-0" style={{ color: role.color }} />
                    {r}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-muted-foreground/70 italic">
                {role.note}
              </p>
            </div>
          );
        })}
      </div>

      {/* Adjacent roles */}
      <div className="grid sm:grid-cols-2 gap-3">
        {adjacentRoles.map((role) => {
          const Icon = role.icon;
          return (
            <div key={role.title} className="dust-card-flat flex gap-3">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
                style={{ background: role.bg }}
              >
                <Icon className="h-4 w-4" style={{ color: role.color }} />
              </div>
              <div>
                <h4 className="font-medium text-sm">{role.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
