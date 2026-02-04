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
  Check,
} from "lucide-react";
import { BrowserMockup } from "@/components/BrowserMockup";

const tiers = [
  {
    name: "Registered",
    icon: Shield,
    color: "#6B7280",
    bg: "#F7F7F7",
    perks: ["Partner portal access", "Basic training materials", "Community Slack channel"],
  },
  {
    name: "Certified",
    icon: Star,
    color: "#1C91FF",
    bg: "#E9F7FF",
    perks: ["Listed in Expert directory", "Co-marketing eligibility", "Deal registration", "Dust Academy badge"],
  },
  {
    name: "Premier",
    icon: Trophy,
    color: "#418B5C",
    bg: "#E8F5E9",
    perks: ["Priority referrals", "Joint go-to-market", "Early product access", "Revenue share", "Case study spotlight"],
  },
];

const mockPartners = [
  { name: "Kyma Consulting", specialty: "AI Strategy", tier: "Premier", location: "Paris" },
  { name: "Acme Consulting", specialty: "Enterprise Ops", tier: "Certified", location: "New York" },
  { name: "DataFlow Studio", specialty: "Data Engineering", tier: "Certified", location: "London" },
  { name: "NextWave AI", specialty: "Sales Automation", tier: "Premier", location: "San Francisco" },
];

export function ExpertsSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="dust-badge">
            <Award className="h-3.5 w-3.5 text-[#418B5C]" />
            dust.tt/experts
          </span>
          <span className="dust-badge">
            <BookOpen className="h-3.5 w-3.5 text-[#1C91FF]" />
            dust.tt/academy
          </span>
          <span className="dust-badge">
            <Award className="h-3.5 w-3.5 text-[#FE9C1A]" />
            dust.tt/partner
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-mono font-medium tracking-tight">
          <span className="kw-green">Dust Experts</span> — <span className="kw-blue">Program</span> & <span className="kw-golden">Directory</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
          Three PMM projects: the <span className="text-foreground font-medium">Expert directory</span> (find a partner),
          the <span className="text-foreground font-medium">Partner program</span> (apply & earn badges), and
          the <span className="text-foreground font-medium">Academy</span> (certification & training).
        </p>
      </div>

      {/* Two-column layout: mockup + tiers */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Expert Directory Mockup (3 cols) */}
        <div className="lg:col-span-3">
          <BrowserMockup url="dust.tt/experts">
            {/* Directory header */}
            <div className="p-4 border-b border-border">
              <h3 className="font-medium text-sm">Find a Dust Expert</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Browse certified partners by specialty, region, and tier.
              </p>
              <div className="mt-3 flex gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border text-xs text-muted-foreground bg-muted">
                  <Search className="h-3 w-3" />
                  Search partners...
                </div>
                <div className="px-2 py-1 rounded-md border border-border text-xs text-muted-foreground">All Tiers</div>
                <div className="px-2 py-1 rounded-md border border-border text-xs text-muted-foreground">Region</div>
              </div>
            </div>
            {/* Partner list */}
            <div className="divide-y divide-border">
              {mockPartners.map((p) => (
                <div key={p.name} className="px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {p.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-[11px] text-muted-foreground">{p.specialty} · {p.location}</div>
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: p.tier === "Premier" ? "#E8F5E9" : "#E9F7FF",
                      color: p.tier === "Premier" ? "#418B5C" : "#1C91FF",
                    }}
                  >
                    {p.tier}
                  </span>
                </div>
              ))}
            </div>
          </BrowserMockup>
        </div>

        {/* Tiers (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.name} className="dust-card">
                <div className="flex items-center gap-2 mb-2.5">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: tier.bg }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: tier.color }} />
                  </div>
                  <h3 className="font-medium text-sm" style={{ color: tier.color }}>
                    {tier.name}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 mt-0.5 shrink-0" style={{ color: tier.color }} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom cards: Academy + Meetups + Enablement */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { icon: BookOpen, title: "Dust Academy", desc: "Certification with hands-on labs, product deep-dives, and use case workshops.", color: "#1C91FF" },
          { icon: Users, title: "Local Meetups", desc: "Notion-style community gatherings. Experts host, share use cases, build community.", color: "#FE9C1A" },
          { icon: GraduationCap, title: "Enablement", desc: "Pitch decks, technical guides, sales enablement — everything partners need.", color: "#418B5C" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="dust-card-flat flex gap-3">
              <Icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: item.color }} />
              <div>
                <h4 className="font-medium text-xs">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
