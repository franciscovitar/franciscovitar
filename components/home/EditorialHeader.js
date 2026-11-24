import Link from "next/link";
import { links, copy } from "../../data/home";
import { hrefFor, withLang } from "./parts";
import styles from "./Home.module.scss";

export default function EditorialHeader({ lang = "en", standalone = false }) {
  const c = copy[lang];
  return (
      <header className={styles.header} data-editorial-header>
        <div className={`${styles.wrap} ${styles.headerInner}`}>
          <a href={hrefFor(lang, "top")} className={styles.wordmark}>
            francisco vitar<span aria-hidden="true">.</span>
          </a>
          <nav aria-label={lang === "es" ? "Principal" : "Primary"} className={styles.nav}>
            <a href={hrefFor(lang, "projects")}>{c.nav.projects}</a>
            <Link href={withLang("/genova", lang)}>Genova</Link>
            <a href={hrefFor(lang, "about")}>{c.nav.about}</a>
            <a href={hrefFor(lang, "contact")}>{c.nav.contact}</a>
          </nav>
          <details className={styles.mobileNav} data-editorial-menu>
            <summary>{lang === "es" ? "Menú" : "Menu"} <span aria-hidden="true">☰</span></summary>
            <nav aria-label={lang === "es" ? "Menú móvil" : "Mobile navigation"}>
              <a href={hrefFor(lang, "projects")}>{c.nav.projects}</a>
              <Link href={withLang("/genova", lang)}>Genova</Link>
              <a href={hrefFor(lang, "about")}>{c.nav.about}</a>
              <a href={hrefFor(lang, "contact")}>{c.nav.contact}</a>
              <a href={links.cv}>{c.ctaCv}</a>
            </nav>
          </details>
          <div className={styles.headerTools}>
            <span className={styles.langSwitch}>
              <a href={standalone ? "/genova?lang=es" : "/?lang=es"} aria-current={lang === "es" ? "page" : undefined}>
                ES
              </a>
              <span aria-hidden="true">/</span>
              <a href={standalone ? "/genova" : "/"} aria-current={lang === "en" ? "page" : undefined}>
                EN
              </a>
            </span>
            <a href={links.cv} className={styles.lnk}>
              {c.cv}
            </a>
          </div>
        </div>
      </header>
  );
}
