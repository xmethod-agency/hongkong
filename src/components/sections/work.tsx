import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitReveal } from "@/components/animated/split-reveal";

type Project = {
  title: string;
  tag: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Stackwise",
    tag: "Software Development",
    image: "/images/work/hk-1.png",
  },
  {
    title: "Genesy",
    tag: "Website Development",
    image: "/images/work/hk-2.png",
  },
  {
    title: "AIthor",
    tag: "AI Automation",
    image: "/images/work/hk-3.webp",
  },
  {
    title: "Etery",
    tag: "IT Consulting",
    image: "/images/work/hk-4.webp",
  },
  {
    title: "Neonix",
    tag: "Software Development",
    image: "/images/work/hk-5.webp",
  },
  {
    title: "Aven",
    tag: "AI Automation",
    image: "/images/work/hk-6.webp",
  },
];

export function Work() {
  return (
    <section id="work" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Work</SectionLabel>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <SplitReveal text="Selected work." />
          </h2>
          <p className="max-w-md text-muted-foreground">
            A snapshot of teams we&apos;ve partnered with and the outcomes we
            shipped together.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#contact"
              className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-3xl p-6 text-background"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20"
              />

              <div className="relative flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-background/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-background backdrop-blur">
                  {project.tag}
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div className="relative">
                <h3 className="font-display text-3xl font-bold tracking-tight text-background md:text-4xl">
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
