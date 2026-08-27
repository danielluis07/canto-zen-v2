import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components/home/section-header";
import { StraddledLabel } from "@/components/product/straddled-label";
import { articleHref } from "@/lib/journal";
import { getProduct } from "@/lib/product-page";
import { productHref } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { Article, ArticlePhoto, Product } from "@/types";

/**
 * The Diário names the pieces in its photographs by slug, so a piece can find
 * the article that photographed it — and the caption can name what else is in
 * the frame, which is the one place on the site where the catalog and the
 * editorial are visibly the same body of work.
 */
export function PieceEditorial({
  article,
  photo,
  product,
}: {
  article: Article;
  photo: ArticlePhoto;
  product: Product;
}) {
  const href = articleHref(article.slug);

  const alsoInFrame = photo.pecas.flatMap((slug) => {
    const piece = getProduct(slug);
    return piece ? [piece] : [];
  });

  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeader
        className="rise"
        eyebrow="No Diário"
        title={article.titulo}
        note={article.resumo}
        action={{ href, label: "Ler o artigo" }}
      />

      <div className="rise mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-16">
        <Link
          href={href}
          aria-label={`Ler o artigo ${article.titulo}`}
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 lg:col-span-7">
          <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-secondary lg:aspect-16/11">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className="mt-12 lg:col-span-5 lg:mt-0">
          {/* The article's own opening line, in the display face — the page's
              one passage of voice, against a column of specifications above. */}
          <p className="max-w-[30ch] font-heading text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.35] font-light text-balance">
            {article.abertura}
          </p>

          {/* The frame's inventory, and the reason this section exists: the
              article's caption already knows exactly which pieces are in the
              photograph, so the page can list them instead of describing them. */}
          <div className="relative mt-12 border-t border-line pt-7">
            <StraddledLabel>Nesta foto</StraddledLabel>

            <ul>
              {alsoInFrame.map((piece) => {
                const isCurrent = piece.slug === product.slug;

                const body = (
                  <>
                    <span
                      aria-hidden
                      className={cn(
                        "mt-2 size-2 shrink-0 rounded-[1px] border transition-colors duration-300",
                        isCurrent
                          ? "border-foreground bg-foreground"
                          : "border-foreground/40 group-hover:border-oak-deep",
                      )}
                    />
                    <span
                      className={cn(
                        "font-heading text-[1.0625rem] leading-snug font-normal transition-colors duration-300",
                        isCurrent
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-oak-deep",
                      )}>
                      {piece.name}
                    </span>
                    <span className="ml-auto shrink-0 pt-1 text-[0.8125rem] text-muted-foreground">
                      {piece.finish}
                    </span>
                  </>
                );

                return (
                  <li
                    key={piece.slug}
                    className="group flex items-start gap-4 border-b border-line py-3 last:border-b-0">
                    {isCurrent ? (
                      <>
                        <span className="sr-only">Esta peça: </span>
                        {body}
                      </>
                    ) : (
                      <Link
                        href={productHref(piece)}
                        className="flex flex-1 items-start gap-4 focus-visible:outline-2 focus-visible:outline-offset-4">
                        {body}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
