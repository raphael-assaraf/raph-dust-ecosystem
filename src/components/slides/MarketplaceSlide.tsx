"use client";

import { Blocks, ArrowRight, Plug, Package, Code, Search } from "lucide-react";
import { BrowserMockup } from "@/components/BrowserMockup";

const apps = [
  { name: "Clay", cat: "GTM", status: "Live", color: "#418B5C" },
  { name: "Gong", cat: "Sales", status: "Live", color: "#418B5C" },
  { name: "Slack", cat: "Comms", status: "Native", color: "#1C91FF" },
  { name: "Notion", cat: "Docs", status: "Native", color: "#1C91FF" },
  { name: "Google Drive", cat: "Storage", status: "Native", color: "#1C91FF" },
  { name: "GitHub", cat: "Dev", status: "Native", color: "#1C91FF" },
  { name: "HubSpot", cat: "CRM", status: "Roadmap", color: "#6B7280" },
  { name: "Salesforce", cat: "CRM", status: "Roadmap", color: "#6B7280" },
  { name: "Linear", cat: "Eng", status: "Roadmap", color: "#6B7280" },
  { name: "Intercom", cat: "Support", status: "Roadmap", color: "#6B7280" },
  { name: "Zendesk", cat: "Support", status: "Native", color: "#1C91FF" },
  { name: "Confluence", cat: "Docs", status: "Native", color: "#1C91FF" },
];

const pipeline = [
  { icon: Code, label: "API Builders", desc: "Grassroots developers push boundaries", color: "#8B5CF6", bg: "#F3F0FF" },
  { icon: Package, label: "Templates", desc: "Best creations become shared templates", color: "#FE9C1A", bg: "#FFF8E1" },
  { icon: Plug, label: "Native Integrations", desc: "Top demand becomes first-party", color: "#1C91FF", bg: "#E9F7FF" },
];

export function MarketplaceSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="dust-badge">
            <Blocks className="h-3.5 w-3.5 text-[#1C91FF]" />
            dust.tt/apps
          </span>
          <span className="dust-badge">
            <Plug className="h-3.5 w-3.5 text-[#8B5CF6]" />
            dust.tt/integrations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          <span className="gradient-text">App Marketplace</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
          Two PMM projects: the <span className="text-foreground font-medium">App Marketplace</span> (browse all) and
          the <span className="text-foreground font-medium">Integrations page</span> (native connectors).
          From grassroots API builders to first-party.
        </p>
      </div>

      {/* Integration pipeline */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        {pipeline.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={p.label} className="flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border"
                style={{ background: p.bg, color: p.color }}
              >
                <Icon className="h-3.5 w-3.5" />
                {p.label}
              </div>
              {i < pipeline.length - 1 && (
                <ArrowRight className="h-3 w-3 text-gray-200" />
              )}
            </div>
          );
        })}
      </div>

      {/* Marketplace mockup */}
      <BrowserMockup url="dust.tt/apps">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-sm">Dust App Marketplace</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Integrations, templates, and agents built by Dust and the community.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border text-xs text-muted-foreground bg-muted">
              <Search className="h-3 w-3" />
              Search apps...
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            {["All", "Native", "Templates", "Community"].map((f) => (
              <span
                key={f}
                className={`text-[11px] px-2 py-0.5 rounded-md border ${
                  f === "All"
                    ? "border-dust-blue bg-[#E9F7FF] text-dust-blue font-medium"
                    : "border-border text-muted-foreground"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* App grid */}
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-border hover:border-dust-blue/30 transition-colors"
            >
              <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">
                {app.name[0]}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium truncate">{app.name}</div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-muted-foreground">{app.cat}</span>
                  <span
                    className="text-[9px] font-medium px-1 py-px rounded"
                    style={{
                      color: app.color,
                      background: app.status === "Live" ? "#E8F5E9" : app.status === "Native" ? "#E9F7FF" : "#F7F7F7",
                    }}
                  >
                    {app.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BrowserMockup>

      {/* Pipeline explanation */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {pipeline.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.label} className="dust-card-flat flex gap-3">
              <Icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: p.color }} />
              <div>
                <h4 className="font-medium text-xs">{p.label}</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
