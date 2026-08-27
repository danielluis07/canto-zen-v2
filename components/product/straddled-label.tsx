import { cn } from "@/lib/utils";

/**
 * A micro-label sitting on top of its own rule, the way a callout sits on a
 * section line in a measured drawing. The page ground is painted behind it so
 * the hairline reads as broken rather than crossed out.
 *
 * Always placed inside a `relative` element whose top edge carries the rule.
 */
export function StraddledLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute top-0 left-0 -translate-y-1/2 bg-background pr-4",
        "text-[0.625rem] font-medium tracking-[0.18em] text-muted-foreground uppercase",
        className,
      )}>
      {children}
    </span>
  );
}
