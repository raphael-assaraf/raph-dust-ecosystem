"use client";

import * as React from "react";
import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons";

/*
 * Generic contact-form scaffold, mirrors dust-main's ContactForm.tsx in shape
 * (name + email + company + message + submit) without the WorkOS / SWR wiring.
 * Submission is stubbed — wire to your endpoint via the `onSubmit` callback.
 */

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
  submitLabel?: string;
  successTitle?: string;
  successText?: string;
}

const EMPTY: ContactFormValues = { name: "", email: "", company: "", message: "" };

export function ContactForm({
  onSubmit,
  submitLabel = "Submit",
  successTitle = "Thanks — we got it",
  successText = "Someone from the team will get back to you within 1 business day.",
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (onSubmit) await onSubmit(values);
      else await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/40 px-8 py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircleIcon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{successTitle}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{successText}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Name"
          required
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Jane Doe"
        />
        <Input
          label="Work email"
          type="email"
          required
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="jane@acme.com"
        />
      </div>
      <Input
        label="Company"
        value={values.company}
        onChange={(e) => update("company", e.target.value)}
        placeholder="Acme"
      />
      <div className="w-full">
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          rows={4}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us a little about what you're looking for…"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
        />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        variant="highlight"
        size="md"
        iconRight={ArrowRightIcon}
        className="justify-self-start"
      >
        {submitting ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
