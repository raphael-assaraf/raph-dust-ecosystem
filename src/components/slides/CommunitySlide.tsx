"use client";

import {
  Users,
  Package,
  Calendar,
  Megaphone,
  GitBranch,
  Sparkles,
  Share2,
} from "lucide-react";
import { BrowserMockup } from "@/components/BrowserMockup";

const mockTemplates = [
  { name: "Lead Enrichment Agent", author: "Clay Team", cat: "Sales", downloads: "2.4K" },
  { name: "Doc Summarizer", author: "Sarah M.", cat: "Ops", downloads: "1.8K" },
  { name: "Weekly Report Builder", author: "Community", cat: "Analytics", downloads: "950" },
  { name: "Customer Onboarding Flow", author: "Dust Expert", cat: "Success", downloads: "1.2K" },
  { name: "Competitor Tracker", author: "Marcus R.", cat: "Strategy", downloads: "780" },
  { name: "Meeting Notes → Action Items", author: "Community", cat: "Productivity", downloads: "3.1K" },
];

const tracks = [
  {
    icon: Package,
    title: "Templates & UGC",
    desc: "The real engine. Any user, dev, or partner can create a template — Dust advertises it. Like Lovable, Notion, or Clay templates. This is the grassroots content machine.",
    color: "#FE9C1A",
    bg: "#FFF8E1",
    highlights: ["\"Published by\" partner credit", "One-click deploy", "Usage analytics", "Featured campaigns"],
    isPrimary: true,
  },
  {
    icon: GitBranch,
    title: "DevRel & Builders",
    desc: "Developer advocates engage builders, spotlight creations, run hackathons, and feed insights back to product.",
    color: "#8B5CF6",
    bg: "#F3F0FF",
    highlights: ["API tutorials", "Builder spotlights", "Hackathons", "Community Slack"],
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    desc: "Notion-style local gatherings. Experts host, power users connect, and community builds belonging.",
    color: "#418B5C",
    bg: "#E8F5E9",
    highlights: ["City chapters", "Expert workshops", "Quarterly summits", "Conferences"],
  },
  {
    icon: Megaphone,
    title: "Influencer & Content",
    desc: "AI/SaaS influencers posting workflows and use cases. Genuine advocacy, not just reach.",
    color: "#1C91FF",
    bg: "#E9F7FF",
    highlights: ["LinkedIn workflows", "YouTube collabs", "Podcast features", "Creator program"],
  },
];

export function CommunitySlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-6">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="dust-badge">
            <Users className="h-3.5 w-3.5 text-[#FE9C1A]" />
            dust.tt/community
          </span>
          <span className="dust-badge">
            <Package className="h-3.5 w-3.5 text-[#FE9C1A]" />
            dust.tt/templates
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-mono font-medium tracking-tight">
          <span className="kw-golden">Templates</span>, <span className="kw-red">UGC</span> & <span className="kw-blue">Community</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
          The connective tissue. Templates are the core — anyone can create, Dust can feature.
          DevRel, events, and influencers amplify it all.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Templates mockup (3 cols) */}
        <div className="lg:col-span-3">
          <BrowserMockup url="dust.tt/templates">
            <div className="p-3 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm">Dust Templates</h3>
                  <p className="text-[11px] text-muted-foreground">
                    Pre-built agents and workflows — by Dust, partners, and the community.
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFF8E1] text-[#FE9C1A] font-medium">
                  + Submit template
                </span>
              </div>
            </div>
            <div className="p-3 grid grid-cols-2 gap-2">
              {mockTemplates.map((t) => (
                <div key={t.name} className="rounded-lg border border-border p-2.5 hover:border-dust-blue/30 transition-colors">
                  <div className="flex items-start justify-between gap-1 mb-1.5">
                    <span className="text-[10px] px-1.5 py-px rounded bg-muted text-muted-foreground">{t.cat}</span>
                    <span className="text-[9px] text-muted-foreground">{t.downloads}</span>
                  </div>
                  <h4 className="text-xs font-medium leading-snug">{t.name}</h4>
                  <div className="mt-1.5 flex items-center gap-1">
                    <Share2 className="h-2.5 w-2.5 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">by {t.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </BrowserMockup>

          {/* Key insight */}
          <div className="mt-3 dust-card-flat flex items-start gap-2.5 !p-3">
            <Sparkles className="h-4 w-4 text-[#FE9C1A] shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Templates are the UGC play.</span>{" "}
              Every user, developer, or partner can publish. The best get featured — with
              &ldquo;Published by&rdquo; credit, social campaigns, and marketplace placement.
              This is how Lovable, Clay, and Notion built grassroots content machines.
            </p>
          </div>
        </div>

        {/* Community tracks (2 cols) */}
        <div className="lg:col-span-2 grid gap-2.5">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div key={track.title} className={track.isPrimary ? "dust-card !border-[#FE9C1A]/20" : "dust-card"}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md" style={{ background: track.bg }}>
                    <Icon className="h-3 w-3" style={{ color: track.color }} />
                  </div>
                  <h4 className="font-medium text-xs">{track.title}</h4>
                  {track.isPrimary && (
                    <span className="text-[9px] px-1.5 py-px rounded-full bg-[#FFF8E1] text-[#FE9C1A] font-medium">Core</span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground mb-2 leading-relaxed">{track.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {track.highlights.map((h) => (
                    <span key={h} className="text-[9px] px-1.5 py-0.5 rounded border border-border text-muted-foreground">{h}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
