import { artigos } from "@/data";
import { enviroments } from "@/data/enviroments";
import { products } from "@/data/products";
import { getProduct } from "@/lib/product-page";
import type { Article, ArticlePhoto, Environment, Product } from "@/types";

const articleBySlug = new Map(artigos.map((article) => [article.slug, article]));
const environmentBySlug = new Map(
  enviroments.map((environment) => [environment.slug, environment]),
);

/** The journal in its published order, resolved once. Everything below reads
 *  positions off this list, so "the next article" and "text 3 of 4" cannot
 *  disagree about what the order is. */
const published = [...artigos].sort((a, b) => a.ordem - b.ordem);

export const journalLength = published.length;

/** The article's photographs in reading order. Each part owns its own, so the
 *  flat list is derived rather than kept beside them, where the two would be
 *  free to fall out of step. */
export const articlePhotos = (article: Article): ArticlePhoto[] =>
  article.partes.map((part) => part.foto);

/** How many distinct pieces an article actually names across its photo
 *  captions. It is the literal measure of how far the editorial reaches into
 *  the catalog, so it is stated rather than implied. */
export const citedPieceCount = (article: Article): number =>
  new Set(articlePhotos(article).flatMap((photo) => photo.pecas)).size;

export const getArticle = (slug: string): Article | undefined =>
  articleBySlug.get(slug);

export const articleSlugs = () => artigos.map((article) => article.slug);

export const articleHref = (slug: string) => `/diario/${slug}`;

export type JournalEntry = {
  article: Article;
  /** The room the article is written about — the axis the reader already
   *  browses by, so it leads the entry instead of the title. */
  environmentLabel: string;
  citedPieces: number;
};

const toEntry = (article: Article): JournalEntry => ({
  article,
  environmentLabel:
    environmentBySlug.get(article.ambiente)?.label ?? article.ambiente,
  citedPieces: citedPieceCount(article),
});

/**
 * The journal in its published order. Every article is room-scoped, and the
 * room label travels with it because that is what places the piece for a
 * reader who arrived through a cômodo.
 */
export function getJournalEntries(limit = journalLength): JournalEntry[] {
  return published.slice(0, limit).map(toEntry);
}

/**
 * Every piece the article names, deduplicated, in the order its captions name
 * them — which is the order the reader met them, not the catalog's. A slug
 * that no longer resolves drops out silently: the article keeps its prose and
 * loses one row of the ledger, rather than breaking.
 */
export function getCitedPieces(article: Article): Product[] {
  const seen = new Set<string>();

  return articlePhotos(article)
    .flatMap((photo) => photo.pecas)
    .flatMap((slug) => {
      if (seen.has(slug)) return [];
      seen.add(slug);

      const product = getProduct(slug);
      return product ? [product] : [];
    });
}

export type ArticleFacts = {
  environment: Environment | undefined;
  photos: ArticlePhoto[];
  citedPieces: Product[];
  /** How many pieces the room holds in total — what the article's own count is
   *  a fraction of. */
  roomCount: number;
  /** The article's place in the journal, stated as it is read: "texto 2 de 4". */
  position: { index: number; total: number };
  /** The next article, wrapping at the end. Four texts is a short enough loop
   *  that returning to the first reads as continuing rather than as running
   *  out, and it means the page never hands the reader a dead end. */
  next: JournalEntry;
};

/**
 * Everything the article page prints beyond the article's own prose, resolved
 * once so the header, the captions and the closing ledger cannot disagree
 * about which pieces the text named.
 */
export function getArticleFacts(article: Article): ArticleFacts {
  const index = published.findIndex(
    (candidate) => candidate.slug === article.slug,
  );

  return {
    environment: environmentBySlug.get(article.ambiente),
    photos: articlePhotos(article),
    citedPieces: getCitedPieces(article),
    roomCount: products.filter(
      (product) => product.mainEnvironment === article.ambiente,
    ).length,
    position: { index: index + 1, total: journalLength },
    next: toEntry(published[(index + 1) % journalLength]),
  };
}
