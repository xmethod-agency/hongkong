import { Check } from "lucide-react";
import { PillButton } from "@/components/pill-button";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitReveal } from "@/components/animated/split-reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "Subscribe",
    description: "Pick a plan that fits your workflow and team capacity.",
  },
  {
    n: "02",
    title: "Request",
    description: "Submit tasks via your client portal — async, no meetings.",
  },
  {
    n: "03",
    title: "Approve or revise",
    description: "Receive progress updates in 2–3 business days, every cycle.",
  },
];

const plans = [
  {
    name: "Engineering retainer",
    blurb: "For founders who need a reliable senior team, every month.",
    price: "$6K",
    strike: "$8K",
    period: "/mo",
    featured: false,
    features: [
      "Unlimited requests",
      "One focus at a time",
      "Fixed monthly rate",
      "Async communication",
      "Flexible scope",
      "Pause anytime",
    ],
  },
  {
    name: "Single project",
    blurb: "From discovery to launch — your product shipped in weeks.",
    price: "$15K",
    strike: "$20K",
    period: "/project",
    featured: true,
    features: [
      "Dedicated team of experts",
      "End-to-end development",
      "Fully custom timeline & scope",
      "Async communication",
      "SEO & launch playbook",
      "Updates every 48 hours",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Pricing</SectionLabel>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <SplitReveal text="Flexible pricing." />
          </h2>
          <p className="max-w-md text-muted-foreground">
            Pick a plan and start today. One flat fee. Unlimited scope. Zero
            stress.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-3xl border border-border bg-background p-6"
            >
              <div className="font-display text-sm font-semibold text-brand">
                {step.n}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-3xl border p-8",
                plan.featured
                  ? "border-foreground/15 bg-foreground text-background"
                  : "border-border bg-background text-foreground",
              )}
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-end gap-3">
                <span
                  className={cn(
                    "font-display text-5xl font-bold tracking-tight",
                    plan.featured ? "text-background" : "text-foreground",
                  )}
                >
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "pb-1 text-lg line-through",
                    plan.featured ? "text-background/50" : "text-muted-foreground",
                  )}
                >
                  {plan.strike}
                </span>
                <span
                  className={cn(
                    "pb-1.5 text-sm",
                    plan.featured ? "text-background/70" : "text-muted-foreground",
                  )}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={cn(
                  "mt-3 text-sm",
                  plan.featured ? "text-background/75" : "text-muted-foreground",
                )}
              >
                {plan.blurb}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span
                      className={cn(
                        "flex size-6 items-center justify-center rounded-full",
                        plan.featured
                          ? "bg-brand text-brand-foreground"
                          : "bg-brand/10 text-brand",
                      )}
                    >
                      <Check className="size-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <PillButton
                  href="#contact"
                  size="md"
                  variant={plan.featured ? "outline" : "primary"}
                  className={cn(
                    plan.featured &&
                      "bg-background text-foreground hover:bg-background/90",
                  )}
                >
                  Get in touch
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
