import Arrow from "../../components/editorial/Arrow";
import Link from "next/link";
import styles from "./cv.module.scss";

export const metadata = {
  title: "CV · Francisco Vitar",
  description:
    "Francisco Vitar — Software Developer / Full-Stack Developer. CV en PDF.",
};

const content = {
  es: {
    projects: "Proyectos",
    eyebrow: "Documento · CV en PDF",
    title: "Experiencia, proyectos y formación",
    summary:
      "Un resumen de mi trabajo en desarrollo web, los sistemas que construyo y mi formación en Ingeniería en Sistemas en UTN Córdoba.",
    view: "Abrir CV",
    download: "Descargar PDF",
    back: "Volver al portfolio",
    noteLabel: "Acerca del archivo",
    note:
      "Versión en PDF con texto seleccionable, pensada para compartir con reclutadores y sistemas de selección.",
    contact: "¿Querés conversar sobre una oportunidad?",
    email: "Escribime",
  },
  en: {
    projects: "Projects",
    eyebrow: "Document · PDF résumé",
    title: "Experience, projects and education",
    summary:
      "An overview of my web development work, the systems I build and my Systems Engineering studies at UTN Córdoba.",
    view: "Open résumé",
    download: "Download PDF",
    back: "Back to portfolio",
    noteLabel: "About this file",
    note:
      "A text-selectable PDF designed for sharing with recruiters and applicant tracking systems.",
    contact: "Want to discuss an opportunity?",
    email: "Get in touch",
  },
};

export default async function CVPage({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  const c = content[lang];
  const home = lang === "es" ? "/?lang=es" : "/";

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href={home} className={styles.wordmark}>Francisco Vitar</Link>
          <nav className={styles.nav} aria-label={lang==="es"?"Navegación del CV":"CV navigation"}>
            <Link href={`${home}#projects`}>{c.projects}</Link>
            <div className={styles.langSwitch} aria-label="Language">
              <Link href="/cv" aria-current={lang === "en" ? "page" : undefined}>EN</Link>
              <span>/</span>
              <Link href="/cv?lang=es" aria-current={lang === "es" ? "page" : undefined}>ES</Link>
            </div>
          </nav>
        </div>
      </header>

      <article className={styles.content}>
        <Link href={home} className={styles.back}><Arrow direction="left"/> {c.back}</Link>
        <p className={styles.eyebrow}>{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <p className={styles.summary}>{c.summary}</p>

        <div className={styles.actions}>
          <a href="/Francisco_Vitar_CV_ATS_V1.pdf" target="_blank" rel="noreferrer" className={styles.primary}>
            {c.view} <Arrow/>
          </a>
          <a href="/Francisco_Vitar_CV_ATS_V1.pdf" download className={styles.secondary}>
            {c.download} <Arrow direction="down"/>
          </a>
        </div>

        <div className={styles.details}>
          <div>
            <span className={styles.index}>01 / PDF</span>
            <h2>{c.noteLabel}</h2>
            <p>{c.note}</p>
          </div>
          <div>
            <span className={styles.index}>02 / {lang === "es" ? "CONTACTO" : "CONTACT"}</span>
            <h2>{c.contact}</h2>
            <a href="mailto:franvitar15@gmail.com" className={styles.email}>{c.email} <Arrow/></a>
          </div>
        </div>
      </article>
    </main>
  );
}
