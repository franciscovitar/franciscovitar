import Link from "next/link";
import {
  clientWork,
  engineeringPrinciples,
  featuredProjects,
  selectedGrades,
  stackGroups,
} from "../data/portfolio";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <a href="#top" className={styles.brand} aria-label="Francisco Vitar home">
          FV
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="/Francisco_Vitar_CV_ATS_V1.pdf"
          className={styles.resumeLink}
        >
          Resume
        </a>
      </header>

      <div className={styles.shell}>
        <section id="top" className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Software Engineer · Full-Stack Product Engineer
            </p>
            <h1>
              Building reliable product systems across web, data and AI-assisted
              workflows.
            </h1>
            <p className={styles.heroLead}>
              Fourth-year Systems Engineering student at UTN. I build with
              TypeScript/Next.js, PostgreSQL/SQL, Python and automated
              verification, and I use AI as an engineering accelerator with
              explicit evidence and review boundaries.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#work">
                View case studies
              </a>
              <a
                className={styles.secondaryButton}
                href="https://github.com/franciscovitar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className={styles.secondaryButton}
                href="/Francisco_Vitar_CV_ATS_V1.pdf"
              >
                Resume
              </a>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Current focus">
            <p className={styles.panelLabel}>Current focus</p>
            <dl>
              <div>
                <dt>Roles</dt>
                <dd>Software Engineer · Full-Stack / Product Engineer</dd>
              </div>
              <div>
                <dt>Core stack</dt>
                <dd>TypeScript · Next.js · PostgreSQL · Python · Testing</dd>
              </div>
              <div>
                <dt>Current systems</dt>
                <dd>Vida 2.0 · Football Intelligence · Personal AI System</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Córdoba, Argentina</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Selected engineering work</p>
              <h2>Systems I can walk through end to end.</h2>
            </div>
            <p>
              The focus is not repository count. These projects show product,
              data, verification and safety decisions under real constraints.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {featuredProjects.map((project, index) => (
              <article className={styles.projectCard} key={project.title}>
                <div className={styles.cardTopline}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.label}</span>
                  <span>{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>
                <div className={styles.chips}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className={styles.evidence}>{project.evidence}</p>
                <div className={styles.cardActions}>
                  <Link href={project.href}>Read case study →</Link>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Repository ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Engineering approach</p>
              <h2>How I try to make change safer and more legible.</h2>
            </div>
          </div>
          <div className={styles.principleGrid}>
            {engineeringPrinciples.map((principle) => (
              <div className={styles.principle} key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className={styles.splitSection}>
          <div>
            <p className={styles.eyebrow}>Experience</p>
            <h2>Founder & Software Engineer — Genova</h2>
            <p className={styles.largeMuted}>2022–Present · Córdoba, Argentina</p>
          </div>
          <div className={styles.bodyCopy}>
            <p>
              I founded a bootstrapped software/web product studio and delivered
              5+ websites/products for real third-party clients across healthcare,
              wellness, legal and local-service businesses.
            </p>
            <p>
              My role covers requirements, information architecture,
              implementation, integrations, deployment and iteration. The work
              also includes maintaining products after launch and adding stronger
              regression/verification practices where they reduce change risk.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Selected client delivery</p>
              <h2>Commercial work, kept secondary to the engineering story.</h2>
            </div>
          </div>
          <div className={styles.clientGrid}>
            {clientWork.map((item) => (
              <article className={styles.clientCard} key={item.title}>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <div>
                  <a href={item.repo} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className={styles.educationSection}>
          <div className={styles.educationIntro}>
            <p className={styles.eyebrow}>Education</p>
            <h2>Systems Engineering — UTN</h2>
            <p>2023–Present · fourth academic year in 2026</p>
          </div>
          <div>
            <p className={styles.educationLead}>
              Strong academic performance in core software and systems
              coursework adds a second signal alongside project artifacts.
            </p>
            <div className={styles.gradeGrid}>
              {selectedGrades.map((grade) => (
                <span key={grade}>{grade}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Stack</p>
              <h2>Tools I use in substantive project work.</h2>
            </div>
          </div>
          <div className={styles.stackList}>
            {stackGroups.map((group) => (
              <div key={group.label}>
                <span>{group.label}</span>
                <p>{group.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <p className={styles.eyebrow}>Contact</p>
          <h2>
            Interested in Software Engineer and Full-Stack / Product Engineer
            roles where I can own real product problems end to end.
          </h2>
          <div className={styles.contactLinks}>
            <a href="mailto:franvitar15@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/franciscovitar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/franciscovitar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="/Francisco_Vitar_CV_ATS_V1.pdf">Resume</a>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>Francisco Vitar</span>
          <span>Software Engineer · Córdoba, Argentina</span>
        </footer>
      </div>
    </main>
  );
}
