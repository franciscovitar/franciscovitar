export const caseStudyUi = {
  en: {
    selectedWork: "Selected work",
    resume: "Resume ↗",
    github: "GitHub ↗",
    back: "← Back to selected work",
    technologyStack: "Technology stack",
    problem: "Problem",
    problemTitle: "What the system needed to solve",
    constraints: "Constraints",
    constraintsTitle: "The boundaries that shape the design",
    architecture: "Architecture",
    architectureTitle: "System path",
    decisions: "Decisions",
    decisionsTitle: "Important engineering decisions",
    verification: "Verification",
    quality: "Quality",
    qualityTitle: "How the system is checked",
    failure: "Failure handling",
    failureTitle: "What happens when things go wrong",
    currentStatus: "Current status",
    currentStatusTitle: "What is true today",
    limitations: "Explicit limitations",
    email: "Email",
    linkedin: "LinkedIn ↗",
  },
  es: {
    selectedWork: "Proyectos",
    resume: "CV ↗",
    github: "GitHub ↗",
    back: "← Volver a proyectos",
    technologyStack: "Stack tecnológico",
    problem: "Problema",
    problemTitle: "Qué necesitaba resolver el sistema",
    constraints: "Restricciones",
    constraintsTitle: "Los límites que condicionan el diseño",
    architecture: "Arquitectura",
    architectureTitle: "Recorrido del sistema",
    decisions: "Decisiones",
    decisionsTitle: "Decisiones de ingeniería importantes",
    verification: "Verificación",
    quality: "Calidad",
    qualityTitle: "Cómo se verifica el sistema",
    failure: "Manejo de fallas",
    failureTitle: "Qué ocurre cuando algo falla",
    currentStatus: "Estado actual",
    currentStatusTitle: "Qué es cierto hoy",
    limitations: "Limitaciones explícitas",
    email: "Email",
    linkedin: "LinkedIn ↗",
  },
};

