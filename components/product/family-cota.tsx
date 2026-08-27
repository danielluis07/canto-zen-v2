const axes = [
  { key: "width", label: "Largura" },
  { key: "depth", label: "Profundidade" },
  { key: "height", label: "Altura" },
] as const;

/**
 * The title block of a measured drawing: the three cotas of the silhouette,
 * ruled apart, directly under the name they belong to. Width, depth and height
 * are recorded against the family rather than the piece, so they hold across
 * every finish — which is the whole reason this page is built around the
 * family and not around one product row.
 *
 * Families with no measurements on file render nothing at all. The page never
 * draws a title block of zeros.
 */
export function FamilyCota({
  cota,
}: {
  cota: { width: number; depth: number; height: number };
}) {
  return (
    <div className="mt-8">
      <dl className="grid grid-cols-3 border-t border-foreground/25">
        {axes.map((axis, index) => (
          <div
            key={axis.key}
            className={
              index === 0
                ? "pt-3.5 pr-4"
                : "border-l border-line pt-3.5 pr-4 pl-4"
            }>
            <dt className="text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {axis.label}
            </dt>
            <dd className="mt-2 font-heading text-[1.375rem] leading-none font-normal tabular-nums">
              {cota[axis.key]}
              <span className="ml-1.5 font-sans text-[0.6875rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                cm
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted-foreground">
        As medidas são da família e não mudam com o acabamento.
      </p>
    </div>
  );
}
