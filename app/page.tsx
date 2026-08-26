import { Hero } from "@/components/home/abertura";
import { Collection } from "@/components/home/collection";
import { Environments } from "@/components/home/environments";
import { ProductsRow } from "@/components/home/products-row";
import { ProductsSpread } from "@/components/home/products-spread";
import { colecoes } from "@/data";
import { getAnchorsByEnvironment, getReadyToShip } from "@/lib/catalog";

export default function Home() {
  const readyToShip = getReadyToShip();
  const anchors = getAnchorsByEnvironment();
  const featuredCollection = colecoes[0];

  return (
    <>
      <Hero />

      <Environments />

      <ProductsRow
        eyebrow="Pronta entrega"
        title="Disponível agora"
        note="Peças prontas em estoque, sem prazo de produção."
        products={readyToShip}
        action={{ href: "/produtos", label: "Ver todos os móveis" }}
      />

      <Collection collection={featuredCollection} />

      <ProductsSpread
        eyebrow="Um de cada ambiente"
        title="A peça que define o cômodo"
        note="A maior superfície do ambiente decide a escala de tudo o que entra depois. Escolha essa primeiro."
        items={anchors}
        action={{ href: "/produtos", label: "Ver todos os móveis" }}
      />
    </>
  );
}
