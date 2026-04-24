import Image from "next/image";
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
          aria-label="AIQO — home"
          className="inline-flex items-center text-foreground"
        >
          <Image
            src="/images/AIQO.svg"
            alt="AIQO"
            width={120}
            height={28}
            priority
            className="h-5 w-auto md:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex h-10 items-center rounded-full bg-background/30 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-[2px] supports-[backdrop-filter]:bg-background/20 transition-colors hover:bg-foreground hover:text-background"
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
