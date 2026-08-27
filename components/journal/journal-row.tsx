import Image from "next/image";
import Link from "next/link";

import { articleHref, type JournalEntry } from "@/lib/journal";

/**
 * One line of the journal index.
 *
 * The entry leads with its cômodo, not its title — the reader arrived through
 * a room and the article is written about one — and states the number of
 * pieces it names in its captions, which is the literal measure of how far the
 * editorial reaches into the catalog.
 *
 * The caller owns the rule above the row and the list it sits in, so the same
 * line can serve a full index and a single "next text" hand-off.
 */
export function JournalRow({ entry }: { entry: JournalEntry }) {
  const { article, environmentLabel, citedPieces } = entry;

  return (
    <Link
      href={articleHref(article.slug)}
      className="group grid gap-5 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:py-10">
      {/* Photograph first in the source so a narrow screen opens the entry
          with it; from lg it moves to the end of the row, where the eye lands
          after the sentence it illustrates. */}
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
  );
}
