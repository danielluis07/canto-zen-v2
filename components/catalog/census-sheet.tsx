"use client";

import { SlidersHorizontal, X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/**
 * Below `lg` the census cannot hold a column, so it moves into the same sheet
 * of paper the navigation uses — full height, sliding from the right,
 * hairlines and no elevation.
 *
 * The sheet deliberately stays open while you narrow: the counts recomputing
 * under your thumb is the point of the panel, and closing on every tap would
 * hide exactly the thing worth watching. The footer states what you would see
 * on closing it.
 */
export function CensusSheet({
  activeCount,
  resultCount,
  children,
}: {
  activeCount: number;
  resultCount: number;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "group flex items-center gap-2.5 py-1 text-[0.6875rem] font-medium tracking-[0.16em] uppercase",
          "transition-colors duration-200 hover:text-oak-deep",
          "focus-visible:outline-2 focus-visible:outline-offset-4",
        )}>
        <SlidersHorizontal className="size-3.5" strokeWidth={1.5} />
        Filtrar
        {activeCount > 0 && (
          <span className="rounded-xs bg-oak-deep px-1.5 py-0.5 text-[0.625rem] leading-none text-background tabular-nums">
            {activeCount}
            <span className="sr-only"> filtros ativos</span>
          </span>
        )}
      </DialogTrigger>

      <DialogContent variant="sheet" showCloseButton={false}>
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-6">
          <DialogTitle className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Filtrar o catálogo
          </DialogTitle>
          <DialogClose
            aria-label="Fechar os filtros"
            className="-mr-2 flex size-10 items-center justify-center text-foreground/75 transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-2">
            <X className="size-[1.15rem]" strokeWidth={1.5} />
          </DialogClose>
        </div>

        <div className="census-scroll flex-1 overflow-y-auto overscroll-contain px-6 py-8">
          {children}
        </div>

        <div className="shrink-0 border-t border-line p-5">
          <DialogClose
            nativeButton
            className={cn(
              "flex h-12 w-full items-center justify-center rounded-xs bg-foreground px-8",
              "text-[0.6875rem] font-medium tracking-[0.16em] text-background uppercase",
              "transition-colors duration-300 hover:bg-oak-deep",
              "focus-visible:outline-2 focus-visible:outline-offset-4",
            )}>
            {resultCount === 0
              ? "Voltar ao catálogo"
              : `Ver ${resultCount} ${resultCount === 1 ? "peça" : "peças"}`}
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
