import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Collection } from "@/components/home/collection";
import { AvailabilityTag } from "@/components/home/product-details";
import { ProductsRow } from "@/components/home/products-row";
import { BagControl } from "@/components/product/bag-control";
import { FactLedger, type LedgerRow } from "@/components/product/fact-ledger";
import { FamilyCota } from "@/components/product/family-cota";
import { FinishSpine } from "@/components/product/finish-spine";
import { PieceCommitments } from "@/components/product/piece-commitments";
import { PieceEditorial } from "@/components/product/piece-editorial";
import {
  PieceFrames,
  PieceLeadFrame,
} from "@/components/product/piece-frames";
import { TextLink } from "@/components/ui/link-button";
import { getMainImage } from "@/lib/catalog";
import { formatAvailability, formatPrice, resolvePrices } from "@/lib/format";
import {
  environmentHref,
  getPageFacts,
  getProduct,
  productSlugs,
  typeHref,
} from "@/lib/product-page";

/* The direction this page was built to, kept in the emitted markup so it can be
   audited against the render rather than against a memory of it. */
const directionContract = `
THESIS: A product is a family plus a finish, so the silhouette is the subject
and the material is the one axis under it. Refuses the gallery-left /
sticky-buy-box-right PDP and its accordion of specs.
OWN-WORLD: Canto Zen unchanged. One warm-white paper, 1px hairlines, 2px
corners, Fraunces 300 against uppercase micro-type, oak for interaction, sage
for facts, one greige band. No new colour, no card ground, no resting shadow.
STORY: The visitor reads the silhouette and its cotas, sees which materials it
comes in and what each costs, and commits — then finds the room, the set and
the article the piece already belongs to.
FIRST VIEWPORT: Hairline; room and type as micro-type at left. The family name
in Fraunces 300 over a three-cell cota title block. Below it the finish spine —
ruled plates, filled mark on the current one, ink rule under it. Price, the
solid bag control and the sage commitments close the left five columns; the
catalog photograph holds the right six at 4:5 with its width cota drawn on it.
FORM: A Família; index 5 of 7 grounded structures; seed 3f632e9d.
RAISES: printed-mark states over colour states (centre-rail reference setting);
cells never move, only their contents (split-flap concourse); each fact in the
form its question needs (Du Bois data portraits); one sheet, one pass, no
accordion or lightbox (ebru floated pigment); every photograph carries its
ticket of origin (moon-shadow bazaar); exactly one part in play at a time
(crank paper menagerie).
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
`;

