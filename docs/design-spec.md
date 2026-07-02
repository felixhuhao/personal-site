# Design Spec — Hao Hu personal site

Source of truth: [`src/styles/global.css`](../src/styles/global.css) (CSS variables under `:root` = dark, `[data-theme="light"]` = light). This doc documents the intent; change tokens here and in the CSS together.

## Direction
Premium, modern "AI-lab" aesthetic — calm dark canvas, one vivid accent, generous spacing, tight typography, subtle motion. **Dark is the default; a header toggle switches to light** (persisted to `localStorage`, no-flash init). Everything is token-driven so the whole look can be re-skinned cheaply.

## Color tokens

| Token | Dark (default) | Light | Role |
|---|---|---|---|
| `--bg` | `#0a0e16` | `#f7f9fc` | page background |
| `--surface` | `#111726` | `#ffffff` | cards / panels |
| `--surface-2` | `#161d2e` | `#f1f5fb` | tags, media wells |
| `--border` | `#222b40` | `#e3e9f2` | card/control borders |
| `--border-soft` | `#1b2335` | `#eef2f8` | dividers |
| `--ink` | `#e7ecf6` | `#16203a` | primary text |
| `--muted` | `#97a3bb` | `#586079` | secondary text |
| `--faint` | `#6b768f` | `#7b8499` | timestamps / footer |
| `--accent` | `#6aa6ff` | `#2456c6` | links, CTAs, headings accents |
| `--accent-2` | `#5ee0c0` | `#0f8a73` | gradient partner (hero text, logo) |
| `--accent-soft` | `rgba(106,166,255,.12)` | `rgba(36,86,198,.09)` | ambient glow, hover wash |

- Single accent + a teal-ish partner used only for the hero gradient and brand mark.
- Dark mode has a faint radial accent glow at the top of the page (`body::before`).

## Typography
- **Source Sans 3** for body/UI, **Sora** for headings/brand, **JetBrains Mono** for `code`. Stylistic sets enabled (`cv02/03/04, ss01`).
- Scale: `h1` clamp 2.4→3.9rem (800); `h2` 1.6→2.1rem (700); `h3` 1.12rem (700); body 1rem/1.6.
- Eyebrows: 0.74-0.82rem, accent color, no added letter spacing.

## Layout & shape
- Container `--maxw: 1080px`, 20px gutters. Section vertical rhythm: 72px (`.section`), hero 88px top.
- Radius: `--radius: 8px`, `--radius-sm: 8px`.
- Grids: projects 3-col, lab 3-col, skills 2-col, experience = 120px date rail + content. All collapse to 1-col < 880px.

## Components
- **Header**: sticky, blurred translucent bar, brand (gradient chip + name), nav links, language toggle, theme toggle (sun/moon SVG swap), and mobile menu.
- **Hero**: single-column intro with proof strips for pedigree, metrics, and skills; `.grad` is a solid teal accent on the headline phrase.
- **Buttons**: `.btn-primary` (filled accent) and `.btn-ghost` (surface + border); 44px min height, 1px lift on hover.
- **Cards** (`.card`): media (16:10) + body; hover = lift + accent border + shadow. **Lab cards** are lighter (no media). **Skill cards** group tags by category.
- **Tags** (`.tag`): pill, surface-2 bg, muted text.
- **Experience**: borderless timeline rows, tabular date rail, role + accent company + muted detail.
- **Project detail**: hero (copy + image), "How it works" panel, 3-col Capabilities/Evidence/Try-this (`.check` list with accent `→`), source repos.
- **Case study**: reusable flagship page with localized architecture diagram, outcomes, stack, deep-dive links, and source repos.
- **Notes**: EN-only article index and detail pages under `/notes/`.

## Motion
- 0.12–0.15s transitions on transform/border/background; hover lifts of 1–3px. `scroll-behavior: smooth` with 84px scroll-padding for the sticky header.

## Open design decisions (your call)
- Accent hue (`#6aa6ff` periwinkle-blue) and the teal partner `#5ee0c0` — swap freely.
- Default theme (currently dark). 
- Hero headline wording/gradient extent.
- Whether the ambient top glow stays in dark mode.
