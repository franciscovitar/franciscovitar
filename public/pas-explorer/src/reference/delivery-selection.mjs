// Public taxonomy projection and independently authored selection rules.
// Selection is illustrative; it does not retrieve or certify a private library.
export const ROUTES = Object.freeze(Object.fromEntries(Object.entries({
  "web-new": [
    "CREATE"
  ],
  "software-new": [
    "CREATE"
  ],
  "web-redesign": [
    "REDESIGN",
    "IMPROVE"
  ],
  "software-modernization": [
    "IMPROVE",
    "REDESIGN",
    "MIGRATE"
  ],
  "ecommerce": [
    "CREATE",
    "REDESIGN",
    "MIGRATE",
    "IMPROVE"
  ],
  "automation": [
    "CREATE",
    "AUDIT",
    "IMPROVE",
    "REPAIR",
    "MAINTAIN"
  ],
  "ai-solutions": [
    "CREATE",
    "AUDIT",
    "IMPROVE",
    "MAINTAIN"
  ],
  "integrations": [
    "CREATE",
    "MIGRATE",
    "AUDIT",
    "REPAIR",
    "MAINTAIN"
  ],
  "seo": [
    "CREATE",
    "AUDIT",
    "IMPROVE",
    "MIGRATE",
    "MAINTAIN"
  ],
  "google-ads": [
    "CREATE",
    "AUDIT",
    "IMPROVE",
    "MIGRATE",
    "MAINTAIN"
  ],
  "maintenance": [
    "MAINTAIN",
    "REPAIR",
    "AUDIT",
    "IMPROVE"
  ],
  "analytics": [
    "CREATE",
    "AUDIT",
    "IMPROVE",
    "MIGRATE",
    "REPAIR",
    "MAINTAIN"
  ]
}).map(([k,v])=>[k,Object.freeze(v)])));
const SPECIAL = Object.freeze({
  "web-new": [
    "L01",
    "L02",
    "L03",
    "L06",
    "L20",
    "L27"
  ],
  "software-new": [
    "L20",
    "L21",
    "L25",
    "L26"
  ],
  "web-redesign": [
    "L01",
    "L03",
    "L05",
    "L06",
    "L20",
    "L27"
  ],
  "software-modernization": [
    "L20",
    "L21",
    "L25",
    "L26",
    "L30"
  ],
  "ecommerce": [
    "L03",
    "L21",
    "L22",
    "L25",
    "L26",
    "L29"
  ],
  "automation": [
    "L21",
    "L23",
    "L25",
    "L30"
  ],
  "ai-solutions": [
    "L21",
    "L24",
    "L25",
    "L30"
  ],
  "integrations": [
    "L21",
    "L23",
    "L25",
    "L30"
  ],
  "seo": [
    "L05",
    "L06",
    "L27",
    "L29"
  ],
  "google-ads": [
    "L28",
    "L29"
  ],
  "maintenance": [
    "L20",
    "L25",
    "L26",
    "L30"
  ],
  "analytics": [
    "L21",
    "L25",
    "L29",
    "L30"
  ]
});
export function compatibleRoute(service,intervention) {
  return typeof service==="string" && Object.hasOwn(ROUTES,service) && ROUTES[service].includes(intervention);
}
export function selectFamilies({service,intervention,requested=[]}={}) {
  if(!compatibleRoute(service,intervention)) return {status:"UNSUPPORTED_COMBINATION",families:[],execute:false};
  if(!Array.isArray(requested)||requested.length>35||requested.some(id=>typeof id!=="string"||!/^L(?:0[1-9]|[12][0-9]|3[0-5])$/.test(id))) return {status:"INVALID_FAMILY_REQUEST",families:[],execute:false};
  const candidates=new Map();
  const add=(id,reason)=>{if(!candidates.has(id)) candidates.set(id,[]);const reasons=candidates.get(id);if(!reasons.includes(reason))reasons.push(reason);};
  for(const id of ["L31","L33","L35"]) add(id,"shared-method");
  for(const id of SPECIAL[service]) add(id,"service-context");
  if(["REDESIGN","MIGRATE","REPAIR"].includes(intervention)) for(const id of ["L25","L26"]) add(id,"preservation-and-risk");
  for(const id of requested) add(id,"explicit-discovery-request");
  return {status:"CATALOG_CANDIDATES_ONLY",families:[...candidates].map(([id,reasons])=>({id,reasons,maturity:"DESIGN_CATALOG"})),execute:false,executionAuthority:"NONE",readOnly:intervention==="AUDIT"};
}
