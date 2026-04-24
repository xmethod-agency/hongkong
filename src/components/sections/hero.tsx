import { Star } from "lucide-react";
import { PillButton } from "@/components/pill-button";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground">
          <span className="text-brand" aria-hidden>
            //
          </span>
          Available for projects
        </span>

        <h1 className="mt-8 max-w-5xl font-display text-[56px] font-bold leading-[0.95] tracking-[-0.035em] text-foreground md:text-[96px] lg:text-[120px]">
          Software, websites, and <span className="text-muted-foreground">AI for growing teams.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          AIQO is a product studio that ships software, websites, and AI automation — with IT consulting baked in.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <PillButton href="#contact" variant="primary">
            Get in touch
          </PillButton>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
            {["bg-brand", "bg-foreground", "bg-muted-foreground"].map(
              (bg, i) => (
                <span
                  key={i}
                  className={`size-10 rounded-full ring-2 ring-background ${bg}`}
                  aria-hidden
                />
              ),
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-medium text-foreground">
              Trusted by teams across APAC
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Built to ship, built to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
