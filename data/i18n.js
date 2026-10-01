export const homepageCopy = {
  en: {
    nav: { work: "Work", background: "Background", approach: "Approach", contact: "Contact" },
    availability: "Open to software roles",
    resume: "Resume ↗",
    eyebrow: "Software Engineer · Full-Stack Product Engineer",
    heroTitle: "I build product systems across web, data and AI — with verification built in.",
    heroLead:
      "Fourth-year Systems Engineering student at UTN and founder of Genova. My strongest work spans TypeScript/Next.js, PostgreSQL, product delivery and AI-assisted engineering.",
    primaryCta: "Explore selected work",
    github: "GitHub ↗",
    proof: [
      ["2022—Now", "Founder & Software Engineer · Genova"],
      ["4th year", "Systems Engineering · UTN"],
      ["40+", "Client websites / products built and delivered"],
    ],
    visualLabel: "What my work connects",
    selectedWorkEyebrow: "Selected work",
    selectedWorkTitle: "A few systems worth opening.",
    selectedWorkIntro:
      "Each case study shows the problem, engineering decisions, verification and the system’s current state.",
    openCaseStudy: "Open case study →",
    caseStudy: "Case study →",
    repository: "Repository ↗",
    repo: "Repo ↗",
    backgroundEyebrow: "Background",
    backgroundTitle: "Real delivery plus strong systems fundamentals.",
    experienceKicker: "Experience · 2022—Present",
    experienceTitle: "Founder & Software Engineer — Genova",
    experienceBody:
      "I founded a bootstrapped software/web product studio and built and delivered 40+ websites/products for real third-party clients across healthcare, wellness, legal and local-service businesses.",
    experienceBullets: [
      "Requirements and information architecture",
      "Implementation, integrations and deployment",
      "Maintenance and regression-oriented iteration",
    ],
    educationKicker: "Education · 2023—Present",
    educationTitle: "Systems Engineering — UTN",
    educationBody:
      "Fourth academic year in 2026, with strong results in core software and systems coursework.",
    clientEyebrow: "Selected client delivery",
    clientTitle: "Software shipped for real organizations.",
    live: "Live ↗",
    approachEyebrow: "How I work",
    approachTitle: "Build fast. Keep the boundaries explicit.",
    approachBody:
      "AI helps me move faster, but the standard is still a system I can explain, inspect and verify.",
    stackLabel: "Core stack in substantive work",
    contactEyebrow: "Contact",
    contactTitle: "Looking for an engineer who can own a product end to end?",
    contactBody:
      "I’m interested in Software Engineer and Full-Stack / Product Engineer roles where product, data and engineering quality matter.",
    email: "Email",
    linkedin: "LinkedIn ↗",
    footerRole: "Software Engineer · Córdoba, Argentina",
  },
  es: {
    nav: { work: "Proyectos", background: "Perfil", approach: "Cómo trabajo", contact: "Contacto" },
    availability: "Disponible para roles de software",
    resume: "CV ↗",
    eyebrow: "Software Engineer · Full-Stack Product Engineer",
    heroTitle: "Construyo productos web, de datos e IA — con verificación desde el diseño.",
    heroLead:
      "Estoy en 4.º año de Ingeniería en Sistemas en UTN y fundé Genova. Trabajo principalmente con TypeScript/Next.js, PostgreSQL, producto e ingeniería asistida por IA.",
    primaryCta: "Ver proyectos",
    github: "GitHub ↗",
    proof: [
      ["2022—Hoy", "Founder & Software Engineer · Genova"],
      ["4.º año", "Ingeniería en Sistemas · UTN"],
      ["40+", "Webs / productos entregados a clientes"],
    ],
    visualLabel: "Cómo se conecta mi trabajo",
    selectedWorkEyebrow: "Proyectos seleccionados",
    selectedWorkTitle: "Sistemas que muestran cómo trabajo.",
    selectedWorkIntro:
      "Cada caso muestra el problema, las decisiones técnicas, cómo lo verifiqué y el estado real del sistema.",
    openCaseStudy: "Ver caso de estudio →",
    caseStudy: "Caso de estudio →",
    repository: "Repositorio ↗",
    repo: "Repo ↗",
    backgroundEyebrow: "Perfil",
    backgroundTitle: "Experiencia real y base sólida en sistemas.",
    experienceKicker: "Experiencia · 2022—Hoy",
    experienceTitle: "Founder & Software Engineer — Genova",
    experienceBody:
      "Fundé Genova en 2022 y desde entonces construí y entregué 40+ webs y productos para clientes reales de salud, bienestar, legal y servicios.",
    experienceBullets: [
      "Relevamiento y arquitectura de información",
      "Desarrollo, integraciones y deploy",
      "Mantenimiento y cambios con control de regresiones",
    ],
    educationKicker: "Educación · 2023—Hoy",
    educationTitle: "Ingeniería en Sistemas — UTN",
    educationBody:
      "En 2026 curso 4.º año, con buen desempeño en materias centrales de software y sistemas.",
    clientEyebrow: "Trabajo con clientes",
    clientTitle: "Software que ya usan organizaciones reales.",
    live: "Sitio ↗",
    approachEyebrow: "Cómo trabajo",
    approachTitle: "Avanzar rápido, sin perder control.",
    approachBody:
      "Uso IA para acelerar el trabajo, pero no doy nada por válido sin poder explicarlo, inspeccionarlo y verificarlo.",
    stackLabel: "Stack principal",
    contactEyebrow: "Contacto",
    contactTitle: "¿Buscás un Software Engineer para llevar un producto de punta a punta?",
    contactBody:
      "Busco roles de Software Engineer o Full-Stack / Product Engineer donde importen el producto, los datos y la calidad técnica.",
    email: "Email",
    linkedin: "LinkedIn ↗",
    footerRole: "Software Engineer · Córdoba, Argentina",
  },
};

