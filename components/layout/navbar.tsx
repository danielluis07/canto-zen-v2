import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";
import { Wordmark } from "@/components/layout/wordmark";
import { environmentLinks } from "@/lib/navigation";

const iconActionClassName =
  "relative flex size-10 items-center justify-center text-foreground/75 transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Wordmark, rooms, utilities — one row, one hairline, nothing else. The bar is
 * translucent rather than opaque so page content stays visible as it passes
 * under it, which keeps the catalog, not the chrome, in charge of the screen.
 */
export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:absolute focus:top-3 focus:left-6 focus:z-10 focus:not-sr-only focus:bg-foreground focus:px-4 focus:py-2 focus:text-[0.6875rem] focus:tracking-[0.16em] focus:text-background focus:uppercase">
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex h-16 w-full max-w-360 items-center justify-between gap-6 px-6 lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link
          href="/"
          aria-label="Canto Zen, página inicial"
          className="w-fit transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
          <Wordmark className="text-inherit" />
        </Link>

        <NavLinks links={environmentLinks} className="hidden lg:flex" />

        <div className="-mr-2 flex items-center justify-end gap-1">
          <Link
            href="/conta"
            aria-label="Minha conta"
            className={iconActionClassName}>
            <User className="size-[1.15rem]" strokeWidth={1.5} />
          </Link>

          <Link
            href="/sacola"
            aria-label={
              cartCount > 0
                ? `Sacola, ${cartCount} itens`
                : "Sacola, nenhum item"
            }
            className={iconActionClassName}>
            <ShoppingBag className="size-[1.15rem]" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span
                aria-hidden
                className="absolute top-1 right-1 min-w-4 rounded-xs bg-oak-deep px-1 text-center text-[0.625rem] leading-4 font-medium text-background">
                {cartCount}
              </span>
            )}
          </Link>

          <MobileNav environments={environmentLinks} />
        </div>
      </div>
    </header>
  );
}
