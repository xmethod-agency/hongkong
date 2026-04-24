import { Code2, Globe, Lightbulb, Sparkles, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Card } from "@/components/ui/card";
import { SplitReveal } from "@/components/animated/split-reveal";

const services = [
  {
    icon: Code2,
    title: "Software development",
    description:
      "Custom products, internal tools, and integrations — shipped iteratively with a senior engineering team.",
    tags: ["Web apps", "APIs", "Integrations", "DevOps"],
  },
  {
    icon: Globe,
    title: "Website development",
    description:
      "Fast, accessible marketing sites and web apps on modern stacks. Built to convert and easy to maintain.",
    tags: ["Next.js", "CMS", "Design system", "SEO"],
  },
  {
    icon: Lightbulb,
    title: "IT consulting",
    description:
      "Architecture reviews, tech strategy, and fractional CTO support for teams scaling through growth.",
    tags: ["Audit", "Strategy", "Due diligence", "Fractional CTO"],
  },
  {
    icon: Sparkles,
    title: "AI automation",
    description:
      "LLM-powered workflows, copilots, and agents that plug into your stack and free your team from repetitive work.",
    tags: ["Agents", "RAG", "Workflows", "Evals"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Services</SectionLabel>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <SplitReveal text="What we do." />
          </h2>
          <p className="max-w-md text-muted-foreground">
            Strategy, speed, and engineering — working together to deliver
            outcomes for teams that need to move now.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <Card
              key={title}
              className="group relative flex flex-col gap-6 rounded-3xl border-border/70 bg-card p-8 transition-colors hover:border-foreground/20"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-foreground">
                  <Icon className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
