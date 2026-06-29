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
// TOP 10 — UK & EUROPE  (GTM-tilted, hype/scaling, MCP-ready)
// Honest note: pure UK-HQ + official MCP is a short list (Attio, Granola,
// ElevenLabs, Tessl). The rest of the strong pool is continental Europe.
// ─────────────────────────────────────────────────────────────────────────
export const TOP_UK_EU: Partner[] = [
  {
    company: "Attio",
    hq: "London, UK",
    region: "UK",
    category: "AI-native CRM",
    status: "official",
    endpoint: "mcp.attio.com/mcp (OAuth)",
    why: "The AI-native CRM for GTM teams — top UK pick. Already in Dust docs, so likely partly integrated; deepen the relationship.",
  },
  {
    company: "Lemlist",
    hq: "Paris, FR",
    region: "EU",
    category: "Sales engagement / outbound",
    status: "official",
    endpoint: "app.lemlist.com/mcp",
    why: "Core outbound/RevOps category, big EU brand. Agents can run sequences, search the 450M-lead DB, analyse performance.",
  },
  {
    company: "Brevo",
    hq: "Paris, FR",
    region: "EU",
    category: "Marketing automation + CRM",
    status: "official",
    endpoint: "mcp.brevo.com/v1/brevo/mcp",
    why: "All-in-one marketing/CRM, ~600k customers. One of the most complete EU marketing MCPs (campaigns, contacts, analytics).",
  },
  {
    company: "Modjo",
    hq: "Paris, FR",
    region: "EU",
    category: "Conversation / revenue intelligence",
    status: "in-dust",
    endpoint: "Installed by Dust customers (21 workspaces, ~88k calls)",
    why: "The French Gong. Already one of the highest-usage MCPs across Dust customers — validated GTM demand.",
  },
  {
    company: "Granola",
    hq: "London, UK",
    region: "UK",
    category: "AI meeting notes",
    status: "official",
    endpoint: "mcp.granola.ai/mcp (OAuth, GA)",
    why: "Hot UK AI-native brand, already leveraged + a motivated partner. Meeting context → CRM/notes workflows.",
  },
  {
    company: "Typeform",
    hq: "Barcelona, ES",
    region: "EU",
    category: "Forms / lead capture",
    status: "official",
    endpoint: "api.eu.typeform.com/mcp (OAuth, EU DC)",
    why: "Top-of-funnel GTM: lead-gen + customer data. Well-known brand with a deliberate public MCP and an EU endpoint.",
  },
  {
    company: "Lovable",
    hq: "Stockholm, SE",
    region: "EU",
    category: "AI app builder",
    status: "official",
    endpoint: "mcp.lovable.dev (OAuth)",
    why: "One of Europe's fastest-scaling AI-native brands ('vibe-coding' leader). Huge mindshare for co-marketing.",
  },
  {
    company: "n8n",
    hq: "Berlin, DE",
    region: "EU",
    category: "Workflow automation",
    status: "official",
    endpoint: "Per-instance/workflow URLs (SSE/HTTP)",
    why: "The RevOps/automation glue; also already installed across Dust customers. Both MCP server and client — very MCP-mature.",
  },
  {
    company: "ElevenLabs",
    hq: "London, UK",
    region: "UK",
    category: "AI voice / audio",
    status: "official",
    endpoint: "github.com/elevenlabs/elevenlabs-mcp (local, API key)",
    why: "One of the hottest AI-native brands globally; strong UK hype association. (MCP is local/API-key flavour, not remote OAuth.)",
  },
  {
    company: "Pigment",
    hq: "Paris, FR",
    region: "EU",
    category: "Business planning / RevOps",
    status: "official",
    endpoint: "Per-workspace endpoint (Workspace › Integrations › MCP)",
    why: "Well-funded French enterprise scale-up ($397M). Native per-tenant MCP; sales/RevOps planning adjacency.",
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
  // US GTM / adjacent
  { company: "Salesforce", hq: "San Francisco, US", region: "US", category: "Enterprise CRM / Agentforce", status: "official", endpoint: "Salesforce-hosted MCP (Enterprise+, org-provisioned)", why: "The 800-lb CRM gorilla. Enterprise-skewed (deprioritised in Thibault's segmentation) but a huge logo." },
  { company: "Salesloft", hq: "Atlanta, US", region: "US", category: "Sales engagement", status: "beta", endpoint: "Customer-provisioned (confirm GA)", why: "Marquee sales-engagement brand, AI-native repositioning post-Clari." },
  { company: "Calendly", hq: "Atlanta, US", region: "US", category: "Scheduling", status: "official", endpoint: "mcp.calendly.com (DCR)", why: "Ubiquitous in sales workflows; clean NL-booking demo." },
  { company: "Chili Piper", hq: "New York, US", region: "US", category: "Lead routing / scheduling", status: "official", endpoint: "fire.chilipiper.com/api/fire-edge/v1/org/mcp", why: "Pure RevOps fit — inbound lead routing + scheduling." },
  { company: "Klaviyo", hq: "Boston, US", region: "US", category: "Marketing automation", status: "official", endpoint: "developers.klaviyo.com (klaviyo_mcp_server)", why: "Public martech leader (NYSE: KVYO); marketing-side GTM." },
  { company: "Stripe", hq: "San Francisco, US", region: "US", category: "Payments / billing", status: "official", endpoint: "mcp.stripe.com (OAuth)", why: "Reference AI-era brand; billing/revenue-ops adjacency, huge association value." },
  { company: "Perplexity", hq: "San Francisco, US", region: "US", category: "AI answer engine", status: "official", endpoint: "@perplexity-ai/mcp-server (local, API key)", why: "Major AI-native brand; research/sales-intel use." },
  { company: "Notion", hq: "San Francisco, US", region: "US", category: "Productivity / docs", status: "official", endpoint: "mcp.notion.com/mcp (OAuth)", why: "Large AI-native productivity brand; teams run lightweight CRMs in it." },
  { company: "Linear", hq: "San Francisco, US", region: "US", category: "Project / issue tracking", status: "official", endpoint: "mcp.linear.app/mcp (OAuth 2.1 + DCR)", why: "Category-defining dev/PM tool; great hype association." },
  { company: "Firecrawl", hq: "San Francisco, US", region: "US", category: "Web data / extraction", status: "official", endpoint: "firecrawl-mcp (local, API key)", why: "AI-native web-data infra; common for lead enrichment / market data." },
  { company: "Browserbase", hq: "San Francisco, US", region: "US", category: "Browser infra for agents", status: "official", endpoint: "mcp.browserbase.com/mcp", why: "Scaling agent-infra startup; agentic web automation for outreach/data." },
  { company: "Glean", hq: "Palo Alto, US", region: "US", category: "Enterprise search / work AI", status: "official", endpoint: "developers.glean.com/guides/mcp", why: "High-growth enterprise-search unicorn; surfaces account/deal context. Also a platform peer." },
  { company: "Snowflake", hq: "Bozeman MT, US", region: "US", category: "Data platform", status: "official", endpoint: "Snowflake-managed MCP (GA, in-workspace)", why: "Underpins data for sales/marketing analytics; marquee data logo." },
  { company: "Webflow", hq: "San Francisco, US", region: "US", category: "Web / CMS (marketing)", status: "official", endpoint: "mcp.webflow.com/mcp (OAuth)", why: "Marketing-site/landing-page builder; also already in Dust installs." },
  { company: "Twilio", hq: "San Francisco, US", region: "US", category: "Comms / outreach", status: "beta", endpoint: "twilio.com/docs/ai/mcp (hosted = docs-only; action MCP self-hosted)", why: "Comms backbone for outbound/notifications." },
  // EU / UK
  { company: "Hugging Face", hq: "Paris/NY", region: "EU", category: "AI model hub", status: "official", endpoint: "huggingface.co/settings/mcp", why: "Top AI-native brand with French roots; great hype, though MCP is model/dataset search (not GTM)." },
  { company: "Planhat", hq: "Stockholm, SE", region: "EU", category: "Customer success platform", status: "in-dust", endpoint: "Installed by Dust customers (13 workspaces, ~196k calls — heaviest usage)", why: "Post-sale GTM (CS). Extremely high per-workspace usage in Dust = strong validated demand." },
  { company: "Mistral", hq: "Paris, FR", region: "EU", category: "AI platform / Le Chat", status: "none", endpoint: "MCP connectors in Le Chat (client/host, not a connect-to server)", why: "Hype EU AI brand, but a peer/host (consumes MCPs) rather than an integration target. Co-marketing play." },
  { company: "Qonto", hq: "Paris, FR", region: "EU", category: "Business banking / spend", status: "official", endpoint: "mcp.qonto.com/mcp (OAuth)", why: "Major EU fintech; polished OAuth MCP with curated write-ops. Ops-adjacent, not core GTM." },
  { company: "Storyblok", hq: "Linz, AT", region: "EU", category: "Headless CMS (marketing)", status: "official", endpoint: "mcp.labs.storyblok.com", why: "Notable EU CMS scale-up; 'agent-ready content' marketing narrative." },
  { company: "Tessl", hq: "London, UK", region: "UK", category: "AI software dev", status: "official", endpoint: "tessl mcp start (local/stdio)", why: "Hot UK AI-native dev brand ($750M val). Dev-tooling, not GTM — UK logo value." },
  { company: "Pleo", hq: "Copenhagen, DK", region: "EU", category: "Spend management", status: "beta", endpoint: "Announced Jun 2026, 'launching this summer'", why: "Big Nordic fintech making a loud agentic push. Verify GA before featuring." },
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
