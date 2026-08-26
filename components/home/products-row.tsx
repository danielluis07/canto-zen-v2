import Image from "next/image";
import Link from "next/link";

import {
  AvailabilityTag,
  ProductPrice,
  WidthRuler,
} from "@/components/home/product-details";
import { SectionHeader } from "@/components/home/section-header";
import { getProductFacts, productHref } from "@/lib/catalog";
import type { Product } from "@/types";

function ProductCard({ product }: { product: Product }) {
  const { image, measurements, prices, availability, isSoldOut, rulerWidth } =
    getProductFacts(product);

  return (
    /* `relative` is load-bearing: it gives the sr-only spans below a containing
       block inside the card, so they stay clipped by the scrolling row instead
       of widening the document from their off-screen static position. */
    <article className="group relative w-[74vw] shrink-0 snap-start sm:w-[46vw] lg:w-auto lg:shrink">
      <Link
        href={productHref(product)}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4">
        <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-secondary transition duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_20px_44px_-26px_oklch(0.285_0.007_95.3/0.5)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 74vw"
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

          <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3.5">
            <ProductPrice current={prices.current} previous={prices.previous} />
            <AvailabilityTag
              label={availability}
              isSoldOut={isSoldOut}
              className="shrink-0"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}

/**
 * The browsing row: four peer pieces, same crop, same order of facts, so the
 * eye can run across them and compare. Below `lg` it keeps its horizontal
 * proportions and scrolls, rather than collapsing into a stack of half-height
 * cards.
 *
 * For a set whose pieces are not peers — one per room, say — use
 * `ProductsSpread` instead, which sets them as separate plates.
 */
export function ProductsRow({
  eyebrow,
  title,
  note,
  products,
  action,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  products: Product[];
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

      {/* scroll-px keeps the snapport inside the page gutter, so a snapped card
          lines up with the heading above it instead of the screen edge. */}
      <div className="-mx-6 mt-12 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:scroll-px-0 lg:px-0 lg:pb-0">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
