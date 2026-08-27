"use client";

import { ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

import {
  inertControlClassName,
  solidControlClassName,
  TextLink,
} from "@/components/ui/link-button";
import { readinessLabel, type BagSummary } from "@/lib/bag-summary";
import { freeShippingClaim, warrantyClaim } from "@/lib/commitments";
import { showDemoNotice } from "@/lib/demo-notice";
import { formatPrice } from "@/lib/format";

/**
 * What the bag adds up to, in the same ledger the rest of the catalogue closes
 * on: label at one end, figure at the other, a hairline between every pair.
 *
 * The delivery line is the one fact this panel can state that no single piece
 * can. An order leaves when its slowest piece does, so the bag prints the
 * longest production time in it rather than repeating four separate promises
 * and leaving the arithmetic to the visitor.
 */
export function BagLedger({ summary }: { summary: BagSummary }) {
  const readiness = readinessLabel(summary.readiness);
  const isBlocked = summary.readiness.kind === "blocked";

  return (
    <div className="border-t border-line pt-6 lg:sticky lg:top-28">
      <h2 className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Resumo do pedido
      </h2>

      <dl className="mt-6">
        {/* The gross figure only earns a row when something is subtracted from
            it. With nothing marked down it is the total, and a ledger that
            prints the same number twice makes the reader check whether it is
            the same number. Only pieces actually marked down in `data/`
            produce the pair, so a discount is never a rhetorical device. */}
        {summary.savings > 0 && (
          <>
            <div className="flex items-baseline justify-between gap-6 border-t border-line py-3">
              <dt className="text-[0.8125rem] leading-relaxed text-muted-foreground">
                {summary.pieceCount === 1
                  ? "1 peça"
                  : `${summary.pieceCount} peças`}
              </dt>
              <dd className="shrink-0 text-[0.8125rem] leading-relaxed tabular-nums">
                {formatPrice(summary.subtotal + summary.savings)}
              </dd>
            </div>

            <div className="flex items-baseline justify-between gap-6 border-t border-line py-3">
              <dt className="text-[0.8125rem] leading-relaxed text-muted-foreground">
                Descontos
              </dt>
              <dd className="shrink-0 text-[0.8125rem] leading-relaxed text-sage-deep tabular-nums">
                −{formatPrice(summary.savings)}
              </dd>
            </div>
          </>
        )}

        {readiness && (
          <div className="flex items-baseline justify-between gap-6 border-t border-line py-3">
            <dt className="text-[0.8125rem] leading-relaxed text-muted-foreground">
              Prazo
            </dt>
            <dd
              className={`shrink-0 text-[0.8125rem] leading-relaxed ${
                isBlocked ? "text-muted-foreground" : "text-sage-deep"
              }`}>
              {readiness}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-2 flex items-baseline justify-between gap-6 border-t border-line pt-5">
        <p className="text-[0.6875rem] font-medium tracking-[0.16em] uppercase">
          Total
        </p>
        <p className="shrink-0 text-[1.375rem] font-medium tabular-nums">
          {formatPrice(summary.subtotal)}
        </p>
      </div>

      {/* Shipping is a store-wide promise measured against a store-wide
          threshold, so the gap to it is a real figure rather than an
          encouragement. Below the threshold the bag says what is missing;
          above it, it says the promise is kept. */}
      <p className="mt-3 max-w-[38ch] text-[0.8125rem] leading-relaxed text-muted-foreground">
        {summary.hasFreeShipping
          ? "Frete grátis para o Sudeste. Demais regiões calculadas na finalização."
          : `Faltam ${formatPrice(
              summary.toFreeShipping ?? 0,
            )} para o frete grátis no Sudeste. O frete é calculado na finalização.`}
      </p>

      <div className="mt-7">
        {isBlocked ? (
          <>
            <button type="button" disabled className={`${inertControlClassName} w-full`}>
              Finalizar compra
            </button>

            <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
              {summary.soldOutCount === 1
                ? "Uma peça da sacola está esgotada. Remova-a para seguir."
                : `${summary.soldOutCount} peças da sacola estão esgotadas. Remova-as para seguir.`}
            </p>
          </>
        ) : (
          /* The control is real, the shop is not. Rather than hand the visitor
             to a checkout that cannot exist on a site with no backend, it says
             so — once, in the same place the purchase would have started. */
          <button
            type="button"
            onClick={showDemoNotice}
            className={`${solidControlClassName} w-full`}>
            Finalizar compra
          </button>
        )}
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <ul className="flex flex-col gap-3">
          <li className="flex items-start gap-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
            <Truck
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-sage"
              strokeWidth={1.5}
            />
            {freeShippingClaim}
          </li>

          <li className="flex items-start gap-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
            <ShieldCheck
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-sage"
              strokeWidth={1.5}
            />
            {warrantyClaim}
          </li>
        </ul>

        <nav
          aria-label="Condições de compra"
          className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {[
            { href: "/entrega", label: "Entrega e prazos" },
            { href: "/trocas", label: "Trocas e devoluções" },
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

      <TextLink href="/produtos" className="mt-8">
        Continuar no catálogo
      </TextLink>
    </div>
  );
}
