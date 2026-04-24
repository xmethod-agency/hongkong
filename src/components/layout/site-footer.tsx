import Link from "next/link";
import { Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PillButton } from "@/components/pill-button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#benefits", label: "Benefits" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [{ href: "/privacy", label: "Privacy policy" }];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
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

          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              / Navigation
            </div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
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

          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              / Legal
            </div>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
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
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-foreground/80">
                / Company
              </div>
              <p className="mt-3 leading-relaxed">
                Viktorija Pte. Ltd.
                <br />
                Company Reg. No. 202617392D
                <br />
                Incorporated in the Republic of Singapore
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-foreground/80">
                / Contact
              </div>
              <p className="mt-3 leading-relaxed">
                <a
                  href="mailto:hello@aiqotech.com"
                  className="transition-colors hover:text-foreground"
                >
                  hello@aiqotech.com
                </a>
                <br />
                <a
                  href="https://aiqotech.com"
                  className="transition-colors hover:text-foreground"
                >
                  aiqotech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none block select-none whitespace-nowrap text-center font-display font-bold leading-[0.85] tracking-[-0.04em] text-foreground"
          style={{ fontSize: "clamp(3rem, 17.5vw, 20rem)" }}
        >
          <span className="text-brand">AI</span>QO TECH
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 pb-8 pt-6 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} AIQO — aiqotech.com</span>
        <span className="inline-flex items-center gap-1.5">
          Built with
          <Heart className="size-3.5 fill-brand text-brand" aria-hidden />
          in Hong Kong
        </span>
      </div>
    </footer>
  );
}
