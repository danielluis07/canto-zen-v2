import type { Metadata } from "next";

import { CatalogEmpty } from "@/components/catalog/catalog-empty";
import { CatalogSearch } from "@/components/catalog/catalog-search";
import { CatalogSort } from "@/components/catalog/catalog-sort";
import { Census } from "@/components/catalog/census";
import { CensusSheet } from "@/components/catalog/census-sheet";
import { ProductCard } from "@/components/product/product-card";
import { TextLink } from "@/components/ui/link-button";
import {
  activeFacetCount,
  applyCatalogQuery,
  buildCensus,
  catalogTotals,
  clearHref,
  isFiltered,
  parseCatalogQuery,
  priceOf,
  suggestLoosening,
} from "@/lib/catalog-filters";
import { censusSentence } from "@/lib/catalog-sentence";

export const metadata: Metadata = {
  title: "Todos os móveis",
  description:
    "O catálogo completo do Canto Zen em madeira maciça, linho e palhinha. Filtre por ambiente, tipo, acabamento, preço e prazo de entrega.",
};

/* The direction this page was built to, kept in the emitted markup so it can
   be audited against the render rather than against a memory of it. */
const directionContract = `
THESIS: The filter rail is a census, not a control box — it states what the
catalogue contains, and narrowing is what happens when you act on a line of
it. Refuses the checkbox sidebar beside an anonymous grid.
OWN-WORLD: Canto Zen unchanged. One warm-white paper, 1px hairlines, 2px
corners, Fraunces 300 against uppercase micro-type, oak for interaction,
sage for facts. No new colour, no card ground, no shadow at rest.
STORY: The visitor sees how many pieces exist, what they cost end to end,
and how the catalogue divides by room, type, wood and delivery — then
narrows by reading.
FIRST VIEWPORT: Hairline, "Todos os móveis" in Fraunces 300 at left, the
literal catalogue count at right. Below, twelve columns: a sticky
three-column census — sentence, price cota, ruled facet ledgers with live
counts — beside a nine-column three-up grid.
FORM: The Census; index 7 of 7 grounded structures; seed 9962ebae.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
`;

export default async function ProdutosPage(props: PageProps<"/produtos">) {
  const query = parseCatalogQuery(await props.searchParams);

  const results = applyCatalogQuery(query);
  const groups = buildCensus(query);
  const sentence = censusSentence(query, results.length);
  const activeCount = activeFacetCount(query);

  /* The cota measures the set actually on screen, so it only exists when the
     set does. */
  const prices = results.map(priceOf);
  const priceFrom = prices.length ? Math.min(...prices) : null;
  const priceTo = prices.length ? Math.max(...prices) : null;

  const censusProps = { query, groups, priceFrom, priceTo };

  /* The census already carries a clear, but it is one line inside a long
     ledger — and on small screens it is behind the sheet. So the way out of a
     narrowed catalogue is also stated on the bar that sits over the grid,
     where the narrowed set is what the visitor is actually looking at. */
  const clearFilters = isFiltered(query) ? (
    <TextLink href={clearHref(query)}>
      Limpar filtros
      <span className="ml-2 text-muted-foreground tabular-nums">
        {activeCount}
      </span>
    </TextLink>
  ) : null;

  return (
    <div className="mx-auto w-full max-w-360 px-6 py-14 lg:px-10 lg:py-20">
      <div
        hidden
        dangerouslySetInnerHTML={{ __html: `<!--${directionContract}-->` }}
      />

      <header className="border-t border-line pt-6 lg:flex lg:items-start lg:justify-between lg:gap-16">
        <div>
          <h1 className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] font-light">
            Todos os móveis
          </h1>

          <p className="mt-4 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
            Madeira maciça, linho e palhinha. Filtre pelo ambiente, pelo tipo,
            pelo acabamento, pelo preço e pelo prazo de entrega.
          </p>
        </div>

        {/* The catalogue stated literally — the page's opening claim, so it
            carries the label step at full ink and sits on the heading's line
            rather than trailing the paragraph as a footnote. */}
        <p className="mt-6 shrink-0 text-[0.6875rem] font-medium tracking-[0.16em] uppercase tabular-nums lg:mt-3">
          {catalogTotals.products} peças · {catalogTotals.types} tipos ·{" "}
          {catalogTotals.environments} ambientes
        </p>
      </header>

      {/* One instance for both breakpoints, on the census's own column — the
          search is a facet, so it stands at the head of the facets rather than
          inside the sheet, where a small-screen visitor would have to go
          looking for it. */}
      <div className="mt-9 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-x-10">
        <CatalogSearch className="lg:col-span-3" />
      </div>

      <div className="mt-9 lg:mt-11 lg:grid lg:grid-cols-12 lg:gap-x-10">
        {/* The census holds its own column and stays put while the grid runs
            past it, so the counts are readable from anywhere in the catalogue. */}
        <aside
          aria-label="Censo do catálogo"
          className="hidden lg:col-span-3 lg:block">
          <div className="census-scroll sticky top-24 max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain pr-4 pb-10">
            <Census {...censusProps} sentence={sentence} />
          </div>
        </aside>

        <div className="lg:col-span-9">
          {/* Below `lg` the sentence stays on the page and only the ledgers
              move into the sheet — the reading is the part worth keeping in
              view. */}
          <div className="lg:hidden">
            <p className="max-w-[44ch] text-[0.9375rem] leading-relaxed text-pretty">
              {sentence}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-y border-line py-3">
              <CensusSheet
                activeCount={activeCount}
                resultCount={results.length}>
                <Census {...censusProps} />
              </CensusSheet>

              {clearFilters}

              <CatalogSort query={query} />
            </div>
          </div>

          <div className="hidden items-center justify-between gap-8 border-b border-line pb-3 lg:flex">
            {clearFilters ?? <span aria-hidden />}
            <CatalogSort query={query} />
          </div>

          {results.length === 0 ? (
            <div className="mt-10 lg:mt-12">
              <CatalogEmpty query={query} loosening={suggestLoosening(query)} />
            </div>
          ) : (
            <ul className="mt-9 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-16">
              {results.map((product, index) => (
                <li key={product.slug}>
                  <ProductCard
                    product={product}
                    sizes="(min-width: 1024px) 23vw, 45vw"
                    priority={index < 4}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
