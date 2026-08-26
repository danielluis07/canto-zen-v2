import Image from "next/image";
import Link from "next/link";

import {
  AvailabilityTag,
  ProductPrice,
  WidthRuler,
} from "@/components/home/product-details";
import { getProductFacts, productHref } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

/**
 * The catalogue card, in one place. Every row and grid on the site prints the
 * same facts in the same order — name, finish and measurements, then a
 * hairline, then price and availability on one baseline — so a set of cards
 * can be read down its columns instead of card by card.
 *
 * Only the crop's width and the image `sizes` hint change between the home
 * page's filmstrip and the catalogue grid.
 */
export function ProductCard({
  product,
  sizes,
  priority = false,
  className,
}: {
  product: Product;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const { image, measurements, prices, availability, isSoldOut, rulerWidth } =
    getProductFacts(product);

  return (
    /* `relative` is load-bearing: it gives the sr-only spans below a containing
       block inside the card, so they stay clipped by the scrolling row instead
       of widening the document from their off-screen static position. */
    /* A container, not a breakpoint: the same card is 342px wide on a phone,
       208px in a three-up grid on a small laptop, and 320px on a large one, so
       the ledger line has to answer to the card's width rather than the
       window's. */
    <article className={cn("group relative @container", className)}>
      <Link
        href={productHref(product)}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4">
        <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-secondary transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_20px_44px_-26px_oklch(0.285_0.007_95.3/0.5)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />

          {rulerWidth && <WidthRuler width={rulerWidth} />}
        </div>

        <div className="mt-5">
          <h3 className="font-heading text-[1.0625rem] leading-snug font-normal transition-colors duration-300 group-hover:text-oak-deep">
            {product.name}
          </h3>

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

          {/* Price and availability close the card on one baseline at
              opposite ends. Under ~17rem the delivery promise cannot share
              that line without truncating a fact, so it drops to its own line
              rather than being cut short. */}
          <div className="mt-4 flex flex-col gap-1.5 border-t border-line pt-3.5 @min-[17rem]:flex-row @min-[17rem]:items-baseline @min-[17rem]:justify-between @min-[17rem]:gap-4">
            <ProductPrice current={prices.current} previous={prices.previous} />
            <AvailabilityTag
              label={availability}
              isSoldOut={isSoldOut}
              className="@min-[17rem]:shrink-0"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
