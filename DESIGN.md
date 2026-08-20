# Design System: Crucible Web — "Forge Editorial"

A single design language fused from two references:

- **Intercom** (`/reference/intercom-DESIGN.md`): warm cream canvas (`#faf9f6`),
  off-black ink (`#111111`), Fin Orange (`#ff5600`) as the sole accent, sharp
  4px radius geometry, billboard display type with aggressive negative tracking
  and 0.95–1.00 line-height, mono uppercase technical labels, physical
  scale-hover on buttons.
- **ElevenLabs** (`/reference/eleven-DESIGN.md`): generous Apple-like
  whitespace, whisper-level multi-layer shadows with warm tints, light display
  weights at large sizes, airy positive letter-spacing on body text, restrained
  achromatic surfaces.

**Creative North Star: "The Forge, editorialized."** A warm off-white magazine
spread with engineered, billboard-style typography. The ember-orange accent is
a rare spark — it marks the action, the highlight, and the flame. Everything
else stays warm-neutral, calm, and sharply geometric.

## Colors

| Token | Value | Role |
|-------|-------|------|
| `--canvas` | `#faf9f6` | Page background — warm cream |
| `--surface` | `#ffffff` | Cards, raised panels |
| `--ink` | `#111111` | Primary text, dark buttons, dark bands |
| `--ink-80` | `#313130` | Strong secondary text |
| `--ink-60` | `#626260` | Body-muted text |
| `--ink-50` | `#7b7b78` | Quiet text, meta |
| `--oat` | `#dedbd6` | Borders — always warm oat, never cool gray |
| `--sand` | `#d3cec6` | Hover borders, darker hairlines |
| `--fin` | `#ff5600` | Brand accent — hero CTA, eyebrows, active marks |
| `--fin-deep` | `#e04c00` | Accent hover/active (Fin Orange carries ink text, never white) |

### Report palette (data-viz flavor, data only)

`#65b5ff` blue · `#0bdf50` green · `#ff2067` pink · `#b3e01c` lime ·
`#ffb566` amber. Used exclusively for the product-mock "output" chips,
index markers, and the waveform — never for interactive chrome.

### Named rules

- **The Rare Spark Rule.** Fin Orange appears at most twice per viewport: the
  primary CTA and the current highlight. It carries off-black text (`#111111`),
  never white (contrast floor).
- **The Warm Neutral Rule.** Every border and shadow is warm (oat/sand/stone).
  No cool grays, no pure-black shadows.
- **The Whisper Shadow Rule.** Shadows are multi-layer, sub-0.1 opacity,
  warm-tinted: `0 1px 2px rgb(28 25 23 / 0.05), 0 1px 3px rgb(28 25 23 / 0.06)`.
  Depth comes from borders and surface contrast, not heavy elevation.

## Typography

- **Display / body:** Archivo Variable (Saans analog — geometric grotesque).
- **Editorial accent:** Newsreader Variable, italic, light — used only for
  italic serif moments inside display headlines and ledes.
- **Technical labels:** Geist Mono — uppercase, 12px, `0.08em` tracking
  (nav links, eyebrows, step numbers, meta).

### Hierarchy

| Role | Size (clamp) | Weight | Line-height | Tracking |
|------|--------------|--------|-------------|----------|
| Hero display | `3rem → 5.5rem` | 430 | 0.95 | `-0.035em` |
| Section display | `2.25rem → 3.375rem` | 420 | 1.00 | `-0.03em` |
| Card title | `1.25rem → 1.5rem` | 520 | 1.10 | `-0.02em` |
| Body | `1rem` | 420 | 1.55 | `0.005em` |
| Body small | `0.875rem` | 420 | 1.55 | normal |
| Mono label | `0.75rem` | 500 | 1.0 | `0.08em`, uppercase |

## Shapes & Components

- **Two-radius rhythm:** 4px for everything you act on (buttons, inputs, nav
  pills); 8px for containers (cards, panels, mocks). No intermediate radii.
- **Buttons:** 4px radius, 1px border matching the fill (so the Intercom
  color-flip reads cleanly), padding `13px 22px`, min-height 44px.
  Hover: `scale(1.05)` + color flip (dark → cream, fin → fin-deep).
  Active: `scale(0.96)`. Wrapped in `prefers-reduced-motion` guards.
- **Primary dark:** `#111` fill, white text; hover flips to `#faf9f6` with
  `#111` text.
- **Primary fin:** `#ff5600` fill, `#111` text; the single "move forward" CTA.
- **Outlined:** transparent, 1px `#111` border.
- **Cards:** white surface, 1px oat border, 8px radius, whisper shadow.
  Highlighted card (Crucible Engine / Pro tier): fin border + fin top rule.
- **Navigation:** sticky, translucent cream (`rgb(250 249 246 / 0.85)` +
  `backdrop-filter: blur(8px)`), 1px oat hairline below. Links are Geist Mono
  uppercase 12px pills with 6px radius; active = fin text.

## Layout

- Content cap `1120px`, page gutter `24px` (16px < 640px).
- Section rhythm: `104px` desktop / `72px` mobile vertical padding.
- Sections alternate cream canvas and white wash; hairlines (`1px oat`) between.
- Breakpoints: 640px, 768px, 1024px.

## Motion

- Enter/exit easing: `cubic-bezier(0.23, 1, 0.32, 1)`. Enters ~500ms, exits ~140ms.
- Scroll reveals: opacity + 16px rise, staggered 60ms, disabled under
  `prefers-reduced-motion`.
- Never animate from `scale(0)`; never use `ease-in` for UI.

## Do / Don't

- **Do** keep the canvas warm cream with oat hairlines and whisper shadows.
- **Do** spend Fin Orange on exactly one CTA per viewport + the active mark.
- **Do** keep display type tight: `0.95–1.00` line-height, negative tracking.
- **Do** use mono uppercase for all technical labels.
- **Don't** set white text on Fin Orange.
- **Don't** introduce a second brand hue, cool grays, or heavy shadows.
- **Don't** round buttons beyond 4px or cards beyond 8px.
- **Don't** use all-caps in body copy or body copy in display type.

## Sources

- `/reference/intercom-DESIGN.md` — canvas, ink, fin, geometry, mono labels, scale hover.
- `/reference/eleven-DESIGN.md` — whitespace, whisper shadows, light display weight, airy body.
- `/reference/homepage-preview.html` — content source of truth (copy, sections, pricing, FAQ).
