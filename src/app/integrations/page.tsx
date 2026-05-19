"use client";

import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SearchInput } from "@/components/ui";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@/components/icons";
import {
  IntegrationCard,
  type IntegrationCardData,
} from "@/components/IntegrationCard";
import { FinalCTASection } from "@/components/FinalCTASection";
import { MarketplaceHero } from "@/components/marketing";
import { cn } from "@/lib/utils";
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

/*
 * Tag conventions:
 * - "native" + "mcp"   = Dust-built MCP integration (most modern partners)
 * - "native" only      = Dust-built legacy connector (Slack, Drive, Gmail, etc.)
 * - "mcp" only         = Third-party MCP server (partner-hosted)
 *
 * For this mockup we tag generously: connectors Dust traditionally built get
 * "native"; partner MCPs get just "mcp"; newer Dust-built MCP integrations get
 * both. Easy to tune per partner as the real registry lands.
 */
const INTEGRATIONS: IndexedIntegration[] = [
  // CRM & Sales
  { name: "Attio", slug: "attio", category: "CRM & Sales", description: "AI Sales Assistant for Attio CRM.", actions: 21, logo: AttioLogo, tint: "text-foreground", tags: ["mcp"] },
  { name: "HubSpot", slug: "hubspot", category: "CRM & Sales", description: "Manage contacts, deals, and pipelines from agents.", actions: 28, logo: HubspotLogo, tint: "text-[#FF7A59]", tags: ["native", "mcp"] },
  { name: "Salesforce", slug: "salesforce", category: "CRM & Sales", description: "Salesforce records, opportunities, and reports.", actions: 32, logo: SalesforceLogo, tint: "text-[#00A1E0]", tags: ["native"] },
  { name: "Salesloft", slug: "salesloft", category: "CRM & Sales", description: "Sales cadences and engagement data.", actions: 14, logo: SalesloftLogo, tint: "text-foreground", tags: ["mcp"] },
  { name: "Stripe", slug: "stripe", category: "CRM & Sales", description: "Customers, invoices, payments.", actions: 18, logo: StripeLogo, tint: "text-[#635BFF]", tags: ["mcp"] },

  // Productivity
  { name: "Notion", slug: "notion", category: "Productivity", description: "Notion pages and databases.", actions: 12, logo: NotionLogo, tint: "text-foreground", tags: ["native"] },
  { name: "Asana", slug: "asana", category: "Productivity", description: "Tasks, projects, and team workflows.", actions: 15, logo: AsanaLogo, tint: "text-[#F06A6A]", tags: ["native"] },
  { name: "Monday.com", slug: "monday", category: "Productivity", description: "Boards, items, and workspaces.", actions: 11, logo: MondayLogo, tags: ["native"] },
  { name: "Canva", slug: "canva", category: "Productivity", description: "Design assets and brand kits.", actions: 6, logo: CanvaLogo, tint: "text-[#00C4CC]", tags: ["mcp"] },
  { name: "Fathom", slug: "fathom", category: "Productivity", description: "Meeting transcripts and highlights.", actions: 9, logo: FathomLogo, tint: "text-[#0EA5E9]", tags: ["native", "mcp"] },
  { name: "Gong", slug: "gong", category: "Productivity", description: "Sales call transcripts and insights.", actions: 13, logo: GongLogo, tint: "text-[#9333EA]", tags: ["native", "mcp"] },
  { name: "Guru", slug: "guru", category: "Productivity", description: "Company knowledge cards.", actions: 7, logo: GuruLogo, tint: "text-[#2EBA9F]", tags: ["mcp"] },
  { name: "Luma", slug: "luma", category: "Productivity", description: "Events, RSVPs, attendees.", actions: 5, logo: LumaLogo, tint: "text-foreground", tags: ["mcp"] },
  { name: "Miro", slug: "miro", category: "Productivity", description: "Boards and visual collaboration.", actions: 8, logo: MiroLogo, tint: "text-[#F7C625]", tags: ["mcp"] },
  { name: "Productboard", slug: "productboard", category: "Productivity", description: "Roadmaps and customer feedback.", actions: 9, logo: ProductboardLogo, tint: "text-[#1F76FF]", tags: ["mcp"] },
  { name: "Semrush", slug: "semrush", category: "Productivity", description: "SEO and keyword research.", actions: 11, logo: SemrushLogo, tint: "text-[#FF642D]", tags: ["mcp"] },
  { name: "Slab", slug: "slab", category: "Productivity", description: "Team knowledge and docs.", actions: 6, logo: SlabLogo, tint: "text-foreground", tags: ["mcp"] },
  { name: "Statuspage", slug: "statuspage", category: "Productivity", description: "Incidents and status updates.", actions: 7, logo: StatuspageLogo, tint: "text-[#00B388]", tags: ["mcp"] },
  { name: "NetSuite", slug: "netsuite", category: "Productivity", description: "ERP records and reports.", actions: 12, logo: NetSuiteLogo, tint: "text-foreground", tags: ["mcp"] },

  // Data & Analytics
  { name: "Amplitude", slug: "amplitude", category: "Data & Analytics", description: "Product analytics events and queries.", actions: 10, logo: AmplitudeLogo, tint: "text-[#1E61F0]", tags: ["mcp"] },
  { name: "BigQuery", slug: "bigquery", category: "Data & Analytics", description: "Query and read BigQuery datasets.", actions: 8, logo: BigQueryLogo, tint: "text-[#669DF6]", tags: ["native"] },
  { name: "Hex", slug: "hex", category: "Data & Analytics", description: "Notebooks and data apps.", actions: 6, logo: HexLogo, tint: "text-foreground", tags: ["mcp"] },
  { name: "Power BI", slug: "powerbi", category: "Data & Analytics", description: "Dashboards and reports.", actions: 9, logo: PowerBiLogo, tint: "text-[#F2C811]", tags: ["mcp"] },
  { name: "Snowflake", slug: "snowflake", category: "Data & Analytics", description: "Warehouse tables, schemas, queries.", actions: 14, logo: SnowflakeLogo, tint: "text-[#29B5E8]", tags: ["native"] },

  // Development
  { name: "Confluence", slug: "confluence", category: "Development", description: "Pages, spaces, comments.", actions: 11, logo: ConfluenceLogo, tint: "text-[#2684FF]", tags: ["native"] },
  { name: "GitHub", slug: "github", category: "Development", description: "Repos, issues, pull requests.", actions: 24, logo: GithubLogo, tint: "text-foreground", tags: ["native"] },
  { name: "Jira", slug: "jira", category: "Development", description: "Tickets, sprints, projects.", actions: 19, logo: JiraLogo, tint: "text-[#2684FF]", tags: ["native"] },
  { name: "Linear", slug: "linear", category: "Development", description: "Issues, cycles, projects.", actions: 16, logo: LinearLogo, tint: "text-foreground", tags: ["native"] },
  { name: "Supabase", slug: "supabase", category: "Development", description: "Database, auth, storage.", actions: 12, logo: SupabaseLogo, tint: "text-[#3ECF8E]", tags: ["mcp"] },
  { name: "Val Town", slug: "val-town", category: "Development", description: "Run and deploy code snippets.", actions: 5, logo: ValTownLogo, tags: ["native"] },
  { name: "Datadog", slug: "datadog", category: "Development", description: "Monitoring, logs, traces.", actions: 17, logo: DatadogLogo, tint: "text-[#632CA6]", tags: ["mcp"] },
  { name: "Figma", slug: "figma", category: "Development", description: "Files, components, comments.", actions: 10, logo: FigmaLogo, tint: "text-foreground", tags: ["mcp"] },

  // Support
  { name: "Freshdesk", slug: "freshdesk", category: "Support", description: "Tickets and customer support.", actions: 13, logo: FreshdeskLogo, tint: "text-[#25C16F]", tags: ["native"] },
  { name: "Freshservice", slug: "freshservice", category: "Support", description: "ITSM and internal support.", actions: 11, logo: FreshserviceLogo, tint: "text-[#25C16F]", tags: ["native"] },
  { name: "Front", slug: "front", category: "Support", description: "Shared inboxes and customer comms.", actions: 9, logo: FrontLogo, tint: "text-[#A857F5]", tags: ["native"] },
  { name: "Intercom", slug: "intercom", category: "Support", description: "Conversations and customer data.", actions: 15, logo: IntercomLogo, tint: "text-[#1F8DED]", tags: ["native"] },
  { name: "Zendesk", slug: "zendesk", category: "Support", description: "Tickets, users, organizations.", actions: 17, logo: ZendeskLogo, tint: "text-foreground", tags: ["native"] },

  // Meeting Transcripts
  { name: "Granola", slug: "granola", category: "Meeting Transcripts", description: "Meeting notes and transcripts.", actions: 7, logo: GranolaLogo, tint: "text-foreground", tags: ["native", "mcp"] },
  { name: "Clari Copilot", slug: "clari-copilot", category: "Meeting Transcripts", description: "Conversation intelligence.", actions: 8, logo: ClariLogo, tint: "text-[#FF5C39]", tags: ["mcp"] },

  // Communication
  { name: "Slack", slug: "slack", category: "Communication", description: "Channels, messages, threads.", actions: 22, logo: SlackLogo, tags: ["native"] },
  { name: "Microsoft Teams", slug: "msteams", category: "Communication", description: "Channels, chats, files.", actions: 18, logo: MicrosoftTeamsLogo, tint: "text-[#5059C9]", tags: ["native"] },
  { name: "Discord", slug: "discord", category: "Communication", description: "Servers, channels, messages.", actions: 12, logo: DiscordLogo, tint: "text-[#5865F2]", tags: ["mcp"] },

  // Email & Calendar
  { name: "Gmail", slug: "gmail", category: "Email & Calendar", description: "Read, search, send email.", actions: 11, logo: GmailLogo, tags: ["native"] },
  { name: "Outlook", slug: "outlook", category: "Email & Calendar", description: "Microsoft 365 email.", actions: 10, logo: OutlookLogo, tint: "text-[#0078D4]", tags: ["native"] },
  { name: "Google Calendar", slug: "gcal", category: "Email & Calendar", description: "Events and scheduling.", actions: 8, logo: GcalLogo, tags: ["native"] },
  { name: "Outlook Calendar", slug: "outlook-calendar", category: "Email & Calendar", description: "Microsoft 365 calendar.", actions: 8, logo: MicrosoftOutlookLogo, tint: "text-[#0078D4]", tags: ["native"] },

  // Storage & Spreadsheets
  { name: "Google Drive", slug: "drive", category: "Storage & Spreadsheets", description: "Files and folders.", actions: 9, logo: DriveLogo, tags: ["native"] },
  { name: "Google Sheets", slug: "sheets", category: "Storage & Spreadsheets", description: "Read and update spreadsheets.", actions: 12, logo: GoogleSpreadsheetLogo, tint: "text-[#0F9D58]", tags: ["native"] },
  { name: "Microsoft Excel", slug: "excel", category: "Storage & Spreadsheets", description: "Read and update Excel workbooks.", actions: 11, logo: MicrosoftExcelLogo, tint: "text-[#107C41]", tags: ["native"] },

  // Recruiting & HR
  { name: "Ashby", slug: "ashby", category: "Recruiting & HR", description: "ATS, candidates, jobs.", actions: 10, logo: AshbyLogo, tint: "text-foreground", tags: ["mcp"] },
  { name: "UKG Ready", slug: "ukg", category: "Recruiting & HR", description: "HRIS, time, scheduling.", actions: 8, logo: UkgLogo, tint: "text-[#005EB8]", tags: ["mcp"] },

  // Security
  { name: "Vanta", slug: "vanta", category: "Security", description: "Compliance and security posture.", actions: 9, logo: VantaLogo, tint: "text-foreground", tags: ["mcp"] },
];

