"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type DotLottieProps = ComponentProps<typeof DotLottieReact>;

type LottieProps = Omit<DotLottieProps, "src"> & {
  /** Path or URL to a `.lottie` or `.json` file. */
  src: string;
  /** Tailwind classes for the wrapper (size, aspect, etc.). */
  className?: string;
};

/**
 * Thin wrapper around dotLottie's React player.
 * Keep sizing on the wrapper via `className` (e.g. "size-48", "aspect-square").
 */
export function Lottie({
  src,
  className,
  loop = true,
  autoplay = true,
  ...rest
}: LottieProps) {
  return (
    <div className={cn("inline-block", className)}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        {...rest}
      />
    </div>
  );
}
