# Specs

This folder collects implementation-ready specifications for changes that should be ported from this mockup repo (`raph-dust-ecosystem`) into the real Dust repo (`dust-main`).

Each spec is self-contained: an agent with access to dust-main should be able to read one package end-to-end and ship the change without needing the rest of the conversation that led to it.

## Packages

| Package | What | Status |
|---|---|---|
| [`integration-page/`](./integration-page/SPEC.md) | The MCP integration detail page (Attio = reference example). Adds the live chat demo + jobs-to-be-done grid on top of the existing dust.tt page. | Ready |
| [`technology-partner-page/`](./technology-partner-page/SPEC.md) | The tech-partner program page (`/technology-partners`). Verbatim port — full TSX inlined + a 1:1 copy of `page.tsx` next to the spec. | Ready |

## Conventions

Each package lives in its own folder and contains at least:

- `SPEC.md` — the complete write-up: goal, page/feature anatomy, copy, component APIs, implementation steps, design-system notes, out-of-scope items, open questions, and links to the live mockup + source files.

Some packages may also include:
- Annotated reference TSX excerpts
- Screenshots
- Per-partner content tables

The goal is **drift-proofing**: when this folder and the live mockup diverge, the spec text is the source of truth.
