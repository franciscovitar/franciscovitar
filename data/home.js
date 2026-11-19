// Single source for the editorial home page (ES/EN).
// Only facts already published in the current portfolio or in RFC #11.
// Do not add metrics, testimonials or screenshots without a verified source.

export const links = {
  email: "franvitar15@gmail.com",
  github: "https://github.com/franciscovitar",
  linkedin: "https://www.linkedin.com/in/franciscovitar/",
  genovaWebsite: "https://www.genovasite.com/",
  genovaInstagram: "https://www.instagram.com/genova.marketing/",
  cv: "/Francisco_Vitar_CV_ATS_V1.pdf",
};

export const projects = [
  {
    slug: "vida-2",
    title: "Vida 2.0",
    kind: { en: "Full-stack", es: "Full-stack" },
    summary: {
      en: "A product layer over real data sources (Notion, Google Sheets and Google Calendar) without turning the web app into a second source of truth.",
      es: "Una capa de producto sobre fuentes de datos reales (Notion, Google Sheets y Google Calendar) sin convertir la web en una segunda fuente de verdad.",
    },
    stack: "Next.js · TypeScript · Notion API",
    status: { en: "Active · public repository", es: "Activo · repositorio público" },
    caseHref: "/work/vida-2",
    repo: "https://github.com/franciscovitar/vida-2.0",
    media: {
      type: "image",
      ratio: "4 / 3",
      label: {
        en: "REAL SCREENSHOT — Vida 2.0 · second view to choose · personal data redacted",
        es: "CAPTURA REAL — Vida 2.0 · segunda vista a elegir · datos redactados",
      },
    },
  },
  {
    slug: "la-mediterranea-store",
    title: "La Mediterránea Store",
    kind: { en: "E-commerce", es: "E-commerce" },
    summary: {
      en: "Storefront with persistent catalog and order data, an admin panel protected by RLS and server-validated checkout.",
      es: "Tienda con catálogo y pedidos persistentes, panel de administración protegido con RLS y checkout validado en el servidor.",
    },
    stack: "Next.js · Supabase · RLS",
    status: {
      en: "Payments prepared, not live in production",
      es: "Pagos preparados, no activos en producción",
    },
    caseHref: "/work/la-mediterranea-store",
    repo: "https://github.com/franciscovitar/la-mediterranea-store",
    media: {
      type: "pair",
      // Captured from the project's own local build (fixture catalog, no Supabase
      // credentials, no admin panel).
      images: {
        main: {
          src: "/images/projects/la-mediterranea-store-catalog-desktop.webp",
          width: 1200,
          height: 900,
          alt: {
            en: "La Mediterránea Store, desktop: product catalog with category filters, prices and add-to-cart controls.",
            es: "La Mediterránea Store en escritorio: catálogo de productos con filtros por categoría, precios y botón para agregar al carrito.",
          },
        },
        side: {
          src: "/images/projects/la-mediterranea-store-catalog-mobile.webp",
          width: 520,
          height: 1125,
          alt: {
            en: "La Mediterránea Store, mobile: product catalog in two columns.",
            es: "La Mediterránea Store en mobile: catálogo de productos en dos columnas.",
          },
        },
        capturedAt: "2026-11-19",
        authorized: false,
      },
      label: {
        en: ["REAL SCREENSHOT — Storefront · sample data", "REAL SCREENSHOT — Admin panel"],
        es: ["CAPTURA REAL — Tienda · datos de ejemplo", "CAPTURA REAL — Panel admin"],
      },
    },
  },
  {
    slug: "library-network-api",
    title: "Library Network API",
    kind: { en: "Backend", es: "Backend" },
    summary: {
      en: "API for a library network focused on transactions, concurrency and idempotency, with a reproducible local demo.",
      es: "API para una red de bibliotecas centrada en transacciones, concurrencia e idempotencia, con una demo local reproducible.",
    },
    stack: "FastAPI · PostgreSQL",
    status: { en: "Local demo · tests in the repository", es: "Demo local · tests en el repositorio" },
    repo: "https://github.com/franciscovitar/library-network-api",
    media: { type: "transcript" },
  },
];

