"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { ContentMessage } from "@/components/ui";
import { P } from "@/components/content";

/*
 * Tech-partner registration form fields. Used both as a real form on
 * /technology-partners/register (wrapped with SiteHeader + hero + SiteFooter)
 * and as a bare HubSpot reference page on /specs (no chrome). Manages its
 * own state and success view so the wrapping pages stay minimal.
 *
 * Field order is the spec source-of-truth for the HubSpot form Lilibeth
 * builds out: lead with the MCP question, drop the logo to the bottom.
 */

type FormState = {
  hasMcp: string; // "yes" | "building" | "no"
  mcpUrls: string;
  authMethod: string;
  docsUrl: string;
  sharedCustomers: string;
  altContactEmail: string;
  logoFileName: string;
};

const EMPTY: FormState = {
  hasMcp: "",
  mcpUrls: "",
  authMethod: "",
  docsUrl: "",
  sharedCustomers: "",
  altContactEmail: "",
  logoFileName: "",
};

const labelClass =
  "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1.5";
const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-dust-blue)]/30 focus:border-[color:var(--color-dust-blue)] transition-colors";

interface RegisterFormProps {
  /** Hide the intro callout at the top (used on /specs). */
  hideIntro?: boolean;
}

export function RegisterForm({ hideIntro = false }: RegisterFormProps) {
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
      <div className="mx-auto max-w-md text-center py-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F5E9] text-[color:var(--color-dust-green)]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-6 font-mono text-2xl font-medium text-foreground">
          Thanks — we&apos;ve got your info
        </h2>
        <P size="md" className="mt-4 text-muted-foreground">
          We&apos;ll be in touch.
        </P>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Intro — one-liner about what this form is for */}
      {!hideIntro && (
        <p className="text-sm text-muted-foreground">
          Fill this form to get your app listed on our app store. We&apos;ll
          reach out to discuss go-to-market opportunities.
        </p>
      )}

      {/* Lead question — MCP status */}
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
              placeholder={
                "https://mcp.acme.com/mcp\nhttps://mcp-eu.acme.com/mcp"
              }
              className={`${inputClass} font-mono text-xs`}
            />
            <p className="mt-1 text-xs text-muted-foreground">
              One URL per line if you expose more than one.
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
        <p className="mt-1 text-xs text-muted-foreground">
          Helps our team get up to speed faster.
        </p>
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
        <p className="mt-1 text-xs text-muted-foreground">
          Optional. Helps us route the partnership.
        </p>
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

      {/* Logo — moved to the bottom per spec direction */}
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
          Needed to list you in the Dust app and on the marketplace.
        </p>
      </Field>

      {/* CONDITIONAL: No-MCP — friendly note */}
      {form.hasMcp === "no" && (
        <ContentMessage
          variant="info"
          title="Today Dust integrates with third-party tools via MCP."
        >
          <P size="xs" className="text-blue-900">
            We&apos;ll loop you in as we expand the integration surface area —
            and we&apos;re happy to help you scope an MCP if that&apos;s the
            right path.
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
            <span className="font-mono">/oauth/mcp/finalize</span> for DCR and{" "}
            <span className="font-mono">/oauth/mcp_static/finalize</span> for
            pre-registered / static clients.
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
          By sending, you agree to be contacted about a potential partnership.
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
