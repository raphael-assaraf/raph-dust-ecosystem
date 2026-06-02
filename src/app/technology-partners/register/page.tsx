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
  logoFileName: string;
  // Product / Tech
  hasMcp: string; // "yes" | "building" | "no" — drives conditional rendering
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
  logoFileName: "",
  hasMcp: "",
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
              Thanks — we&apos;ve got your info
            </H1>
            <P size="md" className="mt-4 text-muted-foreground">
              Thanks{form.partnerName ? `, ${form.partnerName.split(" ")[0]}` : ""} — we got{" "}
              <span className="text-foreground">{form.companyName || "your"}</span> details.
              We&apos;ll be in touch.
            </P>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/technology-partners" variant="outline" size="md" icon={ArrowLeft}>
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
            href="/technology-partners"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to partner program
          </Link>
          <H1
            mono
            className="mt-4 text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Register my integration
          </H1>
          <P size="md" className="mt-4 text-muted-foreground">
            Tell us about your product. If you have an MCP server, we&apos;ll list
            your integration in the Dust app — if not, we&apos;ll loop you in as we
            expand integration shapes.
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

              <Field label="Company logo (SVG preferred)">
                <label
                  className={`flex cursor-pointer items-center justify-between rounded-md border border-dashed border-border bg-background px-3 py-3 text-sm transition-colors hover:border-[color:var(--color-dust-blue)] ${
                    form.logoFileName ? "border-solid" : ""
                  }`}
                >
                  <span className="text-muted-foreground">
                    {form.logoFileName || "Click to upload — SVG, PNG, or JPG up to 2 MB"}
                  </span>
                  {form.logoFileName ? (
                    <span className="rounded-md bg-[#E8F5E9] px-2 py-0.5 text-xs font-medium text-[color:var(--color-dust-green)]">
                      Selected
                    </span>
                  ) : (
                    <span className="rounded-md border border-border px-2 py-0.5 text-xs font-medium text-foreground">
                      Choose file
                    </span>
                  )}
                  <input
                    type="file"
                    accept=".svg,image/svg+xml,image/png,image/jpeg"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      update("logoFileName", f ? f.name : "");
                    }}
                    className="sr-only"
                  />
                </label>
                <p className="mt-1 text-xs text-muted-foreground">
                  SVG keeps the logo crisp at every size on the marketplace.
                </p>
              </Field>
            </FormSection>

            {/* PRODUCT / TECH */}
            <FormSection
              number="02"
              title="Your integration"
              subtitle="Lead question first, the rest reveals itself."
            >
              <Field label="Do you have an existing MCP server?" required>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "yes", label: "Yes — it's live" },
                    { value: "building", label: "Building one now" },
                    { value: "no", label: "Not yet — exploring" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`cursor-pointer rounded-md border px-3 py-2 text-sm transition-colors ${
                        form.hasMcp === opt.value
                          ? "border-[color:var(--color-dust-blue)] bg-[#E9F7FF] text-[color:var(--color-dust-blue)] font-medium"
                          : "border-border text-foreground hover:border-[color:var(--color-dust-blue)]/60"
                      }`}
                    >
                      <input
                        type="radio"
                        name="hasMcp"
                        value={opt.value}
                        checked={form.hasMcp === opt.value}
                        onChange={(e) => update("hasMcp", e.target.value)}
                        className="sr-only"
                        required
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </Field>

              {/* CONDITIONAL: MCP technical fields appear only when MCP exists / is being built */}
              {(form.hasMcp === "yes" || form.hasMcp === "building") && (
                <>
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
                </>
              )}

              {/* CONDITIONAL: If no MCP yet, prompt for the integration shape they DO want */}
              {form.hasMcp === "no" && (
                <ContentMessage
                  variant="info"
                  title="Got it — today Dust integrates with third-party tools through MCP servers."
                >
                  <P size="xs" className="text-blue-900">
                    Tell us what you&apos;d need below and we&apos;ll loop you in as we expand
                    the integration surface area.
                  </P>
                </ContentMessage>
              )}

              <Field label="Looking for an integration shape we don't yet support?">
                <textarea
                  rows={2}
                  value={form.nonMcpInterest}
                  onChange={(e) => update("nonMcpInterest", e.target.value)}
                  placeholder="Optional — e.g. native iframe embed, OEM / white-label, in-product surface, webhook bridge…"
                  className={inputClass}
                />
              </Field>

              {/* CONTACTS — always required */}
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

              {(form.hasMcp === "yes" || form.hasMcp === "building") && (
              <ContentMessage
                variant="info"
                title="Need to whitelist Dust for OAuth?"
              >
                <P size="xs" className="mb-3 text-blue-900">
                  Same values for every partner. The path differs by flow — use{" "}
                  <span className="font-mono">/oauth/mcp/finalize</span> for DCR and{" "}
                  <span className="font-mono">/oauth/mcp_static/finalize</span> for
                  pre-registered (static) clients.
                </P>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="font-semibold text-blue-900">OAuth — Dynamic Client Registration (DCR)</div>
                    <ul className="mt-1 space-y-0.5 font-mono text-blue-950">
                      <li>https://dust.tt/oauth/mcp/finalize <span className="text-blue-900/70">(Global)</span></li>
                      <li>https://app.dust.tt/oauth/mcp/finalize <span className="text-blue-900/70">(Global)</span></li>
                      <li>https://eu.dust.tt/oauth/mcp/finalize <span className="text-blue-900/70">(EU)</span></li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">OAuth — Static / pre-registered client</div>
                    <ul className="mt-1 space-y-0.5 font-mono text-blue-950">
                      <li>https://dust.tt/oauth/mcp_static/finalize <span className="text-blue-900/70">(Global)</span></li>
                      <li>https://app.dust.tt/oauth/mcp_static/finalize <span className="text-blue-900/70">(Global)</span></li>
                      <li>https://eu.dust.tt/oauth/mcp_static/finalize <span className="text-blue-900/70">(EU)</span></li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2 pt-1 border-t border-blue-200/60">
                    <dt className="font-semibold text-blue-900">Client ID</dt>
                    <dd className="font-mono text-blue-950">dust</dd>
                  </div>
                </div>
              </ContentMessage>
              )}
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
                By sending, you agree to be contacted about a potential partnership. We don&apos;t
                share your info with third parties.
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
                {submitting ? "Sending…" : "Get in touch"}
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
