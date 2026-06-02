import type { Metadata } from "next";
import {
  Check,
  Users,
  TrendingUp,
  Handshake,
  Crown,
  Sparkles,
  BookOpen,
  Code,
  MessageCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, H2, P, FullWidthSection } from "@/components/content";
import { RocketIcon } from "@/components/icons";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FeatureCard } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Partner Program | Dust",
  description:
    "Build, launch, and grow with Dust. Join the partner program for AI agent integrations across 100+ apps.",
};

type Tier = {
  name: string;
  tagline: string;
  icon: typeof Users;
  accent: string;
  bg: string;
  who: string;
  entry: string;
  partnerGets: string[];
  dustGets: string;
  cadence: string;
  /**
   * Directional ideas we could layer onto this tier over time. Intentionally
   * forward-looking, not commitments — surfaces what's possible without
   * locking the program in.
   */
  futureIdeas: string[];
};

/*
 * PUBLIC_TIERS — rendered on the page in numeric order: Tier 1 (Alliance, most
 * premium) → Tier 3 (Community, entry). Order intentional per Thibault's
 * "1 = highest" feedback (2026-06-01 sync follow-up).
 * INTERNAL_TIERS — Strategic only; operational reality, not exposed publicly.
 */
const PUBLIC_TIERS: Tier[] = [
  // Tier 1 — Alliance (filled in below after the data definitions).
  // Tier 2 — Growth.
  // Tier 3 — Community.
];

// Tier data (defined separately so we can compose PUBLIC_TIERS in the right order).
const TIER_COMMUNITY: Tier = {
    name: "Community",
    tagline: "Be discoverable. Reach Dust customers from day one.",
    icon: Users,
    accent: "#1C91FF",
    bg: "#E9F7FF",
    who: "Any partner with a working MCP server that passes Dust quality checks.",
    entry: "Self-serve registration · ~1 week QA",
    partnerGets: [
      "Logo + integration card inside the Dust app — surfaced to every Dust user when they browse integrations",
      "Public listing on dust.tt/integrations with logo and category",
      "Periodic visibility in Dust's product communications (e.g. batched release notes, marketplace newsletter)",
      "Opportunistic discovery surfaces (e.g. UGC demos, themed launches, comparison content)",
    ],
    dustGets: "Marketplace breadth, devrel surface area, retention moat.",
    cadence: "Async / batched",
    futureIdeas: [
      "\"Featured this week\" spotlight on the marketplace homepage",
      "Auto-generated short-form demo videos from a template",
      "Vertical roundup posts (e.g. \"10 new MCPs for sales teams\")",
      "Monthly \"What's new in Dust integrations\" digest to all customers",
    ],
};

const TIER_GROWTH: Tier = {
    name: "Growth",
    tagline: "Warm rep-to-rep motion. Lightweight co-marketing.",
    icon: TrendingUp,
    accent: "#418B5C",
    bg: "#E8F5E9",
    who: "Community partners showing GTM traction with Dust customers.",
    entry: "Provide dev support assets + adoption signal (e.g. customer installs, customer story)",
    partnerGets: [
      "A direct line to the Dust team (e.g. dedicated Slack channel)",
      "Account mapping with the Dust GTM team (e.g. via Crossbeam)",
      "Targeted co-marketing (e.g. customer story on Dust's blog, joint social, vertical playbooks)",
      "Warm rep-to-rep intros on shared deals when relevant",
    ],
    dustGets: "Mutual deal flow + lightweight co-marketing + vertical market validation.",
    cadence: "Async recap & feedback to evolve the partnership",
    futureIdeas: [
      "Custom Dust skill — a pre-configured agent template using the partner's MCP",
      "Inclusion in Dust's SE/AE enablement materials",
      "\"Partner pick\" badge inside the marketplace",
      "Shared adoption dashboard so partners see install + usage signal",
      "Joint customer interview, panel, or co-hosted office hours",
    ],
};

const TIER_ALLIANCE: Tier = {
    name: "Alliance",
    tagline: "Co-sell motion. Shared plans. Deep product collab.",
    icon: Handshake,
    accent: "#FE9C1A",
    bg: "#FFF1E0",
    who: "Partners aligned with Dust's GTM priorities, or invited by a Partner Account Manager.",
    entry: "Prove deal frequency + growing adoption — or be assigned by Dust",
    partnerGets: [
      "Joint co-sell motion with a shared business plan",
      "Joint marketing surface (e.g. themed launches, co-hosted webinars, in-person events)",
      "Recurring business reviews (e.g. QBRs, champion mapping)",
      "Deeper product collaboration (e.g. shared roadmap input, design partner opportunities)",
    ],
    dustGets: "Predictable deal volume, named champion accounts, category presence.",
    cadence: "Monthly+ planning, quarterly QBR",
    futureIdeas: [
      "Dedicated Partner Account Manager",
      "Joint customer advisory board",
      "Co-authored thought leadership (vertical benchmark, whitepaper, framework)",
      "Joint booth presence at major events",
      "\"Built for [Partner]\" badge on partner's own site, certified by Dust",
    ],
};

