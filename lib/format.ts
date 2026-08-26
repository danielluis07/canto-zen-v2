import type { Product, ProductFamily } from "@/types";

const wholeReais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const centavos = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Prices are stored in centavos. Whole values drop the ",00" — a price list
 *  reads faster without two zeros repeated down the column. */
export function formatPrice(cents: number): string {
  const value = cents / 100;
  return Number.isInteger(value)
    ? wholeReais.format(value)
    : centavos.format(value);
}

/**
 * `tablePrice` is what the customer pays today; `discountPrice` holds the
 * previous price on the pieces that were marked down. The two fields are read
 * by value rather than by name so a row never renders a higher price as the
 * current one.
 */
export function resolvePrices(product: Product): {
  current: number;
  previous?: number;
} {
  const { tablePrice, discountPrice } = product;

  if (discountPrice === undefined || discountPrice === tablePrice) {
    return { current: tablePrice };
  }

  return {
    current: Math.min(tablePrice, discountPrice),
    previous: Math.max(tablePrice, discountPrice),
  };
}

/** Availability is a delivery promise, so it is stated in weeks, not adjectives. */
export function formatAvailability(product: Product): string {
  switch (product.availability) {
    case "immediate-shipment":
      return "Pronta entrega";
    case "made-to-order":
      return product.productionWeeks
        ? `Sob encomenda · ${product.productionWeeks} semanas`
        : "Sob encomenda";
    case "out-of-stock":
      return "Esgotado";
  }
}

export const shippingLabels: Record<
  NonNullable<Product["freeShipping"]>,
  string
> = {
  national: "Frete grátis para todo o Brasil",
  southeast: "Frete grátis para o Sudeste",
  "sp-capital": "Frete grátis na capital paulista",
};

/**
 * Largura × profundidade × altura. Families whose measurements are still zero
 * return null so the card drops the line instead of printing "0 × 0 × 0".
 */
export function formatMeasurements(family: ProductFamily | undefined) {
  if (!family) return null;

  const { width, depth, height } = family.measurements;
  if (!width || !depth || !height) return null;

  return `${width} × ${depth} × ${height} cm`;
}
