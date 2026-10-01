import Link from "next/link";
import styles from "./CaseStudyPage.module.scss";

export default function CaseStudyPage({ study }) {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>
          FV
        </Link>
        <nav className={styles.nav} aria-label="Case study navigation">
          <Link href="/#work">Work</Link>
          <a href="/Francisco_Vitar_CV_ATS_V1.pdf">Resume</a>
          <a
            href="https://github.com/franciscovitar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <article className={styles.article}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className={styles.lead}>{study.summary}</p>

          <div className={styles.stack} aria-label="Technology stack">
            {study.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {study.links.length > 0 && (
            <div className={styles.links}>
              {study.links.map((link) => (
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

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Problem</div>
          <div>
            <h2>What the system needed to solve</h2>
            <p>{study.problem}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Constraints</div>
          <div>
            <h2>Boundaries that shape the design</h2>
            <ul className={styles.list}>
              {study.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Architecture</div>
          <div>
            <h2>System path</h2>
            <div className={styles.architecture}>
              {study.architecture.map((item, index) => (
                <div className={styles.archStep} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Decisions</div>
          <div>
            <h2>Key engineering decisions</h2>
            <div className={styles.decisionGrid}>
              {study.decisions.map((decision) => (
                <div className={styles.decision} key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Verification</div>
          <div className={styles.twoColumns}>
            <div>
              <h2>How quality is checked</h2>
              <ul className={styles.list}>
                {study.verification.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Safety / failure handling</h2>
              <ul className={styles.list}>
                {study.safety.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.statusSection}>
          <p className={styles.eyebrow}>Current status</p>
          <h2>What is true today</h2>
          <p>{study.status}</p>
          {study.limitations.length > 0 && (
            <>
              <h3>Explicit limitations</h3>
              <ul className={styles.list}>
                {study.limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </section>

        <footer className={styles.footer}>
          <Link href="/#work">← Back to selected work</Link>
          <div>
            <a href="mailto:franvitar15@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/franciscovitar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
