import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "Vida 2.0 Case Study",
  description:
    "Case study: a private-data personal operating system with explicit source authority, fail-closed behavior and safe-write boundaries.",
};

export default async function VidaCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("vida")} lang={lang} />;
}
