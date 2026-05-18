import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-mono text-base font-semibold tracking-tight">
            Dust
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
          <a
            className="hidden rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--color-dust-blue)] sm:inline-block"
            href="#"
          >
            Contact sales
          </a>
          <a
            className="rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            href="#"
          >
            Try for free
          </a>
        </div>
      </div>
    </header>
  );
}
