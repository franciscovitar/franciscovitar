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
  vidaDemo: "https://vida-2-0-demo-genova.vercel.app/",
};

export const projects = [
  {
    slug: "vida-2",
    title: "Vida 2.0",
    kind: { en: "Full-stack", es: "Full-stack" },
    summary: {
      en: "A personal operating system for daily planning, habits and projects, integrating Notion, Google Sheets and Calendar while keeping private data in its original sources.",
      es: "Un sistema operativo personal para organizar el día, los hábitos y los proyectos, integrando Notion, Google Sheets y Calendar sin duplicar los datos privados.",
    },
    stack: "Next.js · TypeScript · Notion API",
    status: { en: "Active · public repository", es: "Activo · repositorio público" },
    live: links.vidaDemo,
    liveLabel: { en: "Explore synthetic demo ↗", es: "Explorar demo con datos ficticios ↗" },
    caseHref: "/work/vida-2",
    repo: "https://github.com/franciscovitar/vida-2.0",
    media: {
      type: "demo",
    },
  },
  {
    slug: "cauce-commerce-lab",
    title: "Cauce Commerce Lab",
    kind: { en: "E-commerce", es: "E-commerce" },
    summary: {
      en: "A fictional online store with a database-backed catalog and inventory. Checkout validates prices on the server and reconciles Mercado Pago test payments through signed webhooks.",
      es: "Una tienda ficticia con catálogo e inventario persistentes. El checkout valida precios en el servidor y reconcilia pagos de prueba de Mercado Pago mediante webhooks firmados.",
    },
    stack: "Next.js · TypeScript · Supabase · Mercado Pago",
    status: {
      en: "Test payments verified · public storefront",
      es: "Pagos de prueba verificados · tienda pública",
    },
    caseHref: "/work/cauce-commerce-lab",
    repo: "https://github.com/franciscovitar/la-mediterranea-store",
    live: "https://cauce-retail-preview-git-feat-cauce-portfolio-tes-76f96e-genova.vercel.app/cauce",
    liveLabel: {
      en: "Visit live sandbox storefront ↗",
      es: "Visitar tienda de demostración ↗",
    },
    media: {
      type: "commerce",
      label: {
        en: "STOREFRONT VISUAL — based on the public Cauce homepage",
        es: "VISTA DE TIENDA — basada en la portada pública de Cauce",
      },
    },
  },
  {
    slug: "library-network-api",
    title: "Library Network",
    kind: { en: "Full-stack · Backend", es: "Full-stack · Backend" },
    summary: {
      en: "A working library management app: lend and return books, transfer copies between branches and explore persistent records in your own temporary workspace. No account required.",
      es: "Un sistema de bibliotecas funcional: registrá préstamos, devoluciones y traslados entre sucursales con datos persistentes en tu propio espacio temporal, sin crear una cuenta.",
    },
    stack: "Next.js · TypeScript · Python · FastAPI · PostgreSQL",
    status: { en: "Live application · public source", es: "Aplicación pública funcional · código público" },
    caseHref: "/work/library-network-api",
    repo: "https://github.com/franciscovitar/library-network-api",
    live: "https://library-network-qa-web.onrender.com/",
    liveLabel: { en: "Open live application ↗", es: "Abrir aplicación ↗" },
    media: { type: "transcript" },
  },
];

export const webhookLab = {
  title: "Webhook Recovery Lab",
  caseHref: "/work/webhook-recovery-lab",
  repo: "https://github.com/franciscovitar/webhook-recovery-lab",
  live: "https://webhook-recovery-lab-v3-qa-franv-20261124.onrender.com",
  summary: {
    en: "A working webhook delivery and recovery console. Send test orders, inspect persisted attempts, trigger a controlled failure and replay delivery without an account.",
    es: "Consola de entrega y recuperación de webhooks. Enviá pedidos de prueba, observá cómo se procesan, provocá un fallo controlado y recuperá la entrega sin crear una cuenta.",
  },
  stack: "React · TypeScript · Fastify · PostgreSQL",
  steps: [
    { name: { en: "Receive", es: "Recibir" }, detail: { en: "Verify HMAC signature", es: "Verificar firma HMAC" } },
    { name: { en: "Persist", es: "Guardar" }, detail: { en: "Atomic inbox + job", es: "Evento y entrega durables" } },
    { name: { en: "Deliver", es: "Entregar" }, detail: { en: "HTTP worker + retries", es: "Envío HTTP y reintentos" } },
    { name: { en: "Failure", es: "Fallo" }, detail: { en: "Controlled rejection", es: "Rechazo controlado" }, tone: "failure" },
    { name: { en: "Recover", es: "Recuperar" }, detail: { en: "Audited replay", es: "Reenvío con auditoría" }, tone: "recovery" },
  ],
};

