import { unsplash } from "@/lib/utils";
import type { Environment } from "@/types";

export const enviroments: Environment[] = [
  {
    slug: "sala",
    label: "Sala",
    types: [
      "sofas",
      "poltronas",
      "mesas-de-centro",
      "mesas-de-jantar",
      "racks-e-estantes",
      "aparadores",
    ],
    image: {
      src: unsplash("1616486338812-3dadae4b4ace"),
      alt: "Sala de estar com sofá de linho e mesa de centro em madeira",
    },
    description: "Onde a casa recebe — peças que suportam a permanência longa.",
  },
  {
    slug: "quarto",
    label: "Quarto",
    types: ["camas", "cabeceiras", "criados-mudos", "comodas", "guarda-roupas"],
    image: {
      src: unsplash("1583847268964-b28dc8f51f92"),
      alt: "Quarto com cama de cabeceira estofada e criado-mudo em madeira clara",
    },
    description:
      "O cômodo mais silencioso da casa merece a marcenaria mais discreta.",
  },
  {
    slug: "cozinha",
    label: "Cozinha",
    types: ["mesas", "cadeiras", "banquetas", "armarios", "carrinhos-e-apoios"],
    image: {
      src: unsplash("1598300042247-d088f8ab3a91"),
      alt: "Cozinha com mesa de madeira maciça e cadeiras de palhinha",
    },
    description: "Superfícies que trabalham todos os dias e envelhecem bem.",
  },
  {
    slug: "escritorio",
    label: "Escritório",
    types: [
      "escrivaninhas",
      "cadeiras-de-trabalho",
      "estantes",
      "luminarias-de-mesa",
    ],
    image: {
      src: unsplash("1567016432779-094069958ea5"),
      alt: "Escritório com escrivaninha de madeira, estante e luminária de mesa",
    },
    description: "Concentração exige poucas coisas, e todas certas.",
  },
];
