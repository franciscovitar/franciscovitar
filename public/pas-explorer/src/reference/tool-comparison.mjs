// Synthetic comparative evaluation, not live product pricing or performance.
export function compareToolRoutes({task,candidates,baselineId}={}){
  const invalid=reason=>({status:"INVALID_COMPARISON",reason,eligible:[],excluded:[],executionAuthority:"NONE",synthetic:true});
  const ident=x=>typeof x==="string"&&/^[a-z][a-z0-9-]{0,63}$/.test(x);
  const count=x=>Number.isSafeInteger(x)&&x>=0;
  const uniqueStrings=a=>Array.isArray(a)&&a.length>0&&a.every(ident)&&new Set(a).size===a.length;
  if(!task||!ident(task.id)||!uniqueStrings(task.requires)||!count(task.maxCostCents)||!count(task.minQuality)||task.minQuality>100||![0,1,2,3].includes(task.risk)||!["PUBLIC","SYNTHETIC","INTERNAL","CONFIDENTIAL"].includes(task.dataClass)||!Array.isArray(candidates)||candidates.length>30||candidates.some(c=>!c||!ident(c.id))||new Set(candidates.map(c=>c.id)).size!==candidates.length)return invalid("invalid task or candidates");
  const eligible=[],excluded=[];
  for(const c of candidates){
    const reasons=[];
    if(!Array.isArray(c.capabilities)||!task.requires.every(x=>c.capabilities.includes(x)))reasons.push("CAPABILITY_MISSING");
    if(c.available!==true||c.targetBound!==true||c.authorized!==true)reasons.push("ACCESS_OR_AUTHORITY_UNVERIFIED");
    if(!Array.isArray(c.dataClasses)||!c.dataClasses.includes(task.dataClass))reasons.push("DATA_BOUNDARY");
    if(!count(c.costCents))reasons.push("COST_UNKNOWN");else if(c.costCents>task.maxCostCents)reasons.push("OVER_BUDGET");
    if(c.evalTaskId!==task.id||c.evidenceKind!=="MATCHED_FIXTURE"||!count(c.quality)||c.quality>100||!count(c.humanMinutes)||!count(c.reworkMinutes))reasons.push("NOT_COMPARABLE");
    else if(c.quality<task.minQuality)reasons.push("QUALITY_BELOW_FLOOR");
    if(task.risk>=2&&c.independentVerification!==true)reasons.push("STRONGER_VERIFICATION_REQUIRED");
    if(reasons.length)excluded.push({id:c.id,reasons});
    else eligible.push({id:c.id,costCents:c.costCents,quality:c.quality,humanMinutes:c.humanMinutes,reworkMinutes:c.reworkMinutes});
  }
  const dominates=(a,b)=>a.quality>=b.quality&&a.costCents<=b.costCents&&a.humanMinutes<=b.humanMinutes&&a.reworkMinutes<=b.reworkMinutes&&(a.quality>b.quality||a.costCents<b.costCents||a.humanMinutes<b.humanMinutes||a.reworkMinutes<b.reworkMinutes);
  const frontier=eligible.filter(b=>!eligible.some(a=>a.id!==b.id&&dominates(a,b)));
  const baseline=frontier.find(c=>c.id===baselineId);
  const suggestion=baseline?.id??(frontier.length===1?frontier[0].id:null);
  return {status:!frontier.length?"NO_ELIGIBLE_ROUTE":suggestion?"BOUNDED_TRIAL_CANDIDATE":"TRADEOFF_REVIEW",eligible,excluded,frontier:frontier.map(c=>c.id),suggestion,executionAuthority:"NONE",synthetic:true};
}
