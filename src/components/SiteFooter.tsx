import Link from "next/link";

const FOOTER_COLS = [
  { title: "Product", items: ["Product", "Chrome Extension", "Pricing", "Security"] },
  {
    title: "Developers",
    items: ["Developer Platform", "Dust for Engineers", "Platform Documentation", "Github Repo"],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Brand resources", "Support", "Become a Partner"],
  },
  {
    title: "Connect",
    items: ["Slack Community", "X", "LinkedIn", "YouTube"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="font-mono text-base font-semibold">Dust</div>
            <p className="mt-2 text-xs text-muted-foreground">AI agents for the enterprise.</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => {
                  const href = item === "Become a Partner" ? "/partners" : "#";
                  return (
                    <li key={item}>
                      <Link
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                        href={href}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© Dust Tt SAS</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-foreground transition-colors">Terms &amp; Policies</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Trust Center</a>
            <a href="#" className="hover:text-foreground transition-colors">Vulnerability Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
