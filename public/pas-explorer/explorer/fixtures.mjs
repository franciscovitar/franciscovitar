// Only invented, bounded examples. No real provider measurements or customer records.
export const SCENARIOS=[
{id:"professional",es:"Rediseñar una web",en:"Redesign a website",message:"Voy a remodelar una web para un cliente",missing:"delivery_method"},
{id:"study",es:"Preparar un parcial",en:"Prepare for an exam",message:"Preparar parcial de Redes con temario y material",subjectId:"networks",missing:"official_material"},
{id:"research",es:"Investigar alternativas",en:"Research alternatives",message:"Investigar alternativas de arquitectura con evidencia",missing:"external_references"},
{id:"training",es:"Registrar entrenamiento",en:"Record a workout",message:"Registrar lo que entrené en el gimnasio",missing:"training_store"},
{id:"unknown",es:"Pedido ambiguo",en:"Ambiguous request",message:"Ayudame",missing:null}
];
export function makeResearchFixture(mode="gap"){
 const facets=[{id:"cost",label:"Cost"},{id:"reliability",label:"Reliability"}],options=[{id:"keep",label:"Keep",kind:"NO_CHANGE"},{id:"reuse",label:"Reuse",kind:"REUSE"},{id:"build",label:"Build",kind:"BUILD"}];
 const sources=[{id:"bench",label:"Synthetic measurement",origin:"team-a",authority:"PRIMARY",current:true,checked:true},{id:"audit",label:"Synthetic independent check",origin:"team-b",authority:"PRIMARY",current:mode!=="stale",checked:true},{id:"opinion",label:"Synthetic opinion",origin:"blog",authority:"SECONDARY",current:true,checked:true}];
 const evidence=[];
 for(const o of options)for(const f of facets){if(mode==="gap"&&o.id==="build"&&f.id==="reliability")continue;evidence.push({id:"e-"+o.id+"-"+f.id,optionId:o.id,facetId:f.id,sourceId:f.id==="cost"?"bench":"audit",kind:"OBSERVATION",direction:"SUPPORT",locator:"fixture:"+o.id+"-"+f.id,claim:"Synthetic measurement"});}
 if(mode==="conflict")evidence.push({id:"e-contrary",optionId:"build",facetId:"reliability",sourceId:"bench",kind:"OBSERVATION",direction:"CONTRARY",locator:"fixture:stress-case",claim:"Contradictory synthetic stress result"});
 evidence.push({id:"e-opinion",optionId:"build",facetId:"cost",sourceId:"opinion",kind:"INFERENCE",direction:"SUPPORT",locator:"fixture:opinion",claim:"Unqualified opinion"});
 return {question:"Compare improvements to a fictional service",facets,options,sources,evidence};
}
export function makeToolFixture(kind="repo",budget=0,baseline=true){
 const required=["repo","browser","research"].includes(kind)?kind:"repo",task={id:"fixture-"+required,requires:[required],maxCostCents:budget,minQuality:80,risk:2,dataClass:"SYNTHETIC"};
 const common={available:true,targetBound:true,authorized:true,dataClasses:["SYNTHETIC"],evalTaskId:task.id,evidenceKind:"MATCHED_FIXTURE",independentVerification:true};
 const candidates=[
 {...common,id:"direct",capabilities:["research","repo"],costCents:0,quality:82,humanMinutes:8,reworkMinutes:9},
 {...common,id:"repo-specialist",capabilities:["repo"],costCents:0,quality:94,humanMinutes:4,reworkMinutes:3},
 {...common,id:"browser-specialist",capabilities:["browser"],costCents:0,quality:91,humanMinutes:6,reworkMinutes:4},
 {...common,id:"research-specialist",capabilities:["research"],costCents:0,quality:96,humanMinutes:12,reworkMinutes:4},
 {...common,id:"unknown-cost",capabilities:[required],costCents:null,quality:99,humanMinutes:2,reworkMinutes:1},
 {...common,id:"paid-option",capabilities:[required],costCents:100,quality:98,humanMinutes:3,reworkMinutes:2},
 {...common,id:"unverified-access",capabilities:[required],authorized:false,costCents:0,quality:99,humanMinutes:1,reworkMinutes:1}];
 return {task,candidates,baselineId:baseline?"direct":null};
}
export const makeTasks=()=>[
{id:"scope",owner:"HUMAN",status:"PENDING",dependsOn:[]},{id:"research",owner:"AI",status:"PENDING",dependsOn:[]},{id:"draft",owner:"AI",status:"PENDING",dependsOn:["scope","research"]},{id:"review",owner:"HUMAN",status:"PENDING",dependsOn:["draft"]},{id:"qa",owner:"AI",status:"PENDING",dependsOn:["draft"]},{id:"docs",owner:"AI",status:"PENDING",dependsOn:["research"]},{id:"closeout",owner:"AI",status:"PENDING",dependsOn:["review","qa","docs"]}];
export const commercialNext=stage=>({
IDENTIFIED:{type:"QUALIFY",observedNeed:true,goalRef:"fixture:goal"},
QUALIFIED:{type:"SCOPE",feasibilityRef:"fixture:feasibility",acceptanceRef:"fixture:scope"},
SCOPED:{type:"PROPOSE",ownerApproved:true,termsRef:"fixture:terms",amountCents:200000},
PROPOSED:{type:"BUYER_ACCEPT",buyerConfirmed:true,termsRef:"fixture:terms"},
WON:{type:"ENGAGE",ownerApproved:true,deliveryRef:"fixture:delivery"},
ENGAGED:{type:"REVIEW",outcomeRef:"fixture:outcome"}
}[stage]??null);
export function studyFixture(lang){
 const items=lang==="es"?[
 {id:"q1",facet:"routing",prompt:"¿Qué usa un router para decidir el próximo salto?",answerKey:"tabla de rutas",choices:["tabla de rutas","nombre de dominio","puerto de aplicación"]},
 {id:"q2",facet:"addressing",prompt:"¿Qué dirección identifica una interfaz en una red IP?",answerKey:"dirección ip",choices:["número de secuencia","dirección ip","nombre de archivo"]},
 {id:"q3",facet:"transport",prompt:"¿Qué permiten identificar los números de secuencia TCP?",answerKey:"orden de datos",choices:["potencia de señal","dirección del router","orden de datos"]}
 ]:[
 {id:"q1",facet:"routing",prompt:"What does a router use to select the next hop?",answerKey:"routing table",choices:["routing table","domain name","application port"]},
 {id:"q2",facet:"addressing",prompt:"What kind of address identifies an interface in an IP network?",answerKey:"ip address",choices:["sequence number","ip address","file name"]},
 {id:"q3",facet:"transport",prompt:"What do TCP sequence numbers help identify?",answerKey:"data order",choices:["signal strength","router address","data order"]}
 ];
 return {subjectId:"networks",facets:["routing","addressing","transport"],items};
}
