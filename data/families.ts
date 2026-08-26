import type { ProductFamily } from "@/types";

export const families: ProductFamily[] = [
  {
    slug: "sofa-heron",
    name: "Sofá Héron",
    measurements: { width: 0, depth: 0, height: 0 },
  },
  {
    slug: "sofa-orla",
    name: "Sofá Orla",
    measurements: { width: 190, depth: 90, height: 72 },
  },
  {
    slug: "sofa-taipa",
    name: "Sofá Taipa",
    measurements: { width: 245, depth: 100, height: 80 },
  },
  {
    slug: "sofa-maruja",
    name: "Sofá Marujá",
    measurements: { width: 205, depth: 92, height: 74 },
  },
  {
    slug: "poltrona-lina",
    name: "Poltrona Lina",
    measurements: { width: 78, depth: 82, height: 74 },
  },
  {
    slug: "poltrona-sagui",
    name: "Poltrona Saguí",
    measurements: { width: 88, depth: 86, height: 80 },
  },
  {
    slug: "mesa-de-centro-seixo",
    name: "Mesa de Centro Seixo",
    measurements: { width: 95, depth: 58, height: 34 },
  },
  {
    slug: "mesa-de-centro-luar",
    name: "Mesa de Centro Luar",
    measurements: { width: 125, depth: 70, height: 40 },
  },
  {
    slug: "mesa-de-centro-vau",
    name: "Mesa de Centro Vau",
    measurements: { width: 110, depth: 62, height: 36 },
  },
  {
    slug: "mesa-de-jantar-vargem",
    name: "Mesa de Jantar Vargem",
    measurements: { width: 200, depth: 92, height: 76 },
  },
  {
    slug: "mesa-de-jantar-ilhota",
    name: "Mesa de Jantar Ilhota",
    measurements: { width: 230, depth: 98, height: 78 },
  },
  {
    slug: "estante-cais",
    name: "Estante Cais",
    measurements: { width: 180, depth: 42, height: 200 },
  },
  {
    slug: "rack-varjao",
    name: "Rack Varjão",
    measurements: { width: 140, depth: 38, height: 168 },
  },
  {
    slug: "estante-tramo",
    name: "Estante Tramo",
    measurements: { width: 100, depth: 34, height: 148 },
  },
  {
    slug: "aparador-sereno",
    name: "Aparador Sereno",
    measurements: { width: 150, depth: 43, height: 82 },
  },
  {
    slug: "aparador-pedra",
    name: "Aparador Pedra",
    measurements: { width: 175, depth: 47, height: 86 },
  },
  {
    slug: "aparador-junco",
    name: "Aparador Junco",
    measurements: { width: 130, depth: 40, height: 78 },
  },

  // §3.2's famílias, in §3.2's row order. `Vargem`, `Tramo`, `Bruma`, `Cais`,
  // `Seixo`, `Luar`, `Junco` and `Ripado` also name pieces in other rooms: §3.5
  // is explicit that those are distinct famílias with distinct slugs, sharing
  // nothing but the atelier's line names, so `comoda-vargem` and
  // `mesa-de-jantar-vargem` are two famílias and never one.
  {
    slug: "cama-nuvem",
    name: "Cama Nuvem",
    measurements: { width: 172, depth: 208, height: 100 },
  },
  {
    slug: "cama-orvalho",
    name: "Cama Orvalho",
    measurements: { width: 168, depth: 205, height: 45 },
  },
  {
    slug: "cama-tatami",
    name: "Cama Tatami",
    measurements: { width: 148, depth: 202, height: 38 },
  },
  {
    slug: "cama-abrigo",
    name: "Cama Abrigo",
    measurements: { width: 200, depth: 215, height: 110 },
  },
  {
    slug: "cabeceira-vela",
    name: "Cabeceira Vela",
    measurements: { width: 160, depth: 10, height: 100 },
  },
  {
    slug: "cabeceira-ripado",
    name: "Cabeceira Ripado",
    measurements: { width: 180, depth: 12, height: 110 },
  },
  {
    slug: "criado-mudo-seixo",
    name: "Criado-mudo Seixo",
    measurements: { width: 50, depth: 40, height: 55 },
  },
  {
    slug: "criado-mudo-luar",
    name: "Criado-mudo Luar",
    measurements: { width: 56, depth: 44, height: 60 },
  },
  {
    slug: "criado-mudo-junco",
    name: "Criado-mudo Junco",
    measurements: { width: 46, depth: 38, height: 52 },
  },
  {
    slug: "comoda-vargem",
    name: "Cômoda Vargem",
    measurements: { width: 110, depth: 47, height: 82 },
  },
  {
    slug: "comoda-tramo",
    name: "Cômoda Tramo",
    measurements: { width: 128, depth: 50, height: 88 },
  },
  {
    slug: "comoda-bruma",
    name: "Cômoda Bruma",
    measurements: { width: 92, depth: 45, height: 78 },
  },
  {
    slug: "guarda-roupa-cais",
    name: "Guarda-roupa Cais",
    measurements: { width: 240, depth: 64, height: 236 },
  },
  {
    slug: "guarda-roupa-ripado",
    name: "Guarda-roupa Ripado",
    measurements: { width: 180, depth: 58, height: 220 },
  },
  {
    slug: "guarda-roupa-bruma",
    name: "Guarda-roupa Bruma",
    measurements: { width: 200, depth: 60, height: 228 },
  },

  {
    slug: "mesa-taipa",
    name: "Mesa Taipa",
    measurements: { width: 150, depth: 82, height: 76 },
  },
  {
    slug: "mesa-orla",
    name: "Mesa Orla",
    measurements: { width: 130, depth: 78, height: 74 },
  },
  {
    slug: "mesa-pedra",
    name: "Mesa Pedra",
    measurements: { width: 180, depth: 90, height: 78 },
  },

  {
    slug: "cadeira-junco",
    name: "Cadeira Junco",
    measurements: { width: 52, depth: 56, height: 88 },
  },
  {
    slug: "cadeira-vime",
    name: "Cadeira Vime",
    measurements: { width: 48, depth: 52, height: 84 },
  },
  {
    slug: "cadeira-tramo",
    name: "Cadeira Tramo",
    measurements: { width: 44, depth: 50, height: 80 },
  },

  {
    slug: "banqueta-seixo",
    name: "Banqueta Seixo",
    measurements: { width: 40, depth: 40, height: 68 },
  },
  {
    slug: "banqueta-vau",
    name: "Banqueta Vau",
    measurements: { width: 42, depth: 42, height: 72 },
  },
  {
    slug: "banqueta-tramo",
    name: "Banqueta Tramo",
    measurements: { width: 38, depth: 38, height: 64 },
  },

  {
    slug: "armario-cais",
    name: "Armário Cais",
    measurements: { width: 150, depth: 52, height: 215 },
  },
  {
    slug: "armario-ripado",
    name: "Armário Ripado",
    measurements: { width: 120, depth: 46, height: 200 },
  },
  {
    slug: "armario-bruma",
    name: "Armário Bruma",
    measurements: { width: 90, depth: 42, height: 185 },
  },

  {
    slug: "carrinho-roldana",
    name: "Carrinho Roldana",
    measurements: { width: 56, depth: 44, height: 68 },
  },
  {
    slug: "carrinho-junco",
    name: "Carrinho Junco",
    measurements: { width: 44, depth: 40, height: 60 },
  },
  {
    slug: "mesa-de-apoio-luar",
    name: "Mesa de Apoio Luar",
    measurements: { width: 66, depth: 50, height: 74 },
  },

  {
    slug: "escrivaninha-tramo",
    name: "Escrivaninha Tramo",
    measurements: { width: 110, depth: 55, height: 74 },
  },
  {
    slug: "escrivaninha-vau",
    name: "Escrivaninha Vau",
    measurements: { width: 130, depth: 60, height: 75 },
  },
  {
    slug: "escrivaninha-cais",
    name: "Escrivaninha Cais",
    measurements: { width: 160, depth: 70, height: 78 },
  },

  {
    slug: "cadeira-de-trabalho-junco",
    name: "Cadeira de Trabalho Junco",
    measurements: { width: 44, depth: 48, height: 78 },
  },
  {
    slug: "cadeira-de-trabalho-ripado",
    name: "Cadeira de Trabalho Ripado",
    measurements: { width: 48, depth: 52, height: 84 },
  },
  {
    slug: "cadeira-de-trabalho-orla",
    name: "Cadeira de Trabalho Orla",
    measurements: { width: 54, depth: 58, height: 90 },
  },

  {
    slug: "estante-bruma",
    name: "Estante Bruma",
    measurements: { width: 90, depth: 32, height: 160 },
  },
  {
    slug: "estante-vargem",
    name: "Estante Vargem",
    measurements: { width: 110, depth: 38, height: 180 },
  },
  {
    slug: "estante-mirante",
    name: "Estante Mirante",
    measurements: { width: 140, depth: 42, height: 200 },
  },

  {
    slug: "luminaria-de-mesa-junco",
    name: "Luminária de Mesa Junco",
    measurements: { width: 20, depth: 20, height: 40 },
  },
  {
    slug: "luminaria-de-mesa-seixo",
    name: "Luminária de Mesa Seixo",
    measurements: { width: 22, depth: 22, height: 42 },
  },
  {
    slug: "luminaria-de-mesa-farol",
    name: "Luminária de Mesa Farol",
    measurements: { width: 26, depth: 26, height: 50 },
  },
];
