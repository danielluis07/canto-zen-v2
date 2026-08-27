"use client";

import { useEffect } from "react";

import { hydrateBag } from "@/lib/bag";

/**
 * Reads the persisted bag out of localStorage once, after mount.
 *
 * Nothing is rendered. It exists so the store is filled at a moment React can
 * account for — every bag-aware node renders empty on the server and on the
 * first client pass, then re-renders together when this lands. See the
 * `skipHydration` note in `lib/bag.ts`.
 */
export function BagHydration() {
  useEffect(() => {
    hydrateBag();
  }, []);

  return null;
}
