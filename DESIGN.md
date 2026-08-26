---
name: Canto Zen
description: Warm Scandinavian-minimalist commerce for solid-wood furniture — a daylit showroom where the furniture is the loudest thing on screen.
colors:
  warm-white: "oklch(0.983 0.006 84.6)"
  ink: "oklch(0.285 0.007 95.3)"
  greige: "oklch(0.945 0.013 82.4)"
  stone: "oklch(0.533 0.018 82.8)"
  line: "oklch(0.902 0.017 84.6)"
  sky: "oklch(0.968 0.023 78.2)"
  paper-white: "oklch(1 0 0)"
  oak: "oklch(0.655 0.086 57.1)"
  oak-deep: "oklch(0.571 0.081 56.6)"
  sage: "oklch(0.617 0.045 130.6)"
  sage-deep: "oklch(0.518 0.044 132.2)"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 6.4vw, 4.75rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
  caption:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  sm: "0.075rem"
  md: "0.1rem"
  lg: "0.125rem"
  xl: "0.175rem"
  2xl: "0.225rem"
spacing:
  gutter: "24px"
  gutter-wide: "40px"
  section: "80px"
  section-wide: "112px"
  container: "1440px"
components:
  link-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-white}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0 32px"
    height: "48px"
  link-button-hover:
    backgroundColor: "{colors.oak-deep}"
    textColor: "{colors.warm-white}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 0 6px 0"
  text-link-hover:
    textColor: "{colors.oak-deep}"
  nav-link:
    textColor: "oklch(0.285 0.007 95.3 / 0.75)"
    typography: "{typography.label}"
    padding: "8px 0"
  nav-link-hover:
    textColor: "{colors.ink}"
  product-card:
    backgroundColor: "{colors.greige}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  availability-tag:
    textColor: "{colors.sage-deep}"
    typography: "{typography.caption}"
  availability-tag-soldout:
    textColor: "oklch(0.533 0.018 82.8 / 0.7)"
    typography: "{typography.caption}"
---

# Design System: Canto Zen

## Overview

**Creative North Star: "The Quiet Showroom"**

Daylight, warm white walls, and furniture that is allowed to be the loudest thing in the room. The interface is the gallery, never the work. Every surface in this system is the same sheet of warm off-white paper (`#FBF9F5`); rooms and pieces are cut into it with hairlines rather than set on top of it in cards. When a photograph appears, it is given the whole width and the type moves to the part of the frame that is already empty — nothing is dimmed, darkened, or overlaid to make room for an interface.

The register is Scandinavian-minimalist and mid-range, not luxury: restrained but never cold, warm but never rustic. Warmth comes from hue, not ornament — the neutrals all carry a low-chroma yellow-orange cast (hue 78–95), so the page reads as daylight on pale wood rather than as grey. Density is generous. Sections breathe at 80px of vertical air on small screens and 112px on large, and body copy is held to a 44–52ch measure so a paragraph never runs the full 1440px container.

Restraint here is a claim about judgment, not a shortage of ideas. The system earns its quiet by being literal: a panel is wider because the room it names has more categories in it; a ruler is drawn on a photograph only when that piece's data actually declares a width; a tag is sage only when the store can keep the promise it states. Decoration that carries no fact does not survive.

**Key Characteristics:**

- One paper: a single warm off-white ground across the whole site, with exactly one tonal band (greige) available for structural interruption.
- Near-square geometry — a 1.2–5.2px radius scale that reads as "cut", not "rounded".
- Hairline rules as the primary structural device; borders separate, they do not enclose.
- Flat at rest, with a single hover-only shadow in the entire system.
- Two serif display weights (300 and 400) carrying all headline hierarchy, against uppercase letterspaced micro-type for everything that names or counts.
- Two accents with distinct jobs: oak for interaction, sage for facts.

## Colors

A warm, low-chroma neutral field of five steps, interrupted by exactly two accents — one earth, one green — both muted enough to sit inside the same daylight as the neutrals.

### Primary

- **Ink** (`--foreground`, `--primary`): The single text colour and the fill of the one solid control on the page. Near-black but warm and slightly green-shifted, so it never reads as pure black against the warm ground. Also used at reduced alpha for secondary states: `/75` for resting navigation and icon actions, `/25` and `/20` for hairlines that need to be darker than the standard line colour, `/65` for the caption plates set over photography.

