import { ShieldCheck, Sprout, Truck } from "lucide-react";
import Link from "next/link";

import { Wordmark } from "@/components/layout/wordmark";
import { colecoes } from "@/data";
import {
  catalogLinks,
  environmentLinks,
  legalLinks,
  socialLinks,
  supportLinks,
  type NavLink,
} from "@/lib/navigation";

const collectionLinks: NavLink[] = colecoes.map((collection) => ({
  href: `/colecoes/${collection.slug}`,
  label: `Coleção ${collection.nome}`,
}));

/**
 * Three literal claims, not a values statement: what the wood is, how long the
 * frame is covered, where shipping is free. Sage marks them as the natural,
 * calm register — never the interactive one.
 */
const commitments = [
  { icon: Sprout, text: "Madeira maciça de manejo certificado FSC" },
  { icon: ShieldCheck, text: "Garantia de 5 anos na estrutura" },
  { icon: Truck, text: "Frete grátis para o Sudeste acima de R$ 1.200" },
];

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="font-sans text-[0.6875rem] font-medium tracking-[0.18em] text-foreground uppercase">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.9375rem] text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The footer sits on the page ground with no band of its own — a single
 * hairline separates it from whatever section closes the page above it.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto w-full max-w-[90rem] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Wordmark className="text-2xl" />

            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Móveis em madeira maciça, linho e palhinha, feitos sob encomenda
              em marcenaria própria. Prazo de produção de 3 a 10 semanas,
              conforme a peça.
            </p>

            <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-7">
              {commitments.map((commitment) => (
                <li
                  key={commitment.text}
                  className="flex items-start gap-3 text-sm text-muted-foreground">
                  <commitment.icon
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-sage"
                    strokeWidth={1.5}
                  />
                  {commitment.text}
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Ambientes" links={environmentLinks} />
          <FooterColumn
            title="Catálogo"
            links={[...collectionLinks, ...catalogLinks]}
          />
          <FooterColumn title="Atendimento" links={supportLinks} />
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-line pt-8 text-xs text-muted-foreground lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} Canto Zen Móveis · CNPJ 00.000.000/0001-00 · São Paulo, SP
          </p>

          <nav aria-label="Links institucionais">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
