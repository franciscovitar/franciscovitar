import PrototypeShell from "../components/editorial/PrototypeShell";
import PrototypeHome from "../components/editorial/PrototypeHome";
export const metadata={alternates:{canonical:"/"}};
export default async function Home({searchParams}){const lang=(await searchParams)?.lang==="es"?"es":"en";return <PrototypeShell lang={lang}><PrototypeHome lang={lang}/></PrototypeShell>}
