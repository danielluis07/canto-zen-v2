import { ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

import { warrantyClaim } from "@/lib/commitments";
import { shippingLabels } from "@/lib/format";
import type { Product } from "@/types";

/**
 * What the store is promising about this piece, in sage — the factual register,
 * never the interactive one.
 *
 * Free shipping is recorded against the piece, so the row only appears where
 * the catalog actually declares it. The warranty is the opposite: no product
 * declares `warrantyMonths`, so the term is the store-wide one, read from the
 * same constant the footer reads so the two can never state different years.
 */
export function PieceCommitments({
  freeShipping,
  warrantyMonths,
}: {
  freeShipping: Product["freeShipping"];
  warrantyMonths?: number;
}) {
  return (
    <div className="mt-8 border-t border-line pt-6">
      <ul className="flex flex-col gap-3">
        {freeShipping && (
          <li className="flex items-start gap-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
            <Truck
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-sage"
              strokeWidth={1.5}
            />
            {shippingLabels[freeShipping]}
          </li>
        )}

        <li className="flex items-start gap-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
          <ShieldCheck
            aria-hidden
            className="mt-0.5 size-4 shrink-0 text-sage"
            strokeWidth={1.5}
          />
          {warrantyMonths
            ? `Garantia de ${warrantyMonths} meses na estrutura`
            : warrantyClaim}
        </li>
      </ul>

      <nav
        aria-label="Condições de compra"
        className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
        {[
          { href: "/entrega", label: "Entrega e prazos" },
          { href: "/trocas", label: "Trocas e devoluções" },
          { href: "/montagem", label: "Montagem" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[0.6875rem] font-medium tracking-[0.16em] text-muted-foreground uppercase transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
