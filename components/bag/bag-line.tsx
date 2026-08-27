"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AvailabilityTag } from "@/components/home/product-details";
import { maxQuantity, useBag } from "@/lib/bag";
import type { BagItem } from "@/lib/bag-summary";
import { formatPrice } from "@/lib/format";

const stepClassName =
  "flex size-8 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:text-muted-foreground/40";

/**
 * The stepper is drawn the way the catalogue search is drawn: a rule under a
 * figure, no box. Borders separate here, they do not enclose.
 *
 * Only the two step buttons are focusable — the figure between them is output,
 * not a field, so it is read from the buttons' own labels instead of asking
 * for a typed number a furniture order would never need.
 */
function Quantity({ item }: { item: BagItem }) {
  const setQuantity = useBag((state) => state.setQuantity);
  const { product, quantity } = item;

  return (
    <div className="inline-flex items-center border-b border-line pb-1">
      <button
        type="button"
        disabled={quantity <= 1}
        onClick={() => setQuantity(product.slug, quantity - 1)}
        aria-label={`Uma ${product.name} a menos`}
        className={stepClassName}>
        <Minus className="size-3.5" strokeWidth={1.5} />
      </button>

      <span
        aria-hidden
        className="w-8 text-center text-[0.9375rem] tabular-nums">
        {quantity}
      </span>

      <button
        type="button"
        disabled={quantity >= maxQuantity}
        onClick={() => setQuantity(product.slug, quantity + 1)}
        aria-label={`Mais uma ${product.name}`}
        className={stepClassName}>
        <Plus className="size-3.5" strokeWidth={1.5} />
      </button>
    </div>
  );
}

/**
 * One piece in the bag, stating the same facts in the same order as the
 * catalogue card it came from — name, finish and measurements, then the
 * delivery promise — so the bag reads as the same document as the row that
 * filled it. What the card cannot carry is added at the end: how many, and
 * what that many costs.
 *
 * The unit price is printed beside the line total only when the two differ.
 * At quantity one they are the same figure, and printing it twice would make
 * the reader check whether it is.
 */
export function BagLine({ item }: { item: BagItem }) {
  const remove = useBag((state) => state.remove);
  const { product, image, measurements, availability, isReadyToShip } = item;

  return (
    <li className="grid grid-cols-[6rem_1fr] gap-x-5 gap-y-5 border-t border-line py-7 sm:grid-cols-[7rem_1fr] sm:gap-x-7 lg:py-8">
      <Link
        href={item.href}
        tabIndex={-1}
        aria-hidden
        className="relative aspect-4/5 overflow-hidden rounded-xs bg-secondary">
        {image && (
          <Image
            src={image.src}
            alt=""
            fill
            sizes="(min-width: 640px) 112px, 96px"
            className="object-cover"
          />
        )}
      </Link>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-heading text-[1.0625rem] leading-snug font-normal">
            <Link
              href={item.href}
              className="transition-colors duration-300 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
              {product.name}
            </Link>
          </h3>

          <p className="shrink-0 text-[0.9375rem] font-medium tabular-nums">
            <span className="sr-only">total da linha </span>
            {formatPrice(item.lineTotal)}
          </p>
        </div>

        <p className="mt-1.5 text-[0.8125rem] text-muted-foreground">
          {product.finish}
          {measurements && (
            <>
              {" · "}
              <span>
                <span className="sr-only">
                  largura por profundidade por altura,{" "}
                </span>
                {measurements}
              </span>
            </>
          )}
        </p>

        <AvailabilityTag
          label={availability}
          isReadyToShip={isReadyToShip}
          className="mt-2.5"
        />

        <div className="mt-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <Quantity item={item} />

          <div className="flex items-baseline gap-6">
            {item.quantity > 1 && (
              <p className="text-[0.8125rem] text-muted-foreground tabular-nums">
                {item.previousUnitPrice && (
                  <span className="mr-2 line-through">
                    <span className="sr-only">preço anterior </span>
                    {formatPrice(item.previousUnitPrice)}
                  </span>
                )}
                {formatPrice(item.unitPrice)} cada
              </p>
            )}

            <button
              type="button"
              onClick={() => remove(product.slug)}
              className="pb-1 text-[0.6875rem] font-medium tracking-[0.16em] text-muted-foreground uppercase transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
              Remover
              <span className="sr-only"> {product.name} da sacola</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
