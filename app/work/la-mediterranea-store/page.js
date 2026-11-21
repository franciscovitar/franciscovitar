import { permanentRedirect } from "next/navigation";

// Preserve historical links without presenting the previous merchant brand
// as the name of the current independent portfolio project.
export default async function LegacyMediterraneaCaseStudy({ searchParams }) {
  const params = await searchParams;
  const suffix = params?.lang === "es" ? "?lang=es" : "";
  permanentRedirect("/work/cauce-commerce-lab" + suffix);
}
