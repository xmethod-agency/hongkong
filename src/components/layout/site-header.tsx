import Link from "next/link";
import { PillButton } from "@/components/pill-button";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link
          href="#home"
          className="font-display text-xl font-bold tracking-tight"
        >
          Hong Kong
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex h-10 items-center rounded-full bg-card px-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-border/60 transition-colors hover:bg-foreground hover:text-background"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <PillButton href="#contact" size="md">
          Let&apos;s talk
        </PillButton>
      </div>
    </header>
  );
}