### Secondary

- **Oak** and **Oak Deep** (`--oak`, `--oak-deep`): The interactive register. Oak draws the underline that sweeps in on hover for navigation and text links; Oak Deep is the hover fill of the solid button, the hover colour of every link and icon, the hover colour of a product name, and the cart-count badge. Oak Deep is the darker of the two because it has to carry text weight against warm white; Oak is used where it only has to be a rule or a badge ground.

### Tertiary

- **Sage** and **Sage Deep** (`--sage`, `--sage-deep`): The natural, factual register. Sage tints the footer commitment icons — certified wood, warranty term, free-shipping threshold. Sage Deep states availability the store can keep ("pronta entrega") and is the focus ring colour for the whole site.

### Neutral

- **Warm White** (`--background`): The page ground everywhere. Also the text colour inside the solid button, and — at `/85` — the translucent navigation bar and the small plate behind a width-ruler figure.
- **Greige** (`--secondary`, `--muted`): The one tonal band. It backs the collection section and every image placeholder, so a photograph that has not loaded still occupies a warm rectangle rather than a hole.
- **Stone** (`--muted-foreground`): All secondary prose — section notes, product finishes, footer links, measurements, the hero subhead.
- **Line** (`--border`, `--input`): Every hairline. The single most-used non-text colour in the system.
- **Sky** (`--accent`): A soft warm tint reserved for hover and selected surface states — currently only the room panel's ground on hover, at `/70`.
- **Paper White** (`--card`, `--popover`): Pure white, used only where a surface must read as lifted off the warm ground. Rare by design.

### Named Rules

**The Two Registers Rule.** Oak generally carries interactive states; sage generally carries factual, natural signals. Keep the two roles distinct — an element that a visitor can act on reaches for oak, and an element that states something true about a piece reaches for sage. Do not let one accent do the other's job within a single surface.

**The One Band Rule.** Warm white is the ground of the entire site. Greige is available as a structural interruption — currently once per page, under the collection — and its job is to mark a change of reading mode, not to decorate. A second tonal band on the same page dilutes the first into wallpaper.

## Typography

**Display Font:** Fraunces (with Georgia, serif) — weights 300, 400, 500, 600, plus italic, bound to `--font-heading` and applied automatically to `h1`–`h6`.
**Body Font:** Work Sans (with system sans fallback) — weights 400, 500, 600, bound to `--font-sans` and set on `html`.

**Character:** Fraunces is a soft, slightly optical-sized serif; at weight 300 in large sizes it reads as calm and editorial rather than traditional, and its italic is used as a deliberate accent inside a headline (the word `sob encomenda` in the hero, the word `Zen` in the wordmark) rather than for emphasis in prose. Work Sans is neutral and quiet at paragraph sizes and turns crisp and architectural when letterspaced small and uppercase. The pairing lets the serif carry all warmth and all voice, while the sans carries all structure.

All headings inherit `letter-spacing: -0.01em` and `line-height: 1.08` from the base layer; only the hero opts to a tighter `-0.02em` and `1.02`.

### Hierarchy

- **Display** (300, `clamp(2.5rem, 6.4vw, 4.75rem)`, 1.02, -0.02em): The hero `h1` only. Held to a 15ch measure with `text-balance` so it breaks into four or five deliberate lines instead of a paragraph.
- **Headline** (300, `clamp(1.75rem, 3.2vw, 2.75rem)`, 1.08): Section titles. The collection section runs a larger variant (`clamp(2.25rem, 4vw, 3.25rem)`, line-height 1.04) because it is the page's one editorial interruption.
- **Title** (400, 1.0625rem–1.5rem, 1.375): Product names and room names. Weight 400, never bolder — a product name is identified by being set in the serif, not by being heavy.
- **Body Lead** (400, 1.0625rem, 1.625): The hero subhead and collection description. Held to 44ch.
- **Body** (400, 0.9375rem, 1.625): Section notes, footer prose, footer links. Held to 52ch where it runs long. A smaller 0.8125rem step carries dense product metadata (finish, measurements).
- **Label** (500, 0.6875rem, 0.16em–0.18em, uppercase): Eyebrows, button labels, navigation, footer column headings, the mobile-menu section headings. 0.16em on controls, 0.18em on headings and eyebrows.
- **Caption** (500, 0.625rem, 0.12em–0.14em, uppercase): Counts, availability tags, ruler figures, the hero catalogue plate. The smallest type in the system and always a fact, never a sentence.

