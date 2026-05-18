import Link from "next/link";
import { DustLogo } from "@/components/logos/dust";
import { Button } from "@/components/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Dust home" className="block">
            <DustLogo className="h-6 w-auto" />
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground transition-colors" href="#">Product</a>
            <a className="hover:text-foreground transition-colors" href="#">Solutions</a>
            <Link className="hover:text-foreground transition-colors" href="/integrations/attio">Integrations</Link>
            <Link className="hover:text-foreground transition-colors" href="/partners">Partners</Link>
            <a className="hover:text-foreground transition-colors" href="#">Pricing</a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:inline-block" href="#">
            Sign in
          </a>
          <Button href="#" variant="outline" size="xs" className="hidden sm:inline-flex">
            Contact sales
          </Button>
          <Button href="#" variant="primary" size="xs">
            Try for free
          </Button>
        </div>
      </div>
    </header>
  );
}
