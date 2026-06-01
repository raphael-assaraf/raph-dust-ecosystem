import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Blocks, Handshake } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { H1, H2, P } from "@/components/content";

export const metadata: Metadata = {
  title: "Partner with Dust",
  description:
    "Multiple ways to build and grow with the AI agent platform. Choose the right path: tech, channel, or services.",
};

const PATHS = [
  {
    title: "Tech Partners",
    summary: "You build software. List your app on Dust so AI agents can use it across thousands of customers.",
    forWho: "SaaS companies, MCP servers, developer tools, data platforms.",
    examples: "Attio, Notion, Customer.io, Linear, Snowflake.",
    href: "/partners",
    cta: "Become a tech partner",
    icon: Blocks,
    accent: "#1C91FF",
    bg: "#E9F7FF",
  },
  {
    title: "Channel & Services Partners",
    summary: "You deploy, customize, and train teams on Dust. Resell, scale, and build long-term programs with end customers.",
    forWho: "Resellers, system integrators, consultancies, agencies, training partners.",
    examples: "Boutique consultancies, regional resellers, AI-deployment specialists.",
    href: "mailto:partnerships@dust.tt?subject=Channel%20%2F%20Services%20Partnership",
    cta: "Get in touch",
    icon: Handshake,
    accent: "#418B5C",
    bg: "#E8F5E9",
  },
];

export default function BecomeAPartnerPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero ─────────── */}
      <section className="bg-background">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Dust Partner Network
          </span>
          <H1
            mono
            className="mb-2 text-center text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            Partner with Dust
          </H1>
          <P size="lg" className="mb-2 max-w-2xl text-muted-foreground">
            Multiple ways to build, deploy, and grow with the AI agent platform.
            Pick the path that fits your team.
          </P>
        </div>
      </section>

      {/* ─────────── Two paths ─────────── */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {PATHS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all hover:border-foreground/30 hover:shadow-md"
                >
                  {/* Top tint band */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-32"
                    style={{
                      background: `linear-gradient(to bottom, ${p.bg}, transparent)`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: p.bg, color: p.accent }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2
                      className="heading-mono-2xl"
                      style={{ color: p.accent }}
                    >
                      {p.title}
                    </h2>
                    <p className="copy-base mt-3 text-foreground/85">{p.summary}</p>

                    <div className="mt-6 rounded-xl bg-muted/60 px-4 py-3">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Who it's for
                      </div>
                      <p className="mt-1 text-sm text-foreground">{p.forWho}</p>
                      <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Typical examples
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.examples}</p>
                    </div>

                    <div className="mt-auto pt-8">
                      <Link
                        href={p.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{ color: p.accent }}
                      >
                        {p.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Not sure? */}
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <H2 className="mb-2 text-center text-xl font-semibold text-foreground">
              Not sure which one fits?
            </H2>
            <P size="sm" className="text-muted-foreground">
              The short version: if your product has an MCP server (or could),
              that's <Link href="/partners" className="font-semibold text-foreground underline">Tech Partners</Link>.
              If you deploy or resell Dust to end customers,
              that's <Link href={PATHS[1].href} className="font-semibold text-foreground underline">Channel & Services</Link>.
              Both, or unsure? Email{" "}
              <a href="mailto:partnerships@dust.tt" className="font-semibold text-foreground underline">
                partnerships@dust.tt
              </a>
              .
            </P>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
