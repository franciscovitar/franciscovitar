import { pasContent } from "../data/pasContent";
import styles from "./PASOverview.module.scss";

export default function PASOverview({ lang = "en" }) {
  const content = pasContent[lang] || pasContent.en;

  return (
    <figure className={styles.frame} aria-label={content.visualTitle}>
      <div className={styles.topline}>
        <span>{content.kicker}</span>
        <span>01—06</span>
      </div>

      <div className={styles.intro}>
        <h2>{content.visualTitle}</h2>
        <p>{content.visualSubtitle}</p>
      </div>

      <div className={styles.control}>
        <span className={styles.controlMark} aria-hidden="true">✳</span>
        <div>
          <strong>{content.control}</strong>
          <span>{content.controlDetail}</span>
        </div>
        <span className={styles.controlCode}>PAS</span>
      </div>

      <div className={styles.vertical} aria-hidden="true" />

      <div className={styles.areaHeading}>
        <span>{content.domainsLabel}</span>
        <span>06</span>
      </div>
      <div className={styles.areas}>
        {content.categories.map((item) => (
          <div className={styles.area} key={item.number}>
            <span className={styles.areaNumber}>{item.number}</span>
            <strong>{item.title}</strong>
            <span className={styles.areaShort}>{item.short}</span>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        {content.flow.map((item, index) => (
          <span key={item}>
            {index > 0 && <span className={styles.arrow} aria-hidden="true">→</span>}
            {item}
          </span>
        ))}
      </div>
    </figure>
  );
}
