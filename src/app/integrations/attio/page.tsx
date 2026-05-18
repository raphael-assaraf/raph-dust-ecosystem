import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Plus } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, H2, P } from "@/components/content";
import {
  RocketIcon,
  ExternalLinkIcon,
  EyeIcon,
  PencilSquareIcon,
  BarChartIcon,
} from "@/components/icons";
import { FinalCTASection } from "@/components/FinalCTASection";
import { AgentChatMockup, Citation, UseCaseGrid } from "@/components/marketing";
import {
  AttioLogo,
  HubspotLogo,
  SalesforceLogo,
  SalesloftLogo,
  StripeLogo,
} from "@/components/logos/platforms";

export const metadata: Metadata = {
  title: "AI Sales Assistant for Attio | Dust",
  description:
    "Connect Attio to Dust AI agents. Automate CRM tasks, update records, log activities, and get AI-powered sales insights. Start free trial.",
};

const READ_ACTIONS = [
  "Search records",
  "Get records by ids",
  "List attribute definitions",
  "Search notes by metadata",
  "Semantic search notes",
  "Get note body",
  "Search meetings",
  "Search call recordings by metadata",
  "Semantic search call recordings",
  "Get call recording",
  "Search emails by metadata",
  "Semantic search emails",
  "Get email content",
  "List workspace members",
  "List workspace teams",
  "Whoami",
];

const WRITE_ACTIONS = [
  "Create record",
  "Upsert record",
  "Create note",
  "Create task",
  "Update task",
];

const RELATED = [
  { name: "HubSpot", category: "crm", slug: "hubspot", logo: HubspotLogo, tint: "text-[#FF7A59]" },
  { name: "Salesforce", category: "crm", slug: "salesforce", logo: SalesforceLogo, tint: "text-[#00A1E0]" },
  { name: "Salesloft", category: "sales", slug: "salesloft", logo: SalesloftLogo, tint: "text-foreground" },
  { name: "Stripe", category: "payments", slug: "stripe", logo: StripeLogo, tint: "text-[#635BFF]" },
];

export default function AttioIntegrationPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero (centered, mirrors dust.tt's IntegrationHeroSection) ─────────── */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-muted">
            <AttioLogo className="h-8 w-8 text-foreground" />
          </div>

          <H1
            mono
            className="mb-2 text-center text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            AI Sales Assistant for Attio
          </H1>

          <P size="lg" className="mb-4 max-w-2xl text-muted-foreground">
            Automate your Attio CRM workflows with AI agents. Update records, log activities,
            and get insights automatically.
          </P>

          <P size="xs" className="mb-8 text-muted-foreground">
            Requires authorization to connect
          </P>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#" variant="highlight" size="md" icon={RocketIcon}>
              Get started with Dust
            </Button>
            <Button href="#" variant="outline" size="md" icon={ExternalLinkIcon}>
              View documentation
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────── Live demo (chat mockup) ─────────── */}
      <section className="bg-background pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <AgentChatMockup
            partner={{ name: "Attio", logo: AttioLogo, logoTint: "text-foreground" }}
            userPrompt="Give me a recap of our sales performance last week."
            toolCalls={[
              "search-records",
              "semantic-search-notes",
              "semantic-search-call-recordings",
              "search-meetings",
            ]}
            completedInSeconds={14}
            agentResponse={
              <>
                <p>Here&apos;s your sales recap for the past 7 days:</p>
                <div>
                  <p className="font-semibold text-foreground">New deals closed (3)</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-foreground/70">
                    <li>
                      Acme Corp — $42K Series A, signed Friday <Citation>1</Citation>
                    </li>
                    <li>
                      Northwind — $18K renewal closed Tuesday <Citation>2</Citation>
                    </li>
                    <li>
                      Globex — $24K expansion, multi-year <Citation>3</Citation>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Stalled accounts (2)</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-foreground/70">
                    <li>Pied Piper — no contact in 14 days</li>
                    <li>Initech — final approval pending since Monday</li>
                  </ul>
                </div>
                <p className="text-foreground/70">
                  Want me to draft follow-up tasks for the stalled accounts?
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* ─────────── Jobs to be done (3 use cases) ─────────── */}
      <section className="border-t border-border bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <H2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">
              What sales teams ask Dust to do with Attio
            </H2>
            <P size="sm" className="mt-3 text-muted-foreground">
              Three workflows your team can run from a single prompt — no clicking through tabs,
              no copy-pasting between tools.
            </P>
          </div>

          <UseCaseGrid
            useCases={[
              {
                icon: EyeIcon,
                color: "blue",
                title: "Pre-call account snapshot",
                description:
                  "Get a 360° view of any account in seconds — records, notes, recent calls, emails, and meetings, summarized for your next conversation.",
                tools: ["search-records", "semantic-search-notes", "get-call-recording"],
              },
              {
                icon: PencilSquareIcon,
                color: "green",
                title: "Capture activity automatically",
                description:
                  "After a meeting, ask Dust to log the call notes, create a follow-up task series, and update record fields — in one prompt.",
                tools: ["create-note", "create-task", "upsert-record"],
              },
              {
                icon: BarChartIcon,
                color: "golden",
                title: "Pipeline pulse & deal recap",
                description:
                  "Summarize won/lost deals, surface stalled accounts, and get the 'what changed this week' recap your team actually reads.",
                tools: ["search-records", "list-attribute-definitions"],
              },
            ]}
          />
        </div>
      </section>

      {/* ─────────── Tools (Read & Search / Create & Update) ─────────── */}
      <section className="py-12 md:py-16">
        <H2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
          What you can do with Attio
        </H2>
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Read Actions */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Read &amp; Search</h3>
              </div>
              <ul className="space-y-2">
                {READ_ACTIONS.map((tool) => (
                  <li key={tool} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Write Actions */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Plus className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Create &amp; Update</h3>
              </div>
              <ul className="space-y-2">
                {WRITE_ACTIONS.map((tool) => (
                  <li key={tool} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {READ_ACTIONS.length + WRITE_ACTIONS.length} total actions available (
            {READ_ACTIONS.length} read, {WRITE_ACTIONS.length} write)
          </p>
        </div>
      </section>

      {/* ─────────── Related integrations ─────────── */}
      <section className="py-12 md:py-16">
        <H2 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-3xl">
          Other integrations you might like
        </H2>

        <div className="mx-auto grid max-w-4xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED.map((r) => {
            const Logo = r.logo;
            return (
              <Link
                key={r.slug}
                href={`/integrations/${r.slug}`}
                className="group flex flex-col items-center rounded-2xl border border-border bg-background p-6 transition-all hover:border-green-200 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted">
                  <Logo className={`h-7 w-7 ${r.tint}`} />
                </div>
                <h3 className="mt-3 text-center text-sm font-semibold text-foreground">
                  {r.name}
                </h3>
                <span className="mt-1 text-xs capitalize text-muted-foreground">{r.category}</span>
                <span className="mt-3 flex items-center gap-1 text-xs font-medium text-green-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
          >
            View all integrations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─────────── Final CTA (shared component, mirrors dust.tt) ─────────── */}
      <FinalCTASection
        config={{
          title: "Get started with Attio",
          subtitle: "Connect Attio to Dust and let AI agents handle your workflows.",
          primaryCTA: { label: "Start free trial", href: "#" },
          secondaryCTA: { label: "Talk to sales", href: "#" },
          trustText: "14-day free trial. No credit card required.",
        }}
      />

      <SiteFooter />
    </div>
  );
}
