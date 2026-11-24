// Deterministic review of invented evidence, not web research or a fact checker.
export function reviewResearch({question,facets,options,sources,evidence}={}){
  const invalid=reason=>({status:"INVALID_RESEARCH",reason,synthetic:true,decisionAuthority:"NONE"});
  const id=x=>typeof x==="string"&&/^[a-z][a-z0-9-]{0,63}$/.test(x);
  const label=x=>typeof x==="string"&&x.trim().length>0&&x.length<=400;
  const validList=(a,limit)=>Array.isArray(a)&&a.length>0&&a.length<=limit&&a.every(x=>x&&id(x.id)&&label(x.label))&&new Set(a.map(x=>x.id)).size===a.length;
  if(!label(question)||!validList(facets,20)||!validList(options,12)||options.filter(o=>o.kind==="NO_CHANGE").length!==1||options.some(o=>!["NO_CHANGE","BUILD","REUSE","BUY","CONFIGURE"].includes(o.kind)))return invalid("question, facets and alternatives including no-change required");
  if(!validList(sources,100)||sources.some(s=>!id(s.origin)||!["PRIMARY","SECONDARY"].includes(s.authority)||typeof s.current!=="boolean"||typeof s.checked!=="boolean"))return invalid("invalid fixture source registry");
  if(!Array.isArray(evidence)||evidence.length>500||evidence.some(e=>!e||!id(e.id)||!["SUPPORT","CONTRARY"].includes(e.direction)||!["OBSERVATION","INFERENCE"].includes(e.kind)||!label(e.locator)||!label(e.claim)||!facets.some(f=>f.id===e.facetId)||!options.some(o=>o.id===e.optionId)||!sources.some(s=>s.id===e.sourceId))||new Set(evidence.map(e=>e.id)).size!==evidence.length)return invalid("invalid or unlinked evidence");
  const bySource=new Map(sources.map(s=>[s.id,s]));
  const rows=options.flatMap(o=>facets.map(f=>{
    const related=evidence.filter(e=>e.optionId===o.id&&e.facetId===f.id);
    const checked=related.filter(e=>{const s=bySource.get(e.sourceId);return s.current&&s.checked&&s.authority==="PRIMARY"&&e.kind==="OBSERVATION";});
    const support=checked.filter(e=>e.direction==="SUPPORT"),contrary=checked.filter(e=>e.direction==="CONTRARY");
    const status=support.length&&contrary.length?"CONTESTED":support.length?"SUPPORTED":contrary.length?"COUNTEREVIDENCE_ONLY":"GAP";
    return {optionId:o.id,facetId:f.id,status,support:support.map(e=>e.id),contrary:contrary.map(e=>e.id),origins:[...new Set(checked.map(e=>bySource.get(e.sourceId).origin))],unqualified:related.filter(e=>!checked.includes(e)).map(e=>e.id)};
  }));
  const gaps=rows.filter(r=>r.status==="GAP"),conflicts=rows.filter(r=>r.status==="CONTESTED");
  return {status:gaps.length?"COVERAGE_INCOMPLETE":conflicts.length?"CONTRADICTIONS_REQUIRE_REVIEW":"READY_FOR_HUMAN_COMPARISON",rows,coverage:{examined:rows.length-gaps.length,total:rows.length},gaps:gaps.length,conflicts:conflicts.length,decisionAuthority:"NONE",winner:null,synthetic:true};
}
