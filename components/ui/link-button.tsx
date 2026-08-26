import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * The page's one filled control: ink at rest, oak-deep on hover. Oak is
 * reserved for the interactive register, so nothing else on the page is
 * allowed to sit in this colour while idle.
 */
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
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-xs bg-foreground px-8",
        "text-[0.6875rem] font-medium tracking-[0.16em] text-background uppercase",
        "transition-colors duration-300 hover:bg-oak-deep",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        className,
      )}>
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
