import type { Metadata } from "next";
import {
  Check,
  Users,
  TrendingUp,
  Handshake,
  Crown,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, H2, P, FullWidthSection } from "@/components/content";
import {
  RocketIcon,
  SparklesIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  BookOpenIcon,
  CodeBlockIcon,
  ChatBubbleLeftRightIcon,
  BarChartIcon,
  UserIcon,
  UserGroupIcon,
} from "@/components/icons";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FeatureCard, DustDecoration } from "@/components/marketing";

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
    bg: "bg-blue-100",
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
    bg: "bg-green-100",
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
    bg: "bg-golden-100",
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
    bg: "bg-rose-100",
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

      {/* ─────────── Hero (left-aligned, dust.tt-style) ─────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:pb-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <SparklesIcon className="h-3 w-3 text-blue-500" />
            Dust App Partner Program
          </span>
          <H1 mono className="mb-4 text-foreground">
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

      {/* ─────────── Why partner — compact dust.tt-style cards (green/blue/rose) ─────────── */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-8 text-foreground">Why partner with Dust</H2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Be discoverable",
                desc: "Your logo lives inside the Dust app where users browse apps — and on the public marketplace.",
                bg: "bg-blue-50",
                iconColor: "text-blue-400",
                Icon: GlobeAltIcon,
              },
              {
                title: "Plug & play",
                desc: "One MCP URL is all it takes. No deploys, no engineering on either side once your server is live.",
                bg: "bg-green-50",
                iconColor: "text-green-400",
                Icon: SparklesIcon,
              },
              {
                title: "Grow together",
                desc: "From listed to Alliance — a clear graduation path with shared upside as traction proves out.",
                bg: "bg-rose-50",
                iconColor: "text-rose-400",
                Icon: HandThumbUpIcon,
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

      {/* ─────────── Build your app — left-aligned, compact, dust.tt-style ─────────── */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-2 text-foreground">Build your app on Dust</H2>
          <P size="md" className="mb-8 max-w-2xl text-muted-foreground">
            Everything you need to launch — MCP basics, real examples, direct help.
          </P>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "MCP Documentation",
                desc: "Protocol fundamentals, OAuth and whitelisting flows, Dust-specific extensions.",
                bg: "bg-blue-50",
                iconColor: "text-blue-400",
                Icon: BookOpenIcon,
                href: "https://docs.dust.tt",
                cta: "View docs",
              },
              {
                title: "Build & test",
                desc: "Quickstart templates, example integrations on GitHub, connect and test inside Dust.",
                bg: "bg-green-50",
                iconColor: "text-green-400",
                Icon: CodeBlockIcon,
                href: "https://github.com/dust-tt",
                cta: "See examples",
              },
              {
                title: "Get help",
                desc: "Public Slack community, direct line to partners@dust.tt, co-build sessions with our team.",
                bg: "bg-rose-50",
                iconColor: "text-rose-400",
                Icon: ChatBubbleLeftRightIcon,
                href: "mailto:partners@dust.tt",
                cta: "Contact us",
              },
            ].map((d) => {
              const Icon = d.Icon;
              return (
                <a
                  key={d.title}
                  href={d.href}
                  className={`group flex flex-col rounded-2xl p-6 ${d.bg} transition-all hover:translate-y-[-2px] hover:shadow-sm`}
                >
                  <Icon className={`mb-4 h-8 w-8 ${d.iconColor}`} />
                  <h4 className="text-lg font-semibold text-foreground">{d.title}</h4>
                  <p className="copy-base mt-1 flex-grow font-sans text-muted-foreground">{d.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                    {d.cta}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Three tiers — compact cards + expand for full detail ─────────── */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <H2 className="text-foreground">The partner program</H2>
            <P size="md" className="mt-2 max-w-2xl text-muted-foreground">
              Three tiers, one path. Community is the entry — show traction and we move up to Growth and Alliance together.
            </P>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PUBLIC_TIERS.map((t, i) => {
              const isInvitationOnly = i === 0; // Alliance — talk-to-team only
              return (
                <div
                  key={t.name}
                  className={`relative flex flex-col overflow-hidden rounded-2xl p-6 ${t.bg} transition-shadow hover:shadow-md`}
                >
                  {/* Dust brand decoration in corner */}
                  <DustDecoration position="top-right" size="sm" />

                  {/* Tier badge */}
                  <span
                    className="mb-3 inline-flex w-fit rounded-full bg-background/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: t.accent }}
                  >
                    Tier {i + 1}
                  </span>

                  <h4 className="text-lg font-semibold text-foreground">{t.name}</h4>
                  <p className="copy-base mt-1 font-sans text-muted-foreground">{t.tagline}</p>

                  {/* Top 3 benefits only */}
                  <ul className="mt-4 space-y-2 flex-grow">
                    {t.partnerGets.slice(0, 3).map((g) => (
                      <li key={g} className="flex gap-2 text-sm leading-snug text-foreground/85">
                        <Check
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: t.accent }}
                        />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA — same style for every tier */}
                  <div className="mt-5">
                    <Button
                      href={
                        isInvitationOnly
                          ? "mailto:partners@dust.tt?subject=Alliance%20Partnership"
                          : "/technology-partners/register"
                      }
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      {isInvitationOnly ? "Talk to the partner team" : "Get in touch"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expand for full detail */}
          <details className="group mt-6 rounded-2xl border border-border bg-background">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-muted/40">
              <span>See the full program details</span>
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
      </section>

      {/* ─────────── Partner stories — three real public Dust testimonials ─────────── */}
      {/* Quotes sourced from dust.tt's public homepage. Replace with partner-
          specific quotes (e.g. from Customer.io, Attio, Granola) once collected. */}
      <section className="bg-background py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <H2 className="mb-8 text-foreground">What partners say</H2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote: "We made a bet on Dust because we knew the team was exceptional. What we didn't expect was how quickly it would transform how we work. Dust became the connective tissue that amplifies what each team does best.",
                name: "Ryan Wang",
                role: "CEO, Assembled",
              },
              {
                quote: "Dust is the most impactful software we've adopted since building Clay.",
                name: "Everett Berry",
                role: "Clay",
              },
              {
                quote: "We used to do the work. Now we build the agents that do it.",
                name: "Shashank Khanna",
                role: "Vanta",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-background p-6"
              >
                <blockquote className="copy-sm flex-grow text-foreground/85">
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

      {/* ─────────── How it works ─────────── */}
      <FullWidthSection id="how-it-works" className="bg-muted py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <H2 className="mb-2 text-foreground">How it works</H2>
          <P size="md" className="mb-8 max-w-2xl text-muted-foreground">
            From a first conversation to a featured launch — together, step by step.
          </P>

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
