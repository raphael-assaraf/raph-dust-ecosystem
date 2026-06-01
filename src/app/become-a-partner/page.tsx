import type { Metadata } from "next";
import { ArrowRight, Blocks, Coins, Headphones, Users, Briefcase, ShoppingBag, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { H1, H2, P, FullWidthSection } from "@/components/content";
import { FeatureCard, LogoStrip } from "@/components/marketing";
import {
  AttioLogo,
  GongLogo,
  GranolaLogo,
  HubspotLogo,
  IntercomLogo,
  LinearLogo,
  NotionLogo,
  SnowflakeLogo,
  StripeLogo,
  VantaLogo,
} from "@/components/logos/platforms";

export const metadata: Metadata = {
  title: "Become a Partner | Dust",
  description:
    "Partner with Dust to bring AI agents to your customers — as a service partner, reseller, integrator, or app builder.",
};

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
            Become a Partner
          </H1>
          <P size="lg" className="mt-4 max-w-2xl text-muted-foreground">
            Partner with Dust to bring AI agents to your customers. We&apos;re
            building a network of service partners, resellers, integrators, and
            app builders deploying Dust across the world.
          </P>
        </div>
      </section>

      {/* ─────────── Value props ─────────── */}
      <FullWidthSection className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 mx-auto max-w-2xl text-center">
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              Why partner with Dust
            </H2>
            <P size="md" className="text-muted-foreground">
              Three reasons partners build on Dust — and what we bring to the table.
            </P>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Revenue opportunity"
              color="green"
              visual={<Coins className="h-20 w-20 text-green-700" strokeWidth={1.2} />}
              features={[
                "Attractive partner margins",
                "Recurring revenue from customer deployments",
                "Volume incentives at scale",
              ]}
            />
            <FeatureCard
              title="Dedicated support"
              color="blue"
              visual={<Headphones className="h-20 w-20 text-blue-700" strokeWidth={1.2} />}
              features={[
                "Technical onboarding",
                "Sales enablement materials",
                "Partner success resources",
              ]}
            />
            <FeatureCard
              title="Co-selling motion"
              color="golden"
              visual={<Users className="h-20 w-20 text-golden-700" strokeWidth={1.2} />}
              features={[
                "Joint deal pipeline",
                "Warm intros to Dust reps",
                "Co-marketing opportunities",
              ]}
            />
          </div>
        </div>
      </FullWidthSection>

      {/* ─────────── Logo strip ─────────── */}
      <FullWidthSection className="bg-background pb-6 pt-0">
        <div className="mx-auto max-w-5xl px-6">
          <LogoStrip
            title="Trusted by partners worldwide"
            size="default"
            logos={[
              NotionLogo,
              HubspotLogo,
              AttioLogo,
              GranolaLogo,
              GongLogo,
              IntercomLogo,
              VantaLogo,
              SnowflakeLogo,
              LinearLogo,
              StripeLogo,
            ]}
          />
        </div>
      </FullWidthSection>

      {/* ─────────── NEW BAND: Tech partners ─────────── */}
      <FullWidthSection className="bg-blue-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-background px-3 py-1 text-xs font-medium text-blue-700">
                <Blocks className="h-3 w-3" />
                For software builders
              </span>
              <H2 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">
                Build software? <span className="text-blue-700">List your app on Dust.</span>
              </H2>
              <P size="md" className="mb-6 text-foreground/80">
                If your product has an MCP server (or you&apos;re building one), get listed
                on the Dust marketplace and reach thousands of AI agent users — with a clear
                path from listing to deep partnership.
              </P>
              <div className="flex flex-wrap gap-3">
                <Button href="/partners" variant="highlight" size="md" iconRight={ArrowRight}>
                  Explore tech partnerships
                </Button>
                <Button href="/partners/register" variant="outline" size="md">
                  List your app
                </Button>
              </div>
            </div>

            {/* Decorative grid of partner logos */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-3">
                {[NotionLogo, AttioLogo, GongLogo, HubspotLogo, IntercomLogo, SnowflakeLogo, GranolaLogo, VantaLogo, LinearLogo].slice(0, 9).map((Logo, i) => (
                  <div
                    key={i}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200/60 bg-background shadow-sm"
                  >
                    <Logo className="h-7 w-7 text-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FullWidthSection>

      {/* ─────────── Ideal partners ─────────── */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 mx-auto max-w-2xl text-center">
            <H2 className="mb-3 text-center text-3xl font-semibold text-foreground md:text-4xl">
              Ideal partners
            </H2>
            <P size="md" className="text-muted-foreground">
              We&apos;re actively working with these profiles — though many shapes fit.
            </P>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Service Partners"
              color="blue"
              visual={<Briefcase className="h-20 w-20 text-blue-700" strokeWidth={1.2} />}
              features={[
                "Agencies and consultancies",
                "Custom agent development",
                "AI strategy and rollouts",
              ]}
            />
            <FeatureCard
              title="Resellers"
              color="golden"
              visual={<ShoppingBag className="h-20 w-20 text-golden-700" strokeWidth={1.2} />}
              features={[
                "Technology resellers and VARs",
                "B2B customer bases",
                "Regional Dust champions",
              ]}
            />
            <FeatureCard
              title="Systems Integrators"
              color="rose"
              visual={<Building2 className="h-20 w-20 text-rose-700" strokeWidth={1.2} />}
              features={[
                "Enterprise deployments at scale",
                "Multi-tool integrations",
                "Industry-vertical expertise",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────── CTA / waitlist ─────────── */}
      <FullWidthSection className="bg-blue-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <H2 className="mb-4 text-center text-3xl font-semibold text-foreground md:text-4xl">
            Join the Partner Network
          </H2>
          <P size="lg" className="mb-8 text-muted-foreground">
            Partners are central to our next stage at Dust. Together with agencies,
            integrators, resellers, and app builders, we&apos;re accelerating how
            companies adopt AI agents.
          </P>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href="mailto:partnerships@dust.tt?subject=Channel%20%2F%20Services%20Partnership"
              variant="highlight"
              size="md"
              iconRight={ArrowRight}
            >
              Get in touch
            </Button>
            <Button href="/partners" variant="outline" size="md">
              For app builders
            </Button>
          </div>
        </div>
      </FullWidthSection>

      <SiteFooter />
    </div>
  );
}

