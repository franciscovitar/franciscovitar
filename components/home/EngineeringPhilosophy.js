import styles from "./Home.module.scss";

export default function EngineeringPhilosophy({lang}) {
  const es=lang==="es";
  const principles=es?[["Entender antes de construir.","Investigación, restricciones y necesidades reales."],["Diseñar para el uso real.","Arquitectura, claridad e interfaces con propósito."],["Demostrar lo que funciona.","Pruebas, evidencia y límites transparentes."],["No dejar de mejorar.","Feedback, iteración y conocimiento reutilizable."]]:[["Understand before building.","Research, constraints and real user needs."],["Design for real use.","Architecture, clarity and purposeful interfaces."],["Prove what works.","Tests, evidence and transparent limitations."],["Never stop improving.","Feedback, iteration and reusable knowledge."]];
  const labels=es?["Investigar","Diseñar","Construir","Validar","Mejorar"]:["Research","Design","Build","Validate","Improve"];
  const positions=[[220,55],[353,152],[301,308],[139,308],[87,152]];
  return <section className={styles.wrap+" "+styles.philosophy} id="approach" data-editorial-reveal="method">
    <p className={styles.eyebrow}>04 / {es?"METODOLOGÍA":"ENGINEERING APPROACH"}</p>
    <h2 className={styles.philosophyTitle}>{es?"De la complejidad":"From complexity"} <em>{es?"a la claridad.":"to clarity."}</em></h2>
    <div className={styles.methodGrid}>
      <figure className={styles.methodArt}><svg viewBox="0 0 440 390" role="img" aria-label={es?"Ciclo iterativo de ingeniería":"Iterative engineering process"}>
        <circle cx="220" cy="195" r="140" fill="none" stroke="#444" strokeDasharray="3 8"/><circle cx="220" cy="195" r="110" fill="none" stroke="#444"/>
        <g fill="none" stroke="#888">{positions.map(([x,y],i)=><path key={i} data-method-wire="" pathLength="1" d={`M220 195 L${x} ${y}`}/>)}</g>
        <circle cx="220" cy="195" r="48" fill="#eee"/><text x="220" y="191" textAnchor="middle" fontSize="11" fill="#111" fontWeight="bold">SYSTEMS</text><text x="220" y="207" textAnchor="middle" fontSize="10" fill="#333">THINKING</text>
        {positions.map(([x,y],i)=><g key={i}><rect x={x-47} y={y-20} width="94" height="40" rx="7" fill="#191919" stroke="#555"/><text x={x} y={y+4} textAnchor="middle" fontSize="12" fill="#eee">{labels[i]}</text></g>)}
      </svg><figcaption className={styles.caption}>{es?"Flujo conceptual":"Conceptual workflow"}</figcaption></figure>
      <div className={styles.principles}>{principles.map(([title,body],i)=><article key={title} style={{"--i":i}}><span className={styles.eyebrow}>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
    </div>
  </section>;
}
