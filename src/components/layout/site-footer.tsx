import Link from "next/link";
import { Input } from "@/components/ui/input";
import { PillButton } from "@/components/pill-button";

const columns = [
  {
    title: "/ Navigation",
    links: [
      { href: "#services", label: "Services" },
      { href: "#benefits", label: "Benefits" },
      { href: "#work", label: "Work" },
      { href: "#pricing", label: "Pricing" },
      { href: "#reviews", label: "Reviews" },
      { href: "#faq", label: "FAQs" },
    ],
  },
  {
    title: "/ Resources",
    links: [
      { href: "#work", label: "All projects" },
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Terms of service" },
      { href: "#", label: "404 page" },
    ],
  },
  {
    title: "/ Socials",
    links: [
      { href: "#", label: "X / Twitter" },
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "YouTube" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-5">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Newsletter
            </div>
            <p className="max-w-sm text-muted-foreground">
              Get occasional notes on shipping, engineering, and AI automation.
              No spam.
            </p>
            <form className="flex max-w-md items-center gap-2 rounded-full border border-border bg-background p-1.5">
              <Input
                type="email"
                placeholder="you@company.com"
                className="h-10 border-none bg-transparent shadow-none focus-visible:ring-0"
                required
              />
              <PillButton size="md">Subscribe</PillButton>
            </form>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </div>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="font-display text-[clamp(4rem,12vw,11rem)] font-bold leading-none tracking-[-0.04em]">
            Hong Kong
          </div>
          <div className="mt-6 flex flex-col justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} Hong Kong Agency.</span>
            <span>Built with Next.js, Tailwind & shadcn/ui.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
