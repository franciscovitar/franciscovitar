/**
 * Synthetic records: names resemble source *roles*, not private locations,
 * credentials, datasets, URLs or real user information.
 */
export const SYNTHETIC_SOURCES = Object.freeze({
  subject_blueprint: { owner: "subject", kind: "assessment blueprint", version: "example-v1", visibility: "SYNTHETIC" },
  official_material: { owner: "subject", kind: "course material", version: "example-v1", visibility: "SYNTHETIC" },
  training_store: { owner: "health-domain", kind: "structured training records", version: "example-v1", visibility: "SYNTHETIC" },
  nutrition_store: { owner: "nutrition-domain", kind: "structured meal records", version: "example-v1", visibility: "SYNTHETIC" },
  delivery_method: { owner: "professional-domain", kind: "service methodology", version: "example-v1", visibility: "SYNTHETIC" },
  project_context: { owner: "project", kind: "bounded progress record", version: "example-v1", visibility: "SYNTHETIC" },
  knowledge_pack: { owner: "knowledge-domain", kind: "curated claims", version: "example-v1", visibility: "SYNTHETIC" },
  external_references: { owner: "reference", kind: "primary source pointers", version: "example-v1", visibility: "SYNTHETIC" },
});

export function resolveSources(ids, registry = SYNTHETIC_SOURCES) {
  const found = [];
  const missing = [];
  for (const id of ids) {
    const source = Object.hasOwn(registry, id) ? registry[id] : null;
    if (!source || source.available === false) {
      missing.push(id);
      continue;
    }
    found.push({ id, owner: source.owner, kind: source.kind, version: source.version });
  }
  return { found, missing };
}
