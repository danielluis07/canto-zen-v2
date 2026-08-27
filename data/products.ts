import { unsplash } from "@/lib/utils";
import type { Product, ProductTypes } from "@/types";

export const productTypes: ProductTypes[] = [
  { slug: "sofas", label: "Sofás", singularLabel: "Sofá" },
  { slug: "poltronas", label: "Poltronas", singularLabel: "Poltrona" },
  {
    slug: "mesas-de-centro",
    label: "Mesas de centro",
    singularLabel: "Mesa de centro",
  },
  {
    slug: "mesas-de-jantar",
    label: "Mesas de jantar",
    singularLabel: "Mesa de jantar",
  },
  {
    slug: "racks-e-estantes",
    label: "Racks e estantes",
    singularLabel: "Rack",
  },
  { slug: "aparadores", label: "Aparadores", singularLabel: "Aparador" },
  { slug: "camas", label: "Camas", singularLabel: "Cama" },
  { slug: "cabeceiras", label: "Cabeceiras", singularLabel: "Cabeceira" },
  {
    slug: "criados-mudos",
    label: "Criados-mudos",
    singularLabel: "Criado-mudo",
  },
  { slug: "comodas", label: "Cômodas", singularLabel: "Cômoda" },
  {
    slug: "guarda-roupas",
    label: "Guarda-roupas",
    singularLabel: "Guarda-roupa",
  },
  { slug: "mesas", label: "Mesas", singularLabel: "Mesa" },
  { slug: "cadeiras", label: "Cadeiras", singularLabel: "Cadeira" },
  { slug: "banquetas", label: "Banquetas", singularLabel: "Banqueta" },
  { slug: "armarios", label: "Armários", singularLabel: "Armário" },
  {
    slug: "carrinhos-e-apoios",
    label: "Carrinhos e apoios",
    singularLabel: "Carrinho",
  },
  {
    slug: "escrivaninhas",
    label: "Escrivaninhas",
    singularLabel: "Escrivaninha",
  },
  {
    slug: "cadeiras-de-trabalho",
    label: "Cadeiras de trabalho",
    singularLabel: "Cadeira de trabalho",
  },
  { slug: "estantes", label: "Estantes", singularLabel: "Estante" },
  {
    slug: "luminarias-de-mesa",
    label: "Luminárias de mesa",
    singularLabel: "Luminária de mesa",
  },
];

