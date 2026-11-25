import Arrow from "./Arrow";
import { route } from "./routes";
import PrototypeMotion from "./PrototypeMotion";
import "./prototype.css";
export default function PrototypeShell({lang="en",path="/",children}){
 const es=lang==="es", other=es?"en":"es";
 const nav=[["/#projects",es?"Proyectos":"Work"],["/genova","Genova"],["/#about",es?"Sobre mí":"About"],["/#contact",es?"Contacto":"Contact"]];
 return <div className="ep"><a href="#main" className="skip">{es?"Saltar al contenido":"Skip to content"}</a>
 <header className="nav-shell" data-prototype-nav><nav className="nav" aria-label={es?"Navegación principal":"Main navigation"}>
 <a className="brand" href={route(lang,"/#top")}><span className="brand-long">Francisco Vitar</span><span className="brand-short">FV</span></a>
 <div className="nav-links">{nav.map(([href,label])=><a href={route(lang,href)} key={href}>{label}</a>)}</div>
 <div className="nav-right"><a href={route(other,path)} aria-label={es?"Switch language":"Cambiar idioma"}>{es?"EN":"ES"}</a><a className="cv" href="/Francisco_Vitar_CV_ATS_V2.pdf" target="_blank" rel="noopener noreferrer">CV <Arrow/></a><details className="mobile-details" data-prototype-menu><summary>{es?"Menú":"Menu"} <span aria-hidden="true">☰</span></summary><div id="mobile-menu">{nav.map(([href,label])=><a href={route(lang,href)} key={href}>{label}</a>)}<a href="/Francisco_Vitar_CV_ATS_V2.pdf">{es?"Ver CV":"View CV"} <Arrow/></a></div></details></div>
 </nav></header><PrototypeMotion/><main id="main" tabIndex={-1}>{children}</main></div>
}
