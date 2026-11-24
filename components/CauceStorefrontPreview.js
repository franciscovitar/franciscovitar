import Arrow from "./editorial/Arrow";
import styles from "./CauceStorefrontPreview.module.scss";

/** Visual reconstruction of the public Cauce homepage using its actual hero photograph.
 * Not a static browser screenshot or evidence of a payment transaction. */
export default function CauceStorefrontPreview({ href, lang = "en" }) {
  const label = lang === "es" ? "Abrir tienda pública de Cauce" : "Open public Cauce storefront";
  return (
    <a className={styles.preview} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <div className={styles.siteHeader} aria-hidden="true">
        <strong>cauce<span>.</span></strong>
        <span className={styles.siteNav}>Tienda &nbsp; Mesa &nbsp; Decoración &nbsp; Textiles &nbsp; Nosotros</span>
        <span className={styles.siteIcons}>⌕ &nbsp; ♡ &nbsp; ♧</span>
      </div>
      <div className={styles.cover}>
        <div className={styles.coverCopy}>
          <span className={styles.kicker}>NUEVA COLECCIÓN · CASA 2026</span>
          <strong>Hacé espacio<br />para lo <em>simple.</em></strong>
          <span className={styles.subline}>Objetos con intención, texturas que se sienten y detalles que vuelven especial lo cotidiano.</span>
          <span className={styles.cta}>Descubrí la colección <Arrow/></span>
        </div>
        <span className={styles.index}>01 / 03</span>
      </div>
    </a>
  );
}
