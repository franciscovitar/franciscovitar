import Link from "next/link";
import EditorialHero from "../components/home/EditorialHero";
import EditorialHeader from "../components/home/EditorialHeader";
import EditorialMotion from "../components/home/EditorialMotion";
import EngineeringPhilosophy from "../components/home/EngineeringPhilosophy";
import GenovaExperience from "../components/home/GenovaExperience";
import PASFlow from "../components/PASFlow";
import CauceStorefrontPreview from "../components/CauceStorefrontPreview";
import {
  copy,
  links,
  personalAiSystem,
  projects,
  skills,
  t,
  webhookLab,
} from "../data/home";
import {
  ExternalLink,
  Placeholder,
  PairShot,
  canShowShot,
  SectionHead,
  hrefFor,
  withLang,
} from "../components/home/parts";
import styles from "../components/home/Home.module.scss";

export const metadata = {
  alternates: { canonical: "/" },
};

function DemoPanel({ c, compact = false }) {
  return (
    <ExternalLink
      href={links.vidaDemo}
      className={`${styles.demoPanel} ${compact ? styles.demoPanelCompact : ""}`}
    >
      <div className={styles.demoTop}>
        <span className={styles.demoBrand}>vida<span>2.0</span></span>
        <span className={styles.demoBadge}>DEMO</span>
      </div>
      <p className={styles.demoEyebrow}>{c.demoEyebrow}</p>
      <p className={styles.demoIntro}>{c.demoIntro}</p>
      <div className={styles.demoSections}>
        {c.demoSections.map((section, index) => (
          <div className={styles.demoSection} key={section}>
            <span>0{index + 1}</span>
            <strong>{section}</strong>
          </div>
        ))}
      </div>
      <span className={styles.demoCta}>{c.demoOpen}</span>
    </ExternalLink>
  );
}

