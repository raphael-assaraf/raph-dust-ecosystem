import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import {
  AmplitudeLogo,
  AsanaLogo,
  AshbyLogo,
  AttioLogo,
  BigQueryLogo,
  CanvaLogo,
  ClariLogo,
  ConfluenceLogo,
  DatadogLogo,
  DiscordLogo,
  DriveLogo,
  FathomLogo,
  FigmaLogo,
  FreshdeskLogo,
  FreshserviceLogo,
  FrontLogo,
  GcalLogo,
  GithubLogo,
  GmailLogo,
  GongLogo,
  GoogleSpreadsheetLogo,
  GranolaLogo,
  GuruLogo,
  HexLogo,
  HubspotLogo,
  IntercomLogo,
  JiraLogo,
  LinearLogo,
  LumaLogo,
  MicrosoftExcelLogo,
  MicrosoftOutlookLogo,
  MicrosoftTeamsLogo,
  MiroLogo,
  MondayLogo,
  NetSuiteLogo,
  NotionLogo,
  OutlookLogo,
  PowerBiLogo,
  ProductboardLogo,
  SalesforceLogo,
  SalesloftLogo,
  SemrushLogo,
  SlabLogo,
  SlackLogo,
  SnowflakeLogo,
  StatuspageLogo,
  StripeLogo,
  SupabaseLogo,
  UkgLogo,
  ValTownLogo,
  VantaLogo,
  ZendeskLogo,
} from "@/components/logos/platforms";

export const metadata: Metadata = {
  title: "Integrations | Dust",
  description:
    "Connect Dust to your favorite tools and data sources. Build AI agents that work with your entire stack.",
};

type Integration = {
  name: string;
  slug: string;
  description: string;
  actions: number;
  logo: React.ComponentType<{ className?: string }>;
  tint?: string;
};

type Category = {
  name: string;
  integrations: Integration[];
};

