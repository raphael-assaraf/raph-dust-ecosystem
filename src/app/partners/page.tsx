import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  Handshake,
  Crown,
  Sparkles,
  Info,
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
            Draft of the Dust Partner Program. Specific examples are directional, not committed deliverables.
          </p>
        </div>
      </div>

      {/* ─────────── Hero ─────────── */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-blue-500" />
            Dust Partner Program
          </span>
          <H1
            mono
            className="mb-2 text-center text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Build, launch, and grow with Dust
          </H1>
          <P size="lg" className="mb-8 max-w-2xl text-muted-foreground">
            Any tool with an MCP server can become a one-click Dust integration. Get discovered by
            thousands of agent users — and grow into a deeper relationship as your traction proves
            out.
          </P>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/partners/register" variant="highlight" size="md" icon={RocketIcon}>
              Apply now
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
            { stat: "100+", label: "MCP integrations live on Dust" },
            { stat: "1 URL", label: "All it takes to ship an integration" },
            { stat: "4 tiers", label: "Clear graduation path with shared upside" },
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

      {/* ─────────── The four tiers ─────────── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 mx-auto max-w-3xl text-center">
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              Four tiers. One path.
            </H2>
            <P size="md" className="text-muted-foreground">
              Every partner starts in Community. The deeper your traction with Dust customers, the
              more we invest in your growth — together.
            </P>
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
                      <h3 className="heading-mono-xl mt-1" style={{ color: t.accent }}>
                        {t.name}
                      </h3>
                      <p className="copy-sm mt-1.5 text-muted-foreground">{t.tagline}</p>
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
              From submission to a featured launch — typically 1 to 3 weeks.
            </P>
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
                <h3 className="heading-base mt-2">{s.title}</h3>
                <p className="copy-sm mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <h4 className="heading-base">A note on how we invest engineering time</h4>
            <P size="xs" className="mt-2 text-muted-foreground">
              When Dust invests in building an MCP wrapper on behalf of a partner, we bump them
              into the <span className="text-foreground">Alliance</span> tier for a defined period
              — the GTM investment matches the engineering one. Where engineering effort is one-off,
              partners stay in their existing tier; we ship the integration but don&apos;t add a GTM
              motion. This keeps our investment aligned with mutual commitment.
            </P>
          </div>
        </div>
      </FullWidthSection>

      {/* ─────────── Final CTA (shared component, mirrors dust.tt) ─────────── */}
      <FinalCTASection
        config={{
          title: "Ready to be discovered by agent users?",
          subtitle: "Submit your MCP server and we'll take it from there.",
          primaryCTA: { label: "Apply now", href: "/partners/register" },
          secondaryCTA: { label: "Talk to the partner team", href: "mailto:partners@dust.tt" },
          trustText: "Most partners hear back within 3 business days.",
        }}
      />

      <SiteFooter />
    </div>
  );
}
