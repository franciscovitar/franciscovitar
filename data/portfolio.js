export const featuredProjects = [
  {
    slug: "vida-2",
    visual: "vida",
    title: "Vida 2.0",
    label: "Public flagship",
    status: "Active",
    hook:
      "One product layer over multiple real data authorities — without pretending the web app is the source of truth.",
    summary:
      "Authenticated personal operating system spanning health, finance, planning and other private domains.",
    stack: ["Next.js", "React", "TypeScript", "Notion", "Google Sheets"],
    evidence:
      "Source boundaries, fail-closed behavior, safe-write/idempotency rules and automated preflight checks.",
    highlights: [
      "Real-source failure stays visible",
      "Private data stays outside the public portfolio",
      "Reads and writes have different safety boundaries",
    ],
    href: "/work/vida-2",
    repo: "https://github.com/franciscovitar/vida-2.0",
  },
  {
    slug: "library-network-api",
    visual: "library",
    title: "Library Network API",
    label: "Public backend lab",
    status: "Public simulator · verified backend V1",
    hook:
      "A physical library copy cannot be loaned twice, even under concurrent requests and retries.",
    summary:
      "FastAPI/PostgreSQL lab with tested concurrency and a separate public, synthetic loan simulator.",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    evidence:
      "129 passing tests in a linked public GitHub Actions run, including 117 PostgreSQL integration tests.",
    highlights: [
      "Concurrent claims serialize with row locks",
      "Constraints protect against double loans",
      "Idempotent retries and rollback are verified",
    ],
    href: "/work/library-network-api",
    repo: "https://github.com/franciscovitar/library-network-api",
  },
  {
    slug: "webhook-recovery-lab",
    visual: "webhook",
    title: "Webhook Recovery Lab",
    label: "Private reliability lab",
    status: "Public simulator · private backend",
    hook:
      "Recover signed webhook delivery through crashes, duplicate events and receiver timeouts.",
    summary:
      "Private TypeScript/Fastify/PostgreSQL experiment with a durable inbox, retries and replay.",
    stack: ["TypeScript", "Fastify", "PostgreSQL", "Docker", "Vitest"],
    evidence:
      "Private CI validates the real backend; a public browser-only failure simulator demonstrates its contracts, not the live API.",
    highlights: [
      "Ingress is acknowledged only after durable commit",
      "Leases and fencing prevent stale worker acknowledgements",
      "Receiver idempotency handles at-least-once delivery",
    ],
    href: "/work/webhook-recovery-lab",
  },
  {
    slug: "personal-ai-system",
    visual: "pas",
    title: "Personal AI System",
    label: "Private flagship",
    status: "Active",
    hook:
      "A control layer for long-running AI work: canonical truth, bounded permissions, evidence and verification.",
    summary:
      "Modular system coordinating AI-assisted research, software work, learning and project execution over time.",
    stack: ["Python", "GitHub", "Agents", "Evals", "Governance"],
    evidence:
      "Capability-based routing, canonical-source rules, provenance, least privilege and continuous-improvement workflows.",
    highlights: [
      "Current canonical state beats stale chat context",
      "Tool access follows least privilege",
      "AI output remains separate from verification",
    ],
    href: "/work/personal-ai-system",
  },
  {
    slug: "cauce-commerce-lab",
    visual: "mediterranea",
    title: "Cauce Commerce Lab",
    label: "Personal commerce engineering",
    status: "Public storefront · verified test payments",
    hook:
      "A public fictional storefront with secure checkout, server-verified test payments and transactional inventory.",
    summary:
      "Isolated Next.js/Supabase storefront with a public catalog, test-only Mercado Pago Checkout Pro, signed webhooks and real sandbox payment verification.",
    stack: ["Next.js", "TypeScript", "Supabase", "RLS", "Testing"],
    evidence:
      "Observed approved and rejected test payments, server-side reconciliation, idempotent stock movements and a dedicated protected merchant area; CONT E2E remains pending.",
    highlights: [
      "Admin access backed by database authorization",
      "Checkout totals validated server-side",
      "Test payments verified; public browsing requires no Vercel login",
    ],
    href: "/work/cauce-commerce-lab",
    repo: "https://github.com/franciscovitar/la-mediterranea-store",
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Source boundaries",
    body:
      "Make authority explicit: what is canonical, what is derived and what happens when the real source is unavailable.",
  },
  {
    number: "02",
    title: "Verification",
    body:
      "Use tests, read-back and observable failure states instead of treating a successful build as proof.",
  },
  {
    number: "03",
    title: "Safe change",
    body:
      "Prefer bounded changes, explicit permissions, idempotency and reversible paths when mistakes are expensive.",
  },
  {
    number: "04",
    title: "AI with accountability",
    body:
      "Use AI heavily for implementation and orchestration while keeping requirements, evidence and final verification explicit.",
  },
];

export const clientWork = [
  {
    title: "Pimp",
    detail:
      "Next.js service website with controlled form behavior, data-driven sections and Vitest/Testing Library coverage.",
    repo: "https://github.com/franciscovitar/pimp",
    live: "https://www.pimpestetica.com/",
  },
  {
    title: "Contexto.Psi",
    detail:
      "Mental-health service platform delivered and maintained around real content, team and onboarding constraints.",
    repo: "https://github.com/franciscovitar/contextopsi",
    live: "https://www.contextopsi.com.ar/",
  },
  {
    title: "Value Latam",
    detail:
      "Client website built with Next.js/React, Playwright E2E, Resend and a documented motion/maintainability system.",
    repo: "https://github.com/franciscovitar/valuelatamnuevo3",
    live: "https://www.valuelatam.com/",
  },
  {
    title: "Baterías Sur",
    detail:
      "Next.js client site with service and diagnostic flows, validated WhatsApp lead handoff and explicit SEO metadata.",
    live: "https://www.bateriasur.com.ar/",
  },
];

export const stackGroups = [
  {
    label: "Languages",
    value: "TypeScript · JavaScript · Python · SQL · HTML · CSS/SCSS",
  },
  {
    label: "Product",
    value: "React · Next.js · responsive web development",
  },
  {
    label: "Data / backend",
    value: "PostgreSQL · Supabase · relational data modeling · API integrations",
  },
  {
    label: "Quality",
    value: "Automated testing · Playwright · Vitest · Git/GitHub · CI/check workflows",
  },
  {
    label: "AI-assisted engineering",
    value: "Agent/tool orchestration · evidence and verification workflows",
  },
];

export const selectedGrades = [
  "Software Development — 9/10",
  "Databases — 9/10",
  "Backend Applications — 9/10",
  "Programming Paradigms — 9/10",
  "Operating Systems — 8/10",
  "Algorithms & Data Structures — 8/10",
  "Computer Architecture — 8/10",
  "Data Communications — 8/10",
];
