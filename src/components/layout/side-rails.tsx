/**
 * Decorative vertical guide lines pinned to the left and right edges of the
 * content container. Sits behind interactive content (z-0) but above page
 * backgrounds, so it reads across all sections and viewport sizes.
 */
export function SideRails() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[20] flex justify-center"
    >
      <div className="relative h-full w-full max-w-6xl px-6">
        <span className="absolute inset-y-0 left-6 w-px bg-foreground/10" />
        <span className="absolute inset-y-0 right-6 w-px bg-foreground/10" />
      </div>
    </div>
  );
}
