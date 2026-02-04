"use client";

import {
  Award,
  GraduationCap,
  Search,
  Star,
  Shield,
  Trophy,
  BookOpen,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Registered",
    color: "text-zinc-400",
    border: "border-zinc-700",
    bg: "bg-zinc-900",
    badge: Shield,
    perks: ["Partner portal access", "Basic training materials", "Community Slack channel"],
  },
  {
    name: "Certified",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    badge: Star,
    perks: ["Listed in Expert directory", "Co-marketing eligibility", "Deal registration", "Dust Academy certified badge"],
  },
  {
    name: "Premier",
    color: "text-dust-primary",
    border: "border-dust-primary/30",
    bg: "bg-dust-primary/5",
    badge: Trophy,
    perks: ["Priority referrals", "Joint go-to-market", "Early product access", "Revenue share program", "Case study spotlight"],
  },
];

const components = [
  {
    icon: BookOpen,
    title: "Dust Academy",
    desc: "Certification program with hands-on labs, product deep-dives, and use case workshops. The path from registered to premier.",
  },
  {
    icon: Search,
    title: "Expert Directory",
    desc: "Public-facing directory where customers find verified Dust experts. Filterable by industry, region, and specialization.",
  },
  {
    icon: Users,
    title: "Local Meetups",
    desc: 'Notion-style community meetups. Experts host local events, share use cases, and build the local Dust community.',
  },
  {
    icon: GraduationCap,
    title: "Enablement",
    desc: "Flexible enablement resources — from pitch decks to technical guides — so partners can sell and implement Dust with confidence.",
  },
];

export function ExpertsSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3 text-emerald-400">
          <Award className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            Service Partner Track
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="gradient-text">Dust Experts</span> Program
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          A tiered partner program that builds expertise, community belonging,
          and mutual revenue — with badges, certification, and a public directory.
        </p>
      </div>

      {/* Tiers */}
      <div className="grid gap-3 md:grid-cols-3 mb-8">
        {tiers.map((tier) => {
          const Badge = tier.badge;
          return (
            <div
              key={tier.name}
              className={cn(
                "rounded-xl border p-4 transition-all hover:scale-[1.02]",
                tier.border,
                tier.bg
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge className={cn("h-5 w-5", tier.color)} />
                <h3 className={cn("font-semibold", tier.color)}>{tier.name}</h3>
              </div>
              <ul className="space-y-1.5">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="text-sm text-muted-foreground flex items-start gap-1.5"
                  >
                    <span className={cn("mt-1.5 h-1 w-1 rounded-full shrink-0", tier.color.replace("text-", "bg-"))} />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Key components */}
      <div className="grid gap-3 sm:grid-cols-2">
        {components.map((comp) => {
          const Icon = comp.icon;
          return (
            <div
              key={comp.title}
              className="rounded-lg border border-dust-border bg-dust-surface/50 p-4 flex gap-3"
            >
              <Icon className="h-5 w-5 text-dust-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">{comp.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
