/**
 * Public teaching model. The real PAS has independent project/domain skills,
 * richer routing and canonical versions that are deliberately not shipped here.
 */
export const WORKFLOWS = Object.freeze([
  {
    id: "study",
    label: "Adaptive learning",
    patterns: [/parcial/i, /examen/i, /practic(ar|a|á)/i],
    sourceIds: ["subject_blueprint", "official_material"],
    steps: ["Identify assessment", "Select canonical material", "Practice one question", "Evaluate evidence of mastery"],
    operation: "READ",
  },
  {
    id: "training",
    label: "Training capture",
    patterns: [/gimnasio/i, /entren(é|e|amiento)/i, /series? de/i],
    sourceIds: ["training_store"],
    steps: ["Parse reported sets", "Normalize fields", "Propose a record", "Require approval and verify receipt"],
    operation: "WRITE_PROPOSAL",
    target: "training_store",
  },
  {
    id: "nutrition",
    label: "Nutrition capture",
    patterns: [/com(i|í|ida)/i, /almorc(é|e)/i, /cena(r|é)/i],
    sourceIds: ["nutrition_store"],
    steps: ["Identify reported food", "Preserve uncertainty", "Propose a record", "Require approval and verify receipt"],
    operation: "WRITE_PROPOSAL",
    target: "nutrition_store",
  },
  {
    id: "professional",
    label: "Professional delivery",
    patterns: [/rediseñ(ar|o)/i, /remodel(ar|o)/i, /cliente/i, /automatiz(ar|ación)/i],
    sourceIds: ["delivery_method", "project_context"],
    steps: ["Classify service", "Read applicable method", "Identify constraints", "Propose research and acceptance gates"],
    operation: "READ",
  },
  {
    id: "research",
    label: "Research & knowledge",
    patterns: [/investig(ar|ación)/i, /compar(ar|ación)/i, /evidencia/i],
    sourceIds: ["knowledge_pack", "external_references"],
    steps: ["Bound the question", "Retrieve relevant claims", "Verify primary sources", "Report confidence and gaps"],
    operation: "READ",
  },
  {
    id: "projects",
    label: "Project continuity",
    patterns: [/proyecto/i, /continu(ar|emos)/i, /hitos?/i],
    sourceIds: ["project_context"],
    steps: ["Identify project", "Read its current record", "Compare with latest evidence", "Propose next action"],
    operation: "READ",
  },
]);

export function routeIntent(message) {
  if (typeof message !== "string" || !message.trim()) {
    return { status: "NEEDS_INPUT", workflow: null };
  }
  // Explicit order is part of this small reference contract; real PAS routing
  // uses scoped project/subject context and verified specialized methods.
  const workflow = WORKFLOWS.find(({ patterns }) => patterns.some((pattern) => pattern.test(message)));
  return workflow
    ? { status: "ROUTED", workflow }
    : { status: "NEEDS_CLARIFICATION", workflow: null };
}
