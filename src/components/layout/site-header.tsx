import Link from "next/link";
import { Plus } from "lucide-react";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#benefits", label: "Benefits" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="#home"
          className="font-display text-xl font-bold tracking-tight"
        >
          Hong Kong
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-primary pl-5 pr-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label="Open menu"
        >
          Menu
          <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/10">
            <Plus className="size-4" />
          </span>
        </button>
      </div>
    </header>
  );
}
