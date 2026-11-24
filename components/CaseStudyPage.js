import Arrow from "./editorial/Arrow";
import Link from "next/link";
import PrototypeShell from "./editorial/PrototypeShell";
import PrototypeCaseIntro from "./editorial/PrototypeCaseIntro";
import EditorialMotion from "./home/EditorialMotion";
import SystemVisual from "./SystemVisual";
import CauceStorefrontPreview from "./CauceStorefrontPreview";
import PASFlow from "./PASFlow";
import PASOverview from "./PASOverview";
import PASEcosystem from "./PASEcosystem";
import { pasContent } from "../data/pasContent";
import { caseStudyUi, localizeCaseStudy } from "../data/caseStudyTranslations";
import styles from "./CaseStudyPage.module.scss";

const visualBySlug = {
  "vida-2": "vida",
  "library-network-api": "library",
  "webhook-recovery-lab": "webhook",
  "personal-ai-system": "pas",
  "la-mediterranea-store": "mediterranea",
};

function headingText(value) { return typeof value === "string" ? value.replace(/\.$/, "") : value; }

function localizedHomeHref(lang) {
  return lang === "es" ? "/?lang=es#projects" : "/#projects";
}

export default function CaseStudyPage({ study, lang = "en" }) {
  const localized = localizeCaseStudy(study, lang);
  const ui = caseStudyUi[lang] || caseStudyUi.en;
  const visual = visualBySlug[localized.slug] || "overview";
  const isPas = localized.slug === "personal-ai-system";
  const isCauce = localized.slug === "cauce-commerce-lab";
  const editorial = ["personal-ai-system","vida-2","cauce-commerce-lab","webhook-recovery-lab","library-network-api"].includes(localized.slug);
  const pas = pasContent[lang] || pasContent.en;

  const architectureSection = (
    <section
      className={`${styles.section} ${isPas ? styles.pasArchitecture : ""}`}
      data-editorial-reveal="case"
      id={isPas ? "pas-architecture" : undefined}
    >
      <div className={styles.sectionLabel}>
        <span>{isPas ? "01" : "03"}</span>
        {ui.architecture}
      </div>
      <div className={styles.sectionBody}>
        <h2>{headingText(ui.architectureTitle)}</h2>
        {isPas ? (
          <>
            <PASFlow lang={lang} theme="dark" />
            <PASEcosystem lang={lang} />
          </>
        ) : (
          <div className={styles.architectureTrack}>
            {localized.architecture.map((item, index) => (
              <div className={styles.archStep} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  const content = (
    <div className={styles.page}>
      <EditorialMotion />
      {!editorial && <header className={styles.topbarShell}>
        <div className={styles.topbar}>
          <Link href={lang === "es" ? "/?lang=es" : "/"} className={styles.wordmark}>
            Francisco Vitar
          </Link>

          <nav className={styles.nav} aria-label={lang === "es" ? "Navegación del caso" : "Case study navigation"}>
            <Link href={localizedHomeHref(lang)}>{ui.selectedWork}</Link>

            <div className={styles.languageSwitch} aria-label="Language">
              <a
                href={`/work/${localized.slug}`}
                aria-current={lang === "en" ? "page" : undefined}
                className={lang === "en" ? styles.languageActive : undefined}
              >
                EN
              </a>
              <span>/</span>
              <a
                href={`/work/${localized.slug}?lang=es`}
                aria-current={lang === "es" ? "page" : undefined}
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
      </header>}
      {editorial && <PrototypeCaseIntro lang={lang} slug={localized.slug}/>}

      <article className={styles.article}>
        {editorial && <details className="wrap case-detail"><summary>{lang==="es"?"Ver presentación técnica, stack y enlaces completos":"View full technical overview, stack and links"}</summary><div className={styles.heroVisual}>{isPas?<PASOverview lang={lang}/>:isCauce?<CauceStorefrontPreview lang={lang} href={localized.links[0]?.href}/>:<SystemVisual kind={visual} lang={lang}/>}</div><p>{localized.summary}</p><div className={styles.stack}>{localized.stack.map(item=><span key={item}>{item}</span>)}</div><div className={styles.links}>{localized.links.map(link=><a key={link.href} href={isPas&&link.href.startsWith("/pas-explorer/")?"/pas-explorer/explorer/index.html?lang="+lang:link.href} target="_blank" rel="noreferrer">{link.label} <Arrow/></a>)}</div></details>}
        {!editorial && <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Link href={localizedHomeHref(lang)} className={styles.backLink}>
              {ui.back}
            </Link>
            <p className={styles.eyebrow}>{localized.eyebrow}</p>
            <h1>{headingText(localized.title)}</h1>
            <p className={styles.lead}>{localized.summary}</p>

            <div className={styles.stack} aria-label={ui.technologyStack}>
              {localized.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {isPas && (
              <a href="#pas-architecture" className={styles.jumpLink}>
                {ui.architectureJump}
              </a>
            )}

            {localized.links.length > 0 && (
              <div className={styles.links}>
                {localized.links.map((link) => (
                  <a
                    key={link.href}
                    href={isPas && link.href.startsWith("/pas-explorer/") ? `/pas-explorer/explorer/index.html?lang=${lang}` : link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} <Arrow/>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className={styles.heroVisual}>
            {isPas ? (
              <PASOverview lang={lang} />
            ) : isCauce ? (
              <CauceStorefrontPreview lang={lang} href={localized.links[0]?.href} />
            ) : (
              <SystemVisual kind={visual} lang={lang} />
            )}
          </div>
        </section>}

        {isPas && architectureSection}

        {isPas && (
          <section className={styles.section} id="pas-domains" data-editorial-reveal="case">
            <div className={styles.sectionLabel}>
              <span>02</span>
              {pas.scopeLabel}
            </div>
            <div className={styles.sectionBody}>
              <h2>{headingText(pas.scopeTitle)}</h2>
              <p className={styles.largeCopy}>{pas.scopeIntro}</p>
              <div className={styles.pasDomainGrid}>
                {pas.categories.map((item) => (
                  <article className={styles.pasDomainCard} key={item.number}>
                    <span>{item.number} / 06</span>
                    <h3>{headingText(item.title)}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
              <div className={styles.pasDepth}>
                <p className={styles.miniLabel}>{pas.depthLabel}</p>
                <div className={styles.pasDepthGrid}>
                  {pas.depthStats.map((stat) => (
                    <div className={styles.pasDepthItem} key={stat.value}>
                      <strong>{stat.value}</strong>
                      <h3>{headingText(stat.title)}</h3>
                      <p>{stat.detail}</p>
                    </div>
                  ))}
                </div>
                <p className={styles.pasDepthNote}>{pas.depthNote}</p>
              </div>
              <div className={styles.pasCodeCallout}>
                <div>
                  <p className={styles.miniLabel}>{pas.codeLabel}</p>
                  <h3>{headingText(pas.codeTitle)}</h3>
                  <p>{pas.codeBody}</p>
                </div>
                <a href="https://github.com/franciscovitar/personal-ai-system-showcase" target="_blank" rel="noreferrer">
                  {pas.codeAction}
                </a>
              </div>
            </div>
          </section>
        )}

        <section className={styles.section} data-editorial-reveal="case">
          <div className={styles.sectionLabel}>
            <span>{isPas ? "03" : "01"}</span>
            {ui.problem}
          </div>
          <div className={styles.sectionBody}>
            <h2>{headingText(ui.problemTitle)}</h2>
            <p className={styles.largeCopy}>{localized.problem}</p>
          </div>
        </section>

        <section className={styles.section} data-editorial-reveal="case">
          <div className={styles.sectionLabel}>
            <span>{isPas ? "04" : "02"}</span>
            {ui.constraints}
          </div>
          <div className={styles.sectionBody}>
            <h2>{headingText(ui.constraintsTitle)}</h2>
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

        {!isPas && architectureSection}

        <section className={styles.section} data-editorial-reveal="case">
          <div className={styles.sectionLabel}>
            <span>{isPas ? "05" : "04"}</span>
            {ui.decisions}
          </div>
          <div className={styles.sectionBody}>
            <h2>{headingText(ui.decisionsTitle)}</h2>
            <div className={styles.decisionGrid}>
              {localized.decisions.map((decision) => (
                <article className={styles.decision} key={decision.title}>
                  <h3>{headingText(decision.title)}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} data-editorial-reveal="case">
          <div className={styles.sectionLabel}>
            <span>{isPas ? "06" : "05"}</span>
            {ui.verification}
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.verificationGrid}>
              <div>
                <p className={styles.miniLabel}>{ui.quality}</p>
                <h2>{headingText(ui.qualityTitle)}</h2>
                <ul className={styles.list}>
                  {localized.verification.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={styles.miniLabel}>{ui.failure}</p>
                <h2>{headingText(ui.failureTitle)}</h2>
                <ul className={styles.list}>
                  {localized.safety.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {localized.evidence?.length > 0 && (
              <div className={styles.evidenceSection}>
                <div className={styles.evidenceIntro}>
                  <h3>{headingText(ui.evidenceTitle)}</h3>
                  <p>{ui.evidenceIntro}</p>
                </div>
                <div className={styles.evidenceGrid}>
                  {localized.evidence.map((item) => (
                    <article className={styles.evidenceCard} key={item.title}>
                      <p className={styles.miniLabel}>{item.label}</p>
                      <h4>{headingText(item.title)}</h4>
                      <p>{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className={styles.statusSection} data-editorial-reveal="case">
          <div>
            <p className={styles.eyebrow}>{ui.currentStatus}</p>
            <h2>{headingText(ui.currentStatusTitle)}</h2>
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
    </div>
  );
  return editorial ? <PrototypeShell lang={lang} path={"/work/"+localized.slug}>{content}</PrototypeShell> : <main>{content}</main>;
}
