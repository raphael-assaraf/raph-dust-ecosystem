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
  { name: "HubSpot", category: "CRM", letter: "H", color: "#FE9C1A", bg: "#FFF1E0" },
  { name: "Salesforce", category: "CRM", letter: "S", color: "#1C91FF", bg: "#E9F7FF" },
  { name: "Salesloft", category: "Sales", letter: "S", color: "#418B5C", bg: "#E8F5E9" },
  { name: "Stripe", category: "Payments", letter: "S", color: "#D97AB0", bg: "#FBE8F1" },
];

export default function AttioIntegrationPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      {/* ─────────── Top nav ─────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-mono text-base font-semibold tracking-tight">
              Dust
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a className="hover:text-foreground transition-colors" href="#">Product</a>
              <a className="hover:text-foreground transition-colors" href="#">Solutions</a>
              <a className="hover:text-foreground transition-colors" href="#">Resources</a>
              <a className="hover:text-foreground transition-colors" href="#">Security</a>
              <a className="hover:text-foreground transition-colors" href="#">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <a className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:inline-block" href="#">
              Sign in
            </a>
            <a
              className="hidden rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--color-dust-blue)] sm:inline-block"
              href="#"
            >
              Contact sales
            </a>
            <a
              className="rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              href="#"
            >
              Try for free
            </a>
          </div>
        </div>
      </header>

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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-[#0F0F12] text-xl font-semibold text-white">
                A
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="dust-badge">
                    <Sparkles className="h-3 w-3 text-[color:var(--color-dust-blue)]" />
                    CRM
                  </span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="max-w-3xl">
              <h1 className="font-mono text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                AI Sales Assistant for{" "}
                <span className="kw-blue">Attio</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Automate your Attio CRM workflows with AI agents. Update records, log activities,
                and get insights automatically.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Get started with Dust
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--color-dust-blue)]"
              >
                View documentation
                <ArrowUpRight className="h-4 w-4" />
              </a>
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
            <h2 className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">
              What you can do with <span className="kw-blue">Attio</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">21 total actions</span> available
              <span className="text-muted-foreground"> · 16 read · 5 write</span>
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Read & Search */}
            <div className="dust-card flex flex-col">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9F7FF] text-[color:var(--color-dust-blue)]">
                    <Search className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-medium">Read &amp; Search</h3>
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {READ_ACTIONS.length} actions
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8F5E9] text-[color:var(--color-dust-green)]">
                    <Pencil className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-medium">Create &amp; Update</h3>
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {WRITE_ACTIONS.length} actions
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
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
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[color:var(--color-dust-green)]" />
                <div>
                  <h4 className="text-sm font-medium">{b.label}</h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">{b.desc}</p>
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
            <h2 className="font-mono text-2xl font-medium tracking-tight">
              Other integrations you might like
            </h2>
            <Link
              href="/integrations"
              className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors sm:inline-flex"
            >
              View all integrations
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {RELATED.map((r) => (
              <a
                key={r.name}
                href="#"
                className="dust-card flex items-center gap-3"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-semibold"
                  style={{ background: r.bg, color: r.color }}
                >
                  {r.letter}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.category}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Bottom CTA ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-border bg-muted px-8 py-14 text-center">
            <h2 className="font-mono text-3xl font-medium tracking-tight sm:text-4xl">
              Get started with <span className="kw-blue">Attio</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Connect Attio to Dust and let AI agents handle your workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--color-dust-blue)]"
              >
                Talk to sales
              </a>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── Footer ─────────── */}
      <footer className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-1">
              <div className="font-mono text-base font-semibold">Dust</div>
              <p className="mt-2 text-xs text-muted-foreground">
                AI agents for the enterprise.
              </p>
            </div>
            {[
              { title: "Product", items: ["Product", "Chrome Extension", "Pricing", "Security"] },
              {
                title: "Developers",
                items: ["Developer Platform", "Dust for Engineers", "Platform Documentation", "Github Repo"],
              },
              {
                title: "Company",
                items: ["About Us", "Jobs", "Brand resources", "Support", "Become a Partner"],
              },
              {
                title: "Connect",
                items: ["Slack Community", "X", "LinkedIn", "YouTube"],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a className="text-sm text-foreground/80 hover:text-foreground transition-colors" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <div>© Dust Tt SAS</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="hover:text-foreground transition-colors">Terms &amp; Policies</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Trust Center</a>
              <a href="#" className="hover:text-foreground transition-colors">Vulnerability Disclosure</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
