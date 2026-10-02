import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

const title = "Football Intelligence App Case Study";
const description =
  "Case study: an in-progress PostgreSQL-backed football intelligence product with transactional publication, provenance and read-only public access.";
const canonicalUrl =
  "https://franciscovitar.vercel.app/work/football-intelligence";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function FootballCaseStudy({ searchParams }) {
  const lang = searchParams?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("football")} lang={lang} />;
}