const CATEGORIES: Category[] = [
  {
    name: "CRM & Sales",
    integrations: [
      { name: "Attio", slug: "attio", description: "AI Sales Assistant for Attio CRM.", actions: 21, logo: AttioLogo, tint: "text-foreground" },
      { name: "HubSpot", slug: "hubspot", description: "Manage contacts, deals, and pipelines from agents.", actions: 28, logo: HubspotLogo, tint: "text-[#FF7A59]" },
      { name: "Salesforce", slug: "salesforce", description: "Salesforce records, opportunities, and reports.", actions: 32, logo: SalesforceLogo, tint: "text-[#00A1E0]" },
      { name: "Salesloft", slug: "salesloft", description: "Sales cadences and engagement data.", actions: 14, logo: SalesloftLogo, tint: "text-foreground" },
      { name: "Stripe", slug: "stripe", description: "Customers, invoices, payments.", actions: 18, logo: StripeLogo, tint: "text-[#635BFF]" },
    ],
  },
  {
    name: "Productivity",
    integrations: [
      { name: "Notion", slug: "notion", description: "Notion pages and databases.", actions: 12, logo: NotionLogo, tint: "text-foreground" },
      { name: "Asana", slug: "asana", description: "Tasks, projects, and team workflows.", actions: 15, logo: AsanaLogo, tint: "text-[#F06A6A]" },
      { name: "Monday.com", slug: "monday", description: "Boards, items, and workspaces.", actions: 11, logo: MondayLogo },
      { name: "Canva", slug: "canva", description: "Design assets and brand kits.", actions: 6, logo: CanvaLogo, tint: "text-[#00C4CC]" },
      { name: "Fathom", slug: "fathom", description: "Meeting transcripts and highlights.", actions: 9, logo: FathomLogo, tint: "text-[#0EA5E9]" },
      { name: "Gong", slug: "gong", description: "Sales call transcripts and insights.", actions: 13, logo: GongLogo, tint: "text-[#9333EA]" },
      { name: "Guru", slug: "guru", description: "Company knowledge cards.", actions: 7, logo: GuruLogo, tint: "text-[#2EBA9F]" },
      { name: "Luma", slug: "luma", description: "Events, RSVPs, attendees.", actions: 5, logo: LumaLogo, tint: "text-foreground" },
      { name: "Miro", slug: "miro", description: "Boards and visual collaboration.", actions: 8, logo: MiroLogo, tint: "text-[#F7C625]" },
      { name: "Productboard", slug: "productboard", description: "Roadmaps and customer feedback.", actions: 9, logo: ProductboardLogo, tint: "text-[#1F76FF]" },
      { name: "Semrush", slug: "semrush", description: "SEO and keyword research.", actions: 11, logo: SemrushLogo, tint: "text-[#FF642D]" },
      { name: "Slab", slug: "slab", description: "Team knowledge and docs.", actions: 6, logo: SlabLogo, tint: "text-foreground" },
      { name: "Statuspage", slug: "statuspage", description: "Incidents and status updates.", actions: 7, logo: StatuspageLogo, tint: "text-[#00B388]" },
    ],
  },
  {
    name: "Data & Analytics",
    integrations: [
      { name: "Amplitude", slug: "amplitude", description: "Product analytics events and queries.", actions: 10, logo: AmplitudeLogo, tint: "text-[#1E61F0]" },
      { name: "BigQuery", slug: "bigquery", description: "Query and read BigQuery datasets.", actions: 8, logo: BigQueryLogo, tint: "text-[#669DF6]" },
      { name: "Hex", slug: "hex", description: "Notebooks and data apps.", actions: 6, logo: HexLogo, tint: "text-foreground" },
      { name: "Power BI", slug: "powerbi", description: "Dashboards and reports.", actions: 9, logo: PowerBiLogo, tint: "text-[#F2C811]" },
      { name: "Snowflake", slug: "snowflake", description: "Warehouse tables, schemas, queries.", actions: 14, logo: SnowflakeLogo, tint: "text-[#29B5E8]" },
    ],
  },
  {
    name: "Development",
    integrations: [
      { name: "Confluence", slug: "confluence", description: "Pages, spaces, comments.", actions: 11, logo: ConfluenceLogo, tint: "text-[#2684FF]" },
      { name: "GitHub", slug: "github", description: "Repos, issues, pull requests.", actions: 24, logo: GithubLogo, tint: "text-foreground" },
      { name: "Jira", slug: "jira", description: "Tickets, sprints, projects.", actions: 19, logo: JiraLogo, tint: "text-[#2684FF]" },
      { name: "Linear", slug: "linear", description: "Issues, cycles, projects.", actions: 16, logo: LinearLogo, tint: "text-foreground" },
      { name: "Supabase", slug: "supabase", description: "Database, auth, storage.", actions: 12, logo: SupabaseLogo, tint: "text-[#3ECF8E]" },
      { name: "Val Town", slug: "val-town", description: "Run and deploy code snippets.", actions: 5, logo: ValTownLogo },
      { name: "Datadog", slug: "datadog", description: "Monitoring, logs, traces.", actions: 17, logo: DatadogLogo, tint: "text-[#632CA6]" },
      { name: "Figma", slug: "figma", description: "Files, components, comments.", actions: 10, logo: FigmaLogo, tint: "text-foreground" },
    ],
  },
  {
    name: "Support",
    integrations: [
      { name: "Freshdesk", slug: "freshdesk", description: "Tickets and customer support.", actions: 13, logo: FreshdeskLogo, tint: "text-[#25C16F]" },
      { name: "Freshservice", slug: "freshservice", description: "ITSM and internal support.", actions: 11, logo: FreshserviceLogo, tint: "text-[#25C16F]" },
      { name: "Front", slug: "front", description: "Shared inboxes and customer comms.", actions: 9, logo: FrontLogo, tint: "text-[#A857F5]" },
      { name: "Intercom", slug: "intercom", description: "Conversations and customer data.", actions: 15, logo: IntercomLogo, tint: "text-[#1F8DED]" },
      { name: "Zendesk", slug: "zendesk", description: "Tickets, users, organizations.", actions: 17, logo: ZendeskLogo, tint: "text-foreground" },
    ],
  },
  {
    name: "Meeting Transcripts",
    integrations: [
      { name: "Granola", slug: "granola", description: "Meeting notes and transcripts.", actions: 7, logo: GranolaLogo, tint: "text-foreground" },
      { name: "Fathom", slug: "fathom-mt", description: "Call summaries and search.", actions: 9, logo: FathomLogo, tint: "text-[#0EA5E9]" },
      { name: "Clari Copilot", slug: "clari-copilot", description: "Conversation intelligence.", actions: 8, logo: ClariLogo, tint: "text-[#FF5C39]" },
    ],
  },
  {
    name: "Communication",
    integrations: [
      { name: "Slack", slug: "slack", description: "Channels, messages, threads.", actions: 22, logo: SlackLogo },
      { name: "Microsoft Teams", slug: "msteams", description: "Channels, chats, files.", actions: 18, logo: MicrosoftTeamsLogo, tint: "text-[#5059C9]" },
      { name: "Discord", slug: "discord", description: "Servers, channels, messages.", actions: 12, logo: DiscordLogo, tint: "text-[#5865F2]" },
    ],
  },
  {
    name: "Email & Calendar",
    integrations: [
      { name: "Gmail", slug: "gmail", description: "Read, search, send email.", actions: 11, logo: GmailLogo },
      { name: "Outlook", slug: "outlook", description: "Microsoft 365 email.", actions: 10, logo: OutlookLogo, tint: "text-[#0078D4]" },
      { name: "Google Calendar", slug: "gcal", description: "Events and scheduling.", actions: 8, logo: GcalLogo },
      { name: "Outlook Calendar", slug: "outlook-calendar", description: "Microsoft 365 calendar.", actions: 8, logo: MicrosoftOutlookLogo, tint: "text-[#0078D4]" },
    ],
  },
  {
    name: "Storage & Spreadsheets",
    integrations: [
      { name: "Google Drive", slug: "drive", description: "Files and folders.", actions: 9, logo: DriveLogo },
      { name: "Google Sheets", slug: "sheets", description: "Read and update spreadsheets.", actions: 12, logo: GoogleSpreadsheetLogo, tint: "text-[#0F9D58]" },
      { name: "Microsoft Excel", slug: "excel", description: "Read and update Excel workbooks.", actions: 11, logo: MicrosoftExcelLogo, tint: "text-[#107C41]" },
    ],
  },
  {
    name: "Recruiting & HR",
    integrations: [
      { name: "Ashby", slug: "ashby", description: "ATS, candidates, jobs.", actions: 10, logo: AshbyLogo, tint: "text-foreground" },
      { name: "UKG Ready", slug: "ukg", description: "HRIS, time, scheduling.", actions: 8, logo: UkgLogo, tint: "text-[#005EB8]" },
    ],
  },
  {
    name: "Security",
    integrations: [
      { name: "Vanta", slug: "vanta", description: "Compliance and security posture.", actions: 9, logo: VantaLogo, tint: "text-foreground" },
    ],
  },
];

