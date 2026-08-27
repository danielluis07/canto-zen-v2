import { enviroments } from "@/data/enviroments";
import { productTypes } from "@/data/products";
import {
  availabilityOptions,
  isFiltered,
  materialFacet,
  priceBands,
  type CatalogQuery,
} from "@/lib/catalog-filters";

/**
 * The census states its own result as a sentence rather than as a row of
 * chips: a shopper reads "9 peças em carvalho para a sala, em pronta entrega"
 * faster than they parse five separate tokens, and the sentence is the one
 * place on the page where the whole filter state is legible at once.
 *
 * It is assembled from clauses rather than templated, so it stays grammatical
 * pt-BR at every combination.
 */

/** Rooms carry their article, since "para sala" is not Portuguese. */
const environmentArticles: Record<string, string> = {
  sala: "a",
  quarto: "o",
  cozinha: "a",
  escritorio: "o",
};

/** "a", "a e b", "a, b e c" — the Portuguese list, without the serial comma. */
function joinList(items: string[], conjunction = "e"): string {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} ${conjunction} ${items.at(-1)}`;
}

const labelsFor = <T extends { slug: string; label: string }>(
  source: readonly T[],
  slugs: string[],
) =>
  source
    .filter((entry) => slugs.includes(entry.slug))
    .map((entry) => entry.label);

export function censusSentence(query: CatalogQuery, count: number): string {
  if (!isFiltered(query)) {
    return `Todas as ${count} peças do catálogo.`;
  }

  const selectedTypes = productTypes.filter((type) =>
    query.types.includes(type.slug),
  );

  /* One type selected names the pieces outright — "5 sofás" beats "5 peças
     entre sofás". More than one falls back to the neutral noun. */
  const onlyType = selectedTypes.length === 1 ? selectedTypes[0] : null;
  const noun = onlyType
    ? (count === 1 ? onlyType.singularLabel : onlyType.label).toLowerCase()
    : count === 1
      ? "peça"
      : "peças";

  const head = count === 0 ? `Nenhuma ${onlyType ? noun : "peça"}` : `${count} ${noun}`;

  const clauses: string[] = [];

  if (selectedTypes.length > 1) {
    clauses.push(
      `entre ${joinList(selectedTypes.map((type) => type.label.toLowerCase()))}`,
    );
  }

  if (query.materials.length > 0) {
    clauses.push(
      `em ${joinList(
        labelsFor(materialFacet, query.materials).map((label) =>
          label.toLowerCase(),
        ),
      )}`,
    );
  }

  if (query.environments.length > 0) {
    clauses.push(
      `para ${joinList(
        enviroments
          .filter((environment) => query.environments.includes(environment.slug))
          .map(
            (environment) =>
              `${environmentArticles[environment.slug] ?? "o"} ${environment.label.toLowerCase()}`,
          ),
      )}`,
    );
  }

  const band = priceBands.find((entry) => entry.slug === query.price);
  if (band) clauses.push(band.phrase);

  let sentence = [head, ...clauses].join(" ");

  /* Delivery closes the sentence behind a comma — it qualifies the whole set
     rather than describing the pieces. */
  if (query.availability.length > 0) {
    const promises = joinList(
      availabilityOptions
        .filter((option) => query.availability.includes(option.slug))
        .map((option) => option.phrase),
      "ou",
    );
    sentence = `${sentence}, ${promises}`;
  }

  /* What was typed is quoted back last and verbatim, so the visitor can see
     their own words in the reading and tell a spelling mistake from an empty
     shelf. */
  if (query.search) {
    /* "na busca por", not "para" — the room clause already spends that
       preposition, and "para a sala, para 'linho'" reads as a stutter. */
    sentence = `${sentence}, na busca por “${query.search}”`;
  }

  return `${sentence}.`;
}
