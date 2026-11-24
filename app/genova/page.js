import PrototypeShell from "../../components/editorial/PrototypeShell";
import PrototypeGenova from "../../components/editorial/PrototypeGenova";
export const metadata={title:"Genova — Professional experience",alternates:{canonical:"/genova"}};
export default async function GenovaPage({searchParams}){const lang=(await searchParams)?.lang==="es"?"es":"en";return <PrototypeShell lang={lang} path="/genova"><PrototypeGenova lang={lang}/></PrototypeShell>}