export const webhookLab = {
  title: "Webhook Recovery Lab",
  summary: {
    en: "Webhook intake with HMAC verification, inbox, retries, leases, dead-letter and replay.",
    es: "Recepción de webhooks con verificación HMAC, inbox, reintentos, leases, dead-letter y replay.",
  },
  stack: "Fastify · PostgreSQL",
  steps: [
    { name: { en: "Intake", es: "Recepción" }, detail: { en: "HMAC verification", es: "Verificación HMAC" } },
    { name: { en: "Inbox", es: "Inbox" }, detail: { en: "Event persistence", es: "Persistencia del evento" } },
    { name: { en: "Retries", es: "Reintentos" }, detail: { en: "Leases", es: "Leases" } },
    { name: { en: "Dead-letter", es: "Dead-letter" }, detail: { en: "Unresolved failures", es: "Fallos sin resolver" }, tone: "failure" },
    { name: { en: "Replay", es: "Replay" }, detail: { en: "Recovery", es: "Recuperación" }, tone: "recovery" },
  ],
};

export const personalAiSystem = {
  title: "Personal AI System",
  summary: {
    en: "Control layer for long-running AI work: canonical truth, bounded permissions, evidence and verification. Architecture case study, no public demo.",
    es: "Capa de control para trabajo con IA de larga duración: verdad canónica, permisos acotados, evidencia y verificación. Caso de arquitectura, sin demo pública.",
  },
  stack: "Python · Agents · Evals",
  caseHref: "/work/personal-ai-system",
};

// Genova's own website (co-founded agency, not client work). Still pending approval.
export const genovaShot = {
  desktop: { src: "/images/genova/genova-site-hero-desktop.webp", width: 1200, height: 750 },
  alt: {
    en: "Screenshot of the Genova website: home page for the digital agency, Google Ads, web development and social media.",
    es: "Captura del sitio de Genova: portada de la agencia digital, Google Ads, desarrollo web y redes.",
  },
  capturedAt: "2026-11-19",
  // Pending until the owner confirms. Pending screenshots render only with
  // SHOW_PENDING_SCREENSHOTS=1 (local) and are git-ignored (see .gitignore).
  authorized: false,
};

