import Image from "next/image";

import { WidthRuler } from "@/components/home/product-details";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

function Frame({
  image,
  ratio,
  rulerWidth,
  priority,
}: {
  image: Product["images"][number];
  ratio: "4/5" | "4/3";
  rulerWidth?: number | null;
  priority?: boolean;
}) {
  return (
    <figure className="relative border-t border-line pt-9">
      <div
        className={cn(
          "piece-frame relative overflow-hidden rounded-xs bg-secondary",
          ratio === "4/5" ? "aspect-4/5" : "aspect-4/3",
        )}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={priority}
          className="object-cover"
        />

        {rulerWidth && (
          <WidthRuler width={rulerWidth} className="inset-x-6 bottom-6" />
        )}
      </div>
    </figure>
  );
}

/**
 * The catalog shot, at the piece crop, carrying the width cota. It is the only
 * photograph that comes before the price, because on a phone the whole dossier
 * stacks and a second full-height image between the piece and its cost would be
 * a wall to climb rather than a thing to look at.
 */
export function PieceLeadFrame({
  image,
  rulerWidth,
}: {
  image: Product["images"][number];
  rulerWidth: number | null;
}) {
  return <Frame image={image} ratio="4/5" rulerWidth={rulerWidth} priority />;
}

/**
 * Whatever else the catalog holds of the piece, on the same sheet, in one pass —
 * no gallery, no thumbnails, no lightbox. Sixty of the sixty-five pieces have a
 * single image, so this renders nothing at all most of the time; the five that
 * have more simply keep going down the page.
 *
 * The ratio changes deliberately after the lead: a room and a detail are not the
 * same kind of looking as an object against a wall.
 */
export function PieceFrames({ images }: { images: Product["images"] }) {
  if (images.length === 0) return null;

  return (
    <div className="flex flex-col gap-14 lg:gap-16">
      {images.map((image) => (
        <Frame key={image.src} image={image} ratio="4/3" />
      ))}
    </div>
  );
}
