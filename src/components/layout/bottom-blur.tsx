/**
 * Sticky frosted strip along the bottom of the viewport. Content scrolling
 * beneath it softly blurs away, giving the bottom edge a subtle "fade" feel.
 * Uses a linear-gradient mask so the blur fades out toward the top.
 */
export function BottomBlur() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[30] h-20 backdrop-blur-[12px]"
      style={{
        maskImage:
          "linear-gradient(to top, black 35%, rgba(0,0,0,0.6) 65%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, black 35%, rgba(0,0,0,0.6) 65%, transparent 100%)",
      }}
    />
  );
}
