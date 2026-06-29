"use client";

import { useState } from "react";
import {
  TOP_UK,
  TOP_US,
  OTHERS,
  NO_MCP_TARGETS,
  VC_ECOSYSTEM,
  INSTALLED,
  INSTALL_HIGHLIGHTS,
  STATUS_LABEL,
  STATUS_COLOR,
  type Partner,
  type McpStatus,
} from "@/lib/mcpData";

function StatusBadge({ status }: { status: McpStatus }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium ${STATUS_COLOR[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(getText());
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          /* ignore */
        }
      }}
      className="rounded-md border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50"
    >
      {copied ? "Copied ✓" : "Copy table (TSV)"}
    </button>
  );
}

function headersFor(hasHook: boolean): string[] {
  return [
    "Company",
    "HQ",
    "Category",
    ...(hasHook ? ["UK hook"] : []),
    "MCP status",
    "Endpoint / how to connect",
    "Why it's a fit",
  ];
}

function partnersToTsv(partners: Partner[]): string {
  const hasHook = partners.some((p) => p.ukHook);
  const rows = partners.map((p) =>
    [
      p.company,
      p.hq,
      p.category,
      ...(hasHook ? [p.ukHook ?? ""] : []),
      STATUS_LABEL[p.status],
      p.endpoint,
      p.why,
    ].join("\t")
  );
  return [headersFor(hasHook).join("\t"), ...rows].join("\n");
}

