import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * The page's one filled control, as a class rather than a component, because
 * it has to be worn by a link on one page and a button on another. Ink at
 * rest, oak-deep on hover; oak is reserved for the interactive register, so
 * nothing else on the page sits in this colour while idle.
 */
export const solidControlClassName = cn(
  "inline-flex h-12 items-center justify-center rounded-xs bg-foreground px-8",
  "text-[0.6875rem] font-medium tracking-[0.16em] text-background uppercase",
  "transition-colors duration-300 hover:bg-oak-deep",
  "focus-visible:outline-2 focus-visible:outline-offset-4",
);

/** The same control when it cannot be pressed: the ink field drops away and a
 *  hairline is left holding the shape. */
export const inertControlClassName = cn(
  "inline-flex h-12 cursor-not-allowed items-center justify-center rounded-xs border border-line px-8",
  "text-[0.6875rem] font-medium tracking-[0.16em] text-muted-foreground uppercase",
);

/** The solid control as a link. */
export function LinkButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(solidControlClassName, className)}>
      {children}
    </Link>
  );
}

/**
 * The quiet counterpart. A hairline sits under the label at rest in ink; an
 * oak rule draws itself over the top of it from the left on hover, the same
 * gesture the desktop nav uses.
 */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex w-fit items-center pb-1.5",
        "text-[0.6875rem] font-medium tracking-[0.16em] text-foreground uppercase",
        "transition-colors duration-300 hover:text-oak-deep",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        className,
      )}>
      {children}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-foreground/25"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </Link>
  );
}
