import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";
import { localizedAlternates, localizedUrl } from "../../../lib/site-metadata";

export async function generateMetadata({ searchParams }) {
  const lang = (await searchParams)?.lang === "es" ? "es" : "en";
  const title = lang === "es" ? "Vida 2.0 — Caso de estudio" : "Vida 2.0 Case Study";
  const description = lang === "es"
    ? "Caso de estudio de un sistema operativo personal con autoridad explícita de fuentes, comportamiento fail-closed y límites de escritura segura."
    : "Case study of a personal operating system with explicit source authority, fail-closed behavior and safe-write boundaries.";

  return {
    title,
    description,
    alternates: localizedAlternates("/work/vida-2", lang),
    openGraph: { type: "website", locale: lang === "es" ? "es_AR" : "en_US", url: localizedUrl("/work/vida-2", lang), title, description },
    twitter: { card: "summary", title, description },
  };
}

export default async function VidaCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("vida")} lang={lang} />;
}
