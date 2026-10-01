import Link from "next/link";
import SystemVisual from "./SystemVisual";
import styles from "./CaseStudyPage.module.scss";

const visualBySlug = {
  "vida-2": "vida",
  "football-intelligence": "football",
  "personal-ai-system": "pas",
  "la-mediterranea-store": "mediterranea",
};

export default function CaseStudyPage({ study }) {
  const visual = visualBySlug[study.slug] || "overview";

  return (
    <main className={styles.page}>
      <header className={styles.topbarShell}>
        <div className={styles.topbar}>
          <Link href="/" className={styles.wordmark}>
            Francisco Vitar
          </Link>

          <nav className={styles.nav} aria-label="Case study navigation">
            <Link href="/#work">Selected work</Link>
            <a href="/Francisco_Vitar_CV_ATS_V1.pdf">Resume ↗</a>
            <a
              href="https://github.com/franciscovitar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </header>

      <article className={styles.article}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Link href="/#work" className={styles.backLink}>
              ← Back to selected work
            </Link>
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

          <div className={styles.heroVisual}>
            <SystemVisual kind={visual} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            Problem
          </div>
          <div className={styles.sectionBody}>
            <h2>What the system needed to solve</h2>
            <p className={styles.largeCopy}>{study.problem}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            Constraints
          </div>
          <div className={styles.sectionBody}>
            <h2>The boundaries that shape the design</h2>
            <div className={styles.constraintGrid}>
              {study.constraints.map((item, index) => (
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
            Architecture
          </div>
          <div className={styles.sectionBody}>
            <h2>System path</h2>
            <div className={styles.architectureTrack}>
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
          <div className={styles.sectionLabel}>
            <span>04</span>
            Decisions
          </div>
          <div className={styles.sectionBody}>
            <h2>Important engineering decisions</h2>
            <div className={styles.decisionGrid}>
              {study.decisions.map((decision) => (
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
            Verification
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.verificationGrid}>
              <div>
                <p className={styles.miniLabel}>Quality</p>
                <h2>How the system is checked</h2>
                <ul className={styles.list}>
                  {study.verification.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={styles.miniLabel}>Failure handling</p>
                <h2>What happens when things go wrong</h2>
                <ul className={styles.list}>
                  {study.safety.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statusSection}>
          <div>
            <p className={styles.eyebrow}>Current status</p>
            <h2>What is true today</h2>
          </div>
          <div>
            <p>{study.status}</p>
            {study.limitations.length > 0 && (
              <div className={styles.limitations}>
                <p className={styles.miniLabel}>Explicit limitations</p>
                <ul className={styles.list}>
                  {study.limitations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <footer className={styles.footer}>
          <Link href="/#work">← Selected work</Link>
          <div>
            <a href="mailto:franvitar15@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/franciscovitar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
