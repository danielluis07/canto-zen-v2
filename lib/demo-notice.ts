import { toast } from "@/components/ui/toast";

/**
 * Canto Zen is a portfolio piece, not a shop. Everything up to this point is
 * real — the catalog, the prices, the prazos, the bag in this browser — and
 * the checkout is where the fiction has to say so out loud rather than mime a
 * payment flow it does not have.
 *
 * Stated once, from one place, so a second entry point into checkout cannot
 * word it differently.
 */
export function showDemoNotice() {
  toast.add({
    type: "info",
    title: "Loja de demonstração",
    description:
      "O Canto Zen é uma loja fictícia, feita como peça de demonstração. Nenhum pedido é registrado e nenhum pagamento é processado.",
  });
}
