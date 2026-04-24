import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const avatars = [
  "/images/hk-av-1.png",
  "/images/hk-av-2.png",
  "/images/hk-av-3.png",
];

type TrustedByProps = {
  /** "light" for default page surfaces, "dark" for inverse (e.g. black card) */
  theme?: "light" | "dark";
  className?: string;
  title?: string;
  subtitle?: string;
  /** Show a small 5-star row above the title (hero-style) */
  withStars?: boolean;
};

export function TrustedBy({
  theme = "light",
  className,
  title = "Trusted by growing teams",
  subtitle = "They shipped — you're next.",
  withStars = false,
}: TrustedByProps) {
  const ringClass =
    theme === "dark" ? "ring-foreground" : "ring-background";
  const titleClass =
    theme === "dark" ? "text-background" : "text-foreground";
  const subClass =
    theme === "dark" ? "text-background/60" : "text-muted-foreground";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <span
            key={i}
            className={cn(
              "relative size-10 overflow-hidden rounded-full ring-2",
              ringClass,
            )}
          >
            <Image
              src={src}
              alt=""
              width={40}
              height={40}
              className="size-full object-cover"
            />
          </span>
        ))}
      </div>
      <div className={withStars ? "space-y-1" : undefined}>
        {withStars && (
          <div className="flex items-center gap-1 text-brand">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
        )}
        <p className={cn("text-sm font-medium", titleClass)}>{title}</p>
        <p
          className={cn("text-xs uppercase tracking-[0.18em]", subClass)}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
