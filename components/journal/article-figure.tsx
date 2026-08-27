import Image from "next/image";
import Link from "next/link";

import { StraddledLabel } from "@/components/product/straddled-label";
import { productHref } from "@/lib/catalog";
import { getProduct } from "@/lib/product-page";
import { cn } from "@/lib/utils";
import type { ArticlePhoto } from "@/types";

/**
 * A photograph carrying its ticket of origin.
 *
 * The caption says what the frame is doing — the alt text already says what is
 * in it — and under the rule the pieces standing in the frame are named and
 * linked. The article knows their slugs, so a reader who wants one should
 * never have to go and search the catalog for a name they just read.
 *
 * `papel` decides the crop, not a prop: a photograph the article calls "ampla"
 * is one that has to be read across the page, and one it calls "detalhe" is
 * read at the width of the paragraph it follows.
 */
export function ArticleFigure({ photo }: { photo: ArticlePhoto }) {
  const isWide = photo.papel === "ampla";

  const pieces = photo.pecas.flatMap((slug) => {
    const piece = getProduct(slug);
    return piece ? [piece] : [];
  });

  return (
    <figure>
      <div
        className={cn(
          "relative overflow-hidden rounded-xs bg-secondary",
          isWide ? "aspect-4/3 lg:aspect-16/11" : "aspect-4/3",
        )}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={
            isWide
              ? "(min-width: 1024px) 92vw, 100vw"
              : "(min-width: 1024px) 56vw, 100vw"
          }
          className="object-cover"
        />
      </div>

      <figcaption className="mt-5">
        <p className="max-w-[52ch] text-[0.8125rem] leading-relaxed text-muted-foreground">
          {photo.legenda}
        </p>

        {pieces.length > 0 && (
          <div className="relative mt-6 border-t border-line pt-6">
            <StraddledLabel>Na foto</StraddledLabel>

            {/* The names are set as micro-type rather than in the serif the
                catalog uses for them: here they are a list of what is in the
                frame, not a row of pieces on offer. The ledger at the end of
                the article is where they get their prices back. */}
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {pieces.map((piece) => (
                <li key={piece.slug}>
                  <Link
                    href={productHref(piece)}
                    className="text-[0.625rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
                    {piece.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
