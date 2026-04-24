import { PillButton } from "@/components/pill-button";
import { SplitReveal } from "@/components/animated/split-reveal";
import { TrustedBy } from "@/components/trusted-by";

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
          <SplitReveal text="Software, websites, and " stagger={18} />
          <SplitReveal
            text="AI for growing teams."
            stagger={18}
            delay={240}
            className="text-muted-foreground"
          />
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          AIQO is a product studio that ships software, websites, and AI automation — with IT consulting baked in.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <PillButton href="#contact" variant="primary">
            Get in touch
          </PillButton>
        </div>

        <TrustedBy
          className="mt-12"
          withStars
          title="Trusted by teams across APAC"
          subtitle="Built to ship, built to scale."
        />
      </div>
    </section>
  );
}
