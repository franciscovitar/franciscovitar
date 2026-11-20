import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "La Mediterránea Store Case Study",
  description:
    "Case study: a Next.js/TypeScript storefront with Supabase persistence, RLS-backed admin access, idempotency and validated backup/restore.",
};

export default async function MediterraneaCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("mediterranea")} lang={lang} />;
}
