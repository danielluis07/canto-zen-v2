import Link from "next/link";

import { LinkButton } from "@/components/ui/link-button";
import { catalogTotals } from "@/lib/catalog-filters";
import { environmentLinks } from "@/lib/navigation";

/**
 * A piece can leave the catalog; the room it belonged to does not. So the dead
 * end states what the catalog still holds and hands back the four ways into it,
 * rather than apologising and stopping.
 */
export default function ProductNotFound() {
  return (
    <div className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <div className="border-t border-line pt-6 lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <p className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Peça fora do catálogo
          </p>

          <h1 className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.04] font-light">
            Não encontramos essa peça
          </h1>

          <p className="mt-6 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
            O endereço pode ter mudado, ou a peça saiu de linha. O catálogo
            continua com {catalogTotals.products} peças em{" "}
            {catalogTotals.types} tipos.
          </p>

          <LinkButton href="/produtos" className="mt-10">
            Ver todos os móveis
          </LinkButton>
        </div>

        {/* The rooms are the catalog's primary axis, so they are the way back
            in — each on its own ruled line with the count it actually holds. */}
        <nav
          aria-label="Ambientes"
          className="mt-14 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <h2 className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Ou entre por um ambiente
          </h2>

          <ul className="mt-5 border-b border-line">
            {environmentLinks.map((link) => (
              <li key={link.href} className="group relative border-t border-line">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-oak transition-transform duration-300 ease-out group-hover:scale-x-100"
                />

                <Link
                  href={link.href}
                  className="flex items-baseline justify-between gap-6 py-4 focus-visible:outline-2 focus-visible:outline-offset-4">
                  <span className="font-heading text-[1.0625rem] leading-snug font-normal transition-colors duration-300 group-hover:text-oak-deep">
                    {link.label}
                  </span>
                  <span className="shrink-0 text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground uppercase tabular-nums">
                    {link.categoryCount} categorias
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
