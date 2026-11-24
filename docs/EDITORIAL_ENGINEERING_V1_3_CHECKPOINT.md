# Editorial Engineering V1.3 — release candidate

Status: TECHNICAL_QA_PASS; NOT_DEPLOYED.
Approved concept: Editorial Engineering / Living Systems / Structured Mosaic / Pure Obsidian / Manrope Variable + Instrument Serif / varied cinematic motion V1.3 / adaptive navigation / dedicated Genova page.
Production baseline: `706cde642d4d197a3fab91104e94176ee803f5db`.
Tested application source: `b6edeab94c063638cc0e4d3d807a62cc7472f5aa`.
QA branch: `qa/editorial-engineering-v13-20261124`.

## Evidence (2026-11-24)

- GitHub Actions [run 45501170881](https://github.com/franciscovitar/franciscovitar/actions/runs/45501170881), job 138824545880: success.
- Node 24, npm ci, focused ESLint, Next.js 16.4.6 webpack production build: pass. Existing 19-file PAS Explorer snapshot checked against eb1b7e8d4b37cd275d830ba7753b297d3601385c.
- Chromium/Playwright: 56 route/locale/viewport combinations (7 routes, en/es, 320/390/768/1440), no detected document horizontal overflow or page errors; home header, mobile Escape, font load, reduced motion, PAS details, desktop compact header, home language switch, Genova navigation, CV and Explorer HTTP checks pass.
- 80 screenshot image observations: rendered lazy-load decode and direct HTTP WebP check passed. No client image replaced. Earlier EncodingError was not reproduced once waiting for actual source and load completion.
- Visual artifact [14969474283](https://github.com/franciscovitar/franciscovitar/actions/runs/45501170881/artifacts/14969474283), 14 PNGs; desktop/mobile home, Genova, and case viewport captures inspected. Artifact retention 7 days. Static captures do not independently prove animation smoothness; browser checks verify animation presence and reduced-motion behavior.
- Cauce's existing public hero copied byte-for-byte from `franciscovitar/la-mediterranea-store` main f1bccd38bc9c445a43c5c4c43de8d710beb6ec93, `public/cauce/hero.webp`, blob d667a0bac741efa57ac211134f4a3f5ce56cb9c1 (135072 bytes); no separate demo request needed for this image.
- 55 original protected data, route, public asset, CV, API and Explorer blobs unchanged. Added two pinned OFL-1.1 font packages (5.3.0), no other package-lock entry changed except root dependencies. Newsreader/Geist retained for existing CV.
- Hero interface artwork is explicitly conceptual; real client website screenshots use existing authorization flags. Marketing case material not included pending selection and publication clearance. Existing public links preserved; external demo backends not modified or independently re-tested by this redesign.

## Release gate

The release tree copies the exact tested application blobs and excludes the QA-only workflow, QA script and branch-specific Vercel configuration. This document differs from the tested checkpoint; no executable production code differs. The QA branch retains test evidence and diagnostic history. No main mutation or Vercel deployment performed by preparing this candidate.

Before release: verify current included Vercel credit/no additional spend and current main baseline; use one authorized Git-triggered production deployment after approval gates. Confirm READY and exact source SHA, public aliases and core routes if runtime access available. Preserve previous deployment as rollback target; do not change team-wide billing, project protection or unrelated sites.

Known limitations: tested Chromium only, representative viewport screenshots, external demos not exercised; not a formal accessibility audit. CI reported upstream action Node 20 deprecation and existing ESLint version warning; no dependency upgrade undertaken outside approved design scope.
