import CaseStudyPage from "../../../components/CaseStudyPage";
import { getCaseStudy } from "../../../data/caseStudies";
import { localizedAlternates, localizedUrl } from "../../../lib/site-metadata";

const casePath = "/work/cauce-commerce-lab";
const imageUrl = "https://cauce-retail-preview-git-feat-cauce-portfolio-tes-76f96e-genova.vercel.app/cauce/hero.webp";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const spanish = params?.lang === "es";
  const title = spanish
    ? "Cauce Commerce Lab · Caso de estudio ecommerce full-stack"
    : "Cauce Commerce Lab · Full-stack Ecommerce Case Study";
  const description = spanish
    ? "Conocé Cauce: tienda ficticia pública con Next.js y Supabase, pagos de prueba verificados en Mercado Pago, webhooks firmados y control transaccional de stock. Sin acceso de Vercel para recorrerla."
    : "Explore the public Cauce storefront: Next.js, Supabase, verified test-only Mercado Pago payments, signed webhooks and transactional inventory. No Vercel login required to browse.";
  const canonical = localizedUrl(casePath, spanish ? "es" : "en");
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: localizedAlternates(casePath, spanish ? "es" : "en").languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: spanish ? "es_AR" : "en_US",
      images: [{ url: imageUrl, alt: "Cauce fictional storefront — home decor collection" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export default async function CauceCommerceCaseStudy({ searchParams }) {
  const params = await searchParams;
  const lang = params?.lang === "es" ? "es" : "en";
  return <CaseStudyPage study={getCaseStudy("mediterranea")} lang={lang} />;
}
