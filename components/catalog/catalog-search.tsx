"use client";

import { Search, X } from "lucide-react";

import { useURLSearch } from "@/hooks/use-url-search";
import { cn } from "@/lib/utils";

/**
 * The catalogue's one typed control.
 *
 * Every other control on this page is a link, and this one cannot be — so it
 * is built to behave like the rest anyway: what is typed lands in the address
 * bar under `busca`, which means a search is shareable, survives the back
 * button, and is read by the server on the same pass as the ledgers. The
 * counts in the census recompute against it like any other facet.
 *
 * No box, no fill, no elevation. A rule under a line of text, the way the rest
 * of the world is drawn — ink at rest, oak while it is being used, and the
 * same left-origin draw the facet rows use while the new set is on its way.
 */
export function CatalogSearch({ className }: { className?: string }) {
  const { searchInput, setSearchInput, isPending } = useURLSearch({
    key: "busca",
    debounceMs: 350,
  });

  return (
    <div className={cn("group relative", className)}>
      <label htmlFor="catalog-search" className="sr-only">
        Buscar no catálogo por nome, acabamento, tipo ou ambiente
      </label>

      <div className="flex items-center gap-3 pb-2.5">
        <Search
          aria-hidden
          className="size-4 shrink-0 text-muted-foreground transition-colors duration-200 group-focus-within:text-oak-deep"
          strokeWidth={1.5}
        />

        <input
          id="catalog-search"
          type="search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          maxLength={60}
          autoComplete="off"
          placeholder="Buscar por peça, acabamento, tipo ou ambiente"
          /* The native clear affordance is suppressed: it is drawn by the
             browser, in the browser's own idiom, next to one that is not. */
          className={cn(
            "min-w-0 flex-1 bg-transparent text-[0.9375rem] leading-normal",
            "placeholder:text-muted-foreground focus:outline-none",
            "[&::-webkit-search-cancel-button]:appearance-none",
          )}
        />

        {searchInput && (
          <button
            type="button"
            onClick={() => setSearchInput("")}
            aria-label="Limpar a busca"
            className="-mr-2 flex size-8 shrink-0 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-2">
            <X className="size-4" strokeWidth={1.5} />
          </button>
        )}
      </div>

      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-foreground/40 transition-transform duration-300 ease-out group-focus-within:scale-x-100"
      />
      {isPending && (
        <span
          aria-hidden
          className="facet-pending absolute inset-x-0 bottom-0 h-px origin-left bg-oak"
        />
      )}
    </div>
  );
}
