export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Brand. All rights reserved.</span>
        <span>Built with Next.js & shadcn/ui</span>
      </div>
    </footer>
  );
}
