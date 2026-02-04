"use client";

import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";

export function VisionSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col items-center justify-center text-center">
      {/* Dust glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[400px] w-[400px] rounded-full bg-dust-glow blur-[100px]" />
      </div>

      {/* Badge */}
      <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-dust-border bg-dust-surface/80 px-4 py-1.5 text-sm text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-dust-primary" />
        <span>Interactive Vision Tour</span>
      </div>

      {/* Title */}
      <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        The{" "}
        <span className="gradient-text">Dust</span>
        <br />
        Partner Ecosystem
      </h1>

      {/* Subtitle */}
      <p className="relative mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
        Building a{" "}
        <span className="text-foreground font-medium">lego-like ecosystem</span>{" "}
        where service partners, integrations, and community fuel each other —
        creating compounding value for Dust and its partners.
      </p>

      {/* Key metrics preview */}
      <div className="relative mt-12 grid grid-cols-3 gap-6 sm:gap-10">
        {[
          { label: "Experts", desc: "Service Partners" },
          { label: "Marketplace", desc: "Integrations" },
          { label: "Community", desc: "DevRel & Stories" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold gradient-text">
              {item.label}
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative mt-12 flex items-center gap-4">
        <a
          href="https://dust.tt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          dust.tt
        </a>
        <span className="text-dust-border">|</span>
        <span className="inline-flex items-center gap-1.5 text-sm text-dust-primary">
          Swipe or navigate below
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
