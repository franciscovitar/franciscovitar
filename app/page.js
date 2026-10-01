import Link from "next/link";
import SystemVisual from "../components/SystemVisual";
import { Reveal, StaggerGroup, StaggerItem } from "../components/MotionPrimitives";
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
          <StaggerGroup
            className={styles.heroCopy}
            load
            delay={0.14}
            stagger={0.115}
          >
            <StaggerItem as="p" className={styles.eyebrow}>
              {copy.eyebrow}
            </StaggerItem>
            <StaggerItem as="h1" distance={18} duration={0.9}>
              {copy.heroTitle}
            </StaggerItem>
            <StaggerItem as="p" className={styles.heroLead}>
              {copy.heroLead}
            </StaggerItem>

            <StaggerItem className={styles.heroActions} distance={12}>
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
            </StaggerItem>

            <StaggerItem as="dl" className={styles.proofStrip} distance={10}>
              {copy.proof.map(([value, label]) => (
                <div key={value + label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </StaggerItem>
          </StaggerGroup>

          <Reveal
            className={styles.heroVisual}
            load
            direction="right"
            distance={24}
            delay={0.28}
            duration={0.92}
            scale={0.985}
          >
            <div className={styles.visualLabel}>
              <span>{copy.visualLabel}</span>
            </div>
            <SystemVisual kind="overview" compact lang={lang} />
          </Reveal>
        </section>

        <section id="work" className={styles.section}>
          <Reveal as="header" className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>{copy.selectedWorkEyebrow}</p>
              <h2>{copy.selectedWorkTitle}</h2>
            </div>
            <p>{copy.selectedWorkIntro}</p>
          </Reveal>

          <article className={styles.featuredProject}>
            <Reveal
              className={styles.featuredVisual}
              direction="left"
              distance={20}
              amount={0.2}
            >
              <SystemVisual kind={featured.visual} lang={lang} />
            </Reveal>

            <Reveal
              className={styles.featuredCopy}
              direction="right"
              distance={20}
              delay={0.12}
              amount={0.2}
            >
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
            </Reveal>
          </article>

          <StaggerGroup className={styles.secondaryGrid} stagger={0.12}>
            {secondary.map((project, index) => (
              <StaggerItem
                as="article"
                className={styles.projectCard}
                key={project.title}
                distance={18}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="background" className={styles.backgroundSection}>
          <Reveal as="header" className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>{copy.backgroundEyebrow}</p>
              <h2>{copy.backgroundTitle}</h2>
            </div>
          </Reveal>

          <StaggerGroup className={styles.backgroundGrid} stagger={0.13}>
            <StaggerItem as="article" className={styles.backgroundCard}>
              <div className={styles.cardKicker}>{copy.experienceKicker}</div>
              <h3>{copy.experienceTitle}</h3>
              <p>{copy.experienceBody}</p>
              <ul>
                {copy.experienceBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem as="article" className={styles.backgroundCard}>
              <div className={styles.cardKicker}>{copy.educationKicker}</div>
              <h3>{copy.educationTitle}</h3>
              <p>{copy.educationBody}</p>
              <div className={styles.gradeCloud}>
                {grades.map((grade) => (
                  <span key={grade}>{grade}</span>
                ))}
              </div>
            </StaggerItem>
          </StaggerGroup>
        </section>

        <section className={styles.clientSection}>
          <Reveal className={styles.clientHeading}>
            <p className={styles.eyebrow}>{copy.clientEyebrow}</p>
            <h2>{copy.clientTitle}</h2>
          </Reveal>

          <StaggerGroup className={styles.clientGrid} stagger={0.11}>
            {clients.map((item) => (
              <StaggerItem
                as="article"
                className={styles.clientCard}
                key={item.title}
                distance={16}
              >
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section id="approach" className={styles.approachSection}>
          <Reveal className={styles.approachIntro}>
            <p className={styles.eyebrow}>{copy.approachEyebrow}</p>
            <h2>{copy.approachTitle}</h2>
            <p>{copy.approachBody}</p>
          </Reveal>

          <Reveal className={styles.principleList} delay={0.08}>
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal className={styles.stackBlock} delay={0.14}>
            <p className={styles.stackLabel}>{copy.stackLabel}</p>
            <div className={styles.stackList}>
              {stacks.map((group) => (
                <div key={group.label}>
                  <span>{group.label}</span>
                  <p>{group.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal
          as="section"
          id="contact"
          className={styles.contact}
          distance={20}
          amount={0.2}
        >
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
        </Reveal>

        <footer className={styles.footer}>
          <span>Francisco Vitar</span>
          <span>{copy.footerRole}</span>
        </footer>
      </div>
    </main>
  );
}
