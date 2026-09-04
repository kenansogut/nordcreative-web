# Nord Creative — Design System

Nord Creative is a five-year-old production and digital marketing studio. It works with brands end to end: photo and video production, e-commerce and product shoots, social media and corporate content, YouTube production, podcasts and interviews. Client acquisition runs through one-to-one meetings, so "let's talk" layouts are a first-class part of the system, not an afterthought.

The studio's own social accounts are the primary surface this system serves: Instagram feed posts, carousels and stories, in Turkish, aimed at marketing decision-makers at Turkish brands.

## Sources used to build this system

| Source | What it gave us |
| --- | --- |
| `uploads/logo.svg` | The real Nord Creative logo artwork — "nord." in a bold grotesque with a light serif "creative.co". Copied to `assets/` and recoloured into approved variants. |
| `uploads/color picker.png` | The brand red, read straight off the artboard: **#EF3E36**. |
| `uploads/saldo-*.otf/.ttf` (48 files) | **Saldo**, the corporate typeface. Nine cuts are shipped in `assets/fonts/`. |
| `uploads/örnek tasarım1–15.jpg` | Fifteen reference/mood boards of social media template sets, copied to `refs/`. These are inspiration, **not** existing Nord work. |
| Brief (chat) | Service list, positioning, the meeting-first sales motion. |

No codebase, Figma file or existing website was provided. Every screen here is built from the brand assets plus the direction the reference boards point at — nothing was recreated from a live Nord product, because none was supplied.

### Reading the references

The fifteen boards agree on a narrow visual language, and that agreement is what this system encodes:

- One hot accent (red/orange) against near-black and warm off-white. No third hue.
- Very large grotesque display type, tight tracking, one to four words per line.
- Tiny tracked-out uppercase kickers, often bracketed: `[ NORD CREATIVE ]`.
- Black-and-white photography; colour comes from the accent, never from the image.
- Pill CTAs and circular arrow buttons; typographic arrows (→ ↗ ←) as the main graphic device.
- Occasional italic serif line for warmth, matching the serif in the logo.
- Hairline rules, oversized numerals for proof points.
- A card floating inside the canvas (rounded outline, headline plus a large index numeral), portrait cards with a name strip along the bottom, word-stacks with one term highlighted, split date/time layouts, and simple donut charts.

These recurring patterns are translated — not copied — into a second template family, `ui_kits/social/PostsB.jsx`: Kart içi metin, Ekip kartı, Donut veri, Kelime yığını, Program, Kontrol listesi, Kapanış. The boards' red canvases and star/asterisk marks are deliberately dropped; every pattern is rebuilt on Ink/Paper with red as accent only.

## Content fundamentals

**Language.** Turkish, informal-plural ("siz"). Copy is written to a client, not about the studio: "Hikâyeni çekelim", "Projeyi konuşalım", "Bir kahve içelim mi?". "We" appears for the team ("beş yıldır çekiyoruz"), "siz" for the reader. Never third person ("Nord Creative olarak ekibimiz…" only in bios).

**Length.** Headlines: two to five words, broken over two or three lines. Body: one or two sentences, max ~25 words on a canvas. Captions: one line.

**Casing.** Sentence case for headlines and body. UPPERCASE only for eyebrows, badges and buttons — never for a headline. Turkish punctuation and diacritics are always correct (â, ı, ş, ğ, ü, ö, ç).

**Tone.** Plain, confident, no hype. State the work and the result: "12 ürün, bir gün." Ask a direct question when the goal is a reply: "Ne yapıyoruz?", "Bir kahve içelim mi?" No exclamation marks. No growth-hack vocabulary ("hemen", "kaçırma", "ücretsiz danışmanlık").

**Numbers.** Turkish formatting: `18,4B` followed / `1.200` thousands separator. Proof points are single figures with a unit: "5+", "120+".

**Emoji.** Never in a design. Acceptable in caption text on the platform, but no design in this system contains one. Icon-like marks are typographic: → ↗ ← ↑.