export const clients = [
  {
    title: "Contexto.Psi",
    sector: { en: "Mental health", es: "Salud mental" },
    detail: {
      en: "Service platform: content, team and onboarding.",
      es: "Plataforma de servicios: contenido, equipo y onboarding.",
    },
    live: "https://www.contextopsi.com.ar/",
    shot: {
      desktop: { src: "/images/clients/contexto-psi-faq-desktop.webp", width: 1200, height: 750 },
      mobile: { src: "/images/clients/contexto-psi-hero-mobile.webp", width: 780, height: 1120 },
      alt: { en: "Screenshot of the Contexto.Psi website: FAQ section on desktop, home page on mobile.", es: "Captura del sitio de Contexto.Psi: preguntas frecuentes en escritorio y portada en mobile." },
      capturedAt: "2026-11-19",
      // Client work: keep false until the client authorizes publishing the screenshot.
      // While false the image is local-only: not rendered in production and git-ignored.
      authorized: false,
    },
  },
  {
    title: "Madí Bienestar",
    sector: { en: "Wellness", es: "Bienestar" },
    detail: {
      en: "Wellness clinic website presenting services, workshops and retreats.",
      es: "Sitio de clínica de bienestar con servicios, talleres y retiros.",
    },
    live: "https://www.madibienestar.com/",
    shot: {
      desktop: { src: "/images/clients/madi-bienestar-hero-desktop.webp", width: 1200, height: 750 },
      mobile: { src: "/images/clients/madi-bienestar-hero-mobile.webp", width: 780, height: 1120 },
      alt: { en: "Screenshot of the Madí Bienestar website: home page with a full-width photo and the title “Clínica de Bienestar”.", es: "Captura del sitio de Madí Bienestar: portada con foto a ancho completo y el título «Clínica de Bienestar»." },
      capturedAt: "2026-11-19",
      // Client work: keep false until the client authorizes publishing the screenshot.
      // While false the image is local-only: not rendered in production and git-ignored.
      authorized: false,
    },
  },
  {
    title: "Estudio Starik",
    sector: { en: "Legal services", es: "Servicios legales" },
    detail: {
      en: "Law firm website with practice areas and contact information.",
      es: "Sitio de estudio jurídico con áreas de práctica y contacto.",
    },
    live: "https://www.estudiostarik.com/",
    shot: {
      desktop: { src: "/images/clients/estudio-starik-hero-desktop.webp", width: 1200, height: 750 },
      mobile: { src: "/images/clients/estudio-starik-hero-mobile.webp", width: 780, height: 1120 },
      alt: { en: "Screenshot of the Estudio Starik website: home page with a library background and the title “Estudio Jurídico”.", es: "Captura del sitio de Estudio Starik: portada con fondo de biblioteca y el título «Estudio Jurídico»." },
      capturedAt: "2026-11-19",
      // Client work: keep false until the client authorizes publishing the screenshot.
      // While false the image is local-only: not rendered in production and git-ignored.
      authorized: false,
    },
  },
  {
    title: "Baterías Sur",
    sector: { en: "Services", es: "Servicios" },
    detail: {
      en: "Diagnostics and validated WhatsApp handoff.",
      es: "Diagnóstico y derivación validada a WhatsApp.",
    },
    live: "https://www.bateriasur.com.ar/",
    shot: {
      desktop: { src: "/images/clients/baterias-sur-hero-desktop.webp", width: 1200, height: 750 },
      mobile: { src: "/images/clients/baterias-sur-hero-mobile.webp", width: 780, height: 1120 },
      alt: { en: "Screenshot of the Baterías Sur website: home page with a mechanic checking a car battery.", es: "Captura del sitio de Baterías Sur: portada con un mecánico revisando la batería de un auto." },
      capturedAt: "2026-11-19",
      // Client work: keep false until the client authorizes publishing the screenshot.
      // While false the image is local-only: not rendered in production and git-ignored.
      authorized: false,
    },
  },
];

export const skills = [
  { group: { en: "Frontend", es: "Frontend" }, items: "TypeScript, React, Next.js, SCSS", usedIn: "Vida 2.0 · La Mediterránea" },
  { group: { en: "Backend & data", es: "Backend y datos" }, items: "PostgreSQL, Supabase, FastAPI, Fastify, SQL", usedIn: "Library API · Webhook Lab" },
  { group: { en: "Quality", es: "Calidad" }, items: "Playwright, Vitest, Testing Library", usedIn: { en: "Genova client projects · Webhook Recovery Lab", es: "Proyectos de Genova · Webhook Recovery Lab" } },
  { group: { en: "Infrastructure", es: "Infraestructura" }, items: { en: "Git, GitHub, CI, deployments", es: "Git, GitHub, CI, despliegues" }, usedIn: { en: "Work with Genova", es: "Trabajo con Genova" } },
  { group: { en: "Applied AI", es: "IA aplicada" }, items: { en: "Agent orchestration, evals, verification", es: "Orquestación de agentes, evals, verificación" }, usedIn: "Personal AI System" },
];