### Named Rules

**The Micro-Label Rule.** Anything that *names* a thing — an eyebrow, a count, a button, a nav item, a status — is uppercase micro-type (11px / 0.16–0.18em / weight 500). Anything that *describes* a thing is body text. The two never swap jobs. A description never gets letterspaced uppercase treatment to look important, and a label never softens into sentence case to look friendly.

**The Light Display Rule.** Display and headline type is set at weight 300. Emphasis inside a headline comes from italic, not from weight. A bold serif headline does not exist in this system.

## Layout

A single centred container of 1440px (`max-w-360`) with a 24px gutter that opens to 40px from `lg`. Sections are full-bleed only when their content is a continuous plate. The hero is edge-to-edge by construction — the photograph is absolutely positioned across the section and the container holds only the type. Elsewhere, content that must run past the gutter does so with matched negative margins (`-mx-6` / `-mx-10`) and rejoins the gutter inside: the room band and the small-screen product filmstrip both use this.

Vertical rhythm is fixed: 80px of section padding below `lg`, 112px at and above it. A section opens with a hairline and its header, then 48px (`mt-12`) to its content on small screens and 64px (`mt-16`) on large. The navigation bar is 64px tall, 80px from `lg`, sticky, translucent at 85% with a backdrop blur so page content stays visible passing beneath it.

Only two breakpoints do real work: `sm` (640px) splits stacked content into two columns, and `lg` (1024px) is where the layout actually changes character — the desktop navigation appears, the room band becomes a single flex row, the product row becomes a four-column grid, and the collection becomes a 12-column split (7 image / 5 text).

Below `lg`, horizontally-proportioned content scrolls rather than collapsing: the product row keeps its 4:5 card crop and becomes a snap-scrolling filmstrip at 74vw per card (46vw at `sm`), with `scroll-px-6` keeping a snapped card aligned to the page gutter rather than the screen edge.

**The Proportion Is The Information Rule.** Where a layout can encode a fact in its geometry, it should. The room band gives each panel a `flex-grow` equal to its number of categories, so Sala (6 categories) is half again as wide as Escritório (4). A visitor reading only the shapes has already learned something true.

## Elevation & Depth

This system is flat. Depth is carried by hairline rules, by the single greige tonal band, and by the translucency of the navigation bar over scrolling content — not by shadows. Surfaces do not float; they are cut into the same sheet of paper.

There is exactly one shadow in the entire system, and it is a response rather than a state: a product thumbnail lifts 4px and casts a soft, tightly-offset ink shadow while the cursor is on it. It is deliberately low-opacity, high-blur, and heavily negative-spread, so it reads as the object leaving the paper rather than as a drop shadow applied to a card.

### Shadow Vocabulary

- **Product lift, row** (`box-shadow: 0 20px 44px -26px oklch(0.285 0.007 95.3 / 0.5)`): Hover only, on the 4:5 product card image in `ProductsRow`, paired with `-translate-y-1` over 500ms ease-out.
- **Product lift, plate** (`box-shadow: 0 18px 38px -24px oklch(0.285 0.007 95.3 / 0.5)`): The same gesture scaled down for the smaller thumbnail in `ProductsSpread`.

### Named Rules

**The Flat-At-Rest Rule.** Nothing on this site casts a shadow while it is sitting still. Depth comes from hairlines and tonal bands. The one shadow in the system is a response: a product thumbnail lifting 4px under the cursor.

## Shapes

Near-square. The base radius is 2px (`--radius: 0.125rem`), and the whole scale is derived from it by multiplication — 1.2px, 1.6px, 2px, 2.8px, 3.6px, 4.4px, 5.2px. The largest radius in the system is smaller than the smallest step of a conventional scale, which means the distinction between steps is almost invisible in practice and the correct instinct is simply: corners are cut, not rounded. Photographs, cards, buttons, badges, and the ruler plate all sit at 2px.