const ALL_CATEGORIES = CATEGORIES.map((c) => c.name);
const TOTAL_COUNT = CATEGORIES.reduce((sum, c) => sum + c.integrations.length, 0);

export default function IntegrationsIndexPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero ─────────── */}
      <section>
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-12 text-center">
          <h1 className="heading-mono-4xl sm:heading-mono-5xl">Integrations</h1>
          <p className="copy-lg mx-auto mt-6 max-w-2xl text-muted-foreground">
            Connect Dust to your favorite tools and data sources. Build AI agents that work with
            your entire stack.
          </p>
          <p className="copy-sm mt-4 text-muted-foreground">
            <span className="font-medium text-foreground">{TOTAL_COUNT}</span> integrations across{" "}
            {ALL_CATEGORIES.length} categories
          </p>
        </div>
      </section>

      {/* ─────────── Category filter chips ─────────── */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="#all"
              className="rounded-full border border-foreground bg-foreground px-3.5 py-1.5 text-xs font-medium text-background"
            >
              All
            </a>
            {ALL_CATEGORIES.map((c) => (
              <a
                key={c}
                href={`#${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-blue-300 hover:text-foreground"
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Categories ─────────── */}
      <section id="all">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
          {CATEGORIES.map((cat) => {
            const id = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <div key={cat.name} id={id} className="scroll-mt-24">
                <div className="mb-6 flex items-baseline justify-between">
                  <h2 className="heading-mono-2xl">{cat.name}</h2>
                  <span className="copy-xs text-muted-foreground">
                    {cat.integrations.length} integration{cat.integrations.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.integrations.map((it) => {
                    const Logo = it.logo;
                    const href = it.slug === "attio" ? "/integrations/attio" : "#";
                    return (
                      <Link
                        key={`${cat.name}-${it.slug}`}
                        href={href}
                        className="group flex gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-blue-300"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                          <Logo className={`h-7 w-7 ${it.tint ?? "text-foreground"}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="heading-base">{it.name}</div>
                          <p className="copy-xs mt-1 line-clamp-2 text-muted-foreground">
                            {it.description}
                          </p>
                          <p className="copy-xs mt-2 text-muted-foreground">
                            {it.actions} actions available
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────── Become a partner ─────────── */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="heading-mono-3xl">Have a tool that should be here?</h2>
          <p className="copy-base mx-auto mt-4 max-w-xl text-muted-foreground">
            Any tool with an MCP server can become a one-click Dust integration.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/partners" variant="primary" size="md" iconRight={ArrowRight}>
              Become a partner
            </Button>
            <Button href="/partners/register" variant="outline" size="md">
              Submit an MCP
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────── Bottom CTA ─────────── */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="heading-mono-3xl sm:heading-mono-4xl">Ready to connect your tools?</h2>
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
