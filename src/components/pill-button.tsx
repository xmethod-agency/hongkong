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
  "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand",
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

/**
 * Dice faces. Indices 0..8 map to a 3×3 grid:
 *   0 1 2
 *   3 4 5
 *   6 7 8
 */
const DICE_FACES: Record<number, number[]> = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

type DiceFaceProps = {
  idle?: keyof typeof DICE_FACES;
  hover?: keyof typeof DICE_FACES;
};

function DiceFace({ idle = 5, hover = 3 }: DiceFaceProps) {
  const idleDots = DICE_FACES[idle];
  const hoverDots = DICE_FACES[hover];

  return (
    <span
      aria-hidden
      className="grid size-full grid-cols-3 grid-rows-3 place-items-center p-1.5"
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const showIdle = idleDots.includes(i);
        const showHover = hoverDots.includes(i);
        return (
          <span
            key={i}
            className={cn(
              "size-1 rounded-full bg-brand-foreground transition-opacity duration-300 ease-out",
              showIdle && showHover && "opacity-100",
              showIdle && !showHover && "opacity-100 group-hover/pill:opacity-0",
              !showIdle && showHover && "opacity-0 group-hover/pill:opacity-100",
              !showIdle && !showHover && "opacity-0",
            )}
          />
        );
      })}
    </span>
  );
}

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
      <span
        className={cn(
          dotClasses,
          "transition-transform duration-500 group-hover/pill:rotate-[360deg]",
        )}
      >
        <DiceFace idle={5} hover={3} />
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
