import { unsplash } from "@/lib/utils";
import type {
  Article,
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

export const artigos: Article[] = [
  {
    slug: "a-luz-da-tarde-na-sala",
    titulo: "A luz da tarde",
    resumo:
      "Como uma sala muda quando o sol baixa, e o que fica bem nela às cinco da tarde.",
    ambiente: "sala",
    ordem: 1,
    thumb: {
      src: unsplash("1616486338812-3dadae4b4ace"),
      alt: "Sala ao fim da tarde, com a luz rasante atravessando o estofado",
    },
    abertura:
      "Às cinco da tarde a luz entra deitada e encontra as superfícies de lado. É a hora em que a sala mostra a trama de tudo que tem dentro.",
    fotos: [
      {
        src: unsplash("1567538096630-e0c55bd6374c"),
        alt: "Sala com sofá de linho cru voltado para a janela e mesa de centro em freijó",
        papel: "ampla",
        pecas: [
          "sofa-heron-linho-cru",
          "mesa-de-centro-seixo-freijo",
          "poltrona-lina-linho-cru",
        ],
      },
      {
        src: unsplash("1594026112284-02bb6f3352fe"),
        alt: "Estante em freijó junto ao aparador de mármore, na parede oposta à janela",
        papel: "detalhe",
        pecas: ["estante-cais-freijo", "aparador-pedra-marmore-cru"],
      },
      {
        src: unsplash("1513506003901-1e6a229e2d15"),
        alt: "Mesa de apoio em mármore com a banqueta de carvalho encostada",
        papel: "detalhe",
        pecas: ["mesa-de-apoio-luar-marmore-cru", "banqueta-seixo-carvalho"],
      },
    ],
    passagens: [
      "A sala foi montada para o fim do dia, não para o meio. O sofá ficou de frente para a janela e não de costas, porque a luz rasante revela a trama do linho cru em vez de apagá-la. A mesa de centro em freijó tem o tampo baixo o bastante para não cortar essa faixa de luz.",
      "A parede oposta recebe o que a tarde já não alcança. A estante e o aparador de mármore trabalham na sombra, e por isso puderam ser as peças de mais peso visual do cômodo. É a mesma lógica da coleção Reboco: tons de cal para uma casa que recebe pouca luz direta.",
    ],
  },
  {
    slug: "o-quarto-como-abrigo",
    titulo: "O quarto como abrigo",
    resumo:
      "Menos peças, mais silêncio: o argumento para esvaziar o cômodo em que se dorme.",
    ambiente: "quarto",
    ordem: 2,
    thumb: {
      src: unsplash("1583847268964-b28dc8f51f92"),
      alt: "Quarto de poucas peças, com a cama afastada da parede da janela",
    },
    abertura:
      "Um quarto cheio pede atenção na hora em que a atenção deveria estar acabando. Esvaziá-lo é uma decisão de sono, não de estética.",
    fotos: [
      {
        src: unsplash("1505693416388-ac5ce068fe85"),
        alt: "Cama de linho cru com cabeceira estofada e criado-mudo em freijó ao lado",
        papel: "ampla",
        pecas: [
          "cama-nuvem-linho-cru",
          "cabeceira-vela-linho-areia",
          "criado-mudo-seixo-freijo",
        ],
      },
      {
        src: unsplash("1595526114035-0d45ed16cfbf"),
        alt: "Cômoda de carvalho com o criado-mudo de nogueira à sua direita",
        papel: "detalhe",
        pecas: ["comoda-vargem-carvalho", "criado-mudo-luar-nogueira"],
      },
      {
        src: unsplash("1540932239986-30128078f3c5"),
        alt: "Poltrona de linho no canto de leitura, diante do guarda-roupa ripado",
        papel: "detalhe",
        pecas: ["poltrona-lina-linho-cru", "guarda-roupa-ripado-freijo"],
      },
    ],
    passagens: [
      "São sete peças no cômodo inteiro, e nenhuma delas guarda o que poderia estar em outro lugar da casa. A cama ficou afastada da parede da janela para que a luz da manhã chegue ao pé e não ao rosto. A cabeceira em linho areia é a única superfície macia acima da altura do colchão.",
      "O canto de leitura existe porque a poltrona já servia à sala e serve aqui pelo mesmo motivo: é a peça que muda de cômodo sem mudar de função. O guarda-roupa ripado fecha a parede oposta e é o único volume alto do quarto, o que mantém o teto onde ele está.",
    ],
  },
  {
    slug: "a-cozinha-que-recebe",
    titulo: "A cozinha que recebe",
    resumo: "Quando a mesa da cozinha passa a ser a mesa da casa.",
    ambiente: "cozinha",
    ordem: 3,
    thumb: {
      src: unsplash("1598300042247-d088f8ab3a91"),
      alt: "Mesa de cozinha posta para o fim da tarde, com cadeiras de palhinha",
    },
    abertura:
      "A sala de jantar da casa brasileira foi ficando cerimoniosa e vazia. A mesa da cozinha absorveu o que ela deixou de fazer.",
    fotos: [
      {
        src: unsplash("1556909212-d5b604d0c90d"),
        alt: "Mesa de jatobá com cadeiras de palhinha e uma banqueta de carvalho na ponta",
        papel: "ampla",
        pecas: [
          "mesa-taipa-jatoba",
          "cadeira-junco-palhinha-freijo",
          "banqueta-seixo-carvalho",
        ],
      },
      {
        src: unsplash("1600585154340-be6161a56a0c"),
        alt: "Armário de carvalho ao lado do carrinho de aço carvão, junto à bancada",
        papel: "detalhe",
        pecas: ["armario-cais-carvalho", "carrinho-roldana-aco-carvao"],
      },
      {
        src: unsplash("1567016432779-094069958ea5"),
        alt: "Mesa de apoio em mármore com a cadeira de rattan cru encostada na parede",
        papel: "detalhe",
        pecas: ["mesa-de-apoio-luar-marmore-cru", "cadeira-vime-rattan-cru"],
      },
    ],
    passagens: [
      "A mesa de jatobá tem 180 cm e trabalha todos os dias, o que é diferente de trabalhar aos domingos. O tampo maciço aceita marca, e a cor amadurece nos primeiros meses; depois disso ela estabiliza e para de contar o que aconteceu em cima dele. As cadeiras de palhinha somam pouco peso porque saem do lugar várias vezes por refeição.",
      "A banqueta na ponta é a cadeira a mais que sempre falta e nunca justifica uma sexta cadeira. O carrinho de aço carvão faz o mesmo em outra direção: sai da parede quando a cozinha recebe e volta quando ela não recebe. Nenhuma das duas peças ocupa lugar fixo, e é isso que as torna úteis.",
    ],
  },
  {
    slug: "trabalhar-em-silencio",
    titulo: "Trabalhar em silêncio",
    resumo:
      "Uma escrivaninha, uma luminária, uma cadeira — e o resto é disciplina.",
    ambiente: "escritorio",
    ordem: 4,
    thumb: {
      src: unsplash("1524758631624-e2822e304c36"),
      alt: "Escrivaninha de carvalho vazia, com a luminária acesa no canto",
    },
    abertura:
      "Um escritório em casa não compete com o escritório da empresa em equipamento. Compete em silêncio, e o silêncio se monta com poucas peças.",
    fotos: [
      {
        src: unsplash("1593062096033-9a26b09da705"),
        alt: "Escrivaninha de carvalho diante da estante de nogueira, com cadeira de couro argila",
        papel: "ampla",
        pecas: [
          "escrivaninha-cais-carvalho",
          "cadeira-de-trabalho-orla-couro-argila",
          "estante-mirante-nogueira",
        ],
      },
      {
        src: unsplash("1507473885765-e6ed057f782c"),
        alt: "Luminária de cerâmica cru acesa ao lado da luminária de palhinha apagada",
        papel: "detalhe",
        pecas: [
          "luminaria-de-mesa-seixo-ceramica-cru",
          "luminaria-de-mesa-junco-palhinha",
        ],
      },
      {
        src: unsplash("1555041469-a586c61ea9bc"),
        alt: "Escrivaninha estreita de freijó com a cadeira de carvalho recolhida sob o tampo",
        papel: "detalhe",
        pecas: [
          "escrivaninha-vau-freijo",
          "cadeira-de-trabalho-ripado-carvalho",
        ],
      },
    ],
    passagens: [
      "A escrivaninha está de lado para a janela, e não de frente nem de costas. De frente a tela recebe o contraluz; de costas, o reflexo. De lado a luz cai no papel pela esquerda, e a luminária de cerâmica cru cobre o resto da mesa depois das seis.",
      "A estante de nogueira fica atrás e não ao lado, porque o que está atrás não entra no campo de visão de quem trabalha. A segunda escrivaninha, mais estreita, mostra que o cômodo funciona com metade da superfície — a mesa grande é conforto, não requisito.",
    ],
  },
];