**Signature.** Every canvas ends with the logo alone. Off-platform work signs with the logo plus **kenansogut.net**, or `@nordcreative.co` when the credit is specifically a social one. **Instagram posts carry no handle and no web address** — the profile already says who we are, and a URL on the image reads as an ad. Links and contact details belong in the bio and the caption. Handles or URLs are permitted only off-platform: print, decks, paid ads.

**No sequence numbers.** Instagram posts and carousel slides are never numbered ("01", "02", "1/4"). Order is carried by the swipe itself, not by counters printed on the artwork. Lists use a short red rule instead of an index; `NumberedItem` is reserved for decks, documents and web pages.

## Visual foundations

**Colour.** Four core values: Nord Red `#EF3E36`, Ink `#17181A`, Paper `#F2F1ED`, White `#FFFFFF`. Red Deep `#C92A23` is for press/hover states only. Six warm greys carry secondary text and placeholders.

**Canvases are always Ink or Paper** (or full-bleed photography). Red is never a surface: no red story backgrounds, no red form panels, no red cards. It appears only as

- the single primary CTA on a canvas,
- a 2px hairline rule under a headline or along a card's top edge,
- an index numeral, an outline badge, or one highlighted word in a quote,
- the underline and a 5px dot on an invalid form field.

Approved pairings: ink on paper, paper on ink, ink on white, and paper on photography-with-scrim. Never two red elements on one canvas.

**Canvas type scale.** Screen tokens are sized for a ~1000px web viewport; a 1080 × 1350 social canvas needs everything ~1.75× larger. `PostCanvas` and `StoryCanvas` carry the `.nord-canvas` class, which re-declares the text and control tokens locally (eyebrow 22px, body 30px, title 52px, circular controls 80px), so components inside a canvas scale automatically with no extra props. `--text-mega` is a fixed 180px — the fluid variant is `--text-mega-fluid` and is for web pages only, never a canvas.

**Type.** Saldo for everything. 800 for display (tracking −3.5%, leading 1.0), 600 for eyebrows/buttons, 400–500 for body (17px / 1.45). **Body copy is never italic** — it stays upright, high-contrast and modern. Italic exists in exactly one place: the accent line of a `PullQuote`, set in Playfair Display italic, one short line per layout. Playfair is a **substitute** for the light serif in the wordmark. Type scale is deliberately gapped: 180 / 96 / 72 / 56 / 40 / 30 / 24 / 17 / 13 / 11.

**Layout.** Social canvases are **always 1080 × 1350** unless a different size is asked for; stories and Reels are 1080 × 1920.

**Grid safe zone.** Instagram's profile grid crops every tile to 3:4, so a 1080 × 1350 post shows as a centred **1013 × 1350** — about 34px is lost from *each side*. Nord's 70px margin clears that by more than double, so never take the margin below 34px. The first slide of a carousel is the only frame that appears in the grid: keep its headline block near the centre, leave at least 200px between the last line and the bottom edge, break long headlines by hand, and never let a letter clip — drop the size instead of the margin. Every slide in a carousel is built at 1080 × 1350, since the first image's ratio is applied to the whole series. Stories keep the top and bottom 250px clear of type for the platform UI, on top of the 132px margin; a Reels cover keeps text and logo inside the centred 1080 × 1350 of its 1080 × 1920 canvas. Full reasoning and the token table: `guidelines/instagram-safe-zone-research.html`. Safe margin 70px on posts (6.5% of width) and **132px on stories** — stories are the most generous, negative-space-first format in the system: photography and a short headline, nothing else. Content is anchored to the bottom-left of the canvas, with the eyebrow pinned top-left and an arrow button or badge top-right; the signature strip sits on the bottom edge. Grids are 2×2 or 3-up with a 24px gutter. Nothing is centred except a full-canvas quote.

**Backgrounds.** Flat Ink or Paper, or full-bleed photography — no patterns, no textures, no illustration. The only gradients in the system are the scrims.

