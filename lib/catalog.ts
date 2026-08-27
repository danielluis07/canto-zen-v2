import { enviroments } from "@/data/enviroments";
import { families } from "@/data/families";
import { products, productTypes } from "@/data/products";
import {
  formatAvailability,
  formatMeasurements,
  resolvePrices,
} from "@/lib/format";
import type { Product, ProductFamily } from "@/types";

const familyBySlug = new Map(families.map((family) => [family.slug, family]));
const typeLabelBySlug = new Map(
  productTypes.map((type) => [type.slug, type.label]),
);

export const getFamily = (slug: string): ProductFamily | undefined =>
  familyBySlug.get(slug);

/** Falls back to the slug so a missing label shows up as a visible typo rather
 *  than an empty gap. */
export const getTypeLabel = (slug: string): string =>
  typeLabelBySlug.get(slug) ?? slug;

/** The catalog shot, not the room shot — every product has one. */
export const getMainImage = (product: Product) =>
  product.images.find((image) => image.role === "main") ?? product.images[0];

export const productHref = (product: Product) => `/produtos/${product.slug}`;

const byOrder = (a: Product, b: Product) => a.order - b.order;

/** Pieces in stock, so the row's promise ("sem prazo de produção") stays true. */
export function getReadyToShip(limit = 4): Product[] {
  return products
    .filter((product) => product.availability === "immediate-shipment")
    .sort(byOrder)
    .slice(0, limit);
}

/** One piece per room, in room order — the anchor piece each cômodo is built
 *  around, taken as the first of its room in the catalog's own ordering, but
 *  preferring one whose family declares a width so the anchor can state its
 *  scale. Falls back to the plain first-in-order piece when none in the room
 *  have a width on file. */
export function getAnchorsByEnvironment(): {
  product: Product;
  label: string;
}[] {
  return enviroments.flatMap((environment) => {
    const roomProducts = products
      .filter((product) => product.mainEnvironment === environment.slug)
      .sort(byOrder);

    const anchor =
      roomProducts.find((product) => getFamily(product.family)?.measurements.width) ??
      roomProducts[0];

    return anchor ? [{ product: anchor, label: environment.label }] : [];
  });
}

/**
 * Everything a product needs to be printed on a card, resolved once so the two
 * row layouts state the same facts about a piece and can only differ in how
 * they arrange them.
 */
export function getProductFacts(product: Product) {
  const image = getMainImage(product);
  const family = getFamily(product.family);

  return {
    image,
    measurements: formatMeasurements(family),
    prices: resolvePrices(product),
    availability: formatAvailability(product),
    isSoldOut: product.availability === "out-of-stock",
    isReadyToShip: product.availability === "immediate-shipment",
    /* The photograph only carries a ruler when its data declares a width cota
       and the family actually has that measurement on file. */
    rulerWidth:
      image?.dimensions.includes("width") && family?.measurements.width
        ? family.measurements.width
        : null,
  };
}

export function getCollectionProducts(slugs: string[]): Product[] {
  const bySlug = new Map(products.map((product) => [product.slug, product]));
  return slugs.flatMap((slug) => {
    const product = bySlug.get(slug);
    return product ? [product] : [];
  });
}
