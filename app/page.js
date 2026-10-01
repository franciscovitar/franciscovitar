import Link from "next/link";
import SystemVisual from "../components/SystemVisual";
import {
  clientWork,
  engineeringPrinciples,
  featuredProjects,
  selectedGrades,
  stackGroups,
} from "../data/portfolio";
import {
  homepageCopy,
  localizeClient,
  localizeGrade,
  localizePrinciple,
  localizeProject,
  localizeStackGroup,
} from "../data/i18n";
import styles from "./page.module.scss";

export const metadata = {
  alternates: { canonical: "/" },
};

function languageHref(lang, target) {
  if (lang === "es") {
    return target ? `/?lang=es#${target}` : "/?lang=es";
  }
  return target ? `/#${target}` : "/";
}

export default function Home({ searchParams }) {
  const lang = searchParams?.lang === "es" ? "es" : "en";
  const copy = homepageCopy[lang];
  const langSuffix = lang === "es" ? "?lang=es" : "";

  const projects = featuredProjects.map((project) =>
    localizeProject(project, lang),
  );
  const featured = projects[0];
  const secondary = projects.slice(1);
  const clients = clientWork.map((item) => localizeClient(item, lang));
  const principles = engineeringPrinciples.map((item) =>
    localizePrinciple(item, lang),
  );
  const stacks = stackGroups.map((item) => localizeStackGroup(item, lang));
  const grades = selectedGrades.map((grade) => localizeGrade(grade, lang));

  return (
    <main>
      <header className={styles.headerShell}>
        <div className={styles.header}>
          <a href={languageHref(lang, "top")} className={styles.wordmark}>
            Francisco Vitar
          </a>

          <nav className={styles.nav} aria-label="Primary navigation">
            <a href={languageHref(lang, "work")}>{copy.nav.work}</a>
            <a href={languageHref(lang, "background")}>
              {copy.nav.background}
            </a>
            <a href={languageHref(lang, "approach")}>{copy.nav.approach}</a>
            <a href={languageHref(lang, "contact")}>{copy.nav.contact}</a>
          </nav>

          <div className={styles.headerRight}>
            <span className={styles.availability}>
              <span />
              {copy.availability}
            </span>

            <div className={styles.languageSwitch} aria-label="Language">
              <a
                href="/"
                className={lang === "en" ? styles.languageActive : undefined}
                aria-current={lang === "en" ? "page" : undefined}
              >
                EN
              </a>
              <span>/</span>
              <a
                href="/?lang=es"
                className={lang === "es" ? styles.languageActive : undefined}
                aria-current={lang === "es" ? "page" : undefined}
              >
                ES
              </a>
            </div>

            <a
              href="/Francisco_Vitar_CV_ATS_V1.pdf"
              className={styles.resumeLink}
            >
              {copy.resume}
            </a>
          </div>
        </div>
      </header>

      <div className={styles.shell}>
        <section id="top" className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1>{copy.heroTitle}</h1>
            <p className={styles.heroLead}>{copy.heroLead}</p>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={languageHref(lang, "work")}
              >
                {copy.primaryCta}
              </a>
              <a
                className={styles.secondaryButton}
                href="https://github.com/franciscovitar"
                target="_blank"
                rel="noreferrer"
              >
                {copy.github}
              </a>
            </div>

            <dl className={styles.proofStrip}>
              {copy.proof.map(([value, label]) => (
                <div key={value + label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualLabel}>
              <span>{copy.visualLabel}</span>
              <span>01 / 04</span>
            </div>
            <SystemVisual kind="overview" compact lang={lang} />
          </div>
        </section>

        <section id="work" className={styles.section}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>{copy.selectedWorkEyebrow}</p>
              <h2>{copy.selectedWorkTitle}</h2>
            </div>
            <p>{copy.selectedWorkIntro}</p>
          </header>

          <article className={styles.featuredProject}>
            <div className={styles.featuredVisual}>
              <SystemVisual kind={featured.visual} lang={lang} />
            </div>

            <div className={styles.featuredCopy}>
              <div className={styles.projectMeta}>
                <span>{featured.label}</span>
                <span className={styles.status}>{featured.status}</span>
              </div>
              <h3>{featured.title}</h3>
              <p className={styles.projectHook}>{featured.hook}</p>

              <ul className={styles.highlightList}>
                {featured.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.techLine}>
                {featured.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.projectActions}>
                <Link href={`${featured.href}${langSuffix}`}>
                  {copy.openCaseStudy}
                </Link>
                <a href={featured.repo} target="_blank" rel="noreferrer">
                  {copy.repository}
                </a>
              </div>
            </div>
          </article>

          <div className={styles.secondaryGrid}>
            {secondary.map((project, index) => (
              <article className={styles.projectCard} key={project.title}>
                <SystemVisual kind={project.visual} compact lang={lang} />

                <div className={styles.cardBody}>
                  <div className={styles.projectMeta}>
                    <span>
                      {String(index + 2).padStart(2, "0")} · {project.label}
                    </span>
                    <span className={styles.status}>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.hook}</p>

                  <div className={styles.techLine}>
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className={styles.projectActions}>
                    <Link href={`${project.href}${langSuffix}`}>
                      {copy.caseStudy}
                    </Link>
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        {copy.repo}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="background" className={styles.backgroundSection}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>{copy.backgroundEyebrow}</p>
              <h2>{copy.backgroundTitle}</h2>
            </div>
          </header>

          <div className={styles.backgroundGrid}>
            <article className={styles.backgroundCard}>
              <div className={styles.cardKicker}>{copy.experienceKicker}</div>
              <h3>{copy.experienceTitle}</h3>
              <p>{copy.experienceBody}</p>
              <ul>
                {copy.experienceBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.backgroundCard}>
              <div className={styles.cardKicker}>{copy.educationKicker}</div>
              <h3>{copy.educationTitle}</h3>
              <p>{copy.educationBody}</p>
              <div className={styles.gradeCloud}>
                {grades.map((grade) => (
                  <span key={grade}>{grade}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className={styles.clientSection}>
          <div className={styles.clientHeading}>
            <p className={styles.eyebrow}>{copy.clientEyebrow}</p>
            <h2>{copy.clientTitle}</h2>
          </div>

          <div className={styles.clientGrid}>
            {clients.map((item) => (
              <article className={styles.clientCard} key={item.title}>
                <div className={styles.clientTop}>
                  <span>{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <div className={styles.clientActions}>
                  {item.repo && (
                    <a href={item.repo} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noreferrer">
                      {copy.live}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className={styles.approachSection}>
          <div className={styles.approachIntro}>
            <p className={styles.eyebrow}>{copy.approachEyebrow}</p>
            <h2>{copy.approachTitle}</h2>
            <p>{copy.approachBody}</p>
          </div>

          <div className={styles.principleList}>
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.stackBlock}>
            <p className={styles.stackLabel}>{copy.stackLabel}</p>
            <div className={styles.stackList}>
              {stacks.map((group) => (
                <div key={group.label}>
                  <span>{group.label}</span>
                  <p>{group.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div>
            <p className={styles.eyebrow}>{copy.contactEyebrow}</p>
            <h2>{copy.contactTitle}</h2>
          </div>
          <div className={styles.contactRight}>
            <p>{copy.contactBody}</p>
            <div className={styles.contactLinks}>
              <a href="mailto:franvitar15@gmail.com">{copy.email}</a>
              <a
                href="https://www.linkedin.com/in/franciscovitar/"
                target="_blank"
                rel="noreferrer"
              >
                {copy.linkedin}
              </a>
              <a
                href="https://github.com/franciscovitar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="/Francisco_Vitar_CV_ATS_V1.pdf">{copy.resume}</a>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>Francisco Vitar</span>
          <span>{copy.footerRole}</span>
        </footer>
      </div>
    </main>
  );
}
