import type * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, H2, P, FullWidthSection } from "@/components/content";
import { LogoStrip } from "@/components/marketing";
import {
  BarChartIcon,
  BookOpenIcon,
  CodeBlockIcon,
  CompanyIcon,
  RocketIcon,
  SparklesIcon,
} from "@/components/icons";
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

type SvgIcon = React.ComponentType<{ className?: string }>;

type BigPath = {
  title: string;
  description: string;
  bullets: string[];
  Icon: SvgIcon;
  bg: string;
  iconColor: string;
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
    Icon: CodeBlockIcon,
    bg: "bg-blue-50",
    iconColor: "text-blue-400",
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
    Icon: CompanyIcon,
    bg: "bg-green-50",
    iconColor: "text-green-400",
    cta: "Get in touch",
    href: "mailto:partnerships@dust.tt?subject=Service%20Partnership",
  },
];

type SmallPath = {
  title: string;
  description: string;
  Icon: SvgIcon;
  bg: string;
  iconColor: string;
  href: string;
};

const SMALL_PATHS: SmallPath[] = [
  {
    title: "Private Equity",
    description:
      "Accelerate portfolio value. Deploy Dust across portfolio companies for productivity gains at scale.",
    Icon: BarChartIcon,
    bg: "bg-golden-50",
    iconColor: "text-golden-400",
    href: "mailto:partnerships@dust.tt?subject=Private%20Equity%20Partnership",
  },
  {
    title: "Startup Partners",
    description:
      "For VCs, accelerators, and incubators. Give your portfolio the AI agent platform to move faster.",
    Icon: RocketIcon,
    bg: "bg-rose-50",
    iconColor: "text-rose-400",
    href: "mailto:partnerships@dust.tt?subject=Startup%20Partnership",
  },
  {
    title: "Education Partners",
    description:
      "For training agencies and schools. Integrate Dust into your AI curriculum and equip students with real-world skills.",
    Icon: BookOpenIcon,
    bg: "bg-muted",
    iconColor: "text-foreground/60",
    href: "mailto:partnerships@dust.tt?subject=Education%20Partnership",
  },
];

export default function BecomeAPartnerPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero (left-aligned, dust.tt-style) ─────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:pb-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <SparklesIcon className="h-3 w-3 text-blue-500" />
            Dust Partner Network
          </span>
          <H1 mono className="mb-4 text-foreground">
            Become a Partner
          </H1>
          <P size="lg" className="max-w-2xl text-muted-foreground">
            Partner with Dust to bring AI agents to your customers. We&apos;re
            building a network of integration, service, and ecosystem partners
            deploying Dust across the world.
          </P>
        </div>
      </section>

      {/* ─────────── Why partner — three pastel value props (matches dust.tt/home/partner) ─────────── */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-8 text-foreground">Why partner with Dust</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Revenue opportunity",
                desc: "Attractive partner margins and recurring revenue from customer deployments.",
                bg: "bg-green-50",
                iconColor: "text-green-400",
                Icon: BarChartIcon,
              },
              {
                title: "Dedicated support",
                desc: "Technical onboarding, sales enablement, and partner success resources.",
                bg: "bg-blue-50",
                iconColor: "text-blue-400",
                Icon: SparklesIcon,
              },
              {
                title: "Co-selling motion",
                desc: "Joint deal pipeline, warm intros to Dust reps, and co-marketing opportunities.",
                bg: "bg-rose-50",
                iconColor: "text-rose-400",
                Icon: CompanyIcon,
              },
            ].map((v) => {
              const Icon = v.Icon;
              return (
                <div key={v.title} className={`flex flex-col rounded-2xl p-6 ${v.bg}`}>
                  <Icon className={`mb-4 h-8 w-8 ${v.iconColor}`} />
                  <h4 className="text-lg font-semibold text-foreground">{v.title}</h4>
                  <p className="copy-base mt-1 font-sans text-muted-foreground">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Two big paths (Integration / Service) ─────────── */}
      <section className="bg-background pb-10 md:pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-8 text-foreground">Where do you fit?</H2>
          <div className="grid gap-4 md:grid-cols-2">
            {BIG_PATHS.map((p) => {
              const Icon = p.Icon;
              const isExternal = p.href.startsWith("mailto:") || p.href.startsWith("http");
              const Anchor = isExternal ? "a" : Link;
              return (
                <div
                  key={p.title}
                  className={`flex flex-col rounded-2xl ${p.bg} p-6`}
                >
                  <Icon className={`mb-4 h-8 w-8 ${p.iconColor}`} />
                  <h4 className="text-lg font-semibold text-foreground">{p.title}</h4>
                  <p className="copy-base mt-1 font-sans text-muted-foreground">{p.description}</p>

                  <ul className="mt-5 space-y-2 flex-grow">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-snug text-foreground/85">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <Anchor
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline hover:underline-offset-4"
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
      <section className="bg-background pb-10 md:pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-8 text-foreground">Specialised programmes</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {SMALL_PATHS.map((s) => {
              const Icon = s.Icon;
              return (
                <a
                  key={s.title}
                  href={s.href}
                  className={`group flex flex-col rounded-2xl ${s.bg} p-6 transition-all hover:translate-y-[-2px] hover:shadow-sm`}
                >
                  <Icon className={`mb-4 h-8 w-8 ${s.iconColor}`} />
                  <h4 className="text-lg font-semibold text-foreground">{s.title}</h4>
                  <p className="copy-base mt-1 flex-grow font-sans text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
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
      <FullWidthSection className="bg-background pb-10 pt-2">
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

      {/* ─────────── Partner stories — three real public Dust testimonials ─────────── */}
      {/* Quotes sourced from dust.tt's public homepage. Replace with partner-
          specific quotes once we collect them from active partners. */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-8 text-foreground">What partners say</H2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote:
                  "We made a bet on Dust because we knew the team was exceptional. What we didn't expect was how quickly it would transform how we work. Dust became the connective tissue that amplifies what each team does best.",
                name: "Ryan Wang",
                role: "CEO, Assembled",
              },
              {
                quote:
                  "Dust is the most impactful software we've adopted since building Clay.",
                name: "Everett Berry",
                role: "Clay",
              },
              {
                quote:
                  "We used to do the work. Now we build the agents that do it.",
                name: "Shashank Khanna",
                role: "Vanta",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-background p-6"
              >
                <blockquote className="copy-base flex-grow font-sans text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Other ways ─────────── */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-2 text-foreground">Other ways to work with us</H2>
          <P size="md" className="mb-8 max-w-2xl text-muted-foreground">
            Programmes we&apos;re building out as the partner network grows.
          </P>
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
                <h4 className="text-sm font-semibold text-foreground">{o.title}</h4>
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
      <FullWidthSection className="bg-blue-50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <H2 className="mb-4 text-center text-foreground">
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
