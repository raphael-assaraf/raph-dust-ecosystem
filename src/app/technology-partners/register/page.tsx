"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button, ContentMessage } from "@/components/ui";
import { H1, P } from "@/components/content";

/*
 * This page lives as the tech-partner-specific step inside the broader HubSpot
 * partner intake. Company basics (name, email, website, business model, etc.)
 * are already collected upstream, so we only ask for the tech-side details
 * that HubSpot won't have:
 *  - The app's logo (so we can list it on the marketplace)
 *  - MCP status + URL(s) + auth method (drives QA + listing)
 *  - Developer docs link
 *  - Optional: shared customers with Dust, alternate tech contact
 *
 * Everything is geared toward a SaaS founder / CTO / product lead, not a
 * marketing manager — no "amplify the launch" / "why partner" prompts.
 */

type FormState = {
  logoFileName: string;
  hasMcp: string; // "yes" | "building" | "no"
  mcpUrls: string; // one per line
  authMethod: string;
  docsUrl: string;
  sharedCustomers: string;
  altContactEmail: string;
};

const EMPTY: FormState = {
  logoFileName: "",
  hasMcp: "",
  mcpUrls: "",
  authMethod: "",
  docsUrl: "",
  sharedCustomers: "",
  altContactEmail: "",
};

const labelClass =
  "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5";
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
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  }

  const hasMcp = form.hasMcp === "yes" || form.hasMcp === "building";

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
              We&apos;ll be in touch.
            </P>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/technology-partners"
                variant="outline"
                size="md"
                icon={ArrowLeft}
              >
                Back to program
              </Button>
              <Button
                href="/integrations/attio"
                variant="highlight"
                size="md"
                iconRight={ArrowRight}
              >
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
            Back to technology partners
          </Link>
          <H1
            mono
            className="mt-4 text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            About your app
          </H1>
          <P size="md" className="mt-4 text-muted-foreground">
            The tech side. We&apos;ve got your basics from the previous step — this
            is just what we need to test and list your integration.
          </P>
        </div>
      </section>

      {/* ─────────── Form ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Logo */}
            <Field label="App logo (SVG preferred)">
              <label
                className={`flex cursor-pointer items-center justify-between rounded-md border border-dashed border-border bg-background px-3 py-3 text-sm transition-colors hover:border-[color:var(--color-dust-blue)] ${
                  form.logoFileName ? "border-solid" : ""
                }`}
              >
                <span className="text-muted-foreground">
                  {form.logoFileName ||
                    "Click to upload — SVG, PNG, or JPG up to 2 MB"}
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
                SVG keeps it crisp inside the Dust app and on the marketplace.
              </p>
            </Field>

            {/* MCP status — lead question */}
            <Field label="Do you have an MCP server?" required>
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

            {/* CONDITIONAL: MCP URLs + auth */}
            {hasMcp && (
              <>
                <Field label="MCP server URL(s)">
                  <textarea
                    rows={3}
                    value={form.mcpUrls}
                    onChange={(e) => update("mcpUrls", e.target.value)}
                    placeholder={"https://mcp.acme.com/mcp\nhttps://mcp-eu.acme.com/mcp"}
                    className={`${inputClass} font-mono text-xs`}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    One per line if you expose multiple (e.g. regional or
                    per-product MCPs). Leave blank if not live yet.
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
                    <option>
                      OAuth — pre-registered / static client (whitelisting required)
                    </option>
                    <option>OAuth — CIMD</option>
                    <option>Bearer token / API key per user</option>
                    <option>Not sure</option>
                  </select>
                </Field>
              </>
            )}

            {/* Docs URL */}
            <Field label="Developer documentation URL">
              <input
                type="url"
                value={form.docsUrl}
                onChange={(e) => update("docsUrl", e.target.value)}
                placeholder="https://docs.acme.com"
                className={inputClass}
              />
            </Field>

            {/* Shared customers */}
            <Field label="Customers you share with Dust">
              <input
                type="text"
                value={form.sharedCustomers}
                onChange={(e) => update("sharedCustomers", e.target.value)}
                placeholder="Optional — e.g. Andera Partners, Elaia, Partech"
                className={inputClass}
              />
            </Field>

            {/* Alt tech contact */}
            <Field label="Technical contact (if different from you)">
              <input
                type="email"
                value={form.altContactEmail}
                onChange={(e) => update("altContactEmail", e.target.value)}
                placeholder="Optional — engineer or solutions email"
                className={inputClass}
              />
            </Field>

            {/* CONDITIONAL: No-MCP — friendly note */}
            {form.hasMcp === "no" && (
              <ContentMessage
                variant="info"
                title="Today Dust integrates with third-party tools via MCP."
              >
                <P size="xs" className="text-blue-900">
                  We&apos;ll loop you in as we expand the integration surface
                  area — and we&apos;re happy to help you scope an MCP if that&apos;s
                  the right path.
                </P>
              </ContentMessage>
            )}

            {/* CONDITIONAL: whitelisting reference (only for partners with/building MCP) */}
            {hasMcp && (
              <ContentMessage
                variant="info"
                title="Need to whitelist Dust for OAuth?"
              >
                <P size="xs" className="mb-3 text-blue-900">
                  Same values for every partner. Path differs by flow — use{" "}
                  <span className="font-mono">/oauth/mcp/finalize</span> for DCR
                  and{" "}
                  <span className="font-mono">/oauth/mcp_static/finalize</span>{" "}
                  for pre-registered / static clients.
                </P>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="font-semibold text-blue-900">
                      OAuth — Dynamic Client Registration (DCR)
                    </div>
                    <ul className="mt-1 space-y-0.5 font-mono text-blue-950">
                      <li>
                        https://dust.tt/oauth/mcp/finalize{" "}
                        <span className="text-blue-900/70">(Global)</span>
                      </li>
                      <li>
                        https://app.dust.tt/oauth/mcp/finalize{" "}
                        <span className="text-blue-900/70">(Global)</span>
                      </li>
                      <li>
                        https://eu.dust.tt/oauth/mcp/finalize{" "}
                        <span className="text-blue-900/70">(EU)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">
                      OAuth — Static / pre-registered client
                    </div>
                    <ul className="mt-1 space-y-0.5 font-mono text-blue-950">
                      <li>
                        https://dust.tt/oauth/mcp_static/finalize{" "}
                        <span className="text-blue-900/70">(Global)</span>
                      </li>
                      <li>
                        https://app.dust.tt/oauth/mcp_static/finalize{" "}
                        <span className="text-blue-900/70">(Global)</span>
                      </li>
                      <li>
                        https://eu.dust.tt/oauth/mcp_static/finalize{" "}
                        <span className="text-blue-900/70">(EU)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2 border-t border-blue-200/60 pt-1">
                    <dt className="font-semibold text-blue-900">Client ID</dt>
                    <dd className="font-mono text-blue-950">dust</dd>
                  </div>
                </div>
              </ContentMessage>
            )}

            {/* SUBMIT */}
            <div className="flex flex-col items-start gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                By sending, you agree to be contacted about a potential
                partnership.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
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
        {required && (
          <span className="ml-1 text-[color:var(--color-dust-red)]">*</span>
        )}
      </label>
      {children}
    </div>
  );
}
