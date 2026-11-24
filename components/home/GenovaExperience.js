import Link from "next/link";
import { clients, copy, genovaShot, links, t } from "../../data/home";
import { ExternalLink, Placeholder, canShowShot, Shot, SectionHead, withLang } from "./parts";
import styles from "./Home.module.scss";

export default function GenovaExperience({ lang = "en", standalone = false }) {
  const c = copy[lang];
  return (
        <section id="experience" className={styles.experience} data-editorial-reveal="genova">
          <div className={styles.wrap}>
            <SectionHead index={lang==="es"?"03 / EXPERIENCIA PROFESIONAL":"03 / PROFESSIONAL EXPERIENCE"} title={lang === "es" ? <>Más allá <em>del código.</em></> : <>Beyond <em>the code.</em></>} intro={c.experienceIntro} />
            <div className={styles.split}>
              <div>
                <h3 className={styles.genova}>genova.</h3>
                <p className={styles.genovaRole}>{c.genovaRole}</p>
                <p className={styles.monoMeta}>{c.genovaDates}</p>
                {canShowShot(genovaShot) ? (
                  <figure className={styles.genovaFigure}>
                    <Shot shot={genovaShot} lang={lang} pendingLabel={c.pending} />
                    <figcaption className={styles.clientTag}>{c.genovaFig}</figcaption>
                  </figure>
                ) : null}
              </div>
              <div>
                <p className={styles.genovaBody}>{c.genovaBody}</p>
                <div className={styles.genovaLinks}>
                  {!standalone && <Link href={withLang("/genova", lang)} className={styles.button}>{lang === "es" ? "Explorar Genova ↗" : "Explore Genova ↗"}</Link>}
                  <ExternalLink href={links.genovaWebsite} className={styles.lnk}>
                    {c.genovaWebsite}
                  </ExternalLink>
                  <ExternalLink href={links.genovaInstagram} className={styles.lnk}>
                    {c.genovaInstagram}
                  </ExternalLink>
                </div>
                <ul className={styles.genovaList}>
                  {c.genovaBullets.map((item, i) => (
                    <li key={item}>
                      <span aria-hidden="true">{String.fromCharCode(97 + i)}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.clientsHead}>
              <p className={styles.eyebrow}>{c.clientsLabel}</p>
              <p className={styles.monoMeta}>{c.clientsNote}</p>
            </div>
            <div className={styles.clients}>
              {clients.map((client,index) => (
                <article key={client.title} className={styles.client} style={{"--i":index}}>
                  {client.shot && canShowShot(client.shot) ? (
                    <Shot shot={client.shot} lang={lang} pendingLabel={c.pending} />
                  ) : (
                    <Placeholder label={c.clientPlaceholder} ratio="4 / 3" tone="deep" />
                  )}
                  <p className={styles.clientTag}>
                    {c.clientTag} · {t(client.sector, lang)}
                  </p>
                  <h3 className={styles.clientTitle}>{client.title}</h3>
                  <p className={styles.clientDetail}>{t(client.detail, lang)}</p>
                  <ExternalLink href={client.live} className={styles.lnk}>
                    {c.site}
                  </ExternalLink>
                </article>
              ))}
            </div>
          </div>
        </section>
  );
}
