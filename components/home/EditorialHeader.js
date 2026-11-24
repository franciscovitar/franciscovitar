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
          <div className={styles.headerTools}>
            <span className={styles.langSwitch}>
              <Link href={standalone ? "/genova?lang=es" : "/?lang=es"} aria-current={lang === "es" ? "page" : undefined}>
                ES
              </Link>
              <span aria-hidden="true">/</span>
              <Link href={standalone ? "/genova" : "/"} aria-current={lang === "en" ? "page" : undefined}>
                EN
              </Link>
            </span>
            <a href={links.cv} className={styles.lnk}>
              {c.cv}
            </a>
          </div>
        </div>
      </header>
  );
}
