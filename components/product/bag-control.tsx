import { cn } from "@/lib/utils";

/**
 * The page's one filled control, in the same ink and at the same 48px as
 * `LinkButton` — this is a button rather than a link because it acts on the
 * page instead of leaving it. The bag itself is not built yet, so it carries no
 * handler; everything about its resting, hover, focus and disabled states is
 * final.
 *
 * A piece the store cannot ship gets a genuinely disabled control. The label
 * does not change: a control names its action, and "Esgotado" is already stated
 * once on the ledger line above, where every other variant states its delivery
 * promise. The disabled treatment is what says it cannot be pressed.
 */
export function BagControl({ isSoldOut }: { isSoldOut: boolean }) {
  return (
    <button
      type="button"
      disabled={isSoldOut}
      className={cn(
        "inline-flex h-12 w-full items-center justify-center rounded-xs px-8",
        "text-[0.6875rem] font-medium tracking-[0.16em] uppercase",
        "transition-colors duration-300",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        isSoldOut
          ? "border border-line text-muted-foreground disabled:cursor-not-allowed"
          : "bg-foreground text-background hover:bg-oak-deep",
      )}>
      Adicionar à sacola
    </button>
  );
}
