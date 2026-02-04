"use client";

import { ArrowRight, Award, Blocks, Users, ExternalLink } from "lucide-react";
import { BrowserMockup } from "@/components/BrowserMockup";

const previews = [
  {
    icon: Award,
    title: "Dust Experts",
    desc: "Certified partners with badges, directory listing, and a shared academy.",
    color: "bg-[#418B5C]/10 text-[#418B5C]",
    mockLabel: "dust.tt/experts",
  },
  {
    icon: Blocks,
    title: "Integrations",
    desc: "Native connectors, partner-built apps, and community templates — all in one place.",
    color: "bg-[#1C91FF]/10 text-[#1C91FF]",
    mockLabel: "dust.tt/integrations",
  },
  {
    icon: Users,
    title: "Community",
    desc: "DevRel, meetups, user stories, and grassroots builder engagement.",
    color: "bg-[#FE9C1A]/10 text-[#FE9C1A]",
    mockLabel: "dust.tt/community",
  },
];

export function VisionSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Top badge */}
      <div className="text-center mb-6">
        <span className="dust-badge">
          <span className="h-1.5 w-1.5 rounded-full bg-dust-blue" />
          Interactive Vision Tour
        </span>
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-mono font-medium tracking-tight leading-[1.1]">
        The{" "}
        <span className="kw-pink">Dust</span>
        <br />
        <span className="kw-blue">Partner</span> <span className="kw-green">Ecosystem</span>
      </h1>

      <p className="text-center mt-5 max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed">
        Building a{" "}
        <span className="text-foreground font-medium">lego-like ecosystem</span>{" "}
        where service partners, integrations, and community fuel each other —
        creating compounding value for Dust and its partners.
      </p>

      {/* Three preview cards in browser frames */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {previews.map((p) => {
          const Icon = p.icon;
          return (
            <BrowserMockup key={p.title} url={p.mockLabel}>
              <div className="p-5 min-h-[140px] flex flex-col">
                <div className={`inline-flex self-start items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${p.color}`}>
                  <Icon className="h-3.5 w-3.5" />
                  {p.title}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-dust-blue font-medium">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </BrowserMockup>
          );
        })}
      </div>

      {/* Bottom link */}
      <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <a
          href="https://dust.tt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          dust.tt
        </a>
        <span className="text-gray-200">|</span>
        <span className="inline-flex items-center gap-1 text-dust-blue font-medium">
          Navigate with arrows or swipe
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
