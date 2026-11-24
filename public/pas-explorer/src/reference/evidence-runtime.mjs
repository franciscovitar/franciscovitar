/** Risk-aware source qualification for synthetic claims; no live fact check. */
export function assessClaim({ risk, curation, verification, locator, sourceAuthority, sourceCurrent, retrievalEvalPassed, humanReviewed, contradicted = false } = {}) {
  const valid = [0, 1, 2, 3].includes(risk) && ["discovered", "triaged", "curated", "deprecated"].includes(curation);
  if (!valid) return { status: "INVALID_CLAIM", canonical: false };
  if (contradicted || curation === "deprecated") return { status: "DEPRECATED_OR_DISPUTED", canonical: false };
  const linked = ["source-resolved", "content-checked", "exact-verified"].includes(verification);
  const credible = ["A", "B"].includes(sourceAuthority);
  if (curation !== "curated" || !linked || !credible || !retrievalEvalPassed) return { status: "CANDIDATE", canonical: false };
  if (risk >= 2 && !sourceCurrent) return { status: "NEEDS_FRESHNESS_CHECK", canonical: false };
  if (risk === 3 && (!humanReviewed || sourceAuthority !== "A" || !["exact", "section"].includes(locator) || verification !== "exact-verified")) {
    return { status: "NEEDS_STRONGER_REVIEW", canonical: false };
  }
  return { status: "CANONICAL_ELIGIBLE", canonical: true, note: "Eligible in this synthetic model, not independently fact-checked." };
}

export function evidenceState({ planned = false, executed = false, readback = false, sourceIds = [] } = {}) {
  if (readback && !executed) return { status: "INVALID_EVIDENCE_SEQUENCE" };
  if (executed && !planned) return { status: "INVALID_EVIDENCE_SEQUENCE" };
  if (readback) return { status: "SYNTHETIC_READBACK_VERIFIED", sourceIds };
  if (executed) return { status: "EXECUTED_NOT_VERIFIED", sourceIds };
  if (planned) return { status: "PLAN_ONLY", sourceIds };
  return { status: "NO_EVIDENCE", sourceIds };
}
