import { artigos } from "@/data";
import { enviroments } from "@/data/enviroments";
import type { Article } from "@/types";

const environmentLabelBySlug = new Map(
  enviroments.map((environment) => [environment.slug, environment.label]),
);

/** How many distinct pieces an article actually names across its photo
 *  captions. It is the literal measure of how far the editorial reaches into
 *  the catalog, so it is stated rather than implied. */
export const citedPieceCount = (article: Article): number =>
  new Set(article.fotos.flatMap((photo) => photo.pecas)).size;

export type JournalEntry = {
  article: Article;
  /** The room the article is written about — the axis the reader already
   *  browses by, so it leads the entry instead of the title. */
  environmentLabel: string;
  citedPieces: number;
};

/**
 * The journal in its published order. Every article is room-scoped, and the
 * room label travels with it because that is what places the piece for a
 * reader who arrived through a cômodo.
 */
export function getJournalEntries(limit = artigos.length): JournalEntry[] {
  return [...artigos]
    .sort((a, b) => a.ordem - b.ordem)
    .slice(0, limit)
    .map((article) => ({
      article,
      environmentLabel:
        environmentLabelBySlug.get(article.ambiente) ?? article.ambiente,
      citedPieces: citedPieceCount(article),
    }));
}

export const articleHref = (slug: string) => `/diario/${slug}`;
