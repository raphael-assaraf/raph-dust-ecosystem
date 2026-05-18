"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, P, FullWidthSection } from "@/components/content";
import {
  IntegrationCard,
  type IntegrationCardData,
} from "@/components/IntegrationCard";
import { FinalCTASection } from "@/components/FinalCTASection";
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

const CATEGORIES = [
  "CRM & Sales",
  "Productivity",
  "Data & Analytics",
  "Development",
  "Support",
  "Meeting Transcripts",
  "Communication",
  "Email & Calendar",
  "Storage & Spreadsheets",
  "Recruiting & HR",
  "Security",
] as const;

type CategoryName = (typeof CATEGORIES)[number];

interface IndexedIntegration extends IntegrationCardData {
  category: CategoryName;
}

const INTEGRATIONS: IndexedIntegration[] = [
  // CRM & Sales
  { name: "Attio", slug: "attio", category: "CRM & Sales", description: "AI Sales Assistant for Attio CRM.", actions: 21, logo: AttioLogo, tint: "text-foreground" },
  { name: "HubSpot", slug: "hubspot", category: "CRM & Sales", description: "Manage contacts, deals, and pipelines from agents.", actions: 28, logo: HubspotLogo, tint: "text-[#FF7A59]" },
  { name: "Salesforce", slug: "salesforce", category: "CRM & Sales", description: "Salesforce records, opportunities, and reports.", actions: 32, logo: SalesforceLogo, tint: "text-[#00A1E0]" },
  { name: "Salesloft", slug: "salesloft", category: "CRM & Sales", description: "Sales cadences and engagement data.", actions: 14, logo: SalesloftLogo, tint: "text-foreground" },
  { name: "Stripe", slug: "stripe", category: "CRM & Sales", description: "Customers, invoices, payments.", actions: 18, logo: StripeLogo, tint: "text-[#635BFF]" },

  // Productivity
  { name: "Notion", slug: "notion", category: "Productivity", description: "Notion pages and databases.", actions: 12, logo: NotionLogo, tint: "text-foreground" },
  { name: "Asana", slug: "asana", category: "Productivity", description: "Tasks, projects, and team workflows.", actions: 15, logo: AsanaLogo, tint: "text-[#F06A6A]" },
  { name: "Monday.com", slug: "monday", category: "Productivity", description: "Boards, items, and workspaces.", actions: 11, logo: MondayLogo },
  { name: "Canva", slug: "canva", category: "Productivity", description: "Design assets and brand kits.", actions: 6, logo: CanvaLogo, tint: "text-[#00C4CC]" },
  { name: "Fathom", slug: "fathom", category: "Productivity", description: "Meeting transcripts and highlights.", actions: 9, logo: FathomLogo, tint: "text-[#0EA5E9]" },
  { name: "Gong", slug: "gong", category: "Productivity", description: "Sales call transcripts and insights.", actions: 13, logo: GongLogo, tint: "text-[#9333EA]" },
  { name: "Guru", slug: "guru", category: "Productivity", description: "Company knowledge cards.", actions: 7, logo: GuruLogo, tint: "text-[#2EBA9F]" },
  { name: "Luma", slug: "luma", category: "Productivity", description: "Events, RSVPs, attendees.", actions: 5, logo: LumaLogo, tint: "text-foreground" },
  { name: "Miro", slug: "miro", category: "Productivity", description: "Boards and visual collaboration.", actions: 8, logo: MiroLogo, tint: "text-[#F7C625]" },
  { name: "Productboard", slug: "productboard", category: "Productivity", description: "Roadmaps and customer feedback.", actions: 9, logo: ProductboardLogo, tint: "text-[#1F76FF]" },
  { name: "Semrush", slug: "semrush", category: "Productivity", description: "SEO and keyword research.", actions: 11, logo: SemrushLogo, tint: "text-[#FF642D]" },
  { name: "Slab", slug: "slab", category: "Productivity", description: "Team knowledge and docs.", actions: 6, logo: SlabLogo, tint: "text-foreground" },
  { name: "Statuspage", slug: "statuspage", category: "Productivity", description: "Incidents and status updates.", actions: 7, logo: StatuspageLogo, tint: "text-[#00B388]" },
  { name: "NetSuite", slug: "netsuite", category: "Productivity", description: "ERP records and reports.", actions: 12, logo: NetSuiteLogo, tint: "text-foreground" },

  // Data & Analytics
  { name: "Amplitude", slug: "amplitude", category: "Data & Analytics", description: "Product analytics events and queries.", actions: 10, logo: AmplitudeLogo, tint: "text-[#1E61F0]" },
  { name: "BigQuery", slug: "bigquery", category: "Data & Analytics", description: "Query and read BigQuery datasets.", actions: 8, logo: BigQueryLogo, tint: "text-[#669DF6]" },
  { name: "Hex", slug: "hex", category: "Data & Analytics", description: "Notebooks and data apps.", actions: 6, logo: HexLogo, tint: "text-foreground" },
  { name: "Power BI", slug: "powerbi", category: "Data & Analytics", description: "Dashboards and reports.", actions: 9, logo: PowerBiLogo, tint: "text-[#F2C811]" },
  { name: "Snowflake", slug: "snowflake", category: "Data & Analytics", description: "Warehouse tables, schemas, queries.", actions: 14, logo: SnowflakeLogo, tint: "text-[#29B5E8]" },

  // Development
  { name: "Confluence", slug: "confluence", category: "Development", description: "Pages, spaces, comments.", actions: 11, logo: ConfluenceLogo, tint: "text-[#2684FF]" },
  { name: "GitHub", slug: "github", category: "Development", description: "Repos, issues, pull requests.", actions: 24, logo: GithubLogo, tint: "text-foreground" },
  { name: "Jira", slug: "jira", category: "Development", description: "Tickets, sprints, projects.", actions: 19, logo: JiraLogo, tint: "text-[#2684FF]" },
  { name: "Linear", slug: "linear", category: "Development", description: "Issues, cycles, projects.", actions: 16, logo: LinearLogo, tint: "text-foreground" },
  { name: "Supabase", slug: "supabase", category: "Development", description: "Database, auth, storage.", actions: 12, logo: SupabaseLogo, tint: "text-[#3ECF8E]" },
  { name: "Val Town", slug: "val-town", category: "Development", description: "Run and deploy code snippets.", actions: 5, logo: ValTownLogo },
  { name: "Datadog", slug: "datadog", category: "Development", description: "Monitoring, logs, traces.", actions: 17, logo: DatadogLogo, tint: "text-[#632CA6]" },
  { name: "Figma", slug: "figma", category: "Development", description: "Files, components, comments.", actions: 10, logo: FigmaLogo, tint: "text-foreground" },

  // Support
  { name: "Freshdesk", slug: "freshdesk", category: "Support", description: "Tickets and customer support.", actions: 13, logo: FreshdeskLogo, tint: "text-[#25C16F]" },
  { name: "Freshservice", slug: "freshservice", category: "Support", description: "ITSM and internal support.", actions: 11, logo: FreshserviceLogo, tint: "text-[#25C16F]" },
  { name: "Front", slug: "front", category: "Support", description: "Shared inboxes and customer comms.", actions: 9, logo: FrontLogo, tint: "text-[#A857F5]" },
  { name: "Intercom", slug: "intercom", category: "Support", description: "Conversations and customer data.", actions: 15, logo: IntercomLogo, tint: "text-[#1F8DED]" },
  { name: "Zendesk", slug: "zendesk", category: "Support", description: "Tickets, users, organizations.", actions: 17, logo: ZendeskLogo, tint: "text-foreground" },

  // Meeting Transcripts
  { name: "Granola", slug: "granola", category: "Meeting Transcripts", description: "Meeting notes and transcripts.", actions: 7, logo: GranolaLogo, tint: "text-foreground" },
  { name: "Clari Copilot", slug: "clari-copilot", category: "Meeting Transcripts", description: "Conversation intelligence.", actions: 8, logo: ClariLogo, tint: "text-[#FF5C39]" },

  // Communication
  { name: "Slack", slug: "slack", category: "Communication", description: "Channels, messages, threads.", actions: 22, logo: SlackLogo },
  { name: "Microsoft Teams", slug: "msteams", category: "Communication", description: "Channels, chats, files.", actions: 18, logo: MicrosoftTeamsLogo, tint: "text-[#5059C9]" },
  { name: "Discord", slug: "discord", category: "Communication", description: "Servers, channels, messages.", actions: 12, logo: DiscordLogo, tint: "text-[#5865F2]" },

  // Email & Calendar
  { name: "Gmail", slug: "gmail", category: "Email & Calendar", description: "Read, search, send email.", actions: 11, logo: GmailLogo },
  { name: "Outlook", slug: "outlook", category: "Email & Calendar", description: "Microsoft 365 email.", actions: 10, logo: OutlookLogo, tint: "text-[#0078D4]" },
  { name: "Google Calendar", slug: "gcal", category: "Email & Calendar", description: "Events and scheduling.", actions: 8, logo: GcalLogo },
  { name: "Outlook Calendar", slug: "outlook-calendar", category: "Email & Calendar", description: "Microsoft 365 calendar.", actions: 8, logo: MicrosoftOutlookLogo, tint: "text-[#0078D4]" },

  // Storage & Spreadsheets
  { name: "Google Drive", slug: "drive", category: "Storage & Spreadsheets", description: "Files and folders.", actions: 9, logo: DriveLogo },
  { name: "Google Sheets", slug: "sheets", category: "Storage & Spreadsheets", description: "Read and update spreadsheets.", actions: 12, logo: GoogleSpreadsheetLogo, tint: "text-[#0F9D58]" },
  { name: "Microsoft Excel", slug: "excel", category: "Storage & Spreadsheets", description: "Read and update Excel workbooks.", actions: 11, logo: MicrosoftExcelLogo, tint: "text-[#107C41]" },

  // Recruiting & HR
  { name: "Ashby", slug: "ashby", category: "Recruiting & HR", description: "ATS, candidates, jobs.", actions: 10, logo: AshbyLogo, tint: "text-foreground" },
  { name: "UKG Ready", slug: "ukg", category: "Recruiting & HR", description: "HRIS, time, scheduling.", actions: 8, logo: UkgLogo, tint: "text-[#005EB8]" },

  // Security
  { name: "Vanta", slug: "vanta", category: "Security", description: "Compliance and security posture.", actions: 9, logo: VantaLogo, tint: "text-foreground" },
];

