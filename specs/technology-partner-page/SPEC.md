# Technology Partner Page — Spec Package

Reference page: `/technology-partners`

## Purpose

Direct port of the tech-partner program page exactly as built in this repo. Goal is an **as-close-to-1:1** copy in dust-main — same sections, same copy, same components, same color decisions.

## Live preview

→ **https://raph-dust-ecosystem.vercel.app/technology-partners**

Open it side-by-side with the code below to see the visual result.

## Verbatim reference file

The full page TSX is committed at:
- This repo: [`specs/technology-partner-page/page.tsx`](./page.tsx)
- Source of truth (always reflects what's live): `src/app/technology-partners/page.tsx`

**Copy `page.tsx` from this folder verbatim into dust-main**, then satisfy the imports below.

## Imports to satisfy in dust-main

```tsx
import type { Metadata } from "next";
import { Check, Users, TrendingUp, Handshake, Crown } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";          // already exists in dust-main
import { SiteFooter } from "@/components/SiteFooter";          // already exists in dust-main
import { Button } from "@/components/ui";                       // Sparkle Button
import { H1, H2, P, FullWidthSection } from "@/components/content"; // dust-main typography primitives

import {
  RocketIcon,
  SparklesIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  BookOpenIcon,
  CodeBlockIcon,
  ChatBubbleLeftRightIcon,
  BarChartIcon,
  UserIcon,
  UserGroupIcon,
} from "@/components/icons";                                    // Sparkle icon set

import { FinalCTASection } from "@/components/FinalCTASection"; // already in dust-main
import { FeatureCard, DustDecoration } from "@/components/marketing";
```

### Component status in dust-main

| Component | Status |
|---|---|
| `SiteHeader`, `SiteFooter` | Already in dust-main |
| `Button` (Sparkle) | Already in dust-main |
| `H1`, `H2`, `P`, `FullWidthSection` | Already in dust-main (`ContentComponents.tsx`) |
| All Sparkle `*Icon` imports | Already in dust-main |
| `FinalCTASection` | Already in dust-main |
| `FeatureCard` | **Imported but not used in this page** — safe to drop from imports if dust-main doesn't have it |
| `DustDecoration` | **Needs to be ported.** Source: `src/components/marketing/DustDecoration.tsx` in raph-dust-ecosystem. Small SVG (green circle + pink crescent), `position` + `size` props. Drop-in copy. |

The only new component required for this page is `DustDecoration`. Everything else is reusing dust-main's existing primitives.

## Tier data structure

Tiers are defined in the file as three composed objects (`TIER_COMMUNITY`, `TIER_GROWTH`, `TIER_ALLIANCE`) pushed into `PUBLIC_TIERS` in display order (left-to-right = journey: Community → Growth → Alliance). A fourth `INTERNAL_TIERS` (Strategic) is kept in code as operational reference but **never rendered**. Don't expose Strategic on the public page.

Each tier carries:
- `tierNumber` — 1 (Alliance, premium) / 2 (Growth) / 3 (Community, entry)
- `isInvitationOnly` — true for Alliance only; routes its CTA to `mailto:partners@dust.tt` instead of `/technology-partners/register`
- `accent` (hex), `bg` (Tailwind class), icon, who/entry/cadence/partnerGets, plus `futureIdeas` and `dustGets` that are kept in data but not currently rendered.

## Section anatomy (top → bottom)

1. **Hero** — left-aligned, `dust.tt/home/partner`-style. Sparkle "Dust App Partner Program" pill, H1 mono "Become a Dust technology partner", subtitle, two CTAs (List your app → `/technology-partners/register`; How it works → `#how-it-works`).
2. **Why partner with Dust** — 3 pastel cards (`bg-blue-50`, `bg-green-50`, `bg-rose-50`), 8×8 icon at `text-X-400`, `text-lg font-semibold` title, `copy-base` body. Icons: `GlobeAltIcon` (discoverable) / `SparklesIcon` (plug & play) / `HandThumbUpIcon` (grow together).
3. **Build your app on Dust** — same compact card pattern, `BookOpenIcon` / `CodeBlockIcon` / `ChatBubbleLeftRightIcon`. CTAs link to `docs.dust.tt`, `github.com/dust-tt`, `mailto:partners@dust.tt`.
4. **The partner program** — three tier cards (Community / Growth / Alliance), each with `DustDecoration` top-right, tier badge, name, tagline, top 3 benefits, single outline CTA. Below: `<details>` expander that opens a full comparison table (Who / How to qualify / Cadence per tier).
5. **What partners say** — 3 testimonial cards. Quotes verbatim from `dust.tt`'s public homepage (Ryan Wang / Assembled, Everett Berry / Clay, Shashank Khanna / Vanta). Mark in code comments: "Replace with partner-specific quotes once collected."
6. **How it works** — full-bleed `bg-muted` band, 4 step cards (01 Get in touch / 02 QA / 03 List / 04 Grow). Uses dust-main's `dust-card-flat` utility class.
7. **Final CTA** — shared `FinalCTASection`. Title "Ready to be discovered by agent users?", subtitle "Share your app and we'll take it from there.", primary `List your app` → register, secondary `Talk to the partner team` → mailto.

## Things baked in that are intentional (don't change without checking)

- **Hero is LEFT-aligned**, not centered. Matches dust.tt/home/partner exactly (`text-left`, mono H1).
- **H2s are sans-serif** (no `mono` prop) — also matches dust.tt.
- **No gradients anywhere** on cards. Solid pastel fills only.
- **Tier display order is journey-order** (Community on left, Alliance on right), but `tierNumber` is the source of truth for the badge label and the comparison table — never use array index for the number.
- **All three tier CTAs use the same `outline` variant**. No "Featured" pill on Growth. CTA labels: "Get in touch" for Community + Growth; "Talk to the partner team" for Alliance (invitation-only).
- **US spelling everywhere** — program, specialized (no "programme" / "specialised").
- **`Crown`, `Users`, `TrendingUp`, `Handshake`, `UserIcon`, `UserGroupIcon`, `BarChartIcon`, `FeatureCard`** are imported but only `Users`, `TrendingUp`, `Handshake`, `Crown`, `Check` are actually used (in the tier data definitions). Safe to clean up unused imports in dust-main.

## Out of scope for the port

- The internal `INTERNAL_TIERS` Strategic tier. Keep it in code as reference, do **not** render it.
- The `dustGets` and `futureIdeas` fields per tier. These are operational metadata only — never rendered.
- The expand-table-as-link approach. The `<details>` element is intentionally native HTML; no JS-state expand needed.
