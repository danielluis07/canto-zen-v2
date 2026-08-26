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

export type Article = {
  slug: string;
  titulo: string;
  resumo: string;
  ambiente: string;
  ordem: number;
  thumb: {
    src: string;
    alt: string;
  };
  abertura: string;
  fotos: {
    src: string;
    alt: string;
    papel: "ampla" | "detalhe";
    pecas: string[];
  }[];
  passagens: [string, string];
};
