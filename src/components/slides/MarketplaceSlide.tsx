"use client";

import { Store, Package, Code, Blocks, ArrowRight, Plug } from "lucide-react";
import { cn } from "@/lib/utils";

const integrations = [
  { name: "Clay", category: "GTM", status: "Live" },
  { name: "Gong", category: "Sales", status: "Live" },
  { name: "Slack", category: "Comms", status: "Native" },
  { name: "Notion", category: "Docs", status: "Native" },
  { name: "HubSpot", category: "CRM", status: "Roadmap" },
  { name: "Salesforce", category: "CRM", status: "Roadmap" },
  { name: "Linear", category: "Eng", status: "Roadmap" },
  { name: "Intercom", category: "Support", status: "Roadmap" },
];

const layers = [
  {
    icon: Plug,
    title: "Native Integrations",
    desc: "First-party connectors built by Dust. Deep product integrations that drive retention and unlock co-marketing with SaaS partners.",
    color: "text-dust-primary",
  },
  {
    icon: Package,
    title: "Product Templates",
    desc: "Pre-built agent configurations and workflows. Users share what they built; the best get promoted to official templates.",
    color: "text-amber-400",
  },
  {
    icon: Code,
    title: "API & Builder Ecosystem",
    desc: "Grassroots builders push boundaries with the Dust API. Their innovations signal what to integrate natively next.",
    color: "text-violet-400",
  },
  {
    icon: Blocks,
    title: "Marketplace Listing",
    desc: "A central place to discover integrations, templates, and partner-built solutions. Think Zapier meets the AI app store.",
    color: "text-emerald-400",
  },
];

export function MarketplaceSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3 text-dust-primary">
          <Store className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">
            Integrations Track
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="gradient-text">Marketplace</span> & Integrations
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          From grassroots API builders to native integrations — a lego-like
          ecosystem where everything connects.
        </p>
      </div>

      {/* The pipeline: builders → templates → native */}
      <div className="mb-8 flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
        <span className="px-2 py-1 rounded-md bg-violet-400/10 text-violet-400 border border-violet-400/20">
          API Builders
        </span>
        <ArrowRight className="h-3 w-3" />
        <span className="px-2 py-1 rounded-md bg-amber-400/10 text-amber-400 border border-amber-400/20">
          Templates
        </span>
        <ArrowRight className="h-3 w-3" />
        <span className="px-2 py-1 rounded-md bg-dust-primary/10 text-dust-primary border border-dust-primary/20">
          Native Integrations
        </span>
      </div>

      {/* Layers */}
      <div className="grid gap-3 sm:grid-cols-2 mb-8">
        {layers.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.title}
              className="rounded-xl border border-dust-border bg-dust-surface/50 p-4 flex gap-3 transition-all hover:border-dust-primary/20"
            >
              <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", layer.color)} />
              <div>
                <h4 className="font-medium">{layer.title}</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Integration grid */}
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-3">
          Integration Landscape
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {integrations.map((int) => (
            <div
              key={int.name}
              className="rounded-lg border border-dust-border bg-dust-surface/30 px-3 py-2.5 flex items-center justify-between"
            >
              <div>
                <span className="text-sm font-medium">{int.name}</span>
                <span className="block text-[10px] text-muted-foreground">
                  {int.category}
                </span>
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium px-1.5 py-0.5 rounded-full",
                  int.status === "Live"
                    ? "bg-emerald-400/10 text-emerald-400"
                    : int.status === "Native"
                    ? "bg-blue-400/10 text-blue-400"
                    : "bg-zinc-700 text-zinc-400"
                )}
              >
                {int.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
