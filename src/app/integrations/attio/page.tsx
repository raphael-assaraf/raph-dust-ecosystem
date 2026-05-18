import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Pencil,
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button, Chip } from "@/components/ui";
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
  "search-records",
  "get-records-by-ids",
  "list-attribute-definitions",
  "search-notes-by-metadata",
  "semantic-search-notes",
  "get-note-body",
  "search-meetings",
  "search-call-recordings-by-metadata",
  "semantic-search-call-recordings",
  "get-call-recording",
  "search-emails-by-metadata",
  "semantic-search-emails",
  "get-email-content",
  "list-workspace-members",
  "list-workspace-teams",
  "whoami",
];

const WRITE_ACTIONS = [
  "create-record",
  "upsert-record",
  "create-note",
  "create-task",
  "update-task",
];

const RELATED = [
  { name: "HubSpot", category: "CRM", logo: HubspotLogo, tint: "text-[#FF7A59]" },
  { name: "Salesforce", category: "CRM", logo: SalesforceLogo, tint: "text-[#00A1E0]" },
  { name: "Salesloft", category: "Sales", logo: SalesloftLogo, tint: "text-foreground" },
  { name: "Stripe", category: "Payments", logo: StripeLogo, tint: "text-[#635BFF]" },
];

export default function AttioIntegrationPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-14">
          <div className="flex flex-col items-start gap-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Integrations</Link>
              <span>/</span>
              <span className="text-foreground">Attio</span>
            </div>

            {/* Logo + name row */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-foreground">
                <AttioLogo className="h-7 w-7" />
              </div>
              <div className="flex items-center gap-2">
                <Chip size="xs" color="highlight" icon={Sparkles}>
                  CRM
                </Chip>
              </div>
            </div>

            {/* Headline */}
            <div className="max-w-3xl">
              <h1 className="heading-mono-5xl">
                AI Sales Assistant for <span className="kw-blue">Attio</span>
              </h1>
              <p className="copy-lg mt-5 text-muted-foreground">
                Automate your Attio CRM workflows with AI agents. Update records, log activities,
                and get insights automatically.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button href="#" variant="primary" size="md" iconRight={ArrowRight}>
                Get started with Dust
              </Button>
              <Button href="#" variant="outline" size="md" iconRight={ArrowUpRight}>
                View documentation
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              Requires authorization to connect
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── What you can do ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-10">
            <h2 className="heading-mono-3xl">
              What you can do with <span className="kw-blue">Attio</span>
            </h2>
            <p className="copy-sm mt-3 text-muted-foreground">
              <span className="font-medium text-foreground">21 total actions</span> available
              <span> · 16 read · 5 write</span>
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Read & Search */}
            <div className="dust-card flex flex-col">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Search className="h-4 w-4" />
                  </div>
                  <h3 className="heading-base">Read &amp; Search</h3>
                </div>
                <span className="label-xs text-muted-foreground">
                  {READ_ACTIONS.length} actions
                </span>
              </div>
              <p className="copy-sm mb-4 text-muted-foreground">
                Pull live records, notes, meetings, calls and emails into agent context — and
                resolve identifiers across your workspace.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {READ_ACTIONS.map((a) => (
                  <span
                    key={a}
                    className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Create & Update */}
            <div className="dust-card flex flex-col">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-700">
                    <Pencil className="h-4 w-4" />
                  </div>
                  <h3 className="heading-base">Create &amp; Update</h3>
                </div>
                <span className="label-xs text-muted-foreground">
                  {WRITE_ACTIONS.length} actions
                </span>
              </div>
              <p className="copy-sm mb-4 text-muted-foreground">
                Let agents update CRM state — create or upsert records, log notes, manage tasks
                without context switching.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {WRITE_ACTIONS.map((a) => (
                  <span
                    key={a}
                    className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities row */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Per-user OAuth", desc: "Each agent action runs with the connected user's permissions." },
              { label: "Real-time data", desc: "No syncing or stale snapshots — every read hits Attio live." },
              { label: "SOC 2 Type II", desc: "Enterprise-grade security and audit-ready logs by default." },
            ].map((b) => (
              <div key={b.label} className="dust-card-flat flex gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <h4 className="label-sm">{b.label}</h4>
                  <p className="copy-xs mt-0.5 text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Related integrations ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="heading-mono-2xl">Other integrations you might like</h2>
            <Link
              href="/integrations"
              className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors sm:inline-flex"
            >
              View all integrations
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {RELATED.map((r) => {
              const Logo = r.logo;
              return (
                <a key={r.name} href="#" className="dust-card flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                    <Logo className={`h-6 w-6 ${r.tint}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="label-sm">{r.name}</div>
                    <div className="copy-xs text-muted-foreground">{r.category}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── Bottom CTA ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-border bg-muted px-8 py-14 text-center">
            <h2 className="heading-mono-4xl">
              Get started with <span className="kw-blue">Attio</span>
            </h2>
            <p className="copy-base mx-auto mt-4 max-w-xl text-muted-foreground">
              Connect Attio to Dust and let AI agents handle your workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="#" variant="primary" size="md" iconRight={ArrowRight}>
                Start free trial
              </Button>
              <Button href="#" variant="outline" size="md">
                Talk to sales
              </Button>
            </div>
            <p className="copy-xs mt-5 text-muted-foreground">
              14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