export const personalAiSystem = {
  title: "Personal AI System",
  summary: {
    en: "Turns an AI request into a scoped workflow with the right knowledge, permissions, tools and checks. The private system is presented through a separate, runnable public reference implementation.",
    es: "Convierte un pedido a la IA en un flujo de trabajo con contexto, permisos, herramientas y verificaciones. El sistema privado se explica mediante una implementación pública de referencia que se puede ejecutar e inspeccionar.",
  },
  stack: "Python · Agents · Evals",
  caseHref: "/work/personal-ai-system",
  repo: "https://github.com/franciscovitar/personal-ai-system-showcase",
};

// Genova's own website (co-founded agency, not client work).
export const genovaShot = {
  desktop: { src: "/images/genova/genova-site-hero-desktop.webp", width: 1200, height: 750 },
  alt: {
    en: "Screenshot of the Genova website: home page for the digital agency, Google Ads, web development and social media.",
    es: "Captura del sitio de Genova: portada de la agencia digital, Google Ads, desarrollo web y redes.",
  },
  capturedAt: "2026-11-19",
  // Authorized by the owner on 2026-11-19. Set to false to withdraw it: an
  // unauthorized screenshot renders only with SHOW_PENDING_SCREENSHOTS=1 (local).
  authorized: true,
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
      // Publication authorized by the owner on 2026-11-19. Set to false to withdraw it:
      // an unauthorized screenshot renders only with SHOW_PENDING_SCREENSHOTS=1 (local).
      authorized: true,
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
      // Publication authorized by the owner on 2026-11-19. Set to false to withdraw it:
      // an unauthorized screenshot renders only with SHOW_PENDING_SCREENSHOTS=1 (local).
      authorized: true,
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
      // Publication authorized by the owner on 2026-11-19. Set to false to withdraw it:
      // an unauthorized screenshot renders only with SHOW_PENDING_SCREENSHOTS=1 (local).
      authorized: true,
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
      // Publication authorized by the owner on 2026-11-19. Set to false to withdraw it:
      // an unauthorized screenshot renders only with SHOW_PENDING_SCREENSHOTS=1 (local).
      authorized: true,
    },
  },
];