export function generateStaticParams() {
  return productSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/produtos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);

  if (!product) return {};

  const image = getMainImage(product);

  return {
    title: `${product.name} · ${product.finish}`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.finish}`,
      description: product.description,
      images: image ? [{ url: image.src, alt: image.alt }] : undefined,
    },
  };
}

/** "un" counts a thing rather than measuring it, so it is left off the figure. */
const measurementValue = (value: number, unit: "cm" | "kg" | "un") =>
  unit === "un" ? String(value) : `${value} ${unit}`;

export default async function ProductPage(
  props: PageProps<"/produtos/[slug]">,
) {
  const { slug } = await props.params;
  const product = getProduct(slug);

  if (!product) notFound();

  const {
    cota,
    images,
    rulerWidth,
    care,
    type,
    environment,
    finishes,
    roomCount,
    collection,
    editorial,
    related,
  } = getPageFacts(product);

  const prices = resolvePrices(product);
  const isSoldOut = product.availability === "out-of-stock";

  const measurements: LedgerRow[] = product.extraMeasurements.map((entry) => ({
    label: entry.label,
    value: measurementValue(entry.value, entry.unit),
  }));

  return (
    <>
      <div
        hidden
        dangerouslySetInnerHTML={{ __html: `<!--${directionContract}-->` }}
      />

      <div className="mx-auto w-full max-w-360 px-6 pt-14 pb-20 lg:px-10 lg:pt-20 lg:pb-28">
        <nav
          aria-label="Trilha"
          className="flex flex-wrap items-baseline gap-x-3 gap-y-2 border-t border-line pt-6 text-[0.6875rem] font-medium tracking-[0.16em] uppercase">
          {environment && (
            <Link
              href={environmentHref(environment.slug)}
              className="text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
              {environment.label}
            </Link>
          )}

          {environment && type && (
            <span aria-hidden className="text-muted-foreground/50">
              ·
            </span>
          )}

          {type && (
            <Link
              href={typeHref(type.slug)}
              className="text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
              {type.label}
            </Link>
          )}
        </nav>

        {/* Column six is left empty on purpose. The dossier keeps a reading
            measure it can hold prose in, and the photograph is pushed clear of
            it rather than butting against the facts. */}
        <div className="mt-8 grid gap-x-10 gap-y-14 lg:mt-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <header className="lg:col-span-5 lg:row-start-1">
            <h1 className="font-heading text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.04] font-light">
              {product.name}
            </h1>

            {cota && <FamilyCota cota={cota} />}
          </header>

          {/* The photograph is remounted per slug so its arrival replays when
              the visitor moves between finishes: the geometry above holds and
              only the material inside the frame changes. */}
          {images[0] && (
            <div className="lg:col-start-7 lg:col-span-6 lg:row-span-2 lg:row-start-1">
              <PieceLeadFrame
                key={product.slug}
                image={images[0]}
                rulerWidth={rulerWidth}
              />
            </div>
          )}

          <div className="lg:col-span-5 lg:row-start-2">
            <FinishSpine finishes={finishes} />

            <div className="mt-9 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
              <p className="flex items-baseline gap-3">
                {prices.previous && (
                  <span className="text-[0.9375rem] text-muted-foreground/75 line-through tabular-nums">
                    <span className="sr-only">preço anterior </span>
                    {formatPrice(prices.previous)}
                  </span>
                )}
                <span className="text-[1.375rem] font-medium tabular-nums">
                  {formatPrice(prices.current)}
                </span>
              </p>

              {/* Price left, delivery promise right — the ledger line the whole
                  catalog closes on, and it holds on every variant including the
                  one the store cannot ship. The control beside it names its
                  action and goes disabled; the status is stated here, once. */}
              <AvailabilityTag
                label={formatAvailability(product)}
                isSoldOut={isSoldOut}
              />
            </div>

            <div className="mt-7">
              <BagControl isSoldOut={isSoldOut} />
            </div>

            <PieceCommitments
              freeShipping={product.freeShipping}
              warrantyMonths={product.warrantyMonths}
            />
          </div>

          {/* The rest of the catalog's photographs continue in the same column
              on a wide screen, and fall below the price on a narrow one. */}
          {images.length > 1 && (
            <div className="lg:col-start-7 lg:col-span-6 lg:row-start-3">
              <PieceFrames key={product.slug} images={images.slice(1)} />
            </div>
          )}
        </div>
      </div>

      {/* The written piece on one side, what can be counted about it on the
          other. The prose keeps a reading measure and the ledgers stack in a
          single column beside it, so neither is squeezed into a width it cannot
          hold and the two sides finish at roughly the same depth. */}
      <section className="mx-auto w-full max-w-360 px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="rise grid gap-x-10 gap-y-12 border-t border-line pt-10 lg:grid-cols-12 lg:pt-12">
          <div className="lg:col-span-6">
            <h2 className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              A peça
            </h2>

            <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-pretty">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-5 lg:col-start-8">
            {measurements.length > 0 && (
              <div>
                <h2 className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Medidas da peça
                </h2>

                <FactLedger rows={measurements} className="mt-6" />
              </div>
            )}

            {care.length > 0 && (
              <div>
                <h2 className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
                  Cuidados
                </h2>

                <dl className="mt-6 border-b border-line">
                  {care.map((material) => (
                    <div
                      key={material.slug}
                      className="border-t border-line py-4 sm:flex sm:items-baseline sm:gap-6">
                      <dt className="font-heading text-[1.0625rem] leading-snug font-normal sm:w-32 sm:shrink-0">
                        {material.label}
                      </dt>
                      <dd className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground sm:mt-0">
                        {material.precautions}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* The system's text control, not the section-heading token —
                    stacked under three headings in the same micro-type, an
                    unruled label reads as a fourth, empty heading. */}
                <TextLink href="/materiais" className="mt-6">
                  Todos os materiais
                </TextLink>
              </div>
            )}
          </div>
        </div>
      </section>

      {collection && (
        <Collection collection={collection} label="Esta peça na coleção" />
      )}

      {editorial && (
        <PieceEditorial
          article={editorial.article}
          photo={editorial.photo}
          product={product}
        />
      )}

      {environment && related.length > 0 && (
        <ProductsRow
          /* The eyebrow states the size of the room's catalog — a fact the
             title does not carry. An eyebrow that paraphrases its own heading
             is the heading said twice. */
          eyebrow={`${roomCount} peças na ${environment.label.toLowerCase()}`}
          title={`Outras peças para a ${environment.label.toLowerCase()}`}
          note={environment.description}
          products={related}
          action={{
            href: environmentHref(environment.slug),
            label: `Ver a ${environment.label.toLowerCase()} inteira`,
          }}
        />
      )}
    </>
  );
}
