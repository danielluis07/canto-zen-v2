import Image from "next/image";
import Link from "next/link";

import {
  AvailabilityTag,
  ProductPrice,
  WidthRuler,
} from "@/components/home/product-details";
import { SectionHeader } from "@/components/home/section-header";
import { StraddledLabel } from "@/components/product/straddled-label";
import { getProductFacts, productHref } from "@/lib/catalog";
import type { Product } from "@/types";

export type SpreadItem = {
  product: Product;
  /** What the piece stands for here — a room, a material, a use. */
  label: string;
};

function ProductPlate({ product, label }: SpreadItem) {
  const {
    image,
    measurements,
    prices,
    availability,
    isReadyToShip,
    rulerWidth,
  } = getProductFacts(product);

  return (
    <li className="relative border-t border-line pt-9 lg:pt-11">
      <StraddledLabel>{label}</StraddledLabel>

      <Link
        href={productHref(product)}
        className="group grid grid-cols-[7rem_1fr] items-center gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
        <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-secondary transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_18px_38px_-24px_oklch(0.285_0.007_95.3/0.5)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 13rem, 7rem"
            className="object-cover"
          />

          {/* The ruler needs room to read, so it waits for the large thumbnail.
              Nothing is lost below lg — the same width leads the measurements
              line beside the photograph. */}
          {rulerWidth && (
            <WidthRuler
              width={rulerWidth}
              className="inset-x-3 bottom-3 hidden lg:flex"
            />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-xl leading-snug font-normal transition-colors duration-300 group-hover:text-oak-deep lg:text-[1.5rem]">
            {product.name}
          </h3>

          <p className="mt-2 text-[0.8125rem] text-muted-foreground">
            {product.finish}
          </p>

          {measurements && (
            <p className="mt-1 text-[0.75rem] tracking-[0.04em] text-muted-foreground/80">
              <span className="sr-only">
                largura por profundidade por altura,{" "}
              </span>
              {measurements}
            </p>
          )}

          {/* Price left, delivery promise right, across the full measure — the
              two things a ledger line has to answer, at opposite ends of it. */}
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line pt-3.5">
            <ProductPrice current={prices.current} previous={prices.previous} />
            <AvailabilityTag
              label={availability}
              isReadyToShip={isReadyToShip}
            />
          </div>
        </div>
      </Link>
    </li>
  );
}

/**
 * The second reading of the catalog. Where `ProductsRow` sets four peers side
 * by side to be compared, this sets four plates that each stand for something
 * else — one room apiece — so they are read one at a time rather than scanned.
 *
 * The form follows from that: no uniform card crop, no scrolling filmstrip.
 * Each piece gets its own ruled plate with the thing it represents named on
 * the rule, and the photograph shrinks to a thumbnail so the facts beside it
 * carry the weight.
 */
export function ProductsSpread({
  eyebrow,
  title,
  note,
  items,
  action,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  items: SpreadItem[];
  action?: { href: string; label: string };
}) {
  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeader
        className="rise"
        eyebrow={eyebrow}
        title={title}
        note={note}
        action={action}
      />

      <ul className="rise mt-14 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:mt-18 lg:gap-x-20 lg:gap-y-16">
        {items.map((item) => (
          <ProductPlate key={item.product.slug} {...item} />
        ))}
      </ul>
    </section>
  );
}
