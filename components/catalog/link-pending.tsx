"use client";

import { useLinkStatus } from "next/link";

/**
 * The catalogue's one authored moment. A facet row is a link, so narrowing is
 * a navigation; while it is in flight an oak rule draws itself along the row —
 * the same left-origin gesture the navigation bar uses on hover.
 *
 * The rule is held invisible for its first 120ms by the animation's delay, so
 * a transition that resolves instantly never flashes it. Rendered inside a
 * `<Link>`, which is what `useLinkStatus` reads.
 */
export function LinkPending() {
  const { pending } = useLinkStatus();

  if (!pending) return null;

  return (
    <span
      aria-hidden
      className="facet-pending absolute inset-x-0 bottom-0 h-px origin-left bg-oak"
    />
  );
}
