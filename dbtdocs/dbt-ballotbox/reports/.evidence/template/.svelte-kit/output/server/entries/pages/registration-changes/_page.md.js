import{s as V,b as B}from"../../../chunks/utils.js";import{c as K,o as T,s as L,h as N,v as _,b as l}from"../../../chunks/ssr.js";import"dequal";import{v as X}from"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as Y}from"../../../chunks/index2.js";import"clsx";import"chroma-js";import{r as j,Q as f,p as J}from"../../../chunks/Query.js";import{p as W,h as o}from"../../../chunks/profile.js";import{a as G}from"../../../chunks/index6.js";import{Q as F,D as Z,a as tt}from"../../../chunks/QueryViewer.js";import{C as et,s as at,h as M}from"../../../chunks/DataTable.js";import{p as rt}from"../../../chunks/stores.js";import"ssf";import"@tidyjs/tidy";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"deep-object-diff";import"../../../chunks/index5.js";import"export-to-csv";import"prismjs";import"echarts";import"debounce";import"downloadjs";import"echarts-stat";const t={title:"Party Switchers"},Qt=K((a,I,x,st)=>{let b,E,$,H;E=V(rt,e=>b=e),H=V(j,e=>$=e);let{data:h}=I,{data:Q={},customFormattingSettings:q,__db:C,inputs:r}=h;B(j,$="da2c76cc7e3f14dfe44f0c90218b75a5",$);let A=X(Y(r));T(A.subscribe(e=>r=e)),L(et,{getCustomFormats:()=>q.customFormats||[]}),T(()=>f.emptyCache());const u=(e,z)=>W(C.query,e,{query_name:z});at(u),b.params;let R={initialData:void 0,initialError:void 0},n=o`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`,w=`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`,y,O=!1;const k=f.createReactive({callback:e=>{y=e},execFn:u},{id:"states_list",...R});k(w,{noResolve:n,...R}),globalThis[Symbol.for("states_list")]={get value(){return y}};let D={initialData:void 0,initialError:void 0},s=o`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
order by switched_at desc`,c=`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
order by switched_at desc`,p,P=!1;const v=f.createReactive({callback:e=>{p=e},execFn:u},{id:"party_switchers",...D});v(c,{noResolve:s,...D}),globalThis[Symbol.for("party_switchers")]={get value(){return p}};let S={initialData:void 0,initialError:void 0},i=o`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
group by old_party, new_party
order by num_voters desc`,m=`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
group by old_party, new_party
order by num_voters desc`,d,U=!1;const g=f.createReactive({callback:e=>{d=e},execFn:u},{id:"switch_summary",...S});return g(m,{noResolve:i,...S}),globalThis[Symbol.for("switch_summary")]={get value(){return d}},T(A.subscribe(e=>{s=o`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${e.state_filter.value}'
order by switched_at desc`,c=`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${e.state_filter.value}'
order by switched_at desc`,v(c,{noResolve:s}),i=o`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${e.state_filter.value}'
group by old_party, new_party
order by num_voters desc`,m=`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${e.state_filter.value}'
group by old_party, new_party
order by num_voters desc`,g(m,{noResolve:i})})),I.data===void 0&&x.data&&h!==void 0&&x.data(h),{data:Q={},customFormattingSettings:q,__db:C}=h,J.set(Object.keys(Q).length>0),b.params,n=o`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`,w=`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`,n||!O?n||(k(w,{noResolve:n,...R}),O=!0):k(w,{noResolve:n}),s=o`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
order by switched_at desc`,c=`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
order by switched_at desc`,s||!P?s||(v(c,{noResolve:s,...D}),P=!0):v(c,{noResolve:s}),i=o`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
group by old_party, new_party
order by num_voters desc`,m=`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${r.state_filter.value}'
group by old_party, new_party
order by num_voters desc`,i||!U?i||(g(m,{noResolve:i,...S}),U=!0):g(m,{noResolve:i}),E(),H(),`  ${typeof t<"u"&&t.title&&t.hide_title!==!0?`<h1 class="title">${N(t.title)}</h1>`:""} ${a.head+=`<!-- HEAD_svelte-2igo1p_START -->${typeof t<"u"&&t.title?`${a.title=`<title>${N(t.title)}</title>`,""} <meta property="og:title"${l("content",t.og?.title??t.title,0)}> <meta name="twitter:title"${l("content",t.og?.title??t.title,0)}>`:` ${a.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@evidence_dev">${typeof t=="object"?`${t.description||t.og?.description?`<meta name="description"${l("content",t.description??t.og?.description,0)}> <meta property="og:description"${l("content",t.og?.description??t.description,0)}> <meta name="twitter:description"${l("content",t.og?.description??t.description,0)}>`:""} ${t.og?.image?`<meta property="og:image"${l("content",G(t.og?.image),0)}> <meta name="twitter:image"${l("content",G(t.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-2igo1p_END -->`,""}   <h1 class="markdown" id="recent-party-switchers" data-svelte-h="svelte-14ammt9"><a href="#recent-party-switchers">Recent Party Switchers</a></h1> ${y?`${_(F,"QueryViewer").$$render(a,{queryID:"states_list",queryResult:y},{},{})}`:""} ${_(Z,"Dropdown").$$render(a,{data:y,name:"state_filter",value:"state",title:"Filter by State"},{},{default:()=>`${_(tt,"DropdownOption").$$render(a,{valueLabel:"All States",value:"%"},{},{})}`})} ${p?`${_(F,"QueryViewer").$$render(a,{queryID:"party_switchers",queryResult:p},{},{})}`:""} ${d?`${_(F,"QueryViewer").$$render(a,{queryID:"switch_summary",queryResult:d},{},{})}`:""} <h2 class="markdown" id="switch-summary" data-svelte-h="svelte-14lxn38"><a href="#switch-summary">Switch Summary</a></h2> ${_(M,"DataTable").$$render(a,{data:d},{},{})} <h2 class="markdown" id="all-party-switchers" data-svelte-h="svelte-7dzgj9"><a href="#all-party-switchers">All Party Switchers</a></h2> ${_(M,"DataTable").$$render(a,{data:p},{},{})}`});export{Qt as default};
