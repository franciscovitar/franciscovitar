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
    architectureJump: "Explore the full architecture ↓",
    decisions: "Decisions",
    decisionsTitle: "Important engineering decisions",
    verification: "Verification",
    quality: "Quality",
    qualityTitle: "How the system is checked",
    evidenceTitle: "Evidence and visibility",
    evidenceIntro: "A clear distinction between documented internal mechanisms and what a public visitor can independently inspect.",
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
    architectureJump: "Explorar la arquitectura completa ↓",
    decisions: "Decisiones",
    decisionsTitle: "Decisiones que marcaron la arquitectura",
    verification: "Verificación",
    quality: "Calidad",
    qualityTitle: "Cómo lo verifico",
    evidenceTitle: "Evidencia que puedo mostrar",
    evidenceIntro: "Separé los documentos internos de lo que realmente puede comprobar alguien que visita esta página.",
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
  "library-network-api": {
    eyebrow: "Laboratorio backend público · V1 verificada",
    summary:
      "Una API REST que administra el recorrido de un ejemplar físico entre sucursales, incluso con solicitudes concurrentes y reintentos.",
    linkLabels: ["Repositorio público", "Caso técnico", "Evidencia de CI"],
    problem:
      "Si dos personas solicitan el mismo ejemplar al mismo tiempo, la red de bibliotecas debe aceptar como máximo un préstamo. El ejemplar permanece indisponible hasta que regresa a su sucursal de origen.",
    constraints: [
      "Un ejemplar físico no puede tener dos préstamos abiertos, incluso ante concurrencia.",
      "Solicitud, transferencia, historial y clave de idempotencia se confirman juntos o se revierten juntos.",
      "La ubicación cambia cuando la sucursal receptora confirma la llegada.",
      "Un reintento con la misma clave no puede duplicar un préstamo.",
      "Un ejemplar dañado se retira de circulación.",
      "La demo es local, con datos sintéticos; no es un servicio público hospedado.",
    ],
    architecture: [
      "Cliente HTTP / Swagger / script de demo reproducible",
      "Endpoints FastAPI y esquemas validados",
      "Comandos de aplicación: una transacción por operación",
      "Estados de préstamos, ejemplares y transferencias",
      "PostgreSQL: locks, restricciones e historial",
      "Docker reproducible + verificación en CI",
    ],
    decisions: [
      { title: "Bloquear el ejemplar", body: "Los comandos toman locks de filas en un orden fijo y vuelven a validar el estado. Dos pedidos simultáneos no pueden reservar el mismo libro." },
      { title: "Hacer que la base también proteja", body: "Un índice único parcial y restricciones explícitas rechazan estados inválidos aunque falle una comprobación de la aplicación." },
      { title: "Reintentar sin duplicar", body: "Una Idempotency-Key repite una solicitud aceptada, pero rechaza usar la misma identidad con otro contenido." },
      { title: "Mantener una arquitectura acotada", body: "Un monolito modular y PostgreSQL transaccional permiten reproducir el ciclo sin colas ni servicios innecesarios." },
    ],
    verification: [
      "Ejecución enlazada de GitHub Actions: 129 tests aprobados (117 de integración PostgreSQL + 12 unitarios/HTTP), ninguno omitido.",
      "Pedidos concurrentes del mismo ejemplar: uno aceptado, otro rechazado sin registros duplicados.",
      "Rollback, replay idempotente, transiciones ilegales y devoluciones dañadas cubiertos con tests sobre base real.",
      "Script HTTP local determinista que recorre el préstamo entre sucursales y la devolución completa.",
    ],
    safety: [
      "Los comandos rechazados no alteran préstamos, transferencias, ejemplares ni historial.",
      "PostgreSQL no expone un puerto al host en el Compose de la demo.",
      "La API no tiene autenticación ni rate limiting: no debe hospedarse públicamente tal cual está.",
    ],
    status:
      "La V1 está en main del repositorio público, con demo local Docker y una ejecución de CI enlazada. Es un laboratorio de portfolio inspirado en un trabajo académico individual; la API nueva se construyó con asistencia de IA, no se operó como servicio de producción.",
    limitations: [
      "No se afirma que exista una API pública hospedada, autenticación ni uso en producción.",
      "La V1 excluye renovaciones, multas y cancelación de solicitudes abandonadas.",
    ],
  },
  "webhook-recovery-lab": {
    eyebrow: "Laboratorio privado de confiabilidad · En progreso",
    summary:
      "Backend sintético que recibe webhooks firmados, persiste entregas, reintenta fallos temporales y permite inspeccionar la recuperación.",
    problem:
      "Un proveedor puede reenviar un webhook, un worker puede caer después de que el receptor lo procesa, o un timeout puede ocultar el resultado. La dificultad es no perder eventos aceptados ni aplicar el mismo efecto dos veces.",
    constraints: [
      "Las firmas HMAC se comprueban contra el cuerpo original y una ventana temporal acotada.",
      "Sólo se responde con éxito después de confirmar juntos el evento en inbox y su job.",
      "Se deduplican reentregas idénticas y se rechaza reutilizar un ID con contenido distinto.",
      "Los leases vencen; un worker viejo no puede confirmar sobre un nuevo propietario.",
      "La entrega física es al menos una vez: el receptor deduplica el efecto por su cuenta.",
      "Eventos, credenciales y destinos son sintéticos y locales.",
    ],
    architecture: [
      "Proveedor sintético envía evento HTTP firmado",
      "Fastify verifica firma y esquema",
      "Transacción PostgreSQL: evento inbox + job de entrega",
      "Worker reclama jobs con SKIP LOCKED y tokens de lease",
      "Receptor HTTP registra un solo efecto en otra base",
      "Reintentos, dead-letter, replay auditado y diagnósticos de lectura",
    ],
    decisions: [
      { title: "Confirmar sólo eventos durables", body: "Inbox y job se insertan en una sola transacción PostgreSQL. No se devuelve 202 antes del commit." },
      { title: "Recuperar sin duplicar propietarios", body: "Leases breves, locks y fencing tokens impiden que una confirmación vieja pise a un worker nuevo." },
      { title: "Separar intentos de efectos", body: "Un worker que cae puede reenviar; el receptor registra un solo efecto mediante una identidad de entrega estable." },
      { title: "Dejar las fallas a la vista", body: "Reintentos acotados, dead-letter, generaciones de replay y snapshots de cola muestran el estado y su recuperación." },
    ],
    verification: [
      "Cobertura documentada de tests unitarios y de integración PostgreSQL para firmas, duplicados y rollback.",
      "Claims concurrentes, reintentos por 503, recuperación de leases, ACK obsoletos y replay auditado con eventos sintéticos.",
      "Escenario HTTP de recuperación y smoke Docker Compose registrados en evidencia de CI privada.",
      "Repositorio y logs de CI privados: esta ficha no implica resultados inspeccionables por visitantes.",
    ],
    safety: [
      "No se usan webhooks reales de clientes ni credenciales de producción.",
      "No hay despliegue público ni destinos configurables por visitantes.",
      "No se promete transporte exactly-once; la idempotencia del receptor protege el efecto registrado.",
    ],
    status:
      "Laboratorio privado activo con entradas sintéticas, pruebas locales documentadas y CI privado. No es un servicio de webhooks en producción ni una demo pública hospedada.",
    limitations: [
      "Un despliegue real exigiría rotación de secretos, TLS, autenticación operativa, monitoreo, backups y validación de capacidad y seguridad.",
      "El repositorio y la evidencia de CI no están disponibles para visitantes públicos.",
    ],
  },
  "personal-ai-system": {
    eyebrow: "Principal privado · Activo",
    summary:
      "Cuando le pido a la IA estudiar para un parcial o trabajar en un proyecto, PAS selecciona conocimientos, reglas y herramientas permitidas, y distingue la respuesta de la evidencia de que el trabajo se hizo.",
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
      "START_HERE.md y AI/BOOTSTRAP.md definen el arranque y la recuperación de contexto en el main privado de PAS.",
      "Las políticas de datos, seguridad y ejecución separan el contexto de una tarea del permiso para modificar sistemas externos.",
      "El estudio usa material de cada materia y criterios de evaluación, no un prompt genérico.",
      "Existen scripts de validación y métodos de evaluación documentados internamente; esta página no publica resultados de sus ejecuciones.",
      "Los cambios importantes requieren autorización y lectura posterior para comprobar el estado; no alcanza con afirmar que se hicieron.",
    ],
    evidence: [
      {
        label: "Documentado · privado",
        title: "Un punto de entrada concreto",
        body: "START_HERE.md → AI/BOOTSTRAP.md define cómo se inicia el trabajo, qué contexto cargar y cómo elegir fuentes autoritativas. Esos archivos existen en el repositorio privado actual.",
      },
      {
        label: "Documentado · privado",
        title: "Límites de ejecución",
        body: "DATA_POLICY, AGENT_SECURITY y EXECUTION_POLICY documentan reglas para acceso a datos, permisos y cambios. La documentación no equivale a una ejecución real observada.",
      },
      {
        label: "Visible · público",
        title: "Un recorrido sin datos sensibles",
        body: "El ejemplo de preparación del parcial y el mapa de arquitectura son ilustrativos. No se expone el repo privado, información personal, logs de evaluación ni una demo conectada.",
      },
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
