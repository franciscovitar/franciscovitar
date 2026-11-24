/**
 * Public capability map derived from the architectural roles of PAS Skills.
 * These are descriptions/contracts, not a copy of private prompts or an SDK
 * capable of installing a Skill in an AI host.
 */
export const SKILLS = Object.freeze([
  { id: "context-compilation", layer: "core", workflows: ["all"], contract: "Compile the minimum useful, scoped context and evidence candidates." },
  { id: "conversational-capture", layer: "interface", workflows: ["training", "nutrition", "projects"], contract: "Normalize reported facts into proposals, without inventing fields." },
  { id: "adaptive-learning", layer: "learning", workflows: ["study"], contract: "Choose practice using learning evidence, coverage and assessment constraints." },
  { id: "study-session", layer: "learning", workflows: ["study"], contract: "Conduct a bounded, evidence-grounded study session." },
  { id: "assignment-execution", layer: "learning", workflows: ["study"], contract: "Respect assignment, rubric and official course material priority." },
  { id: "generalist-learning", layer: "learning", workflows: ["generalist"], contract: "Teach self-directed topics without treating them as university exams." },
  { id: "gym-intelligence", layer: "health", workflows: ["training"], contract: "Use training goals, actual session records and recovery evidence." },
  { id: "nutrition-intelligence", layer: "health", workflows: ["nutrition"], contract: "Separate observed meals, estimates and evidence-based recommendations." },
  { id: "football-intelligence-analyst", layer: "analysis", workflows: ["football"], contract: "Assess players with contextual performance and explicit uncertainty." },
  { id: "knowledge-curation", layer: "knowledge", workflows: ["research"], contract: "Classify sources, retain provenance and promote only verified claims." },
  { id: "genova-delivery", layer: "professional", workflows: ["professional"], contract: "Select verified service/intervention methods, research and QA gates." },
  { id: "long-execution", layer: "execution", workflows: ["optional-long-execution"], contract: "Bound delegated execution without expanding authorization." },
  { id: "project-session-closeout", layer: "continuity", workflows: ["project-closeout"], contract: "Prepare an evidence-backed handoff, with separately granted writes." },
  { id: "system-maintenance", layer: "governance", workflows: ["system-improvement"], contract: "Evaluate improvement candidates against baselines and regressions." },
]);

export function selectSkillStack(workflow, { explicitLongExecution = false } = {}) {
  const primary = SKILLS.filter((skill) => skill.workflows.includes(workflow));
  if (!primary.length) return { status: "UNKNOWN_CAPABILITY", skills: [] };
  const core = SKILLS.find((skill) => skill.id === "context-compilation");
  const skills = [core, ...primary.filter((skill) => skill !== core)];
  if (explicitLongExecution && !skills.some((skill) => skill.id === "long-execution")) {
    skills.push(SKILLS.find((skill) => skill.id === "long-execution"));
  }
  return { status: "SELECTED", skills: skills.map(({ id, layer, contract }) => ({ id, layer, contract })) };
}
