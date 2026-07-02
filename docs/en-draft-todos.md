# EN Draft TODOs

Review date: 2026-07-01

Build status: `npm run build` passes with 0 Astro errors/warnings/hints.

## Done

- Published the EN engineering notes by moving them from `src/pages/_notes` to `src/pages/notes`; `/notes/`, `/notes/approval-boundary/`, and `/notes/sql-guard/` now build.
- Disabled language alternates on EN-only notes so they do not link to non-existent `/zh/notes/...` routes.
- Restored `twitter:image` in `src/layouts/BaseLayout.astro`.
- Localized non-content accessibility strings: primary nav label, language-switch label, and image-preview alt suffixes.
- Removed the unused `langFromPath` helper.
- Updated `docs/design-spec.md` so it matches the current fonts, radii, hero structure, language toggle, case study page, and notes routes.
- Checked the generated sitemap. Bilingual home/project/case-study routes include `en`/`zh` alternates; EN-only notes do not.
- Kept `src/data/profile.ts` and `src/data/projects.ts` as the English source of truth, with `src/i18n/en.ts` importing them and `src/i18n/zh.ts` carrying the translated equivalents.
- Ran a Playwright browser pass across `/`, `/zh/`, `/work/erp-ai-layer/`, `/zh/work/erp-ai-layer/`, all EN project routes, and EN notes at 390px, 768px, and 1280px widths. Fixed the zh mobile hero overflow by allowing the highlighted phrase to wrap.
- Standardized system naming: `Operations Copilot`, `NL2SQL Data Agent`, and `Knowledge Assistant` as named systems; `ERP AI layer` as the umbrella.
- Softened the `LLM is the easy 10%` line in both locales to frame the model as one component of a production system.
- Kept shared `og.png` for both locales.
- Verified public resume PDFs match the generated files in `resume/`: `public/resume-v2.pdf` matches `resume/resume-v2.pdf`, and `public/resume_cn-v2.pdf` matches `resume/resume_cn-v2.pdf`.
- Revalidated public numeric claims by owner confirmation: `10-30K QPS`, `~140ms p99`, `99.97% backup health`, `~73% prompt-context reduction`, and `76-case result-equivalence smoke suite`.

## Needs Your Confirmation

- Verify all demo links are public enough for visitors. If the demos are login-gated without demo credentials, consider replacing `Live demo (login-gated)` with source links, screenshots, or a short access note.
