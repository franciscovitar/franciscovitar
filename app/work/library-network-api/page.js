import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

const title = "Library Network API — Engineering Case Study";
const description =
  "Public FastAPI/PostgreSQL backend lab for interlibrary loans: concurrency control, transactional commands, idempotency and reproducible CI evidence.";
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
