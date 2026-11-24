/**
 * A deterministic distilled-first retrieval pipeline. Private PAS uses richer
 * pack routing and search; this sample deliberately has no remote fetcher.
 */
export const PACKS = Object.freeze([
  { id: "reliable-systems", scope: "GLOBAL", signals: ["evidence", "authorization", "reliability", "prueba", "fuente"] },
  { id: "learning", scope: "DOMAIN", domain: "study", signals: ["parcial", "examen", "rubrica", "practice", "concepto"] },
  { id: "fitness", scope: "DOMAIN", domain: "training", signals: ["gimnasio", "series", "entrenamiento", "training"] },
  { id: "product-delivery", scope: "DOMAIN", domain: "professional", signals: ["web", "cliente", "research", "deploy"] },
  { id: "project-record", scope: "PROJECT", signals: ["continuar", "hito", "proyecto", "estado"] },
  { id: "course-material", scope: "SUBJECT", signals: ["temario", "examen", "material", "subject"] },
]);

export const EXAMPLE_CLAIMS = Object.freeze([
  { id: "K-001", pack: "reliable-systems", scope: "GLOBAL", status: "CURRENT", text: "An answer or action plan is not proof that an external write happened.", sourceId: "S-001", fetchPolicy: "distilled-first" },
  { id: "K-002", pack: "learning", scope: "DOMAIN", domain: "study", status: "CURRENT", text: "Assessment blueprints guide practice coverage beyond repetition counts.", sourceId: "S-002", fetchPolicy: "distilled-first" },
  { id: "K-003", pack: "fitness", scope: "DOMAIN", domain: "training", status: "CURRENT", text: "Training records contain reported sets and loads; estimates remain separate.", sourceId: "S-003", fetchPolicy: "distilled-first" },
  { id: "K-004", pack: "product-delivery", scope: "DOMAIN", domain: "professional", status: "CURRENT", text: "Research and acceptance checks precede significant client implementation decisions.", sourceId: "S-004", fetchPolicy: "verify-on-use" },
  { id: "K-005", pack: "project-record", scope: "PROJECT", projectId: "project-alpha", status: "CURRENT", text: "Project alpha is waiting for a synthetic review.", sourceId: "S-005", fetchPolicy: "on-demand" },
  { id: "K-006", pack: "project-record", scope: "PROJECT", projectId: "project-beta", status: "CURRENT", text: "Project beta has a separate owner and timeline.", sourceId: "S-006", fetchPolicy: "on-demand" },
  { id: "K-007", pack: "course-material", scope: "SUBJECT", subjectId: "networks", status: "CURRENT", text: "The fictional Networks exam includes routing fundamentals.", sourceId: "S-007", fetchPolicy: "on-demand" },
  { id: "K-008", pack: "course-material", scope: "SUBJECT", subjectId: "calculus", status: "CURRENT", text: "The fictional Calculus course includes integrals.", sourceId: "S-008", fetchPolicy: "on-demand" },
  { id: "K-009", pack: "learning", scope: "DOMAIN", domain: "study", status: "SUPERSEDED", text: "Repetition alone demonstrates exam mastery.", sourceId: "S-009", fetchPolicy: "metadata-only" },
]);

const tokens = (s) => String(s ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(/[a-z0-9]+/g) ?? [];
const overlap = (a, b) => {
  const words = new Set(tokens(a));
  return [...new Set(tokens(b))].filter((token) => words.has(token)).length;
};

export function routeKnowledgePacks({ task, domain, projectId, subjectId, candidateIds = [], includeIds = [], excludeIds = [] }) {
  const allowed = PACKS.filter((p) =>
    p.scope === "GLOBAL" || (p.scope === "DOMAIN" && p.domain === domain) ||
    (p.scope === "PROJECT" && Boolean(projectId)) || (p.scope === "SUBJECT" && Boolean(subjectId))
  );
  const excluded = new Set(excludeIds);
  const ranked = allowed.filter((p) => !excluded.has(p.id)).map((p) => {
    const matched = p.signals.filter((signal) => tokens(task).some((word) => word === tokens(signal)[0])).length;
    const score = matched * 2 + Number(candidateIds.includes(p.id)) + Number(includeIds.includes(p.id)) * 5;
    return { ...p, score };
  }).filter((p) => p.score > 0).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  const confidence = ranked[0]?.score >= 4 ? "high" : ranked[0]?.score >= 2 ? "medium" : "low";
  return { status: ranked.length ? "ROUTED" : "NEEDS_REVIEW", confidence, selected: ranked.slice(0, 3).map(({ id, score }) => ({ id, score })) };
}

export function compileKnowledgePacket({ task, domain, projectId = null, subjectId = null, candidateIds = [], claims = EXAMPLE_CLAIMS, limit = 4 }) {
  if (typeof task !== "string" || !task.trim() || !Number.isInteger(limit) || limit < 1 || limit > 20) {
    return { status: "INVALID_REQUEST", claims: [], remoteCandidates: [] };
  }
  const routing = routeKnowledgePacks({ task, domain, projectId, subjectId, candidateIds });
  const allowedPacks = new Set(routing.selected.map((p) => p.id));
  const applicable = claims.filter((claim) => claim.status === "CURRENT" && allowedPacks.has(claim.pack))
    .filter((claim) => claim.scope === "GLOBAL" ||
      (claim.scope === "DOMAIN" && claim.domain === domain) ||
      (claim.scope === "PROJECT" && claim.projectId === projectId) ||
      (claim.scope === "SUBJECT" && claim.subjectId === subjectId));
  const ranked = applicable.map((claim) => ({
    ...claim,
    score: overlap(task, claim.text) + Number(claim.scope === "SUBJECT") * 3 + Number(claim.scope === "PROJECT") * 2 + Number(claim.scope === "DOMAIN"),
  })).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id)).slice(0, limit);
  return {
    status: routing.status === "ROUTED" ? "COMPILED" : "NEEDS_REVIEW",
    routing,
    claims: ranked.map(({ id, text, sourceId, scope, score }) => ({ id, text, sourceId, scope, score, provenance: "SYNTHETIC_REFERENCE" })),
    remoteCandidates: ranked.filter((c) => c.fetchPolicy !== "metadata-only").map(({ sourceId, fetchPolicy }) => ({ sourceId, fetchPolicy, fetched: false })),
    exclusions: "Unrelated projects, other subjects, superseded claims and raw originals",
  };
}
