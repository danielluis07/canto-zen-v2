import { materiais } from "@/data";
import { enviroments } from "@/data/enviroments";
import { products, productTypes } from "@/data/products";
import { resolvePrices } from "@/lib/format";
import type { Product } from "@/types";

/* -------------------------------------------------------------------------
   The catalog's filter vocabulary.

   Query keys and option slugs are Portuguese because they are user-visible —
   they sit in the address bar and get pasted into messages. Everything else
   in this module is English, per AGENTS.md.
   ------------------------------------------------------------------------- */

export const catalogBasePath = "/produtos";

export const facetKeys = [
  "ambiente",
  "tipo",
  "acabamento",
  "preco",
  "entrega",
] as const;

export type FacetKey = (typeof facetKeys)[number];

/** Price bands are read off the catalog's own distribution — the three cuts
 *  land near its quartiles, so no band is a decoration with nothing in it. */
export const priceBands = [
  {
    slug: "ate-2000",
    label: "Até R$ 2.000",
    phrase: "até R$ 2.000",
    min: 0,
    max: 200_000,
  },
  {
    slug: "2000-5000",
    label: "R$ 2.000 – R$ 5.000",
    phrase: "de R$ 2.000 a R$ 5.000",
    min: 200_000,
    max: 500_000,
  },
  {
    slug: "5000-9000",
    label: "R$ 5.000 – R$ 9.000",
    phrase: "de R$ 5.000 a R$ 9.000",
    min: 500_000,
    max: 900_000,
  },
  {
    slug: "acima-9000",
    label: "Acima de R$ 9.000",
    phrase: "acima de R$ 9.000",
    min: 900_000,
    max: Number.POSITIVE_INFINITY,
  },
] as const;

/** The delivery promise, in the order a buyer cares about it. `phrase` is the
 *  clause the census sentence uses; `label` is the ledger row. */
export const availabilityOptions = [
  {
    slug: "pronta-entrega",
    value: "immediate-shipment",
    label: "Pronta entrega",
    phrase: "em pronta entrega",
  },
  {
    slug: "sob-encomenda",
    value: "made-to-order",
    label: "Sob encomenda",
    phrase: "sob encomenda",
  },
  {
    slug: "esgotado",
    value: "out-of-stock",
    label: "Esgotado",
    /* Invariant on purpose: "esgotadas" would have to agree with a count the
       sentence does not know in advance. */
    phrase: "com estoque esgotado",
  },
] as const satisfies readonly {
  slug: string;
  value: Product["availability"];
  label: string;
  phrase: string;
}[];

export const sortOptions = [
  { slug: "catalogo", label: "Ordem do catálogo" },
  { slug: "menor-preco", label: "Menor preço" },
  { slug: "maior-preco", label: "Maior preço" },
] as const;

export type SortSlug = (typeof sortOptions)[number]["slug"];

/** NFD splits "ó" into "o" plus its combining accent; the range below is the
 *  combining-marks block, so what survives is plain ASCII to compare on. */
const combiningMarks = /[̀-ͯ]/g;

const stripAccents = (value: string) =>
  value.normalize("NFD").replace(combiningMarks, "").toLowerCase();

/* -------------------------------------------------------------------------
   Materials, read out of the finish string.

   A finish is written "<material> <cor>" — "Linho Cru", "Couro Argila" — and
   " e " joins two materials when a piece is made of both ("Palhinha e
   Freijó"). So the head word of each segment is the material and the rest is
   the colour, which is why "Couro Nogueira" resolves to leather rather than
   to walnut: nogueira is the colour there, not the wood.

   The facet is derived from the catalog rather than from `materiais`, so
   every piece stays reachable. `materiais` only supplies the display label
   where it has one — the single lacquered piece keeps "Laca" from its own
   finish instead of dropping out of the ledger.
   ------------------------------------------------------------------------- */

const materialLabelByHead = new Map(
  materiais.map((material) => [
    stripAccents(material.label).split(/\s+/)[0],
    material.label,
  ]),
);

const headOf = (segment: string) => segment.trim().split(/\s+/)[0];

export function finishMaterials(finish: string): string[] {
  return finish.split(" e ").map((segment) => stripAccents(headOf(segment)));
}

const materialLabels = new Map<string, string>();

for (const product of products) {
  for (const segment of product.finish.split(" e ")) {
    const head = headOf(segment);
    const slug = stripAccents(head);
    if (!materialLabels.has(slug)) {
      materialLabels.set(slug, materialLabelByHead.get(slug) ?? head);
    }
  }
}

