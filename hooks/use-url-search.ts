import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

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

  /* The last value this hook and the address bar agreed on. Everything below
     is decided against it rather than against `searchParam`, because
     `searchParam` moves for reasons that have nothing to do with the field —
     a "clear filters" link, the back button — and the field must not answer
     those by writing what it happens to be holding back into the URL. */
  const settled = useRef(searchParam);

  /* Adopt the address bar only when something else moved it. Runs before the
     write below, so the same commit that clears the field also cancels the
     write that field had pending. */
  useEffect(() => {
    if (searchParam === settled.current) return;
    settled.current = searchParam;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchInput(searchParam);
  }, [searchParam]);

  /* Typing, written back once it stops. The debounce lives here rather than
     in a value hook so that adopting an external change cancels it: a stale
     debounced value must never reach the address bar. */
  useEffect(() => {
    const value = searchInput.replace(/\s+/g, " ").trim();
    if (value === settled.current) return;

    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      params.delete("page");
      settled.current = value;

      startTransition(() => {
        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname, {
          scroll: false,
        });
      });
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchInput, debounceMs, key, pathname, router, searchParams]);

  return { searchInput, setSearchInput, isPending };
}
