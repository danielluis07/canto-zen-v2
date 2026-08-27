import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * The width ruler, drawn straight onto the catalogue photograph the way a
 * measured drawing carries it. Only photographs whose data declares a `width`
 * cota get one, so it reads as a scale note on the piece rather than a
 * flourish repeated on every card.
 */
export function WidthRuler({
  width,
  className,
}: {
  width: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-5 bottom-5 flex items-center gap-2 text-foreground/65",
        className,
      )}>
      <span className="h-2.5 w-px bg-current" />
      <span className="h-px flex-1 bg-current" />
      <span className="rounded-xs bg-background/85 px-1.5 py-0.5 text-[0.625rem] leading-none tracking-[0.12em] uppercase">
        {width} cm
      </span>
      <span className="h-px flex-1 bg-current" />
      <span className="h-2.5 w-px bg-current" />
    </div>
  );
}

/** Struck previous price first, then what the piece costs today. */
export function ProductPrice({
  current,
  previous,
  className,
}: {
  current: number;
  previous?: number;
  className?: string;
}) {
  return (
    <p className={cn("flex items-baseline gap-2", className)}>
      {/* The strike is what marks the figure as spent, so it carries full
          secondary contrast rather than being dimmed twice over. */}
      {previous && (
        <span className="text-[0.8125rem] text-muted-foreground line-through">
          <span className="sr-only">preço anterior </span>
          {formatPrice(previous)}
        </span>
      )}
      <span className="text-[0.9375rem] font-medium">
        {formatPrice(current)}
      </span>
    </p>
  );
}

/** Sage for a promise the store can keep — pronta entrega, and only pronta
 *  entrega; sob encomenda and esgotado are both promises it cannot keep today,
 *  so both take stone. Stone is used at full strength: the colour change is
 *  already the whole signal, and fading it as well put the tag under the
 *  contrast floor. */
export function AvailabilityTag({
  label,
  isReadyToShip,
  className,
}: {
  label: string;
  isReadyToShip: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.625rem] tracking-[0.14em] uppercase",
        isReadyToShip ? "text-sage-deep" : "text-muted-foreground",
        className,
      )}>
      {label}
    </p>
  );
}
