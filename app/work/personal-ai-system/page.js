import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";
import { localizedAlternates, localizedUrl } from "../../../lib/site-metadata";

export async function generateMetadata({ searchParams }) {
  const lang = (await searchParams)?.lang === "es" ? "es" : "en";
  const title = lang === "es" ? "Personal AI System — Caso de estudio" : "Personal AI System Case Study";
  const description = lang === "es"
    ? "Caso de estudio anonimizado de un sistema privado nativo de IA para enrutamiento de herramientas, evidencia, permisos, continuidad de proyectos y mejora continua."
    : "Sanitized case study of a private AI-native system for tool routing, evidence, permissions, project continuity and continuous improvement.";

  return {
    title,
    description,
    alternates: localizedAlternates("/work/personal-ai-system", lang),
    openGraph: { type: "website", locale: lang === "es" ? "es_AR" : "en_US", url: localizedUrl("/work/personal-ai-system", lang), title, description },
    twitter: { card: "summary", title, description },
  };
}

export default async function PersonalAICaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("pas")} lang={lang} />;
}
