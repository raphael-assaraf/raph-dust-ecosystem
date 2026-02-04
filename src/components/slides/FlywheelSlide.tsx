"use client";

import { Users, Puzzle, Briefcase, ArrowRight, Zap } from "lucide-react";

const steps = [
  {
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    title: "Grassroots Users",
    desc: "Users organically tell Dust what to build. They share use cases, hack with the API, create templates, and push boundaries.",
    action: "Demand signal",
  },
  {
    icon: Puzzle,
    color: "text-dust-primary",
    bg: "bg-dust-primary/10 border-dust-primary/20",
    title: "Integrations",
    desc: "Native integrations drive retention, unlock co-marketing with SaaS partners (Clay, Gong), and build brand credibility that excites the expert community.",
    action: "Retention + brand",
  },
  {
    icon: Briefcase,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    title: "Service Partners",
    desc: 'Experts create advanced use cases with new clients, generating revenue and feeding the pipeline — they sell multiple tools, and Dust becomes part of the stack.',
    action: "Revenue + pipeline",
  },
];

export function FlywheelSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          The <span className="gradient-text">Growth Flywheel</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          A self-reinforcing loop where each layer compounds the next.
          Like Zapier and Clay — but with Dust&apos;s unique AI-native advantage.
        </p>
      </div>

      {/* Flywheel visualization */}
      <div className="relative w-full max-w-3xl">
        {/* Center hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dust-primary/30 bg-dust-surface">
            <Zap className="h-8 w-8 text-dust-primary animate-pulse-glow" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid gap-4 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="group relative">
                <div
                  className={`relative flex items-start gap-4 rounded-xl border ${step.bg} p-5 transition-all hover:scale-[1.01]`}
                >
                  {/* Step number */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dust-surface border border-dust-border text-xs font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <Icon className={`h-5 w-5 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${step.bg} ${step.color}`}>
                        {step.action}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowRight className="h-4 w-4 text-dust-border rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Loop back arrow */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-dust-border" />
          <span className="flex items-center gap-1.5 text-dust-primary font-medium">
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Feeds back to Step 1
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-dust-border" />
        </div>
      </div>
    </div>
  );
}
