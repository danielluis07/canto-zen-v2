"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { useBagCount } from "@/lib/bag-summary";

/**
 * The bag's entry in the navigation, and the one node in the bar that
 * subscribes to client state — the rest of the navigation stays a server
 * component.
 *
 * The link owns the count rather than receiving it, because the badge and the
 * accessible name are the same fact: a bar that says "nenhuma peça" over a
 * badge reading 3 is worse than no badge at all.
 */
export function BagLink({ className }: { className?: string }) {
  const count = useBagCount();

  return (
    <Link
      href="/sacola"
      aria-label={
        count === 0
          ? "Sacola, nenhuma peça"
          : count === 1
            ? "Sacola, 1 peça"
            : `Sacola, ${count} peças`
      }
      className={className}>
      <ShoppingBag aria-hidden className="size-[1.15rem]" strokeWidth={1.5} />

      {count > 0 && (
        <span
          aria-hidden
          className="absolute top-1 right-1 min-w-4 rounded-xs bg-oak-deep px-1 text-center text-[0.625rem] leading-4 font-medium text-background tabular-nums">
          {count}
        </span>
      )}
    </Link>
  );
}
