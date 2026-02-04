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
import { cn } from "@/lib/utils";

const roles = [
  {
    icon: Target,
    title: "Partner Manager / BD",
    scope: "Hunt & Manage",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    responsibilities: [
      "Go hunt & recruit service partners (channel BD)",
      "Own the Expert program — tiers, badges, lifecycle",
      "Manage partner directory & publish program materials",
      "Coordinate with Marketing on partner co-marketing",
      "Own the Dust Academy content & certification process",
      "Partner events & meetup program",
    ],
    note: "Mirrors the Dust PM role but focused on partner ecosystem.",
  },
  {
    icon: Wrench,
    title: "Solutions Engineer",
    scope: "Enable & Build",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    responsibilities: [
      "Technical enablement for partners (onboarding, training)",
      "Mini DevRel — builder engagement, API support",
      "Create integration demos & proof-of-concepts",
      "Technical content: guides, tutorials, API docs",
      "Support partner implementations & escalations",
      "Feed product roadmap with partner technical needs",
    ],
    note: "Flexible role — part SE, part DevRel, part technical PM.",
  },
  {
    icon: Megaphone,
    title: "Partner Marketing",
    scope: "Amplify & Co-market",
    color: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/5",
    responsibilities: [
      "Co-marketing campaigns with SaaS integration partners",
      "Partner case studies & success stories",
      "Event marketing & conference strategy",
      "Influencer & content partnerships",
      "Integrated marketing across US & France",
      "Community marketing & user story programs",
    ],
    note: "Leverages existing US marketing strength. Long-term: dedicated partner marketing team.",
  },
];

const adjacentRoles = [
  {
    icon: UserCircle,
    title: "Your Role (Raphael)",
    desc: "Strategic advisory across the ecosystem — team design, program architecture, go-to-market sequencing, and connecting the dots between all three pillars.",
    color: "text-dust-primary",
  },
  {
    icon: Lightbulb,
    title: "Leadership / Sales",
    desc: "Enterprise partnership initiation at leadership level. Wine & dine, strategic BD, then hand off to partner team for execution.",
    color: "text-violet-400",
  },
];

export function TeamSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3 text-muted-foreground">
          <Building2 className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            Team Organization
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="gradient-text">Team</span> & Roles
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Reproducing the Dust team structure, but centered on the partner
          ecosystem. Flexible roles that overlap — because early-stage requires it.
        </p>
      </div>

      {/* Core roles */}
      <div className="grid gap-3 mb-6">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <div
              key={role.title}
              className={cn(
                "rounded-xl border p-4 transition-all hover:scale-[1.005]",
                role.border,
                role.bg
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon className={cn("h-5 w-5", role.color)} />
                  <h3 className="font-semibold">{role.title}</h3>
                </div>
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-0.5 rounded-full border",
                    role.border,
                    role.color
                  )}
                >
                  {role.scope}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-3">
                {role.responsibilities.map((r) => (
                  <div
                    key={r}
                    className="flex items-start gap-1.5 text-sm text-muted-foreground"
                  >
                    <ArrowRight
                      className={cn("h-3 w-3 mt-1 shrink-0", role.color)}
                    />
                    {r}
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground/70 italic">
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
            <div
              key={role.title}
              className="rounded-lg border border-dust-border bg-dust-surface/50 p-4 flex gap-3"
            >
              <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", role.color)} />
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