/** Ordered by how much of the catalog each material accounts for — a census
 *  ranks. The order is taken from the whole catalog, never from the filtered
 *  set, so rows never reshuffle underneath the cursor while narrowing. */
export const materialFacet = [...materialLabels.entries()]
  .map(([slug, label]) => ({
    slug,
    label,
    total: products.filter((product) =>
      finishMaterials(product.finish).includes(slug),
    ).length,
  }))
  .sort((a, b) => b.total - a.total || a.label.localeCompare(b.label, "pt-BR"));

export const priceOf = (product: Product) => resolvePrices(product).current;

/* ------------------------------------------------------------------------- */

export type CatalogQuery = {
  environments: string[];
  types: string[];
  materials: string[];
  /** Bands are ranges, so exactly one may be active at a time. */
  price: string | null;
  availability: string[];
  sort: SortSlug;
};

export const emptyQuery: CatalogQuery = {
  environments: [],
  types: [],
  materials: [],
  price: null,
  availability: [],
  sort: "catalogo",
};

type RawSearchParams = Record<string, string | string[] | undefined>;

/** Multi-value facets travel as one comma-joined value, so the address bar
 *  stays readable. Unknown slugs are dropped rather than trusted. */
function readList<T extends string>(
  raw: RawSearchParams,
  key: string,
  allowed: readonly T[],
): T[] {
  const value = raw[key];
  const source = Array.isArray(value) ? value.join(",") : (value ?? "");

  return source
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry): entry is T => (allowed as readonly string[]).includes(entry))
    .filter((entry, index, all) => all.indexOf(entry) === index);
}

export function parseCatalogQuery(raw: RawSearchParams): CatalogQuery {
  const price = readList(
    raw,
    "preco",
    priceBands.map((band) => band.slug),
  );

  const sort = readList(
    raw,
    "ordem",
    sortOptions.map((option) => option.slug),
  );

  return {
    environments: readList(
      raw,
      "ambiente",
      enviroments.map((environment) => environment.slug),
    ),
    types: readList(
      raw,
      "tipo",
      productTypes.map((type) => type.slug),
    ),
    materials: readList(
      raw,
      "acabamento",
      materialFacet.map((material) => material.slug),
    ),
    price: price[0] ?? null,
    availability: readList(
      raw,
      "entrega",
      availabilityOptions.map((option) => option.slug),
    ),
    sort: sort[0] ?? "catalogo",
  };
}

export const isFiltered = (query: CatalogQuery) =>
  query.environments.length > 0 ||
  query.types.length > 0 ||
  query.materials.length > 0 ||
  query.price !== null ||
  query.availability.length > 0;

export const activeFacetCount = (query: CatalogQuery) =>
  query.environments.length +
  query.types.length +
  query.materials.length +
  (query.price ? 1 : 0) +
  query.availability.length;

/* -------------------------------------------------------------------------
   Matching. `except` drops one facet from the test, which is what makes the
   census truthful: a row's count answers "how many pieces would this give
   me", not "how many are showing right now" — otherwise every unselected row
   in a group would read zero the moment its neighbour was picked.
   ------------------------------------------------------------------------- */

function matches(
  product: Product,
  query: CatalogQuery,
  except?: FacetKey,
): boolean {
  if (
    except !== "ambiente" &&
    query.environments.length > 0 &&
    !query.environments.some((slug) => product.environments.includes(slug))
  ) {
    return false;
  }

  if (
    except !== "tipo" &&
    query.types.length > 0 &&
    !query.types.includes(product.type)
  ) {
    return false;
  }

  if (except !== "acabamento" && query.materials.length > 0) {
    const owned = finishMaterials(product.finish);
    if (!query.materials.some((slug) => owned.includes(slug))) return false;
  }

  if (except !== "preco" && query.price) {
    const band = priceBands.find((entry) => entry.slug === query.price);
    if (band) {
      const price = priceOf(product);
      if (price < band.min || price >= band.max) return false;
    }
  }

  if (except !== "entrega" && query.availability.length > 0) {
    const allowed: Product["availability"][] = availabilityOptions
      .filter((option) => query.availability.includes(option.slug))
      .map((option) => option.value);
    if (!allowed.includes(product.availability)) return false;
  }

  return true;
}

