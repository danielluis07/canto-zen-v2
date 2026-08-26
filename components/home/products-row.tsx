import { ProductCard } from "@/components/product/product-card";
import { SectionHeader } from "@/components/home/section-header";
import type { Product } from "@/types";

/**
 * The browsing row: four peer pieces, same crop, same order of facts, so the
 * eye can run across them and compare. Below `lg` it keeps its horizontal
 * proportions and scrolls, rather than collapsing into a stack of half-height
 * cards.
 *
 * For a set whose pieces are not peers — one per room, say — use
 * `ProductsSpread` instead, which sets them as separate plates.
 */
export function ProductsRow({
  eyebrow,
  title,
  note,
  products,
  action,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  products: Product[];
  action?: { href: string; label: string };
}) {
  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeader
        className="rise"
        eyebrow={eyebrow}
        title={title}
        note={note}
        action={action}
      />

      {/* scroll-px keeps the snapport inside the page gutter, so a snapped card
          lines up with the heading above it instead of the screen edge. */}
      <div className="-mx-6 mt-12 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:scroll-px-0 lg:px-0 lg:pb-0">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            sizes="(min-width: 1024px) 25vw, 74vw"
            className="w-[74vw] shrink-0 snap-start sm:w-[46vw] lg:w-auto lg:shrink"
          />
        ))}
      </div>
    </section>
  );
}
