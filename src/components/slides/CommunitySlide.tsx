"use client";

import {
  Users,
  PenTool,
  Calendar,
  Megaphone,
  GitBranch,
  Heart,
  MessageCircle,
  Mic,
  Quote,
} from "lucide-react";
import { BrowserMockup } from "@/components/BrowserMockup";

const tracks = [
  {
    icon: GitBranch,
    title: "DevRel",
    desc: "Developer advocates engage builders, highlight creations, and feed insights to product.",
    color: "#8B5CF6",
    bg: "#F3F0FF",
    highlights: ["API tutorials & guides", "Builder spotlights", "Hackathons", "Community Slack"],
  },
  {
    icon: PenTool,
    title: "User Stories",
    desc: "Real users sharing what they built. Authenticity drives trust and surfaces innovation.",
    color: "#1C91FF",
    bg: "#E9F7FF",
    highlights: ["Use case showcases", "Video testimonials", "Blog features", "\"Built with Dust\" badge"],
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    desc: "Notion-style local gatherings. Intimate, high-quality events where power users and experts connect.",
    color: "#418B5C",
    bg: "#E8F5E9",
    highlights: ["City meetup chapters", "Expert workshops", "Quarterly summits", "Conference sponsorships"],
  },
  {
    icon: Megaphone,
    title: "Influencer & Content",
    desc: "Strategic partnerships with AI/SaaS influencers. Building genuine advocates, not just reach.",
    color: "#FE9C1A",
    bg: "#FFF8E1",
    highlights: ["YouTube & podcast collabs", "Thought leadership", "LinkedIn amplification", "AI community engagement"],
  },
];

const userStories = [
  {
    name: "Sarah, Head of Ops at Owkin",
    quote: "We built our entire documentation pipeline with Dust agents. What took our team 2 days now takes 20 minutes.",
    tag: "Healthcare AI",
  },
  {
    name: "Marcus, GTM Lead at a Clay customer",
    quote: "The Clay + Dust integration changed how we enrich and action our pipeline data. It's the missing piece.",
    tag: "Sales Automation",
  },
];

export function CommunitySlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="dust-badge mb-3">
          <Users className="h-3.5 w-3.5 text-[#FE9C1A]" />
          Community Track
        </span>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
          <span className="gradient-text">Community</span> & DevRel
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          The connective tissue — surfacing innovation, building belonging,
          and creating the demand signal that drives everything.
        </p>
      </div>

      {/* Community powers the ecosystem */}
      <div className="dust-card-flat mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="h-4 w-4 text-[#E14322]" />
          <span className="text-sm font-medium">How Community Powers the Ecosystem</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <Mic className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#8B5CF6]" />
            <span>
              DevRel <span className="text-foreground font-medium">surfaces Experts</span> in marketing — spotlights, co-authored content, speaking slots.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MessageCircle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#1C91FF]" />
            <span>
              User stories <span className="text-foreground font-medium">signal the roadmap</span> — showing what can be built reveals what to integrate natively.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#418B5C]" />
            <span>
              Events create <span className="text-foreground font-medium">belonging</span> — meetups convert power users into certified partners.
            </span>
          </div>
        </div>
      </div>

      {/* Two columns: tracks + user stories mockup */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Community tracks */}
        <div className="lg:col-span-3 grid gap-3 sm:grid-cols-2">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div key={track.title} className="dust-card">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-md"
                    style={{ background: track.bg }}
                  >
                    <Icon className="h-3 w-3" style={{ color: track.color }} />
                  </div>
                  <h4 className="font-medium text-sm">{track.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {track.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {track.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* User stories mockup */}
        <div className="lg:col-span-2">
          <BrowserMockup url="dust.tt/community/stories">
            <div className="p-4 border-b border-border">
              <h3 className="font-medium text-sm">User Stories</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Real stories from builders using Dust.
              </p>
            </div>
            <div className="divide-y divide-border">
              {userStories.map((story) => (
                <div key={story.name} className="p-4">
                  <div className="flex items-start gap-2">
                    <Quote className="h-3.5 w-3.5 text-dust-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-foreground leading-relaxed italic">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {story.name}
                        </span>
                        <span className="text-[9px] px-1.5 py-px rounded-full bg-muted text-muted-foreground">
                          {story.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BrowserMockup>
        </div>
      </div>
    </div>
  );
}
