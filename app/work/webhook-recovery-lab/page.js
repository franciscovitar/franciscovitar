import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

const title = "Webhook Recovery Lab — Engineering Case Study";
const description =
  "Private synthetic reliability lab: signed webhook ingress, durable inbox, concurrent workers, bounded retries, idempotent effects and audited replay.";
const canonicalUrl = "https://franciscovitar.vercel.app/work/webhook-recovery-lab";

export const metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { type: "website", url: canonicalUrl, title, description },
  twitter: { card: "summary", title, description },
};

export default async function WebhookRecoveryCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("webhook")} lang={lang} />;
}
