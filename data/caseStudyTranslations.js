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
    linkLabels: ["Probar demo ficticia · recorrido 90 s", "Código de la aplicación original"],
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
      "Demo interactiva desplegada por separado, con datos ficticios, recorrido guiado, código propio y tests automatizados; no verifica integraciones reales.",
    ],
    safety: [
      "Sin fallback silencioso de DEV a Producción.",
      "Funciones sensibles apagadas por defecto.",
      "Las escrituras de Producción pasan por gates explícitos.",
      "Los estados de runtime no exponen credenciales.",
    ],
    status:
      "Vida 2.0 es un producto personal activo y autenticado. La demo pública independiente permite explorar flujos seleccionados con datos ficticios; ni la demo ni esta página exponen registros personales o prueban integraciones en vivo.",
    limitations: [
      "El portfolio no expone datos personales de salud, finanzas, nutrición o calendario.",
      "La demo enlazada es una muestra estática independiente: sus acciones locales y métricas ficticias no equivalen a llamadas a ChatGPT ni a escrituras autenticadas en el sistema original.",
    ],
  },
  "library-network-api": {
    eyebrow: "Backend público · Muestra interactiva de ingeniería",
    summary:
      "Una API REST que administra el recorrido de un ejemplar físico entre sucursales, incluso con solicitudes concurrentes y reintentos.",
    linkLabels: ["Probar simulador interactivo", "Repositorio público", "Caso técnico", "Evidencia de CI"],
    problem:
      "Si dos personas solicitan el mismo ejemplar al mismo tiempo, la red de bibliotecas debe aceptar como máximo un préstamo. El ejemplar permanece indisponible hasta que regresa a su sucursal de origen.",
    constraints: [
      "Un ejemplar físico no puede tener dos préstamos abiertos, incluso ante concurrencia.",
      "Solicitud, transferencia, historial y clave de idempotencia se confirman juntos o se revierten juntos.",
      "La ubicación cambia cuando la sucursal receptora confirma la llegada.",
      "Un reintento con la misma clave no puede duplicar un préstamo.",
      "Un ejemplar dañado se retira de circulación.",
      "La simulación estática está hospedada con datos ficticios; FastAPI y PostgreSQL reales siguen ejecutándose localmente o en CI.",
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
      "El modelo interactivo hospedado tiene seis tests automatizados independientes; no equivalen a integración con PostgreSQL.",
    ],
    safety: [
      "Los comandos rechazados no alteran préstamos, transferencias, ejemplares ni historial.",
      "PostgreSQL no expone un puerto al host en el Compose de la demo.",
      "La API no tiene autenticación ni rate limiting: no debe hospedarse públicamente tal cual está.",
    ],
    status:
      "La API V1 y sus pruebas están en main público. También hay una muestra interactiva en Vercel, aislada y con datos ficticios. El backend real se reproduce con Docker local y CI, pero no se expone como servicio público. El proyecto surgió de un trabajo académico individual, ampliado con asistencia de IA; nunca se operó en producción.",
    limitations: [
      "No se afirma que exista una API pública hospedada, autenticación ni uso en producción.",
      "La V1 excluye renovaciones, multas y cancelación de solicitudes abandonadas.",
    ],
  },
  "webhook-recovery-lab": {
    eyebrow: "Backend privado · Simulador público de recuperación",
    summary:
      "Backend sintético que recibe webhooks firmados, persiste entregas, reintenta fallos temporales y permite inspeccionar la recuperación.",
    linkLabels: ["Probar simulador de recuperación"],
    problem:
      "Un proveedor puede reenviar un webhook, un worker puede caer después de que el receptor lo procesa, o un timeout puede ocultar el resultado. La dificultad es no perder eventos aceptados ni aplicar el mismo efecto dos veces.",
    constraints: [
      "Las firmas HMAC se comprueban contra el cuerpo original y una ventana temporal acotada.",
      "Sólo se responde con éxito después de confirmar juntos el evento en inbox y su job.",
      "Se deduplican reentregas idénticas y se rechaza reutilizar un ID con contenido distinto.",
      "Los leases vencen; un worker viejo no puede confirmar sobre un nuevo propietario.",
      "La entrega física es al menos una vez: el receptor deduplica el efecto por su cuenta.",
      "Eventos, credenciales y destinos del backend son sintéticos y locales. La muestra pública no tiene red, criptografía real ni trabajadores.",
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
      "No hay API webhook ni receptor públicos, ni destinos configurables por visitantes; solo se hospeda una interfaz de simulación ficticia.",
      "No se promete transporte exactly-once; la idempotencia del receptor protege el efecto registrado.",
    ],
    status:
      "El laboratorio real con TypeScript, Fastify y PostgreSQL y su CI permanecen privados. Ahora existe una consola pública en Vercel que simula HMAC, reintentos, crashes, recuperación de leases, deduplicación y replay con estados en memoria. No es un servicio de webhooks en producción ni el backend original expuesto.",
    limitations: [
      "Un despliegue real exigiría rotación de secretos, TLS, autenticación operativa, monitoreo, backups y validación de capacidad y seguridad.",
      "El repositorio y la evidencia de CI no están disponibles para visitantes públicos.",
    ],
  },
  "personal-ai-system": {
    eyebrow: "Sistema privado · Código de referencia público",
    summary:
      "Una torre de control de IA personal para aprendizaje, investigación, proyectos y captura de datos cotidianos. Cada objetivo activa métodos, fuentes y permisos adecuados; un repositorio público permite revisar código y pruebas representativos.",
    linkLabels: ["Repositorio público · Código y pruebas"],
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
      "La referencia pública incluye routing, contratos de Skills, recuperación por ámbito, permisos y evidencia, aprendizaje, captura, continuidad con CAS/idempotencia, mejora gobernada y pruebas negativas.",
      "Los casos de estudio, captura, investigación, proyectos y trabajo profesional usan datos ficticios; no se muestran integraciones reales como ejecutadas.",
      "El ejemplo separa planificación, aprobación y comprobación posterior; no se publican los resultados íntegros de las validaciones privadas.",
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
        label: "Código · público",
        title: "Una implementación que se puede revisar",
        body: "El repositorio público ofrece una referencia por capas: 14 contratos de Skills, fuentes y políticas, ejemplos por dominio, continuidad, controles de revisión y tests automatizados. No comparte datos privados de PAS ni su historial Git.",
      },
    ],
    safety: [
      "Mínimo privilegio en herramientas.",
      "Límites ante prompt injection y exfiltración.",
      "Credenciales fuera del conocimiento reutilizable.",
      "Estado privado fuera del portfolio público.",
    ],
    status:
      "PAS sigue siendo un sistema personal privado activo. Esta página explica su alcance y el repositorio público ofrece código y pruebas sintéticas auditables, sin demo conectada ni herramientas reales expuestas.",
    limitations: [
      "El repositorio original, las integraciones reales y los datos personales no se publican. El showcase es más pequeño y no reproduce el entorno completo.",
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