export const copy = {
  en: {
    skip: "Skip to content",
    nav: { projects: "Projects", experience: "Experience", about: "About", contact: "Contact" },
    cv: "CV ↓",
    eyebrow: "Software Developer · Full-Stack — Córdoba, Argentina",
    statement: "I build complete web products, from the interface to the database,",
    statementAccent: "and verify them before they ship.",
    ctaPrimary: "View projects",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
    meta: [
      ["Education", "5th-year Information Systems Engineering student at UTN Córdoba"],
      ["Work", "Co-founder of Genova, client web development since 2022"],
      ["Looking for", "Software Developer and Full-Stack Developer roles"],
    ],
    heroFrameRight: "synthetic demo · no personal data",
    heroPlaceholder: "REAL SCREENSHOT — Vida 2.0 · main screen of the synthetic demo",
    heroCaption: "Fig. 00 — Featured personal project",
    heroCaseLink: "Read the Vida 2.0 case →",
    projectsTitle: "Personal projects",
    projectsIntro: "Products I design and build on my own. Client work lives under",
    projectsIntroLink: "Experience",
    personal: "Personal project",
    stackLabel: "Stack",
    statusLabel: "Status",
    viewCase: "View case →",
    code: "Code ↗",
    fig: "Fig.",
    transcriptRight: "transcript · local demo",
    transcriptSteps: [
      ["01 TRANSACTION", [["→", "[ real demo request ]"], ["←", "[ real response ]"]]],
      ["02 CONCURRENCY", [["→", "[ request A ]   → [ request B ]"], ["←", "[ real result ]"]]],
      ["03 IDEMPOTENCY", [["→", "[ retry of the same operation ]"], ["←", "[ real response ]"]]],
    ],
    transcriptFoot: "Template: filled with the real output of the local demo. Not a public service.",
    transcriptCaption: "Demo sequence in three steps",
    privateRepo: "Private repository",
    flowCaption: "Conceptual path of an event · to be validated against the code before publishing",
    pasMeta: "Private",
    experienceTitle: "Experience",
    experienceIntro: "Professional client work through Genova, kept separate from my personal projects.",
    genovaRole: "Co-founder · Full-stack development",
    genovaDates: "2022 — present · Córdoba",
    genovaBody: "A digital agency I co-founded in 2022. I build websites and products for clients in healthcare, wellness, legal services and local businesses.",
    genovaWebsite: "Genova website ↗",
    genovaInstagram: "Genova Instagram ↗",
    genovaBullets: [
      "Requirements and information architecture with each client",
      "Implementation, integrations and deployment",
      "Maintenance and iteration without regressions",
    ],
    clientsLabel: "Client work · Genova",
    clientsNote: "Provisional screenshots · pending each client's permission",
    pending: "Pending permission",
    genovaFig: "Own site · genovasite.com",
    clientTag: "Client",
    clientPlaceholder: "SCREENSHOT — pending client permission",
    site: "Site ↗",
    aboutTitle: "About",
    aboutBody: "I started Information Systems Engineering at UTN Córdoba in 2023 and am now a 5th-year student. I am also a co-founder of Genova, where I build websites and products for clients, alongside personal projects focused on backend, data and quality.",
    photoPlaceholder: "PERSONAL PHOTO",
    educationLabel: "Education",
    educationDegree: "Information Systems Engineering",
    educationSchool: "UTN · Córdoba Regional Faculty",
    educationStatus: "Since 2023 · 5th-year student",
    cvLabel: "Résumé",
    cvLink: "Download CV (PDF) ↓",
    skillsLabel: "Technologies and where I used them",
    contactLabel: "04 — Contact",
    contactTitle: ["Looking for a ", "full-stack", " developer who can own a product end to end?"],
    footerRole: "Francisco Vitar · Software Developer · Córdoba, Argentina",
    top: "Top ↑",
  },
  es: {
    skip: "Saltar al contenido",
    nav: { projects: "Proyectos", experience: "Experiencia", about: "Sobre mí", contact: "Contacto" },
    cv: "CV ↓",
    eyebrow: "Software Developer · Full-Stack — Córdoba, Argentina",
    statement: "Construyo productos web completos, de la interfaz a la base de datos,",
    statementAccent: "y los verifico antes de entregarlos.",
    ctaPrimary: "Ver proyectos",
    ctaContact: "Contactarme",
    ctaCv: "Descargar CV",
    meta: [
      ["Formación", "Estudiante de 5.º año de Ingeniería en Sistemas de Información · UTN FRC"],
      ["Trabajo", "Cofundador de Genova, desarrollo web para clientes · 2022 — hoy"],
      ["Busco", "Roles de Software Developer y Full-Stack Developer"],
    ],
    heroFrameRight: "demo sintética · sin datos personales",
    heroPlaceholder: "CAPTURA REAL — Vida 2.0 · pantalla principal de la demo sintética",
    heroCaption: "Fig. 00 — Proyecto personal destacado",
    heroCaseLink: "Ver el caso de Vida 2.0 →",
    projectsTitle: "Proyectos personales",
    projectsIntro: "Productos que diseño y construyo por mi cuenta. El trabajo para clientes está en",
    projectsIntroLink: "Experiencia",
    personal: "Proyecto personal",
    stackLabel: "Stack",
    statusLabel: "Estado",
    viewCase: "Ver caso →",
    code: "Código ↗",
    fig: "Fig.",
    transcriptRight: "transcript · demo local",
    transcriptSteps: [
      ["01 TRANSACCIÓN", [["→", "[ request real de la demo ]"], ["←", "[ respuesta real ]"]]],
      ["02 CONCURRENCIA", [["→", "[ request A ]   → [ request B ]"], ["←", "[ resultado real ]"]]],
      ["03 IDEMPOTENCIA", [["→", "[ reintento de la misma operación ]"], ["←", "[ respuesta real ]"]]],
    ],
    transcriptFoot: "Plantilla: se completa con la salida real de la demo local. No es un servicio público.",
    transcriptCaption: "Secuencia de la demo, en tres pasos",
    privateRepo: "Repositorio privado",
    flowCaption: "Recorrido conceptual de un evento · a validar contra el código antes de publicar",
    pasMeta: "Privado",
    experienceTitle: "Experiencia",
    experienceIntro: "Trabajo profesional para clientes a través de Genova, separado de mis proyectos personales.",
    genovaRole: "Cofundador · Desarrollo full-stack",
    genovaDates: "2022 — hoy · Córdoba",
    genovaBody: "Agencia digital que cofundé en 2022. Desarrollo sitios y productos para clientes de salud, bienestar, servicios legales y comercios locales.",
    genovaWebsite: "Web de Genova ↗",
    genovaInstagram: "Instagram de Genova ↗",
    genovaBullets: [
      "Requisitos y arquitectura de información con cada cliente",
      "Implementación, integraciones y despliegue",
      "Mantenimiento e iteración sin regresiones",
    ],
    clientsLabel: "Trabajo para clientes · Genova",
    clientsNote: "Capturas provisionales · pendientes de autorización de cada cliente",
    pending: "Pendiente de autorización",
    genovaFig: "Sitio propio · genovasite.com",
    clientTag: "Cliente",
    clientPlaceholder: "CAPTURA — pendiente de autorización",
    site: "Sitio ↗",
    aboutTitle: "Sobre mí",
    aboutBody: "Empecé Ingeniería en Sistemas de Información en la UTN, Facultad Regional Córdoba, en 2023 y actualmente curso 5.º año. También soy cofundador de Genova, donde desarrollo sitios y productos para clientes, y construyo proyectos propios para profundizar en backend, datos y calidad.",
    photoPlaceholder: "FOTO PERSONAL",
    educationLabel: "Educación",
    educationDegree: "Ingeniería en Sistemas de Información",
    educationSchool: "UTN · Facultad Regional Córdoba",
    educationStatus: "Desde 2023 · Estudiante de 5.º año",
    cvLabel: "Currículum",
    cvLink: "Descargar CV (PDF) ↓",
    skillsLabel: "Tecnologías y dónde las usé",
    contactLabel: "04 — Contacto",
    contactTitle: ["¿Buscás un desarrollador ", "full-stack", " que se haga cargo del producto de punta a punta?"],
    footerRole: "Francisco Vitar · Software Developer · Córdoba, Argentina",
    top: "Arriba ↑",
  },
};

export function t(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.en;
  }
  return value;
}
