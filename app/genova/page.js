import PrototypeShell from "../../components/editorial/PrototypeShell";
import PrototypeGenova from "../../components/editorial/PrototypeGenova";
import { localizedAlternates, localizedUrl } from "../../lib/site-metadata";

export async function generateMetadata({ searchParams }) {
  const lang = (await searchParams)?.lang === "es" ? "es" : "en";
  const title = lang === "es" ? "Genova — Experiencia profesional" : "Genova — Professional experience";
  const description = lang === "es"
    ? "Experiencia profesional como cofundador de Genova: tecnología, estrategia y ejecución creativa para negocios reales."
    : "Professional experience as Genova co-founder: technology, strategy and creative delivery for real businesses.";

  return {
    title,
    description,
    alternates: localizedAlternates("/genova", lang),
    openGraph: { type: "website", locale: lang === "es" ? "es_AR" : "en_US", url: localizedUrl("/genova", lang), title, description },
    twitter: { card: "summary", title, description },
  };
}

export default async function GenovaPage({searchParams}){const lang=(await searchParams)?.lang==="es"?"es":"en";return <PrototypeShell lang={lang} path="/genova"><PrototypeGenova lang={lang}/></PrototypeShell>}
