import Link from "next/link";
import EditorialHeader from "../../components/home/EditorialHeader";
import EditorialMotion from "../../components/home/EditorialMotion";
import GenovaExperience from "../../components/home/GenovaExperience";
import { hrefFor } from "../../components/home/parts";
import styles from "../../components/home/Home.module.scss";
export const metadata = { title: "Genova — Professional experience", alternates: { canonical: "/genova" } };
export default async function GenovaPage({searchParams}) {
  const lang=(await searchParams)?.lang==="es"?"es":"en";
  const es=lang==="es";
  return <div className={styles.page}>
    <a href="#content" className={styles.skip}>{es?"Saltar al contenido":"Skip to content"}</a>
    <EditorialHeader lang={lang} standalone/><EditorialMotion/>
    <main id="content" tabIndex={-1} className={styles.main}>
      <section className={styles.wrap+" "+styles.genovaHero}>
        <Link href={hrefFor(lang,"experience")} className={styles.lnk}>← {es?"Portfolio":"Portfolio"}</Link>
        <p className={styles.eyebrow}>{es?"EMPRENDIMIENTO / EXPERIENCIA PROFESIONAL":"ENTREPRENEURSHIP / PROFESSIONAL EXPERIENCE"}</p>
        <h1>genova.</h1><p><em>{es?"Más allá del código.":"Beyond the code."}</em></p>
        <p>{es?"Tecnología, estrategia y desafíos reales de negocio.":"Technology, strategy and real business challenges."}</p>
      </section>
      <GenovaExperience lang={lang} standalone/>
    </main>
  </div>;
}
