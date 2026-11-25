import PrototypeShell from "../components/editorial/PrototypeShell";
import PrototypeHome from "../components/editorial/PrototypeHome";
import { localizedAlternates, localizedUrl } from "../lib/site-metadata";

export async function generateMetadata({ searchParams }) {
  const lang = (await searchParams)?.lang === "es" ? "es" : "en";
  const title = lang === "es"
    ? "Francisco Vitar | Desarrollador de software"
    : "Francisco Vitar | Software Engineer";
  const description = lang === "es"
    ? "Desarrollador de software y full-stack. Estudiante de Ingeniería en Sistemas en UTN Córdoba y cofundador de Genova."
    : "Software Engineer and Full-Stack Developer. Information Systems Engineering student at UTN Córdoba and co-founder of Genova.";

  return {
    title: { absolute: title },
    description,
    alternates: localizedAlternates("/", lang),
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_AR" : "en_US",
      url: localizedUrl("/", lang),
      title,
      description,
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function Home({searchParams}){const lang=(await searchParams)?.lang==="es"?"es":"en";return <PrototypeShell lang={lang}><PrototypeHome lang={lang}/></PrototypeShell>}
