import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "Personal AI System Case Study",
  description:
    "Sanitized case study of a private AI-native system for tool routing, evidence, permissions, project continuity and continuous improvement.",
};

export default function PersonalAICaseStudy({ searchParams }) {
  const lang = searchParams?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("pas")} lang={lang} />;
}
