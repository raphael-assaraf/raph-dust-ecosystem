import type { Metadata } from "next";
import {
  Check,
  Users,
  TrendingUp,
  Handshake,
  Crown,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, H2, P, FullWidthSection } from "@/components/content";
import { RocketIcon } from "@/components/icons";
import { FinalCTASection } from "@/components/FinalCTASection";

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
 * PUBLIC_TIERS — rendered on the page.
 * INTERNAL_TIERS — kept in code as operational reference (Alliance / Strategic).
 * Per 2026-06-01 huddle: Strategic and Alliance are operational reality but
 * NOT exposed to external prospects. Public surface is Tier 1 + Tier 2 only.
 */
const PUBLIC_TIERS: Tier[] = [
  {
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
  },
  {
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
  },
  {
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
  },
];

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
            <Button href="/partners/register" variant="highlight" size="md" icon={RocketIcon}>
              List your app
            </Button>
            <Button href="#how-it-works" variant="outline" size="md">
              How it works
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────── Why partner ─────────── */}
      <FullWidthSection className="bg-muted py-12 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 py-8 md:grid-cols-3">
          {[
            { stat: "100+", label: "Apps live on Dust" },
            { stat: "1 URL", label: "All it takes to list yours" },
            { stat: "Built for", label: "AI agents, end-to-end" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="heading-mono-3xl text-foreground">{s.stat}</div>
              <P size="xs" className="mt-2 text-muted-foreground">
                {s.label}
              </P>
            </div>
          ))}
        </div>
      </FullWidthSection>

      {/* ─────────── Two tiers — pricing-page treatment ─────────── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 mx-auto max-w-3xl text-center">
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              Three tiers. One path.
            </H2>
            <P size="md" className="text-muted-foreground">
              Every partner starts as Community. Show traction, and we go deeper together.
            </P>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PUBLIC_TIERS.map((t, i) => {
              const Icon = t.icon;
              const isFeatured = i === 1; // Growth gets the highlighted middle treatment
              return (
                <div
                  key={t.name}
                  className="relative flex flex-col overflow-hidden rounded-3xl border bg-background p-8 transition-shadow hover:shadow-md"
                  style={{
                    borderColor: isFeatured ? t.accent : "var(--color-border)",
                    boxShadow: isFeatured ? `0 0 0 1px ${t.accent}40` : undefined,
                  }}
                >
                  {/* Top tint band */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-32"
                    style={{
                      background: `linear-gradient(to bottom, ${t.bg}, transparent)`,
                    }}
                  />

                  <div className="relative">
                    {/* Tier number + icon row */}
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

                    <h3
                      className="heading-mono-2xl"
                      style={{ color: t.accent }}
                    >
                      {t.name}
                    </h3>
                    <p className="copy-sm mt-2 text-muted-foreground">{t.tagline}</p>

                    {/* How to qualify */}
                    <div className="mt-6 rounded-xl bg-muted/60 px-4 py-3">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        How to qualify
                      </div>
                      <p className="mt-1 text-sm text-foreground">{t.entry}</p>
                    </div>

                    {/* What you get */}
                    <div className="mt-6">
                      <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        What you get
                      </div>
                      <ul className="space-y-2.5">
                        {t.partnerGets.map((g) => (
                          <li key={g} className="flex gap-2.5 text-sm leading-snug">
                            <Check
                              className="h-4 w-4 shrink-0 mt-0.5"
                              style={{ color: t.accent }}
                            />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA at the bottom */}
                  <div className="relative mt-8 pt-2">
                    <Button
                      href="/partners/register"
                      variant={isFeatured ? "highlight" : "outline"}
                      size="md"
                      className="w-full"
                    >
                      {i === 0
                        ? "Start as Community"
                        : i === 1
                          ? "Apply for Growth"
                          : "Talk to the partner team"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
                desc: "Your logo goes live inside the Dust app and on the public marketplace.",
              },
              {
                step: "04",
                title: "Grow",
                desc: "Show traction, and we go deeper together — Growth, Alliance, and beyond.",
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
          primaryCTA: { label: "List your app", href: "/partners/register" },
          secondaryCTA: { label: "Talk to the partner team", href: "mailto:partners@dust.tt" },
        }}
      />

      <SiteFooter />
    </div>
  );
}
