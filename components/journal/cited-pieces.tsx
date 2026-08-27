import Link from "next/link";

import {
  AvailabilityTag,
  ProductPrice,
} from "@/components/home/product-details";
import { SectionHeader } from "@/components/home/section-header";
import { getProductFacts, productHref } from "@/lib/catalog";
import { environmentHref } from "@/lib/catalog-filters";
import { roomPhrases } from "@/lib/catalog-sentence";
import type { Environment, Product } from "@/types";

/**
 * The article, resolved back into the catalog.
 *
 * Every piece the captions named, in the order they named it, with the three
 * facts the rest of the site closes a piece on: finish and measurements, the
 * price, and the delivery promise. The editorial argues from measurements and
 * materials, so the section it hands over to has to state them — a row of
 * photographs here would drop exactly the information the text was using.
 *
 * It is the same ledger line as a catalog card, run down a column.
 */
export function CitedPieces({
  pieces,
  environment,
}: {
  pieces: Product[];
  environment: Environment | undefined;
}) {
  if (pieces.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeader
        className="rise"
        eyebrow={`${pieces.length} peças citadas`}
        title="Tudo o que aparece nas fotos"
        note="As peças estão na ordem em que o texto as encontra, com o acabamento, o preço e o prazo que constam do catálogo."
        action={
          environment
            ? {
                href: environmentHref(environment.slug),
                label: `Ver ${roomPhrases(environment).wholeRoom}`,
              }
            : { href: "/produtos", label: "Ver todos os móveis" }
        }
      />

      <ul className="rise mt-12 border-b border-line lg:mt-16">
        {pieces.map((piece) => {
          const { measurements, prices, availability, isSoldOut } =
            getProductFacts(piece);

          return (
            <li key={piece.slug} className="group relative border-t border-line">
              {/* The row's own rule, drawn over the hairline from the left —
                  the same gesture the navigation and the text control use. */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100"
              />

              <Link
                href={productHref(piece)}
                className="grid gap-y-2 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 sm:grid-cols-12 sm:items-baseline sm:gap-x-6">
                <span className="font-heading text-[1.0625rem] leading-snug font-normal transition-colors duration-300 group-hover:text-oak-deep sm:col-span-5">
                  {piece.name}
                </span>

                <span className="text-[0.8125rem] leading-relaxed text-muted-foreground sm:col-span-3">
                  {piece.finish}
                  {measurements && (
                    <>
                      <span aria-hidden> · </span>
                      <span className="tabular-nums">{measurements}</span>
                    </>
                  )}
                </span>

                {/* Price left, delivery promise right — the ledger line the
                    whole catalog closes on, stated here in the same order. */}
                <div className="flex items-baseline justify-between gap-4 sm:col-span-4 sm:justify-end sm:gap-6">
                  <ProductPrice
                    current={prices.current}
                    previous={prices.previous}
                  />

                  <AvailabilityTag
                    label={availability}
                    isSoldOut={isSoldOut}
                    className="text-right"
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
