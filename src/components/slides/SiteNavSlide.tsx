"use client";

import {
  Award,
  Blocks,
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  MessageSquare,
  Plug,
  Package,
  Megaphone,
  Lightbulb,
  FileText,
  ArrowRight,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const navSections = [
  {
    label: "PARTNER ECOSYSTEM",
    items: [
      { icon: Award, name: "Find Dust Experts", desc: "Certified partners to help you get the most out of Dust", url: "/experts", color: "#418B5C" },
      { icon: GraduationCap, name: "Dust Academy", desc: "Courses, certifications, and hands-on training", url: "/academy", color: "#1C91FF" },
      { icon: Blocks, name: "Integrations", desc: "Native connectors, partner-built, and community apps", url: "/integrations", color: "#8B5CF6" },
      { icon: Calendar, name: "Events & Meetups", desc: "Local gatherings and expert workshops", url: "/events", color: "#FE9C1A" },
    ],
  },
  {
    label: "BUILD WITH DUST",
    items: [
      { icon: Package, name: "Templates", desc: "Pre-built agents and workflows, ready to use", url: "/templates", color: "#FE9C1A" },
      { icon: Plug, name: "API & Connectors", desc: "Developer docs and API reference", url: "/developers", color: "#1C91FF" },
      { icon: Lightbulb, name: "Use Case Gallery", desc: "Real stories from users and partners", url: "/stories", color: "#418B5C" },
      { icon: MessageSquare, name: "Community Slack", desc: "Join 5K+ builders for support and ideas", url: "/slack", color: "#8B5CF6" },
    ],
  },
  {
    label: "EXPLORE",
    items: [
      { icon: FileText, name: "Partner Program", desc: "Apply to become a Dust Expert", url: "/partner", color: "#418B5C" },
      { icon: Megaphone, name: "Dust Creators", desc: "Content creators and influencers", url: "/creators", color: "#FE9C1A" },
      { icon: BookOpen, name: "Blog", desc: "Product updates, use cases, and insights", url: "/blog", color: "#1C91FF" },
      { icon: Users, name: "Solutions Partners", desc: "Strategic and enterprise partnerships", url: "/solutions-partners", color: "#6B7280" },
    ],
  },
];

export function SiteNavSlide() {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] flex-col justify-center py-8">
      {/* Fake top nav bar */}
      <div className="browser-frame mb-6 max-w-4xl mx-auto w-full">
        <div className="browser-frame-header">
          <div className="browser-dot" />
          <div className="browser-dot" />
          <div className="browser-dot" />
          <div className="browser-url">dust.tt</div>
        </div>
        {/* Nav bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-sm tracking-tight">Dust</span>
            <nav className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Product</span>
              <span>Solutions</span>
              <span className="flex items-center gap-0.5 text-dust-blue font-medium">
                Ecosystem <ChevronDown className="h-3 w-3" />
              </span>
              <span>Pricing</span>
              <span>Company</span>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground">Log in</span>
            <span className="text-[11px] bg-foreground text-background px-2.5 py-1 rounded-md font-medium">Get started</span>
          </div>
        </div>

        {/* Mega menu dropdown */}
        <div className="p-5">
          <div className="grid md:grid-cols-3 gap-6">
            {navSections.map((section) => (
              <div key={section.label}>
                <h4 className="text-[10px] font-semibold text-muted-foreground tracking-wider mb-3">
                  {section.label}
                </h4>
                <div className="space-y-2.5">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-start gap-2.5 group cursor-pointer rounded-lg p-1.5 -m-1.5 hover:bg-muted transition-colors"
                      >
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-md shrink-0 mt-0.5"
                          style={{ background: `${item.color}12` }}
                        >
                          <Icon className="h-3.5 w-3.5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="text-xs font-medium group-hover:text-dust-blue transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-muted-foreground leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3">
          The <span className="gradient-text">Ecosystem</span> Dust Will Build
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Inspired by how Clay, Notion, and Zapier organize their partner ecosystems —
          each section is a <span className="text-foreground font-medium">maintained property</span> and
          a <span className="text-foreground font-medium">PMM project</span> that
          compounds over time. This tour walks through each one.
        </p>
        <div className="inline-flex items-center gap-2 text-xs text-dust-blue font-medium">
          Use arrows to navigate through each section
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
