import * as React from "react";
import { DustLogoSquare } from "@/components/logos/dust";
import { CheckIcon, SparklesIcon, ArrowUpIcon, AttachmentIcon } from "@/components/icons";
import { BrowserMockup } from "@/components/BrowserMockup";
import { cn } from "@/lib/utils";

/*
 * AgentChatMockup — compact visual of the Dust chat surface running an
 * integration. Tight vertical rhythm so it fits in a hero band without
 * dominating the page.
 *
 * Mirrors the real Dust chat: small user bubble (right), agent header with
 * the colorful square logo + "Completed in N sec", an inline tool-call card
 * listing which partner tools fired, the agent's response, and a compact
 * "Ask a question" input bar with the agent picker chip.
 */

export interface AgentChatMockupProps {
  partner: {
    name: string;
    logo: React.ComponentType<{ className?: string }>;
    logoTint?: string;
  };
  userPrompt: string;
  toolCalls: string[];
  agentResponse: React.ReactNode;
  completedInSeconds: number;
  url?: string;
  className?: string;
}

/** Inline numbered citation badge, matches Dust's [n] marker style. */
export function Citation({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-[3px] border border-border bg-muted px-1 align-middle font-mono text-[10px] font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function AgentChatMockup({
  partner,
  userPrompt,
  toolCalls,
  agentResponse,
  completedInSeconds,
  url = "dust.tt",
  className,
}: AgentChatMockupProps) {
  const PartnerLogo = partner.logo;
  return (
    <div className={className}>
      <BrowserMockup url={url}>
        <div className="bg-background">
          {/* Chat surface — tight vertical rhythm */}
          <div className="space-y-3 px-5 pt-4 pb-3 sm:px-6 sm:pt-5">
            {/* User message — small right-aligned bubble */}
            <div className="flex justify-end">
              <div className="max-w-md rounded-2xl bg-gray-100 px-3.5 py-2 text-[13px] text-foreground">
                {userPrompt}
              </div>
            </div>

            {/* Agent header — single line, condensed */}
            <div className="flex items-center gap-2 text-[11px]">
              <DustLogoSquare className="h-4 w-4 shrink-0" />
              <span className="font-semibold text-foreground">dust</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-muted-foreground">
                Completed in {completedInSeconds}s
              </span>
            </div>

            {/* Tool calls card — inline, tighter */}
            <div className="rounded-lg border border-border bg-muted/40 px-3 py-2">
              <div className="mb-1.5 flex items-center gap-1.5">
                <PartnerLogo className={cn("h-3.5 w-3.5", partner.logoTint ?? "text-foreground")} />
                <span className="text-[11px] font-semibold text-foreground">{partner.name}</span>
              </div>
              <ul className="space-y-0.5">
                {toolCalls.map((call) => (
                  <li
                    key={call}
                    className="flex items-center gap-1.5 font-mono text-[10.5px] leading-tight text-foreground/70"
                  >
                    <CheckIcon className="h-2.5 w-2.5 shrink-0 text-green-600" />
                    {call}
                  </li>
                ))}
              </ul>
            </div>

            {/* Agent response */}
            <div className="space-y-2 text-[13px] leading-relaxed text-foreground/90">
              {agentResponse}
            </div>
          </div>

          {/* Input bar — single line, compact, matches the real Dust input */}
          <div className="border-t border-border bg-muted/30 px-3 py-2.5 sm:px-4">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
              <div className="inline-flex shrink-0 items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-[11px] font-medium text-foreground">
                <SparklesIcon className="h-3 w-3 text-blue-500" />
                dust
              </div>
              <span className="flex-1 text-[12px] text-muted-foreground">
                Ask a question
              </span>
              <button
                type="button"
                aria-label="Attach"
                className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-gray-100"
              >
                <AttachmentIcon className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="Send"
                className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500 text-white transition-colors hover:bg-blue-600"
              >
                <ArrowUpIcon className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
