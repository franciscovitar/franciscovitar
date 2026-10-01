import Link from "next/link";
import SystemVisual from "../components/SystemVisual";
import {
  clientWork,
  engineeringPrinciples,
  featuredProjects,
  selectedGrades,
  stackGroups,
} from "../data/portfolio";
import styles from "./page.module.scss";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const featured = featuredProjects[0];
  const secondary = featuredProjects.slice(1);

  return (
    <main>
      <header className={styles.headerShell}>
        <div className={styles.header}>
          <a href="#top" className={styles.wordmark}>
            Francisco Vitar
          </a>

          <nav className={styles.nav} aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#background">Background</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.headerRight}>
            <span className={styles.availability}>
              <span />
              Open to software roles
            </span>
            <a
              href="/Francisco_Vitar_CV_ATS_V1.pdf"
              className={styles.resumeLink}
            >
              Resume ↗
            </a>
          </div>
        </div>
      </header>

      <div className={styles.shell}>
        <section id="top" className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Software Engineer · Full-Stack Product Engineer
            </p>
            <h1>
              I build product systems across web, data and AI — with verification
              built in.
            </h1>
            <p className={styles.heroLead}>
              Fourth-year Systems Engineering student at UTN and founder of
              Genova. My strongest work spans TypeScript/Next.js, PostgreSQL,
              product delivery and AI-assisted engineering.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#work">
                Explore selected work
              </a>
              <a
                className={styles.secondaryButton}
                href="https://github.com/franciscovitar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>

            <dl className={styles.proofStrip}>
              <div>
                <dt>2022—Now</dt>
                <dd>Founder & Software Engineer · Genova</dd>
              </div>
              <div>
                <dt>4th year</dt>
                <dd>Systems Engineering · UTN</dd>
              </div>
              <div>
                <dt>5+</dt>
                <dd>Client websites / products delivered</dd>
              </div>
            </dl>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualLabel}>
              <span>What my work connects</span>
              <span>01 / 04</span>
            </div>
            <SystemVisual kind="overview" />
          </div>
        </section>

        <section id="work" className={styles.section}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Selected work</p>
              <h2>A few systems worth opening.</h2>
            </div>
            <p>
              The homepage stays concise. Each case study goes deeper into the
              problem, architecture, trade-offs, verification and current limits.
            </p>
          </header>

          <article className={styles.featuredProject}>
            <div className={styles.featuredVisual}>
              <SystemVisual kind={featured.visual} />
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
                <Link href={featured.href}>Open case study →</Link>
                <a href={featured.repo} target="_blank" rel="noreferrer">
                  Repository ↗
                </a>
              </div>
            </div>
          </article>

          <div className={styles.secondaryGrid}>
            {secondary.map((project, index) => (
              <article className={styles.projectCard} key={project.title}>
                <SystemVisual kind={project.visual} compact />

                <div className={styles.cardBody}>
                  <div className={styles.projectMeta}>
                    <span>{String(index + 2).padStart(2, "0")} · {project.label}</span>
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
                    <Link href={project.href}>Case study →</Link>
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Repo ↗
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
              <p className={styles.eyebrow}>Background</p>
              <h2>Real delivery plus strong systems fundamentals.</h2>
            </div>
          </header>

          <div className={styles.backgroundGrid}>
            <article className={styles.backgroundCard}>
              <div className={styles.cardKicker}>Experience · 2022—Present</div>
              <h3>Founder & Software Engineer — Genova</h3>
              <p>
                I founded a bootstrapped software/web product studio and delivered
                products for real third-party clients across healthcare,
                wellness, legal and local-service businesses.
              </p>
              <ul>
                <li>Requirements and information architecture</li>
                <li>Implementation, integrations and deployment</li>
                <li>Maintenance and regression-oriented iteration</li>
              </ul>
            </article>

            <article className={styles.backgroundCard}>
              <div className={styles.cardKicker}>Education · 2023—Present</div>
              <h3>Systems Engineering — UTN</h3>
              <p>
                Fourth academic year in 2026, with strong results in core
                software and systems coursework.
              </p>
              <div className={styles.gradeCloud}>
                {selectedGrades.map((grade) => (
                  <span key={grade}>{grade}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className={styles.clientSection}>
          <div className={styles.clientHeading}>
            <p className={styles.eyebrow}>Selected client delivery</p>
            <h2>Software shipped for real organizations.</h2>
          </div>

          <div className={styles.clientGrid}>
            {clientWork.map((item) => (
              <article className={styles.clientCard} key={item.title}>
                <div className={styles.clientTop}>
                  <span className={styles.clientMark}>{item.mark}</span>
                  <span>{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <div className={styles.clientActions}>
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

        <section id="approach" className={styles.approachSection}>
          <div className={styles.approachIntro}>
            <p className={styles.eyebrow}>How I work</p>
            <h2>Build fast. Keep the boundaries explicit.</h2>
            <p>
              AI helps me move faster, but the standard is still a system I can
              explain, inspect and verify.
            </p>
          </div>

          <div className={styles.principleList}>
            {engineeringPrinciples.map((principle) => (
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
            <p className={styles.stackLabel}>Core stack in substantive work</p>
            <div className={styles.stackList}>
              {stackGroups.map((group) => (
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
            <p className={styles.eyebrow}>Contact</p>
            <h2>Looking for a software engineer who can own product problems end to end?</h2>
          </div>
          <div className={styles.contactRight}>
            <p>
              I&apos;m interested in Software Engineer and Full-Stack / Product
              Engineer roles where product, data and engineering quality matter.
            </p>
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
              <a href="/Francisco_Vitar_CV_ATS_V1.pdf">Resume ↗</a>
            </div>
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
