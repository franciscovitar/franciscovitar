export const caseStudies = {
  vida: {
    slug: "vida-2",
    title: "Vida 2.0",
    eyebrow: "Public flagship · Active",
    summary:
      "A personal operating system that brings multiple parts of daily life into one authenticated interface while preserving the authority and privacy of the underlying sources.",
    stack: ["Next.js", "React", "TypeScript", "Notion", "Google Sheets", "Google Calendar"],
    links: [{ label: "Public repository", href: "https://github.com/franciscovitar/vida-2.0" }],
    problem:
      "Personal information already lived in authoritative tools. The goal was not to copy everything into one new database, but to create a useful product layer without creating a second source of truth.",
    constraints: [
      "Private personal data must not become public simply to demonstrate the product.",
      "Notion, Sheets and Calendar keep distinct responsibilities and authority.",
      "A failed real source must not silently fall back to fake Production data.",
      "Writes require stronger safety and authorization than reads.",
      "Development/test fixtures must stay outside Production behavior.",
      "Agent access must remain bounded by explicit permissions.",
    ],
    architecture: [
      "Notion / Google Sheets / Google Calendar",
      "Typed adapters and domain loaders",
      "Authenticated product surfaces",
      "Explicit failure and readiness states",
      "Safe-write and policy boundaries where writes are allowed",
    ],
    decisions: [
      { title: "Preserve source authority", body: "Vida composes domain views instead of pretending every domain belongs in a new canonical store." },
      { title: "Fail closed instead of faking success", body: "When a selected real source fails, the product exposes that state instead of injecting mocks as if they were real." },
      { title: "Separate read and write risk", body: "Many integrations remain read-only; write paths sit behind explicit policies, feature flags, idempotency and runtime checks." },
      { title: "Keep agent access bounded", body: "Server-to-server agent paths are designed around authorized context and proposals instead of unrestricted final-write authority." },
    ],
    verification: [
      "Typed domain contracts and static checks.",
      "Automated tests around source boundaries and safe writes.",
      "Idempotency and policy-engine verification.",
      "Environment/preflight validation for Preview and Production assumptions.",
      "Explicit runtime readiness instead of hidden fallback.",
    ],
    safety: [
      "No silent DEV-to-Production source fallback.",
      "Sensitive features default off behind flags/permissions.",
      "Production writes require explicit gates.",
      "Runtime status surfaces are sanitized and do not expose credentials.",
    ],
    status:
      "Vida 2.0 is an active personal product. The runtime data is private; this case study intentionally shows architecture and bounded evidence rather than the personal dataset.",
    limitations: [
      "The public portfolio does not expose private health, finance, nutrition or calendar data.",
      "A dedicated synthetic recruiter deployment is optional, not required to make the architecture evidence public.",
    ],
  },
  football: {
    slug: "football-intelligence",
    title: "Football Intelligence App",
    eyebrow: "Private flagship · In progress",
    summary:
      "A football-intelligence product that separates source research, QA publication, PostgreSQL history and read-only public presentation.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Transactional publishing", "Read models"],
    links: [],
    problem:
      "Football research can become misleading when source quality, missing data, publication history and UI calculations are mixed together. The product treats publication as an explicit boundary.",
    constraints: [
      "Only QA-approved research packages can enter the public data path.",
      "Missing information must not silently become zero.",
      "Provenance and publication state must remain explicit.",
      "Publication should be transactional/idempotent where required.",
      "Normal web rendering should not have writer privileges.",
      "The product is still in progress and cannot be presented as a finished Production launch.",
    ],
    architecture: [
      "Public sources / analyst research",
      "QA-approved research package",
      "Transactional publisher",
      "PostgreSQL history and revisions",
      "Current/public read models",
      "Separate read-only web role",
      "Next.js product surfaces",
    ],
    decisions: [
      { title: "Publication is a boundary", body: "Collected research does not become public truth until it satisfies the publishing contract." },
      { title: "Separate writer and reader principals", body: "Publishing tooling can write while normal web rendering uses a distinct read-only database role." },
      { title: "Keep intelligence semantics out of client formulas", body: "The UI displays persisted/reviewed intelligence instead of inventing hidden client-side scoring rules." },
      { title: "Preserve history", body: "Revision/publication semantics are designed to avoid a model where the newest value silently overwrites the evidence trail." },
    ],
    verification: [
      "Schema validation before publication.",
      "Validate-only / dry-run publication modes.",
      "PostgreSQL integration coverage.",
      "Checks proving the web role cannot write publication state.",
      "Lint, type and build gates around product surfaces.",
    ],
    safety: [
      "Publication writes are explicit and bounded.",
      "Public reads are separated from research/private publication state.",
      "Missingness and current-vs-historical state are represented deliberately.",
    ],
    status:
      "The active implementation is private and still in progress. Final managed-database alignment and final Production deployment are not represented as complete.",
    limitations: [
      "Some completeness-sensitive intelligence and leaderboards remain intentionally gated.",
      "The older public football-intelligence repository is historical/legacy and is not the current source of truth.",
    ],
  },
  pas: {
    slug: "personal-ai-system",
    title: "Personal AI System",
    eyebrow: "Private flagship · Active",
    summary:
      "A modular system for coordinating AI-assisted research, software work, learning, project execution and knowledge over time.",
    stack: ["Python", "GitHub", "Agents", "Evals", "Governance", "Knowledge systems"],
    links: [],
    problem:
      "Long-running AI work becomes unreliable when every chat owns its own truth, context grows without bounds, tools have excessive permissions and generated output is treated as proof.",
    constraints: [
      "Current canonical state must win over old chats/snapshots.",
      "Only task-relevant context should be retrieved.",
      "Sensitive values must stay outside reusable knowledge.",
      "Tool permissions must follow least privilege.",
      "Artifact sophistication must not be confused with personal mastery.",
      "Repeated failures should improve the causal workflow layer, not only produce larger prompts.",
    ],
    architecture: [
      "User goal",
      "Control / routing layer",
      "Canonical GitHub intelligence + authoritative evidence stores",
      "Project / subject runtimes + tool permissions",
      "Specialized execution surface",
      "Verified artifact / state update",
      "Eval and improvement loop",
    ],
    decisions: [
      { title: "One canonical intelligence layer", body: "Reusable distilled intelligence lives in the private PAS repository while heavy/original evidence stays in its authoritative store." },
      { title: "Minimal retrieval", body: "Tasks load the smallest relevant project/domain context instead of preloading the whole knowledge system." },
      { title: "AI assistance is not verification", body: "Evidence, tests, read-back and explicit confidence states remain separate from the sophistication of generated artifacts." },
      { title: "Permissions are capability-based", body: "Consequential writes, deployments and spending require stronger authorization than normal analysis." },
    ],
    verification: [
      "Evidence/provenance contracts and validation scripts.",
      "Project handoffs designed to survive across chats/tools.",
      "Explicit execution and data policies.",
      "Eval-oriented and continuous-improvement runtimes.",
      "Read-back expectations for important mutations.",
    ],
    safety: [
      "Least-privilege tool permissions.",
      "Prompt-injection and exfiltration boundaries.",
      "Credentials stay in environment/secret-manager boundaries.",
      "Private project/user state is not published as a portfolio artifact.",
    ],
    status:
      "PAS is an active private system. The portfolio exposes only a sanitized architecture narrative and bounded examples.",
    limitations: [
      "The private repository is intentionally not public.",
      "This work supports AI-native engineering/tool-orchestration claims, not model-training or ML-research expertise.",
    ],
  },
  mediterranea: {
    slug: "la-mediterranea-store",
    title: "La Mediterránea Store",
    eyebrow: "Supporting full-stack · Integration-ready",
    summary:
      "A Next.js/TypeScript storefront backed by Supabase with authenticated admin workflows, server-authoritative checkout validation and explicit payment-integration boundaries.",
    stack: ["Next.js", "TypeScript", "Supabase", "RLS", "Storage", "Testing"],
    links: [{ label: "Public repository", href: "https://github.com/franciscovitar/la-mediterranea-store" }],
    problem:
      "Rebuild a real merchandising storefront with persistent catalog, variants, stock and order boundaries while keeping administration and future payment integration safe.",
    constraints: [
      "Catalog/order state must be persisted rather than hardcoded into the UI.",
      "Admin access needs authentication plus database authorization.",
      "Checkout totals should be server-authoritative.",
      "Payment credentials are not available yet, so the UI must not imply that live payment is active.",
      "Backup/restore needs validation rather than best-effort copying.",
    ],
    architecture: [
      "Next.js storefront",
      "Supabase products / variants / stock / orders",
      "Magic Link authentication",
      "RLS-backed admin role",
      "Server-authoritative checkout quote",
      "Prepared payment adapter + signed webhook boundary",
    ],
    decisions: [
      { title: "RLS backs admin authorization", body: "Authentication alone is not treated as sufficient proof of administrator access." },
      { title: "Checkout is server-authoritative", body: "The server validates the cart/quote boundary instead of trusting a client-computed total." },
      { title: "Use idempotency around payment-order reuse", body: "A changed cart/email should not accidentally reuse an older payment-order identity." },
      { title: "Prepared does not mean live", body: "Mercado Pago Orders/webhook paths remain explicitly integration-ready until real credentials and launch gates are complete." },
    ],
    verification: [
      "Catalog integrity checks.",
      "TypeScript/build checks.",
      "Unit tests for server-side checkout validation.",
      "Admin export/backup helper tests.",
      "Validated restore workflow.",
    ],
    safety: [
      "Supabase Storage writes restricted to administrators.",
      "RLS enforces database authorization.",
      "Checkout can remain disabled in preview/backup validation contexts.",
      "Safe 404/error behavior and basic security headers.",
    ],
    status:
      "The storefront is integration-ready. Mercado Pago is prepared behind environment boundaries and is not represented as a live payment integration.",
    limitations: [
      "Production payment credentials and final launch are outside the current public claim.",
    ],
  },
};

export function getCaseStudy(key) {
  return caseStudies[key];
}
