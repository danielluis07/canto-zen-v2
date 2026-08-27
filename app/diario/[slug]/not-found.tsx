import Link from "next/link";

import { LinkButton } from "@/components/ui/link-button";
import { getJournalEntries, articleHref } from "@/lib/journal";

/**
 * A text can move; the four cômodos it was written about do not. So the dead
 * end states what the journal still holds and hands back every article in it,
 * rather than apologising and stopping.
 */
export default function ArticleNotFound() {
  const entries = getJournalEntries();

  return (
    <div className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <div className="border-t border-line pt-6 lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <p className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Texto fora do diário
          </p>

          <h1 className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.04] font-light">
            Não encontramos esse texto
          </h1>

          <p className="mt-6 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
            O endereço pode ter mudado. O diário continua com {entries.length}{" "}
            textos, um para cada cômodo da casa.
          </p>

          <LinkButton href="/diario" className="mt-10">
            Ler o diário
          </LinkButton>
        </div>

        {/* The room leads each line here for the same reason it leads the
            journal index: it is the axis the reader browses by. */}
        <nav
          aria-label="Textos do diário"
          className="mt-14 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <h2 className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Ou entre por um texto
          </h2>

          <ul className="mt-5 border-b border-line">
            {entries.map(({ article, environmentLabel }) => (
              <li
                key={article.slug}
                className="group relative border-t border-line">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100"
                />

                <Link
                  href={articleHref(article.slug)}
                  className="flex items-baseline justify-between gap-6 py-4 focus-visible:outline-2 focus-visible:outline-offset-4">
                  <span className="font-heading text-[1.0625rem] leading-snug font-normal transition-colors duration-300 group-hover:text-oak-deep">
                    {article.titulo}
                  </span>
                  <span className="shrink-0 text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    {environmentLabel}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
