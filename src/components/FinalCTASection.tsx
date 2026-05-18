import { Button } from "@/components/ui";
import { H2, P, FullWidthSection } from "@/components/content";
import { RocketIcon } from "@/components/icons";

/*
 * Reusable bottom-of-page CTA, mirrors dust-main's FinalCTASection
 * (Competitor/FinalCTASection.tsx). Full-bleed bg-blue-50 band, centered
 * H2 + subtitle + two CTAs + small trust text.
 */

export interface FinalCTAConfig {
  title: string;
  subtitle?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  trustText?: string;
}

interface FinalCTASectionProps {
  config: FinalCTAConfig;
}

export function FinalCTASection({ config }: FinalCTASectionProps) {
  return (
    <FullWidthSection className="bg-blue-50 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <H2 className="mb-4 text-center text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
          {config.title}
        </H2>
        {config.subtitle && (
          <P size="lg" className="mb-8 text-muted-foreground">
            {config.subtitle}
          </P>
        )}

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={config.primaryCTA.href} variant="highlight" size="md" icon={RocketIcon}>
            {config.primaryCTA.label}
          </Button>
          <Button href={config.secondaryCTA.href} variant="outline" size="md">
            {config.secondaryCTA.label}
          </Button>
        </div>

        {config.trustText && (
          <P size="xs" className="text-muted-foreground">
            {config.trustText}
          </P>
        )}
      </div>
    </FullWidthSection>
  );
}
