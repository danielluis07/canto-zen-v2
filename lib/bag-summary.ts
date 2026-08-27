import { products } from "@/data/products";
import { useBag, type BagLine } from "@/lib/bag";
import { getFamily, getMainImage, productHref } from "@/lib/catalog";
import { freeShippingThreshold } from "@/lib/commitments";
import {
  formatAvailability,
  formatMeasurements,
  resolvePrices,
} from "@/lib/format";
import type { Product } from "@/types";

const productBySlug = new Map(products.map((product) => [product.slug, product]));

/**
 * How many pieces the bag holds, counting quantities and counting only lines
 * the catalog still recognises — the badge and the page have to agree, and the
 * page drops a slug that no longer resolves.
 *
 * A number rather than a derived array, so the badge does not re-render when a
 * line's identity changes.
 */
export const useBagCount = () =>
  useBag((state) =>
    state.lines.reduce(
      (total, line) =>
        productBySlug.has(line.slug) ? total + line.quantity : total,
      0,
    ),
  );

export type BagItem = {
  product: Product;
  quantity: number;
  href: string;
  image: Product["images"][number] | undefined;
  measurements: string | null;
  availability: string;
  isSoldOut: boolean;
  unitPrice: number;
  /** The struck figure, when the piece is marked down. */
  previousUnitPrice?: number;
  lineTotal: number;
};

/**
 * Lines are slugs; this is where they become pieces again.
 *
 * A slug the catalog no longer carries resolves to nothing and is dropped —
 * the bag states the catalog, so a piece that left it cannot be bought from a
 * stale localStorage entry.
 */
export function resolveBag(lines: BagLine[]): BagItem[] {
  return lines.flatMap((line) => {
    const product = productBySlug.get(line.slug);
    if (!product) return [];

    const prices = resolvePrices(product);

    return [
      {
        product,
        quantity: line.quantity,
        href: productHref(product),
        image: getMainImage(product),
        measurements: formatMeasurements(getFamily(product.family)),
        availability: formatAvailability(product),
        isSoldOut: product.availability === "out-of-stock",
        unitPrice: prices.current,
        previousUnitPrice: prices.previous,
        lineTotal: prices.current * line.quantity,
      },
    ];
  });
}

export type BagReadiness =
  | { kind: "empty" }
  | { kind: "immediate" }
  | { kind: "made-to-order"; weeks: number | null }
  | { kind: "blocked" };

export type BagSummary = {
  /** Pieces, counting quantities — what the badge and the heading state. */
  pieceCount: number;
  /** Distinct pieces, which is what the list is long. */
  lineCount: number;
  subtotal: number;
  /** What the markdowns on the pieces in the bag are worth, in total. Zero
   *  when nothing in the bag is marked down. */
  savings: number;
  hasFreeShipping: boolean;
  /** What is still missing to clear the free-shipping threshold. Null once the
   *  subtotal has cleared it. */
  toFreeShipping: number | null;
  readiness: BagReadiness;
  soldOutCount: number;
};

/**
 * The bag's own facts, derived from the pieces in it.
 *
 * The delivery promise is the interesting one: an order arrives when its
 * slowest piece does, so the bag states the longest production time in it
 * rather than repeating each line's own promise as if they were independent.
 */
export function summarizeBag(items: BagItem[]): BagSummary {
  const pieceCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.lineTotal, 0);

  const savings = items.reduce(
    (total, item) =>
      item.previousUnitPrice
        ? total + (item.previousUnitPrice - item.unitPrice) * item.quantity
        : total,
    0,
  );

  const soldOut = items.filter((item) => item.isSoldOut);
  const madeToOrder = items.filter(
    (item) => item.product.availability === "made-to-order",
  );

  /* A single piece the store cannot ship holds the whole order, so it is
     stated as the bag's condition rather than buried on one line. */
  const readiness: BagReadiness = !items.length
    ? { kind: "empty" }
    : soldOut.length
      ? { kind: "blocked" }
      : madeToOrder.length
        ? {
            kind: "made-to-order",
            weeks: madeToOrder.reduce<number | null>(
              (longest, item) =>
                item.product.productionWeeks
                  ? Math.max(longest ?? 0, item.product.productionWeeks)
                  : longest,
              null,
            ),
          }
        : { kind: "immediate" };

  const hasFreeShipping = subtotal >= freeShippingThreshold;

  return {
    pieceCount,
    lineCount: items.length,
    subtotal,
    savings,
    hasFreeShipping,
    toFreeShipping: hasFreeShipping ? null : freeShippingThreshold - subtotal,
    readiness,
    soldOutCount: soldOut.length,
  };
}

/** The one sentence the bag closes on: when the whole order can leave. */
export function readinessLabel(readiness: BagReadiness): string | null {
  switch (readiness.kind) {
    case "empty":
      return null;
    case "immediate":
      return "Pronta entrega";
    case "made-to-order":
      return readiness.weeks
        ? `Sob encomenda · ${readiness.weeks} semanas`
        : "Sob encomenda";
    /* What to do about it is stated once, beside the control it blocks. */
    case "blocked":
      return "Indisponível";
  }
}
