import Arrow from "./editorial/Arrow";
import { pasEcosystem } from "../data/pasEcosystem";
import styles from "./PASEcosystem.module.scss";

const repository = "https://github.com/franciscovitar/personal-ai-system-showcase";
function Inventory({ items }) {
  return <div className={styles.metrics}>{items.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>;
}
export default function PASEcosystem({ lang = "en" }) {
  const c = pasEcosystem[lang] || pasEcosystem.en;
  return (
    <div className={styles.explorer} id="pas-ecosystem">
      <p className={styles.kicker}>{c.kicker}</p>
      <h3 className={styles.title}>{c.title.replace(/\.$/, "")}</h3>
      <p className={styles.intro}>{c.intro}</p>
      <Inventory items={c.metrics} />
      <p className={styles.note}>{c.metricNote}</p>
      <div className={styles.map}>
        {c.modules.map(([name, role, description, maturity], i) => (
          <details key={name} className={styles.node} open={i === 1 ? true : undefined}>
            <summary><span className={styles.num}>{String(i + 1).padStart(2, "0")}</span><span><strong>{name}</strong><small>{role}</small></span></summary>
            <div className={styles.detail}><p>{description}</p><span>{maturity}</span></div>
          </details>
        ))}
      </div>
      <h3 className={styles.subhead}>{c.knowledgeTitle.replace(/\.$/, "")}</h3>
      <div className={styles.layers}>{c.levels.map(([name, body]) => <div key={name}><strong>{name}</strong><p>{body}</p></div>)}</div>
      <p className={styles.note}>{c.library}</p>
      <h3 className={styles.subhead}>{c.ownersTitle.replace(/\.$/, "")}</h3>
      <dl className={styles.owners}>{c.owners.map(([owner, responsibility]) => <div key={owner}><dt>{owner}</dt><dd>{responsibility}</dd></div>)}</dl>
      <h3 className={styles.subhead}>{c.journeyTitle.replace(/\.$/, "")}</h3>
      <ol className={styles.journey}>{c.journey.map(([name, body], i) => <li key={name}><span>{String(i + 1).padStart(2,"0")}</span><strong>{name}</strong><p>{body}</p></li>)}</ol>
      <p className={styles.note}>{c.journeyNote}</p>
      <h3 className={styles.subhead}>{c.blocksTitle.replace(/\.$/, "")}</h3>
      <div className={styles.blocks}>{c.blocks.map(([number, name, body]) => <div key={number}><span>{number}</span><strong>{name}</strong><p>{body}</p></div>)}</div>
      <p className={styles.note}>{c.blockNote}</p>
      <h3 className={styles.subhead}>{c.maturityTitle.replace(/\.$/, "")}</h3>
      <dl className={styles.owners}>{c.maturity.map(([name, body]) => <div key={name}><dt>{name}</dt><dd>{body}</dd></div>)}</dl>
      <h3 className={styles.subhead}>{c.auditTitle.replace(/\.$/, "")}</h3>
      <Inventory items={c.audit} />
      <p className={styles.note}>{c.auditNote}</p>
      <div className={styles.links}><strong>{c.linksTitle}</strong><a href={`/pas-explorer/explorer/index.html?lang=${lang}`}>{lang === "es" ? "Probar PAS Explorer" : "Try PAS Explorer"} <Arrow/></a><a href={repository} target="_blank" rel="noreferrer">{c.source.replace(/\s*↗\s*$/, "")} <Arrow/></a><a href={repository+"/actions/runs/45485921797"} target="_blank" rel="noreferrer">{c.ci.replace(/\s*↗\s*$/, "")} <Arrow/></a><a href={repository+"/blob/eb1b7e8d4b37cd275d830ba7753b297d3601385c/docs/system-map.md"} target="_blank" rel="noreferrer">{c.map.replace(/\s*↗\s*$/, "")} <Arrow/></a></div>
    </div>
  );
}
