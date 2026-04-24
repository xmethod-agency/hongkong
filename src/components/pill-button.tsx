import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pillButtonVariants = cva(
  "group/pill inline-flex items-center gap-3 rounded-full text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "bg-background text-foreground border border-border hover:bg-muted",
      },
      size: {
        md: "h-12 pl-5 pr-1.5 text-sm",
        lg: "h-14 pl-6 pr-2 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

const dotVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand text-brand-foreground",
  {
    variants: {
      size: {
        md: "size-9",
        lg: "size-11",
      },
    },
    defaultVariants: { size: "lg" },
  },
);

type PillButtonBaseProps = VariantProps<typeof pillButtonVariants> & {
  children: React.ReactNode;
  className?: string;
};

type AsLink = PillButtonBaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type AsButton = PillButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type PillButtonProps = AsLink | AsButton;

export function PillButton({
  children,
  className,
  variant,
  size,
  ...props
}: PillButtonProps) {
  const classes = cn(pillButtonVariants({ variant, size }), className);
  const dotClasses = dotVariants({ size });
  const content = (
    <>
      <span className="pl-0.5">{children}</span>
      <span aria-hidden className={dotClasses}>
        <span
          className="absolute inset-0 bg-dot-pattern text-brand-foreground/35"
          style={{ backgroundSize: "6px 6px" }}
        />
      </span>
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { href: _href, ...rest } = props as AsButton & { href?: undefined };
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