Rules are always 1px and always the `line` colour, except where they must read against a photograph or a heavier ground, where they step up to ink at 20–25% alpha. Borders separate regions; they do not enclose them. The room band, the section headers, the product ledger lines, and the footer columns are all defined by rules on one or two edges, never by a box.

Two recurring silhouettes carry the catalogue voice:

- **The straddled rule.** A micro-label sits on top of a hairline, translated up by half its own height, with the page ground painted behind it so the rule reads as broken rather than crossed out. Used to name what a product plate stands for.
- **The width ruler.** A measured-drawing cota drawn directly onto a photograph — two end ticks, two lead rules, and a centred figure on a translucent warm-white plate. It appears only on photographs whose data actually declares a width, so it is a scale note, not a repeated flourish.

Image crops are fixed and few: 4:5 for a piece, 3:4 for a room on small screens, 4:3 and 16:11 for a collection. Reuse them rather than introducing new ratios.

## Components

### Solid Control (`LinkButton`)

The page's one filled control, and the only element allowed to be a solid rectangle of ink.

- **Shape:** 48px tall, 32px horizontal padding, 2px radius (`rounded-xs`).
- **Rest:** Ink ground, warm-white label in uppercase micro-type at 0.16em.
- **Hover:** Ground transitions to Oak Deep over 300ms. No lift, no scale, no shadow.
- **Focus:** 2px outline at 4px offset, in the sage-deep ring colour.
- **Character:** Quiet at rest, physical on contact. Presence comes from the letterspacing and the size of the ink field, never from weight or radius.

### Text Control (`TextLink`)

The quiet counterpart, used wherever a solid control would over-weight the section.

- **Shape:** Inline, 6px of padding below the label to clear its rules.
- **Rest:** Ink label in uppercase micro-type at 0.16em, over a hairline at 25% ink.
- **Hover:** The label shifts to Oak Deep and an oak rule scales in from the left over 300ms ease-out, drawing itself over the resting hairline.
- **Focus:** 2px outline at 4px offset.

### Navigation

- **Desktop:** Room links only, 36px apart, in uppercase micro-type at 75% ink. Hover brings the label to full ink and sweeps the same left-origin oak rule underneath it. The current room keeps its rule permanently but in *ink*, not oak, so the resting state stays neutral and only the interactive state reaches for the accent; hovering the current room turns its rule oak.
- **Icon actions:** 40px square hit targets, 18.4px Lucide glyphs at `strokeWidth={1.5}`, 75% ink, hover to Oak Deep over 200ms. Never filled, never boxed.
- **Cart badge:** Oak Deep ground, warm-white 10px figure, 2px radius, pinned to the icon's top-right.
- **Mobile sheet:** A full-height sheet of the same warm-white paper sliding from the right — hairline rules, no elevation, no overlay tint beyond the dialog scrim. Room links are set large in Fraunces 300 at 24px with their category count in micro-type at the opposite end of the row, each on its own ruled line.
- **Skip link:** Visually hidden until focused, then an ink plate with a warm-white uppercase micro-label at top-left.

### Section Header

The system's most reused composition, and the reason every section reads as the same document. A top hairline, then an eyebrow in micro-type, a light Fraunces title, an optional 52ch note in stone, and — pushed to the far right on `lg`, where the eye lands last — the section's `TextLink` exit.

### Product Card (`ProductsRow`)

- **Image:** 4:5 crop, greige placeholder ground, 2px radius, optional width ruler.
- **Facts, in fixed order:** name (Fraunces 400, hover to Oak Deep), then finish and measurements in 13px stone, then a hairline, then price and availability on one baseline at opposite ends.
- **Hover:** The image lifts 4px with the product-lift shadow over 500ms ease-out; the name shifts to Oak Deep over 300ms.
- **Rule:** Every card in a row states the same facts in the same order, so the row can be scanned vertically as columns of comparable values.

### Product Plate (`ProductsSpread`)

