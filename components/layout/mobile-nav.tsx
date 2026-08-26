"use client";

import { Menu, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";

import { Wordmark } from "@/components/layout/wordmark";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  accountLinks,
  catalogLinks,
  type EnvironmentNavLink,
  type NavLink,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

const iconActionClassName =
  "flex size-10 items-center justify-center text-foreground/75 transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * The small-screen menu. It reads as a sheet of the same paper as the page —
 * warm white, hairline rules, no elevation — sliding in from the right.
 * Every link closes the sheet, since App Router navigation keeps the layout
 * (and therefore this dialog) mounted.
 */
export function MobileNav({
  environments,
  catalog = catalogLinks,
  account = accountLinks,
}: {
  environments: EnvironmentNavLink[];
  catalog?: NavLink[];
  account?: NavLink[];
}) {
  return (
    <Dialog>
      <DialogTrigger
        aria-label="Abrir o menu de navegação"
        className={cn(iconActionClassName, "lg:hidden")}>
        <Menu className="size-[1.15rem]" strokeWidth={1.5} />
      </DialogTrigger>

      <DialogContent variant="sheet" showCloseButton={false}>
        <DialogTitle className="sr-only">Navegação</DialogTitle>

        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-6">
          <Wordmark className="text-xl" />
          <DialogClose
            aria-label="Fechar o menu de navegação"
            className={cn(iconActionClassName, "-mr-2")}>
            <X className="size-[1.15rem]" strokeWidth={1.5} />
          </DialogClose>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <p className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Ambientes
          </p>

          <nav aria-label="Ambientes" className="mt-4 border-t border-line">
            {environments.map((environment) => (
              <DialogClose
                key={environment.href}
                nativeButton={false}
                render={<Link href={environment.href} />}
                className="flex w-full items-baseline justify-between gap-4 border-b border-line py-4 text-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:-outline-offset-2">
                <span className="font-heading text-2xl font-light">
                  {environment.label}
                </span>
                <span className="text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {environment.categoryCount} categorias
                </span>
              </DialogClose>
            ))}
          </nav>

          <p className="mt-10 text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Catálogo
          </p>

          <nav aria-label="Catálogo" className="mt-4 flex flex-col gap-4">
            {catalog.map((link) => (
              <DialogClose
                key={link.href}
                nativeButton={false}
                render={<Link href={link.href} />}
                className="w-fit text-[0.9375rem] text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
                {link.label}
              </DialogClose>
            ))}
          </nav>
        </div>

        <div className="shrink-0 border-t border-line px-6 py-5">
          <nav aria-label="Conta" className="flex flex-col gap-4">
            {account.map((link) => (
              <DialogClose
                key={link.href}
                nativeButton={false}
                render={<Link href={link.href} />}
                className="flex w-fit items-center gap-3 text-[0.9375rem] text-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
                {link.href === "/sacola" ? (
                  <ShoppingBag className="size-4" strokeWidth={1.5} />
                ) : (
                  <User className="size-4" strokeWidth={1.5} />
                )}
                {link.label}
              </DialogClose>
            ))}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}
