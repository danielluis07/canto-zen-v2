import type { Metadata } from "next";

import { JournalRow } from "@/components/journal/journal-row";
import { getJournalEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Diário",
  description:
    "Um texto para cada cômodo. Os artigos citam pelo nome as peças que aparecem nas fotos — é o mesmo catálogo, visto de dentro do ambiente.",
};

/**
 * The journal index. The home page shows the same list under a section header;
 * here it is the page, so the header becomes the page's own — a title, the
 * count of what is on file, and nothing else. There is no filter and no sort:
 * four texts read in published order do not need either.
 */
export default function JournalPage() {
  const entries = getJournalEntries();

  return (
    <div className="mx-auto w-full max-w-360 px-6 pt-14 pb-20 lg:px-10 lg:pt-20 lg:pb-28">
      <header className="border-t border-line pt-6 lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <p className="text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase tabular-nums">
            {entries.length} textos
          </p>

          <h1 className="mt-4 font-heading text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.04] font-light">
            Um texto para cada cômodo
          </h1>
        </div>

        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-end">
          Os artigos citam pelo nome as peças que aparecem nas fotos, com as
          medidas e os prazos que constam do catálogo. É o mesmo acervo, visto
          de dentro do ambiente.
        </p>
      </header>

      <ul className="mt-12 border-b border-line lg:mt-16">
        {entries.map((entry) => (
          <li key={entry.article.slug} className="rise border-t border-line">
            <JournalRow entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  );
}
