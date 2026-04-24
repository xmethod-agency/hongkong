import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  tag: string;
  image?: string;
  accent: "brand" | "dark" | "soft" | "warm";
  span?: "sm" | "lg";
};

const projects: Project[] = [
  {
    title: "Stackwise",
    tag: "Software Development",
    accent: "brand",
    span: "lg",
  },
  {
    title: "Genesy",
    tag: "Website Development",
    accent: "dark",
  },
  {
    title: "AIthor",
    tag: "AI Automation",
    accent: "soft",
  },
  {
    title: "Etery",
    tag: "IT Consulting",
    accent: "warm",
    span: "lg",
  },
  {
    title: "Neonix",
    tag: "Software Development",
    accent: "dark",
  },
  {
    title: "Aven",
    tag: "AI Automation",
    accent: "brand",
  },
];

const accentBg: Record<Project["accent"], string> = {
  brand: "bg-brand text-brand-foreground",
  dark: "bg-foreground text-background",
  soft: "bg-muted text-foreground",
  warm: "bg-[oklch(0.88_0.06_70)] text-foreground",
};

export function Work() {
  return (
    <section id="work" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Work</SectionLabel>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Selected work.
          </h2>
          <p className="max-w-md text-muted-foreground">
            A snapshot of teams we&apos;ve partnered with and the outcomes we
            shipped together.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#contact"
              className={cn(
                "group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl p-6",
                accentBg[project.accent],
                project.span === "lg" && "md:col-span-2 md:aspect-[16/10]",
              )}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span
                  aria-hidden
                  className="absolute inset-0 bg-dot-pattern opacity-25"
                  style={{ backgroundSize: "16px 16px" }}
                />
              )}

              <div className="relative flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-background/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur">
                  {project.tag}
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-background/15 backdrop-blur transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div className="relative">
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
