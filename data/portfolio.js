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
    slug: "football-intelligence",
    visual: "football",
    title: "Football Intelligence",
    label: "Private flagship",
    status: "In progress",
    hook:
      "Research becomes product data only after QA, transactional publication and explicit provenance.",
    summary:
      "PostgreSQL-backed football intelligence product with historical publication state and read-only public surfaces.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "QA", "Read models"],
    evidence:
      "Transactional publication, explicit missingness and a separate read-only database role for the web path.",
    highlights: [
      "Research and public truth are separated",
      "The normal web path cannot write publication state",
      "Missing data is not silently converted to zero",
    ],
    href: "/work/football-intelligence",
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
    slug: "la-mediterranea-store",
    visual: "mediterranea",
    title: "La Mediterránea Store",
    label: "Supporting full-stack",
    status: "Integration-ready",
    hook:
      "A real storefront with persistent catalog/order data, RLS-backed admin access and server-authoritative checkout.",
    summary:
      "Next.js/TypeScript merchandise storefront backed by Supabase with explicit payment-integration boundaries.",
    stack: ["Next.js", "TypeScript", "Supabase", "RLS", "Testing"],
    evidence:
      "Idempotency, backup/export/validated restore and a prepared — not falsely live — payment boundary.",
    highlights: [
      "Admin access backed by database authorization",
      "Checkout totals validated server-side",
      "Payment integration is labeled honestly as prepared",
    ],
    href: "/work/la-mediterranea-store",
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
    type: "Client product",
    detail:
      "Next.js service website with controlled form behavior, data-driven sections and Vitest/Testing Library coverage.",
    repo: "https://github.com/franciscovitar/pimp",
    live: "https://www.pimpestetica.com/",
  },
  {
    title: "Contexto.Psi",
    type: "Client product",
    detail:
      "Mental-health service platform delivered and maintained around real content, team and onboarding constraints.",
    repo: "https://github.com/franciscovitar/contextopsi",
    live: "https://www.contextopsi.com.ar/",
  },
  {
    title: "Value Latam",
    type: "Maintained frontend",
    detail:
      "Next.js/React frontend with Playwright E2E, motion systems and explicit visual-parity and maintainability constraints.",
    repo: "https://github.com/franciscovitar/valuelatamnuevo3",
    live: "https://www.valuelatam.com/",
  },
  {
    title: "Baterías Sur",
    type: "Client product",
    detail:
      "Next.js service site for an automotive battery center with diagnosis, service flows, home assistance and direct contact.",
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
