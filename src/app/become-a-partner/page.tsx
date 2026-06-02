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
    "Partner with Dust to bring AI agents to your customers — as an integration, service, PE, VC, or education partner.",
};

/*
 * Two main paths get hero-card treatment (Integration + Service), the three
 * specialised programmes (PE / Startup / Education) sit below as smaller
 * compact cards. Solid pastel fills only — no gradients (mirrors dust.tt).
 */

type BigPath = {
  title: string;
  description: string;
  bullets: string[];
  icon: typeof Blocks;
  accent: string;
  bg: string;
  cta: string;
  href: string;
};

const BIG_PATHS: BigPath[] = [
  {
    title: "Integration Partners",
    description:
      "Connect your product to Dust. Build MCP integrations and reach thousands of AI agent users.",
    bullets: [
      "Listed in the Dust app and on the public marketplace",
      "Clear tiered programme — from listing to deep partnership",
      "Co-marketing, customer stories, and roadmap collaboration",
    ],
    icon: Blocks,
    accent: "blue",
    bg: "bg-blue-50",
    cta: "Explore tech partnerships",
    href: "/technology-partners",
  },
  {
    title: "Service Partners",
    description:
      "Deliver Dust transformations at scale. Help enterprises design, build, and ship AI agents.",
    bullets: [
      "Attractive partner margins and recurring revenue",
      "Technical onboarding and sales enablement",
      "Joint deal pipeline with the Dust GTM team",
    ],
    icon: Briefcase,
    accent: "green",
    bg: "bg-green-50",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Service%20Partnership",
  },
];

type SmallPath = {
  title: string;
  description: string;
  icon: typeof Blocks;
  bg: string;
  href: string;
};

const SMALL_PATHS: SmallPath[] = [
  {
    title: "Private Equity",
    description:
      "Accelerate portfolio value. Deploy Dust across portfolio companies for productivity gains at scale.",
    icon: Building2,
    bg: "bg-golden-50",
    href: "mailto:partnerships@dust.tt?subject=Private%20Equity%20Partnership",
  },
  {
    title: "Startup Partners",
    description:
      "For VCs, accelerators, and incubators. Give your portfolio the AI agent platform to move faster.",
    icon: Rocket,
    bg: "bg-rose-50",
    href: "mailto:partnerships@dust.tt?subject=Startup%20Partnership",
  },
  {
    title: "Education Partners",
    description:
      "For training agencies and schools. Integrate Dust into your AI curriculum and equip students with real-world skills.",
    icon: GraduationCap,
    bg: "bg-muted",
    href: "mailto:partnerships@dust.tt?subject=Education%20Partnership",
  },
];

const accentText = (a: string) =>
  a === "blue" ? "text-blue-700" : a === "green" ? "text-green-700" : "text-foreground";

const accentBgStrong = (a: string) =>
  a === "blue" ? "bg-blue-100" : a === "green" ? "bg-green-100" : "bg-muted";

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
            Pick the path that fits.
          </P>
        </div>
      </section>

      {/* ─────────── Two big paths ─────────── */}
      <section className="bg-background pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {BIG_PATHS.map((p) => {
              const Icon = p.icon;
              const isExternal = p.href.startsWith("mailto:") || p.href.startsWith("http");
              const Anchor = isExternal ? "a" : Link;
              return (
                <div
                  key={p.title}
                  className={`flex flex-col rounded-3xl ${p.bg} p-8 md:p-10`}
                >
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accentBgStrong(p.accent)} ${accentText(p.accent)}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className={`heading-mono-2xl ${accentText(p.accent)}`}>
                    {p.title}
                  </h2>
                  <p className="copy-base mt-3 text-foreground/85">{p.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-snug text-foreground/80">
                        <span className={`mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full ${accentBgStrong(p.accent)}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Anchor
                      href={p.href}
                      className={`inline-flex items-center gap-2 rounded-2xl bg-background px-5 py-3 text-sm font-semibold transition-colors hover:opacity-90 ${accentText(p.accent)}`}
                    >
                      {p.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Anchor>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Three smaller specialised paths ─────────── */}
      <section className="bg-background pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 mx-auto max-w-2xl text-center">
            <H2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">
              Specialised programmes
            </H2>
            <P size="sm" className="mt-2 text-muted-foreground">
              Tailored partnerships for investors, accelerators, and educators.
            </P>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SMALL_PATHS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.title}
                  href={s.href}
                  className={`group flex flex-col rounded-2xl ${s.bg} p-6 transition-all hover:translate-y-[-2px] hover:shadow-sm`}
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 flex-grow text-xs leading-relaxed text-foreground/70">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                    Get in touch
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Trusted-by ─────────── */}
      <FullWidthSection className="bg-background pb-12 pt-0">
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

      {/* ─────────── Other ways ─────────── */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 mx-auto max-w-2xl text-center">
            <H2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">
              Other ways to work with us
            </H2>
            <P size="sm" className="mt-2 text-muted-foreground">
              Programmes we&apos;re building out as the partner network grows.
            </P>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Community & Affiliates",
                description:
                  "Earn while you share. An affiliate programme for creators and communities pushing AI adoption forward.",
                cta: "Coming soon",
                href: "mailto:partnerships@dust.tt?subject=Community%20%26%20Affiliates",
              },
              {
                title: "Creators & Influencers",
                description:
                  "Create content about Dust. Get demo access, early product looks, and brand assets.",
                cta: "Get in touch",
                href: "mailto:partnerships@dust.tt?subject=Creators",
              },
              {
                title: "Events & Hackathons",
                description:
                  "Organise community hackathons, workshops, or events around Dust. We bring sponsorship and on-site help.",
                cta: "Get in touch",
                href: "mailto:partnerships@dust.tt?subject=Events",
              },
            ].map((o) => (
              <a
                key={o.title}
                href={o.href}
                className="flex flex-col rounded-2xl border border-border bg-background p-5 transition-all hover:border-foreground/30 hover:shadow-sm"
              >
                <h3 className="text-sm font-semibold text-foreground">{o.title}</h3>
                <p className="mt-1.5 flex-grow text-xs leading-relaxed text-muted-foreground">
                  {o.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                  {o.cta}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
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
            Partners are central to our next stage at Dust. Pick the path that fits,
            or drop us a note if none quite do.
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
            <Button href="/technology-partners" variant="outline" size="md">
              For app builders
            </Button>
          </div>
        </div>
      </FullWidthSection>

      <SiteFooter />
    </div>
  );
}
