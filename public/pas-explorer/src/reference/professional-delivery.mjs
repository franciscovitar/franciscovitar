import { compatibleRoute, selectFamilies } from "./delivery-selection.mjs";

/**
 * Public method catalog. 12 service families, 7 intervention overlays and 35
 * designed library families are distinct dimensions, not 35 installed tools.
 * V1 covers professional methodology across all three dimensions, on demand;
 * V2 concerns later technical automation/connectors. This public sample only
 * designs a plan: neither version grants live execution authority here.
 */
export const SERVICES = Object.freeze([
  "web-new", "software-new", "web-redesign", "software-modernization",
  "ecommerce", "automation", "ai-solutions", "integrations", "seo",
  "google-ads", "maintenance", "analytics",
]);

export const INTERVENTIONS = Object.freeze(["CREATE", "REDESIGN", "AUDIT", "IMPROVE", "MIGRATE", "REPAIR", "MAINTAIN"]);

const libraryNames = [
  "Design directions", "Design tokens", "UX components and IA", "Typography and assets", "UX research and CRO",
  "Accessibility", "Microinteractions", "Text motion", "Scroll triggers", "Scroll storytelling",
  "Scrolling engine", "Page transitions", "GSAP orchestration", "Motion library", "SVG motion",
  "Rive and Lottie", "Canvas and 3D", "Advanced gestures", "Motion QA", "Frontend patterns",
  "Architecture and API", "Ecommerce transactions", "Automation recipes", "AI evaluation", "Security and privacy",
  "CI and release", "SEO migration", "Google Ads engineering", "Analytics tagging", "Observability",
  "Discovery", "Proposals and scope", "Delivery artifacts", "Technology and licensing", "Evidence and QA mapping",
];

export const LIBRARY_FAMILIES = Object.freeze(libraryNames.map((name, i) => Object.freeze({ id: `L${String(i + 1).padStart(2, "0")}`, name, status: "DESIGN_CATALOG" })));

export function classifyService(text) {
  if (typeof text !== "string" || !text.trim()) return { status: "NEEDS_INPUT" };
  const t = text.toLowerCase();
  if (/remodel|redise|renov|refresh/.test(t) && /web|sitio|p[aá]gina/.test(t)) return { status: "CLASSIFIED", service: "web-redesign", intervention: "REDESIGN" };
  if (/cre(ar|aci[oó]n)|desarroll(ar|o)|constru(ir|cci[oó]n)/.test(t) && /sistema|software|app/.test(t)) return { status: "CLASSIFIED", service: "software-new", intervention: "CREATE" };
  if (/seo|posicionamiento/.test(t)) return { status: "CLASSIFIED", service: "seo", intervention: "AUDIT" };
  if (/automatiz/.test(t)) return { status: "CLASSIFIED", service: "automation", intervention: "CREATE" };
  return { status: "NEEDS_DISCOVERY", reason: "A service and intervention cannot be responsibly assumed." };
}

export function designDeliveryPlan({ service, intervention, sourceReceipt, researchEvidence = [], requestedFamilies = [], explicitWriteAuthorization = false } = {}) {
  if (!compatibleRoute(service, intervention)) return { status: "UNSUPPORTED_COMBINATION", execute: false };
  if (!sourceReceipt || sourceReceipt.status !== "VERIFIED_ACTIVE" || !sourceReceipt.commit || !sourceReceipt.blobsVerified) {
    return { status: "NOT_LOADED", execute: false, reason: "Current primary methodology has not been verified." };
  }
  const selection = selectFamilies({ service, intervention, requested: requestedFamilies });
  if (selection.status !== "CATALOG_CANDIDATES_ONLY") return { status: selection.status, execute: false };
  const researchStatus = researchEvidence.length ? "RESEARCH_PROPOSED_FOR_REVIEW" : "RESEARCH_REQUIRED";
  return {
    status: "DESIGN_PLAN_ONLY",
    service,
    intervention,
    sourceCommit: sourceReceipt.commit,
    researchStatus,
    libraryCandidates: selection.families.map(f => f.id),
    librarySelection: selection.families,
    readOnly: selection.readOnly,
    gates: ["Scope and current sources", "Discovery", "Research-first comparison", "Explicit approval", "Implementation", "Observed QA", "Release authorization and readback"],
    execute: false,
    executionAuthority: "NONE",
    note: explicitWriteAuthorization
      ? "Approval alone does not supply an authenticated executor or production access."
      : "Planning is not authorization to contact, edit or deploy for a client.",
  };
}
