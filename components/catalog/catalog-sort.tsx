import Link from "next/link";

import { sortHref, sortOptions, type CatalogQuery } from "@/lib/catalog-filters";
import { cn } from "@/lib/utils";

/**
 * Sorting is how the visitor is reading, not what they are looking at, so it
 * sits with the grid rather than inside the census — and, like every other
 * control here, it is a link.
 *
 * The current order keeps its rule permanently in ink; only the interactive
 * state reaches for oak. Same grammar as the room links in the navigation.
 */
export function CatalogSort({ query }: { query: CatalogQuery }) {
  return (
    <nav
      aria-label="Ordenação"
      className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:justify-end">
      {sortOptions.map((option) => {
        const isActive = query.sort === option.slug;

        return (
          <Link
            key={option.slug}
            href={sortHref(query, option.slug)}
            scroll={false}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "group relative py-1 text-[0.6875rem] font-medium tracking-[0.16em] uppercase",
              "transition-colors duration-200 hover:text-foreground",
              "focus-visible:outline-2 focus-visible:outline-offset-4",
              isActive ? "text-foreground" : "text-foreground/75",
            )}>
            {option.label}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100",
                isActive && "scale-x-100 bg-foreground group-hover:bg-oak",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