**Scrim (mandatory).** Every full-bleed image gets a bottom-up dark gradient so type stays legible: `--scrim-soft` (30%, decorative images with no text), `--scrim-bottom` (55%, the default for any image carrying type), `--scrim-strong` (72%, dense copy and stories). Each fades to zero between 55% and 88% of the height, so the photograph is never flattened. `ImageFrame` applies `standard` by default; switching it off is only allowed on small inset thumbnails.

**Imagery.** Black and white by default (`grayscale(1) contrast(1.06)`), cool-neutral, no grain, no filters. Client and campaign work may run in colour when the product colour is the point. Portrait 4:5 for people, 1:1 for products, 9:16 for stories. Photography is never rounded beyond 24px, and full-bleed images have no radius at all. **No stock or generated imagery is shipped** — frames are labelled placeholders.

**Cards.** White or paper on an ink canvas or photography — never a red card. Two flavours: editorial (radius 0, 1px hairline `rgba(23,24,26,.14)`, no shadow) and social-soft (radius 24px, shadow `0 18px 40px -24px rgba(23,24,26,.35)`). Never both a heavy shadow and a border. No coloured left-border accents anywhere; red enters a card only as a 2px top rule (`accentRule`).

**Radii.** **Every control is a pill** — buttons, icon buttons, badges and avatars, with no square, capsule or sharp variants anywhere. Surfaces use 0 (editorial blocks, full-bleed media), 12 (small chips), 24 (soft cards), 40 (large panels).

**Borders & rules.** 1px hairlines for structure; 2px red rule as an emphasis mark under a stat or beside a quote; 4px only for the accent bar on a dark canvas. On dark surfaces borders become `rgba(255,255,255,.28)`.

**Shadows.** Flat is the default. `--shadow-card` when a card floats over red or photography, `--shadow-float` for the post viewer overlay. No inner shadows.

**Transparency & blur.** Only two uses: the `--blur-veil` (14px) behind the lightbox overlay, and the photo scrim. No frosted-glass cards, no translucent panels on flat colour.

**Motion.** Restrained: 120ms for state changes, 220ms for entrances, 420ms for canvas transitions, all on `cubic-bezier(.22,.61,.36,1)`. Fades and short vertical slides (8–16px). No bounce, no spring, no parallax, no auto-playing carousels.

**Hover.** Solid buttons darken to Red Deep or lift 1px; outline buttons fill with ink and flip their label to paper; images lift their contrast slightly. **Press:** no scale-down; the fill darkens and the shadow drops to flat. **Focus:** 1px red outline offset 2px.

**Fixed elements.** In web/screen contexts: the header bar and the signature strip. On a canvas nothing scrolls — the eyebrow, the arrow button and the signature are the fixed frame, and the headline block is the only thing that changes size.

## Stationery — letterhead

A4, 210 × 297 mm, 20 mm margin on all four sides. Three sheets:

1. **İlk sayfa** — an ink header block (46 mm wordmark, then a three-column phone / e-mail / address grid), closed by a 1.2 mm Nord red rule; paper correspondence area with a 52 mm metadata column (Tarih, Kime, Konu) beside the letter body; signature block; hairline footer.
2. **Devam sayfası** — no header block. A 32 mm ink wordmark, a 24 mm red rule, the text area, the same footer. Repeat as needed.
3. **Kapak / arka sayfa** — full ink, wordmark top, the house line "Hikâyeni çekelim." over a red rule, and a two-column contact block at the foot.

Body copy is 10pt / 1.75; labels are 6.5pt uppercase at `--tracking-label`; the footer legal line is 6.5pt in `--grey-500`. Photography is never used on a letterhead.

