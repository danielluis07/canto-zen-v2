import { TextLink } from "@/components/ui/link-button";
import { catalogTotals } from "@/lib/catalog-filters";

/**
 * An empty bag is a fact about this browser, so it is stated as one — including
 * where the bag actually lives. The site has no backend and no account behind
 * it; saying so is more useful than an illustration of an empty basket.
 */
export function BagEmpty() {
  return (
    <div className="border-t border-line pt-10">
      <p className="max-w-[44ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
        A sacola está vazia. O que você guardar fica neste navegador até
        finalizar a compra.
      </p>

      <TextLink href="/produtos" className="mt-8">
        Ver o catálogo · {catalogTotals.products} peças
      </TextLink>
    </div>
  );
}
