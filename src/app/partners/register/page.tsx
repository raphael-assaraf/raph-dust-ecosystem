"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button, ContentMessage } from "@/components/ui";
import { H1, P } from "@/components/content";

type FormState = {
  // Company
  companyName: string;
  website: string;
  oneLiner: string;
  category: string;
  targetSegment: string;
  // Product / Tech
  mcpStatus: string;
  mcpUrl: string;
  authMethod: string;
  docsUrl: string;
  techContactName: string;
  techContactEmail: string;
  nonMcpInterest: string;
  // Partnership
  partnerName: string;
  partnerEmail: string;
  partnerLinkedIn: string;
  sharedCustomers: string;
  whyDust: string;
  amplifyLaunch: string;
};

const EMPTY: FormState = {
  companyName: "",
  website: "",
  oneLiner: "",
  category: "",
  targetSegment: "",
  mcpStatus: "",
  mcpUrl: "",
  authMethod: "",
  docsUrl: "",
  techContactName: "",
  techContactEmail: "",
  nonMcpInterest: "",
  partnerName: "",
  partnerEmail: "",
  partnerLinkedIn: "",
  sharedCustomers: "",
  whyDust: "",
  amplifyLaunch: "",
};

const labelClass = "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5";
const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-dust-blue)]/30 focus:border-[color:var(--color-dust-blue)] transition-colors";

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Stub: in production this POSTs to a partner-intake endpoint.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="h-dvh overflow-y-auto bg-background text-foreground">
        <SiteHeader />
        <section className="border-b border-border">
          <div className="mx-auto max-w-2xl px-6 py-32 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F5E9] text-[color:var(--color-dust-green)]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <H1
              mono
              className="mt-6 text-center text-3xl font-medium text-foreground md:text-4xl"
            >
              Application received
            </H1>
            <P size="md" className="mt-4 text-muted-foreground">
              Thanks{form.partnerName ? `, ${form.partnerName.split(" ")[0]}` : ""} — we got{" "}
              <span className="text-foreground">{form.companyName || "your"}</span> details. Our
              partner team will run a quick QA pass on the MCP and follow up within 3 business
              days.
            </P>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/partners" variant="outline" size="md" icon={ArrowLeft}>
                Back to program
              </Button>
              <Button href="/integrations/attio" variant="highlight" size="md" iconRight={ArrowRight}>
                Browse integrations
              </Button>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-10">
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to partner program
          </Link>
          <H1
            mono
            className="mt-4 text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Apply to the Dust Partner Program
          </H1>
          <P size="md" className="mt-4 text-muted-foreground">
            Tell us about your product and your MCP. We&apos;ll review and reach out within 3
            business days. You&apos;ll start in Community tier — graduation paths are visible from
            day one.
          </P>
        </div>
      </section>

      {/* ─────────── Form ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* COMPANY */}
            <FormSection
              number="01"
              title="About your company"
              subtitle="The basics so we can list you correctly."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Company name" required>
                  <input
                    required
                    type="text"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </Field>
                <Field label="Website" required>
                  <input
                    required
                    type="url"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    placeholder="https://acme.com"
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="One-line product description" required>
                <input
                  required
                  type="text"
                  value={form.oneLiner}
                  onChange={(e) => update("oneLiner", e.target.value)}
                  placeholder="e.g. CRM purpose-built for fast-growing GTM teams."
                  className={inputClass}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Category" required>
                  <select
                    required
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    <option>CRM &amp; Sales</option>
                    <option>Productivity</option>
                    <option>Data &amp; Analytics</option>
                    <option>Recruiting &amp; HR</option>
                    <option>Development</option>
                    <option>Support</option>
                    <option>Email</option>
                    <option>Calendar</option>
                    <option>Storage</option>
                    <option>Meeting Transcripts</option>
                    <option>Communication</option>
                    <option>Security</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Primary target customer" required>
                  <select
                    required
                    value={form.targetSegment}
                    onChange={(e) => update("targetSegment", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    <option>B2B SaaS — Go-to-market teams</option>
                    <option>Funds &amp; Investment firms</option>
                    <option>Consulting firms</option>
                    <option>Enterprise (1k+ employees)</option>
                    <option>SMB / Mid-market</option>
                    <option>Developers</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>
            </FormSection>

            {/* PRODUCT / TECH */}
            <FormSection
              number="02"
              title="Your MCP"
              subtitle="The technical bits we need to test and list the integration."
            >
              <Field label="MCP server status" required>
                <select
                  required
                  value={form.mcpStatus}
                  onChange={(e) => update("mcpStatus", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select…</option>
                  <option>Live and publicly accessible</option>
                  <option>Live but private / requires whitelisting</option>
                  <option>In development — shipping soon</option>
                  <option>Not yet — interested in building</option>
                </select>
              </Field>
              <Field label="MCP server URL">
                <input
                  type="url"
                  value={form.mcpUrl}
                  onChange={(e) => update("mcpUrl", e.target.value)}
                  placeholder="https://mcp.acme.com/mcp"
                  className={inputClass}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Leave blank if not yet live.
                </p>
              </Field>
              <Field label="Authentication method" required>
                <select
                  required
                  value={form.authMethod}
                  onChange={(e) => update("authMethod", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select…</option>
                  <option>OAuth — Dynamic Client Registration (DCR)</option>
                  <option>OAuth — pre-registered client (whitelisting required)</option>
                  <option>OAuth — CIMD</option>
                  <option>Basic auth / API key per user</option>
                  <option>Not sure</option>
                </select>
              </Field>
              <Field label="Developer documentation URL">
                <input
                  type="url"
                  value={form.docsUrl}
                  onChange={(e) => update("docsUrl", e.target.value)}
                  placeholder="https://docs.acme.com/mcp"
                  className={inputClass}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Technical contact name" required>
                  <input
                    required
                    type="text"
                    value={form.techContactName}
                    onChange={(e) => update("techContactName", e.target.value)}
                    placeholder="Jane Engineer"
                    className={inputClass}
                  />
                </Field>
                <Field label="Technical contact email" required>
                  <input
                    required
                    type="email"
                    value={form.techContactEmail}
                    onChange={(e) => update("techContactEmail", e.target.value)}
                    placeholder="jane@acme.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <ContentMessage
                variant="info"
                title="Today, Dust integrates with third-party tools exclusively through MCP servers."
              >
                <P size="xs" className="text-blue-900">
                  If you don&apos;t have an MCP yet, our team will scope one with you — most
                  partners go from zero to listed in under a week. If you&apos;re looking for a
                  different integration shape (native iframe, OEM/embed, webhook bridge,
                  in-product surface…), tell us below and we&apos;ll loop you in as we expand
                  the surface area.
                </P>
              </ContentMessage>

              <Field label="Looking for an integration shape we don't yet support?">
                <textarea
                  rows={2}
                  value={form.nonMcpInterest}
                  onChange={(e) => update("nonMcpInterest", e.target.value)}
                  placeholder="Optional — e.g. native iframe embed, OEM / white-label, in-product surface, webhook bridge…"
                  className={inputClass}
                />
              </Field>

              <ContentMessage
                variant="info"
                title="Need to whitelist Dust for OAuth pre-registration?"
              >
                <P size="xs" className="mb-3 text-blue-900">
                  These values are the same for every partner — no need to email us. Add them
                  to your OAuth client allowlist:
                </P>
                <dl className="space-y-1.5 text-xs">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="font-medium text-blue-900">Redirect URI (global)</dt>
                    <dd className="font-mono text-blue-950">
                      https://dust.tt/oauth/mcp/finalize
                    </dd>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="font-medium text-blue-900">Redirect URI (EU)</dt>
                    <dd className="font-mono text-blue-950">
                      https://eu.dust.tt/oauth/mcp/finalize
                    </dd>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="font-medium text-blue-900">Client ID</dt>
                    <dd className="font-mono text-blue-950">dust</dd>
                  </div>
                </dl>
              </ContentMessage>
            </FormSection>

            {/* PARTNERSHIP */}
            <FormSection
              number="03"
              title="Partnership signal"
              subtitle="Helps us route you to the right tier and team."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Partnership lead name" required>
                  <input
                    required
                    type="text"
                    value={form.partnerName}
                    onChange={(e) => update("partnerName", e.target.value)}
                    placeholder="Chris Partner"
                    className={inputClass}
                  />
                </Field>
                <Field label="Partnership lead email" required>
                  <input
                    required
                    type="email"
                    value={form.partnerEmail}
                    onChange={(e) => update("partnerEmail", e.target.value)}
                    placeholder="chris@acme.com"
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="LinkedIn (optional)">
                <input
                  type="url"
                  value={form.partnerLinkedIn}
                  onChange={(e) => update("partnerLinkedIn", e.target.value)}
                  placeholder="https://linkedin.com/in/…"
                  className={inputClass}
                />
              </Field>
              <Field label="Customers you share (or believe you share) with Dust">
                <input
                  type="text"
                  value={form.sharedCustomers}
                  onChange={(e) => update("sharedCustomers", e.target.value)}
                  placeholder="e.g. Andera Partners, Elaia, Partech"
                  className={inputClass}
                />
              </Field>
              <Field label="Why partner with Dust?" required>
                <textarea
                  required
                  rows={3}
                  value={form.whyDust}
                  onChange={(e) => update("whyDust", e.target.value)}
                  placeholder="Tell us briefly — customer demand, GTM fit, joint vision…"
                  className={inputClass}
                />
              </Field>
              <Field label="Willing to amplify our upcoming marketplace launch?" required>
                <div className="flex flex-wrap gap-2">
                  {["Yes — happy to co-promote", "Maybe — depends on timing", "No"].map((opt) => (
                    <label
                      key={opt}
                      className={`cursor-pointer rounded-md border px-3 py-2 text-sm transition-colors ${
                        form.amplifyLaunch === opt
                          ? "border-[color:var(--color-dust-blue)] bg-[#E9F7FF] text-[color:var(--color-dust-blue)] font-medium"
                          : "border-border text-foreground hover:border-[color:var(--color-dust-blue)]/60"
                      }`}
                    >
                      <input
                        type="radio"
                        name="amplify"
                        value={opt}
                        checked={form.amplifyLaunch === opt}
                        onChange={(e) => update("amplifyLaunch", e.target.value)}
                        className="sr-only"
                        required
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </Field>
            </FormSection>

            {/* SUBMIT */}
            <div className="flex flex-col items-start gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your application. We don't share
                your info with third parties.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                variant="highlight"
                size="md"
                icon={submitting ? Loader2 : undefined}
                iconRight={submitting ? undefined : ArrowRight}
                className={submitting ? "[&_svg]:animate-spin" : ""}
              >
                {submitting ? "Submitting…" : "Submit application"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FormSection({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex items-baseline gap-3">
        <span className="font-mono text-xs text-muted-foreground">{number}</span>
        <div>
          <h2 className="font-mono text-xl font-medium tracking-tight">{title}</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="ml-1 text-[color:var(--color-dust-red)]">*</span>}
      </label>
      {children}
    </div>
  );
}
