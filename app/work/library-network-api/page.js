import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";
import { localizedAlternates, localizedUrl } from "../../../lib/site-metadata";

export async function generateMetadata({ searchParams }) {
  const lang = (await searchParams)?.lang === "es" ? "es" : "en";
  const title = lang === "es" ? "Library Network — Caso de ingeniería" : "Library Network — Engineering Case Study";
  const description = lang === "es"
    ? "Aplicación de gestión bibliotecaria con Next.js, FastAPI y PostgreSQL: espacios de invitados aislados, préstamos transaccionales, transferencias, control de concurrencia e idempotencia."
    : "Library management app with Next.js, FastAPI and PostgreSQL: independent guest workspaces, transactional lending, transfers, concurrency control and idempotency.";
  const canonicalUrl = localizedUrl("/work/library-network-api", lang);

  return {
    title,
    description,
    alternates: localizedAlternates("/work/library-network-api", lang),
    openGraph: { type: "website", locale: lang === "es" ? "es_AR" : "en_US", url: canonicalUrl, title, description },
    twitter: { card: "summary", title, description },
  };
}

export default async function LibraryNetworkCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("library")} lang={lang} />;
}
