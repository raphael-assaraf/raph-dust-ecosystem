import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Briefcase,
  Building2,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, H2, P, FullWidthSection } from "@/components/content";
import { LogoStrip } from "@/components/marketing";
import {
  AttioLogo,
  GongLogo,
  GranolaLogo,
  HubspotLogo,
  IntercomLogo,
  LinearLogo,
  NotionLogo,
  SnowflakeLogo,
  StripeLogo,
  VantaLogo,
} from "@/components/logos/platforms";

export const metadata: Metadata = {
  title: "Become a Partner | Dust",
  description:
    "Partner with Dust to bring AI agents to your customers — as an integration partner, service partner, PE, VC, or education partner.",
};

type Category = {
  title: string;
  description: string;
  icon: typeof Blocks;
  accent: string;
  bg: string;
  cta: string;
  href: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Integration Partners",
    description:
      "Connect your product to Dust. Build MCP integrations and reach thousands of AI agent users.",
    icon: Blocks,
    accent: "#1C91FF",
    bg: "#E9F7FF",
    cta: "Learn more",
    href: "/partners",
  },
  {
    title: "Service Partners",
    description:
      "Deliver Dust transformations at scale. Agencies, consultancies, and integrators deploying AI agents for enterprise customers.",
    icon: Briefcase,
    accent: "#418B5C",
    bg: "#E8F5E9",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Service%20Partnership",
  },
  {
    title: "Private Equity Partners",
    description:
      "Accelerate portfolio value. Deploy Dust across portfolio companies to compound productivity gains at scale.",
    icon: Building2,
    accent: "#FE9C1A",
    bg: "#FFF1E0",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Private%20Equity%20Partnership",
  },
  {
    title: "Startup Partners",
    description:
      "For VCs, accelerators, and incubators. Give your portfolio startups the AI agent platform they need to move faster.",
    icon: Rocket,
    accent: "#D97AB0",
    bg: "#FBE8F1",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Startup%20Partnership",
  },
  {
    title: "Education Partners",
    description:
      "For training agencies and schools. Integrate Dust into your AI curriculum and equip students with real-world skills.",
    icon: GraduationCap,
    accent: "#A3B558",
    bg: "#F0F4DE",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Education%20Partnership",
  },
];

const OTHER_WAYS = [
  {
    title: "Community & Affiliates",
    description:
      "Earn while you share. We're building an affiliate program for creators and communities pushing AI adoption forward.",
    cta: "Coming soon",
    href: "mailto:partnerships@dust.tt?subject=Community%20%26%20Affiliates",
    accent: "#1C91FF",
    bg: "#E9F7FF",
  },
  {
    title: "Content Creators & Influencers",
    description:
      "Create content about Dust and share it with your audience. Get assets, demo access, and early product looks.",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Creators",
    accent: "#D97AB0",
    bg: "#FBE8F1",
  },
  {
    title: "Events & Hackathons",
    description:
      "Organize community hackathons, workshops, or events around Dust. We bring sponsorships, prizes, and on-site help.",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Events%20%26%20Hackathons",
    accent: "#FE9C1A",
    bg: "#FFF1E0",
  },
];

export default function BecomeAPartnerPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero ─────────── */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-blue-500" />
            Dust Partner Network
          </span>
          <H1
            mono
            className="mb-2 text-center text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Partner with Dust
          </H1>
          <P size="lg" className="mt-4 max-w-2xl text-muted-foreground">
            Multiple ways to build, deploy, and grow with the AI agent platform.
            Choose the path that fits your team — we partner with builders,
            services, investors, and educators.
          </P>
        </div>
      </section>

      {/* ─────────── 5 partner categories ─────────── */}
      <section className="bg-background pb-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isExternal = cat.href.startsWith("mailto:") || cat.href.startsWith("http");
              const Anchor = isExternal ? "a" : Link;
              return (
                <div
                  key={cat.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all hover:border-foreground/30 hover:shadow-md"
                >
                  {/* Top tint band */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-32"
                    style={{
                      background: `linear-gradient(to bottom, ${cat.bg}, transparent)`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: cat.bg, color: cat.accent }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3
                      className="heading-mono-xl"
                      style={{ color: cat.accent }}
                    >
                      {cat.title}
                    </h3>
                    <p className="copy-sm mt-3 flex-grow text-foreground/80">{cat.description}</p>

                    <div className="mt-6 pt-2">
                      <Anchor
                        href={cat.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{ color: cat.accent }}
                      >
                        {cat.cta}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Anchor>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Trusted-by logo strip ─────────── */}
      <FullWidthSection className="bg-background pb-12 pt-6">
        <div className="mx-auto max-w-5xl px-6">
          <LogoStrip
            title="Trusted by partners worldwide"
            size="default"
            logos={[
              NotionLogo,
              HubspotLogo,
              AttioLogo,
              GranolaLogo,
              GongLogo,
              IntercomLogo,
              VantaLogo,
              SnowflakeLogo,
              LinearLogo,
              StripeLogo,
            ]}
          />
        </div>
      </FullWidthSection>

      {/* ─────────── Other ways to work with us ─────────── */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 mx-auto max-w-2xl text-center">
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              Other ways to work with us
            </H2>
            <P size="md" className="text-muted-foreground">
              Programs we&apos;re building out as the partner network grows.
            </P>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {OTHER_WAYS.map((o) => (
              <div
                key={o.title}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:border-foreground/30 hover:shadow-sm"
              >
                <div
                  className="mb-4 inline-flex h-2 w-12 rounded-full"
                  style={{ background: o.accent }}
                />
                <h3 className="text-lg font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 flex-grow text-sm text-muted-foreground">{o.description}</p>
                <a
                  href={o.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: o.accent }}
                >
                  {o.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Final CTA ─────────── */}
      <FullWidthSection className="bg-blue-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <H2 className="mb-4 text-center text-3xl font-semibold text-foreground md:text-4xl">
            Build the AI agent ecosystem with us
          </H2>
          <P size="lg" className="mb-8 text-muted-foreground">
            Partners are central to our next stage at Dust. Pick the path that
            fits — or drop us a note if none quite do.
          </P>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href="mailto:partnerships@dust.tt"
              variant="highlight"
              size="md"
              iconRight={ArrowRight}
            >
              Get in touch
            </Button>
            <Button href="/partners" variant="outline" size="md">
              For app builders
            </Button>
          </div>
        </div>
      </FullWidthSection>

      <SiteFooter />
    </div>
  );
}
