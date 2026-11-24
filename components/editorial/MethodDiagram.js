export default function MethodDiagram({lang}) {
 const es=lang==="es";
 const steps=es?[["Investigar","Contexto y restricciones"],["Diseñar","Arquitectura y alternativas"],["Construir","Implementación"],["Validar","Pruebas y evidencia"],["Mejorar","Aprendizaje reutilizable"]]:[["Research","Context and constraints"],["Design","Architecture and alternatives"],["Build","Implementation"],["Validate","Tests and evidence"],["Improve","Reusable learning"]];
 const paths=["M10 17a7 7 0 1 1 5-5 M15 15l5 5","M4 5h16v14H4z M4 10h16 M10 10v9","M9 6l-6 6 6 6 M15 6l6 6-6 6","M4 12l5 5L20 6","M20 10a8 8 0 1 0-2 8 M20 4v6h-6"];
 return <figure className="method-diagram method-loop" aria-label={es?"Ciclo iterativo de ingeniería":"Iterative engineering cycle"}>
  <div className="method-top"><span>{es?"INGENIERÍA / 01":"ENGINEERING / 01"}</span><span>{es?"CICLO ITERATIVO":"ITERATIVE LOOP"}</span></div>
  <div className="method-loop-title">{es?"Pensamiento":"Systems"} <em>{es?"sistémico":"thinking"}</em></div>
  <ol className="method-steps">{steps.map(([title,detail],i)=><li key={title} style={{"--i":i}}><span className="method-number">{String(i+1).padStart(2,"0")}</span><span className="method-icon"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={paths[i]}/></svg></span><div><strong>{title}</strong><small>{detail}</small></div></li>)}</ol>
  <figcaption className="method-bottom"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 8a8 8 0 1 0 0 8M20 2v6h-6"/></svg><span>{es?"La evidencia alimenta la próxima decisión":"Evidence informs the next decision"}</span></figcaption>
 </figure>
}
