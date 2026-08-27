import Image from "next/image";
import Link from "next/link";

import { LinkButton } from "@/components/ui/link-button";
import type { Collection as CollectionType } from "@/types";

/**
 * The editorial break between the two product rows. A collection is an
 * argument about how pieces sit together, so it gets a photograph and a
 * paragraph and nothing measurable: prices and cotas wait for the collection's
 * own listing, where they can be compared side by side.
 *
 * The band is greige rather than the page's warm white — the only colour
 * change on the page, and it is doing structural work.
 */
export function Collection({
  collection,
  /** Overridden where the band appears beside a piece that belongs to the set,
   *  so the label states the relation instead of repeating the section's name. */
  label = "Coleção",
}: {
  collection: CollectionType;
  label?: string;
}) {
  const href = `/colecoes/${collection.slug}`;
  const pieceCount = collection.produtos.length;

  return (
    <section className="border-y border-line bg-secondary">
      <div className="mx-auto grid w-full max-w-360 items-center gap-10 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
        <Link
          href={href}
          aria-label={`Ver a coleção ${collection.nome}`}
          className="rise group block lg:col-span-7">
          <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-muted lg:aspect-16/11">
            <Image
              src={collection.imagem.src}
              alt={collection.imagem.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className="rise lg:col-span-5">
          <p className="border-t border-foreground/20 pt-5 text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {label} · {pieceCount} peças
          </p>

          <h2 className="mt-5 font-heading text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.04] font-light">
            {collection.nome}
          </h2>

          <p className="mt-6 max-w-[44ch] text-[1.0625rem] leading-relaxed text-foreground">
            {collection.descricao}
          </p>

          <LinkButton href={href} className="mt-10">
            Ver a coleção
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