**Legally required fields.** Under Turkish Commercial Code (TTK) art. 39/2, a merchant's commercial letters must show the registry number, the trade name, the address of the head office, and — for merchants obliged to maintain a registered website — that website address; <a href="https://www.ksmmmo.org.tr/office/pdf/6102-01.pdf">the article's text</a> covers "ticari mektuplar", which the Ministry of Trade's own <a href="https://ticaret.gov.tr/ic-ticaret/sikca-sorulan-sorular/sirketler">FAQ</a> restates, and trade-body guidance names <a href="https://www.etonet.org.tr/uploads/096--ticari-belgelerde-bulunmasi-gereken-bilgiler.pdf">antetli kağıt explicitly</a> among the documents concerned, with the MERSİS number standing in for the registry number where one exists. The footer of every sheet therefore carries: **ticaret unvanı · MERSİS numarası · merkez adresi · internet sitesi**.

Note that the obligation to keep a registered website applies only to capital companies subject to independent audit, so the website line is a brand choice rather than a legal one for most studios — but the other three are not optional. This is a design note, not legal advice; have the exact unvan and MERSİS string confirmed by your accountant before printing.

**All of the contact and legal values in the template are placeholders** (`+90 000 000 00 00`, `0000-0000-0000-0000`, "Örnek Mah."). They must be replaced with the registered values before use.

## The name is never typed

**In a design, the brand name is always the logo — never set as text.** Wherever "Nord Creative" would appear as a label, an eyebrow, a signature or a header, place the wordmark asset instead, in the colourway that fits the surface:

| Surface | Asset |
| --- | --- |
| Ink or photography (with scrim) | `logo-wordmark-white.svg` |
| Paper or white | `logo-wordmark-ink.svg` |
| Where the mark itself is the accent | `logo-wordmark-red.svg` |
| Under 96px wide — icons, avatars, favicons | `Monogram` (the "n") |

Use the `Logo` component (`<Logo variant="white" width={196} />`) rather than a raw `<img>` where React is available. **One mark per canvas**: a social post is signed by its footer wordmark, so a top-corner mark on the same canvas is the `Monogram`, never a second wordmark. Typographic eyebrows stay for *content* labels — `[ Kamera arkası ]`, `[ Hizmetler ]`, `[ Süreç ]` — never for the brand's own name.

Three exceptions, none of them visual: `alt` text and `aria-label` (accessibility), the `<title>` of a page, and the legal trade name in the letterhead's TTK 39/2 footer block, where the registered name is required in words.

## Accounts

| Channel | Value |
| --- | --- |
| Website | **kenansogut.net** |
| Instagram | **@nordcreative.co** — `instagram.com/nordcreative.co` |

The Instagram handle is the brand's on-platform signature: it is the profile name shown above every post, and it is what appears in a handle position (`@nordcreative.co`) when the brand is credited in someone else's post, a partner's story, or an off-platform layout. It is **not** printed on our own Instagram canvases — the profile already carries it there.

Write the handle with the leading `@` and the `.co` suffix intact: `@nordcreative.co`. Never `@nordcreative`, never the full `instagram.com/…` URL in a designed layout.

## Web address

The studio's site is **kenansogut.net** (`www.kenansogut.net`). It is the canonical URL for the brand and belongs in every place a web address is legally or practically required:

- the letterhead footer, as the internet-site field of the TTK 39/2 block;
- the ink cover sheet's contact column;
- e-mail signatures, business cards, invoices, decks, printed and paid work.

Write it lowercase and without a protocol or `www.` prefix — **kenansogut.net**, never `https://www.kenansogut.net` — set in `--font-body` at 8.5pt on stationery, or `--text-caption` on screen. The `Watermark` component takes it via `site="kenansogut.net"`.

**It never appears on an Instagram post or story.** That rule is unchanged: on-platform, the profile signs the work and the link lives in the bio and the caption. Printing a URL on a social canvas reads as an ad.

> **Not read.** The site itself could not be fetched from this environment, so nothing in this design system is derived from its design — no colours, type, layout or component patterns were taken from it. If the site's look should inform the system (or the reverse — if the site should be brought in line with it), send the site's code, a Figma file, or full-page screenshots and it can be reconciled.

## Iconography

There is no icon font, icon set or SVG icon library in the supplied material, and none was invented. The system's marks are **typographic**:

