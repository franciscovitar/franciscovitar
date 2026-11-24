# PAS Explorer — portfolio integration

The Showcase repository owns reference code and tests. This portfolio carries a pinned, generated static snapshot of the 19 allowlisted public files. No private PAS content is copied. The static entry is `/pas-explorer/explorer/index.html?lang=es` (English: `?lang=en`). It is served by the existing portfolio, not a second provider or backend.

Source revision: `eb1b7e8d4b37cd275d830ba7753b297d3601385c`. [CI evidence](https://github.com/franciscovitar/personal-ai-system-showcase/actions/runs/45485921797): 49/49, including real Chromium, desktop and 390 px mobile, keyboard, Spanish/English and negative cases. This is evidence for the reference, not for the Next.js portfolio build or deployed route.

Run `npm run check:pas-explorer` to verify the inventory, Git blob digests and byte lengths. The Next.js build runs this check first. To update, build the public Showcase at an accepted source revision and replace only its allowlisted snapshot with a matching manifest. Do not edit duplicate modules in the portfolio or fetch private sources during build. This is a deliberate generated distribution copy, not a second source of truth.

Release gates: full portfolio build and navigation verification, explicit release authorization, zero incremental cost verified. Current commit is staged, not deployed. Manual visual review remains separate from automated viewport tests.

## Integration QA

First isolated CI build ([run 45486757427](https://github.com/franciscovitar/personal-ai-system-showcase/actions/runs/45486757427)) compiled and served all 19 exact assets; both desktop language journeys passed. Screenshots revealed over-compressed flagship copy, and the 390px homepage overflow assertion failed (448px). Revised only the flagship home layout: two bounded desktop columns, one mobile column, and wrapping links. A local Chromium CSS/markup reproduction validates the revised component at 320, 390, 640, 768, 1024 and 1440px. Full integrated browser acceptance is required for this revised candidate; the previous run is not a release pass.
