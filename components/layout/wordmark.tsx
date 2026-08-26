import { cn } from "@/lib/utils";

/**
 * The wordmark carries the whole brand signal, so it stays single-ink and
 * leans on weight and style contrast instead of colour: Fraunces regular for
 * "Canto", light italic for "Zen".
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading text-[1.375rem] leading-none tracking-[-0.015em] text-foreground",
        className,
      )}>
      Canto
      <span className="ml-[0.18em] font-light italic">Zen</span>
    </span>
  );
}