const byCatalogOrder = (a: Product, b: Product) => a.order - b.order;

export function applyCatalogQuery(query: CatalogQuery): Product[] {
  const matched = products.filter((product) => matches(product, query));

  switch (query.sort) {
    case "menor-preco":
      return matched.sort(
        (a, b) => priceOf(a) - priceOf(b) || byCatalogOrder(a, b),
      );
    case "maior-preco":
      return matched.sort(
        (a, b) => priceOf(b) - priceOf(a) || byCatalogOrder(a, b),
      );
    default:
      return matched.sort(byCatalogOrder);
  }
}

/* -------------------------------------------------------------------------
   URLs. Every control on this page is a link, so the catalog keeps working
   with the back button, with a right-click, and with JavaScript switched off.
   ------------------------------------------------------------------------- */

function serialize(query: CatalogQuery): string {
  const params = new URLSearchParams();

  if (query.environments.length) {
    params.set("ambiente", query.environments.join(","));
  }
  if (query.types.length) params.set("tipo", query.types.join(","));
  if (query.materials.length) {
    params.set("acabamento", query.materials.join(","));
  }
  if (query.price) params.set("preco", query.price);
  if (query.availability.length) {
    params.set("entrega", query.availability.join(","));
  }
  if (query.sort !== "catalogo") params.set("ordem", query.sort);

  /* A comma is legal unencoded in a query value, and `ambiente=sala,quarto`
     is a URL somebody can read in the address bar before pasting it. */
  const search = params.toString().replaceAll("%2C", ",");
  return search ? `${catalogBasePath}?${search}` : catalogBasePath;
}

const toggle = (list: string[], slug: string) =>
  list.includes(slug) ? list.filter((entry) => entry !== slug) : [...list, slug];

export function toggleHref(
  query: CatalogQuery,
  key: FacetKey,
  slug: string,
): string {
  switch (key) {
    case "ambiente": {
      const environments = toggle(query.environments, slug);

      /* Dropping a room strands the types that only existed inside it, so the
         type selection is trimmed to what the new room set can still show. */
      const reachable = new Set(
        products
          .filter(
            (product) =>
              environments.length === 0 ||
              environments.some((entry) =>
                product.environments.includes(entry),
              ),
          )
          .map((product) => product.type),
      );

      return serialize({
        ...query,
        environments,
        types: query.types.filter((type) => reachable.has(type)),
      });
    }
    case "tipo":
      return serialize({ ...query, types: toggle(query.types, slug) });
    case "acabamento":
      return serialize({ ...query, materials: toggle(query.materials, slug) });
    case "preco":
      return serialize({ ...query, price: query.price === slug ? null : slug });
    case "entrega":
      return serialize({
        ...query,
        availability: toggle(query.availability, slug),
      });
  }
}

export const sortHref = (query: CatalogQuery, sort: SortSlug) =>
  serialize({ ...query, sort });

/** Clearing keeps the sort: it is how the visitor is reading, not what they
 *  are looking at. */
export const clearHref = (query: CatalogQuery) =>
  serialize({ ...emptyQuery, sort: query.sort });

export function clearFacetHref(query: CatalogQuery, key: FacetKey): string {
  switch (key) {
    case "ambiente":
      return serialize({ ...query, environments: [], types: [] });
    case "tipo":
      return serialize({ ...query, types: [] });
    case "acabamento":
      return serialize({ ...query, materials: [] });
    case "preco":
      return serialize({ ...query, price: null });
    case "entrega":
      return serialize({ ...query, availability: [] });
  }
}

/* -------------------------------------------------------------------------
   The census itself: for every facet row, how many pieces it would give.
   ------------------------------------------------------------------------- */

export type CensusRow = {
  slug: string;
  label: string;
  count: number;
  active: boolean;
  href: string;
  /** This row's count against the largest in its group, 0–1. The row's own
   *  hairline is drawn to this fraction, so the ledger states its distribution
   *  in geometry as well as in figures. */
  share: number;
};

export type CensusGroup = {
  key: FacetKey;
  label: string;
  rows: CensusRow[];
  activeCount: number;
  clearHref: string;
  /** Closes the assistive label on a row: "4 peças neste ambiente". The count
   *  is the group's own tally, not a prediction of what clicking returns —
   *  these facets are unions, so acting on a row adds to the set. */
  rowNote: string;
};

