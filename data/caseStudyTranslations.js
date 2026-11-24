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
      "Un sistema operativo personal para organizar el día, los hábitos y los proyectos desde una interfaz que integra Notion, Google Sheets y Calendar. La demo pública independiente permite explorar el producto con datos ficticios.",
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
    eyebrow: "Ingeniería full-stack · Aplicación pública funcional",
    summary:
      "Un sistema de gestión de bibliotecas que permite prestar y devolver libros ficticios y gestionar traslados entre sucursales. La aplicación pública usa Next.js, FastAPI y persistencia real en PostgreSQL, con espacios temporales independientes y sin registro.",
    linkLabels: ["Abrir aplicación", "Repositorio público", "Alojamiento y verificación", "Evidencia de CI del backend original"],
    problem:
      "Una red de bibliotecas tiene que controlar cada ejemplar: dos pedidos simultáneos no pueden reservarlo a la vez, y durante un traslado de regreso debe permanecer indisponible hasta llegar a su sucursal. El sistema convierte esas reglas en operaciones utilizables, no solo en un ejercicio de API.",
    constraints: [
      "Un ejemplar no puede tener dos préstamos abiertos, incluso ante concurrencia.",
      "Préstamo, traslado, historial e idempotencia se confirman juntos o se revierten juntos.",
      "La ubicación cambia al recibir el ejemplar; los dañados se retiran de circulación.",
      "Cada visitante utiliza un espacio temporal independiente con datos ficticios, sin registrarse.",
      "La muestra histórica que funciona solo en el navegador es independiente de la aplicación real.",
    ],
    architecture: [
      "Interfaz Next.js y BFF del lado servidor",
      "Sesión temporal y solicitudes autenticadas al backend",
      "Endpoints FastAPI y comandos validados",
      "PostgreSQL: transacciones, locks, restricciones e historial",
      "Servicios Render Free y PostgreSQL Aiven Free",
    ],
    decisions: [
      { title: "Evitar préstamos duplicados", body: "Los comandos bloquean filas y vuelven a validar el estado dentro de la transacción. Las restricciones de la base aportan una segunda protección." },
      { title: "Reintentar sin duplicar", body: "Una Idempotency-Key permite repetir una operación aceptada y rechaza otro contenido con la misma identidad." },
      { title: "Separar visitantes", body: "La interfaz pública crea un espacio sintético aislado y limita las operaciones a esa sesión, en lugar de compartir una biblioteca entre todos." },
      { title: "Representar el negocio", body: "Los estados explícitos de préstamos y traslados mantienen consistentes el inventario y el historial." },
    ],
    verification: [
      "La ejecución de CI original documentó 129 tests aprobados, incluidos 117 de integración PostgreSQL; es evidencia histórica, no el conteo de la última suite.",
      "Las pruebas con base real cubren concurrencia, reintentos idempotentes, rollback, transiciones ilegales y devoluciones dañadas.",
      "La aplicación alojada y la documentación de QA cubren préstamos reales y espacios independientes por visitante.",
      "La muestra histórica de navegador es ilustrativa y no demuestra integración con PostgreSQL.",
    ],
    safety: [
      "Los comandos rechazados no alteran el estado del dominio.",
      "Los espacios temporales contienen datos ficticios y se aíslan por sesión.",
      "La API local de desarrollo sin autenticación no es la interfaz pública de invitados.",
    ],
    status:
      "La aplicación funcional está alojada en Render con PostgreSQL de Aiven y su código es público en GitHub. Surgió de un proyecto académico de backend ampliado a un sandbox de portfolio, no a un servicio para bibliotecas reales.",
    limitations: [
      "El alojamiento gratuito puede dormir o alcanzar cuotas; el primer acceso puede requerir esperar y reintentar.",
      "Solo datos ficticios temporales, sin uso en bibliotecas reales ni garantía de disponibilidad.",
      "La V1 original excluye renovaciones, multas y cancelación de solicitudes abandonadas.",
    ],
  },
  "webhook-recovery-lab": {
    eyebrow: "Ingeniería full-stack · Demo pública funcional",
    summary:
      "Consola real de recepción, entrega y recuperación de webhooks. Enviá pedidos de prueba, consultá sus intentos y recuperá fallos desde una interfaz en español, sin registrarte.",
    linkLabels: ["Abrir aplicación", "Repositorio público", "QA alojado y limitaciones"],
    problem:
      "Un proveedor puede reenviar un aviso, un proceso puede caer después de que el receptor lo acepta y una respuesta perdida puede ocultar el resultado. El desafío es conservar los eventos recibidos y recuperar su entrega sin duplicar efectos.",
    constraints: [
      "Solo pedidos ficticios: sin registros de clientes, cuentas ni destinos externos configurables.",
      "Verificación HMAC del cuerpo original y una ventana temporal acotada.",
      "Confirmación solo después de guardar el evento y su entrega en una transacción.",
      "Lecturas, operaciones y deduplicación aisladas por espacio temporal.",
      "Intentos al menos una vez, reintentos limitados e idempotencia del receptor.",
      "Infraestructura dentro de los límites gratuitos existentes.",
    ],
    architecture: [
      "Consola React/Vite genera un pedido firmado de prueba",
      "Fastify valida el evento y el espacio temporal",
      "PostgreSQL del gateway guarda evento y entrega en una transacción",
      "Worker activado por trabajo con locks, leases y fencing",
      "Receptor HTTP interno registra un efecto idempotente en otra base lógica",
      "Consola muestra intentos, fallos y recuperaciones persistidos",
      "Un servicio Render Free y un proyecto Neon Free independiente",
    ],
    decisions: [
      { title: "Confirmar solo eventos durables", body: "Evento y entrega se guardan juntos. Los duplicados idénticos no generan otra entrega y los conflictos de contenido se rechazan." },
      { title: "Recuperar sin duplicar efectos", body: "Los leases y tokens protegen la propiedad del trabajo; el receptor deduplica por identidad de entrega estable aunque se repita un intento." },
      { title: "Hacer comprensible la confiabilidad", body: "Se puede crear una entrega correcta o un fallo controlado, restaurar el receptor, reenviar y consultar los intentos guardados." },
      { title: "Aislar la demo pública", body: "Sesiones opacas, consultas acotadas, cuotas, vencimiento y limpieza separan los espacios temporales. El receptor es interno y no permite destinos externos." },
    ],
    verification: [
      "QA local V3 del 24/11/2026: 32 pruebas unitarias, 29 de integración PostgreSQL y 5 del showcase; también build, lint y Docker.",
      "Playwright en escritorio y móvil verificó entrega, duplicados, fallos, recuperación, aislamiento y teclado.",
      "QA online documentó rechazo HTTP 422, reenvío HTTP 200, un único recibo durable, aislamiento y arranque en frío.",
      "La revisión posterior de presentación en español compiló y se desplegó correctamente; no se repitieron todas las pruebas de navegador e integración para esa revisión.",
    ],
    safety: [
      "Solo eventos ficticios, receptor HTTP interno fijo e ingreso antiguo sin ámbito deshabilitado en modo público.",
      "Dos bases lógicas y roles limitados; credenciales exclusivamente del lado servidor.",
      "Espacios temporales, cuotas y limpieza; no es una certificación de seguridad o capacidad productiva.",
    ],
    status:
      "La aplicación funcional en español es pública en Render y persiste en PostgreSQL de Neon. El simulador de Vercel se conserva como referencia conceptual independiente. El repositorio de código y su documentación técnica son públicos.",
    limitations: [
      "El alojamiento gratuito puede tardar en despertar; hay cuotas y vencimiento del espacio temporal.",
      "No se declara tráfico real, integración externa arbitraria, SLA ni transporte exactamente una vez.",
      "El QA funcional documentado corresponde a las revisiones probadas; los cambios posteriores de presentación compilaron y se desplegaron sin repetir toda la suite.",
    ],
  },
  "personal-ai-system": {
    eyebrow: "Sistema privado · Código de referencia público",
    summary:
      "Una arquitectura de inteligencia compartida para aprendizaje, investigación, prestación profesional y operación de negocio. Una torre de control coordina conocimiento, métodos, ejecución y evidencia. Una referencia pública independiente permite inspeccionar y ejecutar decisiones representativas de ingeniería.",
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
  "cauce-commerce-lab": {
    eyebrow: "Full-stack personal · Integración real de prueba · Tienda pública",
    summary:
      "Una tienda ficticia donde se puede recorrer un catálogo persistente y armar un pedido. Next.js y Supabase gestionan inventario y checkout; Mercado Pago se integra exclusivamente en modo de prueba, con webhooks firmados y conciliación de pagos.",
    linkLabels: ["Visitar tienda de demostración", "Repositorio público", "Integración de pagos y QA"],
    problem:
      "Demostrar las partes difíciles de un ecommerce con un proyecto personal: consistencia del inventario, administración autorizada, precios controlados por el servidor y conciliación confiable de pagos de terceros. Cauce es ficticio; no cobra compras reales.",
    constraints: [
      "No habilitar cobros reales ni pedidos de clientes.",
      "La Mediterránea histórica y su Producción deben permanecer independientes.",
      "Los importes, reservas y estados de pago nunca se confían al navegador.",
      "El panel requiere autenticación y autorización en la base.",
      "Checkout Pro se prueba con vendedor y comprador ficticios distintos, nunca con tarjetas reales.",
      "La tienda se puede visitar sin cuenta de Vercel; para completar un pago ficticio con Checkout Pro sigue siendo necesaria una cuenta compradora de prueba de Mercado Pago.",
    ],
    architecture: [
      "Tienda y carrito en Next.js",
      "Catálogo, stock y pedidos en Supabase",
      "Cotización, reservas y cuota persistente desde servidor",
      "Mercado Pago Checkout Pro (vendedor y tarjeta de prueba)",
      "Webhook firmado y conciliación con el proveedor",
      "Estados de pago y movimientos de stock transaccionales",
      "Panel con RLS y controles automatizados de CI",
    ],
    decisions: [
      { title: "El proveedor confirma el pago", body: "Cauce genera la preferencia desde el servidor y después comprueba ID, referencia, vendedor de prueba, moneda e importe. Un redirect del navegador no equivale a una aprobación." },
      { title: "Stock sólo con aprobación verificada", body: "Únicamente un pago de prueba aprobado y verificado confirma la venta. Rechazos y pendientes no generan movimientos de venta; una aprobación exige además acreditar la tarjeta oficial ficticia." },
      { title: "Duplicados y concurrencia controlados", body: "Firmas de webhook, idempotencia, reservas atómicas y cuota persistente cubren reintentos y pedidos simultáneos." },
      { title: "Pruebas fáciles de comprender", body: "El checkout muestra la tarjeta pública de prueba y los escenarios aprobado, rechazado y pendiente. Los datos se ingresan en Mercado Pago, nunca en Cauce." },
    ],
    verification: [
      "GitHub Actions, TypeScript, pruebas del checkout y build aprobados en el PR #20 antes de su fusión.",
      "El propietario completó un pago de prueba APRO: Mercado Pago y Cauce mostraron el pedido aprobado.",
      "Se observó un rechazo ficticio OTHE; Supabase registró failed_test sin un movimiento de venta para ese pedido.",
      "El webhook firmado y su reenvío fueron aceptados durante el QA aislado anterior sin duplicar el descuento de stock.",
      "Pruebas SQL de concurrencia, idempotencia, cuota y estados pendiente/rechazado tras la migración M5.",
      "CONT no se volvió a comprobar por separado de punta a punta después de M5; no se declara ese E2E como aprobado.",
    ],
    safety: [
      "Base sintética aislada y credenciales de vendedor sólo de prueba.",
      "Administración con RLS y RPC restringidos al servidor.",
      "Notificaciones firmadas y verificación independiente del estado del pago.",
      "En La Mediterránea histórica el checkout Cauce permanece deshabilitado.",
      "La tienda es pública, pero el panel mantiene Magic Link/RLS; nunca se publican contraseñas de comprador ficticio ni secretos de acceso.",
    ],
    status:
      "El código y las integraciones de prueba ya están fusionados a main en GitHub. La tienda ficticia y Checkout Pro funcionan en un despliegue separado y accesible públicamente sin Vercel SSO. Se comprobaron pagos ficticios aprobados y rechazados; no se aceptan pagos reales. El simulador público antiguo dejó de ser la demo enlazada.",
    limitations: [
      "La tienda se puede recorrer públicamente sin iniciar sesión en Vercel. Para completar un pago de prueba en Mercado Pago todavía se necesita iniciar sesión con un comprador ficticio autorizado.",
      "No se repitió un pago CONT independiente de punta a punta después de la última corrección.",
      "El repositorio conserva La Mediterránea histórica como antecedente, pero esa Producción no ejecuta cobros ficticios de Cauce.",
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
