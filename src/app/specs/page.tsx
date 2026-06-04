import type { Metadata } from "next";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Tech partner form — spec",
  description:
    "Bare reference of the tech-partner intake form. Use this as the spec for the HubSpot follow-up page.",
};

/*
 * Plain HubSpot-form reference page for Lilibeth. No header, no footer,
 * no hero — just the exact same form fields and copy as the live
 * /technology-partners/register, so it can be rebuilt one-to-one in HubSpot.
 */
export default function SpecsPage() {
  return (
    <main className="h-dvh overflow-y-auto bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8 rounded-md border border-dashed border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">Internal — form spec.</span>{" "}
          Mirror of the tech-partner intake. Same fields, labels, conditionals,
          and copy as <span className="font-mono">/technology-partners/register</span>,
          stripped of all page chrome so it can be rebuilt one-to-one in HubSpot.
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}
