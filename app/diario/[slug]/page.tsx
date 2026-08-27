import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeader } from "@/components/home/section-header";
import { ArticleFigure } from "@/components/journal/article-figure";
import { CitedPieces } from "@/components/journal/cited-pieces";
import { JournalRow } from "@/components/journal/journal-row";
import { FactLedger, type LedgerRow } from "@/components/product/fact-ledger";
import { environmentHref } from "@/lib/catalog-filters";
import { roomPhrases } from "@/lib/catalog-sentence";
import { articleSlugs, getArticle, getArticleFacts } from "@/lib/journal";
import { cn } from "@/lib/utils";

/* The direction this page was built to, kept in the emitted markup so it can be
   audited against the render rather than against a memory of it. */
const directionContract = `
THESIS: An article is an argument about one room, made in three movements, and
each movement is answered by exactly one photograph. Refuses the blog post —
no byline, no date, no reading time, no floating share rail.
OWN-WORLD: Canto Zen unchanged. One warm-white paper, 1px hairlines, 2px
corners, Fraunces 300 against uppercase micro-type, oak for interaction, sage
for facts, no second tonal band, no resting shadow.
STORY: The reader arrives from a room, reads a standfirst that states how far
the text reaches into the catalog, follows three claims each closed by its
photograph, and leaves through a ledger of every piece the captions named —
priced, measured, and with its delivery promise attached.
FIRST VIEWPORT: Hairline; Diário and the room as micro-type at left. The title
in Fraunces 300 over the standfirst in the same face, then a two-row ledger
counting pieces cited against pieces in the room. The index photograph the
reader just clicked holds the right six columns at 4:5.
FORM: Three parts, numbered 01–03. Subhead in the left three columns, prose
held to 52ch in columns five through eleven, and the photograph beneath —
across all twelve when the article calls it ampla, inside the reading column
when it calls it detalhe.
RAISES: the caption carries the ticket of origin (moon-shadow bazaar); a fact
is a better ornament than an ornament (Du Bois data portraits); one sheet, one
pass, no accordion (ebru floated pigment); the measure of the reach is stated,
not implied.
FINISH: every figure in the prose is the figure on the product page one click
away; nothing here is invented to fill a line.
`;

export function generateStaticParams() {
  return articleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/diario/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.titulo,
    description: article.resumo,
    openGraph: {
      title: article.titulo,
      description: article.resumo,
      type: "article",
      images: [{ url: article.thumb.src, alt: article.thumb.alt }],
    },
  };
}

export default async function ArticlePage(props: PageProps<"/diario/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) notFound();

  const { environment, citedPieces, roomCount, position, next } =
    getArticleFacts(article);

  /* What the text reaches, against what there was to reach. The pair is the
     whole claim the Diário makes about itself, so it is counted rather than
     described. */
  const reach: LedgerRow[] = [
    { label: "Peças citadas", value: String(citedPieces.length) },
    ...(environment
      ? [
          {
            label: `Peças ${roomPhrases(environment).inRoom}`,
            value: String(roomCount),
          },
        ]
      : []),
  ];

  return (
    <>
      <div
        hidden
        dangerouslySetInnerHTML={{ __html: `<!--${directionContract}-->` }}
      />

      <article>
        <div className="mx-auto w-full max-w-360 px-6 pt-14 pb-16 lg:px-10 lg:pt-20 lg:pb-24">
          <nav
            aria-label="Trilha"
            className="flex flex-wrap items-baseline gap-x-3 gap-y-2 border-t border-line pt-6 text-[0.6875rem] font-medium tracking-[0.16em] uppercase">
            <Link
              href="/diario"
              className="text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
              Diário
            </Link>

            {environment && (
              <>
                <span aria-hidden className="text-muted-foreground/50">
                  ·
                </span>

                <Link
                  href={environmentHref(environment.slug)}
                  className="text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
                  {environment.label}
                </Link>
              </>
            )}
          </nav>

          <div className="mt-8 grid gap-x-10 gap-y-12 lg:mt-12 lg:grid-cols-12">
            <header className="lg:col-span-5">
              <p className="text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground uppercase tabular-nums">
                Texto {position.index} de {position.total}
              </p>

              <h1 className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.04] font-light">
                {article.titulo}
              </h1>

              {/* The standfirst stays in the display face. It is the article's
                  own first line, not a summary written about it, and setting
                  it in the body face would demote it to one. */}
              <p className="mt-7 max-w-[34ch] font-heading text-[clamp(1.25rem,1.8vw,1.5rem)] leading-[1.4] font-light text-pretty">
                {article.abertura}
              </p>

              <FactLedger rows={reach} className="mt-10" />
            </header>

            {/* The photograph the reader clicked in the index, at the crop the
                catalog uses for a piece. It is the same image, arriving large
                — not a second one standing in for it. */}
            <div className="lg:col-start-7 lg:col-span-6">
              <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-secondary">
                <Image
                  src={article.thumb.src}
                  alt={article.thumb.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-360 px-6 lg:px-10">
          {article.partes.map((part, index) => (
            <section
              key={part.titulo}
              className="border-t border-line pt-10 pb-16 lg:pt-12 lg:pb-24">
              {/* `.rise` sits on the prose and not on the part around it: its
                  view timeline measures the subject entering the viewport, so
                  a subject taller than the viewport stays faded for the whole
                  read. The photographs below are deliberately left out of it —
                  they arrive solid, at full contrast. */}
              <div className="rise lg:grid lg:grid-cols-12 lg:gap-x-10">
                <h2 className="lg:col-span-3">
                  <span className="block text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground uppercase tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mt-4 block font-heading text-[clamp(1.5rem,2.4vw,2rem)] leading-snug font-light">
                    {part.titulo}
                  </span>
                </h2>

                <div className="mt-8 lg:col-span-7 lg:col-start-5 lg:mt-0">
                  {part.paragrafos.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-pretty first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* An "ampla" photograph takes the whole grid; a "detalhe" one
                  stays in the reading column, at the width of the paragraph it
                  answers. */}
              <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-10">
                <div
                  className={cn(
                    part.foto.papel === "ampla"
                      ? "lg:col-span-12"
                      : "lg:col-span-7 lg:col-start-5",
                  )}>
                  <ArticleFigure photo={part.foto} />
                </div>
              </div>
            </section>
          ))}

          <div className="rise border-t border-line pt-10 lg:grid lg:grid-cols-12 lg:gap-x-10 lg:pt-12">
            <p className="max-w-[32ch] font-heading text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] font-light text-balance lg:col-span-7 lg:col-start-5">
              {article.fecho}
            </p>
          </div>
        </div>
      </article>

      <CitedPieces pieces={citedPieces} environment={environment} />

      <section className="mx-auto w-full max-w-360 px-6 pb-20 lg:px-10 lg:pb-28">
        <SectionHeader
          className="rise"
          eyebrow="Continua no diário"
          title="Próximo texto"
          note="Cada artigo é escrito sobre um cômodo, e o diário passa pelos quatro."
          action={{ href: "/diario", label: "Ler o diário" }}
        />

        <div className="rise mt-12 border-y border-line lg:mt-16">
          <JournalRow entry={next} />
        </div>
      </section>
    </>
  );
}
