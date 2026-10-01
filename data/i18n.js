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
      "The homepage stays concise. Each case study goes deeper into the problem, architecture, trade-offs, verification and current limits.",
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
    contactTitle: "Looking for a software engineer who can own product problems end to end?",
    contactBody:
      "I’m interested in Software Engineer and Full-Stack / Product Engineer roles where product, data and engineering quality matter.",
    email: "Email",
    linkedin: "LinkedIn ↗",
    footerRole: "Software Engineer · Córdoba, Argentina",
  },
  es: {
    nav: { work: "Proyectos", background: "Trayectoria", approach: "Enfoque", contact: "Contacto" },
    availability: "Abierto a roles de software",
    resume: "CV ↗",
    eyebrow: "Software Engineer · Full-Stack Product Engineer",
    heroTitle: "Construyo sistemas de producto entre web, datos e IA — con verificación integrada.",
    heroLead:
      "Estudiante de cuarto año de Ingeniería en Sistemas en UTN y fundador de Genova. Mi trabajo más fuerte combina TypeScript/Next.js, PostgreSQL, entrega de producto e ingeniería asistida por IA.",
    primaryCta: "Ver proyectos seleccionados",
    github: "GitHub ↗",
    proof: [
      ["2022—Hoy", "Founder & Software Engineer · Genova"],
      ["4.º año", "Ingeniería en Sistemas · UTN"],
      ["40+", "Webs / productos para clientes construidos y entregados"],
    ],
    visualLabel: "Qué conecta mi trabajo",
    selectedWorkEyebrow: "Trabajo seleccionado",
    selectedWorkTitle: "Algunos sistemas que vale la pena abrir.",
    selectedWorkIntro:
      "La portada va al punto. Cada caso de estudio profundiza en el problema, arquitectura, decisiones, verificación y límites actuales.",
    openCaseStudy: "Abrir caso de estudio →",
    caseStudy: "Caso de estudio →",
    repository: "Repositorio ↗",
    repo: "Repo ↗",
    backgroundEyebrow: "Trayectoria",
    backgroundTitle: "Entrega real más fundamentos sólidos de sistemas.",
    experienceKicker: "Experiencia · 2022—Presente",
    experienceTitle: "Founder & Software Engineer — Genova",
    experienceBody:
      "Fundé un estudio bootstrapped de software/web y construí y entregué más de 40 webs/productos para clientes reales de salud, bienestar, legal y servicios locales.",
    experienceBullets: [
      "Relevamiento e arquitectura de información",
      "Implementación, integraciones y despliegue",
      "Mantenimiento e iteración con foco en regresiones",
    ],
    educationKicker: "Educación · 2023—Presente",
    educationTitle: "Ingeniería en Sistemas — UTN",
    educationBody:
      "Cuarto año académico en 2026, con resultados fuertes en materias centrales de software y sistemas.",
    clientEyebrow: "Entrega a clientes seleccionada",
    clientTitle: "Software entregado a organizaciones reales.",
    live: "Sitio ↗",
    approachEyebrow: "Cómo trabajo",
    approachTitle: "Construir rápido. Mantener los límites explícitos.",
    approachBody:
      "La IA me ayuda a avanzar más rápido, pero el estándar sigue siendo un sistema que puedo explicar, inspeccionar y verificar.",
    stackLabel: "Stack principal en trabajo sustantivo",
    contactEyebrow: "Contacto",
    contactTitle: "¿Buscás un software engineer que pueda hacerse cargo de problemas de producto de punta a punta?",
    contactBody:
      "Me interesan roles de Software Engineer y Full-Stack / Product Engineer donde importen el producto, los datos y la calidad de ingeniería.",
    email: "Email",
    linkedin: "LinkedIn ↗",
    footerRole: "Software Engineer · Córdoba, Argentina",
  },
};

const projectEs = {
  "vida-2": {
    label: "Proyecto principal público",
    status: "Activo",
    hook:
      "Una capa de producto sobre múltiples fuentes reales de datos — sin fingir que la web es la fuente de verdad.",
    highlights: [
      "Las fallas de fuentes reales se muestran",
      "Los datos privados quedan fuera del portfolio público",
      "Lecturas y escrituras tienen límites de seguridad distintos",
    ],
  },
  "football-intelligence": {
    label: "Proyecto principal privado",
    status: "En progreso",
    hook:
      "La investigación se convierte en datos de producto sólo después de QA, publicación transaccional y procedencia explícita.",
  },
  "personal-ai-system": {
    label: "Proyecto principal privado",
    status: "Activo",
    hook:
      "Una capa de control para trabajo con IA de largo plazo: verdad canónica, permisos acotados, evidencia y verificación.",
  },
  "la-mediterranea-store": {
    label: "Full-stack de soporte",
    status: "Listo para integrar",
    hook:
      "Una tienda real con catálogo/pedidos persistentes, acceso admin respaldado por RLS y checkout autoritativo del lado servidor.",
  },
};

const clientEs = {
  Pimp: {
    type: "Producto para cliente",
    detail:
      "Sitio de servicios en Next.js con comportamiento de formulario controlado, secciones data-driven y cobertura con Vitest/Testing Library.",
  },
  "Contexto.Psi": {
    type: "Producto para cliente",
    detail:
      "Plataforma de salud mental entregada y mantenida alrededor de contenido, equipo y restricciones reales de onboarding.",
  },
  "Value Latam": {
    type: "Frontend mantenido",
    detail:
      "Frontend Next.js/React con E2E en Playwright, sistema de motion y restricciones explícitas de paridad visual y mantenibilidad.",
  },
  "Kinesiología Laprida": {
    type: "Entrega a cliente",
    detail:
      "Sitio responsive para una clínica real con servicios, instalaciones y flujos de contacto directo.",
  },
};

const principleEs = {
  "Source boundaries": {
    title: "Límites de fuente",
    body:
      "Hacer explícita la autoridad: qué es canónico, qué es derivado y qué ocurre cuando la fuente real no está disponible.",
  },
  Verification: {
    title: "Verificación",
    body:
      "Usar tests, read-back y estados de falla observables en lugar de tratar un build exitoso como prueba.",
  },
  "Safe change": {
    title: "Cambio seguro",
    body:
      "Preferir cambios acotados, permisos explícitos, idempotencia y caminos reversibles cuando los errores son costosos.",
  },
  "AI with accountability": {
    title: "IA con responsabilidad",
    body:
      "Usar IA intensamente para implementación y orquestación manteniendo explícitos requisitos, evidencia y verificación final.",
  },
};

const stackEs = {
  Languages: "Lenguajes",
  Product: "Producto",
  "Data / backend": "Datos / backend",
  Quality: "Calidad",
  "AI-assisted engineering": "Ingeniería asistida por IA",
};

const gradeEs = {
  "Software Development": "Desarrollo de Software",
  Databases: "Bases de Datos",
  "Backend Applications": "Aplicaciones Backend",
  "Programming Paradigms": "Paradigmas de Programación",
  "Operating Systems": "Sistemas Operativos",
  "Algorithms & Data Structures": "Algoritmos y Estructuras de Datos",
  "Computer Architecture": "Arquitectura de Computadoras",
  "Data Communications": "Comunicaciones de Datos",
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
  return { ...item, label: stackEs[item.label] || item.label };
}

export function localizeGrade(grade, lang) {
  if (lang !== "es") return grade;
  for (const [from, to] of Object.entries(gradeEs)) {
    if (grade.startsWith(from)) return grade.replace(from, to);
  }
  return grade;
}
