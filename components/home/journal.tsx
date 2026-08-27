import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components/home/section-header";
import { articleHref, getJournalEntries } from "@/lib/journal";

/**
 * The one section on the home page that is not selling anything.
 *
 * It is set as a contents list rather than a grid of cards, because that is
 * what a journal index is and because nothing else on the page reads
 * vertically: after four sections of pieces arranged side by side, the change
 * of axis is what marks the change of voice.
 *
 * Each entry leads with its cômodo, not its title — the reader arrived through
 * a room and the article is written about one — and closes with the number of
 * pieces it names in its captions, which is the literal measure of how far the
 * editorial reaches into the catalog.
 */
export function Journal() {
  const entries = getJournalEntries();

  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeader
        className="rise"
        eyebrow="Diário"
        title="Um texto para cada cômodo"
        note="Os artigos citam pelo nome as peças que aparecem nas fotos. É o mesmo catálogo, visto de dentro do ambiente."
        action={{ href: "/diario", label: "Ler o diário" }}
      />

      <ul className="rise mt-12 border-b border-line lg:mt-16">
        {entries.map(({ article, environmentLabel, citedPieces }) => (
          <li key={article.slug} className="border-t border-line">
            <Link
              href={articleHref(article.slug)}
              className="group grid gap-5 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:py-10">
              {/* Photograph first in the source so a narrow screen opens the
                  entry with it; from lg it moves to the end of the row, where
                  the eye lands after the sentence it illustrates. */}
              <div className="relative aspect-16/10 overflow-hidden rounded-xs bg-secondary lg:order-3 lg:col-span-4 lg:aspect-3/2">
                <Image
                  src={article.thumb.src}
                  alt={article.thumb.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="lg:order-1 lg:col-span-2">
                <p className="text-[0.625rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  {environmentLabel}
                </p>

                <p className="mt-2 text-[0.75rem] tracking-[0.04em] text-muted-foreground/80">
                  {citedPieces} peças citadas
                </p>
              </div>

              <div className="lg:order-2 lg:col-span-6">
                <h3 className="font-heading text-[clamp(1.5rem,2.4vw,2rem)] leading-snug font-light transition-colors duration-300 group-hover:text-oak-deep">
                  {article.titulo}
                </h3>

                <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {article.resumo}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
