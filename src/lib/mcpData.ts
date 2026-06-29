// MCP partnership shortlist data — verified ~2026-06-29.
// The MCP landscape moves weekly; re-check endpoints/auth at integration time.
// Status legend:
//   official   = vendor-published MCP server, live
//   beta       = official but beta / rolling out / org-provisioned
//   in-dust    = appears in Dust customers' installed-MCP list (works today; official-vs-custom TBD)
//   community  = only third-party / community MCP found
//   none       = no usable MCP yet (API-only or MCP-client only) -> outreach / build target

export type McpStatus =
  | "official"
  | "beta"
  | "in-dust"
  | "community"
  | "none";

export interface Partner {
  company: string;
  hq: string; // city, country
  region: "UK" | "EU" | "US" | "Other";
  category: string;
  status: McpStatus;
  endpoint: string; // remote URL / how to connect / note
  why: string;
  ukHook?: string; // the UK relationship to leverage (advocate / team pick / UK-HQ)
}

export const STATUS_LABEL: Record<McpStatus, string> = {
  official: "Official MCP",
  beta: "Beta / rolling out",
  "in-dust": "Live in Dust (installed)",
  community: "Community MCP only",
  none: "No MCP yet",
};

export const STATUS_COLOR: Record<McpStatus, string> = {
  official: "bg-emerald-100 text-emerald-800 border-emerald-300",
  beta: "bg-amber-100 text-amber-800 border-amber-300",
  "in-dust": "bg-blue-100 text-blue-800 border-blue-300",
  community: "bg-violet-100 text-violet-800 border-violet-300",
  none: "bg-zinc-100 text-zinc-600 border-zinc-300",
};

