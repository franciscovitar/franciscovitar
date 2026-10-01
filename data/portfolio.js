export const featuredProjects = [
  {
    title: "Vida 2.0",
    label: "Public flagship",
    status: "Active",
    summary:
      "Personal operating system integrating multiple real data authorities without turning the web app into a second source of truth.",
    stack: ["Next.js", "React", "TypeScript", "Notion", "Google Sheets"],
    evidence:
      "Source boundaries, authenticated surfaces, fail-closed behavior, safe-write/idempotency rules and automated preflight checks.",
    href: "/work/vida-2",
    repo: "https://github.com/franciscovitar/vida-2.0",
  },
  {
    title: "Football Intelligence App",
    label: "Private flagship",
    status: "In progress",
    summary:
      "Football intelligence product that separates research, QA publication, PostgreSQL history and read-only public product surfaces.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "QA", "Read models"],
    evidence:
      "Transactional publication, provenance, explicit missingness and a separate read-only database role for the web path.",
    href: "/work/football-intelligence",
  },
  {
    title: "Personal AI System",
    label: "Private flagship",
    status: "Active",
    summary:
      "Modular system for AI-assisted research, software work, learning and project execution with explicit authority and permission boundaries.",
    stack: ["Python", "GitHub", "Agents", "Evals", "Governance"],
    evidence:
      "Capability-based routing, canonical-source rules, evidence/provenance, least privilege and continuous-improvement workflows.",
    href: "/work/personal-ai-system",
  },
  {
    title: "La Mediterránea Store",
    label: "Supporting full-stack",
    status: "Integration-ready",
    summary:
      "Full-stack merchandise storefront with persistent catalog/order data, authenticated admin workflows and explicit payment boundaries.",
    stack: ["Next.js", "TypeScript", "Supabase", "RLS", "Testing"],
    evidence:
      "Server-authoritative checkout quotes, RLS-backed admin access, idempotency and backup/export/validated restore.",
    href: "/work/la-mediterranea-store",
    repo: "https://github.com/franciscovitar/la-mediterranea-store",
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Source boundaries",
    body:
      "Make authority explicit: what is canonical, what is derived and what happens when a real source is unavailable.",
  },
  {
    number: "02",
    title: "Verification",
    body:
      "Prefer tests, read-back and observable failure states over assuming that a successful build means the behavior is correct.",
  },
  {
    number: "03",
    title: "Safe change",
    body:
      "Use bounded changes, explicit permissions, idempotency and reversible paths where a mistake would be expensive.",
  },
  {
    number: "04",
    title: "AI with accountability",
    body:
      "Use AI heavily for implementation and orchestration while keeping requirements, evidence, tests and final verification explicit.",
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
  },
  {
    title: "Kinesiología Laprida",
    type: "Client delivery",
    detail:
      "Responsive healthcare website delivered for a real clinic with service, facility and direct-contact flows.",
    repo: "https://github.com/franciscovitar/kinesiologialaprida",
    live: "https://www.kinesiologialaprida.com/",
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
