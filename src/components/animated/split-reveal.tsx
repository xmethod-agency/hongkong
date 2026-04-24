"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SplitRevealProps = {
  text: string;
  as?: "span" | "div";
  className?: string;
  /** Per-character delay in ms */
  stagger?: number;
  /** Initial offset delay in ms */
  delay?: number;
  /** Duration of each character's animation in ms */
  duration?: number;
};

/**
 * Letter-by-letter reveal animation triggered when the element enters
 * the viewport (IntersectionObserver). Respects prefers-reduced-motion
 * and preserves word boundaries so lines wrap naturally.
 */
export function SplitReveal({
  text,
  as: Tag = "span",
  className,
  stagger = 22,
  delay = 0,
  duration = 650,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");
  let charIdx = 0;

  return (
    <Tag
      ref={ref as React.Ref<HTMLSpanElement & HTMLDivElement>}
      className={cn("inline", className)}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block whitespace-nowrap"
          aria-hidden
        >
          {Array.from(word).map((ch, ci) => {
            const i = charIdx++;
            const delayMs = delay + i * stagger;
            return (
              <span
                key={ci}
                style={{
                  display: "inline-block",
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translate3d(0,0,0)"
                    : "translate3d(0,0.45em,0)",
                  transition: `opacity ${duration}ms ease ${delayMs}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
                  willChange: "transform, opacity",
                }}
              >
                {ch}
              </span>
            );
          })}
          {wi < words.length - 1 && (
            <span style={{ display: "inline-block", width: "0.28em" }} />
          )}
        </span>
      ))}
    </Tag>
  );
}
