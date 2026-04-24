import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      <span className="text-brand" aria-hidden>
        //
      </span>
      <span>{children}</span>
      <span className="text-brand" aria-hidden>
        //
      </span>
    </div>
  );
}
