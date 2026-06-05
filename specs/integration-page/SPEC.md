# Integration Detail Page — Spec Package

Reference example: **Attio** (`/integrations/attio`)

This package describes what an MCP integration detail page should contain on dust.tt. Use Attio as the canonical example — every partner page (Customer.io, Notion, HubSpot, etc.) follows the same template with partner-specific copy and tool lists.

## TL;DR

1. The current dust.tt/integrations/attio page is sparse — hero, action list, related apps, CTA.
2. This spec adds three new sections that turn the page from a technical reference into a partnership / sales surface: a **live chat demo** of an agent calling the integration, a **jobs-to-be-done** grid (3 use cases), and a tightened **supported actions** card layout.
3. Everything else (hero, related integrations, final CTA) stays close to the existing dust.tt pattern.

## Live preview

The full page is built and live at:

→ **https://raph-dust-ecosystem.vercel.app/integrations/attio**

Open it side-by-side with dust.tt/integrations/attio to see the diff visually. Source file: `src/app/integrations/attio/page.tsx` in [raphael-assaraf/raph-dust-ecosystem](https://github.com/raphael-assaraf/raph-dust-ecosystem).

## Page anatomy (top to bottom)

| # | Section | Status | Component |
|---|---|---|---|
| 1 | Site header | EXISTING — reuse `SiteHeader` (or dust-main equivalent) | shared |
| 2 | Hero (logo + headline + auth note + 2 CTAs) | EXISTING — mirror dust.tt's current treatment | inline |
| 3 | **Live demo (agent chat mockup)** | **NEW** | `AgentChatMockup` |
| 4 | **"What you can do with X" (jobs-to-be-done grid)** | **NEW** | `UseCaseGrid` |
| 5 | Supported actions (technical reference) | EXISTING but compress | inline |
| 6 | Other integrations you might like | EXISTING — keep | inline |
| 7 | Final CTA | EXISTING — reuse `FinalCTASection` | shared |
| 8 | Site footer | EXISTING — reuse `SiteFooter` | shared |

The two **NEW** sections (3 and 4) are the heart of this spec. The others get refreshed visually but are conceptually the same as today.

---

## Section 1 — Hero

**Goal:** Identify the partner immediately, tell the user what the integration does in one line, give them two clear next actions.

**Layout:** Centered, max-width prose container, generous top/bottom padding (pt-16/24 md:pt-24).

**Content (Attio):**
- Logo tile (h-16 w-16, rounded-2xl, bordered, muted bg, partner SVG inside)
- H1, mono font: *"AI Sales Assistant for Attio"*
- P (lg), muted: *"Automate your Attio CRM workflows with AI agents. Update records, log activities, and get insights automatically."*
- P (xs), muted, hint: *"Requires authorization to connect"*
- Two CTAs:
  - Primary (`highlight` variant): *"Get started with Dust"* + RocketIcon
  - Secondary (`outline` variant): *"View documentation"* + ExternalLinkIcon

**Dust design tokens used:**
- `font-mono heading-mono-5xl md:heading-mono-6xl` for H1 (Geist Mono)
- `text-muted-foreground` for subtitle + auth note
- Border radius `rounded-2xl` for the logo tile

---

## Section 2 — Live demo (NEW)

**Goal:** Show the integration in motion. A short scripted Dust chat showing the agent running 3-4 MCP tool calls against the partner and returning a useful response. Most pages on the internet describe what they do; this shows it.

**Component:** `AgentChatMockup`

**Layout:** Centered, max-w-3xl. Behind the chat, a `BrowserMockup` frame (already in repo) gives it the "you're seeing real Dust" feel.

**Props (Attio example):**
```tsx
<AgentChatMockup
  partner={{ name: "Attio", logo: AttioLogo, logoTint: "text-foreground" }}
  userPrompt="Give me a recap of our sales performance last week."
  toolCalls={[
    "search-records",
    "semantic-search-notes",
    "semantic-search-call-recordings",
    "search-meetings",
  ]}
  completedInSeconds={14}
  agentResponse={/* JSX — see source for the Attio version */}
/>
```

**Structure of the mockup:**
1. User bubble (right-aligned, small): the prompt
2. Agent header: Dust colorful square logo + "Completed in N sec"
3. Inline tool-call card listing the tools that fired (the names should match real MCP tool names from the partner's server)
4. Agent response: prose + lists, with `<Citation>N</Citation>` inline citation chips
5. Compact "Ask a question" input bar at the bottom with the agent picker chip (cosmetic — non-interactive)

**Why it matters:** The chat mockup is what makes the page read as "an AI product page" rather than "an integration directory entry." It should land within the first scroll on desktop.

---

## Section 3 — Jobs to be done (NEW)

**Goal:** Translate the partner's technical capabilities into 3 (occasionally 2 or 4) human-recognizable "jobs to be done." This is what a buyer cares about, not the tool names.

**Component:** `UseCaseGrid`

**Layout:** Full-width band with `bg-muted/40` for visual rhythm. `DustDecoration` shapes (top-left + bottom-right) for brand accent. H2 centered: *"What you can do with Attio"*.

**Each card:**
- Icon (Sparkle/Heroicon) in a small colored badge (`bg-X-50`/`text-X-600`)
- JTBD title (broad, recognizable) — e.g. *"Pre-call account snapshot"*
- One-line description, ~140 chars
- Small list of the MCP tools that enable it (3-5 chips, monospace, muted)

**Color variants:** blue / green / golden / rose / pink / violet — use 3 distinct colors per page (blue / green / golden is the default).

**Attio example use cases:**

```tsx
<UseCaseGrid
  useCases={[
    {
      icon: EyeIcon,
      color: "blue",
      title: "Pre-call account snapshot",
      description:
        "Before a call, get a 360° view of any account in one prompt — records, recent notes, meetings, calls, and emails, summarized.",
      tools: ["search-records", "semantic-search-notes", "search-meetings", "semantic-search-emails"],
    },
    {
      icon: PencilSquareIcon,
      color: "green",
      title: "Turn meeting notes into action",
      description:
        "Drop your raw notes into Dust and it writes them into Attio, creates follow-up tasks, and updates the deal's fields.",
      tools: ["create-note", "create-task", "upsert-record"],
    },
    {
      icon: BarChartIcon,
      color: "golden",
      title: "Weekly pipeline recap",
      description:
        "Ask Dust what closed, what's stalled, and what shifted this week — get the recap your team actually reads.",
      tools: ["search-records", "list-attribute-definitions"],
    },
  ]}
/>
```

**Authoring guide for other partners:** when you build the page for a new partner, define 3 use cases that span the partner's key tool categories. Avoid one-to-one mapping with tool names — write the title as the buyer's job, not the API.

---

## Section 4 — Supported actions

**Goal:** Full technical reference of every MCP tool Dust can call on the partner. This is what dust.tt/integrations/attio shows today, just tightened up.

**Layout:** Two side-by-side cards (md:grid-cols-2), max-w-4xl:
- Card 1: **Read & Search** — green icon (BookOpen), bulleted tool list (monospace identifiers)
- Card 2: **Create & Update** — green icon (Plus), bulleted tool list

Below the cards: a centered count line: *"21 total actions available (16 read, 5 write)"*.

**Visual treatment:** rounded-2xl card, light border, p-6 padding. The bullet dot is `bg-green-400` (small h-1.5 w-1.5 rounded-full).

**Where data comes from:** populated from the actual MCP server tool definitions for the partner. For Attio, sourced from build.attio.com's MCP registration.

---

## Section 5 — Other integrations you might like

**Goal:** Cross-link to peers in the same category so users don't dead-end.

**Layout:** 4 cards in a responsive grid (sm:grid-cols-2 lg:grid-cols-4), max-w-4xl.

**Each card:**
- Partner logo (h-7 w-7) in a small rounded tile
- Partner name + category (lowercase, e.g. "crm")
- "Learn more →" link revealed on hover

Below the grid: a "View all integrations →" link to `/integrations`.

**Selection rule:** pick 4 partners from the same category as the current page (Attio is CRM → HubSpot, Salesforce, Salesloft, Stripe).

---

## Section 6 — Final CTA

**Component:** `FinalCTASection` (shared)

**Config (Attio):**
```tsx
<FinalCTASection
  config={{
    title: "Get started with Attio",
    subtitle: "Connect Attio to Dust and let AI agents handle your workflows.",
    primaryCTA: { label: "Start free trial", href: "#" },
    secondaryCTA: { label: "Talk to sales", href: "#" },
    trustText: "14-day free trial. No credit card required.",
  }}
/>
```

Full-bleed `bg-blue-50` band, centered. Same as dust.tt's current page.

---

## New components to bring into dust-main

Three components in `src/components/marketing/` need to be ported (or rebuilt) in the real Dust repo. APIs below mirror what's in raph-dust-ecosystem.

### `AgentChatMockup`

```tsx
interface AgentChatMockupProps {
  partner: {
    name: string;
    logo: React.ComponentType<{ className?: string }>;
    logoTint?: string;
  };
  userPrompt: string;
  toolCalls: string[];          // MCP tool names that fired
  completedInSeconds: number;
  agentResponse: React.ReactNode; // Free-form JSX so each page can author its own
}
```

Internals: uses `BrowserMockup` (already in our repo) for the outer chrome, `DustLogoSquare` for the agent header, `<Citation>` inline component for response footnotes. See `src/components/marketing/AgentChatMockup.tsx` for the full reference.

### `UseCaseGrid`

```tsx
type ColorVariant = "blue" | "green" | "golden" | "rose" | "pink" | "violet";

export interface UseCase {
  icon: React.ComponentType<{ className?: string }>;
  color: ColorVariant;
  title: string;
  description: string;
  tools?: string[]; // optional small list under the description
}

interface UseCaseGridProps {
  useCases: UseCase[]; // typically 3, supports 2-4
}
```

Each color maps to a pastel `bg-X-50` + `text-X-600/700` for the icon badge. Reuses dust.tt's existing pastel palette.

### `DustDecoration`

Small brand decoration — green circle + pink crescent — used as corner accent on accent bands. Same shapes that appear on dust.tt homepage testimonial blocks.

```tsx
interface DustDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md";
}
```

Place inside a relatively-positioned container.

### `Citation`

Inline footnote chip for the agent response. Tiny rounded badge with a number inside. Cosmetic-only — non-interactive.

---

## Implementation steps (for the agent in dust-main)

1. **Port the four marketing components** above into `dust-main/front/components/home/` (or wherever marketing components live today). Copy semantics, adjust imports to match dust-main's icon set and design tokens.
2. **Refactor the existing integration page** (`dust-main/front/pages/integrations/[slug].tsx` or similar) to use the new template:
   - Keep the existing data layer (partner name, tool list, etc.).
   - Insert `AgentChatMockup` between the hero and the supported-actions section.
   - Insert `UseCaseGrid` after the chat mockup.
   - Tighten the supported-actions section to the two-card layout.
3. **Author content for the first 3-5 partners** (Attio, Customer.io, HubSpot, Notion, Granola):
   - Use case JSON per partner (3 JTBDs + matching tool lists).
   - Chat mockup script per partner (user prompt + tool calls + response JSX).
   - Keep these in a per-partner config file so the page template stays generic.
4. **Roll out to all partners** once the template + first batch land. Pages without authored use cases / chat mockups fall back to hero + actions + related + CTA (graceful).

---

## Design system notes

- **Headings**: H1 uses `font-mono heading-mono-5xl md:heading-mono-6xl lg:heading-mono-8xl`. H2 is sans-serif `heading-3xl lg:heading-4xl xl:heading-5xl`.
- **Card backgrounds**: solid pastel fills only — `bg-blue-50`, `bg-green-50`, `bg-golden-50`, `bg-rose-50`. **No linear gradients.**
- **Icon badges**: pastel bg + colored icon (e.g. `bg-blue-50 text-blue-600`). For higher-emphasis spots, full-saturation `bg-blue-500` + `text-white` is the alternative.
- **Spacing**: section padding `py-12 md:py-16` is the default rhythm; tighter sections use `py-10 md:py-12`.
- **Rounding**: cards `rounded-2xl`, hero tiles `rounded-2xl`, buttons inherit Sparkle Button variants.

---

## Out-of-scope / explicit non-goals

- We are not changing the partner data model or the way MCP tools register in dust-main. The page is a presentation layer change.
- We are not adding an authoring CMS for per-partner use cases — they live in code (or per-partner config files) for V1.
- The "Live demo" mockup is **non-interactive** — it's a visual, not a real chat session. Don't wire it up to the real chat engine.

---

## Open questions to surface back

- **Where should per-partner content live?** Co-located with the integration definition (recommended) or in a separate `integration-pages/` config directory?
- **Should the chat mockup be auto-generated** from a few fields (prompt + tool list + response markdown) or hand-authored per partner? V1 recommends hand-authored; V2 could template.
- **How do we measure impact** of these new sections? Suggest: track scroll-depth past the chat mockup vs. past the action list, and conversion-to-trial from the per-partner page.

---

## Reference files in raph-dust-ecosystem

- Live page: `src/app/integrations/attio/page.tsx`
- `AgentChatMockup`: `src/components/marketing/AgentChatMockup.tsx`
- `UseCaseGrid`: `src/components/marketing/UseCaseGrid.tsx`
- `DustDecoration`: `src/components/marketing/DustDecoration.tsx`
- `FinalCTASection`: `src/components/FinalCTASection.tsx`
- Shared chrome: `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`

All MIT-friendly within the same workspace; the agent in dust-main can copy and adapt directly.
