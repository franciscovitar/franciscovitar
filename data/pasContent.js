export const pasContent = {
  es: {
    kicker: "PAS / SISTEMA PERSONAL DE IA",
    visualTitle: "Una arquitectura. Distintos problemas.",
    visualSubtitle: "Una intención activa un método y un conjunto de fuentes, no un prompt universal.",
    control: "Torre de control",
    controlDetail: "Contexto · rutas · límites",
    flow: ["Objetivo", "Método", "Evidencia"],
    domainsLabel: "Dónde se aplica",
    scopeLabel: "Ámbitos de aplicación",
    scopeTitle: "No es un chatbot para una sola tarea.",
    scopeIntro:
      "PAS es una capa de coordinación que reutiliza reglas y conocimiento entre áreas diferentes, manteniendo separado lo que pertenece a cada materia, proyecto o herramienta.",
    codeLabel: "Código revisable",
    codeTitle: "La arquitectura también se puede auditar.",
    codeBody:
      "El repositorio público contiene un modelo independiente y sintético del router, la selección de fuentes, las autorizaciones, la idempotencia y las pruebas. No publica el sistema privado ni simula conexiones reales.",
    codeAction: "Explorar código y pruebas ↗",
    categories: [
      { number: "01", title: "Aprendizaje", short: "Materias y práctica", body: "Métodos según objetivos, temarios y evaluaciones; preguntas, revisión de errores y evidencia de dominio, en lugar de repasar sin criterio." },
      { number: "02", title: "Conocimiento", short: "Investigación y fuentes", body: "Búsqueda contextual, comparación de alternativas, trazabilidad de afirmaciones y promoción selectiva de conocimiento reutilizable." },
      { number: "03", title: "Vida cotidiana", short: "Salud, gimnasio, nutrición", body: "Captura conversacional y lectura de fuentes propias para distintos dominios, con permisos de escritura y privacidad específicos." },
      { number: "04", title: "Proyectos", short: "Estado y continuidad", body: "Recuperación del contexto vigente, hitos, decisiones y próximos pasos, sin confundir una conversación anterior con el estado canónico." },
      { number: "05", title: "Trabajo profesional", short: "Software y entregas", body: "Metodologías por servicio, investigación previa, criterios de aceptación y trabajo ejecutado sólo dentro de una autoridad definida." },
      { number: "06", title: "Gobernanza", short: "Seguridad y mejora", body: "Clasificación de datos, mínimo privilegio, pruebas, comprobación de resultados y mejora de las causas detrás de errores recurrentes." },
    ],
  },
  en: {
    kicker: "PAS / PERSONAL AI SYSTEM",
    visualTitle: "One architecture. Different problems.",
    visualSubtitle: "An intent activates a specific method and source set, not one universal prompt.",
    control: "Control tower",
    controlDetail: "Context · routing · boundaries",
    flow: ["Intent", "Method", "Evidence"],
    domainsLabel: "Applied across",
    scopeLabel: "Areas of application",
    scopeTitle: "Not a chatbot built for a single task.",
    scopeIntro:
      "PAS is a coordination layer that reuses governed knowledge across domains, while keeping each subject, project and tool's own authority separate.",
    codeLabel: "Inspectable code",
    codeTitle: "The architecture can be reviewed in code.",
    codeBody:
      "The public repository contains an independent, synthetic model of routing, source selection, approvals, idempotency and tests. It does not expose the private system or pretend that real connectors are active.",
    codeAction: "Explore code and tests ↗",
    categories: [
      { number: "01", title: "Learning", short: "Subjects and practice", body: "Assessment-aware methods, official scope, one-question practice, error review and evidence of mastery rather than undirected repetition." },
      { number: "02", title: "Knowledge", short: "Research and sources", body: "Scoped retrieval, comparison, claim provenance and selective promotion of reusable knowledge." },
      { number: "03", title: "Daily life", short: "Health, gym, nutrition", body: "Conversational capture and domain-owned sources, with explicit privacy and write-permission boundaries." },
      { number: "04", title: "Projects", short: "State and continuity", body: "Current records, milestones, decisions and next actions without treating old conversations as canonical state." },
      { number: "05", title: "Professional work", short: "Software and delivery", body: "Service-specific methods, research, acceptance criteria and authorized execution boundaries." },
      { number: "06", title: "Governance", short: "Safety and improvement", body: "Data classification, least privilege, tests, readback and iterative improvement of recurring failure causes." },
    ],
  },
};