export default function IntegrationsIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);

  const filtered = useMemo(() => {
    if (selectedCategory === null) return INTEGRATIONS;
    return INTEGRATIONS.filter((i) => i.category === selectedCategory);
  }, [selectedCategory]);

  const grouped = useMemo(() => {
    const map = new Map<CategoryName, IndexedIntegration[]>();
    for (const integration of filtered) {
      const existing = map.get(integration.category) ?? [];
      map.set(integration.category, [...existing, integration]);
    }
    return map;
  }, [filtered]);

  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero (matches dust.tt's FullWidthSection + centered H1 + filter chips) ─────────── */}
      <FullWidthSection className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24">
          <H1
            mono
            className="mb-2 text-center text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Integrations
          </H1>
          <P size="lg" className="mb-8 max-w-2xl text-muted-foreground">
            Connect Dust to your favorite tools and data sources. Build AI agents that work with
            your entire stack.
          </P>

          {/* Category filter buttons (interactive — toggles the grid below) */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              label="All"
              variant={selectedCategory === null ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            />
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                label={category}
                variant={selectedCategory === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {filtered.length} integration{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>
      </FullWidthSection>

      {/* ─────────── Integrations grid ─────────── */}
      <div className="container mx-auto max-w-6xl px-2 py-12 md:py-16">
        {selectedCategory === null ? (
          <div className="space-y-12">
            {Array.from(grouped.entries()).map(([category, items]) => (
              <div key={category}>
                <h2 className="mb-6 text-xl font-semibold text-foreground">{category}</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {items.map((it) => (
                    <IntegrationCard key={it.slug} integration={it} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((it) => (
              <IntegrationCard key={it.slug} integration={it} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No integration found yet... but you can connect any MCP server you want in Dust!{" "}
              <a
                href="/partners/register"
                className="text-foreground underline hover:text-blue-500"
              >
                Learn more
              </a>
            </p>
          </div>
        )}
      </div>

      {/* ─────────── Final CTA ─────────── */}
      <FinalCTASection
        config={{
          title: "Ready to connect your tools?",
          subtitle: "Start building AI agents that work with your entire tech stack.",
          primaryCTA: { label: "Start free trial", href: "#" },
          secondaryCTA: { label: "Talk to sales", href: "#" },
          trustText: "14-day free trial. No credit card required.",
        }}
      />

      <SiteFooter />
    </div>
  );
}
