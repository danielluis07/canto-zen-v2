import { enviroments } from "@/data/enviroments";

export type NavLink = {
  href: string;
  label: string;
};

export type EnvironmentNavLink = NavLink & {
  /** Number of product categories inside the room — shown as a literal count. */
  categoryCount: number;
};

/**
 * Rooms are the primary axis of the catalog, so they are the primary nav.
 * Derived from the catalog data so labels and counts never drift from it.
 */
export const environmentLinks: EnvironmentNavLink[] = enviroments.map(
  (environment) => ({
    href: `/ambientes/${environment.slug}`,
    label: environment.label,
    categoryCount: environment.types.length,
  }),
);

/** Secondary catalog entries — footer columns and the mobile menu. */
export const catalogLinks: NavLink[] = [
  { href: "/produtos", label: "Todos os móveis" },
  { href: "/materiais", label: "Materiais e cuidados" },
  { href: "/diario", label: "Diário" },
];

export const supportLinks: NavLink[] = [
  { href: "/entrega", label: "Entrega e prazos" },
  { href: "/trocas", label: "Trocas e devoluções" },
  { href: "/garantia", label: "Garantia de 5 anos" },
  { href: "/montagem", label: "Montagem e cuidados" },
  { href: "/contato", label: "Fale com a gente" },
];

export const accountLinks: NavLink[] = [
  { href: "/conta", label: "Minha conta" },
  { href: "/sacola", label: "Sacola" },
];

export const legalLinks: NavLink[] = [
  { href: "/termos", label: "Termos de uso" },
  { href: "/privacidade", label: "Privacidade" },
];

export const socialLinks: NavLink[] = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://pinterest.com", label: "Pinterest" },
];
