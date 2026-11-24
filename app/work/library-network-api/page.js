import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

const title = "Library Network — Engineering Case Study";
const description =
  "Live library management app with Next.js, FastAPI and PostgreSQL: independent guest workspaces, transactional lending, transfers, concurrency control and idempotency.";
const canonicalUrl = "https://franciscovitar.vercel.app/work/library-network-api";

export const metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { type: "website", url: canonicalUrl, title, description },
  twitter: { card: "summary", title, description },
};

export default async function LibraryNetworkCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("library")} lang={lang} />;
}
