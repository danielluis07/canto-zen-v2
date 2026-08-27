import { artigos, colecoes, materiais } from "@/data";
import { enviroments } from "@/data/enviroments";
import { products, productTypes } from "@/data/products";
import { getFamily, getMainImage } from "@/lib/catalog";
import { finishMaterials } from "@/lib/catalog-filters";
import type { Article, Collection, Material, Product } from "@/types";

const productBySlug = new Map(products.map((product) => [product.slug, product]));
const typeBySlug = new Map(productTypes.map((type) => [type.slug, type]));
const environmentBySlug = new Map(
  enviroments.map((environment) => [environment.slug, environment]),
);

const byOrder = (a: Product, b: Product) => a.order - b.order;

export const getProduct = (slug: string): Product | undefined =>
  productBySlug.get(slug);

export const productSlugs = () => products.map((product) => product.slug);

/* -------------------------------------------------------------------------
   Materials, resolved back to their care instructions.

   `finishMaterials` already reduces "Palhinha e Freijó" to the accent-stripped
   head word of each segment, which is exactly how `materiais` is keyed once its
   own labels get the same treatment. The single lacquered piece has no entry
   there and simply contributes no care note, rather than an empty row.
   ------------------------------------------------------------------------- */

const combiningMarks = /[̀-ͯ]/g;

const headKey = (value: string) =>
  value.normalize("NFD").replace(combiningMarks, "").toLowerCase().split(/\s+/)[0];

const materialByHead = new Map(
  materiais.map((material) => [headKey(material.label), material]),
);

export const finishCare = (finish: string): Material[] =>
  finishMaterials(finish).flatMap((head) => {
    const material = materialByHead.get(head);
    return material ? [material] : [];
  });

/* ------------------------------------------------------------------------- */

export type FinishSibling = {
  product: Product;
  isCurrent: boolean;
};

/**
 * A product is a family plus a finish, so the family is the page's subject and
 * the finishes are the one axis that varies underneath it. Six of the fifty-nine
 * families carry more than one; the rest resolve to a single plate, which states
 * the finish rather than offering a choice.
 */
export function getFinishes(product: Product): FinishSibling[] {
  return products
    .filter((candidate) => candidate.family === product.family)
    .sort(byOrder)
    .map((candidate) => ({
      product: candidate,
      isCurrent: candidate.slug === product.slug,
    }));
}

/** The editorial names its pieces by slug in the photo captions, so an article
 *  can be found from the piece rather than only the other way round. The photo
 *  travels with it: it is the one that actually shows this piece. */
export function getArticleFeaturing(
  product: Product,
): { article: Article; photo: Article["fotos"][number] } | null {
  for (const article of artigos) {
    const photo = article.fotos.find((foto) => foto.pecas.includes(product.slug));
    if (photo) return { article, photo };
  }

  return null;
}

export function getCollection(product: Product): Collection | null {
  const slug = product.collections[0];
  if (!slug) return null;

  return colecoes.find((collection) => collection.slug === slug) ?? null;
}

/**
 * Pieces to look at next, held inside the piece's own room, because the room is
 * the catalog's primary axis and a suggestion that leaves it stops being a
 * suggestion about furnishing anything. Other silhouettes of the same type come
 * first — that is the comparison the visitor is already making — then the rest
 * of the room. Other finishes of this same family are excluded; the finish
 * spine above already holds them.
 *
 * Every room has at least twelve pieces, so the row always fills.
 */
export function getRelated(product: Product, limit = 4): Product[] {
  const seen = new Set([product.family]);
  const picked: Product[] = [];

  const take = (candidates: Product[]) => {
    for (const candidate of candidates) {
      if (picked.length >= limit) return;
      if (seen.has(candidate.family)) continue;

      seen.add(candidate.family);
      picked.push(candidate);
    }
  };

  const room = products
    .filter(
      (candidate) =>
        candidate.slug !== product.slug &&
        candidate.mainEnvironment === product.mainEnvironment,
    )
    .sort(byOrder);

  take(room.filter((candidate) => candidate.type === product.type));
  take(room);

  return picked;
}

/* ------------------------------------------------------------------------- */

export const getType = (slug: string) => typeBySlug.get(slug);

export const getEnvironment = (slug: string) => environmentBySlug.get(slug);

/** Both facets travel to `/produtos` as the catalog's own query keys, so the
 *  breadcrumb lands on a filtered catalog rather than on a bare listing. */
export const environmentHref = (slug: string) => `/produtos?ambiente=${slug}`;

export const typeHref = (slug: string) => `/produtos?tipo=${slug}`;

/**
 * Everything the page prints about the piece, resolved once. The family cota is
 * deliberately separate from the product's own extra measurements: width, depth
 * and height belong to the silhouette and hold across finishes, while seat
 * height and seat count belong to this particular piece.
 */
export function getPageFacts(product: Product) {
  const family = getFamily(product.family);
  const { width, depth, height } = family?.measurements ?? {
    width: 0,
    depth: 0,
    height: 0,
  };

  const image = getMainImage(product);

  return {
    family,
    /* `sofa-heron` has no measurements on file. The cota figure drops entirely
       rather than drawing a title block of zeros. */
    cota: width && depth && height ? { width, depth, height } : null,
    images: product.images,
    rulerWidth: image?.dimensions.includes("width") && width ? width : null,
    care: finishCare(product.finish),
    type: getType(product.type),
    environment: getEnvironment(product.mainEnvironment),
    finishes: getFinishes(product),
    /* How many pieces the room holds in total — the literal size of the set
       the related row is a sample of. */
    roomCount: products.filter(
      (candidate) => candidate.mainEnvironment === product.mainEnvironment,
    ).length,
    collection: getCollection(product),
    editorial: getArticleFeaturing(product),
    related: getRelated(product),
  };
}
