import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "Football Intelligence App Case Study",
  description:
    "Case study: an in-progress PostgreSQL-backed football intelligence product with transactional publication, provenance and read-only public access.",
};

export default function FootballCaseStudy() {
  return <CaseStudyPage study={getCaseStudy("football")} />;
}
