"use client";

import {
  Users,
  Mic,
  PenTool,
  Calendar,
  Megaphone,
  MessageCircle,
  GitBranch,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
  {
    icon: GitBranch,
    title: "DevRel",
    desc: "Developer advocates who engage builders, highlight what the community creates, and feed insights back to product.",
    color: "text-violet-400",
    border: "border-violet-400/20",
    bg: "bg-violet-400/5",
    highlights: [
      "API tutorials & guides",
      "Builder spotlights",
      "Hackathons & challenges",
      "Community Discord / Slack",
    ],
  },
  {
    icon: PenTool,
    title: "User Stories",
    desc: "Grassroots marketing — real users sharing what they built with Dust. The authenticity drives trust and surfaces innovation.",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    highlights: [
      "Use case showcases",
      "Video testimonials",
      "Blog features",
      '"Built with Dust" badge',
    ],
  },
  {
    icon: Calendar,
    title: "Events & Meetups",
    desc: 'Notion-style local meetups. Intimate, high-quality gatherings where power users and experts connect.',
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    highlights: [
      "City-based meetup chapters",
      "Expert-led workshops",
      "Quarterly partner summits",
      "Conference sponsorships",
    ],
  },
  {
    icon: Megaphone,
    title: "Influencer & Content",
    desc: "Strategic partnerships with AI/SaaS influencers. Not just reach — building genuine advocates who shape the narrative.",
    color: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/5",
    highlights: [
      "YouTube & podcast collabs",
      "Thought leadership pieces",
      "AI community engagement",
      "Twitter / LinkedIn amplification",
    ],
  },
];

export function CommunitySlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3 text-violet-400">
          <Users className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            Community Track
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="gradient-text-purple">Community</span> & DevRel
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          The connective tissue of the ecosystem — surfacing innovation, building
          belonging, and creating the demand signal that drives everything.
        </p>
      </div>

      {/* How community feeds the ecosystem */}
      <div className="mb-8 rounded-xl border border-dust-border bg-dust-surface/50 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="h-4 w-4 text-rose-400" />
          <span className="text-sm font-medium">
            How Community Powers the Ecosystem
          </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <Mic className="h-3.5 w-3.5 text-violet-400 mt-0.5 shrink-0" />
            <span>
              DevRel <span className="text-foreground">surfaces Experts</span> in
              marketing — spotlight features, co-authored content, event speaking
              slots.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MessageCircle className="h-3.5 w-3.5 text-blue-400 mt-0.5 shrink-0" />
            <span>
              User stories <span className="text-foreground">signal the roadmap</span> —
              showing what can be built reveals what should be integrated natively.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
            <span>
              Events create <span className="text-foreground">belonging & recruitment</span> —
              meetups convert power users into certified partners.
            </span>
          </div>
        </div>
      </div>

      {/* Community tracks */}
      <div className="grid gap-3 sm:grid-cols-2">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <div
              key={track.title}
              className={cn(
                "rounded-xl border p-4 transition-all hover:scale-[1.01]",
                track.border,
                track.bg
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={cn("h-4 w-4", track.color)} />
                <h4 className="font-medium">{track.title}</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {track.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {track.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-dust-border bg-background text-muted-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
