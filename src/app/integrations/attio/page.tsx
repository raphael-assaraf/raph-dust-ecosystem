import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, Pencil, Lock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
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
  "Search-records",
  "Get-records-by-ids",
  "List-attribute-definitions",
  "Search-notes-by-metadata",
  "Semantic-search-notes",
  "Get-note-body",
  "Search-meetings",
  "Search-call-recordings-by-metadata",
  "Semantic-search-call-recordings",
  "Get-call-recording",
  "Search-emails-by-metadata",
  "Semantic-search-emails",
  "Get-email-content",
  "List-workspace-members",
  "List-workspace-teams",
  "Whoami",
];

const WRITE_ACTIONS = [
  "Create-record",
  "Upsert-record",
  "Create-note",
  "Create-task",
  "Update-task",
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

      {/* ─────────── Hero (centered, matches dust.tt) ─────────── */}
      <section>
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
          {/* Logo above the headline */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background text-foreground">
            <AttioLogo className="h-8 w-8" />
          </div>

          <h1 className="heading-mono-4xl sm:heading-mono-5xl">
            AI Sales Assistant for Attio
          </h1>
          <p className="copy-lg mx-auto mt-6 max-w-2xl text-muted-foreground">
            Automate your Attio CRM workflows with AI agents. Update records, log activities,
            and get insights automatically.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="#" variant="primary" size="md" iconRight={ArrowRight}>
              Get started with Dust
            </Button>
            <Button href="#" variant="outline" size="md" iconRight={ArrowUpRight}>
              View documentation
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            Requires authorization to connect
          </div>
        </div>
      </section>

      {/* ─────────── What you can do ─────────── */}
      <section>
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <div className="mb-12 text-center">
            <h2 className="heading-mono-3xl">What you can do with Attio</h2>
            <p className="copy-base mt-4 text-muted-foreground">
              <span className="font-medium text-foreground">21 total actions</span> available
              <span> · 16 read · 5 write</span>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Read & Search */}
            <div className="rounded-2xl border border-border bg-background p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Search className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="heading-base">Read &amp; Search</h3>
                  <p className="copy-xs text-muted-foreground">
                    {READ_ACTIONS.length} actions
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {READ_ACTIONS.map((a) => (
                  <li key={a} className="copy-sm flex gap-2 text-foreground/80">
                    <span className="text-muted-foreground">·</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Create & Update */}
            <div className="rounded-2xl border border-border bg-background p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Pencil className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="heading-base">Create &amp; Update</h3>
                  <p className="copy-xs text-muted-foreground">
                    {WRITE_ACTIONS.length} actions
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {WRITE_ACTIONS.map((a) => (
                  <li key={a} className="copy-sm flex gap-2 text-foreground/80">
                    <span className="text-muted-foreground">·</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Other integrations ─────────── */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="heading-mono-2xl">Other integrations you might like</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {RELATED.map((r) => {
              const Logo = r.logo;
              return (
                <Link
                  key={r.name}
                  href="#"
                  className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-colors hover:border-blue-300"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                    <Logo className={`h-6 w-6 ${r.tint}`} />
                  </div>
                  <div className="heading-base">{r.name}</div>
                  <div className="copy-xs mt-0.5 text-muted-foreground">{r.category}</div>
                  <div className="copy-xs mt-4 inline-flex items-center gap-1 text-blue-600">
                    Learn more
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all integrations
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── Bottom CTA ─────────── */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="heading-mono-3xl sm:heading-mono-4xl">Get started with Attio</h2>
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
      </section>

      <SiteFooter />
    </div>
  );
}
