import * as React from "react";
import { DustLogoSquare } from "@/components/logos/dust";
import { CheckIcon, SparklesIcon, ArrowUpIcon } from "@/components/icons";
import { BrowserMockup } from "@/components/BrowserMockup";
import { cn } from "@/lib/utils";

/*
 * AgentChatMockup — a faithful (visual-only) mock of the Dust chat surface
 * showing an integration in action. Used as the hero visual on integration
 * pages so users immediately see what the partner MCP unlocks inside Dust.
 *
 * Mirrors the real Dust chat: user message bubble (right), agent header with
 * "Completed in N sec", a tool-call card showing which partner tools fired,
 * the agent's response with bold subheaders + citation badges, and an
 * "Ask a question" input bar at the bottom with the agent picker chip.
 *
 * Reusable for any integration page — pass partner + prompt + response.
 */

export interface AgentChatMockupProps {
  /** Partner whose MCP is being invoked. */
  partner: {
    name: string;
    logo: React.ComponentType<{ className?: string }>;
    logoTint?: string;
  };
  /** User's prompt, shown as the right-aligned bubble. */
  userPrompt: string;
  /** List of MCP tool names that fired (shown in the tool-call card). */
  toolCalls: string[];
  /** Agent's reply — pass formatted JSX. Use <Citation> for [n] markers. */
  agentResponse: React.ReactNode;
  /** Seconds shown in the "Completed in N sec" header. */
  completedInSeconds: number;
  /** URL string for the browser chrome (default: dust.tt). */
  url?: string;
  className?: string;
}

/** Small numbered citation badge, matches the [1] style in dust.tt responses. */
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
          {/* Chat surface */}
          <div className="space-y-5 px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
            {/* User message — right aligned bubble */}
            <div className="flex justify-end">
              <div className="max-w-md rounded-2xl bg-gray-100 px-4 py-2.5 text-sm text-foreground">
                {userPrompt}
              </div>
            </div>

            {/* Agent header */}
            <div className="flex items-center gap-2 text-xs">
              <div className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md">
                <DustLogoSquare className="h-5 w-5" />
              </div>
              <span className="font-medium text-foreground">dust</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-muted-foreground">
                Completed in {completedInSeconds} sec
              </span>
            </div>

            {/* Tool calls card */}
            <div className="rounded-xl border border-border bg-muted/40 p-3">
              <div className="mb-2 flex items-center gap-2">
                <PartnerLogo className={cn("h-4 w-4", partner.logoTint ?? "text-foreground")} />
                <span className="text-xs font-medium text-foreground">{partner.name}</span>
              </div>
              <ul className="space-y-1">
                {toolCalls.map((call) => (
                  <li
                    key={call}
                    className="flex items-center gap-1.5 font-mono text-[11px] text-foreground/70"
                  >
                    <CheckIcon className="h-3 w-3 text-green-600" />
                    {call}
                  </li>
                ))}
              </ul>
            </div>

            {/* Agent response */}
            <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
              {agentResponse}
            </div>
          </div>

          {/* Input bar */}
          <div className="border-t border-border bg-muted/30 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 shadow-sm">
              <span className="flex-1 text-sm text-muted-foreground">Ask a question</span>
              <div className="flex items-center gap-1.5">
                <div className="inline-flex items-center gap-1 rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-foreground">
                  <SparklesIcon className="h-3 w-3 text-blue-500" />
                  dust
                </div>
                <button
                  type="button"
                  aria-label="Send"
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500 text-white transition-colors hover:bg-blue-600"
                >
                  <ArrowUpIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