const es = {
  "vida-2": {
    eyebrow: "Proyecto principal público · Activo",
    summary:
      "Un sistema operativo personal que reúne múltiples áreas de la vida diaria en una interfaz autenticada, preservando la autoridad y privacidad de las fuentes subyacentes.",
    linkLabels: ["Repositorio público"],
    problem:
      "La información personal ya vivía en herramientas autoritativas. El objetivo no era copiar todo a una base nueva, sino crear una capa de producto útil sin generar una segunda fuente de verdad.",
    constraints: [
      "Los datos personales privados no deben hacerse públicos sólo para demostrar el producto.",
      "Notion, Sheets y Calendar conservan responsabilidades y autoridad diferentes.",
      "Una falla de una fuente real no debe caer silenciosamente a datos falsos en Producción.",
      "Las escrituras requieren más seguridad y autorización que las lecturas.",
      "Fixtures de desarrollo/test deben quedar fuera del comportamiento de Producción.",
      "El acceso de agentes debe mantenerse acotado por permisos explícitos.",
    ],
    architecture: [
      "Notion / Google Sheets / Google Calendar",
      "Adaptadores tipados y loaders de dominio",
      "Superficies de producto autenticadas",
      "Estados explícitos de falla y readiness",
      "Límites de safe-write y políticas donde se permiten escrituras",
    ],
    decisions: [
      {
        title: "Preservar la autoridad de la fuente",
        body:
          "Vida compone vistas de dominio en lugar de fingir que todos los dominios pertenecen a un nuevo store canónico.",
      },
      {
        title: "Fallar de forma visible en vez de fingir éxito",
        body:
          "Cuando una fuente real seleccionada falla, el producto expone ese estado en lugar de inyectar mocks como si fueran datos reales.",
      },
      {
        title: "Separar el riesgo de lectura y escritura",
        body:
          "Muchas integraciones siguen siendo read-only; las escrituras quedan detrás de políticas explícitas, feature flags, idempotencia y checks de runtime.",
      },
      {
        title: "Mantener acotado el acceso de agentes",
        body:
          "Los caminos server-to-server se diseñan alrededor de contexto autorizado y propuestas, no de autoridad irrestricta para escrituras finales.",
      },
    ],
    verification: [
      "Contratos de dominio tipados y checks estáticos.",
      "Tests automatizados sobre límites de fuentes y safe writes.",
      "Verificación de idempotencia y del policy engine.",
      "Validación de entorno/preflight para supuestos de Preview y Producción.",
      "Readiness de runtime explícita en lugar de fallback oculto.",
    ],
    safety: [
      "Sin fallback silencioso de DEV a fuentes de Producción.",
      "Funciones sensibles apagadas por defecto detrás de flags/permisos.",
      "Las escrituras de Producción requieren gates explícitos.",
      "Los estados de runtime se sanitizan y no exponen credenciales.",
    ],
    status:
      "Vida 2.0 es un producto personal activo. Los datos de runtime son privados; este caso de estudio muestra deliberadamente arquitectura y evidencia acotada, no el dataset personal.",
    limitations: [
      "El portfolio público no expone datos privados de salud, finanzas, nutrición o calendario.",
      "Un deployment sintético específico para recruiters es opcional, no necesario para hacer pública la evidencia de arquitectura.",
    ],
  },
  "football-intelligence": {
    eyebrow: "Proyecto principal privado · En progreso",
    summary:
      "Un producto de inteligencia futbolística que separa investigación de fuentes, publicación con QA, historial en PostgreSQL y presentación pública read-only.",
    problem:
      "La investigación futbolística puede volverse engañosa cuando calidad de fuentes, datos faltantes, historial de publicación y cálculos de UI se mezclan. El producto trata la publicación como un límite explícito.",
    constraints: [
      "Sólo paquetes de investigación aprobados por QA pueden ingresar al camino público de datos.",
      "La información faltante no debe convertirse silenciosamente en cero.",
      "La procedencia y el estado de publicación deben seguir siendo explícitos.",
      "La publicación debe ser transaccional/idempotente cuando corresponda.",
      "El render normal de la web no debe tener privilegios de escritura.",
      "El producto sigue en progreso y no puede presentarse como un lanzamiento de Producción terminado.",
    ],
    architecture: [
      "Fuentes públicas / investigación de analista",
      "Paquete de investigación aprobado por QA",
      "Publisher transaccional",
      "Historial y revisiones en PostgreSQL",
      "Read models current/public",
      "Rol web separado y read-only",
      "Superficies de producto en Next.js",
    ],
    decisions: [
      {
        title: "La publicación es un límite",
        body:
          "La investigación recolectada no se convierte en verdad pública hasta satisfacer el contrato de publicación.",
      },
      {
        title: "Separar principals de escritura y lectura",
        body:
          "El tooling de publicación puede escribir mientras el render normal de la web usa un rol de base de datos distinto y read-only.",
      },
      {
        title: "Mantener la semántica fuera de fórmulas ocultas del cliente",
        body:
          "La UI muestra inteligencia persistida/revisada en vez de inventar reglas de scoring ocultas del lado cliente.",
      },
      {
        title: "Preservar el historial",
        body:
          "La semántica de revisiones/publicación evita un modelo donde el valor más nuevo sobreescribe silenciosamente la evidencia previa.",
      },
    ],
    verification: [
      "Validación de schema antes de publicar.",
      "Modos validate-only / dry-run de publicación.",
      "Cobertura de integración con PostgreSQL.",
      "Checks que prueban que el rol web no puede escribir estado de publicación.",
      "Gates de lint, types y build sobre las superficies de producto.",
    ],
    safety: [
      "Las escrituras de publicación son explícitas y acotadas.",
      "Las lecturas públicas están separadas de investigación/estado privado de publicación.",
      "Missingness y estado actual-vs-histórico se representan deliberadamente.",
    ],
    status:
      "La implementación activa es privada y sigue en progreso. La alineación final con la base administrada y el deployment final de Producción no se presentan como completos.",
    limitations: [
      "Algunas inteligencias y leaderboards sensibles a cobertura siguen deliberadamente bloqueados.",
      "El repositorio público football-intelligence anterior es histórico/legacy y no es la fuente de verdad actual.",
    ],
  },
  "personal-ai-system": {
    eyebrow: "Proyecto principal privado · Activo",
    summary:
      "Un sistema modular para coordinar investigación asistida por IA, trabajo de software, aprendizaje, ejecución de proyectos y conocimiento a lo largo del tiempo.",
    problem:
      "El trabajo con IA de largo plazo se vuelve poco confiable cuando cada chat tiene su propia verdad, el contexto crece sin límites, las herramientas tienen permisos excesivos y la salida generada se trata como prueba.",
    constraints: [
      "El estado canónico actual debe prevalecer sobre chats/snapshots viejos.",
      "Sólo debe recuperarse contexto relevante para la tarea.",
      "Los valores sensibles deben quedar fuera del conocimiento reutilizable.",
      "Los permisos de herramientas deben seguir mínimo privilegio.",
      "La sofisticación de un artefacto no debe confundirse con dominio personal.",
      "Las fallas repetidas deben mejorar la capa causal del workflow y no sólo producir prompts más grandes.",
    ],
    architecture: [
      "Objetivo del usuario",
      "Capa de control / routing",
      "Inteligencia canónica en GitHub + stores autoritativos de evidencia",
      "Runtimes de proyecto/materia + permisos de herramientas",
      "Superficie especializada de ejecución",
      "Artefacto / actualización de estado verificada",
      "Loop de evaluación y mejora",
    ],
    decisions: [
      {
        title: "Una sola capa canónica de inteligencia",
        body:
          "La inteligencia reutilizable y destilada vive en el repositorio privado PAS, mientras los originales pesados quedan en su store autoritativo.",
      },
      {
        title: "Recuperación mínima",
        body:
          "Las tareas cargan el contexto mínimo relevante de proyecto/dominio en lugar de precargar todo el sistema de conocimiento.",
      },
      {
        title: "Asistencia de IA no es verificación",
        body:
          "Evidencia, tests, read-back y estados explícitos de confianza se mantienen separados de la sofisticación de los artefactos generados.",
      },
      {
        title: "Permisos basados en capacidad",
        body:
          "Escrituras, deployments y gasto con consecuencias requieren autorización más fuerte que el análisis normal.",
      },
    ],
    verification: [
      "Contratos de evidencia/procedencia y scripts de validación.",
      "Handoffs de proyectos diseñados para sobrevivir entre chats/herramientas.",
      "Políticas explícitas de ejecución y datos.",
      "Runtimes orientados a evals y mejora continua.",
      "Expectativas de read-back para mutaciones importantes.",
    ],
    safety: [
      "Permisos de herramientas con mínimo privilegio.",
      "Límites frente a prompt injection y exfiltración.",
      "Credenciales dentro de límites de entorno/secret manager.",
      "El estado privado de proyectos/usuario no se publica como artefacto de portfolio.",
    ],
    status:
      "PAS es un sistema privado activo. El portfolio expone sólo una narrativa de arquitectura sanitizada y ejemplos acotados.",
    limitations: [
      "El repositorio privado no se publica deliberadamente.",
      "Este trabajo respalda claims de ingeniería AI-native/orquestación de herramientas, no expertise en entrenamiento de modelos o investigación ML.",
    ],
  },
  "la-mediterranea-store": {
    eyebrow: "Full-stack de soporte · Listo para integrar",
    summary:
      "Una tienda Next.js/TypeScript respaldada por Supabase con workflows admin autenticados, validación de checkout autoritativa del lado servidor y límites explícitos para la integración de pagos.",
    linkLabels: ["Repositorio público"],
    problem:
      "Reconstruir una tienda real de merchandising con catálogo, variantes, stock y pedidos persistentes manteniendo seguros la administración y el futuro límite de pagos.",
    constraints: [
      "El estado de catálogo/pedidos debe persistirse en lugar de quedar hardcodeado en la UI.",
      "El acceso admin necesita autenticación más autorización de base de datos.",
      "Los totales del checkout deben ser autoritativos del lado servidor.",
      "Todavía no hay credenciales de pago, por lo que la UI no debe implicar que el pago live está activo.",
      "Backup/restore necesita validación y no simple copia best-effort.",
    ],
    architecture: [
      "Storefront Next.js",
      "Supabase products / variants / stock / orders",
      "Autenticación Magic Link",
      "Rol admin respaldado por RLS",
      "Quote de checkout autoritativa del lado servidor",
      "Adapter de pago preparado + límite de webhook firmado",
    ],
    decisions: [
      {
        title: "RLS respalda la autorización admin",
        body:
          "La autenticación sola no se considera prueba suficiente de acceso de administrador.",
      },
      {
        title: "El checkout es autoritativo del lado servidor",
        body:
          "El servidor valida el límite carrito/quote en lugar de confiar en un total calculado por el cliente.",
      },
      {
        title: "Usar idempotencia al reutilizar órdenes de pago",
        body:
          "Un cambio en carrito/email no debería reutilizar accidentalmente la identidad de una orden anterior.",
      },
      {
        title: "Preparado no significa live",
        body:
          "Las rutas de Mercado Pago Orders/webhook siguen explícitamente listas para integrar hasta completar credenciales reales y gates de lanzamiento.",
      },
    ],
    verification: [
      "Checks de integridad del catálogo.",
      "Checks de TypeScript/build.",
      "Tests unitarios para validación server-side del checkout.",
      "Tests de helpers de export/backup admin.",
      "Workflow de restore validado.",
    ],
    safety: [
      "Escrituras de Supabase Storage restringidas a administradores.",
      "RLS aplica autorización de base de datos.",
      "El checkout puede quedar deshabilitado en contextos de preview/validación de backup.",
      "404/errores seguros y headers básicos de seguridad.",
    ],
    status:
      "La tienda está lista para integrar. Mercado Pago está preparado detrás de límites de entorno y no se representa como una integración de pago live.",
    limitations: [
      "Las credenciales de pago de Producción y el lanzamiento final quedan fuera del claim público actual.",
    ],
  },
};

export function localizeCaseStudy(study, lang) {
  if (lang !== "es") return study;
  const translation = es[study.slug];
  if (!translation) return study;

  const links = study.links.map((link, index) => ({
    ...link,
    label: translation.linkLabels?.[index] || link.label,
  }));

  return { ...study, ...translation, links };
}
