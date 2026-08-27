import { unsplash } from "@/lib/utils";
import type { Article } from "@/types";

/**
 * The Diário. Every article is scoped to one room, because the room is the
 * catalog's primary axis and the reader arrived through one.
 *
 * Each article is three parts, and each part carries exactly one photograph:
 * the subhead makes a claim, the paragraphs argue it, the photograph shows it.
 * Every photograph names the pieces standing in it by catalog slug, so the
 * editorial and the catalog can be read in either direction and neither is
 * free to drift from the other.
 *
 * The copy states measurements, finishes, production times and care notes as
 * they are on file. A figure invented here would contradict the product page
 * one click away.
 */
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
    partes: [
      {
        titulo: "O sofá de frente para a janela",
        paragrafos: [
          "A sala foi montada para o fim do dia, e não para o meio dele. O Sofá Héron ficou de frente para a janela em vez de costas para ela, porque a luz rasante atravessa o linho cru e levanta a trama; de costas, o mesmo tecido vira uma superfície lisa, sem nenhuma informação. É uma decisão de textura, tomada por causa do horário.",
          "A Mesa de Centro Seixo tem 34 cm de altura, o que a deixa inteira abaixo da faixa de luz que cruza o cômodo às cinco. O tampo em freijó recebe essa luz de raspão e devolve o veio. Uma mesa mais alta entraria na frente do sofá e cortaria a faixa no meio, o que resolveria o apoio e estragaria a hora.",
          "A Poltrona Lina fecha o ângulo com 78 cm de largura — pouco, para uma poltrona de sala. Foi por isso que ela pôde ficar perto da janela sem disputar o vão com o sofá. São seis semanas de produção para o Héron e quatro para a Lina: o estofado da sala chega antes das madeiras.",
        ],
        foto: {
          src: unsplash("1567538096630-e0c55bd6374c"),
          alt: "Sala com sofá de linho cru voltado para a janela e mesa de centro em freijó",
          papel: "ampla",
          pecas: [
            "sofa-heron-linho-cru",
            "mesa-de-centro-seixo-freijo",
            "poltrona-lina-linho-cru",
          ],
          legenda:
            "A faixa de luz das cinco passa acima do tampo da mesa de centro e atravessa o linho do sofá pela lateral.",
        },
      },
      {
        titulo: "A parede que a tarde não alcança",
        paragrafos: [
          "A parede oposta à janela recebe o que a tarde já não alcança, e é exatamente por isso que ela pôde receber as duas peças de mais peso visual do cômodo. A Estante Cais tem 200 cm de altura por 180 de largura; o Aparador Pedra soma outros 175 cm de mármore cru na mesma parede. Juntos são quase quatro metros de volume, e na sombra esse volume não pesa.",
          "É o raciocínio da coleção Reboco — tons de cal para uma casa que recebe pouca luz direta — aplicado a uma parede em vez de a uma casa inteira. O mármore cru devolve o pouco que sobra da tarde e mantém o canto claro depois que o sol já saiu do eixo da janela.",
          "A pedra cobra por isso uma atenção que a madeira não cobra: líquido derramado sai na hora, porque ácido marca, e a peça pede impermeabilização a cada dois anos. O freijó da estante pede pano seco e nada mais.",
        ],
        foto: {
          src: unsplash("1594026112284-02bb6f3352fe"),
          alt: "Estante em freijó junto ao aparador de mármore, na parede oposta à janela",
          papel: "detalhe",
          pecas: ["estante-cais-freijo", "aparador-pedra-marmore-cru"],
          legenda:
            "Quase quatro metros de parede em duas peças, na única face do cômodo que nunca recebe sol direto.",
        },
      },
      {
        titulo: "As duas peças que não têm lugar fixo",
        paragrafos: [
          "Sobram duas peças pequenas, e nenhuma das duas tem lugar fixo. A Mesa de Apoio Luar tem 74 cm de altura — a altura de um braço de sofá e um pouco mais — e serve à poltrona ou ao sofá conforme quem senta e a que horas.",
          "A Banqueta Seixo, 40 × 40 cm em carvalho, é o assento a mais quando chega gente e o apoio de livro quando não chega. É a peça mais barata da sala e a que muda de função mais vezes por semana. Está em pronta entrega, o que também diz alguma coisa: é o tipo de peça que se compra depois, com o cômodo já montado e faltando exatamente isso.",
        ],
        foto: {
          src: unsplash("1513506003901-1e6a229e2d15"),
          alt: "Mesa de apoio em mármore com a banqueta de carvalho encostada",
          papel: "detalhe",
          pecas: ["mesa-de-apoio-luar-marmore-cru", "banqueta-seixo-carvalho"],
          legenda:
            "As duas peças móveis da sala, paradas no lugar em que estavam quando a foto foi feita.",
        },
      },
    ],
    fecho:
      "Uma sala montada para as cinco da tarde funciona às onze da manhã. O contrário quase nunca é verdade.",
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
    partes: [
      {
        titulo: "Sete peças, e nenhuma a mais",
        paragrafos: [
          "São sete peças no cômodo inteiro, e nenhuma delas guarda o que poderia estar guardado em outro lugar da casa. Não há caixa de documento, não há mala, não há o objeto que se deixa ali por não saber onde pôr. Essa é a regra do cômodo, e todo o resto é consequência dela.",
          "A Cama Nuvem tem 172 cm de largura por 208 de comprimento e ficou afastada da parede da janela, para que a luz da manhã chegue ao pé e não ao rosto. É a única peça que não pode ser deslocada depois: tudo o mais foi posicionado em relação a ela.",
          "A Cabeceira Vela, em linho areia, é a única superfície macia acima da altura do colchão — 100 cm de altura por 10 de profundidade, encostada na parede sem roubar o cômodo. O Criado-mudo Seixo ao lado tem 55 cm, o que deixa o abajur na linha do livro e não na linha dos olhos de quem já está deitado.",
        ],
        foto: {
          src: unsplash("1505693416388-ac5ce068fe85"),
          alt: "Cama de linho cru com cabeceira estofada e criado-mudo em freijó ao lado",
          papel: "ampla",
          pecas: [
            "cama-nuvem-linho-cru",
            "cabeceira-vela-linho-areia",
            "criado-mudo-seixo-freijo",
          ],
          legenda:
            "A cama afastada da parede da janela, com a cabeceira de linho areia como única superfície macia acima do colchão.",
        },
      },
      {
        titulo: "O que a madeira guarda",
        paragrafos: [
          "A Cômoda Vargem substitui metade do guarda-roupa e é a razão de o quarto caber em sete peças. São 110 cm de largura por 82 de altura em carvalho maciço, e a altura foi escolhida para que o tampo sirva de apoio a quem está de pé — não para que se olhe por cima dele.",
          "O Criado-mudo Luar, do outro lado da cama, é de nogueira e não repete o primeiro. São madeiras diferentes e envelhecem diferente: a nogueira escurece com a luz, e isso é próprio dela. Daqui a cinco anos os dois criados-mudos não vão ter a mesma cor, e o quarto não fica pior por causa disso.",
        ],
        foto: {
          src: unsplash("1595526114035-0d45ed16cfbf"),
          alt: "Cômoda de carvalho com o criado-mudo de nogueira à sua direita",
          papel: "detalhe",
          pecas: ["comoda-vargem-carvalho", "criado-mudo-luar-nogueira"],
          legenda:
            "Carvalho e nogueira na mesma parede, fotografados no primeiro ano — antes de a nogueira começar a escurecer.",
        },
      },
      {
        titulo: "O canto de leitura e o único volume alto",
        paragrafos: [
          "A Poltrona Lina já servia à sala e serve aqui pelo mesmo motivo: é a peça que muda de cômodo sem mudar de função. Ocupa 78 × 82 cm no canto mais distante da cama, que é o único lugar do quarto onde ficar acordado não atrapalha quem dorme.",
          "O Guarda-roupa Ripado fecha a parede restante e é o único volume alto do cômodo: 220 cm, quase até o teto, em freijó. As portas são ripadas porque 180 cm de porta lisa viram um painel, e um painel dessa altura baixa o teto do quarto inteiro. A ripa devolve uma escala de madeira ao volume.",
          "São oito semanas de produção — o prazo mais longo do cômodo. É a peça que se encomenda primeiro e se recebe por último.",
        ],
        foto: {
          src: unsplash("1540932239986-30128078f3c5"),
          alt: "Poltrona de linho no canto de leitura, diante do guarda-roupa ripado",
          papel: "detalhe",
          pecas: ["poltrona-lina-linho-cru", "guarda-roupa-ripado-freijo"],
          legenda:
            "O canto de leitura, no ponto do quarto mais distante da cama, contra os 220 cm do guarda-roupa.",
        },
      },
    ],
    fecho:
      "Um quarto vazio não é um quarto inacabado. É um quarto que terminou antes.",
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
    partes: [
      {
        titulo: "A mesa que trabalha todo dia",
        paragrafos: [
          "A Mesa Taipa tem 150 cm de comprimento e trabalha todos os dias, o que é bem diferente de trabalhar aos domingos. O tampo é jatobá maciço e aceita marca: a cor amadurece nos primeiros meses e depois estabiliza, e daí em diante a madeira para de contar o que aconteceu em cima dela.",
          "Quatro Cadeiras Junco cabem nos 150 cm com folga. O assento é palhinha sobre estrutura de freijó, e o conjunto pesa pouco de propósito — uma cadeira de cozinha sai do lugar várias vezes por refeição, e o peso que impressiona na loja atrapalha em casa.",
          "A Banqueta Seixo na ponta é a cadeira a mais que sempre falta e nunca justifica uma quinta cadeira igual. São 40 × 40 cm em carvalho, em pronta entrega. É a peça que resolve o jantar em que apareceu mais gente do que o combinado.",
        ],
        foto: {
          src: unsplash("1556909212-d5b604d0c90d"),
          alt: "Mesa de jatobá com cadeiras de palhinha e uma banqueta de carvalho na ponta",
          papel: "ampla",
          pecas: [
            "mesa-taipa-jatoba",
            "cadeira-junco-palhinha-freijo",
            "banqueta-seixo-carvalho",
          ],
          legenda:
            "Cento e cinquenta centímetros de jatobá, as cadeiras de palhinha e a banqueta que faz o quinto lugar.",
        },
      },
      {
        titulo: "O que sai da parede quando a cozinha recebe",
        paragrafos: [
          "O Armário Cais tem 215 cm de altura e ocupa o lugar da despensa que a cozinha não tem. É a única peça fixa do cômodo depois da mesa, e por isso foi a primeira a ser posicionada: tudo o que se guarda ficou de um lado só, o que deixa a outra metade da cozinha livre para circular durante um jantar.",
          "O Carrinho Roldana faz o contrário. São 56 cm de largura em aço carvão e nenhum lugar fixo: sai da parede quando a cozinha recebe e volta quando ela não recebe. A pintura eletrostática não pede polimento nem cera — é a única peça do cômodo que não pede manutenção nenhuma, e a única que não é de madeira.",
        ],
        foto: {
          src: unsplash("1600585154340-be6161a56a0c"),
          alt: "Armário de carvalho ao lado do carrinho de aço carvão, junto à bancada",
          papel: "detalhe",
          pecas: ["armario-cais-carvalho", "carrinho-roldana-aco-carvao"],
          legenda:
            "O volume fixo e o volume móvel da cozinha, lado a lado na parede em que os dois descansam.",
        },
      },
      {
        titulo: "Duas superfícies para quando a mesa não basta",
        paragrafos: [
          "A Mesa de Apoio Luar entra quando a mesa principal já está posta e ainda falta lugar para o que não é comida. Tem 74 cm de altura contra os 76 da Mesa Taipa: dois centímetros de diferença, o bastante para as duas lerem como uma superfície contínua quando ficam encostadas, e não como dois móveis diferentes.",
          "A Cadeira Vime fica na parede e não à mesa. É a cadeira que se puxa, a mais leve da casa, em rattan cru — que pede pano úmido, secagem à sombra e um ambiente que não seja seco demais, senão a fibra ressecada começa a soltar. É pouca exigência para uma peça de 48 cm que passa o dia sem ninguém sentado nela.",
        ],
        foto: {
          src: unsplash("1567016432779-094069958ea5"),
          alt: "Mesa de apoio em mármore com a cadeira de rattan cru encostada na parede",
          papel: "detalhe",
          pecas: ["mesa-de-apoio-luar-marmore-cru", "cadeira-vime-rattan-cru"],
          legenda:
            "As duas peças que só entram em cena quando a mesa enche, guardadas contra a parede no resto do tempo.",
        },
      },
    ],
    fecho:
      "A sala de jantar cerimoniosa continua existindo em muitas casas. Quase nenhuma delas janta lá.",
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
    partes: [
      {
        titulo: "A mesa de lado para a janela",
        paragrafos: [
          "A Escrivaninha Cais está de lado para a janela, e não de frente nem de costas. De frente, a tela recebe o contraluz; de costas, recebe o reflexo. De lado, a luz cai no papel pela esquerda e não cruza a tela em nenhuma hora do dia.",
          "São 160 × 70 cm de tampo em carvalho maciço a 78 cm do chão. A profundidade de 70 cm é o que permite manter meio metro de mesa vazio na frente do teclado, que é o espaço em que se escreve à mão sem empurrar nada para o lado.",
          "A Cadeira de Trabalho Orla é de couro argila. O couro pede hidratação a cada seis meses e não gosta de sol direto — mais um motivo para a mesa estar de lado para a janela e não debaixo dela. Atrás da cadeira, e não ao lado, fica a Estante Mirante: 200 cm de nogueira, a peça mais escura do cômodo e a única que não entra no campo de visão de quem está trabalhando.",
        ],
        foto: {
          src: unsplash("1593062096033-9a26b09da705"),
          alt: "Escrivaninha de carvalho diante da estante de nogueira, com cadeira de couro argila",
          papel: "ampla",
          pecas: [
            "escrivaninha-cais-carvalho",
            "cadeira-de-trabalho-orla-couro-argila",
            "estante-mirante-nogueira",
          ],
          legenda:
            "A mesa de lado para a janela e a estante atrás de quem senta — a única parede do cômodo que não se olha durante o expediente.",
        },
      },
      {
        titulo: "Duas luminárias, uma acesa",
        paragrafos: [
          "Depois das seis a janela para de trabalhar e a mesa passa a depender de uma peça de 42 cm. A Luminária de Mesa Seixo, em cerâmica cru, cobre o tampo inteiro a partir do canto: é luz de tarefa, apontada para baixo, e é a única acesa na foto.",
          "A Luminária de Mesa Junco está apagada porque quase sempre está. A palhinha filtra e espalha em vez de concentrar, o que serve ao cômodo e não ao papel. Duas luminárias na mesma mesa não são redundância — uma ilumina o trabalho e a outra ilumina a sala em que o trabalho acontece, e elas raramente ficam acesas juntas.",
        ],
        foto: {
          src: unsplash("1507473885765-e6ed057f782c"),
          alt: "Luminária de cerâmica cru acesa ao lado da luminária de palhinha apagada",
          papel: "detalhe",
          pecas: [
            "luminaria-de-mesa-seixo-ceramica-cru",
            "luminaria-de-mesa-junco-palhinha",
          ],
          legenda:
            "Cerâmica acesa, palhinha apagada: luz de tarefa e luz de ambiente na mesma superfície, às sete da noite.",
        },
      },
      {
        titulo: "A metade que também funciona",
        paragrafos: [
          "A Escrivaninha Vau tem 130 × 60 cm — trinta centímetros a menos de largura e dez a menos de profundidade que a Cais — e o cômodo funciona igual com ela. Está em pronta entrega, contra seis semanas da mesa maior: é a peça que se compra quando o escritório precisa existir antes do fim do mês.",
          "A Cadeira de Trabalho Ripado acompanha, com 48 cm de largura — a mais estreita das duas cadeiras de trabalho do catálogo, em carvalho. O encosto vazado deixa ver a parede atrás dela, o que importa num cômodo pequeno: uma cadeira sólida a mais é um volume a mais no campo de visão.",
        ],
        foto: {
          src: unsplash("1555041469-a586c61ea9bc"),
          alt: "Escrivaninha estreita de freijó com a cadeira de carvalho recolhida sob o tampo",
          papel: "detalhe",
          pecas: [
            "escrivaninha-vau-freijo",
            "cadeira-de-trabalho-ripado-carvalho",
          ],
          legenda:
            "A mesma rotina em trinta centímetros a menos de mesa, com a cadeira de encosto ripado recolhida.",
        },
      },
    ],
    fecho:
      "Silêncio não é ausência de som. Num escritório, é ausência de coisa no campo de visão.",
  },
];
