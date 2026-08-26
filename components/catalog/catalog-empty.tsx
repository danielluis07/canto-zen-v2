import { TextLink } from "@/components/ui/link-button";
import {
  clearHref,
  type CatalogQuery,
  type Loosening,
} from "@/lib/catalog-filters";

/**
 * An empty result is a fact about the catalogue, so it is stated as one. The
 * census sentence above already says which combination returned nothing; what
 * is owed here is the way out — the single filter that is holding the set at
 * zero, and how many pieces dropping it gives back.
 */
export function CatalogEmpty({
  query,
  loosening,
}: {
  query: CatalogQuery;
  loosening: Loosening | null;
}) {
  return (
    <div className="pt-10 pb-20 lg:pt-12 lg:pb-28">
      <p className="max-w-[44ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        {loosening
          ? "Essa combinação não existe no catálogo — um dos filtros está segurando o resultado em zero."
          : "Essa combinação não existe no catálogo. Recomece e vá estreitando aos poucos."}
      </p>

      <div className="mt-8">
        {loosening ? (
          <TextLink href={loosening.href}>
            Sem o filtro de {loosening.label} · {loosening.count}{" "}
            {loosening.count === 1 ? "peça" : "peças"}
          </TextLink>
        ) : (
          <TextLink href={clearHref(query)}>Limpar filtros</TextLink>
        )}
      </div>
    </div>
  );
}
