import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * The bag holds slugs and counts — nothing else.
 *
 * Name, price, finish and availability all live in `data/`, which is the only
 * source of truth on this site. Copying them into localStorage would let a
 * six-month-old bag state a price the catalog no longer charges, so the line
 * stores the join key and the page resolves the piece on every render. It also
 * means a piece that leaves the catalog drops out of the bag on its own.
 */
export type BagLine = {
  slug: string;
  quantity: number;
};

/** Furniture is not bought by the dozen; the stepper stops where the fiction
 *  stops being believable. */
export const maxQuantity = 10;

type BagState = {
  lines: BagLine[];
  /** False until `persist` has read localStorage. The first server-rendered
   *  pass has no storage to read, so anything counting the bag must wait for
   *  this rather than render a zero it is about to contradict. */
  hasHydrated: boolean;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const clamp = (quantity: number) =>
  Math.min(maxQuantity, Math.max(1, Math.trunc(quantity)));

export const useBag = create<BagState>()(
  persist(
    (set) => ({
      lines: [],
      hasHydrated: false,

      add: (slug, quantity = 1) =>
        set((state) => {
          const existing = state.lines.find((line) => line.slug === slug);

          /* Adding a piece already in the bag raises its count instead of
             opening a second line — two lines for one slug would print the
             same piece twice and total it twice. */
          if (existing) {
            return {
              lines: state.lines.map((line) =>
                line.slug === slug
                  ? { ...line, quantity: clamp(line.quantity + quantity) }
                  : line,
              ),
            };
          }

          return { lines: [...state.lines, { slug, quantity: clamp(quantity) }] };
        }),

      setQuantity: (slug, quantity) =>
        set((state) => ({
          lines: state.lines.map((line) =>
            line.slug === slug ? { ...line, quantity: clamp(quantity) } : line,
          ),
        })),

      remove: (slug) =>
        set((state) => ({
          lines: state.lines.filter((line) => line.slug !== slug),
        })),

      clear: () => set({ lines: [] }),
    }),
    {
      name: "canto-zen-bag",
      version: 1,
      partialize: (state) => ({ lines: state.lines }),
      /* The server renders an empty bag because it has no localStorage to
         read. Letting `persist` hydrate on import would fill the store before
         React's first client pass and hand every bag-aware node a different
         count than the markup it is reconciling against. So storage is read
         once, after mount, from <BagHydration /> in the root layout. */
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        useBag.setState({ hasHydrated: true, lines: state?.lines ?? [] });
      },
    },
  ),
);

/** How many of one piece the bag holds — 0 when it holds none. */
export const useLineQuantity = (slug: string) =>
  useBag(
    (state) => state.lines.find((line) => line.slug === slug)?.quantity ?? 0,
  );

export const useBagHydrated = () => useBag((state) => state.hasHydrated);

/** Read localStorage into the store. Called once, from <BagHydration />. */
export const hydrateBag = () => useBag.persist.rehydrate();
