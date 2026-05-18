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
      "Featured in batched product release notes",
      "Opportunistic social / UGC features",
      "Eligibility for marketplace newsletter inclusion",
    ],
    dustGets: "Marketplace breadth, devrel surface area, retention moat.",
    cadence: "Async / batched",
  },
  {
    name: "Growth",
    tagline: "Warm rep-to-rep motion. Lightweight co-marketing.",
    icon: TrendingUp,
    accent: "#418B5C",
    bg: "#E8F5E9",
    who: "Community partners showing GTM traction with Dust customers.",
    entry: "Provide dev support assets + adoption signal (≥X customers installed or a customer story)",
    partnerGets: [
      "Dedicated Slack channel with the Dust team",
      "Crossbeam account mapping",
      "Targeted co-marketing — one customer story per year",
      "Warm rep-to-rep intros on shared deals",
    ],
    dustGets: "Mutual deal flow + lightweight co-marketing + vertical market validation.",
    cadence: "Monthly check-in",
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
      "Joint co-sell motion with shared business plan",
      "Themed launches, joint webinars and events",
      "Quarterly business reviews + champion mapping",
      "Deeper product roadmap collaboration",
    ],
    dustGets: "Predictable deal volume, named champion accounts, category presence.",
    cadence: "Monthly+ planning, quarterly QBR",
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
      "Executive sponsorship + custom commercial structure",
      "Engineering roadmap collaboration",
      "Bespoke launch surface, custom integration depth",
      "Tier prioritized alongside Dust's own product roadmap",
    ],
    dustGets: "Category-defining partnership outcomes.",
    cadence: "Continuous",
  },
];

export default function PartnersPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

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
                <div key={t.name} className="dust-card grid gap-6 md:grid-cols-[200px_1fr]">
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
