import { cn } from "@/lib/utils";

type BrandDotProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * Circular brand token with a subtle dot pattern.
 * Used inside pill buttons and as a recurring brand mark.
 */
export function BrandDot({ className, size = "md" }: BrandDotProps) {
  const sizeClass =
    size === "sm" ? "size-7" : size === "lg" ? "size-12" : "size-9";

  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand text-brand-foreground",
        sizeClass,
        className,
      )}
    >
      <span
        className="absolute inset-0 bg-dot-pattern text-brand-foreground/30"
        style={{ backgroundSize: "6px 6px" }}
      />
    </span>
  );
}
