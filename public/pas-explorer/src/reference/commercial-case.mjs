// Public fixture lifecycle only. Not the Genova CRM, identity, or messaging system.
export function makeCommercialCase(){
  return {id:"fixture-opportunity",revision:1,stage:"IDENTIFIED",suppressed:false,consent:false,terms:null,events:[],synthetic:true};
}

export function contactDraftEligibility(state){
  const allowed=state?.synthetic===true&&state.suppressed===false&&state.consent===true&&!["LOST","REVIEWED"].includes(state.stage);
  return {status:allowed?"DRAFT_FOR_HUMAN_REVIEW":"CONTACT_BLOCKED",send:false,executionAuthority:"NONE",synthetic:true};
}

export function advanceCommercialCase({state,expectedRevision,event}={}){
  const reject=status=>({status,executionAuthority:"NONE",synthetic:true});
  const stages=["IDENTIFIED","QUALIFIED","SCOPED","PROPOSED","WON","ENGAGED","REVIEWED","LOST"];
  const evidence=x=>typeof x==="string"&&/^fixture:[a-z0-9][a-z0-9-]{0,79}$/.test(x);
  if(!state||state.synthetic!==true||state.id!=="fixture-opportunity"||!Number.isSafeInteger(state.revision)||state.revision<1||state.revision>=Number.MAX_SAFE_INTEGER||!stages.includes(state.stage)||!Array.isArray(state.events)||state.events.length!==state.revision-1||typeof state.consent!=="boolean"||typeof state.suppressed!=="boolean")return reject("INVALID_CASE");
  if(expectedRevision!==state.revision)return reject("REVISION_CONFLICT");
  if(!event||!evidence(event.evidence))return reject("EVIDENCE_REQUIRED");
  let next={...state,events:[...state.events],revision:state.revision+1};
  switch(event.type){
    case "SUPPRESS": next.suppressed=true;next.consent=false;break;
    case "RECORD_CONSENT":
      if(state.suppressed||event.buyerConfirmed!==true)return reject("CONSENT_BLOCKED");
      next.consent=true;break;
    case "QUALIFY":
      if(state.stage!=="IDENTIFIED"||!evidence(event.goalRef)||event.observedNeed!==true)return reject("QUALIFICATION_REQUIRED");
      next.stage="QUALIFIED";break;
    case "SCOPE":
      if(state.stage!=="QUALIFIED"||!evidence(event.feasibilityRef)||!evidence(event.acceptanceRef))return reject("SCOPE_REQUIRED");
      next.stage="SCOPED";break;
    case "PROPOSE":
      if(state.stage!=="SCOPED"||event.ownerApproved!==true||!evidence(event.termsRef)||!Number.isSafeInteger(event.amountCents)||event.amountCents<0)return reject("TERMS_APPROVAL_REQUIRED");
      next.stage="PROPOSED";next.terms={ref:event.termsRef,amountCents:event.amountCents};break;
    case "BUYER_ACCEPT":
      if(state.stage!=="PROPOSED"||event.buyerConfirmed!==true||!state.terms||event.termsRef!==state.terms.ref)return reject("BUYER_DECISION_REQUIRED");
      next.stage="WON";break;
    case "ENGAGE":
      if(state.stage!=="WON"||event.ownerApproved!==true||!evidence(event.deliveryRef))return reject("ENGAGEMENT_APPROVAL_REQUIRED");
      next.stage="ENGAGED";break;
    case "REVIEW":
      if(state.stage!=="ENGAGED"||!evidence(event.outcomeRef))return reject("OUTCOME_EVIDENCE_REQUIRED");
      next.stage="REVIEWED";break;
    case "NO_DEAL":
      if(!["IDENTIFIED","QUALIFIED","SCOPED","PROPOSED"].includes(state.stage))return reject("INVALID_TRANSITION");
      next.stage="LOST";break;
    default:return reject("UNSUPPORTED_EVENT");
  }
  next.events.push({type:event.type,evidence:event.evidence,revision:next.revision});
  return {status:"SYNTHETIC_TRANSITION",state:next,executionAuthority:"NONE",send:false,synthetic:true};
}

export function reviewEconomics({revenueCents,directCostCents,deliveryMinutes}={}){
  const entries=[["revenueCents",revenueCents],["directCostCents",directCostCents],["deliveryMinutes",deliveryMinutes]];
  const missing=entries.filter(([,v])=>!Number.isSafeInteger(v)||v<0).map(([k])=>k);
  if(deliveryMinutes===0&&!missing.includes("deliveryMinutes"))missing.push("deliveryMinutes");
  if(missing.length)return {status:"INSUFFICIENT_EVIDENCE",missing,contributionCents:null,contributionPerHourCents:null,synthetic:true};
  const contribution=revenueCents-directCostCents;
  return {status:"FIXTURE_DIRECT_CONTRIBUTION",missing:[],contributionCents:contribution,contributionPerHourCents:Math.round(contribution/deliveryMinutes*60),synthetic:true,notNetProfit:true};
}
