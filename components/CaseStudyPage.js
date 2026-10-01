import Link from "next/link";
import SystemVisual from "./SystemVisual";
import { caseStudyUi, localizeCaseStudy } from "../data/caseStudyTranslations";
import styles from "./CaseStudyPage.module.scss";

const visualBySlug = {
  "vida-2": "vida",
  "football-intelligence": "football",
  "personal-ai-system": "pas",
  "la-mediterranea-store": "mediterranea",
};

function localizedHomeHref(lang) {
  return lang === "es" ? "/?lang=es#work" : "/#work";
}

export default function CaseStudyPage({ study, lang = "en" }) {
  const localized = localizeCaseStudy(study, lang);
  const ui = caseStudyUi[lang] || caseStudyUi.en;
  const visual = visualBySlug[localized.slug] || "overview";
  const languageSuffix = lang === "es" ? "?lang=es" : "";

  return (
    <main className={styles.page}>
      <header className={styles.topbarShell}>
        <div className={styles.topbar}>
          <Link href={lang === "es" ? "/?lang=es" : "/"} className={styles.wordmark}>
            Francisco Vitar
          </Link>

          <nav className={styles.nav} aria-label="Case study navigation">
            <Link href={localizedHomeHref(lang)}>{ui.selectedWork}</Link>

            <div className={styles.languageSwitch} aria-label="Language">
              <a
                href={`/work/${localized.slug}`}
                className={lang === "en" ? styles.languageActive : undefined}
              >
                EN
              </a>
              <span>/</span>
              <a
                href={`/work/${localized.slug}?lang=es`}
                className={lang === "es" ? styles.languageActive : undefined}
              >
                ES
              </a>
            </div>

            <a href="/Francisco_Vitar_CV_ATS_V1.pdf">{ui.resume}</a>
            <a
              href="https://github.com/franciscovitar"
              target="_blank"
              rel="noreferrer"
            >
              {ui.github}
            </a>
          </nav>
        </div>
      </header>

      <article className={styles.article}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Link href={localizedHomeHref(lang)} className={styles.backLink}>
              {ui.back}
            </Link>
            <p className={styles.eyebrow}>{localized.eyebrow}</p>
            <h1>{localized.title}</h1>
            <p className={styles.lead}>{localized.summary}</p>

            <div className={styles.stack} aria-label={ui.technologyStack}>
              {localized.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {localized.links.length > 0 && (
              <div className={styles.links}>
                {localized.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className={styles.heroVisual}>
            <SystemVisual kind={visual} lang={lang} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            {ui.problem}
          </div>
          <div className={styles.sectionBody}>
            <h2>{ui.problemTitle}</h2>
            <p className={styles.largeCopy}>{localized.problem}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            {ui.constraints}
          </div>
          <div className={styles.sectionBody}>
            <h2>{ui.constraintsTitle}</h2>
            <div className={styles.constraintGrid}>
              {localized.constraints.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            {ui.architecture}
          </div>
          <div className={styles.sectionBody}>
            <h2>{ui.architectureTitle}</h2>
            <div className={styles.architectureTrack}>
              {localized.architecture.map((item, index) => (
                <div className={styles.archStep} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            {ui.decisions}
          </div>
          <div className={styles.sectionBody}>
            <h2>{ui.decisionsTitle}</h2>
            <div className={styles.decisionGrid}>
              {localized.decisions.map((decision) => (
                <article className={styles.decision} key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>05</span>
            {ui.verification}
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.verificationGrid}>
              <div>
                <p className={styles.miniLabel}>{ui.quality}</p>
                <h2>{ui.qualityTitle}</h2>
                <ul className={styles.list}>
                  {localized.verification.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={styles.miniLabel}>{ui.failure}</p>
                <h2>{ui.failureTitle}</h2>
                <ul className={styles.list}>
                  {localized.safety.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statusSection}>
          <div>
            <p className={styles.eyebrow}>{ui.currentStatus}</p>
            <h2>{ui.currentStatusTitle}</h2>
          </div>
          <div>
            <p>{localized.status}</p>
            {localized.limitations.length > 0 && (
              <div className={styles.limitations}>
                <p className={styles.miniLabel}>{ui.limitations}</p>
                <ul className={styles.list}>
                  {localized.limitations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <footer className={styles.footer}>
          <Link href={localizedHomeHref(lang)}>{ui.back}</Link>
          <div>
            <a href="mailto:franvitar15@gmail.com">{ui.email}</a>
            <a
              href="https://www.linkedin.com/in/franciscovitar/"
              target="_blank"
              rel="noreferrer"
            >
              {ui.linkedin}
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
