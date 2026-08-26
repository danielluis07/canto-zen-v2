import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components/home/section-header";
import { enviroments } from "@/data/enviroments";
import { getTypeLabel } from "@/lib/catalog";
import { cn } from "@/lib/utils";

/** No-break space before the dot, so a wrapped category list never starts a
 *  line with a separator. */
const SEPARATOR = "\u00A0\u00B7 ";

/**
 * Rooms are the primary axis of the catalog, so this is the primary way in.
 *
 * It is built as one continuous band rather than a row of cards: the panels
 * abut, share hairlines, and run past the page gutter, so the section reads as
 * a single plate of the house. That also makes its structural idea legible —
 * on wide screens each panel is as wide as its room is deep, because the
 * flex-grow of every panel is its number of categories. Sala (6) takes half
 * again the width of Escritório (4). The proportion is the information.
 */
export function Environments() {
  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeader
        className="rise"
        eyebrow="Ambientes"
        title="Comece pelo cômodo"
        note="Cada peça aparece no ambiente para o qual foi dimensionada."
        action={{ href: "/moveis", label: "Ver o catálogo inteiro" }}
      />

      <ul className="rise -mx-6 mt-12 grid grid-cols-2 border-y border-line lg:-mx-10 lg:mt-16 lg:flex lg:items-stretch">
        {enviroments.map((environment, index) => (
          <li
            key={environment.slug}
            /* flex-grow is inert in the mobile grid; from lg the list becomes a
               flex row and the category count starts driving panel width. */
            style={{ flexGrow: environment.types.length }}
            className={cn(
              "min-w-0 lg:basis-0",
              /* Two columns on small screens, one row on large — so the seams
                 have to move with the layout. */
              index % 2 === 1 && "border-l border-line",
              index >= 2 && "border-t border-line lg:border-t-0",
              index > 0 && "lg:border-l lg:border-line",
            )}>
            <Link
              href={`/ambientes/${environment.slug}`}
              className="group flex h-full flex-col focus-visible:outline-2 focus-visible:-outline-offset-2">
              <div className="relative aspect-3/4 overflow-hidden bg-secondary lg:aspect-auto lg:h-[clamp(20rem,32vw,30rem)]">
                <Image
                  src={environment.image.src}
                  alt={environment.image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col border-t border-line p-5 transition-colors duration-300 group-hover:bg-accent/70 lg:p-6">
                {/* The count leads as an eyebrow rather than sitting beside the
                    room name. Panel widths vary by design, so anything set on
                    the same line as the name would wrap in some panels and not
                    others; stacked, every panel reads identically. */}
                <p className="text-[0.625rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  {environment.types.length} categorias
                </p>

                <h3 className="mt-2 font-heading text-xl font-normal transition-colors duration-300 group-hover:text-oak-deep lg:text-2xl">
                  {environment.label}
                </h3>

                <p className="mt-3.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  {/* A no-break space keeps each separator attached to the
                      category before it, so a wrap never starts a line with a
                      dot. */}
                  {environment.types.map(getTypeLabel).join(SEPARATOR)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
