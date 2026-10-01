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
    technologyStack: "Stack",
    problem: "Problema",
    problemTitle: "El problema que había que resolver",
    constraints: "Restricciones",
    constraintsTitle: "Restricciones que guiaron el diseño",
    architecture: "Arquitectura",
    architectureTitle: "Cómo fluye el sistema",
    decisions: "Decisiones",
    decisionsTitle: "Decisiones que marcaron la arquitectura",
    verification: "Verificación",
    quality: "Calidad",
    qualityTitle: "Cómo lo verifico",
    failure: "Fallas",
    failureTitle: "Cómo responde cuando algo falla",
    currentStatus: "Estado actual",
    currentStatusTitle: "Dónde está hoy",
    limitations: "Qué todavía no cubre",
    email: "Email",
    linkedin: "LinkedIn ↗",
  },
};

const es = {
  "vida-2": {
    eyebrow: "Principal público · Activo",
    summary:
      "Un sistema operativo personal que reúne varias áreas en una sola interfaz sin perder la autoridad ni la privacidad de las fuentes reales.",
    linkLabels: ["Repositorio público"],
    problem:
      "Los datos ya vivían en herramientas confiables. Vida tenía que unificarlos en una experiencia útil sin crear otra fuente de verdad.",
    constraints: [
      "Los datos privados no pueden hacerse públicos sólo para mostrar el producto.",
      "Notion, Sheets y Calendar mantienen responsabilidades distintas.",
      "Si una fuente real falla, Producción no puede fingir éxito con datos demo.",
      "Escribir requiere más controles que leer.",
      "Mocks y fixtures no deben filtrarse a Producción.",
      "Los agentes sólo acceden a lo que sus permisos permiten.",
    ],
    architecture: [
      "Notion / Google Sheets / Google Calendar",
      "Adaptadores tipados por dominio",
      "Superficies autenticadas",
      "Estados explícitos de falla y readiness",
      "Políticas y límites para escrituras seguras",
    ],
    decisions: [
      {
        title: "Mantener la autoridad en la fuente",
        body:
          "Vida compone vistas sobre datos existentes en vez de inventar un store canónico nuevo para todo.",
      },
      {
        title: "Mostrar la falla, no ocultarla",
        body:
          "Si una fuente real falla, la interfaz lo deja claro en vez de reemplazarla por mocks.",
      },
      {
        title: "Separar lectura de escritura",
        body:
          "Muchas integraciones son read-only; las escrituras pasan por políticas, flags, idempotencia y checks de runtime.",
      },
      {
        title: "Acotar el poder de los agentes",
        body:
          "Los agentes reciben contexto autorizado y pueden proponer cambios, no ejecutar cualquier escritura final.",
      },
    ],
    verification: [
      "Contratos tipados y checks estáticos.",
      "Tests sobre límites de fuentes y safe writes.",
      "Checks de idempotencia y políticas.",
      "Preflight de Preview y Producción.",
      "Readiness explícita, sin fallback oculto.",
    ],
    safety: [
      "Sin fallback silencioso de DEV a Producción.",
      "Funciones sensibles apagadas por defecto.",
      "Las escrituras de Producción pasan por gates explícitos.",
      "Los estados de runtime no exponen credenciales.",
    ],
    status:
      "Vida 2.0 está activo y usa datos privados reales. El portfolio muestra la arquitectura y la evidencia técnica, no el dataset personal.",
    limitations: [
      "El portfolio no expone datos personales de salud, finanzas, nutrición o calendario.",
      "Un demo sintético para recruiters es opcional, no necesario para demostrar la arquitectura.",
    ],
  },
  "football-intelligence": {
    eyebrow: "Principal privado · En progreso",
    summary:
      "Producto de inteligencia futbolística que separa investigación, QA, publicación en PostgreSQL y consumo público read-only.",
    problem:
      "La información pierde confiabilidad cuando fuentes, datos faltantes, historial y cálculos de UI se mezclan. La publicación debía ser un límite claro.",
    constraints: [
      "Sólo investigación aprobada por QA puede llegar al producto público.",
      "Dato faltante no puede convertirse en cero.",
      "Procedencia y estado de publicación deben quedar visibles.",
      "La publicación debe ser transaccional e idempotente cuando corresponde.",
      "La web normal no debe tener permisos de escritura.",
      "El producto sigue en progreso y no se presenta como terminado.",
    ],
    architecture: [
      "Fuentes públicas / investigación",
      "Paquete aprobado por QA",
      "Publisher transaccional",
      "Historial en PostgreSQL",
      "Read models current / public",
      "Rol web separado y read-only",
      "Superficies en Next.js",
    ],
    decisions: [
      {
        title: "Publicar es una frontera",
        body:
          "Investigar no alcanza: los datos sólo se vuelven públicos cuando cumplen el contrato de publicación.",
      },
      {
        title: "Separar quien escribe de quien lee",
        body:
          "El publisher puede escribir; la web usa un rol distinto y read-only.",
      },
      {
        title: "No inventar scoring en el cliente",
        body:
          "La UI muestra inteligencia persistida y revisada en vez de calcular reglas ocultas del lado cliente.",
      },
      {
        title: "Preservar historial",
        body:
          "Las revisiones evitan que el último valor borre silenciosamente la evidencia anterior.",
      },
    ],
    verification: [
      "Validación de schema antes de publicar.",
      "Modos validate-only y dry-run.",
      "Integración contra PostgreSQL.",
      "Checks que prueban que el rol web no puede escribir.",
      "Lint, types y build sobre las superficies.",
    ],
    safety: [
      "Las escrituras de publicación son explícitas.",
      "Lecturas públicas separadas del estado privado de investigación.",
      "Missingness e historial se modelan de forma deliberada.",
    ],
    status:
      "La implementación activa es privada y sigue en progreso. La base administrada final y el deployment de Producción todavía no se presentan como cerrados.",
    limitations: [
      "Algunos leaderboards siguen bloqueados hasta certificar cobertura suficiente.",
      "El repo público football-intelligence anterior es legacy, no la fuente actual.",
    ],
  },
  "personal-ai-system": {
    eyebrow: "Principal privado · Activo",
    summary:
      "Sistema modular para coordinar trabajo con IA, software, aprendizaje, proyectos y conocimiento sin perder estado ni control.",
    problem:
      "El trabajo con IA se degrada cuando cada chat maneja su propia verdad, el contexto crece sin límite y las herramientas tienen más permisos de los necesarios.",
    constraints: [
      "El estado canónico actual prevalece sobre chats viejos.",
      "Cada tarea recupera sólo el contexto que necesita.",
      "Los datos sensibles quedan fuera del conocimiento reutilizable.",
      "Las herramientas siguen mínimo privilegio.",
      "Un artefacto sofisticado no demuestra dominio personal por sí solo.",
      "Las fallas repetidas deben mejorar el workflow, no inflar prompts.",
    ],
    architecture: [
      "Objetivo del usuario",
      "Routing y permisos",
      "GitHub canónico + evidencia autoritativa",
      "Runtimes de proyecto / materia",
      "Herramienta especializada",
      "Resultado y estado verificados",
      "Loop de evaluación y mejora",
    ],
    decisions: [
      {
        title: "Una sola verdad canónica",
        body:
          "La inteligencia reutilizable vive en PAS; la evidencia pesada queda en su fuente autoritativa.",
      },
      {
        title: "Contexto mínimo",
        body:
          "Cada tarea carga sólo el contexto relevante en lugar de arrastrar toda la biblioteca.",
      },
      {
        title: "IA no equivale a verificación",
        body:
          "Tests, evidencia, read-back y confianza se mantienen separados del output generado.",
      },
      {
        title: "Permisos por capacidad",
        body:
          "Writes, deploys y gasto requieren más autorización que una consulta normal.",
      },
    ],
    verification: [
      "Contratos de evidencia y procedencia.",
      "Handoffs entre chats y herramientas.",
      "Políticas explícitas de datos y ejecución.",
      "Runtimes orientados a evals.",
      "Read-back en mutaciones importantes.",
    ],
    safety: [
      "Mínimo privilegio en herramientas.",
      "Límites ante prompt injection y exfiltración.",
      "Credenciales fuera del conocimiento reutilizable.",
      "Estado privado fuera del portfolio público.",
    ],
    status:
      "PAS es un sistema privado activo. El portfolio sólo muestra una versión sanitizada de su arquitectura y ejemplos acotados.",
    limitations: [
      "El repositorio privado no se publica.",
      "Esto respalda ingeniería AI-native y orquestación, no expertise en entrenamiento de modelos o investigación ML.",
    ],
  },
  "la-mediterranea-store": {
    eyebrow: "Full-stack de soporte · Listo para integrar",
    summary:
      "Storefront en Next.js/TypeScript con Supabase, admin autenticado, checkout validado por servidor y límites claros para pagos.",
    linkLabels: ["Repositorio público"],
    problem:
      "Había que reconstruir una tienda real con catálogo, variantes, stock y pedidos persistentes sin relajar seguridad ni fingir una integración de pagos activa.",
    constraints: [
      "Catálogo y pedidos deben persistirse fuera de la UI.",
      "El admin necesita autenticación y autorización de base.",
      "El total del checkout se valida en servidor.",
      "Sin credenciales reales, la UI no puede mostrar pagos como activos.",
      "Backup y restore deben poder validarse.",
    ],
    architecture: [
      "Storefront Next.js",
      "Supabase: products / variants / stock / orders",
      "Magic Link",
      "Admin respaldado por RLS",
      "Checkout validado por servidor",
      "Adapter de pago + webhook preparado",
    ],
    decisions: [
      {
        title: "RLS respalda al admin",
        body:
          "Estar autenticado no alcanza: la base también debe autorizar el rol.",
      },
      {
        title: "El servidor manda en checkout",
        body:
          "El total se valida del lado servidor en vez de confiar en cálculos del cliente.",
      },
      {
        title: "Idempotencia en pagos",
        body:
          "Un cambio de carrito o email no debe reutilizar una orden de pago anterior.",
      },
      {
        title: "Preparado no significa activo",
        body:
          "Mercado Pago queda detrás de límites de entorno hasta tener credenciales y gates reales de lanzamiento.",
      },
    ],
    verification: [
      "Checks de integridad del catálogo.",
      "TypeScript y build.",
      "Tests del checkout server-side.",
      "Tests de export / backup admin.",
      "Restore validado.",
    ],
    safety: [
      "Storage sólo escribible por admins.",
      "RLS aplica autorización en base.",
      "Checkout desactivable en Preview.",
      "Errores seguros y headers básicos.",
    ],
    status:
      "La tienda está lista para integrar. Mercado Pago está preparado, pero no se presenta como pago live.",
    limitations: [
      "Credenciales de Producción y lanzamiento final todavía quedan fuera del claim público.",
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
