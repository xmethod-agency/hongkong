import { Mail } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitReveal } from "@/components/animated/split-reveal";
import { PillButton } from "@/components/pill-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-5 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              <SplitReveal text={"Let's talk."} />
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Got a project in mind or just exploring? Tell us what you&apos;re
              building — we&apos;ll reply within one business day.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@aiqotech.com"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-muted text-brand">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    / Chat to sales
                  </div>
                  <div className="mt-1 font-medium">hello@aiqotech.com</div>
                </div>
              </a>
            </div>
          </div>

          <form className="space-y-6 rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your name*</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  required
                  className="h-14 rounded-2xl px-4 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail*</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="h-14 rounded-2xl px-4 text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={8}
                placeholder="What are you building?"
                className="min-h-[200px] resize-none rounded-2xl px-4 py-3 text-base"
              />
            </div>

            <PillButton size="md">Get in touch</PillButton>
          </form>
        </div>
      </div>
    </section>
  );
}