function countWith(
  query: CatalogQuery,
  key: FacetKey,
  predicate: (product: Product) => boolean,
): number {
  return products.filter(
    (product) => matches(product, query, key) && predicate(product),
  ).length;
}

const rowNotes: Record<FacetKey, string> = {
  ambiente: "neste ambiente",
  tipo: "neste tipo",
  acabamento: "neste acabamento",
  preco: "nesta faixa",
  entrega: "nesta condição",
};

function buildGroup(
  query: CatalogQuery,
  key: FacetKey,
  label: string,
  options: { slug: string; label: string; test: (product: Product) => boolean }[],
  selected: string[],
): CensusGroup {
  const counted = options.map((option) => ({
    slug: option.slug,
    label: option.label,
    count: countWith(query, key, option.test),
    active: selected.includes(option.slug),
    href: toggleHref(query, key, option.slug),
  }));

  const largest = Math.max(0, ...counted.map((row) => row.count));

  return {
    key,
    label,
    activeCount: selected.length,
    clearHref: clearFacetHref(query, key),
    rowNote: rowNotes[key],
    rows: counted.map((row) => ({
      ...row,
      share: largest > 0 ? row.count / largest : 0,
    })),
  };
}

export function buildCensus(query: CatalogQuery): CensusGroup[] {
  /* Types are listed for the rooms currently in play, taken from the pieces
     themselves rather than from each room's declared category list — the two
     disagree, and the pieces are the ones being counted. */
  const typesInPlay = new Set(
    products
      .filter(
        (product) =>
          query.environments.length === 0 ||
          query.environments.some((slug) => product.environments.includes(slug)),
      )
      .map((product) => product.type),
  );

  return [
    buildGroup(
      query,
      "ambiente",
      "Ambiente",
      enviroments.map((environment) => ({
        slug: environment.slug,
        label: environment.label,
        test: (product: Product) =>
          product.environments.includes(environment.slug),
      })),
      query.environments,
    ),
    buildGroup(
      query,
      "tipo",
      "Tipo",
      productTypes
        .filter((type) => typesInPlay.has(type.slug))
        .map((type) => ({
          slug: type.slug,
          label: type.label,
          test: (product: Product) => product.type === type.slug,
        })),
      query.types,
    ),
    buildGroup(
      query,
      "acabamento",
      "Acabamento",
      materialFacet.map((material) => ({
        slug: material.slug,
        label: material.label,
        test: (product: Product) =>
          finishMaterials(product.finish).includes(material.slug),
      })),
      query.materials,
    ),
    buildGroup(
      query,
      "preco",
      "Preço",
      priceBands.map((band) => ({
        slug: band.slug,
        label: band.label,
        test: (product: Product) => {
          const price = priceOf(product);
          return price >= band.min && price < band.max;
        },
      })),
      query.price ? [query.price] : [],
    ),
    buildGroup(
      query,
      "entrega",
      "Entrega",
      availabilityOptions.map((option) => ({
        slug: option.slug,
        label: option.label,
        test: (product: Product) => product.availability === option.value,
      })),
      query.availability,
    ),
  ];
}

/* -------------------------------------------------------------------------
   When a combination returns nothing, say which single facet is holding the
   result at zero and what dropping it would give back.
   ------------------------------------------------------------------------- */

export type Loosening = { key: FacetKey; label: string; count: number; href: string };

export function suggestLoosening(query: CatalogQuery): Loosening | null {
  const groups: { key: FacetKey; label: string; active: boolean }[] = [
    { key: "ambiente", label: "ambiente", active: query.environments.length > 0 },
    { key: "tipo", label: "tipo", active: query.types.length > 0 },
    { key: "acabamento", label: "acabamento", active: query.materials.length > 0 },
    { key: "preco", label: "preço", active: query.price !== null },
    { key: "entrega", label: "entrega", active: query.availability.length > 0 },
  ];

  const candidates = groups
    .filter((group) => group.active)
    .map((group) => ({
      key: group.key,
      label: group.label,
      count: products.filter((product) => matches(product, query, group.key))
        .length,
      href: clearFacetHref(query, group.key),
    }))
    .filter((candidate) => candidate.count > 0)
    .sort((a, b) => b.count - a.count);

  return candidates[0] ?? null;
}

/** The whole catalog, for the page header — stated from the data so the
 *  figure can never drift from what is on file. */
export const catalogTotals = {
  products: products.length,
  types: productTypes.length,
  environments: enviroments.length,
};
