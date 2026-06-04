import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { H1, P } from "@/components/content";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Register your integration | Dust",
  description:
    "Tell us about your app and your MCP. We'll list your integration in the Dust app and partner with you on go-to-market.",
};

export default function RegisterPage() {
  return (
    <div className="h-dvh overflow-y-auto bg-background text-foreground">
      <SiteHeader />

      {/* ─────────── Hero ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-10">
          <Link
            href="/technology-partners"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to technology partners
          </Link>
          <H1
            mono
            className="mt-4 text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            About your app
          </H1>
          <P size="md" className="mt-4 text-muted-foreground">
            The tech side. We&apos;ve got your basics from the previous step —
            this is just what we need to list your integration.
          </P>
        </div>
      </section>

      {/* ─────────── Form ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <RegisterForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
