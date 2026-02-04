"use client";

import { Users, Puzzle, Briefcase, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: Users,
    title: "Grassroots Users",
    desc: "Users organically build with Dust, share use cases, push boundaries with the API, and tell Dust what to build next.",
    output: "Demand signal",
    color: "#1C91FF",
    colorLight: "#E9F7FF",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    desc: "Native integrations drive retention, unlock co-marketing with SaaS partners (Clay, Gong), and build brand credibility that excites the expert community.",
    output: "Retention + brand",
    color: "#418B5C",
    colorLight: "#E8F5E9",
  },
  {
    icon: Briefcase,
    title: "Service Partners",
    desc: "Experts create advanced use cases with new clients, generating revenue and feeding the pipeline — they sell multiple tools, and Dust becomes part of the stack.",
    output: "Revenue + pipeline",
    color: "#FE9C1A",
    colorLight: "#FFF8E1",
  },
];

export function FlywheelSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
          The <span className="gradient-text">Growth Flywheel</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          A self-reinforcing loop where each layer compounds the next.
          Like Zapier and Clay — but with Dust&apos;s unique AI-native advantage.
        </p>
      </div>

      {/* Flywheel SVG */}
      <div className="relative w-full max-w-md mx-auto mb-8">
        <svg viewBox="0 0 400 400" className="w-full h-auto">
          {/* Outer ring segments */}
          {/* Segment 1: Users (top) */}
          <path
            d="M 200 30 A 170 170 0 0 1 347 285"
            fill="none"
            stroke="#1C91FF"
            strokeWidth="28"
            strokeLinecap="round"
            opacity="0.15"
          />
          <path
            d="M 200 30 A 170 170 0 0 1 347 285"
            fill="none"
            stroke="#1C91FF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Segment 2: Integrations (bottom right) */}
          <path
            d="M 347 285 A 170 170 0 0 1 53 285"
            fill="none"
            stroke="#418B5C"
            strokeWidth="28"
            strokeLinecap="round"
            opacity="0.15"
          />
          <path
            d="M 347 285 A 170 170 0 0 1 53 285"
            fill="none"
            stroke="#418B5C"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Segment 3: Partners (left) */}
          <path
            d="M 53 285 A 170 170 0 0 1 200 30"
            fill="none"
            stroke="#FE9C1A"
            strokeWidth="28"
            strokeLinecap="round"
            opacity="0.15"
          />
          <path
            d="M 53 285 A 170 170 0 0 1 200 30"
            fill="none"
            stroke="#FE9C1A"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Rotation arrows */}
          <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
            {/* Arrow at top */}
            <polygon points="200,18 206,30 194,30" fill="#1C91FF" opacity="0.7" />
            {/* Arrow at bottom right */}
            <polygon points="354,279 349,292 341,281" fill="#418B5C" opacity="0.7" />
            {/* Arrow at bottom left */}
            <polygon points="46,279 59,281 51,292" fill="#FE9C1A" opacity="0.7" />
          </g>

          {/* Center circle */}
          <circle cx="200" cy="200" r="55" fill="white" stroke="#EEEEEF" strokeWidth="2" />
          <text x="200" y="194" textAnchor="middle" className="fill-gray-950 text-sm font-medium" fontSize="14">
            Dust
          </text>
          <text x="200" y="212" textAnchor="middle" className="fill-muted-foreground" fontSize="11">
            Flywheel
          </text>

          {/* Labels */}
          {/* Users - top */}
          <g>
            <circle cx="200" cy="80" r="18" fill="#E9F7FF" stroke="#1C91FF" strokeWidth="1.5" />
            <text x="200" y="84" textAnchor="middle" fontSize="14">👥</text>
          </g>

          {/* Integrations - bottom right */}
          <g>
            <circle cx="320" cy="300" r="18" fill="#E8F5E9" stroke="#418B5C" strokeWidth="1.5" />
            <text x="320" y="304" textAnchor="middle" fontSize="14">🧩</text>
          </g>

          {/* Partners - bottom left */}
          <g>
            <circle cx="80" cy="300" r="18" fill="#FFF8E1" stroke="#FE9C1A" strokeWidth="1.5" />
            <text x="80" y="304" textAnchor="middle" fontSize="14">💼</text>
          </g>
        </svg>
      </div>

      {/* Step cards */}
      <div className="grid gap-4 md:grid-cols-3 w-full max-w-4xl">
        {segments.map((seg, i) => {
          const Icon = seg.icon;
          return (
            <div key={seg.title} className="dust-card">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: seg.colorLight }}
                >
                  <Icon className="h-4 w-4" style={{ color: seg.color }} />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground">Step {i + 1}</span>
                  <h3 className="font-medium text-sm leading-none">{seg.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {seg.desc}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <ArrowRight className="h-3 w-3" style={{ color: seg.color }} />
                <span className="text-xs font-medium" style={{ color: seg.color }}>
                  {seg.output}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
