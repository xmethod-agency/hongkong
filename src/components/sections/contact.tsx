import { Mail, Phone } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { PillButton } from "@/components/pill-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-5 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Got a project in mind or just exploring? Tell us what you&apos;re
              building — we&apos;ll reply within one business day.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@hongkong.agency"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-muted text-brand">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    / Chat to sales
                  </div>
                  <div className="mt-1 font-medium">hello@hongkong.agency</div>
                </div>
              </a>
              <a
                href="tel:+85200000000"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-muted text-brand">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    / Call us
                  </div>
                  <div className="mt-1 font-medium">+852 0000 0000</div>
                </div>
              </a>
            </div>
          </div>

          <form className="space-y-5 rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your name*</Label>
                <Input id="name" placeholder="Jane Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail*</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" placeholder="yourcompany.com" />
            </div>

            <div className="space-y-3">
              <Label>Engagement</Label>
              <RadioGroup defaultValue="retainer" className="grid gap-2 sm:grid-cols-2">
                {[
                  { value: "retainer", label: "Engineering retainer" },
                  { value: "project", label: "Single project" },
                ].map((opt) => (
                  <Label
                    key={opt.value}
                    htmlFor={opt.value}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-background p-4 has-[[data-state=checked]]:border-foreground has-[[data-state=checked]]:bg-muted"
                  >
                    <RadioGroupItem id={opt.value} value={opt.value} />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="What are you building?"
              />
            </div>

            <PillButton size="md">Get in touch</PillButton>
          </form>
        </div>
      </div>
    </section>
  );
}
