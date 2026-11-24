// Links use real Next.js routes and preserve locale, not prototype hash routing.
export function route(lang,path){const [p,h]=path.split("#");return p+(lang==="es"?"?lang=es":"")+(h?"#"+h:"")}
