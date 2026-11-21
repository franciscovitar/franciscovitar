# Francisco Vitar

**Software Engineer · Full-Stack Product Engineer**  
TypeScript · React/Next.js · PostgreSQL/SQL · Python · Testing · AI-native engineering

**Portfolio:** [franciscovitar.vercel.app](https://franciscovitar.vercel.app/)

I’m a fourth-year Systems Engineering student at UTN building product systems across web, data and AI-assisted workflows. I’ve also built and delivered **40+ client websites/products** for real third-party clients.

I care about explicit source boundaries, testable behavior, privacy, safe/reversible change and using AI with verification rather than treating generated output as automatically correct.

## Selected engineering work

### [Vida 2.0](https://github.com/franciscovitar/vida-2.0)
Personal operating system built with **Next.js, React and TypeScript**.

- Integrates Notion, Google Sheets and Google Calendar with explicit source-of-truth boundaries.
- Uses authenticated/private surfaces, fail-closed behavior, feature flags and safe-write/idempotency rules.
- Includes product areas for health, nutrition, gym, finance, projects, tasks, learning and automations.
- Uses automated checks and environment/preflight validation.

### [La Mediterránea Store](https://github.com/franciscovitar/la-mediterranea-store)
Full-stack storefront built with **Next.js, TypeScript and Supabase**.

- Relational product/variant/stock/order persistence.
- Magic Link authentication and RLS-backed admin authorization.
- Server-authoritative checkout quoting and idempotency.
- Backup/export/validated restore and automated verification.
- Mercado Pago integration boundary is prepared, not represented as live.

### [Library Network API](https://github.com/franciscovitar/library-network-api)
Public, locally reproducible backend lab built with **FastAPI, SQLAlchemy and PostgreSQL**.

- Transactional interlibrary loans with a physical-copy lifecycle and explicit state transitions.
- PostgreSQL row locking and constraints prevent concurrent double loans.
- `Idempotency-Key` handling, atomic rollback and damaged-copy retirement.
- [Technical case study](https://franciscovitar.vercel.app/work/library-network-api) with a public CI run (129 passing tests); no public hosted API is claimed.

### [Value Latam](https://github.com/franciscovitar/valuelatamnuevo3)
Production-oriented frontend work with **Next.js, React, Playwright, Sass and GSAP**.

- End-to-end regression coverage for navigation, forms, internal pages and reduced-motion behavior.
- Explicit visual-parity and maintainability constraints.
- Deliberate technical-debt decisions when refactoring risk is higher than expected value.

### [Pimp](https://github.com/franciscovitar/pimp)
Client delivery example built with **Next.js, React, Sass and Vitest/Testing Library**.

- Controlled form validation/submission and truthful success/error states.
- Data-driven services and reusable components.
- Tests around form behavior, service data and navigation.

## Current private systems

### Webhook Recovery Lab — active / in progress
Private reliability lab built with **TypeScript, Fastify and PostgreSQL**, using synthetic events.

It explores HMAC-signed ingress, a durable inbox, concurrent workers with leases, bounded retries, dead-letter and audited replay. Delivery is at least once; receiver-side idempotency prevents duplicate recorded effects. It is not publicly hosted or production-ready. [Read the sanitized engineering case study](https://franciscovitar.vercel.app/work/webhook-recovery-lab).

### Personal AI System
Private modular system for AI-assisted research, software work, learning and execution.

It includes capability-based tool routing, canonical-source rules, evidence/provenance models, eval-oriented workflows, least-privilege execution policy and agent-security boundaries. [Read the sanitized public case study](https://franciscovitar.vercel.app/work/personal-ai-system) rather than exposing the private repository or private system state.

## Engineering stack

**Languages:** TypeScript, JavaScript, Python, SQL, HTML, CSS/SCSS  
**Frontend / product:** React, Next.js  
**Data / backend:** PostgreSQL, Supabase, API integrations  
**Quality:** automated testing, Playwright, Vitest, Git/GitHub, CI/check workflows  
**AI-assisted engineering:** agent/tool orchestration, evidence and verification workflows

## Education

**Universidad Tecnológica Nacional (UTN)** — Systems Engineering  
2023–Present · fourth academic year in 2026

Selected technical results include **9/10 in Software Development, Databases, Backend Applications and Programming Paradigms**, plus **8/10 in Operating Systems, Algorithms & Data Structures, Computer Architecture and Data Communications**.

## Contact

- [LinkedIn](https://www.linkedin.com/in/franciscovitar/)
- [Email](mailto:franvitar15@gmail.com)

Interested in **Software Engineer** and **Full-Stack / Product Engineer** roles.
