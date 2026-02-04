"use client";

import { Users, Puzzle, Briefcase, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: Users,
    title: "Grassroots Users",
    desc: "Users build with Dust, share use cases, create templates, and signal what to build next.",
    output: "Demand signal",
    color: "#1C91FF",
    colorLight: "#E9F7FF",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    desc: "Native integrations drive retention, co-marketing with SaaS partners, and brand credibility.",
    output: "Retention + brand",
    color: "#418B5C",
    colorLight: "#E8F5E9",
  },
  {
    icon: Briefcase,
    title: "Service Partners",
    desc: "Experts create use cases with clients, generating revenue and feeding pipeline back to step 1.",
    output: "Revenue + pipeline",
    color: "#FE9C1A",
    colorLight: "#FFF8E1",
  },
];

export function FlywheelSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center py-6">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          The <span className="gradient-text">Growth Flywheel</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          A self-reinforcing loop — like Zapier and Clay — but AI-native.
        </p>
      </div>

      {/* Side-by-side: SVG + cards */}
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
        {/* Flywheel SVG — compact */}
        <div className="w-full max-w-[260px] md:max-w-[280px] shrink-0">
          <svg viewBox="0 0 400 400" className="w-full h-auto">
            {/* Segment 1: Users (top) */}
            <path d="M 200 30 A 170 170 0 0 1 347 285" fill="none" stroke="#1C91FF" strokeWidth="28" strokeLinecap="round" opacity="0.15" />
            <path d="M 200 30 A 170 170 0 0 1 347 285" fill="none" stroke="#1C91FF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            {/* Segment 2: Integrations (bottom right) */}
            <path d="M 347 285 A 170 170 0 0 1 53 285" fill="none" stroke="#418B5C" strokeWidth="28" strokeLinecap="round" opacity="0.15" />
            <path d="M 347 285 A 170 170 0 0 1 53 285" fill="none" stroke="#418B5C" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            {/* Segment 3: Partners (left) */}
            <path d="M 53 285 A 170 170 0 0 1 200 30" fill="none" stroke="#FE9C1A" strokeWidth="28" strokeLinecap="round" opacity="0.15" />
            <path d="M 53 285 A 170 170 0 0 1 200 30" fill="none" stroke="#FE9C1A" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            {/* Animated arrows */}
            <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
              <polygon points="200,18 206,30 194,30" fill="#1C91FF" opacity="0.7" />
              <polygon points="354,279 349,292 341,281" fill="#418B5C" opacity="0.7" />
              <polygon points="46,279 59,281 51,292" fill="#FE9C1A" opacity="0.7" />
            </g>
            {/* Center */}
            <circle cx="200" cy="200" r="55" fill="white" stroke="#EEEEEF" strokeWidth="2" />
            <text x="200" y="194" textAnchor="middle" className="fill-foreground" fontSize="15" fontWeight="500">Dust</text>
            <text x="200" y="214" textAnchor="middle" fill="#6B7280" fontSize="11">Flywheel</text>
            {/* Node labels */}
            <circle cx="200" cy="80" r="18" fill="#E9F7FF" stroke="#1C91FF" strokeWidth="1.5" />
            <text x="200" y="84" textAnchor="middle" fontSize="14">👥</text>
            <circle cx="320" cy="300" r="18" fill="#E8F5E9" stroke="#418B5C" strokeWidth="1.5" />
            <text x="320" y="304" textAnchor="middle" fontSize="14">🧩</text>
            <circle cx="80" cy="300" r="18" fill="#FFF8E1" stroke="#FE9C1A" strokeWidth="1.5" />
            <text x="80" y="304" textAnchor="middle" fontSize="14">💼</text>
          </svg>
        </div>

        {/* Step cards — vertical stack */}
        <div className="flex-1 grid gap-3 w-full">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <div key={seg.title} className="dust-card flex items-start gap-3 !p-4">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg shrink-0"
                  style={{ background: seg.colorLight }}
                >
                  <Icon className="h-4 w-4" style={{ color: seg.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-medium text-sm">{seg.title}</h3>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0" style={{ background: seg.colorLight, color: seg.color }}>
                      Step {i + 1}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{seg.desc}</p>
                  <div className="mt-2 flex items-center gap-1">
                    <ArrowRight className="h-3 w-3" style={{ color: seg.color }} />
                    <span className="text-[11px] font-medium" style={{ color: seg.color }}>{seg.output}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
