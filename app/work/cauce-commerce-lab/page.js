import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "Cauce Commerce Lab · Full-stack Case Study",
  description:
    "Personal full-stack commerce engineering: Next.js/Supabase code, RLS admin, canonical checkout and public synthetic failure scenarios.",
};

export default async function CauceCommerceCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("mediterranea")} lang={lang} />;
}