const HERO_LOGOS = [
  { Logo: HubspotLogo, tint: "text-[#FF7A59]" },
  { Logo: SalesforceLogo, tint: "text-[#00A1E0]" },
  { Logo: NotionLogo, tint: "text-foreground" },
  { Logo: GithubLogo, tint: "text-foreground" },
  { Logo: LinearLogo, tint: "text-foreground" },
  { Logo: SlackLogo },
  { Logo: GmailLogo },
  { Logo: AttioLogo, tint: "text-foreground" },
];

export default function IntegrationsIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Match SiteHeader's threshold so the sticky bar tracks the header's
  // h-24 → h-16 transition exactly. Avoids the bar being clipped by the
  // unscrolled header (96px) and avoids a gap once it shrinks to 64px.
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsHeaderScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    return INTEGRATIONS.filter((i) => {
      if (selectedCategory && i.category !== selectedCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = i.name.toLowerCase().includes(q);
        const matchesDesc = i.description?.toLowerCase().includes(q) ?? false;
        if (!matchesName && !matchesDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

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

      <MarketplaceHero
        title="App Store"
        logos={HERO_LOGOS}
        subtitle="Connect Dust to your stack. Let agents get context and take actions in your favorite apps to unlock true multiplayer AI."
      />

      {/* ─────────── Marketplace body: sidebar + grid ─────────── */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        {/* Mobile: search + collapse toggle */}
        <div className="mb-6 flex flex-col gap-3 lg:hidden">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search integrations…"
          />
          <button
            type="button"
            onClick={() => setMobileNavOpen((o) => !o)}
            className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground"
          >
            <span>{selectedCategory ?? "All categories"}</span>
            <ChevronDownIcon
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                mobileNavOpen && "rotate-180"
              )}
            />
          </button>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Sidebar — categories */}
          <aside
            className={cn(
              "lg:sticky lg:top-32 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto lg:w-60 lg:shrink-0",
              !mobileNavOpen && "hidden lg:block"
            )}
          >
            <nav className="space-y-0.5">
              <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Categories
              </h3>
              <CategoryItem
                label="All"
                selected={selectedCategory === null}
                onClick={() => {
                  setSelectedCategory(null);
                  setMobileNavOpen(false);
                }}
                count={INTEGRATIONS.length}
              />
              {CATEGORIES.map((cat) => {
                const count = INTEGRATIONS.filter((i) => i.category === cat).length;
                if (count === 0) return null;
                return (
                  <CategoryItem
                    key={cat}
                    label={cat}
                    selected={selectedCategory === cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setMobileNavOpen(false);
                    }}
                    count={count}
                  />
                );
              })}
            </nav>
          </aside>

          {/* Main: integrations grid */}
          <div className="flex-1 min-w-0">
            {/* Sticky top row — counter (left) + slim search (right). Flush
                with the page, no surrounding box. Top offset follows the
                header's h-24 → h-16 transition so the bar always sits just
                below it, never under it. */}
            <div
              className="sticky z-30 mb-6 hidden items-center justify-between gap-4 border-b border-border bg-background py-3 transition-[top] duration-200 ease-out lg:flex"
              style={{ top: isHeaderScrolled ? "4rem" : "6rem" }}
            >
              <p className="text-sm text-muted-foreground">
                {filtered.length} integration{filtered.length !== 1 ? "s" : ""}
                {selectedCategory && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
              <div className="relative w-72 max-w-full">
                <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search integrations…"
                  className="h-8 w-full rounded-full border border-border bg-background pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
              </div>
            </div>

            {/* Mobile counter only (mobile search lives in the top flex). */}
            <div className="mb-6 flex items-baseline justify-between lg:hidden">
              <p className="text-sm text-muted-foreground">
                {filtered.length} integration{filtered.length !== 1 ? "s" : ""}
                {selectedCategory && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {selectedCategory === null && !searchQuery ? (
              <div className="space-y-12">
                {Array.from(grouped.entries()).map(([category, items]) => (
                  <div key={category}>
                    <h2 className="mb-6 text-xl font-semibold text-foreground">{category}</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((it) => (
                        <IntegrationCard key={it.slug} integration={it} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((it) => (
                  <IntegrationCard key={it.slug} integration={it} />
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border bg-muted/30 px-8 py-16 text-center">
                <p className="text-sm text-muted-foreground">
                  No integration found yet — but you can connect any MCP server you want in Dust.{" "}
                  <a
                    href="/partners/register"
                    className="font-medium text-foreground underline hover:text-blue-500"
                  >
                    Submit yours
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
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

interface CategoryItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  count: number;
}

function CategoryItem({ label, selected, onClick, count }: CategoryItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors",
        selected
          ? "bg-blue-50 font-semibold text-blue-700"
          : "text-foreground/80 hover:bg-muted hover:text-foreground"
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "text-xs",
          selected ? "text-blue-700" : "text-muted-foreground"
        )}
      >
        {count}
      </span>
    </button>
  );
}
