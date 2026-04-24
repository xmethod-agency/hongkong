import { Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { SplitReveal } from "@/components/animated/split-reveal";
import { TrustedBy } from "@/components/trusted-by";

const reviews = [
  {
    rating: 5.0,
    quote:
      "Sharp, proactive, and easy to work with. They plugged into our team and shipped without us having to hand-hold a thing.",
    name: "Jared Kim",
    role: "Marketing Director",
  },
  {
    rating: 4.9,
    quote:
      "Felt like an embedded engineering team with zero friction — revisions landed perfectly on the first round.",
    name: "Maya Collins",
    role: "Head of Product",
  },
  {
    rating: 4.9,
    quote:
      "The turnaround was unmatched. We filed a request on Monday and had polished work back on Wednesday.",
    name: "Jesse Leigh",
    role: "CEO & Founder",
  },
  {
    rating: 5.0,
    quote:
      "Tried a few studios before — none compare. Professional, reliable, and seriously thoughtful about the craft.",
    name: "Benjamin Daul",
    role: "Head of Engineering",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>Reviews</SectionLabel>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            <SplitReveal text="Success stories." />
          </h2>
          <p className="max-w-md text-muted-foreground">
            How teams describe working with us — and the outcomes they shipped.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-foreground p-8 text-background">
            <div>
              <div className="font-display text-6xl font-bold tracking-tight">
                4.9/5
              </div>
              <p className="mt-3 max-w-xs text-sm text-background/75">
                Based on engagements across software, web, and AI automation
                projects.
              </p>
            </div>
            <TrustedBy theme="dark" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col justify-between gap-6 rounded-3xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-semibold">
                    {review.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center gap-0.5 text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Rating
                  </span>
                </div>
                <blockquote className="font-display text-lg font-medium leading-snug tracking-tight">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {review.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
