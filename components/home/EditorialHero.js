import Link from "next/link";
import { copy, links } from "../../data/home";
import { hrefFor, withLang } from "./parts";
import styles from "./Home.module.scss";

function Tile({ href, title, tone, lang, children }) {
  return <Link href={withLang(href, lang)} className={styles.stageTile} data-stage-tone={tone}>
    <div className={styles.stageLabel}><span>{title}</span><span aria-hidden="true">↗</span></div>
    <div className={styles.stageArt}>{children}<span className={styles.stageNote}>{lang === "es" ? "Visualización conceptual" : "Conceptual visualization"}</span></div>
  </Link>;
}

function PasMap({ es }) {
  const domains = es ? ["Personal", "Genova OS", "Delivery OS"] : ["Personal", "Genova OS", "Delivery OS"];
  return <svg className={styles.stageMap} viewBox="0 0 500 226" role="img" aria-label={es ? "Esquema conceptual de inteligencia compartida, control y dominios" : "Conceptual map of shared intelligence, control and domains"}>
    <g fill="none" stroke="#86a0be" strokeWidth="1.4">
      <path data-stage-wire="" pathLength="1" d="M250 38 V65 M250 103 V124 H83 V147 M250 124 V147 M250 124 H417 V147 M83 183 V197 H417 V183 M250 183 V197"/>
    </g>
    <g textAnchor="middle" fontSize="12" fill="#dbe5f2">
      <rect x="173" y="7" width="154" height="31" rx="5" fill="#263c55" stroke="#68819d"/>
      <text x="250" y="27">{es ? "Persona / Control" : "Human / Control tower"}</text>
      <rect x="157" y="65" width="186" height="38" rx="5" fill="#cedbeb"/>
      <text x="250" y="81" fill="#172737" fontSize="9">{es ? "INTELIGENCIA COMPARTIDA" : "SHARED INTELLIGENCE"}</text>
      <text x="250" y="95" fill="#172737" fontWeight="600">Personal AI System</text>
      {domains.map((name,i) => <g key={name}><rect x={17+i*167} y="147" width="132" height="36" rx="5" fill="#21344b" stroke="#536d8b"/><text x={83+i*167} y="169">{name}</text></g>)}
      <rect x="174" y="197" width="152" height="23" rx="4" fill="#253b53" stroke="#536d8b"/>
      <text x="250" y="212" fontSize="10">{es ? "Herramientas / Evidencia" : "Tools / Evidence"}</text>
    </g>
  </svg>;
}

export default function EditorialHero({lang}) {
  const es=lang==="es", c=copy[lang];
  return <section id="top" className={styles.wrap+" "+styles.editorialHero}>
    <div className={styles.editorialCopy}>
      <p className={styles.eyebrow}>{c.eyebrow}</p>
      <h1 className={styles.editorialTitle}><span>{es?"Construyo software.":"I build software."}</span><em>{es?"Diseño sistemas.":"I design systems."}</em></h1>
      <p className={styles.editorialDescription}>{es?"De interfaces cuidadas a sistemas backend confiables. Cofundador de Genova, conectando tecnología con necesidades reales de negocio.":"From thoughtful interfaces to reliable backend systems. Co-founder of Genova, connecting technology with real business needs."}</p>
      <div className={styles.editorialActions}><a href={hrefFor(lang,"projects")} className={styles.button}>{c.ctaPrimary} <span aria-hidden="true">↗</span></a><a href={links.cv} className={styles.lnk}>{c.ctaCv}</a><a href={hrefFor(lang,"contact")} className={styles.lnk}>{c.ctaContact}</a></div>
    </div>
    <div className={styles.editorialStage}>
      <Tile href="/work/vida-2" title="Vida 2.0" tone="vida" lang={lang}><div className={styles.stageVida}><strong>vida.</strong><span>{es?"Organización personal":"Personal OS"}</span><div className={styles.stageCells}>{c.demoSections.map((s,i)=><span key={s} style={{"--i":i}}>{s}</span>)}</div><div className={styles.stageProgress}><i/></div></div></Tile>
      <Tile href="/work/personal-ai-system" title="Personal AI System" tone="pas" lang={lang}><div className={styles.stagePas}><div className={styles.stageScreenHeader}>PAS / ARCHITECTURE <span>V4.3</span></div><PasMap es={es}/></div></Tile>
      <Tile href="/work/cauce-commerce-lab" title="Cauce Commerce Lab" tone="cauce" lang={lang}><div className={styles.stageStore}><strong>cauce.</strong><span>{es?"Tienda de demostración":"Sandbox storefront"}</span><div className={styles.stageProducts}>{["#809077","#d9d7c8","#9d8065"].map((fill,i)=><svg key={fill} viewBox="0 0 70 76" aria-hidden="true" style={{"--i":i}}><rect width="70" height="76" rx="4" fill="#d2c3aa"/><path d={["M25 16 H45 L49 28 V63 H21 V28Z","M28 22 H42 Q63 47 49 65 H21 Q7 47 28 22Z","M15 30 Q35 13 55 30 L49 63 H21Z"][i]} fill={fill}/></svg>)}</div><small>{es?"Catálogo · Checkout de prueba":"Catalog · Test checkout"}</small></div></Tile>
    </div>
    <div className={styles.stageFooter}><span>01—03 / {es?"Sistemas seleccionados":"Selected systems"}</span><a href={hrefFor(lang,"projects")}>{es?"Explorar":"Scroll to explore"} ↓</a><span>2026 / PORTFOLIO</span></div>
    <dl className={styles.editorialMeta}>{c.meta.map(([term,value])=><div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
  </section>;
}