const projectEs = {
  "vida-2": {
    label: "Principal · Público",
    status: "Activo",
    hook:
      "Una capa de producto sobre varias fuentes reales, sin convertir la web en otra fuente de verdad.",
    highlights: [
      "Las fallas de fuentes reales quedan visibles",
      "Los datos privados no salen al portfolio público",
      "Lecturas y escrituras tienen límites distintos",
    ],
  },
  "football-intelligence": {
    label: "Principal · Privado",
    status: "En progreso",
    hook:
      "La investigación llega al producto sólo después de QA, publicación transaccional y trazabilidad.",
  },
  "personal-ai-system": {
    label: "Principal · Privado",
    status: "Activo",
    hook:
      "Una capa de control para trabajo con IA de largo plazo: estado canónico, permisos, evidencia y verificación.",
  },
  "la-mediterranea-store": {
    label: "Full-stack · Soporte",
    status: "Listo para integrar",
    hook:
      "Storefront real con catálogo y pedidos persistentes, admin con RLS y checkout validado por servidor.",
  },
};

const clientEs = {
  Pimp: {
    detail:
      "Sitio en Next.js con formularios controlados, secciones data-driven y tests con Vitest/Testing Library.",
  },
  "Contexto.Psi": {
    detail:
      "Plataforma de salud mental entregada y mantenida con contenido, equipo y flujos reales.",
  },
  "Value Latam": {
    detail:
      "Web de cliente en Next.js/React con Playwright E2E, Resend y un sistema documentado de motion y mantenibilidad.",
  },
  "Baterías Sur": {
    detail:
      "Web de cliente en Next.js con flujos de diagnóstico y servicios, formulario validado hacia WhatsApp y metadata SEO explícita.",
  },
};

const principleEs = {
  "Source boundaries": {
    title: "Fuentes claras",
    body:
      "Dejar claro qué es canónico, qué es derivado y qué pasa cuando una fuente real no está disponible.",
  },
  Verification: {
    title: "Verificación",
    body:
      "Usar tests, read-back y fallas observables en lugar de tomar un build exitoso como prueba.",
  },
  "Safe change": {
    title: "Cambios seguros",
    body:
      "Preferir cambios acotados, permisos explícitos, idempotencia y caminos reversibles.",
  },
  "AI with accountability": {
    title: "IA con control",
    body:
      "Usar IA intensamente sin perder requisitos, evidencia ni verificación final.",
  },
};

const stackEs = {
  Languages: {
    label: "Lenguajes",
    value: "TypeScript · JavaScript · Python · SQL · HTML · CSS/SCSS",
  },
  Product: {
    label: "Producto",
    value: "React · Next.js · desarrollo web responsive",
  },
  "Data / backend": {
    label: "Datos / backend",
    value: "PostgreSQL · Supabase · modelado relacional · integraciones API",
  },
  Quality: {
    label: "Calidad",
    value: "Testing automatizado · Playwright · Vitest · Git/GitHub · workflows de CI/check",
  },
  "AI-assisted engineering": {
    label: "Ingeniería asistida por IA",
    value: "Orquestación de agentes/herramientas · workflows de evidencia y verificación",
  },
};

const gradeEs = {
  "Software Development": "Desarrollo de Software",
  Databases: "Bases de Datos",
  "Backend Applications": "Backend de Aplicaciones",
  "Programming Paradigms": "Paradigmas de Programación",
  "Operating Systems": "Sistemas Operativos",
  "Algorithms & Data Structures": "Algoritmos y Estructuras de Datos",
  "Computer Architecture": "Arquitectura de Computadoras",
  "Data Communications": "Comunicación de Datos",
};

export function localizeProject(project, lang) {
  if (lang !== "es") return project;
  return { ...project, ...(projectEs[project.slug] || {}) };
}

export function localizeClient(item, lang) {
  if (lang !== "es") return item;
  return { ...item, ...(clientEs[item.title] || {}) };
}

export function localizePrinciple(item, lang) {
  if (lang !== "es") return item;
  return { ...item, ...(principleEs[item.title] || {}) };
}

export function localizeStackGroup(item, lang) {
  if (lang !== "es") return item;
  return { ...item, ...(stackEs[item.label] || {}) };
}

export function localizeGrade(grade, lang) {
  if (lang !== "es") return grade;
  for (const [from, to] of Object.entries(gradeEs)) {
    if (grade.startsWith(from)) return grade.replace(from, to);
  }
  return grade;
}
