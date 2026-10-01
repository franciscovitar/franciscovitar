import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "Vida 2.0 Case Study",
  description:
    "Case study: a private-data personal operating system with explicit source authority, fail-closed behavior and safe-write boundaries.",
};

export default function VidaCaseStudy() {
  return <CaseStudyPage study={getCaseStudy("vida")} />;
}
