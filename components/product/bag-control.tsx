"use client";

import Link from "next/link";

import {
  inertControlClassName,
  solidControlClassName,
} from "@/components/ui/link-button";
import { useBag, useLineQuantity, maxQuantity } from "@/lib/bag";
import { cn } from "@/lib/utils";

/**
 * The page's one filled control, in the same ink and at the same 48px as
 * `LinkButton` — this is a button rather than a link because it acts on the
 * page instead of leaving it.
 *
 * A piece the store cannot ship gets a genuinely disabled control. The label
 * does not change: a control names its action, and "Esgotado" is already
 * stated once on the ledger line above, where every other variant states its
 * delivery promise. The disabled treatment is what says it cannot be pressed.
 *
 * The label does not change on success either. Confirmation is the fact
 * printed under the control — how many of this piece the bag now holds, and
 * the way to it — announced politely rather than flashed and withdrawn.
 */
export function BagControl({
  slug,
  isSoldOut,
}: {
  slug: string;
  isSoldOut: boolean;
}) {
  const add = useBag((state) => state.add);
  const quantity = useLineQuantity(slug);
  const isFull = quantity >= maxQuantity;

  return (
    <div>
      <button
        type="button"
        disabled={isSoldOut || isFull}
        onClick={() => add(slug)}
        className={cn(
          isSoldOut || isFull ? inertControlClassName : solidControlClassName,
          "w-full",
        )}>
        Adicionar à sacola
      </button>

      {/* The row is kept in the flow whether or not it has anything to say, so
          adding the first piece does not shove the commitments below it down
          the page. */}
      <p
        aria-live="polite"
        className="mt-3 flex min-h-5 items-baseline gap-3 text-[0.6875rem] font-medium tracking-[0.16em] uppercase">
        {quantity > 0 && (
          <>
            <span className="text-muted-foreground tabular-nums">
              {quantity} na sacola
            </span>

            <Link
              href="/sacola"
              className="text-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
              Ver a sacola
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
