export const caseStudies = {
  vida: {
    slug: "vida-2",
    title: "Vida 2.0",
    eyebrow: "Public flagship · Active",
    summary:
      "A personal operating system that brings multiple parts of daily life into one authenticated interface while preserving the authority and privacy of the underlying sources.",
    stack: ["Next.js", "React", "TypeScript", "Notion", "Google Sheets", "Google Calendar"],
    links: [
      { label: "Try the synthetic demo · 90-second tour", href: "https://vida-2-0-demo-genova.vercel.app/" },
      { label: "Original application source", href: "https://github.com/franciscovitar/vida-2.0" },
    ],
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
      "Separately deployed interactive demo with synthetic data, a guided walkthrough, independent source code and automated tests — not a live integration test.",
    ],
    safety: [
      "No silent DEV-to-Production source fallback.",
      "Sensitive features default off behind flags/permissions.",
      "Production writes require explicit gates.",
      "Runtime status surfaces are sanitized and do not expose credentials.",
    ],
    status:
      "Vida 2.0 is an active, authenticated personal product. Its separate, publicly accessible synthetic demo lets recruiters explore selected flows; neither the demo nor this case study exposes personal records or proves live integrations.",
    limitations: [
      "The public portfolio does not expose private health, finance, nutrition or calendar data.",
      "The linked demo is a separate static JavaScript showcase: its local interactions, sample metrics and captured entries are not production data, ChatGPT calls or authenticated source writes.",
    ],
  },
  library: {
    slug: "library-network-api",
    title: "Library Network API",
    eyebrow: "Public backend lab · V1 verified",
    summary:
      "A REST API that manages the journey of a physical book between library branches, even when requests arrive at the same time or must be retried.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker"],
    links: [
      { label: "Public repository", href: "https://github.com/franciscovitar/library-network-api" },
      { label: "Technical case study", href: "https://github.com/franciscovitar/library-network-api/blob/main/docs/case-study.md" },
      { label: "CI evidence", href: "https://github.com/franciscovitar/library-network-api/actions/runs/44441208480" },
    ],
    problem:
      "When two people request the same physical copy at once, a library network must accept at most one loan. That copy must also stay unavailable during its return trip, until it reaches the owning branch.",
    constraints: [
      "A physical copy cannot have two nonterminal loans, even under concurrent requests.",
      "A loan request, transfer, history entry and idempotency claim commit together or not at all.",
      "The copy's location changes only when the receiving branch confirms arrival.",
      "Retries with the same request key must not create duplicate loans.",
      "A damaged copy must be retired rather than returned to circulation.",
      "The local demo uses synthetic data and is not a public hosted service.",
    ],
    architecture: [
      "HTTP client / Swagger / deterministic demo script",
      "FastAPI endpoints and validated schemas",
      "Application commands with one transaction each",
      "Domain states for loans, copies and transfers",
      "PostgreSQL row locks, constraints and history",
      "Reproducible Docker setup and CI verification",
    ],
    decisions: [
      { title: "Lock the physical copy", body: "Commands acquire PostgreSQL row locks in a fixed order and recheck state after locking, so concurrent requests cannot promise the same book twice." },
      { title: "Make the database a second safeguard", body: "A partial unique index and named constraints reject invalid states even if application checks regress." },
      { title: "Make retry safe", body: "An Idempotency-Key replays an accepted request but rejects a different payload that reuses its identity." },
      { title: "Keep the architecture small", body: "A modular monolith with one transactional PostgreSQL database makes the lifecycle understandable and reproducible without a queue or extra services." },
    ],
    verification: [
      "Linked GitHub Actions run: 129 tests passed (117 PostgreSQL integration + 12 unit/HTTP), none skipped.",
      "Concurrent requests for one copy: one accepted, the other rejected without duplicate records.",
      "Rollback, idempotent replay, illegal transitions and damaged returns covered by database-backed tests.",
      "A deterministic local HTTP script verifies the full interlibrary loan and return cycle.",
    ],
    safety: [
      "Rejected commands leave loan, transfer, copy and history state unchanged.",
      "PostgreSQL is not exposed as a host port in the demo Compose setup.",
      "The API has no authentication or rate limiting and must not be hosted publicly as-is.",
    ],
    status:
      "V1 is on the public main branch with a reproducible local Docker demo and linked hosted CI evidence. This is a portfolio backend lab inspired by an individual academic project; the newer API was built with AI assistance, not operated as a production service.",
    limitations: [
      "No public hosted API, authentication or production usage is claimed.",
      "The V1 domain deliberately excludes renewals, fines and abandoned-request cancellation.",
    ],
  },
  webhook: {
    slug: "webhook-recovery-lab",
    title: "Webhook Recovery Lab",
    eyebrow: "Private reliability lab · In progress",
    summary:
      "A synthetic backend that safely receives signed webhooks, persists delivery jobs, retries temporary failures and makes recovery inspectable.",
    stack: ["TypeScript", "Fastify", "PostgreSQL", "Docker Compose", "Vitest", "CI"],
    links: [],
    problem:
      "A provider can resend a webhook, a worker can crash after the receiver succeeds, and an HTTP timeout can hide the outcome. The challenge is to avoid losing accepted events or applying the same effect twice.",
    constraints: [
      "HMAC signatures are checked against the raw request body and a bounded timestamp window.",
      "The API acknowledges an event only after inbox and job records commit together.",
      "Identical redelivery is deduplicated; reusing an event ID with changed content is rejected.",
      "Worker claims expire and can be reclaimed without letting a stale worker overwrite the new owner.",
      "Physical delivery is at least once; the receiver must independently deduplicate effects.",
      "All events, credentials and destinations are synthetic and local-only.",
    ],
    architecture: [
      "Synthetic provider sends HMAC-signed HTTP event",
      "Fastify verifies signature and schema",
      "PostgreSQL transaction stores inbox event and delivery job",
      "Worker claims jobs using SKIP LOCKED and lease tokens",
      "HTTP receiver records one idempotent receipt in a separate database",
      "Retries, dead-letter, audited replay and read-only diagnostics",
    ],
    decisions: [
      { title: "Acknowledge only durable events", body: "Inbox and job inserts share one PostgreSQL transaction. A 202 response is not sent before durable commit." },
      { title: "Recover workers without double ownership", body: "Short leases, row-locked claims and fencing tokens prevent stale acknowledgements after another worker takes over." },
      { title: "Distinguish attempts from effects", body: "A crashed worker may resend a delivery, while the receiver records only one effect using a stable delivery identity." },
      { title: "Make failure visible", body: "Bounded retries, dead-letter state, replay generations and read-only queue snapshots expose what happened and how recovery proceeds." },
    ],
    verification: [
      "Documented unit and PostgreSQL integration coverage for signatures, duplicate ingress and transaction rollback.",
      "Concurrent worker claims, 503 retries, lease recovery, stale-ACK rejection and audited replay tested with synthetic events.",
      "Deterministic HTTP recovery scenario and Docker Compose smoke recorded in private CI evidence.",
      "The repository and its CI logs are private, so this public case study does not imply independently inspectable results.",
    ],
    safety: [
      "No customer/provider webhooks or production credentials are used.",
      "No public deployment or user-configurable destination is exposed.",
      "Exactly-once transport is not claimed; downstream idempotency protects the recorded effect.",
    ],
    status:
      "An active private engineering lab with synthetic inputs, documented local tests and private CI. It is not a production webhook service or a public hosted demo.",
    limitations: [
      "Real deployment would still require secret rotation, TLS, operational authentication, monitoring, backups and capacity/security validation.",
      "Private repository and CI evidence are not accessible to public portfolio visitors.",
    ],
  },
  pas: {
    slug: "personal-ai-system",
    title: "Personal AI System",
    eyebrow: "Private system · Public engineering reference",
    summary:
      "A personal AI control tower spanning learning, research, project continuity and everyday data workflows. It routes each goal to the right methods, sources and permissions — with inspectable public reference code and tests.",
    stack: ["Python", "JavaScript", "GitHub", "Agents", "Evals", "Governance", "Knowledge systems"],
    links: [{ label: "Public reference code & tests", href: "https://github.com/franciscovitar/personal-ai-system-showcase" }],
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
      "START_HERE.md and AI/BOOTSTRAP.md define the documented entrypoint and retrieval sequence in private PAS main.",
      "Data, security and execution policies distinguish task context from permission to mutate external state.",
      "The public reference includes executable routing, Skill contracts, scoped source retrieval, risk/permission gates, study and capture runtimes, project CAS/idempotency, improvement review and negative-path tests.",
      "Learning, capture, research, professional and project examples are synthetic; none claims a successful live integration.",
      "The reference separates planning, explicit approval and checked readback; the private system's full validation results are not published here.",
    ],
    evidence: [
      {
        label: "Documented · private",
        title: "A concrete entrypoint",
        body: "START_HERE.md → AI/BOOTSTRAP.md defines where work begins, what context to load and how authoritative sources are chosen. These files exist in the current private repository.",
      },
      {
        label: "Documented · private",
        title: "Execution boundaries",
        body: "DATA_POLICY, AGENT_SECURITY and EXECUTION_POLICY define safeguards around data access, permissions and changes. Documents are not the same as a witnessed live run.",
      },
      {
        label: "Code · public",
        title: "A reviewable reference implementation",
        body: "A separate public repository now offers an inspectable multi-layer reference: 14 Skill contracts, source governance, domain examples, continuity, review gates and automated negative tests. It contains no private PAS data or shared Git history.",
      },
    ],
    safety: [
      "Least-privilege tool permissions.",
      "Prompt-injection and exfiltration boundaries.",
      "Credentials stay in environment/secret-manager boundaries.",
      "Private project/user state is not published as a portfolio artifact.",
    ],
    status:
      "PAS remains an active private personal system. This page explains its architectural scope, while a separate public repository offers independently inspectable synthetic reference code and tests — not a hosted demo or production connector.",
    limitations: [
      "The private PAS repository, real integrations and personal datasets are intentionally not public. The code showcase is smaller and does not reproduce the complete production environment.",
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
