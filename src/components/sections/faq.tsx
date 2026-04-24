import { SectionLabel } from "@/components/ui/section-label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the retainer work?",
    a: "You subscribe monthly, submit as many requests as you need via our portal, and we work through them one focus at a time. Pause or cancel anytime.",
  },
  {
    q: "What kind of projects do you take on?",
    a: "Software products, marketing and product websites, AI automation workflows, and IT consulting / architecture reviews. If you&apos;re not sure, book a call and we&apos;ll tell you honestly.",
  },
  {
    q: "How fast do you ship?",
    a: "Most requests get an update within 48 hours. Shipping cadence depends on scope — small changes land same week, full builds in 2–8 weeks.",
  },
  {
    q: "What tools do you use to manage the work?",
    a: "Linear for tasks, Slack or email for communication, GitHub for code, and Figma for design. You get access to everything from day one.",
  },
  {
    q: "Is there a limit on requests?",
    a: "No. Queue as many as you need — we work through them in priority order you set.",
  },
  {
    q: "Can I cancel or pause anytime?",
    a: "Yes. Billing is month-to-month. Pause when you don&apos;t need us, resume when you do.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel>FAQs</SectionLabel>
        <div className="mt-5 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              FAQs.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Everything you need to know about how we work. Still have a
              question? Write us directly.
            </p>
          </div>

          <Accordion className="divide-y divide-border rounded-3xl border border-border bg-background">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="border-none px-6 first:rounded-t-3xl last:rounded-b-3xl"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold tracking-tight hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
