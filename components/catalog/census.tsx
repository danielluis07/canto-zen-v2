import Link from "next/link";

import { LinkPending } from "@/components/catalog/link-pending";
import { TextLink } from "@/components/ui/link-button";
import {
  clearHref,
  isFiltered,
  type CatalogQuery,
  type CensusGroup,
  type CensusRow,
} from "@/lib/catalog-filters";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * The census.
 *
 * Not a filter box: a reading of what the catalogue currently contains —
 * the set stated as a sentence, its price measured end to end, and every
 * facet listed with the number of pieces it would give. Narrowing is what
 * happens when you act on one of those lines, so the panel is the count and
 * the control at once.
 *
 * Every row is a link, which is why the catalogue survives the back button, a
 * right-click, and a page with JavaScript switched off.
 */

/** A micro-label sitting on its own rule, the page ground painted behind it so
 *  the hairline reads as broken rather than crossed out. */
function StraddledLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute top-0 left-0 -translate-y-1/2 bg-background pr-3 text-[0.625rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
      {children}
    </span>
  );
}

/**
 * The set measured end to end, drawn as a cota — the same figure the
 * catalogue draws across a photograph, here measuring the whole set instead
 * of one piece. Suppressed when nothing is in the set, so it never draws a
 * measurement of nothing.
 */
function PriceSpan({ from, to }: { from: number; to: number }) {
  return (
    <div className="mt-7 first:mt-0">
      <p className="flex items-baseline justify-between gap-4 text-[0.8125rem] tabular-nums">
        <span className="sr-only">Preços neste conjunto, de </span>
        <span>{formatPrice(from)}</span>
        <span className="sr-only"> a </span>
        <span>{formatPrice(to)}</span>
      </p>

      <span aria-hidden className="mt-2 flex items-center text-foreground/25">
        <span className="h-2 w-px bg-current" />
        <span className="h-px flex-1 bg-current" />
        <span className="h-2 w-px bg-current" />
      </span>
    </div>
  );
}

/**
 * The row's own hairline, drawn to its share of the group's largest count.
 * The world's proportion rule applied to a ledger: a visitor reading only the
 * lengths has already learned how the catalogue divides, before reading a
 * single figure.
 */
function ShareRule({ share }: { share: number }) {
  return (
    <span
      aria-hidden
      className="absolute bottom-0 left-0 h-px bg-foreground/20"
      style={{ width: `${(share * 100).toFixed(2)}%` }}
    />
  );
}

function CensusLine({ row, note }: { row: CensusRow; note: string }) {
  const content = (
    <>
      <span className="relative">
        {row.label}
        {row.active && (
          <span
            aria-hidden
            className="absolute inset-x-0 -bottom-0.5 h-px bg-foreground"
          />
        )}
      </span>

      <span
        className={cn(
          "shrink-0 text-[0.625rem] tracking-[0.14em] tabular-nums",
          row.active ? "text-foreground" : "text-muted-foreground",
        )}>
        {row.count}
      </span>
    </>
  );

  /* A row that would return nothing is still part of the census — the panel
     counts the catalogue, not just the current result — but it is not a
     control, so it is not focusable and not a link. It says so by having no
     rule of its own to stand on, never by being too faint to read. */
  if (row.count === 0 && !row.active) {
    return (
      <li className="relative flex items-baseline justify-between gap-4 py-2.5 text-[0.8125rem] text-muted-foreground">
        {content}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-line/60"
        />
      </li>
    );
  }

  return (
    <li>
      <Link
        href={row.href}
        scroll={false}
        className={cn(
          "group relative flex w-full items-baseline justify-between gap-4 py-2.5 text-[0.8125rem]",
          "transition-colors duration-200 hover:text-oak-deep",
          "focus-visible:outline-2 focus-visible:-outline-offset-2",
          row.active ? "text-foreground" : "text-foreground/75",
        )}>
        {content}

        <span className="sr-only">
          {row.active
            ? " — filtro ativo, remover"
            : ` — ${row.count} ${row.count === 1 ? "peça" : "peças"} ${note}`}
        </span>

        {/* The full rule, the share drawn over it, then the hover rule, then
            the navigation rule that replaces both while the new set is on its
            way. */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-line"
        />
        <ShareRule share={row.share} />
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
        <LinkPending />
      </Link>
    </li>
  );
}

function CensusLedger({ group }: { group: CensusGroup }) {
  return (
    <section className="relative mt-11 border-t border-line pt-7">
      <StraddledLabel>{group.label}</StraddledLabel>

      <ul>
        {group.rows.map((row) => (
          <CensusLine key={row.slug} row={row} note={group.rowNote} />
        ))}
      </ul>
    </section>
  );
}

export function Census({
  query,
  groups,
  sentence,
  priceFrom,
  priceTo,
  className,
}: {
  query: CatalogQuery;
  groups: CensusGroup[];
  /** The sheet leaves this out: the sentence is the one statement of filter
   *  state, and printing it twice on the same screen halves its authority. */
  sentence?: string;
  priceFrom: number | null;
  priceTo: number | null;
  className?: string;
}) {
  return (
    <div className={className}>
      {sentence && (
        <p className="max-w-[38ch] text-[0.9375rem] leading-relaxed text-pretty">
          {sentence}
        </p>
      )}

      {isFiltered(query) && (
        <TextLink href={clearHref(query)} className={sentence ? "mt-5" : ""}>
          Limpar filtros
        </TextLink>
      )}

      {priceFrom !== null && priceTo !== null && (
        <PriceSpan from={priceFrom} to={priceTo} />
      )}

      {groups.map((group) => (
        <CensusLedger key={group.key} group={group} />
      ))}
    </div>
  );
}
