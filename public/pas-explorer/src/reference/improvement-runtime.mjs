/** Governed improvement review, not autonomous modification. */
export function reviewImprovement(candidate = {}) {
  const { proposal, targetLayer, risk, baseline, evaluation, evidence, regressions, ownerApproved } = candidate;
  if (!proposal || !targetLayer || ![0, 1, 2, 3].includes(risk)) return { status: "INVALID_CANDIDATE", apply: false };
  if (!baseline || !evaluation || !evidence?.length) return { status: "ASSESS", apply: false, reason: "Baseline, relevant evidence and evaluation are required." };
  if (regressions?.some((test) => test.passed === false)) return { status: "HOLD", apply: false, reason: "A regression failed." };
  if (risk >= 2 && !candidate.freshPrimaryEvidence) return { status: "HOLD", apply: false, reason: "Current authoritative evidence is missing." };
  if (!ownerApproved) return { status: "TRIAL", apply: false, reason: "Review and explicit approval precede adoption." };
  return { status: "ADOPT_ELIGIBLE", apply: false, reason: "A separate authorized code review and change are still necessary." };
}
