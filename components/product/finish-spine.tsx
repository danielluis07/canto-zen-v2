import Link from "next/link";

import { productHref } from "@/lib/catalog";
import { formatAvailability, formatPrice, resolvePrices } from "@/lib/format";
import type { FinishSibling } from "@/lib/product-page";
import { cn } from "@/lib/utils";

/**
 * The state of a plate is a printed mark, not a colour: filled for the finish
 * being read, hairline for one that can be reached, and the price struck
 * through where the piece is out of stock. Colour is left to carry interaction
 * alone, which is why the current plate holds an ink rule and never an oak one.
 */
function FinishMark({ isCurrent }: { isCurrent: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "mt-2 size-2 shrink-0 rounded-[1px] border transition-colors duration-300",
        isCurrent
          ? "border-foreground bg-foreground"
          : "border-foreground/40 group-hover:border-oak-deep",
      )}
    />
  );
}

function FinishBody({
  product,
  isCurrent,
  showPrice,
  showAvailability,
}: FinishSibling & { showPrice: boolean; showAvailability: boolean }) {
  const isSoldOut = product.availability === "out-of-stock";

  return (
    <>
      <FinishMark isCurrent={isCurrent} />

      <span className="min-w-0 flex-1">
        <span
          className={cn(
            "block font-heading text-[1.0625rem] leading-snug font-normal transition-colors duration-300",
            isCurrent
              ? "text-foreground"
              : "text-muted-foreground group-hover:text-oak-deep",
          )}>
          {product.finish}
        </span>

        {showAvailability && (
          <span
            className={cn(
              "mt-1.5 block text-[0.625rem] font-medium tracking-[0.14em] uppercase",
              isSoldOut ? "text-muted-foreground" : "text-sage-deep",
            )}>
            {formatAvailability(product)}
          </span>
        )}
      </span>

      {/* The price only earns a place on the plate when there is a second
          finish to compare it against; on a family with one finish it would
          simply restate the figure two rows below. */}
      {showPrice && (
        <span
          className={cn(
            /* The strike is what states "esgotado" here, so the figure keeps
               full secondary contrast instead of being dimmed twice over. */
            "mt-0.5 shrink-0 text-[0.8125rem] text-muted-foreground tabular-nums",
            isSoldOut && "line-through",
          )}>
          {formatPrice(resolvePrices(product).current)}
        </span>
      )}
    </>
  );
}

/**
 * The page's spine, and its argument: a product is a family plus a finish, so
 * the silhouette is the subject and the material is the one thing that varies
 * under it. Six of the fifty-nine families carry more than one finish; on the
 * rest this states the material of the piece rather than offering a choice, in
 * the same rows, at the same weight.
 *
 * Switching finish is a navigation to the sibling slug, so the geometry above
 * it never moves — only the values inside the cells change.
 */
export function FinishSpine({ finishes }: { finishes: FinishSibling[] }) {
  const showPrice = finishes.length > 1;

  /* A plate states its own delivery promise only where the promises actually
     differ between finishes — there it is the comparison. Where every finish
     ships the same way, the promise is stated once, on the price line below,
     instead of three times in ninety pixels. */
  const showAvailability =
    new Set(finishes.map(({ product }) => formatAvailability(product))).size > 1;

  return (
    <section aria-labelledby="acabamento-titulo">
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="acabamento-titulo"
          className="font-sans text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Acabamento
        </h2>

        {showPrice && (
          <p className="text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground uppercase tabular-nums">
            {finishes.length} acabamentos
          </p>
        )}
      </div>

      <ul className="mt-4">
        {finishes.map(({ product, isCurrent }) => (
          <li key={product.slug} className="group relative">
            {/* Every plate rests on a hairline. The current one takes that
                hairline to full ink; hovering any of them sweeps an oak rule
                over it from the left, the same gesture the navigation uses. */}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-0 top-0 h-px transition-colors duration-300",
                isCurrent ? "bg-foreground" : "bg-line",
              )}
            />
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100"
            />

            {isCurrent ? (
              <p
                aria-current="true"
                className="flex items-start gap-4 py-4 pr-1">
                <span className="sr-only">Acabamento selecionado: </span>
                <FinishBody
                  product={product}
                  isCurrent
                  showPrice={showPrice}
                  showAvailability={showAvailability}
                />
              </p>
            ) : (
              <Link
                href={productHref(product)}
                className="flex items-start gap-4 py-4 pr-1 focus-visible:outline-2 focus-visible:outline-offset-4">
                <FinishBody
                  product={product}
                  isCurrent={false}
                  showPrice={showPrice}
                  showAvailability={showAvailability}
                />
              </Link>
            )}
          </li>
        ))}
      </ul>

      <span aria-hidden className="block h-px bg-line" />
    </section>
  );
}
