import type { Metadata } from "next";

import { Bag } from "@/components/bag/bag";
import { ProductsRow } from "@/components/home/products-row";
import { getReadyToShip } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Sacola",
  description:
    "As peças que você guardou. Preços, prazo de produção do pedido e frete para o Sudeste.",
  /* A bag is this browser's state, not a page of the catalogue. */
  robots: { index: false, follow: true },
};

/* The direction this page was built to, kept in the emitted markup so it can
   be audited against the render rather than against a memory of it. */
const directionContract = `
THESIS: The bag is a ledger of the catalogue, not a checkout widget. It states
the same facts in the same order as the card that filled it, and adds the one
fact no card can carry — when the whole order leaves, set by its slowest
piece. Refuses the boxed cart table with a floating totals card.
OWN-WORLD: Canto Zen unchanged. One warm-white paper, 1px hairlines, 2px
corners, Fraunces 300 against uppercase micro-type, oak for interaction, sage
for facts. No new colour, no card ground, no resting shadow.
STORY: The visitor sees what they chose, adjusts counts by reading, learns the
order's real prazo and what is still missing for frete grátis, and commits.
FIRST VIEWPORT: Hairline; "Sacola" in Fraunces 300 at left, the literal count
at right. Seven columns of ruled lines — 4:5 thumbnail, name, acabamento and
cotas, prazo, a stepper drawn on a rule — beside a four-column ledger that
stays put.
STATE: The bag lives in localStorage via zustand and is read after mount, so
the page holds its space rather than printing a zero it is about to contradict.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
`;

export default function SacolaPage() {
  /* Only rendered when the bag is empty, but resolved here so the row stays a
     server component — the catalogue never crosses into client state. */
  const readyToShip = getReadyToShip(4);

  return (
    <>
      <div
        hidden
        dangerouslySetInnerHTML={{ __html: `<!--${directionContract}-->` }}
      />

      <Bag
        suggestions={
          readyToShip.length > 0 ? (
            <ProductsRow
              eyebrow="Sem prazo de produção"
              title="Peças de pronta entrega"
              note="Já estão no estoque e saem assim que o pedido é fechado."
              products={readyToShip}
              action={{ href: "/produtos", label: "Ver o catálogo" }}
            />
          ) : null
        }
      />
    </>
  );
}