function ProjectMedia({ project, lang, c, index }) {
  const { media } = project;
  const fig = `${c.fig} 0${index + 1} — ${project.title}`;

  if (media.type === "demo") {
    return (
      <figure className={styles.figure}>
        <DemoPanel c={c} compact />
        <figcaption className={styles.caption}>{fig}</figcaption>
      </figure>
    );
  }

  if (media.type === "commerce") {
    return (
      <figure className={styles.figure}>
        <CauceStorefrontPreview href={project.live} lang={lang} />
        <figcaption className={styles.caption}>
          {c.fig} 0{index + 1} — {t(media.label, lang)}
        </figcaption>
      </figure>
    );
  }

  if (media.type === "transcript") {
    return (
      <figure className={styles.figure}>
        <div className={styles.transcript}>
          <div className={styles.transcriptBar}>
            <span>{project.slug}</span>
            <span className={styles.transcriptDim}>{c.transcriptRight}</span>
          </div>
          <div className={styles.transcriptBody}>
            {c.transcriptSteps.map(([step, lines]) => (
              <div className={styles.transcriptRow} key={step}>
                <span className={styles.transcriptDim}>{step}</span>
                <div>
                  {lines.map(([dir, text]) => (
                    <div key={text}>
                      <span className={dir === "→" ? styles.arrowOut : styles.arrowIn}>
                        {dir}
                      </span>{" "}
                      <span className={styles.transcriptDim}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.transcriptFoot}>{c.transcriptFoot}</div>
        </div>
        <figcaption className={styles.caption}>
          {c.fig} 0{index + 1} — {c.transcriptCaption}
        </figcaption>
      </figure>
    );
  }

  if (media.type === "pair") {
    const [main, side] = t(media.label, lang);
    return (
      <figure className={styles.figure}>
        <div className={styles.pair}>
          {media.images && canShowShot(media.images) ? (
            <>
              <PairShot image={media.images.main} lang={lang} main />
              <PairShot image={media.images.side} lang={lang} />
            </>
          ) : (
            <>
              <Placeholder label={main} ratio="4 / 3" />
              <Placeholder label={side} />
            </>
          )}
        </div>
        {media.images && canShowShot(media.images) && !media.images.authorized ? (
          <span className={styles.shotTag}>{c.pending}</span>
        ) : null}
        <figcaption className={styles.caption}>{fig}</figcaption>
      </figure>
    );
  }

  return (
    <figure className={styles.figure}>
      <Placeholder label={t(media.label, lang)} ratio={media.ratio} />
      <figcaption className={styles.caption}>{fig}</figcaption>
    </figure>
  );
}

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  const c = copy[lang];

  return (
    <div className={styles.page}>
      <a href="#content" className={styles.skip}>
        {c.skip}
      </a>
      <EditorialHeader lang={lang} />
      <EditorialMotion />

      <main id="content" tabIndex={-1} className={styles.main}>
        <EditorialHero lang={lang} />

        <section id="projects" className={styles.projects}>
          <div className={styles.wrap}>
            <SectionHead
              index="01"
              title={c.projectsTitle}
              intro={
                <>
                  {c.projectsIntro}{" "}
                  <a href={hrefFor(lang, "experience")} className={styles.lnk}>
                    {c.projectsIntroLink}
                  </a>
                  .
                </>
              }
            />

            <article className={styles.pasRow} data-editorial-reveal="pas">
              <p className={styles.eyebrow}>
                01 · {c.personal} · {lang === "es" ? "Proyecto insignia · Ingeniería de IA" : "Flagship · AI systems engineering"}
              </p>
              <div className={styles.pasText}>
                <h3 className={styles.pasTitle}>{personalAiSystem.title}</h3>
                <p>{t(personalAiSystem.summary, lang)}</p>
              </div>
              <div className={styles.pasLinks}>
                <span className={styles.monoMeta}>{personalAiSystem.stack}</span>
                <Link
                  href={withLang(personalAiSystem.caseHref, lang)}
                  className={`${styles.lnk} ${styles.accent}`}
                >
                  {c.viewCase}
                </Link>
                <a href={`/pas-explorer/explorer/index.html?lang=${lang}`} className={`${styles.lnk} ${styles.accent}`}>
                  {lang === "es" ? "Abrir PAS Explorer ↗" : "Open PAS Explorer ↗"}
                </a>
                <ExternalLink href={personalAiSystem.repo} className={styles.lnk}>
                  {lang === "es" ? "Código de referencia ↗" : "Reference code ↗"}
                </ExternalLink>
              </div>
              <div className={styles.pasDiagram}>
                <PASFlow lang={lang} theme="dark" />
              </div>
            </article>

            {projects.map((project, index) => (
              <article
                key={project.slug}
                data-editorial-reveal={project.media.type}
                className={`${styles.feature} ${index % 2 === 1 ? styles.featureReverse : ""}`}
              >
                <ProjectMedia project={project} lang={lang} c={c} index={index + 1} />
                <div className={styles.featureText}>
                  <p className={styles.eyebrow}>
                    0{index + 2} · {c.personal} · {t(project.kind, lang)}
                  </p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSummary}>{t(project.summary, lang)}</p>
                  <dl className={styles.facts}>
                    <dt>{c.stackLabel}</dt>
                    <dd>{project.stack}</dd>
                    <dt>{c.statusLabel}</dt>
                    <dd>{t(project.status, lang)}</dd>
                  </dl>
                  <div className={styles.projectLinks}>
                    {project.caseHref ? (
                      <Link href={withLang(project.caseHref, lang)} className={`${styles.lnk} ${styles.accent}`}>
                        {c.viewCase}
                      </Link>
                    ) : null}
                    {project.live ? (
                      <ExternalLink href={project.live} className={styles.lnk}>
                        {project.liveLabel ? t(project.liveLabel, lang) : (lang === "es" ? "Probar simulador ↗" : "Try simulator ↗")}
                      </ExternalLink>
                    ) : null}
                    {project.repo ? (
                      <ExternalLink href={project.repo} className={styles.lnk}>
                        {c.code}
                      </ExternalLink>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}

            <article className={styles.flowProject} data-editorial-reveal="webhook">
              <div className={styles.flowHead}>
                <div className={styles.flowText}>
                  <p className={styles.eyebrow}>
                    05 · {c.personal} · Full-stack · {lang === "es" ? "Demo pública funcional" : "Live public sandbox"}
                  </p>
                  <h3 className={styles.projectTitle}>{webhookLab.title}</h3>
                  <p className={styles.projectSummary}>{t(webhookLab.summary, lang)}</p>
                  <div className={styles.projectLinks}>
                    <Link href={withLang(webhookLab.caseHref, lang)} className={`${styles.lnk} ${styles.accent}`}>
                      {c.viewCase}
                    </Link>
                    <ExternalLink href={webhookLab.live} className={styles.lnk}>
                      {lang === "es" ? "Abrir aplicación ↗" : "Open application ↗"}
                    </ExternalLink>
                    <ExternalLink href={webhookLab.repo} className={styles.lnk}>
                      {c.code}
                    </ExternalLink>
                  </div>
                </div>
                <span className={styles.monoMeta}>{webhookLab.stack}</span>
              </div>
              <figure className={styles.figure}>
                <ol className={styles.flow}>
                  {webhookLab.steps.map((step, i) => (
                    <li
                      key={t(step.name, "en")}
                      className={
                        step.tone === "failure"
                          ? styles.flowFailure
                          : step.tone === "recovery"
                            ? styles.flowRecovery
                            : undefined
                      }
                    >
                      <span className={styles.flowIndex}>
                        0{i + 1}
                        {step.tone === "recovery" ? " ↺" : ""}
                      </span>
                      <span className={styles.flowName}>{t(step.name, lang)}</span>
                      <span className={styles.flowDetail}>{t(step.detail, lang)}</span>
                    </li>
                  ))}
                </ol>
                <figcaption className={styles.caption}>
                  {c.fig} 05 — {c.flowCaption}
                </figcaption>
              </figure>
            </article>


          </div>
        </section>

        <GenovaExperience lang={lang} />
        <EngineeringPhilosophy lang={lang} />

        <section id="about" className={styles.about} data-editorial-reveal="about">
          <div className={styles.wrap}>
            <SectionHead index="05" title={c.aboutTitle} />
            <div className={`${styles.split} ${styles.aboutSplit}`}>
              <div className={styles.portraitPanel}>
                <span className={styles.portraitMonogram} aria-hidden="true">FV</span>
                <span className={styles.portraitCaption}>{c.portraitLabel}</span>
              </div>
              <div className={styles.aboutText}>
                <p className={styles.aboutBody}>{c.aboutBody}</p>
                <div className={styles.aboutFacts}>
                  <div>
                    <p className={styles.eyebrow}>{c.educationLabel}</p>
                    <p className={styles.degree}>{c.educationDegree}</p>
                    <p className={styles.muted}>
                      {c.educationSchool}
                      <br />
                      {c.educationStatus}
                    </p>
                  </div>
                  <div>
                    <p className={styles.eyebrow}>{c.cvLabel}</p>
                    <a href={links.cv} className={`${styles.lnk} ${styles.cvLink}`}>
                      {c.cvLink}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.eyebrow}>{c.skillsLabel}</p>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <div key={t(skill.group, "en")} className={styles.skill}>
                  <h3>{t(skill.group, lang)}</h3>
                  <p>{t(skill.items, lang)}</p>
                  <p className={styles.monoMeta}>{t(skill.usedIn, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact} data-editorial-reveal="contact">
          <div className={styles.wrap}>
            <p className={styles.contactLabel}>{c.contactLabel}</p>
            <h2 className={styles.contactTitle}>
              {c.contactTitle[0]}
              <span className={styles.nowrap}>{c.contactTitle[1]}</span>
              {c.contactTitle[2]}
            </h2>
            <a href={`mailto:${links.email}`} className={styles.email}>
              {links.email}
            </a>
            <div className={styles.contactLinks}>
              <ExternalLink href={links.linkedin}>LinkedIn ↗</ExternalLink>
              <ExternalLink href={links.github}>GitHub ↗</ExternalLink>
              <a href={links.cv}>CV ↓</a>
            </div>
            <footer className={styles.footer}>
              <span>{c.footerRole}</span>
              <nav aria-label={lang === "es" ? "Pie" : "Footer"}>
                <a href={hrefFor(lang, "projects")}>{c.nav.projects}</a>
                <a href={hrefFor(lang, "experience")}>{c.nav.experience}</a>
                <a href={hrefFor(lang, "about")}>{c.nav.about}</a>
                <a href={hrefFor(lang, "top")}>{c.top}</a>
              </nav>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
