export const DATA_CLASSES = Object.freeze(["PUBLIC", "INTERNAL", "CONFIDENTIAL", "HIGHLY_SENSITIVE"]);

/** A policy decision does not itself grant capabilities to an external tool. */
export function evaluateAccess({ operation = "READ", dataClass = "PUBLIC", sourceVerified = false, executorTrusted = false, explicitApproval = false, targetBound = false, environment = "SYNTHETIC" } = {}) {
  if (!DATA_CLASSES.includes(dataClass) || !["READ", "PROPOSE", "WRITE"].includes(operation)) {
    return { status: "DENY_INVALID_CONTRACT", allowed: false };
  }
  if (!sourceVerified) return { status: "DENY_UNVERIFIED_SOURCE", allowed: false };
  if (dataClass === "HIGHLY_SENSITIVE") return { status: "DENY_SENSITIVE_DATA", allowed: false };
  if (operation === "READ") return { status: "READ_ALLOWED", allowed: true };
  if (operation === "PROPOSE") return { status: "PROPOSAL_ALLOWED", allowed: true, executed: false };
  if (!explicitApproval) return { status: "APPROVAL_REQUIRED", allowed: false };
  if (!executorTrusted || !targetBound) return { status: "DENY_EXECUTION_BOUNDARY", allowed: false };
  if (environment !== "SYNTHETIC") return { status: "DENY_NO_LIVE_CONNECTOR", allowed: false };
  return { status: "SYNTHETIC_WRITE_ELIGIBLE", allowed: true, executed: false };
}

/** Tool output, pages and retrieved passages are data, never commands. */
export function classifyInput(text, { origin = "untrusted-source" } = {}) {
  if (typeof text !== "string") return { status: "INVALID_INPUT", trust: "NONE" };
  return {
    status: "CLASSIFIED",
    trust: origin === "verified-owner-request" ? "USER_REQUEST" : "UNTRUSTED_DATA",
    canGrantWrite: false,
    canOverridePolicy: false,
    content: text,
  };
}