// ─────────────────────────────────────────────────────────────────────────
// TOP 10 — UK  (UK-FOCUSED & relationship-anchored)
// Selection rule: has a usable MCP AND a concrete UK hook — either UK-HQ, a
// UK-team pick, or a tool your UK advocates / Top-40 UK targets already use.
// Genuinely UK-HQ MCP tools are scarce (Attio, Granola, ElevenLabs, Tessl), so
// the rest are anchored on the team list + the UK advocate sheet. Rootless EU
// names live in OTHERS under "Continental EU — no UK hook".
// ─────────────────────────────────────────────────────────────────────────
export const TOP_UK: Partner[] = [
  {
    company: "Attio",
    hq: "London, UK",
    region: "UK",
    category: "AI-native CRM",
    status: "official",
    endpoint: "mcp.attio.com/mcp (OAuth)",
    ukHook: "UK-HQ · Dust partner · team pick",
    why: "The AI-native CRM for GTM teams. UK-founded, already in Dust docs — deepen it.",
  },
  {
    company: "Granola",
    hq: "London, UK",
    region: "UK",
    category: "AI meeting notes",
    status: "official",
    endpoint: "mcp.granola.ai/mcp (OAuth, GA)",
    ukHook: "UK-HQ · Dust partner · team pick (already leveraged)",
    why: "Hot UK AI-native brand and a motivated partner. Meeting context → CRM/notes.",
  },
  {
    company: "ElevenLabs",
    hq: "London, UK",
    region: "UK",
    category: "AI voice / audio",
    status: "official",
    endpoint: "github.com/elevenlabs/elevenlabs-mcp (local, API key)",
    ukHook: "UK-HQ · Dust partner · team pick · Top-40 UK target",
    why: "One of the hottest AI-native brands globally; strong UK hype. (Local/API-key MCP flavour.)",
  },
  {
    company: "Tessl",
    hq: "London, UK",
    region: "UK",
    category: "AI software development",
    status: "official",
    endpoint: "tessl mcp start (local/stdio)",
    ukHook: "UK-HQ (Snyk founder)",
    why: "Hot UK AI-native dev brand (~$750M val). Dev-tooling not GTM, but a strong UK logo.",
  },
  {
    company: "Fathom",
    hq: "San Francisco, US",
    region: "US",
    category: "AI meeting notetaker",
    status: "official",
    endpoint: "api.fathom.ai/mcp",
    ukHook: "Dust UK partner · team pick",
    why: "Team-recommended meeting-intelligence tool; meeting data feeds CRM/sales workflows.",
  },
  {
    company: "Snowflake",
    hq: "Bozeman MT, US",
    region: "US",
    category: "Data platform",
    status: "official",
    endpoint: "Snowflake-managed MCP (GA, in-workspace)",
    ukHook: "Dust UK partner (High Priority) · team pick",
    why: "Team-recommended; underpins sales/marketing analytics. Warm UK partner relationship.",
  },
  {
    company: "Clay",
    hq: "New York, US",
    region: "US",
    category: "GTM data / outbound orchestration",
    status: "official",
    endpoint: "Connector in Claude/ChatGPT/Codex",
    ukHook: "Top-UK-Logo advocate (Dust customer)",
    why: "AI-native GTM darling AND a flagged UK advocate — warm intro + hype logo. NB: ≠ clay.earth.",
  },
  {
    company: "Vanta",
    hq: "San Francisco, US",
    region: "US",
    category: "Security & trust management",
    status: "beta",
    endpoint: "developer.vanta.com/docs/vanta-mcp (public preview)",
    ukHook: "Top-UK-Logo advocate (Dust customer)",
    why: "Flagged UK advocate; trust/procurement signals are GTM-adjacent. Warm relationship to leverage.",
  },
  {
    company: "Datadog",
    hq: "New York, US",
    region: "US",
    category: "Observability",
    status: "official",
    endpoint: "docs.datadoghq.com (MCP server)",
    ukHook: "Top-UK-Logo advocate (Dust customer)",
    why: "Flagged UK advocate with an official MCP — strong logo, warm intro. Infra not GTM.",
  },
  {
    company: "Gong",
    hq: "San Francisco, US",
    region: "US",
    category: "Revenue intelligence",
    status: "beta",
    endpoint: "Admin-gated, rolling out (no public URL yet)",
    ukHook: "Team pick (new name) · GTM-core",
    why: "Team-flagged revenue-intelligence leader. Confirm MCP is live before promising.",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// TOP 10 — US  (GTM-tilted, hype/scaling, MCP live)
// ─────────────────────────────────────────────────────────────────────────
export const TOP_US: Partner[] = [
  {
    company: "Clay",
    hq: "New York, US",
    region: "US",
    category: "GTM data / outbound orchestration",
    status: "official",
    endpoint: "Connector in Claude/ChatGPT/Codex (claude.ai/directory/connectors/clay)",
    why: "The AI-native GTM darling (~$5B val). Flagship hype logo. NB: GTM Clay ≠ clay.earth (different company).",
  },
  {
    company: "Apollo.io",
    hq: "San Francisco, US",
    region: "US",
    category: "Sales intelligence + engagement",
    status: "official",
    endpoint: "Native OAuth connector in Claude/ChatGPT/Perplexity",
    why: "Sales-tech unicorn, 230M+ contacts, strong PLG brand. NB: Apollo.io ≠ Apollo GraphQL.",
  },
  {
    company: "ZoomInfo",
    hq: "Vancouver WA, US",
    region: "US",
    category: "GTM data",
    status: "official",
    endpoint: "docs.zoominfo.com/docs/zi-api-mcp-overview (GA Jun 2026)",
    why: "The dominant GTM data vendor (500M contacts); fresh marquee launch. Top added pick alongside Clay/Apollo.",
  },
  {
    company: "Outreach",
    hq: "Seattle, US",
    region: "US",
    category: "Sales engagement / execution",
    status: "official",
    endpoint: "api.outreach.io/mcp (OAuth 2.1 + DCR)",
    why: "Sales-engagement leader (~$300M ARR). DCR-ready (an auth method Dust supports). Explicitly joined Anthropic's MCP ecosystem.",
  },
  {
    company: "HubSpot",
    hq: "Cambridge MA, US",
    region: "US",
    category: "CRM / marketing / sales",
    status: "official",
    endpoint: "mcp.hubspot.com (OAuth 2.1 + PKCE)",
    why: "Tier-1 CRM for the SMB/mid-market Dust GTM segment lives in. Live remote MCP = flagship logo.",
  },
  {
    company: "Common Room",
    hq: "Seattle, US",
    region: "US",
    category: "Signal-based GTM intelligence",
    status: "official",
    endpoint: "mcp.commonroom.io/mcp (OAuth 2.1)",
    why: "AI-native, well-funded (Index/Greylock); core 'agentic GTM' thesis. Also already showing up in Dust installs.",
  },
  {
    company: "Customer.io",
    hq: "Portland OR, US",
    region: "US",
    category: "Marketing / lifecycle automation",
    status: "official",
    endpoint: "docs.customer.io/ai/mcp (read/write/delete tools)",
    why: "Your priority. Agents can build segments, manage campaigns, inspect profiles — squarely GTM/lifecycle.",
  },
  {
    company: "Gong",
    hq: "San Francisco, US",
    region: "US",
    category: "Revenue intelligence",
    status: "beta",
    endpoint: "Admin-gated, rolling out (no public URL yet)",
    why: "Category-leading revenue intelligence (~$7B). Strong logo — confirm it's actually live before promising.",
  },
  {
    company: "Exa",
    hq: "San Francisco, US",
    region: "US",
    category: "AI search / prospecting research",
    status: "official",
    endpoint: "mcp.exa.ai/mcp",
    why: "Hot AI-native search; company + LinkedIn search tools are directly useful for prospecting/enrichment.",
  },
  {
    company: "Intercom",
    hq: "San Francisco, US",
    region: "US",
    category: "AI customer service (Fin)",
    status: "official",
    endpoint: "mcp.intercom.com/mcp (OAuth; US workspaces)",
    why: "Flagship AI-native support brand; surfaces customer/churn signals. CS-adjacent to GTM.",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// OTHER STRONG CANDIDATES  (official/validated MCP, didn't make the top 10)
// ─────────────────────────────────────────────────────────────────────────
export const OTHERS: Partner[] = [
  // ── Other UK-relevant: UK-HQ, a Dust UK advocate, or a UK-team pick (MCP-capable) ──
  { company: "Linear", hq: "San Francisco, US", region: "US", category: "Project / issue tracking", status: "official", endpoint: "mcp.linear.app/mcp (OAuth 2.1 + DCR)", ukHook: "Team pick (new name)", why: "Team-flagged; category-defining dev/PM tool, great hype association." },
  { company: "n8n", hq: "Berlin, DE", region: "EU", category: "Workflow automation", status: "official", endpoint: "Per-instance/workflow URLs (SSE/HTTP)", ukHook: "Team pick (new name) · in Dust installs", why: "Team-flagged RevOps/automation glue; already installed by Dust customers." },
  { company: "Customer.io", hq: "Portland OR, US", region: "US", category: "Lifecycle / marketing automation", status: "official", endpoint: "docs.customer.io/ai/mcp", ukHook: "Dust UK partner", why: "Also a US top-10 pick; flagged as a UK partner, so warm both ways." },
  { company: "Cognism", hq: "London, UK", region: "UK", category: "Sales intelligence", status: "community", endpoint: "Third-party/community MCP only", ukHook: "UK-HQ · Top-40 UK target · GTM-core", why: "UK sales-intel leader and a Top-40 target — strong if they ship an official MCP." },
  { company: "Contentsquare", hq: "Paris, FR", region: "EU", category: "Digital experience analytics", status: "in-dust", endpoint: "Installed by Dust customers (5 workspaces)", ukHook: "Top-UK-Logo advocate (Dust customer)", why: "Flagged UK advocate already running an MCP in Dust — warm relationship." },
  { company: "Spendesk", hq: "Paris, FR", region: "EU", category: "Spend management", status: "in-dust", endpoint: "Installed by Dust customers (4 workspaces)", ukHook: "UK advocate (Dust customer)", why: "UK advocate with a working MCP; finance-ops, not core GTM." },
  { company: "Pennylane", hq: "Paris, FR", region: "EU", category: "Accounting / finance", status: "in-dust", endpoint: "Installed by Dust customers (4 workspaces)", ukHook: "UK advocate (Dust customer)", why: "UK advocate with a working MCP; finance-ops." },
  { company: "Kyriba", hq: "San Diego, US", region: "US", category: "Treasury management", status: "in-dust", endpoint: "Installed by Dust customers (2 workspaces)", ukHook: "Top-UK-Logo advocate (Dust customer)", why: "Flagged UK advocate already running an MCP; treasury/finance-ops." },
  { company: "Qonto", hq: "Paris, FR", region: "EU", category: "Business banking / spend", status: "official", endpoint: "mcp.qonto.com/mcp (OAuth)", ukHook: "UK advocate (Dust customer)", why: "UK advocate; polished OAuth MCP. Ops-adjacent, not core GTM." },
  // ── US GTM / adjacent (for the US push) ──
  { company: "Salesforce", hq: "San Francisco, US", region: "US", category: "Enterprise CRM / Agentforce", status: "official", endpoint: "Salesforce-hosted MCP (Enterprise+, org-provisioned)", why: "The 800-lb CRM gorilla. Enterprise-skewed (deprioritised in Thibault's segmentation) but a huge logo." },
  { company: "Salesloft", hq: "Atlanta, US", region: "US", category: "Sales engagement", status: "beta", endpoint: "Customer-provisioned (confirm GA)", why: "Marquee sales-engagement brand, AI-native repositioning post-Clari." },
  { company: "Calendly", hq: "Atlanta, US", region: "US", category: "Scheduling", status: "official", endpoint: "mcp.calendly.com (DCR)", why: "Ubiquitous in sales workflows; clean NL-booking demo." },
  { company: "Chili Piper", hq: "New York, US", region: "US", category: "Lead routing / scheduling", status: "official", endpoint: "fire.chilipiper.com/api/fire-edge/v1/org/mcp", why: "Pure RevOps fit — inbound lead routing + scheduling." },
  { company: "Klaviyo", hq: "Boston, US", region: "US", category: "Marketing automation", status: "official", endpoint: "developers.klaviyo.com (klaviyo_mcp_server)", why: "Public martech leader (NYSE: KVYO); marketing-side GTM." },
  { company: "Stripe", hq: "San Francisco, US", region: "US", category: "Payments / billing", status: "official", endpoint: "mcp.stripe.com (OAuth)", why: "Reference AI-era brand; billing/revenue-ops adjacency, huge association value." },
  { company: "Perplexity", hq: "San Francisco, US", region: "US", category: "AI answer engine", status: "official", endpoint: "@perplexity-ai/mcp-server (local, API key)", why: "Major AI-native brand; research/sales-intel use." },
  { company: "Notion", hq: "San Francisco, US", region: "US", category: "Productivity / docs", status: "official", endpoint: "mcp.notion.com/mcp (OAuth)", why: "Large AI-native productivity brand; teams run lightweight CRMs in it." },
  { company: "Firecrawl", hq: "San Francisco, US", region: "US", category: "Web data / extraction", status: "official", endpoint: "firecrawl-mcp (local, API key)", why: "AI-native web-data infra; common for lead enrichment / market data." },
  { company: "Browserbase", hq: "San Francisco, US", region: "US", category: "Browser infra for agents", status: "official", endpoint: "mcp.browserbase.com/mcp", why: "Scaling agent-infra startup; agentic web automation for outreach/data." },
  { company: "Glean", hq: "Palo Alto, US", region: "US", category: "Enterprise search / work AI", status: "official", endpoint: "developers.glean.com/guides/mcp", why: "High-growth enterprise-search unicorn; surfaces account/deal context. Also a platform peer." },
  { company: "Webflow", hq: "San Francisco, US", region: "US", category: "Web / CMS (marketing)", status: "official", endpoint: "mcp.webflow.com/mcp (OAuth)", why: "Marketing-site/landing-page builder; also already in Dust installs." },
  { company: "Twilio", hq: "San Francisco, US", region: "US", category: "Comms / outreach", status: "beta", endpoint: "twilio.com/docs/ai/mcp (hosted = docs-only; action MCP self-hosted)", why: "Comms backbone for outbound/notifications." },
  // ── Continental EU — strong MCP but NO UK hook (these are for the EU motion, not the UK list) ──
  { company: "Lovable", hq: "Stockholm, SE", region: "EU", category: "AI app builder", status: "official", endpoint: "mcp.lovable.dev (OAuth)", why: "Europe's fastest-scaling 'vibe-coding' brand. Team's 'hot EU' pick — co-marketing, no UK hook." },
  { company: "Mistral", hq: "Paris, FR", region: "EU", category: "AI platform / Le Chat", status: "none", endpoint: "Le Chat MCP connectors (host/peer, not a connect-to server)", why: "European AI champion, but an MCP client/host — co-marketing peer, not an integration." },
  { company: "Hugging Face", hq: "Paris / global", region: "EU", category: "AI model & dataset hub", status: "official", endpoint: "huggingface.co/settings/mcp", why: "Cool EU-rooted AI leader; MCP is model/dataset search (association value, not GTM)." },
  { company: "Typeform", hq: "Barcelona, ES", region: "EU", category: "Forms / lead capture", status: "official", endpoint: "api.eu.typeform.com/mcp (OAuth, EU DC)", why: "EU lead-capture leader with a clean public MCP. No specific UK hook." },
  { company: "Planhat", hq: "Stockholm, SE", region: "EU", category: "Customer success platform", status: "in-dust", endpoint: "Installed by Dust customers (13 ws, ~196k calls — heaviest usage)", why: "Heaviest per-workspace MCP usage in your data; Swedish, no specific UK hook." },
  { company: "Modjo", hq: "Paris, FR", region: "EU", category: "Conversation / revenue intelligence", status: "in-dust", endpoint: "Installed by Dust customers (21 ws, ~88k calls)", why: "The French Gong — highest-usage EU GTM MCP in your data. Strong for the FR/EU motion." },
  { company: "Lemlist", hq: "Paris, FR", region: "EU", category: "Sales engagement / outbound", status: "official", endpoint: "app.lemlist.com/mcp", why: "Big EU outbound brand; sequences + 450M-lead DB. FR/EU motion." },
  { company: "Brevo", hq: "Paris, FR", region: "EU", category: "Marketing automation + CRM", status: "official", endpoint: "mcp.brevo.com/v1/brevo/mcp", why: "All-in-one marketing/CRM, ~600k customers. One of the most complete EU marketing MCPs." },
  { company: "Pigment", hq: "Paris, FR", region: "EU", category: "Business planning / RevOps", status: "official", endpoint: "Per-workspace endpoint", why: "Well-funded French scale-up ($397M); native per-tenant MCP. RevOps planning." },
  { company: "Storyblok", hq: "Linz, AT", region: "EU", category: "Headless CMS (marketing)", status: "official", endpoint: "mcp.labs.storyblok.com", why: "Austrian CMS scale-up; 'agent-ready content' narrative." },
  { company: "Pleo", hq: "Copenhagen, DK", region: "EU", category: "Spend management", status: "beta", endpoint: "Announced Jun 2026", why: "Nordic fintech with a loud agentic push; verify GA. Also a Top-40 UK target." },
];

// ─────────────────────────────────────────────────────────────────────────
// HOT BRANDS WITH NO USABLE MCP YET  → co-marketing / outreach-to-build targets
// ─────────────────────────────────────────────────────────────────────────
export const NO_MCP_TARGETS: Partner[] = [
  { company: "11x", hq: "San Francisco, US (UK-founded)", region: "US", category: "AI SDR", status: "none", endpoint: "API only (no MCP)", why: "Flagship AI-native GTM/sales brand (a16z/Benchmark). Prime build-to-integrate + co-marketing target." },
  { company: "Unify", hq: "San Francisco, US", region: "US", category: "AI-native outbound", status: "none", endpoint: "REST API + SDKs (no MCP)", why: "Rising AI-GTM leader (Sequoia/Thrive/OpenAI Fund; Cursor & Perplexity as customers)." },
  { company: "6sense", hq: "San Mateo, US", region: "US", category: "ABM / intent data", status: "none", endpoint: "Official MCP on roadmap ('Beta, Summer 2026')", why: "Core-GTM relevance; track for GA. Outreach now to shape it." },
  { company: "Zendesk", hq: "San Francisco, US", region: "US", category: "Customer service", status: "none", endpoint: "MCP client live; own server in EAP", why: "Big CX incumbent; consumes MCPs today, its server isn't shippable yet." },
  { company: "Rippling", hq: "San Francisco, US", region: "US", category: "HR / IT / payroll", status: "community", endpoint: "Community wrappers only (StackOne)", why: "Marquee pre-IPO scale-up (~$16.8B) but REST-only — integration = build." },
  { company: "Synthesia", hq: "London, UK", region: "UK", category: "AI video", status: "none", endpoint: "API only (Zapier MCP wrapper exists)", why: "Major UK AI-native brand; no native MCP. Marketing/enablement angle — nudge toward a native server." },
  { company: "PolyAI", hq: "London, UK", region: "UK", category: "Voice AI (CCaaS)", status: "none", endpoint: "Internal MCP only; public partner MCP planned", why: "Scaling UK voice-AI; no usable MCP today. Monitor their roadmap." },
  { company: "Legora", hq: "Stockholm, SE", region: "EU", category: "Legal AI", status: "none", endpoint: "MCP client only (consumes, doesn't expose)", why: "Hot legal-AI scale-up; MCP-active but client-side. Co-marketing, not integration." },
  { company: "Cursor (Anysphere)", hq: "San Francisco, US", region: "US", category: "AI code editor", status: "none", endpoint: "MCP client/host (not a server)", why: "Massive AI-native brand but consumes MCPs; not an integration target. Pure co-marketing." },
  { company: "Pipedrive", hq: "Tallinn, EE", region: "EU", category: "CRM", status: "community", endpoint: "Community MCPs only (no official)", why: "GTM-core CRM; would be a strong add if they ship an official MCP. Already in Dust installs via community build." },
];

// ─────────────────────────────────────────────────────────────────────────
// VC ECOSYSTEM  — advocates / distribution, NOT MCP integration partners
// ─────────────────────────────────────────────────────────────────────────
export const VC_ECOSYSTEM = [
  { firm: "Balderton", note: "EU-focused; portfolio intros to scaling B2B SaaS." },
  { firm: "Sequoia", note: "Portfolio = many of the US GTM/AI-native names above." },
  { firm: "ICONIQ", note: "Growth-stage enterprise software; warm intros." },
  { firm: "EQT", note: "EU growth/PE; later-stage portfolio access." },
  { firm: "Eurazeo", note: "EU growth investor; French ecosystem reach." },
];

// ─────────────────────────────────────────────────────────────────────────
// CUSTOMER-INSTALLED, NOT-LISTED MCPs  (your usage data)
// cols: name, workspaces (# of customer workspaces, sorted desc), usage (tool calls)
// ─────────────────────────────────────────────────────────────────────────
export interface InstalledMcp {
  name: string;
  workspaces: number;
  usage: string;
}

export const INSTALLED: InstalledMcp[] = [
  { name: "data.gouv.fr", workspaces: 69, usage: "15.6k" },
  { name: "Pappers", workspaces: 25, usage: "42.8k" },
  { name: "Make", workspaces: 25, usage: "21.9k" },
  { name: "PD Connect", workspaces: 25, usage: "5.9k" },
  { name: "Apify", workspaces: 22, usage: "13.0k" },
  { name: "Modjo", workspaces: 21, usage: "87.9k" },
  { name: "n8n", workspaces: 18, usage: "9.7k" },
  { name: "Ahrefs", workspaces: 14, usage: "8.3k" },
  { name: "Webflow", workspaces: 14, usage: "4.8k" },
  { name: "Gamma", workspaces: 14, usage: "176" },
  { name: "Planhat", workspaces: 13, usage: "196.3k" },
  { name: "ClickUp", workspaces: 13, usage: "10.3k" },
  { name: "Mixpanel", workspaces: 12, usage: "8.6k" },
  { name: "Tally Forms", workspaces: 12, usage: "2.6k" },
  { name: "Metabase", workspaces: 11, usage: "5.3k" },
  { name: "Leexi", workspaces: 11, usage: "533" },
  { name: "Omni", workspaces: 9, usage: "70.2k" },
  { name: "Sentry", workspaces: 9, usage: "4.3k" },
  { name: "Furious", workspaces: 9, usage: "4.8k" },
  { name: "Légifrance", workspaces: 9, usage: "5.4k" },
  { name: "Brevo", workspaces: 9, usage: "3.3k" },
  { name: "Catalog", workspaces: 7, usage: "25.6k" },
  { name: "Firecrawl", workspaces: 7, usage: "21.5k" },
  { name: "Unipile", workspaces: 7, usage: "4.3k" },
  { name: "Wiz", workspaces: 7, usage: "2.8k" },
  { name: "Slite", workspaces: 7, usage: "3.9k" },
  { name: "TypeScript MCP (Vercel)", workspaces: 6, usage: "9.6k" },
  { name: "Lusha", workspaces: 6, usage: "2.7k" },
  { name: "BrightData", workspaces: 6, usage: "1.5k" },
  { name: "mcpff", workspaces: 6, usage: "178" },
  { name: "Affinity", workspaces: 5, usage: "24.0k" },
  { name: "Pigment", workspaces: 5, usage: "12.0k" },
  { name: "Costory", workspaces: 5, usage: "1.5k" },
  { name: "Contentsquare", workspaces: 5, usage: "1.8k" },
  { name: "Calendly", workspaces: 5, usage: "680" },
  { name: "Google Chat", workspaces: 5, usage: "948" },
  { name: "Peec", workspaces: 5, usage: "228" },
  { name: "Float", workspaces: 5, usage: "335" },
  { name: "Mobbin", workspaces: 5, usage: "63" },
  { name: "Klaviyo", workspaces: 5, usage: "178" },
  { name: "BigQuery", workspaces: 4, usage: "27.1k" },
  { name: "Postgres", workspaces: 4, usage: "24.2k" },
  { name: "server-main", workspaces: 4, usage: "4.7k" },
  { name: "Zim MCP", workspaces: 4, usage: "2.0k" },
  { name: "Spendesk", workspaces: 4, usage: "2.5k" },
  { name: "Qlik", workspaces: 4, usage: "1.0k" },
  { name: "Todoist", workspaces: 4, usage: "649" },
  { name: "Coda", workspaces: 4, usage: "837" },
  { name: "Google Ads", workspaces: 4, usage: "798" },
  { name: "Pennylane", workspaces: 4, usage: "498" },
  { name: "SIIT", workspaces: 4, usage: "3.3k" },
  { name: "Circleback", workspaces: 4, usage: "385" },
  { name: "Data Gouv MCP", workspaces: 4, usage: "269" },
  { name: "Switchbox/Harvest", workspaces: 4, usage: "1.2k" },
  { name: "Dropbox", workspaces: 4, usage: "112" },
  { name: "Excalidraw", workspaces: 4, usage: "130" },
  { name: "Contentful", workspaces: 4, usage: "115" },
  { name: "Cloudflare", workspaces: 4, usage: "668" },
  { name: "mcp-ff", workspaces: 4, usage: "16" },
  { name: "Praiz", workspaces: 3, usage: "20.5k" },
  { name: "Ada", workspaces: 3, usage: "7.0k" },
  { name: "Dovetail", workspaces: 3, usage: "7.5k" },
  { name: "Odoo", workspaces: 3, usage: "5.6k" },
  { name: "Pipedrive", workspaces: 3, usage: "4.3k" },
  { name: "Marvin", workspaces: 3, usage: "2.3k" },
  { name: "Nimble", workspaces: 3, usage: "7.0k" },
  { name: "Hunter", workspaces: 3, usage: "1.9k" },
  { name: "Harvestr", workspaces: 3, usage: "3.1k" },
  { name: "Google Search Console", workspaces: 3, usage: "1.5k" },
  { name: "Boondmanager", workspaces: 3, usage: "1.7k" },
  { name: "incident.io", workspaces: 3, usage: "2.0k" },
  { name: "DataForSEO", workspaces: 3, usage: "1.1k" },
  { name: "CFNEWS", workspaces: 3, usage: "1.3k" },
  { name: "Circle", workspaces: 3, usage: "694" },
  { name: "Playwright", workspaces: 3, usage: "495" },
  { name: "Raindrop", workspaces: 3, usage: "435" },
  { name: "PeerPanda", workspaces: 3, usage: "252" },
  { name: "SerpAPI", workspaces: 3, usage: "241" },
  { name: "Kit", workspaces: 3, usage: "253" },
  { name: "SimilarWeb", workspaces: 3, usage: "223" },
  { name: "Plaud", workspaces: 3, usage: "759" },
  { name: "Meta Ads", workspaces: 3, usage: "213" },
  { name: "Windsor.ai", workspaces: 3, usage: "458" },
  { name: "Edusign", workspaces: 3, usage: "149" },
  { name: "Hyperline", workspaces: 3, usage: "582" },
  { name: "AWS Docs", workspaces: 3, usage: "112" },
  { name: "Read AI", workspaces: 3, usage: "87" },
  { name: "Common Room", workspaces: 3, usage: "86" },
  { name: "Wrike", workspaces: 3, usage: "343" },
  { name: "ActiveCampaign", workspaces: 3, usage: "64" },
  { name: "Otter", workspaces: 3, usage: "85" },
  { name: "Stateless Server", workspaces: 3, usage: "51" },
  { name: "Google Docs", workspaces: 3, usage: "47" },
  { name: "Aircall", workspaces: 3, usage: "3.6k" },
  { name: "NOOTA", workspaces: 3, usage: "33" },
  { name: "Koddex Vault", workspaces: 3, usage: "24" },
  { name: "Grain", workspaces: 3, usage: "16" },
  { name: "Plain", workspaces: 2, usage: "7.3k" },
  { name: "Grafana", workspaces: 2, usage: "7.3k" },
  { name: "Yahoo Finance", workspaces: 2, usage: "6.2k" },
  { name: "Perplexity", workspaces: 2, usage: "6.1k" },
  { name: "Anaxago", workspaces: 2, usage: "4.7k" },
  { name: "Google Analytics", workspaces: 2, usage: "4.2k" },
  { name: "Box", workspaces: 2, usage: "3.7k" },
  { name: "Upflow", workspaces: 2, usage: "4.5k" },
  { name: "Kyriba", workspaces: 2, usage: "4.8k" },
  { name: "Pendo", workspaces: 2, usage: "2.0k" },
  { name: "HelpScout", workspaces: 2, usage: "2.6k" },
  { name: "Moneyball Search", workspaces: 2, usage: "1.3k" },
  { name: "google_workspace", workspaces: 2, usage: "1.1k" },
  { name: "Roblox Studio", workspaces: 2, usage: "905" },
  { name: "Swan", workspaces: 2, usage: "741" },
  { name: "Outline", workspaces: 2, usage: "680" },
  { name: "Composio", workspaces: 2, usage: "635" },
  { name: "Allo", workspaces: 2, usage: "599" },
  { name: "OpenMetadata", workspaces: 2, usage: "596" },
  { name: "Sunsama", workspaces: 2, usage: "572" },
  { name: "Langfuse", workspaces: 2, usage: "476" },
  { name: "Tavily", workspaces: 2, usage: "468" },
  { name: "Zoom", workspaces: 2, usage: "910" },
  { name: "Supernova", workspaces: 2, usage: "450" },
  { name: "Rube", workspaces: 2, usage: "416" },
  { name: "Egnyte", workspaces: 2, usage: "389" },
  { name: "Metricool", workspaces: 2, usage: "374" },
  { name: "GoMarble", workspaces: 2, usage: "634" },
  { name: "Aligneurs DB", workspaces: 2, usage: "286" },
  { name: "Sanity", workspaces: 2, usage: "505" },
  { name: "Obsidian", workspaces: 2, usage: "265" },
  { name: "RapidAPI", workspaces: 2, usage: "263" },
  { name: "commonroommcpserver", workspaces: 2, usage: "263" },
  { name: "PandaDoc", workspaces: 2, usage: "236" },
  { name: "mcpheadhunter", workspaces: 2, usage: "228" },
  { name: "Profound", workspaces: 2, usage: "222" },
  { name: "PagerDuty", workspaces: 2, usage: "221" },
  { name: "Lokalise", workspaces: 2, usage: "281" },
  { name: "Hunter Remote MCP", workspaces: 2, usage: "195" },
  { name: "Higgsfield AI", workspaces: 2, usage: "190" },
  { name: "make", workspaces: 2, usage: "169" },
  { name: "Fellow", workspaces: 2, usage: "190" },
  { name: "Exa Search", workspaces: 2, usage: "151" },
  { name: "Sandbox MCP", workspaces: 2, usage: "150" },
  { name: "yfinance", workspaces: 2, usage: "123" },
  { name: "Lettera", workspaces: 2, usage: "116" },
  { name: "Cards Server", workspaces: 2, usage: "115" },
  { name: "Data gouv MCP", workspaces: 2, usage: "115" },
  { name: "Buffer", workspaces: 2, usage: "112" },
  { name: "Triple Whale", workspaces: 2, usage: "111" },
  { name: "DeepWiki", workspaces: 2, usage: "105" },
  { name: "hotelaccommodationmcp", workspaces: 2, usage: "93" },
  { name: "Finthesis", workspaces: 2, usage: "91" },
  { name: "Drata", workspaces: 2, usage: "85" },
  { name: "Primo", workspaces: 2, usage: "79" },
  { name: "Rube MCP", workspaces: 2, usage: "60" },
  { name: "Browserbase", workspaces: 2, usage: "56" },
  { name: "FullStory", workspaces: 2, usage: "108" },
  { name: "Shopify", workspaces: 2, usage: "51" },
  { name: "Axiom", workspaces: 2, usage: "49" },
  { name: "OCI ADBS", workspaces: 2, usage: "49" },
  { name: "Toolbox", workspaces: 2, usage: "48" },
  { name: "Tomorro", workspaces: 2, usage: "64" },
  { name: "Eventbrite", workspaces: 2, usage: "45" },
  { name: "Doit", workspaces: 2, usage: "43" },
  { name: "Hackeet", workspaces: 2, usage: "40" },
  { name: "ClinicalTrials.gov", workspaces: 2, usage: "39" },
  { name: "PrestaShop", workspaces: 2, usage: "38" },
  { name: "Ring", workspaces: 2, usage: "34" },
  { name: "Napta", workspaces: 2, usage: "53" },
  { name: "Specterm", workspaces: 2, usage: "33" },
  { name: "Inven", workspaces: 2, usage: "31" },
  { name: "Google Tasks", workspaces: 2, usage: "28" },
  { name: "Metaview", workspaces: 2, usage: "28" },
  { name: "Lucid", workspaces: 2, usage: "28" },
  { name: "Hodor Shield", workspaces: 2, usage: "28" },
  { name: "Callisto", workspaces: 2, usage: "24" },
  { name: "Azure", workspaces: 2, usage: "37" },
  { name: "Insign", workspaces: 2, usage: "23" },
  { name: "Nanobanana", workspaces: 2, usage: "23" },
  { name: "Chargebee", workspaces: 2, usage: "21" },
  { name: "Trello", workspaces: 2, usage: "20" },
  { name: "Looker", workspaces: 2, usage: "33" },
  { name: "Superhuman", workspaces: 2, usage: "18" },
  { name: "Mailchimp", workspaces: 2, usage: "16" },
  { name: "Krisp", workspaces: 2, usage: "14" },
  { name: "Clay", workspaces: 2, usage: "21" },
  { name: "Adomik", workspaces: 2, usage: "12" },
  { name: "Context MCP", workspaces: 2, usage: "12" },
  { name: "Axonaut", workspaces: 2, usage: "12" },
  { name: "sandbox_mcp", workspaces: 2, usage: "11" },
  { name: "Colibri", workspaces: 2, usage: "7" },
  { name: "[TEST] ssrfexploitserver", workspaces: 2, usage: "5" },
  { name: "Livestorm", workspaces: 2, usage: "—" },
];

// Notable GTM/partner signals hiding in the install data (curated highlights).
export const INSTALL_HIGHLIGHTS = [
  "Modjo (21 ws / 88k) & Planhat (13 ws / 196k) — highest-signal EU GTM tools already in heavy use.",
  "Affinity (5 ws / 24k) — relationship CRM; strong VC/PE-adjacent GTM.",
  "Lusha, Unipile, Hunter, Pappers, BrightData, DataForSEO, SimilarWeb, Ahrefs — a whole prospecting/enrichment cluster customers wired up themselves.",
  "Brevo, Klaviyo, ActiveCampaign, Mailchimp, Buffer, Metricool — marketing-automation demand.",
  "Pipedrive, Odoo, Axonaut — CRMs customers added via community MCPs (official ones would be cleaner).",
  "Leexi, Praiz, Circleback, Read AI, Otter, Grain, Fellow, NOOTA, Metaview — a big meeting-intelligence long tail (Modjo leads).",
  "Common Room appears twice (official + a custom 'commonroommcpserver') — confirms the US pick.",
];
