import { ShieldCheck, Sprout, Truck } from "lucide-react";

import { formatPrice } from "@/lib/format";

/**
 * What the store promises, stated in one place.
 *
 * These are store-wide claims rather than product facts, and they appear both
 * in the footer and beside the bag control on a product page. Two hardcoded
 * copies of the same sentence drift; one constant cannot.
 *
 * The warranty is the reason this file exists. `Product.warrantyMonths` is in
 * the type but no product in the catalog declares it, so a product page states
 * the store-wide term — and must state exactly the term the footer states.
 */
export const warrantyYears = 5;

export const warrantyClaim = `Garantia de ${warrantyYears} anos na estrutura`;

/** Months, for the day a product carries its own `warrantyMonths`. */
export const warrantyMonths = warrantyYears * 12;

/**
 * In centavos, like every other price on the site. The bag measures its
 * subtotal against this figure and the footer prints it, so the number the
 * visitor is promised and the number the bag tests are the same number.
 */
export const freeShippingThreshold = 120000;

export const freeShippingClaim = `Frete grátis para o Sudeste acima de ${formatPrice(freeShippingThreshold)}`;

export const storeCommitments = [
  { icon: Sprout, text: "Madeira maciça de manejo certificado FSC" },
  { icon: ShieldCheck, text: warrantyClaim },
  { icon: Truck, text: freeShippingClaim },
];
