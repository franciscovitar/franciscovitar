import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";
import { localizedAlternates, localizedUrl } from "../../../lib/site-metadata";

export async function generateMetadata({ searchParams }) {
  const lang = (await searchParams)?.lang === "es" ? "es" : "en";
  const title = lang === "es" ? "Webhook Recovery Lab — Caso de ingeniería" : "Webhook Recovery Lab — Engineering Case Study";
  const description = lang === "es"
    ? "Sandbox público de webhooks con ingreso firmado, entregas durables en PostgreSQL, espacios aislados, reintentos acotados y recuperación auditada."
    : "Public webhook operations sandbox with signed ingress, durable PostgreSQL delivery, isolated workspaces, bounded retries and audited recovery.";
  const canonicalUrl = localizedUrl("/work/webhook-recovery-lab", lang);

  return {
    title,
    description,
    alternates: localizedAlternates("/work/webhook-recovery-lab", lang),
    openGraph: { type: "website", locale: lang === "es" ? "es_AR" : "en_US", url: canonicalUrl, title, description },
    twitter: { card: "summary", title, description },
  };
}

export default async function WebhookRecoveryCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("webhook")} lang={lang} />;
}
