export const caseStudies = {
  vida: {
    slug: "vida-2",
    title: "Vida 2.0",
    eyebrow: "Public flagship · Active",
    summary:
      "A personal operating system for planning, habits and projects, bringing Notion, Google Sheets and Calendar into one authenticated interface while keeping each source authoritative. Explore a separate public demo with fictional data.",
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
    title: "Library Network",
    eyebrow: "Full-stack engineering · Live public application",
    summary:
      "A library management system where visitors can borrow and return fictional books and manage transfers between branches. The public app uses Next.js, FastAPI and real PostgreSQL persistence, with independent temporary workspaces and no sign-up.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker", "Playwright"],
    links: [
      { label: "Open live application", href: "https://library-network-qa-web.onrender.com/" },
      { label: "Public source repository", href: "https://github.com/franciscovitar/library-network-api" },
      { label: "Hosting and verification", href: "https://github.com/franciscovitar/library-network-api/blob/main/docs/ops/ZERO_COST_HOSTED_QA_20261123.md" },
      { label: "Original backend CI evidence", href: "https://github.com/franciscovitar/library-network-api/actions/runs/44441208480" },
    ],
    problem:
      "A library network must keep track of each physical copy: two simultaneous requests cannot both reserve it, and a copy returning between branches must stay unavailable until it arrives. The system turns these rules into a usable lending workflow, not just an API exercise.",
    constraints: [
      "One physical copy cannot have two nonterminal loans, even under concurrent requests.",
      "Loan, transfer, history and idempotency claims commit together or roll back together.",
      "A transfer changes a copy's location only on receipt; damaged copies are retired.",
      "Visitors use independent temporary workspaces with synthetic records, without registration.",
      "The original browser-only engineering showcase is separate from the live application.",
    ],
    architecture: [
      "Next.js interface and server-side BFF",
      "Scoped guest session and authenticated backend requests",
      "FastAPI endpoints and validated commands",
      "PostgreSQL transactions, locks, constraints and history",
      "Render Free services and Aiven PostgreSQL Free",
    ],
    decisions: [
      { title: "Prevent double loans", body: "Commands acquire row locks and validate state again inside the transaction; database constraints provide a second safeguard." },
      { title: "Make retries safe", body: "An Idempotency-Key replays an accepted request and rejects a conflicting payload, preventing duplicate operations." },
      { title: "Separate visitors", body: "The public interface creates an isolated synthetic workspace and scopes operations to that guest session instead of sharing one library." },
      { title: "Keep the app understandable", body: "Explicit loan and transfer states represent real business operations, with consistent updates to inventory and history." },
    ],
    verification: [
      "The original backend CI run documented 129 passing tests, including 117 PostgreSQL integration tests; this is historical evidence, not the latest suite count.",
      "Database-backed tests cover concurrent claims, idempotent replay, rollback, illegal transitions and damaged returns.",
      "The hosted application and QA documentation cover real loan operations and independent visitor workspaces.",
      "The separate browser-only showcase remains illustrative rather than proof of database integration.",
    ],
    safety: [
      "Rejected commands leave domain state unchanged.",
      "Temporary guest workspaces contain fictional records and are isolated by session.",
      "The local unauthenticated developer API is not the public guest interface.",
    ],
    status:
      "The working application is hosted on Render with PostgreSQL on Aiven, and its source is public on GitHub. It is a portfolio sandbox developed from an academic backend project, not a production library service.",
    limitations: [
      "Free hosting can sleep or reach quotas; the first visit may need a cold start and retry.",
      "Temporary synthetic data only; no real library operations or service-level guarantee.",
      "The original V1 excludes renewals, fines and abandoned-request cancellation.",
    ],
  },
  webhook: {
    slug: "webhook-recovery-lab",
    title: "Webhook Recovery Lab",
    eyebrow: "Full-stack engineering · Live public sandbox",
    summary:
      "A working operations console for signed webhook delivery, persistence, deduplication and recovery. Send test orders, inspect attempts and restore failed deliveries through a Spanish-language interface, without an account.",
    stack: ["React", "TypeScript", "Vite", "Fastify", "PostgreSQL", "Docker", "Vitest", "Playwright"],
    links: [
      { label: "Open live app", href: "https://webhook-recovery-lab-v3-qa-franv-20261124.onrender.com" },
      { label: "Public source repository", href: "https://github.com/franciscovitar/webhook-recovery-lab" },
      { label: "Hosted QA and limitations", href: "https://github.com/franciscovitar/webhook-recovery-lab/blob/main/docs/hosting/NEON_RENDER_DEPLOYMENT_STATUS_2026-11-24.md" },
    ],
    problem:
      "A provider may resend an event, a worker may crash after a receiver succeeds, and a timeout may hide the outcome. The application demonstrates how to preserve accepted events, recover delivery and prevent duplicate recorded effects.",
    constraints: [
      "Synthetic orders only; no sign-up, customer data or arbitrary external destinations.",
      "Verify HMAC against the original bytes and a bounded timestamp window.",
      "Acknowledge ingress only after the event and its delivery job commit together.",
      "Scope events, reads, mutations and deduplication to temporary browser workspaces.",
      "At-least-once attempts with bounded retries and receiver-side idempotency.",
      "Keep infrastructure within existing free-tier limits.",
    ],
    architecture: [
      "React/Vite console creates a synthetic signed order",
      "Fastify validates the event and workspace",
      "Gateway PostgreSQL database stores the inbox and delivery job atomically",
      "Event-driven worker claims work with row locks, leases and fencing",
      "Internal HTTP receiver records an idempotent receipt in a separate logical database",
      "Persisted attempts, recovery and replay shown in the console",
      "One Render Free service and an independent Neon Free project",
    ],
    decisions: [
      { title: "Acknowledge only durable events", body: "The event and job share one transaction; identical redelivery is deduplicated, while conflicting payloads are rejected." },
      { title: "Recover without duplicate effects", body: "Leases and fencing protect worker ownership. The receiver independently deduplicates a stable delivery identity, even if an attempt is repeated." },
      { title: "Make reliability visible", body: "Visitors can create a normal delivery or a controlled failure, restore the receiver, replay the event and inspect the persisted attempts." },
      { title: "Isolate the public sandbox", body: "Opaque cookie sessions, scoped queries, quotas, expiration and cleanup limit each temporary workspace. The receiver is internal and cannot target external systems." },
    ],
    verification: [
      "V3 local QA on 24 Nov 2026 documented 32 unit tests, 29 real PostgreSQL integration tests and 5 showcase tests, plus build, lint and Docker checks.",
      "Desktop/mobile Playwright QA covered delivery, deduplication, failure, replay, isolation and keyboard navigation.",
      "Hosted QA documented a real HTTP 422 rejection, replay to HTTP 200, one durable receipt, visitor isolation and cold-start recovery.",
      "The subsequent Spanish presentation revision built and deployed successfully. Full automated/browser suites were not rerun for that revision.",
    ],
    safety: [
      "Only synthetic events; fixed internal HTTP destination and no publicly exposed unrestricted legacy ingress.",
      "Separate logical databases and restricted runtime roles; credentials remain server-side.",
      "Temporary visitor spaces, bounded usage and cleanup; no production reliability or security certification.",
    ],
    status:
      "The functional Spanish-language sandbox is publicly accessible on Render with PostgreSQL on Neon. The separate Vercel simulator remains an illustrative reference, not the live backend. The source repository and its technical documentation are public.",
    limitations: [
      "Free hosting can sleep and may require a cold start; quotas and workspace expiration apply.",
      "No production customer traffic, arbitrary external integrations, SLA or exactly-once transport is claimed.",
      "The documented functional QA applies to the tested revisions; later presentation changes were built and deployed but did not repeat the full suite.",
    ],
  },
  pas: {
    slug: "personal-ai-system",
    title: "Personal AI System",
    eyebrow: "Private system · Public engineering reference",
    summary:
      "A shared intelligence architecture spanning personal learning, research, professional delivery and business operations. A control tower coordinates scoped knowledge, methods, execution and evidence. A separate public reference makes key engineering decisions inspectable and executable.",
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
    slug: "cauce-commerce-lab",
    title: "Cauce Commerce Lab",
    eyebrow: "Personal full-stack · Real sandbox integration · Public storefront",
    summary:
      "A fictional online store where visitors can browse a database-backed catalog and assemble an order. Next.js and Supabase handle inventory and server-side checkout; Mercado Pago Checkout Pro is integrated in test mode only, with signed webhooks and payment reconciliation.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Mercado Pago", "CI"],
    links: [
      { label: "Explore public test storefront", href: "https://cauce-retail-preview-git-feat-cauce-portfolio-tes-76f96e-genova.vercel.app/cauce" },
      { label: "Public source repository", href: "https://github.com/franciscovitar/la-mediterranea-store" },
      { label: "Payment integration changes and QA", href: "https://github.com/franciscovitar/la-mediterranea-store/pull/20" },
    ],
    problem:
      "Demonstrate the hard parts of ecommerce in an independently developed portfolio project: inventory consistency, authorized administration, prices controlled by the server and reliable reconciliation of a third-party payment. Cauce is fictional; it is not a store taking customer payments.",
    constraints: [
      "Real business payments and customer orders must not be enabled.",
      "The original La Mediterránea storefront and its production configuration must remain independent.",
      "Product prices, stock reservations and payment status cannot be trusted from the browser.",
      "Administration requires authentication and database authorization.",
      "Mercado Pago Checkout Pro is tested with separate seller and buyer test identities, not with real cards.",
      "The storefront is public without Vercel login, but a dedicated Mercado Pago test-buyer account is still required to complete fictional Checkout Pro payments.",
    ],
    architecture: [
      "Next.js storefront and cart",
      "Supabase catalog, stock and orders",
      "Server-side quote, reservation and persistent rate limit",
      "Mercado Pago Checkout Pro (test seller and test card)",
      "Signed webhook and provider reconciliation",
      "Transactional payment state and inventory movement",
      "RLS-backed staff administration and CI checks",
    ],
    decisions: [
      { title: "Use the provider as the payment source of truth", body: "Cauce creates a checkout preference server-side, then independently verifies provider payment ID, order reference, test seller, currency and amount. A browser redirect never proves that an order was paid." },
      { title: "Prove approval before moving stock", body: "Only a verified approved test payment can confirm a sale. Rejected and pending attempts do not create sale movements; approval still requires the known official test-card proof." },
      { title: "Handle duplicates and concurrency", body: "Webhook signatures, idempotent event handling, atomic stock reservations and a persistent request quota address retries and racing checkout requests." },
      { title: "Make the test experience understandable", body: "The checkout documents Mercado Pago's public test card and approval/rejection/pending scenarios. Card details are entered on Mercado Pago, never captured by Cauce." },
    ],
    verification: [
      "GitHub Actions build, types and checkout tests passed on PR #20 before merge to main.",
      "The owner completed a real Mercado Pago sandbox payment using APRO; both Mercado Pago and Cauce showed the test order as paid.",
      "A real OTHE rejected test attempt was observed; the isolated database recorded failed_test without a stock-sale movement for that order.",
      "Official signed webhook delivery and repeated notification were accepted during the earlier isolated QA; inventory did not receive a duplicate sale movement.",
      "SQL transaction tests covered concurrency, idempotency, quota enforcement, and the M5 rejected/pending payment-state rules.",
      "A standalone pending attempt after M5 was not independently rerun through Checkout Pro; this is not a claim that every E2E scenario passed.",
    ],
    safety: [
      "Dedicated synthetic Supabase data, test-only payment seller and credentials.",
      "Role-based administration protected by RLS and service-only RPC permissions.",
      "Signed provider callbacks, authorization boundaries and server-authoritative payment status.",
      "Historical production has Cauce checkout disabled and never uses the isolated test seller.",
      "Public browsing does not expose administration: staff authorization remains protected by Magic Link/RLS, and test-buyer credentials and webhook bypass secrets are never published.",
    ],
    status:
      "Code and test integrations are merged into the public main repository. The working fictional storefront and Mercado Pago test-payment flow run in an isolated, publicly accessible Vercel deployment. An approved and a rejected sandbox payment were observed; no real money or customer orders are accepted. The former public browser-only simulator is no longer the linked demo.",
    limitations: [
      "Browsing the storefront is public, without Vercel SSO. Completing Mercado Pago Checkout Pro test payments still requires a separately authorized test-buyer login, so visitors cannot automatically test payment with only the displayed card.",
      "The independent CONT payment flow was not rerun end-to-end after the final non-approved payment-state fix.",
      "The repository intentionally retains historical La Mediterránea code for provenance. Its real production checkout is unaffected and does not expose Cauce test payments.",
    ],
  },
};

export function getCaseStudy(key) {
  return caseStudies[key];
}
