import { routeIntent } from "../catalog.mjs";
import { resolveSources, SYNTHETIC_SOURCES } from "../source-registry.mjs";
import { selectSkillStack } from "./skill-registry.mjs";
import { compileKnowledgePacket } from "./knowledge-runtime.mjs";
import { evaluateAccess } from "./policy-engine.mjs";
import { evidenceState } from "./evidence-runtime.mjs";

// Browser-safe composition of the actual reference modules; no Node crypto or external writes.
export function traceBrowserRequest({message,projectId="project-alpha",subjectId=null,missingSource=null}={}){
  if(typeof message!=="string"||message.length>500||typeof projectId!=="string"||!/^project-[a-z]+$/.test(projectId))return {status:"INVALID_INPUT",synthetic:true,executed:false};
  const route=routeIntent(message);
  if(route.status!=="ROUTED")return {status:route.status,synthetic:true,executed:false};
  const w=route.workflow;
  const registry={...SYNTHETIC_SOURCES};
  if(missingSource&&Object.hasOwn(registry,missingSource))registry[missingSource]={...registry[missingSource],available:false};
  const sources=resolveSources(w.sourceIds,registry);
  const policy=evaluateAccess({operation:w.operation==="WRITE_PROPOSAL"?"PROPOSE":"READ",sourceVerified:sources.missing.length===0});
  if(!policy.allowed)return {status:"SOURCE_BLOCKED",workflow:w.id,missing:sources.missing,policy,executed:false,synthetic:true};
  const candidateIds={study:["learning","course-material"],professional:["product-delivery","project-record"],research:["reliable-systems"],projects:["project-record"],training:["fitness"]}[w.id]??["reliable-systems"];
  const knowledge=compileKnowledgePacket({task:message,domain:w.id,projectId,subjectId:w.id==="study"?subjectId:null,candidateIds});
  return {status:"REFERENCE_PLAN_READY",workflow:w.id,operation:w.operation,steps:[...w.steps],skills:selectSkillStack(w.id),sources:sources.found,knowledge,policy,evidence:evidenceState({planned:true,sourceIds:sources.found.map(s=>s.id)}),synthetic:true,executed:false};
}
