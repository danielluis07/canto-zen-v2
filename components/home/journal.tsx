import { SectionHeader } from "@/components/home/section-header";
import { JournalRow } from "@/components/journal/journal-row";
import { getJournalEntries } from "@/lib/journal";

/**
 * The one section on the home page that is not selling anything.
 *
 * It is set as a contents list rather than a grid of cards, because that is
 * what a journal index is and because nothing else on the page reads
 * vertically: after four sections of pieces arranged side by side, the change
 * of axis is what marks the change of voice.
 */
export function Journal() {
  const entries = getJournalEntries();

  return (
    <section className="mx-auto w-full max-w-360 px-6 py-20 lg:px-10 lg:py-28">
      <SectionHeader
        className="rise"
        eyebrow="Diário"
        title="Um texto para cada cômodo"
        note="Os artigos citam pelo nome as peças que aparecem nas fotos. É o mesmo catálogo, visto de dentro do ambiente."
        action={{ href: "/diario", label: "Ler o diário" }}
      />

      <ul className="mt-12 border-b border-line lg:mt-16">
        {entries.map((entry) => (
          <li key={entry.article.slug} className="rise border-t border-line">
            <JournalRow entry={entry} />
          </li>
        ))}
      </ul>
    </section>
  );
}
