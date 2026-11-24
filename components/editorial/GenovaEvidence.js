import {clients,genovaShot,t} from "../../data/home";
import Image from "next/image";
export default function GenovaEvidence({lang}){
 const es=lang==="es";const entries=[{title:"Genova",shot:genovaShot},...clients];
 return <details className="evidence-disclosure"><summary>{es?"Ver capturas reales autorizadas de los sitios":"View authorized screenshots of the live sites"}</summary>{entries.filter(x=>x.shot?.authorized&&x.shot?.desktop).map(x=><figure className="actual-shot" key={x.title}><Image src={x.shot.desktop.src} width={x.shot.desktop.width} height={x.shot.desktop.height} alt={t(x.shot.alt,lang)} unoptimized/><figcaption>{x.title} · {x.shot.capturedAt}</figcaption></figure>)}</details>;
}
