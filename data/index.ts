import { unsplash } from "@/lib/utils";
import type {
  Collection,
  Color,
  Environment,
  Material,
} from "@/types";

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

export const cores: Color[] = [
  { slug: "cru", label: "Cru", sample: "#E7E0D3" },
  { slug: "off-white", label: "Off-white", sample: "#F2EFE8" },
  { slug: "areia", label: "Areia", sample: "#D8CBB6" },
  { slug: "argila", label: "Argila", sample: "#B08A6E" },
  { slug: "nogueira", label: "Nogueira", sample: "#6B4C36" },
  { slug: "carvao", label: "Carvão", sample: "#3A3A38" },
  { slug: "grafite", label: "Grafite", sample: "#4A4E52" },
  { slug: "verde-musgo", label: "Verde-musgo", sample: "#6B7359" },
  { slug: "terracota", label: "Terracota", sample: "#B25B3E" },
  { slug: "ocre", label: "Ocre", sample: "#C08A3E" },
];

export const materiais: Material[] = [
  {
    slug: "linho",
    label: "Linho",
    precautions:
      "Aspire semanalmente; manchas saem com pano úmido e sabão neutro, nunca esfregando.",
  },
  {
    slug: "boucle",
    label: "Bouclé",
    precautions:
      "Escove no sentido da trama; nunca puxe fios soltos — corte rente.",
  },
  {
    slug: "couro-natural",
    label: "Couro natural",
    precautions:
      "Hidrate a cada seis meses com creme incolor; mantenha longe de sol direto.",
  },
  {
    slug: "carvalho",
    label: "Carvalho",
    precautions:
      "Pano seco no dia a dia; reaplique óleo de acabamento uma vez por ano.",
  },
  {
    slug: "nogueira",
    label: "Nogueira",
    precautions:
      "Pano seco; a madeira escurece com a luz, e isso é próprio dela.",
  },
  {
    slug: "freijo",
    label: "Freijó",
    precautions:
      "Pano seco; evite produtos à base de silicone, que selam o poro.",
  },
  {
    slug: "jatoba",
    label: "Jatobá",
    precautions:
      "Pano seco; a cor amadurece nos primeiros meses e depois estabiliza.",
  },
  {
    slug: "palhinha",
    label: "Palhinha",
    precautions:
      "Aspire com bocal de escova; umedeça levemente uma vez por ano para não ressecar.",
  },
  {
    slug: "rattan",
    label: "Rattan",
    precautions:
      "Pano úmido e secagem à sombra; ambientes muito secos pedem umidificação.",
  },
  {
    slug: "aco-carbono",
    label: "Aço carbono",
    precautions:
      "Pano seco; a pintura eletrostática não pede polimento nem cera.",
  },
  {
    slug: "latao",
    label: "Latão",
    precautions:
      "Deixe patinar; para manter o brilho, flanela seca e nada mais.",
  },
  {
    slug: "vidro-temperado",
    label: "Vidro temperado",
    precautions: "Álcool isopropílico e pano de microfibra; evite abrasivos.",
  },
  {
    slug: "marmore",
    label: "Mármore",
    precautions:
      "Seque líquidos na hora — ácidos marcam; impermeabilize a cada dois anos.",
  },
  {
    slug: "ceramica",
    label: "Cerâmica",
    precautions: "Pano úmido; peças esmaltadas não vão à máquina de lavar.",
  },
];

export const colecoes: Collection[] = [
  {
    slug: "reboco",
    nome: "Reboco",
    descricao:
      "Seis peças em tons de cal, desenhadas para uma casa que recebe pouca luz direta.",
    imagem: {
      src: unsplash("1513506003901-1e6a229e2d15"),
      alt: "Peças em tons de cal reunidas contra uma parede de reboco",
    },
    produtos: [
      "sofa-heron-linho-cru",
      "poltrona-lina-linho-cru",
      "mesa-de-centro-luar-marmore-off-white",
      "aparador-pedra-marmore-cru",
      "cabeceira-vela-linho-areia",
      "luminaria-de-mesa-seixo-ceramica-cru",
    ],
  },
  {
    slug: "serra",
    nome: "Serra",
    descricao:
      "Cinco peças em madeira maciça escura, para quem quer a marcenaria à vista.",
    imagem: {
      src: unsplash("1594026112284-02bb6f3352fe"),
      alt: "Mesa de jantar e cadeiras em madeira maciça escura",
    },
    produtos: [
      "mesa-de-jantar-ilhota-jatoba",
      "cadeira-junco-couro-argila",
      "aparador-sereno-carvalho",
      "estante-mirante-nogueira",
      "comoda-tramo-nogueira",
    ],
  },
];

/* The Diário lives in its own file — it is prose, not a table, and it is long.
   Re-exported here so `@/data` stays the single entry point for catalog data. */
export { artigos } from "@/data/articles";
