import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        Your bold headline goes here
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Short, punchy subtitle that explains the value in one sentence.
      </p>
      <div className="mt-8 flex gap-3">
        <Button size="lg">Get started</Button>
        <Button size="lg" variant="outline">
          Learn more
        </Button>
      </div>
    </section>
  );
}