// Tier 1 = highest (Alliance), Tier 3 = entry (Community). Order matters here.
PUBLIC_TIERS.push(TIER_ALLIANCE, TIER_GROWTH, TIER_COMMUNITY);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const INTERNAL_TIERS: Tier[] = [
  {
    name: "Strategic",
    tagline: "Bespoke partnership at the executive level.",
    icon: Crown,
    accent: "#D97AB0",
    bg: "#FBE8F1",
    who: "Top-down chosen by Dust — partners we intentionally build on, or those that don't fit the program model.",
    entry: "By Dust invitation only",
    partnerGets: [
      "Executive sponsorship and custom commercial structure",
      "Engineering and product roadmap collaboration",
      "Bespoke launch surfaces and custom integration depth",
      "Treated as a peer initiative within Dust's product roadmap",
    ],
    dustGets: "Category-defining partnership outcomes.",
    cadence: "Continuous",
    futureIdeas: [
      "Co-developed product features (joint engineering sprints)",
      "Embedded Dust as a layer in the partner's product (white-label / OEM)",
      "Joint go-to-market entity or revenue-share commercial structure",
      "Co-branded vertical solutions (e.g. \"Dust + [Partner] for Funds\")",
    ],
  },
];

export default function PartnersPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero ─────────── */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-blue-500" />
            Dust App Partner Program
          </span>
          <H1
            mono
            className="mb-2 text-center text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Build, launch, and grow with Dust
          </H1>
          <P size="lg" className="mb-8 max-w-2xl text-muted-foreground">
            List your app on Dust and get discovered by thousands of AI agent users — then grow
            into a deeper partnership as your traction proves out.
          </P>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/technology-partners/register" variant="highlight" size="md" icon={RocketIcon}>
              List your app
            </Button>
            <Button href="#how-it-works" variant="outline" size="md">
              How it works
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────── Why partner — three pastel value props (no grey stats) ─────────── */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Be discoverable",
                desc: "Your logo lives inside the Dust app where users browse apps — and on the public marketplace.",
                bg: "bg-blue-50",
                accentText: "text-blue-700",
                badgeBg: "bg-blue-100",
                Icon: Users,
              },
              {
                title: "Plug & play",
                desc: "One MCP URL is all it takes. No deploys, no engineering on either side once your server is live.",
                bg: "bg-green-50",
                accentText: "text-green-700",
                badgeBg: "bg-green-100",
                Icon: TrendingUp,
              },
              {
                title: "Grow into a partnership",
                desc: "From listed to Alliance — a clear graduation path with shared upside as your traction proves out.",
                bg: "bg-golden-50",
                accentText: "text-golden-700",
                badgeBg: "bg-golden-100",
                Icon: Handshake,
              },
            ].map((v) => {
              const Icon = v.Icon;
              return (
                <div key={v.title} className={`rounded-3xl ${v.bg} p-7`}>
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${v.badgeBg} ${v.accentText}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`heading-mono-xl ${v.accentText}`}>{v.title}</h3>
                  <p className="copy-sm mt-2 text-foreground/80">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Build your app — moved ABOVE the tiers per Thibault feedback ─────────── */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <Code className="h-3 w-3 text-blue-500" />
              For developers
            </span>
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              Build your app on Dust
            </H2>
            <P size="md" className="text-muted-foreground">
              Everything you need to launch — from MCP basics to real examples and direct help.
            </P>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="MCP Documentation"
              color="blue"
              visual={<BookOpen className="h-20 w-20 text-blue-700" strokeWidth={1.2} />}
              features={[
                "MCP protocol fundamentals",
                "OAuth, DCR, and whitelisting flows",
                "Dust-specific extensions",
              ]}
              href="https://docs.dust.tt"
              ctaLabel="View docs"
            />
            <FeatureCard
              title="Build & test"
              color="green"
              visual={<Code className="h-20 w-20 text-green-700" strokeWidth={1.2} />}
              features={[
                "Quickstart templates",
                "Example integrations on GitHub",
                "Connect and test inside Dust",
              ]}
              href="https://github.com/dust-tt"
              ctaLabel="See examples"
            />
            <FeatureCard
              title="Get help"
              color="golden"
              visual={<MessageCircle className="h-20 w-20 text-golden-700" strokeWidth={1.2} />}
              features={[
                "Public Slack community",
                "Direct line to partners@dust.tt",
                "Co-build sessions with our team",
              ]}
              href="mailto:partners@dust.tt"
              ctaLabel="Contact us"
            />
          </div>
        </div>
      </section>

      {/* ─────────── Three tiers — compressed pricing-page cards + expand for full detail ─────────── */}
      <FullWidthSection className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 mx-auto max-w-3xl text-center">
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              The partner programme
            </H2>
            <P size="md" className="text-muted-foreground">
              Three tiers, one path. Tier 3 (Community) is the entry point — show
              traction and we move up to Tier 2 (Growth) and Tier 1 (Alliance) together.
            </P>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PUBLIC_TIERS.map((t, i) => {
              const Icon = t.icon;
              const isFeatured = i === 1; // Growth (middle) highlighted
              const isInvitationOnly = i === 0; // Alliance
              return (
                <div
                  key={t.name}
                  className="flex flex-col rounded-3xl border border-border bg-background p-7 transition-shadow hover:shadow-md"
                  style={{
                    borderColor: isFeatured ? t.accent : "var(--color-border)",
                    boxShadow: isFeatured ? `0 0 0 1px ${t.accent}40` : undefined,
                  }}
                >
                  {/* Header — tier badge + icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: t.bg, color: t.accent }}
                    >
                      Tier {i + 1}
                    </span>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: t.bg, color: t.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Name + tagline */}
                  <h3 className="heading-mono-2xl" style={{ color: t.accent }}>
                    {t.name}
                  </h3>
                  <p className="copy-sm mt-2 text-muted-foreground">{t.tagline}</p>

                  {/* Top 3 benefits only */}
                  <ul className="mt-5 space-y-2 flex-grow">
                    {t.partnerGets.slice(0, 3).map((g) => (
                      <li key={g} className="flex gap-2 text-sm leading-snug">
                        <Check
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: t.accent }}
                        />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-6">
                    <Button
                      href={
                        isInvitationOnly
                          ? "mailto:partners@dust.tt?subject=Alliance%20Partnership"
                          : "/technology-partners/register"
                      }
                      variant={isFeatured ? "highlight" : "outline"}
                      size="md"
                      className="w-full"
                    >
                      {isInvitationOnly
                        ? "Talk to the partner team"
                        : isFeatured
                          ? "Apply for Growth"
                          : "Start as Community"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expand for full detail */}
          <details className="group mt-8 rounded-2xl border border-border bg-background">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-muted/40">
              <span>See the full programme details</span>
              <span className="text-xs text-muted-foreground transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="border-t border-border p-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Tier</th>
                      <th className="pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Who it&apos;s for</th>
                      <th className="pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">How to qualify</th>
                      <th className="pb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Cadence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PUBLIC_TIERS.map((t, i) => (
                      <tr key={t.name} className="border-b border-border/60 last:border-0">
                        <td className="py-3 pr-4 align-top">
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Tier {i + 1}
                          </div>
                          <div className="mt-0.5 font-semibold" style={{ color: t.accent }}>
                            {t.name}
                          </div>
                        </td>
                        <td className="py-3 pr-4 align-top text-foreground/85">{t.who}</td>
                        <td className="py-3 pr-4 align-top text-foreground/85">{t.entry}</td>
                        <td className="py-3 align-top text-foreground/85">{t.cadence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </div>
      </FullWidthSection>

      {/* ─────────── How it works ─────────── */}
      <FullWidthSection id="how-it-works" className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="mb-12 mx-auto max-w-3xl text-center">
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              How it works
            </H2>
            <P size="md" className="text-muted-foreground">
              From a first conversation to a featured launch — together, step by step.
            </P>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Get in touch",
                desc: "Share your app's MCP server URL and a few details about your product.",
              },
              {
                step: "02",
                title: "QA",
                desc: "We test the integration end-to-end against real Dust agents.",
              },
              {
                step: "03",
                title: "List",
                desc: "Your logo goes live inside the Dust app and on the public marketplace. You're now Tier 3 (Community).",
              },
              {
                step: "04",
                title: "Grow",
                desc: "Show traction, and we go deeper — Tier 2 (Growth) and Tier 1 (Alliance).",
              },
            ].map((s) => (
              <div key={s.step} className="dust-card-flat">
                <div className="font-mono text-xs text-muted-foreground">{s.step}</div>
                <h3 className="heading-base mt-2">{s.title}</h3>
                <p className="copy-sm mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FullWidthSection>

      {/* ─────────── Final CTA (shared component, mirrors dust.tt) ─────────── */}
      <FinalCTASection
        config={{
          title: "Ready to be discovered by agent users?",
          subtitle: "Share your app and we'll take it from there.",
          primaryCTA: { label: "List your app", href: "/technology-partners/register" },
          secondaryCTA: { label: "Talk to the partner team", href: "mailto:partners@dust.tt" },
        }}
      />

      <SiteFooter />
    </div>
  );
}