function PartnerTable({
  id,
  title,
  subtitle,
  partners,
}: {
  id: string;
  title: string;
  subtitle?: string;
  partners: Partner[];
}) {
  const hasHook = partners.some((p) => p.ukHook);
  return (
    <section id={id} className="mb-14 scroll-mt-20">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 max-w-3xl text-sm text-zinc-500">{subtitle}</p>
          )}
        </div>
        <CopyButton getText={() => partnersToTsv(partners)} />
      </div>
      <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-50 text-left text-zinc-600">
              <th className="w-12 px-3 py-2 font-medium">#</th>
              {headersFor(hasHook).map((h) => (
                <th key={h} className="px-3 py-2 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {partners.map((p, i) => (
              <tr
                key={p.company}
                className="border-t border-zinc-100 align-top hover:bg-zinc-50/60"
              >
                <td className="px-3 py-3 text-zinc-400">{i + 1}</td>
                <td className="px-3 py-3 font-semibold text-zinc-900">
                  {p.company}
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-zinc-600">
                  {p.hq}
                </td>
                <td className="px-3 py-3 text-zinc-600">{p.category}</td>
                {hasHook && (
                  <td className="px-3 py-3 text-xs font-medium text-blue-800">
                    {p.ukHook ?? "—"}
                  </td>
                )}
                <td className="px-3 py-3">
                  <StatusBadge status={p.status} />
                </td>
                <td className="px-3 py-3 font-mono text-xs text-zinc-600">
                  {p.endpoint}
                </td>
                <td className="px-3 py-3 text-zinc-600">{p.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InstalledTable() {
  const tsv = [
    ["#", "MCP", "Workspaces", "Usage (calls)"].join("\t"),
    ...INSTALLED.map((m, i) =>
      [i + 1, m.name, m.workspaces, m.usage].join("\t")
    ),
  ].join("\n");
  return (
    <section id="installed" className="mb-14 scroll-mt-20">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            Customer-installed (but unlisted) MCPs — your usage data
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-zinc-500">
            Every tool here already has a <strong>working MCP in Dust</strong>{" "}
            (a customer wired it up), so it&apos;s proven demand. Sorted by # of
            workspaces. <em>Workspaces</em> = reach, <em>Usage</em> = tool-call
            volume (my read of your two columns).
          </p>
        </div>
        <CopyButton getText={() => tsv} />
      </div>

      <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50/60 p-4">
        <p className="mb-2 text-sm font-semibold text-blue-900">
          Notable partner signals in this data
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900/90">
          {INSTALL_HIGHLIGHTS.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-zinc-50 text-left text-zinc-600">
              <th className="w-12 px-3 py-2 font-medium">#</th>
              <th className="px-3 py-2 font-medium">MCP</th>
              <th className="px-3 py-2 font-medium">Workspaces</th>
              <th className="px-3 py-2 font-medium">Usage (calls)</th>
            </tr>
          </thead>
          <tbody>
            {INSTALLED.map((m, i) => (
              <tr
                key={`${m.name}-${i}`}
                className="border-t border-zinc-100 hover:bg-zinc-50/60"
              >
                <td className="px-3 py-1.5 text-zinc-400">{i + 1}</td>
                <td className="px-3 py-1.5 font-medium text-zinc-800">
                  {m.name}
                </td>
                <td className="px-3 py-1.5 text-zinc-600">{m.workspaces}</td>
                <td className="px-3 py-1.5 text-zinc-600">{m.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const NAV = [
  ["top-uk", "Top 10 · UK"],
  ["top-us", "Top 10 · US"],
  ["others", "Other candidates"],
  ["no-mcp", "No MCP yet"],
  ["vc", "VC ecosystem"],
  ["installed", "Installed in Dust"],
];

export default function McpPartnersPage() {
  return (
    <main className="h-[100dvh] overflow-y-auto bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 text-zinc-900">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Dust · MCP Partnerships
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          MCP partner shortlist — UK &amp; US
        </h1>
        <p className="mt-3 max-w-3xl text-zinc-600">
          Hype B2B-SaaS / GTM-tech and AI-native brands (scaling, not small)
          that have a usable MCP today, so Dust can integrate or co-market.
          Verified ~29 Jun 2026 — the MCP landscape moves weekly, so re-check
          endpoints &amp; auth at integration time. Hit{" "}
          <span className="font-medium">Copy table (TSV)</span> on any block to
          paste straight into Sheets/Notion.
        </p>

        <nav className="mt-5 flex flex-wrap gap-2">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-500">
          {(
            ["official", "beta", "in-dust", "community", "none"] as McpStatus[]
          ).map((s) => (
            <StatusBadge key={s} status={s} />
          ))}
        </div>
      </header>

      <PartnerTable
        id="top-uk"
        title="Top 10 — UK (relationship-anchored)"
        subtitle="UK-focused, not EU-generic. Each row earns its place via a concrete UK hook (shown): UK-HQ (Attio, Granola, ElevenLabs, Tessl), a UK-team pick (Fathom, Snowflake, Gong), or a tool your UK advocates already use (Clay, Vanta, Datadog — flagged 'Top UK Logo' in your contact sheet). Genuinely UK-HQ MCP tools are scarce, so the list leans on the team list + advocate relationships rather than padding with rootless EU names (those sit in 'other candidates' → Continental EU)."
        partners={TOP_UK}
      />

      <PartnerTable
        id="top-us"
        title="Top 10 — US"
        subtitle="GTM-tilted and hype-aligned, MCP live now. Customer.io added per your priority; Gong flagged as beta (rolling out)."
        partners={TOP_US}
      />

      <PartnerTable
        id="others"
        title="Other strong candidates"
        subtitle="Grouped: (1) other UK-relevant — UK-HQ, a UK advocate, or a team pick (Linear, n8n, Cognism, Contentsquare, Spendesk, Pennylane, Kyriba, Qonto); (2) US GTM/adjacent for the US push; (3) Continental EU — strong MCPs with no UK hook (Lovable, Mistral, Hugging Face, Typeform, Planhat, Modjo, Lemlist, Brevo…), kept for the EU motion, not the UK list."
        partners={OTHERS}
      />

      <PartnerTable
        id="no-mcp"
        title="Hot brands with no usable MCP yet"
        subtitle="Great logos to associate with, but API-only or MCP-client-only today → co-marketing or build-to-integrate targets, not plug-and-play. Worth outreach now to shape their roadmap."
        partners={NO_MCP_TARGETS}
      />

      <section id="vc" className="mb-14 scroll-mt-20">
        <h2 className="mb-1 text-xl font-semibold tracking-tight text-zinc-900">
          VC ecosystem — advocates, not MCP partners
        </h2>
        <p className="mb-3 max-w-3xl text-sm text-zinc-500">
          These don&apos;t have MCPs. Treat them as distribution / warm-intro
          leverage into the portfolios above, not integration targets.
        </p>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-50 text-left text-zinc-600">
                <th className="px-3 py-2 font-medium">Firm</th>
                <th className="px-3 py-2 font-medium">How to leverage</th>
              </tr>
            </thead>
            <tbody>
              {VC_ECOSYSTEM.map((v) => (
                <tr key={v.firm} className="border-t border-zinc-100">
                  <td className="px-3 py-3 font-semibold text-zinc-900">
                    {v.firm}
                  </td>
                  <td className="px-3 py-3 text-zinc-600">{v.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <InstalledTable />

      <footer className="border-t border-zinc-200 pt-6 text-xs text-zinc-400">
        Built for Dust MCP partnerships · data verified ~2026-06-29 · re-check
        MCP endpoints &amp; auth before publishing. Two disambiguation traps:
        GTM <strong>Clay</strong> ≠ clay.earth, and <strong>Apollo.io</strong> ≠
        Apollo GraphQL.
      </footer>
      </div>
    </main>
  );
}
