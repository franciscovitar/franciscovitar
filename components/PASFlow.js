import styles from "./PASFlow.module.scss";

const content = {
  es: {
    label: "Personal AI System · arquitectura conceptual",
    private: "Sistema privado · esquema público",
    title: "De una intención a un resultado comprobable.",
    intro:
      "PAS coordina el contexto, los módulos y las herramientas. ChatGPT puede ser la interfaz de conversación, pero no es la base de datos ni la prueba de que algo se hizo.",
    goal: "01 · Pedido",
    goalTitle: "La persona expresa un objetivo",
    examples: ["«Preparame para un parcial»", "«Registrá un entrenamiento»"],
    control: "02 · Control",
    controlTitle: "PAS decide cómo trabajar",
    controlText: "Selecciona el proyecto y el contexto mínimo pertinente.",
    controlTags: ["Ruta y módulo", "Fuentes", "Permisos"],
    modules: "03 · Especialización",
    modulesTitle: "Ejecuta el método adecuado",
    moduleTags: ["Aprendizaje", "Software", "Investigación", "Proyectos"],
    sources: "04 · Fuentes y herramientas",
    sourcesTitle: "Cada dato conserva su dueño",
    sourceRows: [
      ["GitHub privado", "Reglas, Skills, decisiones"],
      ["Drive", "Originales y evidencia"],
      ["Notion · Sheets · Calendar", "Estado operativo, según dominio"],
    ],
    checks: "05 · Comprobación",
    checksTitle: "La respuesta no alcanza",
    checkRows: ["Evidencia y referencias", "Pruebas o lectura posterior", "Escrituras sólo con autorización"],
    loop: "↺ Lo verificado puede alimentar evaluaciones y mejoras futuras; no se confunde generación con éxito.",
    note: "Recorrido simplificado, no una ejecución en vivo. No muestra información personal ni credenciales.",
  },
  en: {
    label: "Personal AI System · conceptual architecture",
    private: "Private system · public illustration",
    title: "From a goal to a verifiable result.",
    intro:
      "PAS coordinates context, specialized workflows and tools. ChatGPT can be the conversation interface, but it is neither the database nor proof that an action happened.",
    goal: "01 · Intent",
    goalTitle: "A person describes a goal",
    examples: ["“Help me prepare for an exam”", "“Log a workout”"],
    control: "02 · Control",
    controlTitle: "PAS chooses the approach",
    controlText: "It selects the right project and only the context needed.",
    controlTags: ["Routing", "Sources", "Permissions"],
    modules: "03 · Specialization",
    modulesTitle: "Use the right workflow",
    moduleTags: ["Learning", "Software", "Research", "Projects"],
    sources: "04 · Sources & tools",
    sourcesTitle: "Each fact keeps its owner",
    sourceRows: [
      ["Private GitHub", "Rules, Skills, decisions"],
      ["Drive", "Originals and evidence"],
      ["Notion · Sheets · Calendar", "Domain-owned operational state"],
    ],
    checks: "05 · Verification",
    checksTitle: "A response is not enough",
    checkRows: ["Evidence and provenance", "Tests or read-back", "Writes require authorization"],
    loop: "↺ Verified outcomes can inform evaluations and improvements; generation is not mistaken for success.",
    note: "Simplified flow, not a live run. No personal records or credentials are displayed.",
  },
};

export default function PASFlow({ lang = "en", theme = "light" }) {
  const c = content[lang] || content.en;

  return (
    <figure className={`${styles.frame} ${theme === "dark" ? styles.dark : styles.light}`}>
      <figcaption className={styles.topline}>
        <span>{c.label}</span>
        <span>{c.private}</span>
      </figcaption>

      <div className={styles.intro}>
        <strong>{c.title}</strong>
        <p>{c.intro}</p>
      </div>

      <div className={styles.pipeline}>
        <section className={styles.node}>
          <span className={styles.kicker}>{c.goal}</span>
          <strong>{c.goalTitle}</strong>
          <div className={styles.examples}>
            {c.examples.map((example) => <span key={example}>{example}</span>)}
          </div>
        </section>
        <span className={styles.arrow} aria-hidden="true">→</span>
        <section className={`${styles.node} ${styles.control}`}>
          <span className={styles.kicker}>{c.control}</span>
          <strong>{c.controlTitle}</strong>
          <p>{c.controlText}</p>
          <div className={styles.tags}>
            {c.controlTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </section>
        <span className={styles.arrow} aria-hidden="true">→</span>
        <section className={styles.node}>
          <span className={styles.kicker}>{c.modules}</span>
          <strong>{c.modulesTitle}</strong>
          <div className={styles.tags}>
            {c.moduleTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </section>
      </div>

      <div className={styles.downArrow} aria-hidden="true">↓</div>

      <div className={styles.outcome}>
        <section className={styles.node}>
          <span className={styles.kicker}>{c.sources}</span>
          <strong>{c.sourcesTitle}</strong>
          <dl className={styles.sourceList}>
            {c.sourceRows.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <span className={styles.arrow} aria-hidden="true">→</span>
        <section className={`${styles.node} ${styles.verified}`}>
          <span className={styles.kicker}>{c.checks}</span>
          <strong>{c.checksTitle}</strong>
          <ul className={styles.checkList}>
            {c.checkRows.map((row) => <li key={row}>{row}</li>)}
          </ul>
        </section>
      </div>

      <div className={styles.loop}>{c.loop}</div>
      <p className={styles.note}>{c.note}</p>
    </figure>
  );
}
