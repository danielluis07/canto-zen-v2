import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { useDebounce } from "@/hooks/use-debounce";

/**
 * Free text held in the address bar rather than in component state, so a
 * search is shareable, survives the back button, and is read by the server on
 * the same pass as every other filter.
 *
 * `key` is a parameter because query keys are user-visible: the catalog's are
 * Portuguese ("busca"), and nothing else should have to adopt that.
 */
export function useURLSearch({
  key = "search",
  debounceMs = 500,
}: { key?: string; debounceMs?: number } = {}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const searchParam = searchParams.get(key) || "";
  const [searchInput, setSearchInput] = useState(searchParam);
  const debouncedSearch = useDebounce(searchInput, debounceMs);

  /* The last value this hook put in the address bar. Without it the sync
     below reads its own write as an external change and pushes the field back
     to whatever was already committed — which, mid-word, deletes the letters
     typed while the debounce was in flight. */
  const written = useRef(searchParam);

  useEffect(() => {
    if (debouncedSearch.trim() === searchParam) return;

    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearch.trim()) {
      params.set(key, debouncedSearch.trim());
    } else {
      params.delete(key);
    }

    params.delete("page");
    written.current = debouncedSearch.trim();

    startTransition(() => {
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    });
  }, [debouncedSearch, key, pathname, router, searchParam, searchParams]);

  /* Adopt the address bar only when something else moved it — the back
     button, a "clear filters" link, a shared URL. */
  useEffect(() => {
    if (searchParam === written.current) return;
    written.current = searchParam;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchInput(searchParam);
  }, [searchParam]);

  return { searchInput, setSearchInput, isPending };
}
