import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";

export const metadata = {
  title: "Cauce Commerce Lab · Full-stack Case Study",
  description:
    "Public Cauce storefront built with Next.js and Supabase: test-only Mercado Pago checkout, verified sandbox payments, signed webhooks and transactional inventory. No Vercel login required to browse.",
  openGraph: {
    title: "Cauce Commerce Lab · Full-stack Ecommerce Case Study",
    description: "Explore a public fictional ecommerce backed by Next.js and Supabase, with verified test payments and transactional inventory.",
    images: [{ url: "https://cauce-retail-preview-git-feat-cauce-portfolio-tes-76f96e-genova.vercel.app/cauce/hero.webp", alt: "Cauce fictional storefront — home decor collection" }],
  },
};

export default async function CauceCommerceCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("mediterranea")} lang={lang} />;
}
