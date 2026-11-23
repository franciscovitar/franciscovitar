import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "Cauce Commerce Lab · Full-stack Case Study",
  description:
    "Isolated Next.js/Supabase ecommerce with Mercado Pago sandbox checkout, verified test payments, signed webhooks and stock consistency; preview access controlled by SSO.",
};

export default async function CauceCommerceCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("mediterranea")} lang={lang} />;
}
