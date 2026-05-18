import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  Handshake,
  Crown,
  Sparkles,
  Lightbulb,
  Info,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
  ideas: string[];
};

const TIERS: Tier[] = [
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
    ideas: [
      "Featured slot in a Raphael-recorded 2-min demo video (part of the 30-day MCP series)",
      "Inclusion in a Dust-curated \"best of [category]\" round-up post",
      "Co-branded starter frame — a Dust template that uses their MCP, distributed to all users",
      "Logo placement on launch-day hero collateral or marketplace screenshots",
      "Founder cameo / quote in a Dust product release note",
      "Small Dust API credit grant for the partner's internal team to dogfood",
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
    cadence: "Recurring check-ins (e.g. monthly)",
    ideas: [
      "A custom Dust skill built for the partner's workflow — one well-defined agent template that chains their tools end-to-end and ships in Dust",
      "Co-authored playbook (e.g. \"How [partner]'s customers automate X with Dust\")",
      "Live demo slot at a Dust customer webinar or community event",
      "Founder ↔ founder content swap (interview, podcast, joint LinkedIn post)",
      "Inclusion in Dust's vertical starter pack (\"if you're a fintech, start with these 5 integrations\")",
      "Partner's employees get complimentary Dust Pro accounts (drives organic adoption)",
      "Joint POC kicked off with a mutual high-priority prospect",
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
    ideas: [
      "Joint annual planning offsite",
      "Embedded Dust SE working alongside the partner's enterprise team on select deals",
      "Featured breakout session at the partner's annual user conference (and vice versa)",
      "Custom partner-branded surface in Dust (e.g. dedicated landing or onboarding flow)",
      "Joint research / industry white paper",
      "Co-funded paid campaign budget for a target vertical or region",
      "Joint customer council — a handful of mutual customers meeting regularly",
      "Multi-quarter shared OKRs",
    ],
  },
  {
    name: "Strategic",
    tagline: "Bespoke partnership at the executive level.",
    icon: Crown,
    accent: "#D97AB0",
    bg: "#FBE8F1",
    who: "Top-down chosen by Dust — partners we intentionally build on, or those that don't fit the program model.",
    entry: "Not application-based",
    partnerGets: [
      "Executive sponsorship and custom commercial structure",
      "Engineering and product roadmap collaboration",
      "Bespoke launch surfaces and custom integration depth",
      "Treated as a peer initiative within Dust's product roadmap",
    ],
    dustGets: "Category-defining partnership outcomes.",
    cadence: "Continuous",
    ideas: [
      "Equity or convertible commercial relationship",
      "Co-developed new product surface (e.g. embedded Dust UI inside the partner's product, or vice versa)",
      "Reseller or OEM arrangement",
      "Exclusive period on a category of integrations",
      "Co-funded dedicated engineering FTE",
      "Joint go-to-market in a new geography",
      "Executive cross-pollination (board observer, advisor swap)",
    ],
  },
];

export default function PartnersPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Internal banner ─────────── */}
      <div className="border-b border-[color:var(--color-dust-golden)]/30 bg-[color:var(--color-dust-sunshine)]/40">
        <div className="mx-auto flex max-w-5xl items-start gap-3 px-6 py-3 text-xs sm:items-center">
          <Info className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-dust-golden)]" />
          <p className="text-foreground/80">
            <span className="font-medium text-foreground">Internal document.</span>{" "}
            Draft of the Dust Partner Program. Specific examples and the &quot;ideas to explore&quot; lists are directional, not committed deliverables.
          </p>
        </div>
      </div>

      {/* ─────────── Hero ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <span className="dust-badge">
            <Sparkles className="h-3 w-3 text-[color:var(--color-dust-blue)]" />
            Dust Partner Program
          </span>
          <h1 className="mt-6 font-mono text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Build, launch, and grow with <span className="kw-blue">Dust</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Any tool with an MCP server can become a one-click Dust integration. Get discovered by
            thousands of agent users — and grow into a deeper relationship as your traction proves out.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/partners/register"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Apply now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--color-dust-blue)]"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── Why partner ─────────── */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 md:grid-cols-3">
          {[
            { stat: "100+", label: "MCP integrations live on Dust" },
            { stat: "1 URL", label: "All it takes to ship an integration" },
            { stat: "4 tiers", label: "Clear graduation path with shared upside" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-3xl font-medium text-foreground">{s.stat}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── The four tiers ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-mono text-3xl font-medium tracking-tight">
              Four tiers. <span className="kw-blue">One path.</span>
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Every partner starts in Community. The deeper your traction with Dust customers,
              the more we invest in your growth — together.
            </p>
          </div>

          <div className="space-y-5">
            {TIERS.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.name} className="dust-card">
                  <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                    <div>
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ background: t.bg, color: t.accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Tier {i + 1}
                      </div>
                      <h3 className="mt-1 font-mono text-xl font-medium" style={{ color: t.accent }}>
                        {t.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{t.tagline}</p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Who
                        </div>
                        <p className="mt-1.5 text-sm">{t.who}</p>
                        <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          How to qualify
                        </div>
                        <p className="mt-1.5 text-sm">{t.entry}</p>
                        <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Cadence
                        </div>
                        <p className="mt-1.5 text-sm">{t.cadence}</p>
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          What you get
                        </div>
                        <ul className="mt-2 space-y-1.5">
                          {t.partnerGets.map((g) => (
                            <li key={g} className="flex gap-2 text-sm">
                              <Check
                                className="h-4 w-4 shrink-0 mt-0.5"
                                style={{ color: t.accent }}
                              />
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          What Dust gets
                        </div>
                        <p className="mt-1.5 text-sm text-muted-foreground">{t.dustGets}</p>
                      </div>
                    </div>
                  </div>

                  {/* Ideas to explore */}
                  <div
                    className="mt-6 rounded-xl border border-dashed border-border bg-muted/40 p-5"
                  >
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" style={{ color: t.accent }} />
                      <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Ideas to explore — open for brainstorm
                      </h4>
                    </div>
                    <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                      {t.ideas.map((idea) => (
                        <li key={idea} className="flex gap-2 text-sm text-foreground/80">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full"
                            style={{ background: t.accent }}
                          />
                          <span>{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── How it works ─────────── */}
      <section id="how-it-works" className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <h2 className="font-mono text-3xl font-medium tracking-tight">
              How it works
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              From submission to a featured launch — typically 1 to 3 weeks.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your MCP server URL and a few details about your product, team, and target customers.",
              },
              {
                step: "02",
                title: "QA",
                desc: "We test the integration end-to-end against real Dust agents. Aim: ~1 week for healthy MCPs.",
              },
              {
                step: "03",
                title: "List",
                desc: "Your logo goes live both inside the Dust app (where users install) and on dust.tt/integrations. You're now Community tier.",
              },
              {
                step: "04",
                title: "Grow",
                desc: "Show traction, and we graduate you into Growth, Alliance, and beyond.",
              },
            ].map((s) => (
              <div key={s.step} className="dust-card-flat">
                <div className="font-mono text-xs text-muted-foreground">{s.step}</div>
                <h3 className="mt-2 font-medium text-base">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <h4 className="font-medium text-sm">A note on how we invest engineering time</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              When Dust invests in building an MCP wrapper on behalf of a partner, we bump them
              into the <span className="text-foreground">Alliance</span> tier for a defined period
              — the GTM investment matches the engineering one. Where engineering effort is one-off,
              partners stay in their existing tier; we ship the integration but don't add a GTM
              motion. This keeps our investment aligned with mutual commitment.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── Bottom CTA ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-border bg-muted px-8 py-14 text-center">
            <h2 className="font-mono text-3xl font-medium tracking-tight sm:text-4xl">
              Ready to be discovered by agent users?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Submit your MCP server and we'll take it from there.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/partners/register"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:partners@dust.tt"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--color-dust-blue)]"
              >
                Talk to the partner team
              </a>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Most partners hear back within 3 business days.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
