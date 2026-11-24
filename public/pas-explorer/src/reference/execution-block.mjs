// Pure, browser-safe synthetic execution planner; no agents, writes or network calls.
export function planBlock({tasks,globalBlock=false}={}) {
  const fail=reason=>({status:"INVALID_PLAN",reason,ai:[],human:[],blocked:[],execute:false});
  if(!Array.isArray(tasks)||tasks.length===0||tasks.length>100||typeof globalBlock!=="boolean")return fail("invalid input");
  const byId=new Map();
  for(const t of tasks){
    if(!t||typeof t.id!=="string"||!/^[a-z][a-z0-9-]{0,63}$/.test(t.id)||byId.has(t.id)||!["AI","HUMAN"].includes(t.owner)||!["PENDING","DONE","BLOCKED"].includes(t.status)||!Array.isArray(t.dependsOn)||new Set(t.dependsOn).size!==t.dependsOn.length)return fail("invalid task");
    if(t.status==="DONE"&&(typeof t.evidence!=="string"||!t.evidence.startsWith("fixture:")||t.evidence.length<=8||t.evidence.length>200))return fail("missing synthetic completion evidence");
    byId.set(t.id,t);
  }
  for(const t of tasks)if(t.dependsOn.some(id=>!byId.has(id)))return fail("missing dependency");
  const visiting=new Set(),visited=new Set();
  function visit(id){
    if(visiting.has(id))return false;
    if(visited.has(id))return true;
    visiting.add(id);
    for(const dep of byId.get(id).dependsOn)if(!visit(dep))return false;
    visiting.delete(id);visited.add(id);return true;
  }
  for(const t of tasks)if(!visit(t.id))return fail("dependency cycle");
  for(const t of tasks)if(t.status==="DONE"&&t.dependsOn.some(id=>byId.get(id).status!=="DONE"))return fail("inconsistent completion");
  const remaining=tasks.filter(t=>t.status!=="DONE");
  const result={status:"COMPLETE",ai:[],human:[],blocked:[],completed:tasks.filter(t=>t.status==="DONE").map(t=>({id:t.id,evidence:t.evidence})),execute:false,synthetic:true};
  if(globalBlock){result.status="GLOBAL_STOP";result.blocked=remaining.map(t=>({id:t.id,reason:"global boundary"}));return result;}
  for(const t of remaining){
    if(t.status==="BLOCKED"){result.blocked.push({id:t.id,reason:"task-local blocker"});continue;}
    const pending=t.dependsOn.filter(id=>byId.get(id).status!=="DONE");
    if(pending.length){result.blocked.push({id:t.id,reason:"dependencies",dependsOn:pending});continue;}
    (t.owner==="AI"?result.ai:result.human).push(t.id);
  }
  result.status=result.ai.length?"AI_WORK_AVAILABLE":result.human.length?"HUMAN_INPUT_REQUIRED":remaining.length?"BLOCKED":"COMPLETE";
  return result;
}
export function applyCheckpoint({tasks,expectedRevision,revision,event,globalBlock=false}={}){
  const reject=status=>({status,execute:false});
  if(!Number.isSafeInteger(revision)||revision<1||revision>=Number.MAX_SAFE_INTEGER||expectedRevision!==revision)return reject("REVISION_CONFLICT");
  const plan=planBlock({tasks,globalBlock});
  if(plan.status==="INVALID_PLAN"||plan.status==="GLOBAL_STOP")return reject(plan.status);
  if(!event||typeof event.id!=="string"||!["DONE","BLOCKED"].includes(event.status))return reject("INVALID_EVENT");
  const lane=plan.ai.includes(event.id)?"AI":plan.human.includes(event.id)?"HUMAN":null;
  if(!lane)return reject("TASK_NOT_READY");
  if(event.actor!==lane)return reject("ACTOR_MISMATCH");
  if(lane==="HUMAN"&&event.status==="DONE"&&event.approved!==true)return reject("HUMAN_APPROVAL_REQUIRED");
  const next=tasks.map(t=>t.id===event.id?{...t,status:event.status,...(event.status==="DONE"?{evidence:event.evidence}:{})}:{...t,dependsOn:[...t.dependsOn]});
  const checkpoint=planBlock({tasks:next});
  if(checkpoint.status==="INVALID_PLAN")return reject("INVALID_EVIDENCE");
  return {status:"SYNTHETIC_CHECKPOINT",revision:revision+1,tasks:next,checkpoint,execute:false,synthetic:true};
}

export function reconcileTask({tasks,revision,expectedRevision,taskId,approved,evidence,globalBlock=false}={}){
  const reject=status=>({status,execute:false,synthetic:true});
  if(!Number.isSafeInteger(revision)||revision<1||revision>=Number.MAX_SAFE_INTEGER||expectedRevision!==revision)return reject("REVISION_CONFLICT");
  const plan=planBlock({tasks,globalBlock});
  if(plan.status==="GLOBAL_STOP"||plan.status==="INVALID_PLAN")return reject(plan.status);
  if(approved!==true||typeof evidence!=="string"||!/^fixture:[a-z0-9][a-z0-9-]{0,79}$/.test(evidence))return reject("RECONCILIATION_REQUIRED");
  if(!tasks.some(t=>t.id===taskId&&t.status==="BLOCKED"))return reject("NOT_TASK_LOCAL_BLOCK");
  const next=tasks.map(t=>t.id===taskId?{...t,status:"PENDING",reconciliationEvidence:evidence,dependsOn:[...t.dependsOn]}:{...t,dependsOn:[...t.dependsOn]});
  return {status:"SYNTHETIC_RECONCILED",revision:revision+1,tasks:next,checkpoint:planBlock({tasks:next}),execute:false,synthetic:true};
}