export const products: Product[] = [
  // §3.1 row 1 — the hero: cotas ['largura'], multi-volume embalagem, freteGratis
  {
    slug: "sofa-heron-linho-cru",
    name: "Sofá Héron",
    family: "sofa-heron",
    finish: "Linho Cru",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["reboco"],
    order: 1,
    tablePrice: 980000,
    extraMeasurements: [
      { label: "Altura do assento", value: 42, unit: "cm" },
      { label: "Quantidade de lugares", value: 3, unit: "un" },
      { label: "Quantidade de almofadas", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    freeShipping: "southeast",
    images: [
      {
        src: "/images/products/sofa-heron-linho-cru.webp",
        alt: "Sofá Héron em linho cru sobre reboco",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "Um sofá de três lugares em linho cru, feito para a permanência longa da sala. A estrutura em carvalho maciço é montada com cavilhas e encaixes de espiga, e o enchimento das almofadas combina espuma de densidade média com pluma siliconada. Fica bem encostado à parede mais longa, onde a largura de 220 cm ainda deixa passagem de cada lado.",
  },

  // §3.1 row 2 — the hero's second finish: same família, same geometry
  {
    slug: "sofa-heron-boucle-areia",
    name: "Sofá Héron",
    family: "sofa-heron",
    finish: "Bouclé Areia",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 2,
    tablePrice: 1140000,
    extraMeasurements: [
      { label: "Altura do assento", value: 42, unit: "cm" },
      { label: "Quantidade de lugares", value: 3, unit: "un" },
      { label: "Quantidade de almofadas", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/sofa-heron-boucle-areia.webp",
        alt: "Sofá Héron em bouclé areia sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um sofá de três lugares em bouclé areia, com a mesma estrutura em carvalho maciço do acabamento em linho. A lã é presa por grampeamento oculto sob o rodapé, e as quinas levam costura dupla porque é onde a trama abre primeiro. Pede a parede mais longa da sala, com passagem livre dos dois lados.",
  },

  // §3.1 row 3 — precoDe, one of the three pieces §3.8 marks down
  {
    slug: "sofa-orla-linho-areia",
    name: "Sofá Orla",
    family: "sofa-orla",
    finish: "Linho Areia",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 3,
    tablePrice: 760000,
    discountPrice: 890000,
    extraMeasurements: [
      { label: "Altura do assento", value: 41, unit: "cm" },
      { label: "Quantidade de lugares", value: 3, unit: "un" },
      { label: "Quantidade de almofadas", value: 4, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/sofa-orla-linho-areia.webp",
        alt: "Sofá Orla em linho areia sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um sofá de três lugares em linho areia, dimensionado para salas em que a circulação conta mais que o volume. O braço é estreito e a estrutura interna em carvalho leva cavilhas nos encontros, o que mantém o encosto firme sem travessa aparente. Cabe na parede de uma sala pequena e ainda deixa espaço para uma mesa de apoio.",
  },

  // §3.1 row 4 — esgotado: no CTA, and the fields that stay populated anyway
  {
    slug: "sofa-taipa-couro-argila",
    name: "Sofá Taipa",
    family: "sofa-taipa",
    finish: "Couro Argila",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 4,
    tablePrice: 1420000,
    extraMeasurements: [
      { label: "Altura do assento", value: 44, unit: "cm" },
      { label: "Quantidade de lugares", value: 4, unit: "un" },
      { label: "Quantidade de almofadas", value: 6, unit: "un" },
    ],
    availability: "out-of-stock",
    freeShipping: "national",
    images: [
      {
        src: "/images/products/sofa-taipa-couro-argila.webp",
        alt: "Sofá Taipa em couro argila sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um sofá de quatro lugares em couro natural argila, dimensionado para salas que recebem muita gente. O couro é curtido ao vegetal e costurado com pesponto aparente nas laterais, que é onde o assento cede primeiro e onde a linha reforça. Ocupa a parede inteira de uma sala média e pede circulação de 70 cm à frente.",
  },

  // §3.1 row 5
  {
    slug: "sofa-maruja-linho-carvao",
    name: "Sofá Marujá",
    family: "sofa-maruja",
    finish: "Linho Carvão",
    type: "sofas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 5,
    tablePrice: 840000,
    extraMeasurements: [
      { label: "Altura do assento", value: 43, unit: "cm" },
      { label: "Quantidade de lugares", value: 3, unit: "un" },
      { label: "Quantidade de almofadas", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/sofa-maruja-linho-carvao.webp",
        alt: "Sofá Marujá em linho carvão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um sofá de três lugares em linho carvão, feito para quem usa a sala à noite e quer a peça recuada no ambiente. O enchimento do assento combina espuma firme e manta acrílica, e o tecido é destacável nas almofadas do encosto. Fica bem no centro da sala, de costas para a passagem, sobre um tapete que o ancora.",
  },

  // §3.1 row 6 — produto.md's own example: all three papel roles, two ambientes,
  // and the carve-out família whose two acabamentos must be visibly different
  {
    slug: "poltrona-lina-linho-cru",
    name: "Poltrona Lina",
    family: "poltrona-lina",
    finish: "Linho Cru",
    type: "poltronas",
    mainEnvironment: "sala",
    environments: ["sala", "quarto"],
    collections: ["reboco"],
    order: 6,
    tablePrice: 389000,
    extraMeasurements: [
      { label: "Altura do assento", value: 42, unit: "cm" },
      { label: "Capacidade de peso", value: 120, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/poltrona-lina-linho-cru.webp",
        alt: "Poltrona Lina em linho cru sobre reboco",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "Uma poltrona de leitura em linho cru, com assento a 42 cm do chão e braços baixos. O encosto é curvado a vapor sobre lâminas de carvalho, uma peça única que dispensa emenda na altura do ombro. Encontra lugar no canto que recebe a luz da tarde, ao lado de uma mesa de apoio e de um abajur.",
  },

  // §3.1 row 7 — the second finish: identical medidas, different everything
  // else. Its placeholder is deliberately unlike row 6's — `imagens.md` §10.3.
  {
    slug: "poltrona-lina-boucle-carvalho",
    name: "Poltrona Lina",
    family: "poltrona-lina",
    finish: "Bouclé Carvalho",
    type: "poltronas",
    mainEnvironment: "sala",
    environments: ["sala", "quarto"],
    collections: [],
    order: 7,
    tablePrice: 420000,
    extraMeasurements: [
      { label: "Altura do assento", value: 42, unit: "cm" },
      { label: "Capacidade de peso", value: 120, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/poltrona-lina-boucle-carvalho.webp",
        alt: "Poltrona Lina em bouclé carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma poltrona de leitura em bouclé de lã, com o mesmo assento a 42 cm e os mesmos braços baixos do acabamento em linho. A trama do bouclé é fechada por costura dupla nas quinas, onde o tecido sofre mais, e o carvalho aparece só nos pés. Combina com salas de piso claro, em que a lã ganha volume contra a parede.",
  },

  // §3.1 row 8
  {
    slug: "poltrona-sagui-couro-nogueira",
    name: "Poltrona Saguí",
    family: "poltrona-sagui",
    finish: "Couro Nogueira",
    type: "poltronas",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 8,
    tablePrice: 560000,
    extraMeasurements: [
      { label: "Altura do assento", value: 44, unit: "cm" },
      { label: "Capacidade de peso", value: 130, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/poltrona-sagui-couro-nogueira.webp",
        alt: "Poltrona Saguí em couro nogueira sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma poltrona de braços largos em couro natural, pensada para a leitura longa e para o descanso depois dela. O couro é curtido ao vegetal e costurado em painéis, o que permite trocar um deles anos depois sem refazer a peça inteira. Ocupa o canto da sala sem pedir mesa nem apoio ao lado.",
  },

  // §3.1 row 9 — the envio-imediato half of carrinho.md's divergent-prazo pair
  {
    slug: "mesa-de-centro-seixo-freijo",
    name: "Mesa de Centro Seixo",
    family: "mesa-de-centro-seixo",
    finish: "Freijó",
    type: "mesas-de-centro",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 9,
    tablePrice: 240000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/mesa-de-centro-seixo-freijo.webp",
        alt: "Mesa de Centro Seixo em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de centro em freijó maciço, baixa o bastante para não competir com a linha do assento. O tampo é colado em lâminas alternadas contra o empeno, e os pés entram por encaixe cônico, sem ferragem à vista. Fica à frente do sofá, a cerca de quarenta centímetros, onde o alcance do braço resolve.",
  },

  // §3.1 row 10 — coleção Reboco
  {
    slug: "mesa-de-centro-luar-marmore-off-white",
    name: "Mesa de Centro Luar",
    family: "mesa-de-centro-luar",
    finish: "Mármore Off-white",
    type: "mesas-de-centro",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["reboco"],
    order: 10,
    tablePrice: 490000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: "/images/products/mesa-de-centro-luar-marmore-off-white.webp",
        alt: "Mesa de Centro Luar em mármore off-white sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de centro com tampo em mármore off-white sobre base em carvalho, para salas de pouca luz direta. O mármore é lapidado com o topo levemente boleado, acabamento que evita a lasca na quina e mostra o veio na espessura. Ancora a área do sofá e aceita bandeja, livro e copo sem parecer cheia.",
  },

  // §3.1 row 11
  {
    slug: "mesa-de-centro-vau-jatoba",
    name: "Mesa de Centro Vau",
    family: "mesa-de-centro-vau",
    finish: "Jatobá",
    type: "mesas-de-centro",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 11,
    tablePrice: 310000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/mesa-de-centro-vau-jatoba.webp",
        alt: "Mesa de Centro Vau em jatobá sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de centro em jatobá maciço, de proporção alongada para acompanhar sofás de três lugares. As bordas são chanfradas a plaina manual, e o tampo repousa sobre travessas encaixadas em espiga passante, visível nas laterais. Fica bem entre o sofá e a estante, onde o comprimento resolve a passagem sem esbarrão.",
  },

  // §3.1 row 12 — the mesa-de-jantar pair's first acabamento
  {
    slug: "mesa-de-jantar-vargem-carvalho",
    name: "Mesa de Jantar Vargem",
    family: "mesa-de-jantar-vargem",
    finish: "Carvalho",
    type: "mesas-de-jantar",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 12,
    tablePrice: 890000,
    extraMeasurements: [
      { label: "Quantidade de lugares", value: 8, unit: "un" },
      { label: "Espessura do tampo", value: 4, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/mesa-de-jantar-vargem-carvalho.webp",
        alt: "Mesa de Jantar Vargem em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de jantar em carvalho maciço para oito lugares, dimensionada para a refeição que se estende depois do prato. O tampo é montado em réguas alternadas pelo veio e recebe óleo, não verniz, para que um risco possa ser lixado no lugar. Pede a parte mais larga da sala, com sessenta centímetros livres em volta.",
  },

  // §3.1 row 13 — the second finish: same família, same geometry
  {
    slug: "mesa-de-jantar-vargem-nogueira",
    name: "Mesa de Jantar Vargem",
    family: "mesa-de-jantar-vargem",
    finish: "Nogueira",
    type: "mesas-de-jantar",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 13,
    tablePrice: 960000,
    extraMeasurements: [
      { label: "Quantidade de lugares", value: 8, unit: "un" },
      { label: "Espessura do tampo", value: 4, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: "/images/products/mesa-de-jantar-vargem-nogueira.webp",
        alt: "Mesa de Jantar Vargem em nogueira sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de jantar em nogueira maciça para oito lugares, com a mesma estrutura do acabamento em carvalho e um tom bem mais escuro. A nogueira é selecionada por veio contínuo entre as réguas do tampo, emenda que só aparece de perto. Serve à sala que já tem madeira clara no piso e pede contraste na altura da mesa.",
  },

  // §3.1 row 14 — coleção Serra, freteGratis sudeste
  {
    slug: "mesa-de-jantar-ilhota-jatoba",
    name: "Mesa de Jantar Ilhota",
    family: "mesa-de-jantar-ilhota",
    finish: "Jatobá",
    type: "mesas-de-jantar",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["serra"],
    order: 14,
    tablePrice: 1280000,
    extraMeasurements: [
      { label: "Quantidade de lugares", value: 10, unit: "un" },
      { label: "Espessura do tampo", value: 5, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    freeShipping: "southeast",
    images: [
      {
        src: "/images/products/mesa-de-jantar-ilhota-jatoba.webp",
        alt: "Mesa de Jantar Ilhota em jatobá sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de jantar em jatobá maciço para dez lugares, feita para a casa que recebe com frequência. O tampo tem cinco centímetros de espessura e é sustentado por duas vigas encaixadas em rabo de andorinha, sem pé no meio do vão. Ocupa a sala inteira de jantar e dispensa aparador para servir, porque sobra tampo.",
  },

  // §3.1 row 15
  {
    slug: "estante-cais-freijo",
    name: "Estante Cais",
    family: "estante-cais",
    finish: "Freijó",
    type: "racks-e-estantes",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 15,
    tablePrice: 640000,
    extraMeasurements: [
      { label: "Prateleiras", value: 5, unit: "un" },
      { label: "Capacidade por prateleira", value: 30, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/estante-cais-freijo.webp",
        alt: "Estante Cais em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma estante alta em freijó maciço, com cinco prateleiras para livros e peças que ficam à vista. As prateleiras são encaixadas em rasgos usinados nos montantes, o que dispensa cantoneira e mantém o vão limpo de ferragem. Vai contra a parede sem janela da sala, onde a altura não disputa com a luz.",
  },

  // §3.1 row 16 — precoDe
  {
    slug: "rack-varjao-carvalho",
    name: "Rack Varjão",
    family: "rack-varjao",
    finish: "Carvalho",
    type: "racks-e-estantes",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 16,
    tablePrice: 520000,
    discountPrice: 590000,
    extraMeasurements: [
      { label: "Prateleiras", value: 4, unit: "un" },
      { label: "Capacidade por prateleira", value: 25, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/rack-varjao-carvalho.webp",
        alt: "Rack Varjão em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um móvel vertical em carvalho, com quatro prateleiras e passagem de fiação no fundo de cada nível. Os montantes são de madeira maciça e as costas em painel ripado, que ventila o equipamento sem deixar o cabo à mostra. Fica na parede oposta ao sofá e organiza a televisão e o que vive embaixo dela.",
  },

  // §3.1 row 17 — the room's only aço piece
  {
    slug: "estante-tramo-aco-carvao",
    name: "Estante Tramo",
    family: "estante-tramo",
    finish: "Aço Carvão",
    type: "racks-e-estantes",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 17,
    tablePrice: 410000,
    extraMeasurements: [
      { label: "Prateleiras", value: 4, unit: "un" },
      { label: "Capacidade por prateleira", value: 40, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/estante-tramo-aco-carvao.webp",
        alt: "Estante Tramo em aço carvão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma estante em aço carbono com pintura eletrostática carvão, de linha fina para não pesar visualmente na sala. Os montantes são perfis dobrados de dois milímetros e as prateleiras apoiam em abas rebitadas, montagem que aceita carga sem entortar. Serve o canto estreito ao lado da janela, onde a madeira ficaria maciça demais.",
  },

  // §3.1 row 18 — coleção Serra
  {
    slug: "aparador-sereno-carvalho",
    name: "Aparador Sereno",
    family: "aparador-sereno",
    finish: "Carvalho",
    type: "aparadores",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["serra"],
    order: 18,
    tablePrice: 460000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/aparador-sereno-carvalho.webp",
        alt: "Aparador Sereno em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um aparador em carvalho maciço, com duas portas e altura de apoio para servir de pé. As portas correm sobre trilho embutido no tampo inferior, solução que dispensa puxador e mantém a frente inteira lisa. Fica no corredor de circulação da sala, onde guarda a louça que não cabe na cozinha.",
  },

  // §3.1 row 19 — coleção Reboco
  {
    slug: "aparador-pedra-marmore-cru",
    name: "Aparador Pedra",
    family: "aparador-pedra",
    finish: "Mármore Cru",
    type: "aparadores",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: ["reboco"],
    order: 19,
    tablePrice: 720000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/aparador-pedra-marmore-cru.webp",
        alt: "Aparador Pedra em mármore cru sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um aparador com tampo em mármore cru sobre corpo em carvalho, dimensionado para a parede longa da sala. O tampo é impermeabilizado de fábrica e a espessura mostra o veio na quina, que é onde a pedra costuma ser cortada rente. Recebe o que chega da rua com a gente e a bandeja que serve a mesa ao lado.",
  },

  // §3.1 row 20
  {
    slug: "aparador-junco-palhinha-freijo",
    name: "Aparador Junco",
    family: "aparador-junco",
    finish: "Palhinha e Freijó",
    type: "aparadores",
    mainEnvironment: "sala",
    environments: ["sala"],
    collections: [],
    order: 20,
    tablePrice: 340000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/aparador-junco-palhinha-freijo.webp",
        alt: "Aparador Junco em palhinha e freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um aparador em freijó com portas em palhinha trançada, leve o bastante para uma sala pequena. A palhinha é montada sobre caixilho ranhurado e pode ser refeita sem trocar a porta, técnica que o atelier mantém em toda a linha. Vai atrás do sofá ou sob um quadro, onde a trama respira contra a parede.",
  },

  // §3.2 row 21 — the room's full-coverage piece: all three papel roles, and
  // the only cota §7.3's budget spends in Quarto
  {
    slug: "cama-nuvem-linho-cru",
    name: "Cama Nuvem",
    family: "cama-nuvem",
    finish: "Linho Cru",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 21,
    tablePrice: 820000,
    extraMeasurements: [
      { label: "Altura do estrado", value: 30, unit: "cm" },
      { label: "Colchão recomendado", value: 158, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/cama-nuvem-linho-cru.webp",
        alt: "Cama Nuvem em linho cru sobre reboco",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "Uma cama de casal em linho cru, com cabeceira estofada alta o bastante para servir de encosto na leitura da noite. O estofamento é grampeado por trás do caixilho e o estrado apoia em travessas de carvalho, sem parafuso à vista na face interna. Ocupa a parede oposta à janela, onde a cabeceira clara devolve a pouca luz que entra.",
  },

  // §3.2 row 22 — the second finish: same família, same geometry
  {
    slug: "cama-nuvem-boucle-areia",
    name: "Cama Nuvem",
    family: "cama-nuvem",
    finish: "Bouclé Areia",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 22,
    tablePrice: 910000,
    extraMeasurements: [
      { label: "Altura do estrado", value: 30, unit: "cm" },
      { label: "Colchão recomendado", value: 158, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/cama-nuvem-boucle-areia.webp",
        alt: "Cama Nuvem em bouclé areia sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cama de casal em bouclé areia, com a mesma cabeceira alta e o mesmo estrado em carvalho do acabamento em linho. A lã é montada sobre espuma de densidade média e a costura das quinas é dupla, porque é ali que a trama abre primeiro. Pede a parede oposta à janela, com passagem livre dos dois lados.",
  },

  // §3.2 row 23
  {
    slug: "cama-orvalho-carvalho",
    name: "Cama Orvalho",
    family: "cama-orvalho",
    finish: "Carvalho",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 23,
    tablePrice: 740000,
    extraMeasurements: [
      { label: "Altura do estrado", value: 26, unit: "cm" },
      { label: "Colchão recomendado", value: 158, unit: "cm" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cama-orvalho-carvalho.webp",
        alt: "Cama Orvalho em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cama baixa em carvalho maciço, de cabeceira curta, para quartos em que o pé-direito pede horizontalidade. As travessas encaixam por espiga e cavilha, sem ferragem aparente, e o estrado ripado dispensa base de molas sob o colchão. Fica bem centralizada na parede, com espaço para um criado-mudo de cada lado.",
  },

  // §3.2 row 24
  {
    slug: "cama-tatami-freijo",
    name: "Cama Tatami",
    family: "cama-tatami",
    finish: "Freijó",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 24,
    tablePrice: 680000,
    extraMeasurements: [
      { label: "Altura do estrado", value: 20, unit: "cm" },
      { label: "Colchão recomendado", value: 138, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/cama-tatami-freijo.webp",
        alt: "Cama Tatami em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cama de plataforma em freijó, rente ao chão, desenhada para quartos pequenos que ganham com o volume baixo. A base avança dez centímetros além do colchão e funciona como apoio, e as ripas do estrado são encaixadas uma a uma no caixilho. Assenta bem sobre tapete, num quarto em que o piso conta tanto quanto as paredes.",
  },

  // §3.2 row 25 — freteGratis sudeste, §3.8
  {
    slug: "cama-abrigo-couro-argila",
    name: "Cama Abrigo",
    family: "cama-abrigo",
    finish: "Couro Argila",
    type: "camas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 25,
    tablePrice: 1350000,
    extraMeasurements: [
      { label: "Altura do estrado", value: 34, unit: "cm" },
      { label: "Colchão recomendado", value: 193, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    freeShipping: "southeast",
    images: [
      {
        src: "/images/products/cama-abrigo-couro-argila.webp",
        alt: "Cama Abrigo em couro argila sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cama king em couro natural argila, de cabeceira envolvente, feita para o quarto que é o cômodo mais usado da casa. O couro é curtido ao vegetal e costurado com pesponto aparente nas laterais da cabeceira, que é onde a peça encosta e marca. Pede a parede mais longa do quarto e circulação de setenta centímetros dos dois lados.",
  },

  // §3.2 row 26 — coleção reboco
  {
    slug: "cabeceira-vela-linho-areia",
    name: "Cabeceira Vela",
    family: "cabeceira-vela",
    finish: "Linho Areia",
    type: "cabeceiras",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: ["reboco"],
    order: 26,
    tablePrice: 320000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cabeceira-vela-linho-areia.webp",
        alt: "Cabeceira Vela em linho areia sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cabeceira estofada em linho areia, para quem já tem a cama e quer só o encosto. O painel é montado sobre compensado naval de dezoito milímetros e fixado à parede por francesa, o que mantém a peça flutuando acima do colchão. Vai atrás de uma cama baixa, onde a altura de cem centímetros ainda cabe sob a moldura da janela.",
  },

  // §3.2 row 27 — the second finish: identical medidas, own slug and preço
  {
    slug: "cabeceira-vela-boucle-cru",
    name: "Cabeceira Vela",
    family: "cabeceira-vela",
    finish: "Bouclé Cru",
    type: "cabeceiras",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 27,
    tablePrice: 360000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/cabeceira-vela-boucle-cru.webp",
        alt: "Cabeceira Vela em bouclé cru sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cabeceira estofada em bouclé cru, com o mesmo painel e a mesma fixação do acabamento em linho. A lã é esticada sobre espuma firme e presa por grampeamento oculto na face de trás, sem costura na frente que interrompa a trama. Fica acima de uma cama baixa, contra a parede que recebe a luz de lado.",
  },

  // §3.2 row 28
  {
    slug: "cabeceira-ripado-carvalho",
    name: "Cabeceira Ripado",
    family: "cabeceira-ripado",
    finish: "Carvalho",
    type: "cabeceiras",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 28,
    tablePrice: 440000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/cabeceira-ripado-carvalho.webp",
        alt: "Cabeceira Ripado em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cabeceira ripada em carvalho maciço, para o quarto que quer a marcenaria à vista em vez do estofado. Cada ripa é encaixada em ranhura no caixilho e não leva cola, de modo que a madeira trabalhe com a umidade sem abrir fresta. Ocupa a parede inteira atrás da cama e dispensa quadro acima.",
  },

  // §3.2 row 29
  {
    slug: "criado-mudo-seixo-freijo",
    name: "Criado-mudo Seixo",
    family: "criado-mudo-seixo",
    finish: "Freijó",
    type: "criados-mudos",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 29,
    tablePrice: 185000,
    extraMeasurements: [
      { label: "Quantidade de gavetas", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/criado-mudo-seixo-freijo.webp",
        alt: "Criado-mudo Seixo em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um criado-mudo em freijó com uma gaveta, dimensionado para caber ao lado de camas baixas. A gaveta corre em corrediça de madeira sobre guias fresadas no próprio corpo, sem metal, e o puxador é um rebaixo no topo da frente. Fica ao lado da cama, na altura em que o abajur ilumina a página sem acordar o outro lado.",
  },

  // §3.2 row 30
  {
    slug: "criado-mudo-luar-nogueira",
    name: "Criado-mudo Luar",
    family: "criado-mudo-luar",
    finish: "Nogueira",
    type: "criados-mudos",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 30,
    tablePrice: 230000,
    extraMeasurements: [
      { label: "Quantidade de gavetas", value: 2, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 3,
    images: [
      {
        src: "/images/products/criado-mudo-luar-nogueira.webp",
        alt: "Criado-mudo Luar em nogueira sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um criado-mudo em nogueira com duas gavetas, um pouco mais alto que o usual para acompanhar camas de estrado elevado. As gavetas correm sobre corrediças ocultas e o topo leva um rebaixo de dois centímetros, que segura o que se apoia ali durante a noite. Fica ao lado da cama, onde a madeira escura recorta contra a parede clara.",
  },

  // §3.2 row 31 — cross-listed into sala, §3.6: it reads as a side table
  {
    slug: "criado-mudo-junco-palhinha",
    name: "Criado-mudo Junco",
    family: "criado-mudo-junco",
    finish: "Palhinha e Freijó",
    type: "criados-mudos",
    mainEnvironment: "quarto",
    environments: ["quarto", "sala"],
    collections: [],
    order: 31,
    tablePrice: 168000,
    extraMeasurements: [
      { label: "Quantidade de gavetas", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/criado-mudo-junco-palhinha.webp",
        alt: "Criado-mudo Junco em palhinha e freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um criado-mudo em freijó com frente de gaveta em palhinha trançada, leve o bastante para ser levado a outro cômodo. A palhinha é montada sobre caixilho ranhurado e pode ser refeita sem trocar a frente, técnica que o atelier mantém em toda a linha. Serve de apoio ao lado da cama e também de mesa lateral na sala.",
  },

  // §3.2 row 32
  {
    slug: "comoda-vargem-carvalho",
    name: "Cômoda Vargem",
    family: "comoda-vargem",
    finish: "Carvalho",
    type: "comodas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 32,
    tablePrice: 580000,
    extraMeasurements: [
      { label: "Quantidade de gavetas", value: 5, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: "/images/products/comoda-vargem-carvalho.webp",
        alt: "Cômoda Vargem em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cômoda em carvalho maciço com cinco gavetas, para o quarto que não tem armário embutido suficiente. As laterais são unidas ao tampo por rabo de andorinha à vista, e o fundo é encaixado em ranhura em vez de pregado. Fica na parede lateral do quarto, onde o tampo ainda serve de apoio para o que se tira do bolso.",
  },

  // §3.2 row 33 — coleção serra
  {
    slug: "comoda-tramo-nogueira",
    name: "Cômoda Tramo",
    family: "comoda-tramo",
    finish: "Nogueira",
    type: "comodas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: ["serra"],
    order: 33,
    tablePrice: 690000,
    extraMeasurements: [
      { label: "Quantidade de gavetas", value: 6, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/comoda-tramo-nogueira.webp",
        alt: "Cômoda Tramo em nogueira sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cômoda em nogueira com seis gavetas em duas colunas, para quartos de casal em que a roupa dobrada não cabe no armário. Cada gaveta corre sobre guias de madeira encerada e a frente é lisa, sem puxador, aberta pelo rebaixo inferior. Ocupa a parede lateral e aceita um espelho acima, se o quarto pedir.",
  },

  // §3.2 row 34 — the room's esgotado piece, §3.8
  {
    slug: "comoda-bruma-freijo",
    name: "Cômoda Bruma",
    family: "comoda-bruma",
    finish: "Freijó",
    type: "comodas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 34,
    tablePrice: 470000,
    extraMeasurements: [
      { label: "Quantidade de gavetas", value: 4, unit: "un" },
    ],
    availability: "out-of-stock",
    images: [
      {
        src: "/images/products/comoda-bruma-freijo.webp",
        alt: "Cômoda Bruma em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cômoda em freijó com quatro gavetas, a menor da linha, para quartos estreitos ou para servir de apoio ao trocador. O corpo é montado com cavilhas e o tampo tem três centímetros de espessura, o que mantém a peça firme mesmo com todas as gavetas abertas. Encosta na parede menor do quarto, ao lado da porta.",
  },

  // §3.2 row 35 — freteGratis nacional, §3.8, and the catalogue's largest box
  {
    slug: "guarda-roupa-cais-carvalho",
    name: "Guarda-roupa Cais",
    family: "guarda-roupa-cais",
    finish: "Carvalho",
    type: "guarda-roupas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 35,
    tablePrice: 1560000,
    extraMeasurements: [
      { label: "Quantidade de portas", value: 5, unit: "un" },
      { label: "Prateleiras internas", value: 10, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 10,
    freeShipping: "national",
    images: [
      {
        src: "/images/products/guarda-roupa-cais-carvalho.webp",
        alt: "Guarda-roupa Cais em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um guarda-roupa em carvalho maciço com cinco portas, o maior da linha, para o quarto que dispensa marcenaria planejada. As portas correm em dobradiça de canivete e o interior combina prateleiras removíveis com dois cabideiros, montados sobre a mesma ranhura. Ocupa uma parede inteira e pede pé-direito de dois metros e meio.",
  },

  // §3.2 row 36
  {
    slug: "guarda-roupa-ripado-freijo",
    name: "Guarda-roupa Ripado",
    family: "guarda-roupa-ripado",
    finish: "Freijó",
    type: "guarda-roupas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 36,
    tablePrice: 1190000,
    extraMeasurements: [
      { label: "Quantidade de portas", value: 4, unit: "un" },
      { label: "Prateleiras internas", value: 6, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/guarda-roupa-ripado-freijo.webp",
        alt: "Guarda-roupa Ripado em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um guarda-roupa em freijó com quatro portas ripadas, para o quarto que quer ventilação natural na roupa guardada. As ripas são encaixadas em ranhura no caixilho da porta e deixam passar o ar sem mostrar o que está dentro. Ocupa a parede oposta à cama, onde a trama vertical alonga o cômodo.",
  },

  // §3.2 row 37
  {
    slug: "guarda-roupa-bruma-nogueira",
    name: "Guarda-roupa Bruma",
    family: "guarda-roupa-bruma",
    finish: "Nogueira",
    type: "guarda-roupas",
    mainEnvironment: "quarto",
    environments: ["quarto"],
    collections: [],
    order: 37,
    tablePrice: 1320000,
    extraMeasurements: [
      { label: "Quantidade de portas", value: 4, unit: "un" },
      { label: "Prateleiras internas", value: 8, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/guarda-roupa-bruma-nogueira.webp",
        alt: "Guarda-roupa Bruma em nogueira sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um guarda-roupa em nogueira com quatro portas lisas, sem puxador, para quem quer o volume o mais silencioso possível. A abertura é por toque e as portas assentam sobre batente de feltro, o que elimina o estalo que uma porta de armário costuma dar. Fica na parede oposta à cama, onde a madeira escura fecha o cômodo sem pesar.",
  },

  // §3.3 row 38
  {
    slug: "mesa-taipa-jatoba",
    name: "Mesa Taipa",
    family: "mesa-taipa",
    finish: "Jatobá",
    type: "mesas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 38,
    tablePrice: 620000,
    extraMeasurements: [
      { label: "Quantidade de lugares", value: 6, unit: "un" },
      { label: "Espessura do tampo", value: 4, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: "/images/products/mesa-taipa-jatoba.webp",
        alt: "Mesa Taipa em jatobá sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de cozinha em jatobá maciço, dimensionada para seis lugares e para o uso diário de uma casa que come junto. O tampo é formado por lâminas coladas em sentidos alternados, arranjo que segura o empeno quando a madeira responde à umidade da pia próxima. Ocupa o centro do cômodo e aceita ser encostada à parede quando a passagem aperta.",
  },

  // §3.3 row 39
  {
    slug: "mesa-orla-carvalho",
    name: "Mesa Orla",
    family: "mesa-orla",
    finish: "Carvalho",
    type: "mesas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 39,
    tablePrice: 540000,
    extraMeasurements: [
      { label: "Quantidade de lugares", value: 4, unit: "un" },
      { label: "Espessura do tampo", value: 3, unit: "cm" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/mesa-orla-carvalho.webp",
        alt: "Mesa Orla em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de quatro lugares em carvalho, para cozinhas onde a refeição acontece no mesmo cômodo em que se cozinha. As pernas encaixam na saia por espiga passante, junta que dispensa ferragem e mantém o conjunto rígido depois de anos de arrasto. Cabe entre a bancada e a parede sem fechar a circulação em volta.",
  },

  // §3.3 row 40
  {
    slug: "mesa-pedra-marmore-carvao",
    name: "Mesa Pedra",
    family: "mesa-pedra",
    finish: "Mármore Carvão",
    type: "mesas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 40,
    tablePrice: 980000,
    extraMeasurements: [
      { label: "Quantidade de lugares", value: 6, unit: "un" },
      { label: "Espessura do tampo", value: 2, unit: "cm" },
    ],
    availability: "made-to-order",
    productionWeeks: 8,
    images: [
      {
        src: "/images/products/mesa-pedra-marmore-carvao.webp",
        alt: "Mesa Pedra em mármore carvão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de tampo em mármore carvão sobre duas laterais em carvalho maciço, para quem quer a superfície fria que a cozinha pede. A pedra é assentada sobre um quadro de madeira com folga calculada, porque o mármore e o carvalho não se movem na mesma medida ao longo do ano. Fica bem sob luz baixa, onde o polimento não estoura.",
  },

  // §3.3 row 41 — cross-listed, all three roles, opens the Cozinha article
  {
    slug: "cadeira-junco-palhinha-freijo",
    name: "Cadeira Junco",
    family: "cadeira-junco",
    finish: "Palhinha e Freijó",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha", "sala"],
    collections: [],
    order: 41,
    tablePrice: 148000,
    extraMeasurements: [
      { label: "Altura do assento", value: 46, unit: "cm" },
      { label: "Capacidade de peso", value: 110, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cadeira-junco-palhinha-freijo.webp",
        alt: "Cadeira Junco em palhinha e freijó sobre reboco",
        role: "main",
        dimensions: ["width"],
      },
    ],
    description:
      "Uma cadeira de jantar com assento em palhinha e estrutura em freijó, pensada para refeições longas à mesa. O assento é trançado sobre um caixilho ranhurado, técnica que mantém a palhinha esticada sem cola e permite refazer a trama anos depois. Serve à mesa da cozinha e também à mesa de jantar da sala, onde não destoa.",
  },

  // §3.3 row 42 — the second finish: same família and same geometry, but
  // not the same wood, because §8.1 makes an upholstered piece carvalho and its
  // palhinha sibling freijó. The coleção `serra` names this one of the two.
  {
    slug: "cadeira-junco-couro-argila",
    name: "Cadeira Junco",
    family: "cadeira-junco",
    finish: "Couro Argila",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: ["serra"],
    order: 42,
    tablePrice: 192000,
    extraMeasurements: [
      { label: "Altura do assento", value: 46, unit: "cm" },
      { label: "Capacidade de peso", value: 110, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/cadeira-junco-couro-argila.webp",
        alt: "Cadeira Junco em couro argila sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cadeira de jantar com assento em couro argila sobre estrutura em carvalho, para a mesa que recebe todos os dias. O couro é curtido ao vegetal e esticado sobre o caixilho ainda úmido, de modo que seca já na forma do assento e não afrouxa depois. Vai à mesa da cozinha e escurece devagar nos pontos de uso, como o couro faz.",
  },

  // §3.3 row 43 — the third and last precoDe piece §3.8 names
  {
    slug: "cadeira-vime-rattan-cru",
    name: "Cadeira Vime",
    family: "cadeira-vime",
    finish: "Rattan Cru",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 43,
    tablePrice: 124000,
    discountPrice: 148000,
    extraMeasurements: [
      { label: "Altura do assento", value: 44, unit: "cm" },
      { label: "Capacidade de peso", value: 100, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cadeira-vime-rattan-cru.webp",
        alt: "Cadeira Vime em rattan cru sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cadeira leve com encosto e assento em rattan cru sobre estrutura em carvalho, para a mesa que muda de lugar. O rattan é curvado a vapor e amarrado no encosto com fibra da própria planta, sem prego, que é o que deixa a peça ceder um pouco ao sentar. Empilha em canto de cozinha quando a casa recebe mais gente.",
  },

  // §3.3 row 44
  {
    slug: "cadeira-tramo-aco-carvao",
    name: "Cadeira Tramo",
    family: "cadeira-tramo",
    finish: "Aço Carvão",
    type: "cadeiras",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 44,
    tablePrice: 98000,
    extraMeasurements: [
      { label: "Altura do assento", value: 42, unit: "cm" },
      { label: "Capacidade de peso", value: 130, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/cadeira-tramo-aco-carvao.webp",
        alt: "Cadeira Tramo em aço carvão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cadeira de tubo em aço carvão com assento em carvalho, a peça mais direta do conjunto de cozinha. A estrutura é dobrada em um único tubo contínuo e soldada num ponto só, atrás do encosto, onde a solda não aparece nem incomoda as costas. Encaixa sob a bancada e some quando não está em uso.",
  },

  // §3.3 row 45 — cross-listed to sala, §3.6
  {
    slug: "banqueta-seixo-carvalho",
    name: "Banqueta Seixo",
    family: "banqueta-seixo",
    finish: "Carvalho",
    type: "banquetas",
    mainEnvironment: "cozinha",
    environments: ["cozinha", "sala"],
    collections: [],
    order: 45,
    tablePrice: 118000,
    extraMeasurements: [
      { label: "Altura do assento", value: 66, unit: "cm" },
      { label: "Capacidade de peso", value: 120, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/banqueta-seixo-carvalho.webp",
        alt: "Banqueta Seixo em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma banqueta em carvalho maciço com assento levemente escavado, para a bancada onde se toma café em pé. O assento é desbastado a goiva e depois lixado no sentido do veio, trabalho que deixa a superfície côncava sem marcar a madeira. Serve à cozinha e, fora dela, como apoio solto na sala.",
  },

  // §3.3 row 46
  {
    slug: "banqueta-vau-freijo",
    name: "Banqueta Vau",
    family: "banqueta-vau",
    finish: "Freijó",
    type: "banquetas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 46,
    tablePrice: 135000,
    extraMeasurements: [
      { label: "Altura do assento", value: 70, unit: "cm" },
      { label: "Capacidade de peso", value: 120, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: "/images/products/banqueta-vau-freijo.webp",
        alt: "Banqueta Vau em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma banqueta alta em freijó, pensada para bancadas mais altas que a média e para quem passa tempo em pé na cozinha. Os pés abrem alguns graus para fora e travam num anel de apoio, geometria que segura a peça quando o peso vai todo para um lado. Fica encostada à ilha e sai dali só quando chega visita.",
  },

  // §3.3 row 47
  {
    slug: "banqueta-tramo-aco-carvao",
    name: "Banqueta Tramo",
    family: "banqueta-tramo",
    finish: "Aço Carvão",
    type: "banquetas",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 47,
    tablePrice: 89000,
    extraMeasurements: [
      { label: "Altura do assento", value: 62, unit: "cm" },
      { label: "Capacidade de peso", value: 130, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: "/images/products/banqueta-tramo-aco-carvao.webp",
        alt: "Banqueta Tramo em aço carvão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma banqueta de tubo em aço carvão com assento em carvalho, a entrada do conjunto e a mais fácil de guardar. A pintura é eletrostática a pó e curada em estufa, camada que não descasca no ponto onde o pé raspa o travessão todos os dias. Vive sob a bancada e some inteira embaixo dela.",
  },

  // §3.3 row 48
  {
    slug: "armario-cais-carvalho",
    name: "Armário Cais",
    family: "armario-cais",
    finish: "Carvalho",
    type: "armarios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 48,
    tablePrice: 860000,
    extraMeasurements: [
      { label: "Quantidade de portas", value: 3, unit: "un" },
      { label: "Prateleiras internas", value: 8, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: unsplash("1616594039964-ae9021a400a0"),
        alt: "Armário Cais em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um armário alto de três portas em carvalho, para a louça e os secos que não cabem nos armários de parede. As portas correm sobre dobradiças embutidas com freio, e o topo é rebaixado alguns centímetros para não brigar com o forro. Encosta na parede mais livre da cozinha, onde a altura não corta a luz da janela.",
  },

  // §3.3 row 49
  {
    slug: "armario-ripado-freijo",
    name: "Armário Ripado",
    family: "armario-ripado",
    finish: "Freijó",
    type: "armarios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 49,
    tablePrice: 710000,
    extraMeasurements: [
      { label: "Quantidade de portas", value: 2, unit: "un" },
      { label: "Prateleiras internas", value: 6, unit: "un" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: unsplash("1631049307264-da0ec9d70304"),
        alt: "Armário Ripado em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um armário de duas portas em freijó, com as frentes ripadas que dão nome à família e deixam o ar circular por dentro. Cada ripa é encaixada em rasgo na travessa, uma a uma, e o espaçamento é o mesmo em toda a altura para o desenho não tropeçar. Guarda mantimentos secos e pede parede sem umidade atrás.",
  },

  // §3.3 row 50 — the one acabamento in the catalogue that names a finish
  // rather than a material; §8.1's structural clause supplies the wood
  {
    slug: "armario-bruma-off-white",
    name: "Armário Bruma",
    family: "armario-bruma",
    finish: "Laca Off-white",
    type: "armarios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 50,
    tablePrice: 630000,
    extraMeasurements: [
      { label: "Quantidade de portas", value: 2, unit: "un" },
      { label: "Prateleiras internas", value: 5, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1558211583-d26f610c1eb1"),
        alt: "Armário Bruma em laca off-white sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um armário de duas portas em laca off-white sobre estrutura em carvalho, para cozinhas que já têm madeira demais à vista. A laca é aplicada em três demãos com lixamento entre elas, e o acabamento fosco esconde marca de dedo melhor que qualquer brilho. Some contra a parede clara e devolve a atenção ao resto do cômodo.",
  },

  // §3.3 row 51
  {
    slug: "carrinho-roldana-aco-carvao",
    name: "Carrinho Roldana",
    family: "carrinho-roldana",
    finish: "Aço Carvão",
    type: "carrinhos-e-apoios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 51,
    tablePrice: 210000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1513506003901-1e6a229e2d15"),
        alt: "Carrinho Roldana em aço carvão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um carrinho de duas prateleiras em aço carvão, para levar louça, garrafas ou o café da manhã de um cômodo a outro. As rodas são de borracha maciça com trava em duas delas, o que basta para a peça ficar parada quando a bancada dela vira mesa. Guarda-se ao lado da geladeira, na folga que sempre sobra ali.",
  },

  // §3.3 row 52
  {
    slug: "carrinho-junco-rattan-cru",
    name: "Carrinho Junco",
    family: "carrinho-junco",
    finish: "Rattan Cru",
    type: "carrinhos-e-apoios",
    mainEnvironment: "cozinha",
    environments: ["cozinha"],
    collections: [],
    order: 52,
    tablePrice: 174000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1522708323590-d24dbb6b0267"),
        alt: "Carrinho Junco em rattan cru sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Um carrinho leve de duas prateleiras em rattan cru sobre estrutura em carvalho, para frutas, pães e o que fica à mão. As prateleiras são trançadas em trama aberta, que escoa migalha e deixa a fruta respirar em vez de suar sobre superfície fechada. Fica perto da janela, onde a luz atravessa a trama e desenha no chão.",
  },

  // §3.3 row 53 — cross-listed to sala, §3.6
  {
    slug: "mesa-de-apoio-luar-marmore-cru",
    name: "Mesa de Apoio Luar",
    family: "mesa-de-apoio-luar",
    finish: "Mármore Cru",
    type: "carrinhos-e-apoios",
    mainEnvironment: "cozinha",
    environments: ["cozinha", "sala"],
    collections: [],
    order: 53,
    tablePrice: 268000,
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: unsplash("1611967164521-abae8fba4668"),
        alt: "Mesa de Apoio Luar em mármore cru sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma mesa de apoio com tampo em mármore cru sobre coluna e base em carvalho, alta o bastante para servir ao lado de quem está sentado. O tampo é rebaixado no verso e encaixa na coluna por espiga, junta que dispensa cola e deixa a pedra assentar pelo próprio peso. Serve à cozinha ao lado da poltrona de leitura e à sala com a mesma naturalidade.",
  },

  // §3.4 row 54 — the room's full-coverage piece: all three papéis, and the
  // only cota Escritório spends (§7.2, §7.3). It opens the Escritório article.
  {
    slug: "escrivaninha-cais-carvalho",
    name: "Escrivaninha Cais",
    family: "escrivaninha-cais",
    finish: "Carvalho",
    type: "escrivaninhas",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 54,
    tablePrice: 590000,
    // §8.3's table assigns `escrivaninhas` no rows, so the tipo renders the
    // empty Medidas case — see the note in `derivacoes.ts`.
    extraMeasurements: [],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: unsplash("1524758631624-e2822e304c36"),
        alt: "Escrivaninha Cais em carvalho sobre reboco",
        role: "main",
        dimensions: ["width"],
      },
      {
        src: unsplash("1567016432779-094069958ea5"),
        alt: "Escrivaninha Cais em Escritório",
        role: "environment",
        dimensions: [],
      },
      {
        src: unsplash("1592078615290-033ee584e267"),
        alt: "O gaveteiro de três gavetas e o vão livre ao lado",
        role: "detail",
        dimensions: [],
      },
    ],
    description:
      "Uma escrivaninha de tampo largo em carvalho maciço, com gaveteiro de três gavetas de um lado e vão livre do outro. O tampo é montado em réguas coladas alternando o sentido do veio, o que impede a peça de empenar quando o cômodo seca. Encosta na parede ou fica solta no meio do escritório, porque o verso é acabado igual à frente.",
  },

  // §3.4 row 55
  {
    slug: "escrivaninha-vau-freijo",
    name: "Escrivaninha Vau",
    family: "escrivaninha-vau",
    finish: "Freijó",
    type: "escrivaninhas",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 55,
    tablePrice: 480000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1595526114035-0d45ed16cfbf"),
        alt: "Escrivaninha Vau em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma escrivaninha leve em freijó, apoiada em dois cavaletes que vencem o vão sem travessa no meio das pernas. As pernas encaixam no travessão por cavilha passante, junta que se aperta com o próprio peso do tampo e dispensa ferragem à vista. Cabe em quarto pequeno, onde uma mesa de trabalho precisa desaparecer quando o dia termina.",
  },

  // §3.4 row 56
  {
    slug: "escrivaninha-tramo-aco-carvao",
    name: "Escrivaninha Tramo",
    family: "escrivaninha-tramo",
    finish: "Aço Carvão",
    type: "escrivaninhas",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 56,
    tablePrice: 390000,
    extraMeasurements: [],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1513506003901-1e6a229e2d15"),
        alt: "Escrivaninha Tramo em aço carvão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma escrivaninha de estrutura tubular em aço carvão com tampo em carvalho, para quem quer a mesa de trabalho mais estreita que couber. A estrutura é dobrada em tubo contínuo e soldada só nos dois pontos de cruzamento, o que deixa a peça rígida sem ganhar volume. Fica bem contra a janela, onde a pintura fosca não devolve reflexo à tela.",
  },

  // §3.4 row 57
  {
    slug: "cadeira-de-trabalho-orla-couro-argila",
    name: "Cadeira de Trabalho Orla",
    family: "cadeira-de-trabalho-orla",
    finish: "Couro Argila",
    type: "cadeiras-de-trabalho",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 57,
    tablePrice: 420000,
    extraMeasurements: [
      { label: "Altura do assento", value: 48, unit: "cm" },
      { label: "Capacidade de peso", value: 120, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 5,
    images: [
      {
        src: unsplash("1503602642458-232111445657"),
        alt: "Cadeira de Trabalho Orla em couro argila sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cadeira de trabalho com assento e encosto em couro argila sobre base giratória, para o expediente que passa das quatro horas sentado. O couro é curtido ao vegetal e costurado sobre espuma de densidade alta, que cede no primeiro mês e depois guarda a forma de quem senta. Fica na escrivaninha e gira para a estante atrás sem que ninguém se levante.",
  },

  // §3.4 row 58
  {
    slug: "cadeira-de-trabalho-junco-palhinha-freijo",
    name: "Cadeira de Trabalho Junco",
    family: "cadeira-de-trabalho-junco",
    finish: "Palhinha e Freijó",
    type: "cadeiras-de-trabalho",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 58,
    tablePrice: 260000,
    extraMeasurements: [
      { label: "Altura do assento", value: 44, unit: "cm" },
      { label: "Capacidade de peso", value: 100, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1506439773649-6e0eb8cfb237"),
        alt: "Cadeira de Trabalho Junco em palhinha e freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cadeira de trabalho com assento em palhinha e estrutura em freijó, para a mesa que também é escrivaninha em casa. O assento é trançado sobre caixilho ranhurado e respira, o que muda a temperatura de uma tarde inteira sentado sem que ninguém repare no motivo. Serve ao escritório e volta para a mesa de jantar quando a casa recebe.",
  },

  // §3.4 row 59
  {
    slug: "cadeira-de-trabalho-ripado-carvalho",
    name: "Cadeira de Trabalho Ripado",
    family: "cadeira-de-trabalho-ripado",
    finish: "Carvalho",
    type: "cadeiras-de-trabalho",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 59,
    tablePrice: 310000,
    extraMeasurements: [
      { label: "Altura do assento", value: 46, unit: "cm" },
      { label: "Capacidade de peso", value: 110, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 4,
    images: [
      {
        src: unsplash("1586023492125-27b2c045efd7"),
        alt: "Cadeira de Trabalho Ripado em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma cadeira de trabalho com encosto ripado em carvalho maciço, desenhada para quem escreve à mão e apoia pouco as costas. As ripas são torneadas uma a uma e encaixadas em rasgo, com folga calculada para a madeira trabalhar sem abrir junta no inverno. Fica na escrivaninha e não destoa quando é puxada para a sala numa noite cheia.",
  },

  // §3.4 row 60
  {
    slug: "estante-bruma-freijo",
    name: "Estante Bruma",
    family: "estante-bruma",
    finish: "Freijó",
    type: "estantes",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 60,
    tablePrice: 510000,
    extraMeasurements: [
      { label: "Prateleiras", value: 4, unit: "un" },
      { label: "Capacidade por prateleira", value: 25, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 6,
    images: [
      {
        src: unsplash("1594620302200-9a762244a156"),
        alt: "Estante Bruma em freijó sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma estante estreita em freijó, de quatro prateleiras, para o canto de parede que sobra ao lado da escrivaninha. As prateleiras correm em rasgo usinado nas laterais e travam por cavilha, de modo que a peça não precisa de fundo para ficar em esquadro. Encosta na parede e some, que é o serviço de uma estante num cômodo pequeno.",
  },

  // §3.4 row 61
  {
    slug: "estante-vargem-carvalho",
    name: "Estante Vargem",
    family: "estante-vargem",
    finish: "Carvalho",
    type: "estantes",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 61,
    tablePrice: 570000,
    extraMeasurements: [
      { label: "Prateleiras", value: 5, unit: "un" },
      { label: "Capacidade por prateleira", value: 30, unit: "kg" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1558211583-d26f610c1eb1"),
        alt: "Estante Vargem em carvalho sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma estante de cinco prateleiras em carvalho maciço, com montante central que divide os vãos e sustenta o peso de livro em fila cheia. As prateleiras têm vinte e cinco milímetros de espessura e vão encaixadas em malhete, junta que segura sem parafuso e não cede com o tempo. Fica atrás da mesa, ao alcance de quem está sentado.",
  },

  // §3.4 row 62 — cross-listed to sala, §3.6, and one of `serra`'s five
  {
    slug: "estante-mirante-nogueira",
    name: "Estante Mirante",
    family: "estante-mirante",
    finish: "Nogueira",
    type: "estantes",
    mainEnvironment: "escritorio",
    environments: ["escritorio", "sala"],
    collections: ["serra"],
    order: 62,
    tablePrice: 660000,
    extraMeasurements: [
      { label: "Prateleiras", value: 6, unit: "un" },
      { label: "Capacidade por prateleira", value: 35, unit: "kg" },
    ],
    availability: "made-to-order",
    productionWeeks: 7,
    images: [
      {
        src: unsplash("1594026112284-02bb6f3352fe"),
        alt: "Estante Mirante em nogueira sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma estante alta em nogueira, de seis prateleiras em três vãos, para a parede inteira de quem tem mais livro do que espaço. Os montantes atravessam as prateleiras de ponta a ponta e são a única peça estrutural, o que deixa o desenho com uma linha vertical contínua. Serve ao escritório e à sala com o mesmo desembaraço, e ancora as duas.",
  },

  // §3.4 row 63 — the third esgotado, §3.8, and the room's only one
  {
    slug: "luminaria-de-mesa-farol-latao",
    name: "Luminária de Mesa Farol",
    family: "luminaria-de-mesa-farol",
    finish: "Latão",
    type: "luminarias-de-mesa",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 63,
    tablePrice: 142000,
    extraMeasurements: [
      { label: "Alcance do braço", value: 24, unit: "cm" },
      { label: "Soquete", value: 1, unit: "un" },
    ],
    availability: "out-of-stock",
    images: [
      {
        src: unsplash("1550226891-ef816aed4a98"),
        alt: "Luminária de Mesa Farol em latão sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma luminária de mesa em latão com base em carvalho, de corpo fechado em quatro faces, que joga a luz para baixo e não para os olhos de quem trabalha. O latão é deixado sem verniz de propósito, porque a patina que se forma nos primeiros anos é o acabamento pretendido. Fica na quina da escrivaninha, onde marca o canto de leitura.",
  },

  // §3.4 row 64 — one of `reboco`'s six
  {
    slug: "luminaria-de-mesa-seixo-ceramica-cru",
    name: "Luminária de Mesa Seixo",
    family: "luminaria-de-mesa-seixo",
    finish: "Cerâmica Cru",
    type: "luminarias-de-mesa",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: ["reboco"],
    order: 64,
    tablePrice: 98000,
    extraMeasurements: [
      { label: "Alcance do braço", value: 16, unit: "cm" },
      { label: "Soquete", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1540574163026-643ea20ade25"),
        alt: "Luminária de Mesa Seixo em cerâmica cru sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma luminária de mesa com base em cerâmica cru torneada e cúpula sobre haste curta em carvalho, para luz difusa ao lado do papel. A cerâmica é queimada em alta temperatura e esmaltada só por dentro, de modo que a superfície externa fica seca ao toque e não brilha sob a lâmpada. Fica na escrivaninha ou no criado-mudo, e pesa o bastante para não andar.",
  },

  // §3.4 row 65 — montagem.necessaria false, entry price, principal only
  {
    slug: "luminaria-de-mesa-junco-palhinha",
    name: "Luminária de Mesa Junco",
    family: "luminaria-de-mesa-junco",
    finish: "Palhinha",
    type: "luminarias-de-mesa",
    mainEnvironment: "escritorio",
    environments: ["escritorio"],
    collections: [],
    order: 65,
    tablePrice: 76000,
    extraMeasurements: [
      { label: "Alcance do braço", value: 18, unit: "cm" },
      { label: "Soquete", value: 1, unit: "un" },
    ],
    availability: "immediate-shipment",
    images: [
      {
        src: unsplash("1533090161767-e6ffed986c88"),
        alt: "Luminária de Mesa Junco em palhinha sobre reboco",
        role: "main",
        dimensions: [],
      },
    ],
    description:
      "Uma luminária de mesa com cúpula em palhinha trançada e base em carvalho, para luz de leitura pontual. A palhinha é trançada à mão sobre um aro de madeira, e a trama aberta deixa passar o desenho da luz na parede atrás. Fica sobre a escrivaninha ou o criado-mudo, onde o alcance de 18 cm cobre a área de trabalho sem invadir o resto.",
  },
];