- Arrows: → ↗ ← ↑ (set in Saldo, inside `IconButton` or after a button label).
- No asterisks (✳) and no stars (★) — these are never used in any Nord work.
- Brackets: `[ … ]` around eyebrow labels.
- Hairline rule: a 28px line before an eyebrow.

Emoji are never used in a design. The only vector artwork in `assets/` is the supplied logo — recoloured, and cropped to its "n" for the monogram.

**Monogram / app icon.** Where the full wordmark is too wide to read — app icons, profile pictures, favicons, watermarks under 120px — use the **"n" only**, taken from the wordmark artwork itself and never redrawn. The lockup is a rounded square (23% radius) holding a centred disc at 62% of the tile, with the "n" inside the disc at 30% of the tile; the disc is what keeps the mark legible down to 24px. Four colourways, and the glyph always matches the tile colour so the disc reads as a cut-out:

| Variant | Use on | Tile | Disc | "n" |
| --- | --- | --- | --- | --- |
| `red` (default) | Ink, paper, white or photography — the safe default | Nord Red | White | Nord Red |
| `ink` | **Light surfaces only** (paper, white) | Ink | Nord Red | White |
| `paper` | Ink and dark surfaces | Paper | Ink | Paper |
| `white` | Ink and dark surfaces; paper only with a shadow | White | Nord Red | White |

The tile must contrast with what sits behind it. `variant="ink"` on an ink canvas makes the tile vanish and leaves a stray red disc — pick `red` or `paper` there instead.

`frame="circle"` drops the square for a solid disc (profile pictures); `frame="bare"` is the glyph alone, for favicons and inline marks. Never set the monogram beside the full wordmark, never rotate it, and never place it on photography without its solid tile. If a UI ever needs true interface icons (a website nav, a dashboard), use **Lucide** from CDN at 1.5px stroke — that is a substitution, flagged here, not a brand asset.

## Intentional additions

- **Form primitives** (`Input`, `Select`, `Checkbox`) — no source defined them, but the meeting-first sales motion needs a brief/contact form, and it must look like the brand. Forms sit on Paper, never on red; error states are a red hairline plus a small dot, with the message itself in neutral grey.
- **Accent serif** — Playfair Display italic stands in for the unnamed serif in the wordmark. **Send the real serif font file and this gets replaced.**

## Index

**Root**
- `styles.css` — the single entry point; imports everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/` — logo variants (`logo-wordmark-white|ink|red.svg`, `logo-lockup-red|ink.svg`, `logo-lockup-source.svg`), the monogram set (`app-icon-red|ink|paper|white.svg`, `avatar-red|ink.svg`, `monogram-n-ink|white|red.svg`) and `assets/fonts/` (nine Saldo cuts).
- `refs/` — the fifteen reference boards, renamed `sample1–15.jpg`.
- `guidelines/` — 19 specimen cards for the Design System tab (Colors, Type, Spacing, Brand).
- `SKILL.md` — Agent Skills entry point.
- `thumbnail.html` — homepage tile.

**Components** (`components/<group>/`)
- core: `Button`, `IconButton`, `Badge`, `Card`
- brand: `Logo`, `Monogram`, `Eyebrow`, `Watermark`
- editorial: `StatFigure`, `PullQuote`, `NumberedItem`, `ImageFrame`
- forms: `Input`, `Select`, `Checkbox`

Each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

**Templates** (`templates/<slug>/`)
- `letterhead/` — A4 antetli kağıt: ilk sayfa (ink başlık bloğu + yazışma alanı), devam sayfası, tam ink kapak/arka sayfa. Baskıya hazır, 210 × 297 mm, 20 mm kenar boşluğu.

**UI kits**
- `ui_kits/social/` — Instagram profile feed + sixteen 1080 × 1350 post templates (`Posts.jsx` core set, `PostsB.jsx` reference-derived set), with a tap-through viewer.
- `ui_kits/stories/` — six 1080 × 1920 story templates in a phone frame: Duyuru, Teaser, Brief formu, Referans, Geri sayım, Yeni içerik.

No slide deck kit and no website kit: no deck template and no existing site were supplied.
