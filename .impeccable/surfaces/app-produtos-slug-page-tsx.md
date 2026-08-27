---
version: 1
slug: "app-produtos-slug-page-tsx"
primary_target: "app/produtos/[slug]/page.tsx"
related_targets: ["components/product/finish-spine.tsx","lib/product-page.ts"]
---

## Scope

The product detail route, `/produtos/[slug]` — one piece, statically generated for all 65 slugs. Visitor mode: **Persuade**. The visitor arrives from the catalog or an editorial cross-reference and leaves having decided.

## Audience and job

A Brazilian household comparing solid-wood pieces before a large purchase. They need the silhouette's geometry, what materials it comes in, what each costs, when it arrives, and how it is kept — in that order. They will not read; they scan facts and stop at the price.

## Action

`Adicionar à sacola` — a real, fully-designed solid control, now wired to the bag (`lib/bag.ts`, zustand over localStorage). It is enabled on available pieces and genuinely `disabled` on out-of-stock ones. **No "em breve" note**: the user declined that explicitly. The label never changes, on success either — confirmation is the fact printed under the control (`N na sacola · Ver a sacola`), announced politely.

## Proof and content

Everything on the page is a catalog fact. Nothing is invented. Per-piece: family name, family cota, finish, price and previous price, availability with production weeks, free shipping, extra measurements, description, photographs with their `role`. Resolved: material care from `materiais` via the finish's head word, the collection, the `Diário` article whose photo captions name this slug, and four related pieces from the same room. Store-wide: the 5-year structural warranty already asserted in the footer — there is no `warrantyMonths` on any product, so it is never stated per piece.

## Chosen direction

**A Família** (surface roll `3f632e9d`, dealt index 5 of 7 grounded structures; the user locked it against "A Peça no Cômodo" and "O Livro-Razão"). A product is a family plus a finish, so the silhouette is the page's subject and the material is the one axis under it. The family cota sits directly beneath the name because width, depth and height belong to the family and do not move when the finish does. The finish spine below it is the page's argument in one component.

Refused: the gallery-left / sticky-buy-box-right PDP and its accordion of specs.

## Memorable moment

The finish spine. Ruled plates, a filled ink mark on the finish being read and hairline marks on the others, an ink rule under the current plate and an oak rule that sweeps in on hover. Switching finish is a navigation to the sibling slug, so the name and the cotas hold still and only the photograph and the values change — the geometry is literally the thing that does not move.

## Rules this route holds itself to

- A plate states its **price** only when the family has more than one finish, and its **availability** only when the finishes' promises actually differ. Otherwise the fact is stated once, on the price line. Six of 59 families are multi-finish, so most pages show a single plate that names the material rather than offering a choice — that is the primary rendering, not a degraded one.
- One sheet, one pass: no accordion, no tab, no lightbox, no thumbnail gallery. 60 of 65 pieces have a single photograph.
- Only the lead catalog photograph comes before the price. Remaining photographs continue in the same column on desktop and fall below the buy block on mobile.
- Every photograph carries a ticket of origin on a straddled rule, taken from the data's own `role` field, never a caption written by hand.
- Measurement-dependent UI drops rather than degrades: `sofa-heron` has no measurements on file, so its cota block does not render at all.
- The current state is a printed mark (filled square, ink rule, strike-through), never a colour change. Oak stays reserved for interaction, per DESIGN.md's navigation rule.

## Unresolved

- `data/families.ts` records `sofa-heron` as `{0, 0, 0}` while the product's own description asserts a 220 cm width. Until that is filled in, the site's flagship sofa is the one page missing the composition's title block.
- Several Unsplash IDs in `data/products.ts` illustrate the wrong object (a green velvet sofa for Sofá Héron in Linho Cru; a teal pendant lamp for the Reboco collection). The page is only as believable as the photographs.
- `/colecoes/[slug]`, `/diario/[slug]`, `/ambientes/[slug]`, `/materiais`, `/entrega`, `/trocas` and `/montagem` are all linked from this page and none exist yet.