export const skills = [
  { group: { en: "Frontend", es: "Frontend" }, items: "TypeScript, React, Next.js, SCSS", usedIn: "Vida 2.0 · Cauce Commerce Lab" },
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
      ["Education", "4th-year Information Systems Engineering student at UTN Córdoba"],
      ["Work", "Co-founder of Genova, client web development since 2022"],
      ["Looking for", "Software Developer and Full-Stack Developer roles"],
    ],
    heroFrameRight: "synthetic demo · no personal data",
    demoEyebrow: "Public interactive demo · fictional data",
    demoIntro: "Explore how tasks, workouts, learning and daily life fit together in one product.",
    demoOpen: "Open the interactive demo ↗",
    demoSections: ["Organize", "Health", "Learn", "Live"],
    heroCaption: "Fig. 00 — Featured personal project",
    heroCaseLink: "Read the Vida 2.0 case →",
    heroDemoLink: "Try the public demo ↗",
    projectsTitle: "Personal projects",
    projectsIntro: "Products I design and build on my own. Client work lives under",
    projectsIntroLink: "Experience",
    personal: "Personal project",
    stackLabel: "Stack",
    statusLabel: "Status",
    viewCase: "View case →",
    code: "Code ↗",
    fig: "Fig.",
    transcriptRight: "transcript · illustrative example",
    transcriptSteps: [
      ["01 TRANSACTION", [["→", "Borrowing request"], ["←", "Atomic data update"]]],
      ["02 CONCURRENCY", [["→", "Two requests for one copy"], ["←", "Availability constraint"]]],
      ["03 IDEMPOTENCY", [["→", "Repeat a request"], ["←", "No duplicate operation"]]],
    ],
    transcriptFoot: "Illustrative sequence, not a captured backend execution. Open the working library app or inspect the repository tests.",
    transcriptCaption: "Demo sequence in three steps",
    privateRepo: "Private repository",
    flowCaption: "Conceptual delivery lifecycle · try the real workflow in the public sandbox",
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
    clientsNote: "Screenshots of the live sites · November 2026",
    pending: "Pending permission",
    genovaFig: "Own site · genovasite.com",
    clientTag: "Client",
    clientPlaceholder: "SCREENSHOT — pending client permission",
    site: "Site ↗",
    aboutTitle: "About",
    aboutBody: "I started Information Systems Engineering at UTN Córdoba in 2023 and am now a 4th-year student. I am also a co-founder of Genova, where I build websites and products for clients, alongside personal projects focused on backend, data and quality.",
    portraitLabel: "Software development · Córdoba, Argentina",
    educationLabel: "Education",
    educationDegree: "Information Systems Engineering",
    educationSchool: "UTN · Córdoba Regional Faculty",
    educationStatus: "Since 2023 · 4th-year student",
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
      ["Formación", "Estudiante de 4.º año de Ingeniería en Sistemas de Información · UTN FRC"],
      ["Trabajo", "Cofundador de Genova, desarrollo web para clientes · 2022 — hoy"],
      ["Busco", "Roles de Software Developer y Full-Stack Developer"],
    ],
    heroFrameRight: "demo sintética · sin datos personales",
    demoEyebrow: "Demo pública interactiva · datos ficticios",
    demoIntro: "Explorá cómo conviven tareas, entrenamientos, estudio y vida cotidiana en un producto.",
    demoOpen: "Abrir demo interactiva ↗",
    demoSections: ["Organizar", "Cuidarme", "Aprender", "Vivir"],
    heroCaption: "Fig. 00 — Proyecto personal destacado",
    heroCaseLink: "Ver el caso de Vida 2.0 →",
    heroDemoLink: "Probar la demo pública ↗",
    projectsTitle: "Proyectos personales",
    projectsIntro: "Productos que diseño y construyo por mi cuenta. El trabajo para clientes está en",
    projectsIntroLink: "Experiencia",
    personal: "Proyecto personal",
    stackLabel: "Stack",
    statusLabel: "Estado",
    viewCase: "Ver caso →",
    code: "Código ↗",
    fig: "Fig.",
    transcriptRight: "transcript · ejemplo ilustrativo",
    transcriptSteps: [
      ["01 TRANSACCIÓN", [["→", "Solicitud de préstamo"], ["←", "Actualización atómica"]]],
      ["02 CONCURRENCIA", [["→", "Dos solicitudes por un ejemplar"], ["←", "Restricción de disponibilidad"]]],
      ["03 IDEMPOTENCIA", [["→", "Repetición de una solicitud"], ["←", "Sin operación duplicada"]]],
    ],
    transcriptFoot: "Secuencia ilustrativa, no una ejecución capturada del backend. Abrí la aplicación funcional o revisá los tests del repositorio.",
    transcriptCaption: "Secuencia de la demo, en tres pasos",
    privateRepo: "Repositorio privado",
    flowCaption: "Ciclo conceptual de entrega · probá el recorrido real en la aplicación",
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
    clientsNote: "Capturas de los sitios en línea · noviembre 2026",
    pending: "Pendiente de autorización",
    genovaFig: "Sitio propio · genovasite.com",
    clientTag: "Cliente",
    clientPlaceholder: "CAPTURA — pendiente de autorización",
    site: "Sitio ↗",
    aboutTitle: "Sobre mí",
    aboutBody: "Empecé Ingeniería en Sistemas de Información en la UTN, Facultad Regional Córdoba, en 2023 y actualmente curso 4.º año. También soy cofundador de Genova, donde desarrollo sitios y productos para clientes, y construyo proyectos propios para profundizar en backend, datos y calidad.",
    portraitLabel: "Desarrollo de software · Córdoba, Argentina",
    educationLabel: "Educación",
    educationDegree: "Ingeniería en Sistemas de Información",
    educationSchool: "UTN · Facultad Regional Córdoba",
    educationStatus: "Desde 2023 · Estudiante de 4.º año",
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
