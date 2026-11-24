import Image from "next/image";
import styles from "./Home.module.scss";

// Screenshots flagged `authorized: false` are for local review only: they render
// solely when SHOW_PENDING_SCREENSHOTS=1 (set in .env.local, never on Vercel).
// Their files are also git-ignored, so they cannot be committed or deployed.
export function canShowShot(entry) {
  return (
    entry?.authorized === true || process.env.SHOW_PENDING_SCREENSHOTS === "1"
  );
}

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
    <div className={styles.sectionHead} data-editorial-reveal="chapter">
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

// Real screenshot. A mobile variant (when present) replaces the desktop one on
// phones through <picture>, so each viewport shows its own authentic layout.
// `authorized: false` marks client work that is not yet cleared for publication.
export function Shot({ shot, lang, pendingLabel }) {
  const alt = shot.alt[lang] ?? shot.alt.en;
  return (
    <div>
      <div className={`${styles.shot} ${shot.mobile ? styles.shotTall : ""}`}>
        <picture>
          {shot.mobile ? (
            <source media="(max-width: 640px)" srcSet={shot.mobile.src} />
          ) : null}
          <Image
            src={shot.desktop.src}
            width={shot.desktop.width}
            height={shot.desktop.height}
            alt={alt}
            sizes="(max-width: 640px) 248px, (max-width: 980px) 50vw, 280px"
            unoptimized
          />
        </picture>
      </div>
      {shot.authorized ? null : (
        <span className={styles.shotTag}>{pendingLabel}</span>
      )}
    </div>
  );
}

// Desktop + mobile pair used for a single project (main is 4:3, side stretches to match).
export function PairShot({ image, lang, main = false }) {
  return (
    <div className={`${styles.pairShot} ${main ? styles.pairMain : ""}`}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt[lang] ?? image.alt.en}
        sizes={main ? "(max-width: 980px) 70vw, 500px" : "(max-width: 980px) 28vw, 200px"}
        unoptimized
      />
    </div>
  );
}
