# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, and the design serves both at once.

- **Judging audience (real):** recruiters, hiring managers, and prospective clients reviewing the repository and the deployed site as evidence of front-end and UI/UX ability. They arrive skeptical, scan fast, and decide from the first viewport whether the work is craft or template. They will also read the code.
- **Depicted audience (fictional, inside the story):** a Brazilian household furnishing a room — someone comparing solid-wood pieces on measurements, material, finish, and delivery time before committing to a large purchase. Every screen must be believable as a real store for this person, or the showpiece fails for the first audience.

## Product Purpose

Canto Zen is a fictional Brazilian home-furniture e-commerce site built as a portfolio showpiece. It exists to demonstrate that its author can carry a complete commerce journey — browsing rooms, scanning a catalog, evaluating a single piece, reading editorial, filling a bag — at a level of visual and interaction craft above the usual portfolio build. Success is a reviewer concluding, without being told, that the site was designed rather than assembled.

## Positioning

Portfolio commerce demos usually stop at a grid of cards. This one commits to a real catalog: 85 products across 4 rooms and 20 product types, organized into families with actual measurements, finishes, availability states, warranty terms, collections, and editorial articles that cross-reference specific pieces by slug. The depth of the data model is the argument — the UI has real facts to be disciplined about, so restraint reads as judgment rather than emptiness.

## Operating Context

- **Primary catalog axis is the room** (`sala`, `quarto`, `cozinha`, `escritório`), not the product type. Navigation, browsing, and editorial all enter through the room.
- **Secondary axes:** product type (20 types), family (a named silhouette shared across finishes), collection (curated multi-piece sets), and material.
- **A product is a family plus a finish.** Measurements belong to the family; price, availability, and imagery belong to the product.
- **Editorial (`Diário`)** is room-scoped and names specific product slugs in its photo captions, so articles and catalog must stay consistent.
- **Routes already committed in navigation:** `/ambientes/[slug]`, `/moveis`, `/moveis/[slug]`, `/materiais`, `/diario`, `/entrega`, `/trocas`, `/garantia`, `/montagem`, `/contato`, `/conta`, `/sacola`, `/termos`, `/privacidade`. Only the home page is built today.

## Capabilities and Constraints

**Scope:** the full commerce journey with no backend — rooms, catalog listing with filtering, product detail, collections, editorial articles, and a bag. Checkout and account are stubbed at the boundary, not implemented.

**Fixed constraints:**

- **No backend, ever.** Local TypeScript data files under `data/` are the only source of truth. No API routes, no database, no authentication. Interactive state is client-side or stubbed.
- **Portuguese (pt-BR) only.** All user-facing copy is Brazilian Portuguese; there is no i18n layer and no language toggle. Code, identifiers, and comments are English (per `AGENTS.md`).
- **shadcn + Base UI** is the component layer. Do not introduce a competing component library.
- **Imagery is Unsplash IDs plus AI-generated files in `/public`.** No licensed photography and no imagery presented as a real manufactured product.

**Stack (existing):** Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript, Bun runtime, deployed on Vercel.

**Domain terminology (pt-BR in the UI, English in code):** ambiente = room, móvel = piece, família = silhouette, acabamento = finish, coleção = collection, pronta entrega = ready to ship, sob encomenda = made to order, sacola = bag.

**Product facts stated in data and therefore not negotiable in copy:** prices are stored in centavos and shown in BRL; availability is `immediate-shipment` / `made-to-order` / `out-of-stock`, with production time in weeks; free shipping is tiered `national` / `southeast` / `sp-capital`; warranty is stated in months.

**Known data gap:** the `sofa-heron` family has zero measurements on file. Measurement-dependent UI must degrade rather than print zeros.

## Brand Commitments

- **Name:** Canto Zen. Wordmark exists at `components/layout/wordmark.tsx`.
- **Voice:** concrete and material-led. Name what a piece is made of and how long it lasts before naming how it feels. Avoid stacked adjectives, avoid invented emotional claims. Existing copy in `data/` sets the register and is the reference for new copy.
- **Positioning within the story:** mid-range Scandinavian-minimalist furniture — design-forward and accessible, not luxury.

The visual direction currently recorded in `README.md` (palette, radius, motion rules) is incumbent design authority, not product truth; it belongs in a DESIGN.md, not here.

## Evidence on Hand

- **Real content that exists:** 85 products with full specifications, 20 product types, 4 rooms with descriptions, product families with measurements, 10 colors, 14 materials with care instructions, 2 collections, 4 editorial articles with full body copy and photo captions.
- **Deliberately absent — never fabricate:** customers, testimonials, reviews, ratings, press mentions, sales figures, showroom addresses, phone numbers, CNPJ, real shipping partners, or any claim that Canto Zen is a real company. The site may be a convincing fiction; it must not assert real-world facts.
- **Local assets:** `public/images/hero.webp`. All other imagery is remote Unsplash via `lib/utils.ts`.

## Product Principles

1. **The data is the argument.** Every screen states real facts from the catalog — measurements, materials, weeks to produce, warranty. Filler text is a failure, not a placeholder.
2. **The room comes before the piece.** Browsing, editorial, and navigation all enter through the ambiente; that hierarchy is the product's shape and must survive any redesign.
3. **Believable as a store first, portfolio second.** If a reviewer notices the interface before the furniture, the demonstration has inverted.
4. **Nothing is decorative unless it also carries information.** Counts, material call-outs, and room labels are literal.
5. **A portfolio piece is judged on its worst screen.** A support page or empty state gets the same care as the hero.

## Accessibility & Inclusion

No user-specific requirement was established beyond ordinary web standards. The build already declares `lang="pt-BR"` and a `#main-content` landmark; keyboard reachability, visible focus, and `prefers-reduced-motion` support are treated as baseline because a reviewer will check them.
