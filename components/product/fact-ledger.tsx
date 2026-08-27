import { cn } from "@/lib/utils";

export type LedgerRow = { label: string; value: string };

/**
 * Label at one end, value at the other, a hairline between every pair and one
 * closing the set. It is the same ledger line the catalog card ends on, run
 * down a column instead of across a card, so a page of specifications reads as
 * the same document as the row it came from.
 */
export function FactLedger({
  rows,
  className,
}: {
  rows: LedgerRow[];
  className?: string;
}) {
  return (
    <dl className={cn("border-b border-line", className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-6 border-t border-line py-3">
          <dt className="text-[0.8125rem] leading-relaxed text-muted-foreground">
            {row.label}
          </dt>
          <dd className="shrink-0 text-[0.8125rem] leading-relaxed tabular-nums">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
