import styles from "./Home.module.scss";

export function hrefFor(lang, target) {
  const base = lang === "es" ? "/?lang=es" : "/";
  return target ? `${base}#${target}` : base;
}

export function withLang(href, lang) {
  return lang === "es" ? `${href}?lang=es` : href;
}

// Clearly labelled stand-in until a real, approved screenshot exists.
export function Placeholder({ label, ratio, className = "", tone }) {
  return (
    <div
      className={`${styles.placeholder} ${tone === "deep" ? styles.placeholderDeep : ""} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={label}
    >
      <span>[ {label} ]</span>
    </div>
  );
}

export function SectionHead({ index, title, intro }) {
  return (
    <div className={styles.sectionHead}>
      <p className={styles.sectionIndex}>{index}</p>
      <div className={styles.sectionHeadRow}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
      </div>
    </div>
  );
}

export function ExternalLink({ href, children, className }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
