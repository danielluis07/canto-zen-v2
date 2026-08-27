export type Environment = {
  slug: string;
  label: string;
  types: string[];
  image: {
    src: string;
    alt: string;
  };
  description: string;
};

export type ProductTypes = {
  slug: string;
  label: string;
  singularLabel: string;
};

export type Product = {
  slug: string;
  name: string;
  family: string;
  finish: string;
  type: string;
  mainEnvironment: string;
  environments: string[];
  collections: string[];
  order: number;

  tablePrice: number;
  discountPrice?: number;

  extraMeasurements: {
    label: string;
    value: number;
    unit: "cm" | "kg" | "un";
  }[];

  availability: "immediate-shipment" | "made-to-order" | "out-of-stock";
  productionWeeks?: number;

  freeShipping?: "national" | "southeast" | "sp-capital";

  images: {
    src: string;
    alt: string;
    role: "main" | "environment" | "detail";
    dimensions: ("width" | "height")[];
  }[];
  description: string;
  warrantyMonths?: number;
};

export type ProductFamily = {
  slug: string;
  name: string;
  measurements: {
    width: number;
    depth: number;
    height: number;
  };
};

export type Color = { slug: string; label: string; sample: string };

export type Material = { slug: string; label: string; precautions: string };

export type Collection = {
  slug: string;
  nome: string;
  descricao: string;
  imagem: {
    src: string;
    alt: string;
  };
  produtos: string[];
};

export type ArticlePhoto = {
  src: string;
  alt: string;
  /** "ampla" takes the full width of the page; "detalhe" stays inside the
   *  reading column, at the width of the paragraph it follows. */
  papel: "ampla" | "detalhe";
  /** Slugs of the pieces standing in the frame. This is the join between the
   *  editorial and the catalog, and it is read in both directions. */
  pecas: string[];
  /** The line printed under the photograph. It says what the frame is doing;
   *  the alt text says what is in it. */
  legenda: string;
};

/** One movement of the argument: a subhead, the paragraphs that make the
 *  claim, and the single photograph that shows it. */
export type ArticlePart = {
  titulo: string;
  paragrafos: string[];
  foto: ArticlePhoto;
};

export type Article = {
  slug: string;
  titulo: string;
  resumo: string;
  ambiente: string;
  ordem: number;
  /** The photograph the journal index leads with, and the one the article
   *  opens on — the reader lands on the image they clicked. */
  thumb: {
    src: string;
    alt: string;
  };
  /** The standfirst: the article's first line, set in the display face. */
  abertura: string;
  partes: ArticlePart[];
  /** The last line, before the catalog takes over again. */
  fecho: string;
};
