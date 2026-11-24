/** Example items are invented. Questions are delivered one at a time. */
export const EXAMPLE_BLUEPRINT = Object.freeze({
  subjectId: "networks",
  facets: ["routing", "addressing", "transport"],
  items: [
    { id: "Q1", facet: "routing", prompt: "What does a router use to choose the next hop?", answerKey: "routing table" },
    { id: "Q2", facet: "addressing", prompt: "Which kind of address identifies a network interface?", answerKey: "ip address" },
    { id: "Q3", facet: "transport", prompt: "What do TCP sequence numbers help track?", answerKey: "ordered data" },
  ],
});

export class StudyRuntime {
  #attempts = [];
  #cursor = 0;
  #awaiting = null;

  constructor(blueprint = EXAMPLE_BLUEPRINT) {
    if (!blueprint?.facets?.length || !blueprint?.items?.length || blueprint.items.some((q) => !blueprint.facets.includes(q.facet))) {
      throw new Error("Invalid assessment blueprint");
    }
    this.blueprint = structuredClone(blueprint);
  }

  next() {
    if (this.#awaiting) return { status: "ANSWER_REQUIRED", question: this.#publicQuestion(this.#awaiting) };
    if (this.#cursor >= this.blueprint.items.length) return { status: "SESSION_COMPLETE", summary: this.summary() };
    this.#awaiting = this.blueprint.items[this.#cursor];
    return { status: "QUESTION_READY", question: this.#publicQuestion(this.#awaiting) };
  }

  #publicQuestion(item) { return { id: item.id, facet: item.facet, prompt: item.prompt }; }

  answer({ questionId, response, selfRating }) {
    if (!this.#awaiting || this.#awaiting.id !== questionId) return { status: "NO_MATCHING_QUESTION" };
    if (typeof response !== "string" || !response.trim() || !["again", "hard", "good", "easy"].includes(selfRating)) {
      return { status: "INVALID_ATTEMPT" };
    }
    const item = this.#awaiting;
    // A reference-only exact-key checker: a real assessor needs semantic review,
    // model/rubric validation, variants and calibration, not string equality.
    const recalledKey = response.toLowerCase().includes(item.answerKey);
    this.#attempts.push({ questionId, facet: item.facet, recalledKey, selfRating });
    this.#cursor += 1;
    this.#awaiting = null;
    return { status: "ATTEMPT_RECORDED", recalledKey, referenceAnswer: item.answerKey, masteryClaimed: false };
  }

  summary() {
    return {
      status: "EVIDENCE_SUMMARY",
      attempted: this.#attempts.length,
      facets: this.blueprint.facets.map((facet) => ({ facet, attempts: this.#attempts.filter((a) => a.facet === facet).length, correctKeyMatches: this.#attempts.filter((a) => a.facet === facet && a.recalledKey).length })),
      readiness: "NOT_ESTIMATED",
      reason: "Single-item exposure is not proof of mastery or exam readiness.",
    };
  }
}