The second reading of the catalogue, for pieces that are *not* peers — one per room. A straddled micro-label names what the piece stands for; the photograph shrinks to a 112px (208px at `lg`) thumbnail so the facts beside it carry the weight; price and availability close it on a ledger line. Use this form when items are to be read one at a time, and the row form when they are to be compared.

### Room Panel (`Environments`)

Panels abut and share hairlines to form one continuous band rather than a row of cards. Each panel is an image over a text block: category count as eyebrow, room name in Fraunces (hover to Oak Deep), category list in 13px stone joined by a no-break-space separator so a wrap never begins a line with a dot. Hover scales the image 1.04 over 700ms ease-out and washes the text block in `sky/70`. Two columns on small screens, one flex row from `lg` with `flex-grow` set by category count.

### Availability Tag

Sage Deep for a promise the store can keep; stone at 70% for one it cannot. 10px uppercase micro-type at 0.14em, no ground, no border, no dot.

### Signature: Width Ruler

See Shapes. Its rule of use is the important part: it is emitted only when the product's family data declares a width, and it is suppressed on thumbnails too small to read it (below `lg` in the spread, where the same figure already leads the measurements line).

### Motion

- **Durations:** 200ms for navigation and icon colour, 300ms for control and link colour and for rule sweeps, 500ms for the product lift, 700ms for image scale. Easing is `ease-out` throughout.
- **Entrance:** Hero lines arrive in reading order on a 0.9s `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 60 / 140 / 230 / 320ms via an `--enter-delay` custom property.
- **Scroll-driven, no JavaScript:** `.hero-media` drifts 15% downward across the first 90vh on `scroll(root block)`; `.rise` fades and translates section content up 28px across `view()` entry 15%→90%. Both are wrapped in `@supports (animation-timeline: …)`, so unsupported browsers render the finished state and never a blank block.
- **Reduced motion:** All transitions collapse to 0.01ms, and the three named animations are switched off by name — scroll and view timelines ignore duration, so shortening them is not enough.

## Do's and Don'ts

### Do:

- **Do** build new sections out of `SectionHeader` + a hairline-ruled content block. It is what makes fifteen routes read as one document.
- **Do** hold prose to its measure: 44ch for lead paragraphs, 52ch for section notes, regardless of how wide the container is.
- **Do** reach for a hairline before a border-box, a tonal band, or a shadow when something needs separating.
- **Do** state real catalogue facts — measurements, finish, weeks to produce, warranty months, availability — wherever a section has room for them. A fact is a better ornament than an ornament.
- **Do** degrade measurement-dependent UI gracefully. The `sofa-heron` family has no measurements on file; the width ruler and the measurements line must simply not render rather than print zeros.
- **Do** guard any new scroll- or view-timeline animation with `@supports`, and switch it off by name in the `prefers-reduced-motion` block.
- **Do** give every interactive element a visible focus outline at 2px with 2–4px of offset.

### Don't:

- **Don't** take shape or sizing cues from `components/ui/button.tsx`. It is unmodified shadcn scaffolding — 32px default height, sentence-case `text-sm` labels, shadcn's own size scale — and it does not reflect this system. (Its radius happens to resolve correctly, since `--radius-lg` is 2px here, which makes the mismatch easy to miss.) The canonical controls are `LinkButton` and `TextLink`.
- **Don't** introduce a second tonal band, a card ground, or a coloured section background. Warm white is the page; greige is the one interruption.
- **Don't** add a resting shadow, an elevation scale, or a card that floats. See The Flat-At-Rest Rule.
- **Don't** put an element in oak while it is idle, or in sage while it is being interacted with.
- **Don't** set a headline heavier than weight 400, or letterspace a sentence of prose to make it look designed. Emphasis inside a headline is italic Fraunces.
- **Don't** raise the radius. Anything above ~5px reads as a different product.
- **Don't** introduce new image crops when 4:5, 3:4, 4:3, and 16:11 already exist, and don't render an image container without its greige placeholder ground.
- **Don't** collapse a horizontally-proportioned row into a stack of half-height cards on small screens. Keep the crop and let it scroll with snap points.
- **Don't** invent testimonials, ratings, reviews, press logos, showroom addresses, or partner names to fill a layout. If a section needs social proof to work, the section is wrong.
