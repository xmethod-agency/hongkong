import {
  Gauge,
  Clock,
  Infinity as InfinityIcon,
  LayoutDashboard,
  Award,
  Puzzle,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitReveal } from "@/components/animated/split-reveal";

const benefits = [
  {
    icon: Gauge,
    title: "Predictable pricing",
    description: "Fixed monthly rate. No hourly billing, no surprise invoices.",
  },
  {
    icon: Clock,
    title: "Fast turnarounds",
    description: "Async updates every 48 hours so your roadmap keeps moving.",
  },
  {
    icon: InfinityIcon,
    title: "Unlimited requests",
    description: "Queue as many tasks as you need — we ship them one by one.",
  },
  {
    icon: LayoutDashboard,
    title: "One clean portal",
    description: "Track tasks, reviews, and deliverables in a single dashboard.",
  },
  {
    icon: Award,
    title: "Senior team only",
    description: "Engineers and strategists who treat your product like theirs.",
  },
  {
    icon: Puzzle,
    title: "Problem solvers",
    description: "We turn unclear goals into shipped, measurable outcomes.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Benefits</SectionLabel>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <SplitReveal text="Why teams pick us." />
          </h2>
          <p className="max-w-md text-muted-foreground">
            A flat monthly rate, senior talent, and a process that keeps your
            team shipping. Pause or cancel whenever you need.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 bg-background p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-muted text-brand">
                <Icon className="size-5" />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
