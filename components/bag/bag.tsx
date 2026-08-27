"use client";

import { BagEmpty } from "@/components/bag/bag-empty";
import { BagLedger } from "@/components/bag/bag-ledger";
import { BagLine } from "@/components/bag/bag-line";
import { useBag, useBagHydrated } from "@/lib/bag";
import { resolveBag, summarizeBag } from "@/lib/bag-summary";

/**
 * The bag, read from the browser rather than from a server.
 *
 * Everything below the heading depends on localStorage, which the first
 * server-rendered pass cannot see. So the page states its title immediately and
 * holds the space under it until the store has been read — an empty bag that
 * turns out to hold four pieces is worse than a beat of nothing.
 *
 * Layout follows the catalogue: the pieces run down seven of twelve columns and
 * the ledger keeps its own column beside them, staying put while the list
 * scrolls past.
 */
export function Bag({ suggestions }: { suggestions: React.ReactNode }) {
  const lines = useBag((state) => state.lines);
  const hasHydrated = useBagHydrated();

  const items = resolveBag(lines);
  const summary = summarizeBag(items);

  return (
    <>
      <div className="mx-auto w-full max-w-360 px-6 py-14 lg:px-10 lg:py-20">
        <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-line pt-6">
          <h1 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-light">
            Sacola
          </h1>

          {/* The literal count, on the heading's own line — the same opening
              claim the catalogue makes. It is announced politely because it is
              also what changes when a line is removed from the list below. */}
          <p
            aria-live="polite"
            className="min-h-4 text-[0.6875rem] font-medium tracking-[0.16em] uppercase tabular-nums">
            {hasHydrated && summary.pieceCount > 0
              ? `${summary.pieceCount} ${
                  summary.pieceCount === 1 ? "peça" : "peças"
                } · ${summary.lineCount} ${
                  summary.lineCount === 1 ? "modelo" : "modelos"
                }`
              : ""}
          </p>
        </header>

        {/* The reserved block is the pre-hydration state: no copy, no spinner,
            just the depth the answer will occupy. */}
        {!hasHydrated ? (
          <div aria-hidden className="mt-9 min-h-72 lg:mt-12" />
        ) : items.length === 0 ? (
          <div className="mt-9 lg:mt-12">
            <BagEmpty />
          </div>
        ) : (
          <div className="mt-9 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <h2 className="sr-only">Peças na sacola</h2>

              <ul className="border-b border-line">
                {items.map((item) => (
                  <BagLine key={item.product.slug} item={item} />
                ))}
              </ul>
            </div>

            <aside
              aria-label="Resumo da sacola"
              className="mt-12 lg:col-span-4 lg:col-start-9 lg:mt-0">
              <BagLedger summary={summary} />
            </aside>
          </div>
        )}
      </div>

      {/* Pieces to look at next belong to an empty bag, not to a full one — a
          full bag's next step is the ledger. The row is server-rendered and
          passed in, so the catalogue never crosses into client state. */}
      {hasHydrated && items.length === 0 && suggestions}
    </>
  );
}
