import{s as Z,b as ot}from"../../../chunks/utils.js";import{c as st,o as B,s as lt,h as tt,v as s,b as n}from"../../../chunks/ssr.js";import"dequal";import{v as _t}from"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as it}from"../../../chunks/index2.js";import"clsx";import"chroma-js";import{r as et,Q as g,p as ct}from"../../../chunks/Query.js";import{p as nt,h as o}from"../../../chunks/profile.js";import{a as at}from"../../../chunks/index6.js";import{Q as R,D as ut,a as vt}from"../../../chunks/QueryViewer.js";import{C as yt,s as pt,h as mt}from"../../../chunks/DataTable.js";import{p as dt}from"../../../chunks/stores.js";import"ssf";import"@tidyjs/tidy";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"deep-object-diff";import"../../../chunks/index5.js";import"export-to-csv";import"prismjs";import"echarts";import"debounce";import"downloadjs";import{B as O}from"../../../chunks/BarChart.js";import"echarts-stat";const a={title:"Voter Counts"},Kt=st((r,U,G,gt)=>{let C,N,k,P;N=Z(dt,e=>C=e),P=Z(et,e=>k=e);let{data:D}=U,{data:j={},customFormattingSettings:M,__db:z,inputs:t}=D;ot(et,k="ce5c5fb532a072dbc434dcfdf4cdcd01",k);let K=_t(it(t));B(K.subscribe(e=>t=e)),lt(yt,{getCustomFormats:()=>M.customFormats||[]}),B(()=>g.emptyCache());const u=(e,rt)=>nt(z.query,e,{query_name:rt});pt(u),C.params;let V={initialData:void 0,initialError:void 0},v=o`select distinct state
from voter_analytics.mrt_voter_counts
order by state`,F=`select distinct state
from voter_analytics.mrt_voter_counts
order by state`,f,L=!1;const q=g.createReactive({callback:e=>{f=e},execFn:u},{id:"states",...V});q(F,{noResolve:v,...V}),globalThis[Symbol.for("states")]={get value(){return f}};let E={initialData:void 0,initialError:void 0},l=o`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,y=`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,b,X=!1;const T=g.createReactive({callback:e=>{b=e},execFn:u},{id:"voter_counts",...E});T(y,{noResolve:l,...E}),globalThis[Symbol.for("voter_counts")]={get value(){return b}};let H={initialData:void 0,initialError:void 0},_=o`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state, party
order by state, party`,p=`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state, party
order by state, party`,$,Y=!1;const I=g.createReactive({callback:e=>{$=e},execFn:u},{id:"state_totals",...H});I(p,{noResolve:_,...H}),globalThis[Symbol.for("state_totals")]={get value(){return $}};let Q={initialData:void 0,initialError:void 0},i=o`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by total_voters desc`,m=`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by total_voters desc`,h,J=!1;const S=g.createReactive({callback:e=>{h=e},execFn:u},{id:"party_totals",...Q});S(m,{noResolve:i,...Q}),globalThis[Symbol.for("party_totals")]={get value(){return h}};let A={initialData:void 0,initialError:void 0},c=o`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,d=`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,w,W=!1;const x=g.createReactive({callback:e=>{w=e},execFn:u},{id:"age_totals",...A});return x(d,{noResolve:c,...A}),globalThis[Symbol.for("age_totals")]={get value(){return w}},B(K.subscribe(e=>{l=o`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
order by state, age_group, party`,y=`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
order by state, age_group, party`,T(y,{noResolve:l}),_=o`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by state, party
order by state, party`,p=`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by state, party
order by state, party`,I(p,{noResolve:_}),i=o`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by party
order by total_voters desc`,m=`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by party
order by total_voters desc`,S(m,{noResolve:i}),c=o`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by age_group
order by age_group`,d=`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by age_group
order by age_group`,x(d,{noResolve:c})})),U.data===void 0&&G.data&&D!==void 0&&G.data(D),{data:j={},customFormattingSettings:M,__db:z}=D,ct.set(Object.keys(j).length>0),C.params,v=o`select distinct state
from voter_analytics.mrt_voter_counts
order by state`,F=`select distinct state
from voter_analytics.mrt_voter_counts
order by state`,v||!L?v||(q(F,{noResolve:v,...V}),L=!0):q(F,{noResolve:v}),l=o`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,y=`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,l||!X?l||(T(y,{noResolve:l,...E}),X=!0):T(y,{noResolve:l}),_=o`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state, party
order by state, party`,p=`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state, party
order by state, party`,_||!Y?_||(I(p,{noResolve:_,...H}),Y=!0):I(p,{noResolve:_}),i=o`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by total_voters desc`,m=`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by total_voters desc`,i||!J?i||(S(m,{noResolve:i,...Q}),J=!0):S(m,{noResolve:i}),c=o`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,d=`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,c||!W?c||(x(d,{noResolve:c,...A}),W=!0):x(d,{noResolve:c}),N(),P(),`  ${typeof a<"u"&&a.title&&a.hide_title!==!0?`<h1 class="title">${tt(a.title)}</h1>`:""} ${r.head+=`<!-- HEAD_svelte-2igo1p_START -->${typeof a<"u"&&a.title?`${r.title=`<title>${tt(a.title)}</title>`,""} <meta property="og:title"${n("content",a.og?.title??a.title,0)}> <meta name="twitter:title"${n("content",a.og?.title??a.title,0)}>`:` ${r.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@evidence_dev">${typeof a=="object"?`${a.description||a.og?.description?`<meta name="description"${n("content",a.description??a.og?.description,0)}> <meta property="og:description"${n("content",a.og?.description??a.description,0)}> <meta name="twitter:description"${n("content",a.og?.description??a.description,0)}>`:""} ${a.og?.image?`<meta property="og:image"${n("content",at(a.og?.image),0)}> <meta name="twitter:image"${n("content",at(a.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-2igo1p_END -->`,""}   <h1 class="markdown" id="voter-registration-counts" data-svelte-h="svelte-1hbwi21"><a href="#voter-registration-counts">Voter Registration Counts</a></h1> ${f?`${s(R,"QueryViewer").$$render(r,{queryID:"states",queryResult:f},{},{})}`:""} ${s(ut,"Dropdown").$$render(r,{name:"state_filter",data:f,value:"state",defaultValue:""},{},{default:()=>`${s(vt,"DropdownOption").$$render(r,{valueLabel:"All States",value:""},{},{})}`})} ${b?`${s(R,"QueryViewer").$$render(r,{queryID:"voter_counts",queryResult:b},{},{})}`:""} <h2 class="markdown" id="counts-by-state" data-svelte-h="svelte-19mh2n8"><a href="#counts-by-state">Counts by State</a></h2> ${$?`${s(R,"QueryViewer").$$render(r,{queryID:"state_totals",queryResult:$},{},{})}`:""} ${s(O,"BarChart").$$render(r,{data:$,x:"state",y:"total_voters",series:"party",sort:"true",sortOrder:"desc",title:"Registered Voters by State"},{},{})} <h2 class="markdown" id="counts-by-party" data-svelte-h="svelte-1yg7ffb"><a href="#counts-by-party">Counts by Party</a></h2> ${h?`${s(R,"QueryViewer").$$render(r,{queryID:"party_totals",queryResult:h},{},{})}`:""} ${s(O,"BarChart").$$render(r,{data:h,x:"party",y:"total_voters",title:"Registered Voters by Party"},{},{})} <h2 class="markdown" id="counts-by-age-group" data-svelte-h="svelte-1uez6ch"><a href="#counts-by-age-group">Counts by Age Group</a></h2> ${w?`${s(R,"QueryViewer").$$render(r,{queryID:"age_totals",queryResult:w},{},{})}`:""} ${s(O,"BarChart").$$render(r,{data:w,x:"age_group",y:"total_voters",title:"Registered Voters by Age Group"},{},{})} <h2 class="markdown" id="detailed-breakdown" data-svelte-h="svelte-1c31rk9"><a href="#detailed-breakdown">Detailed Breakdown</a></h2> ${s(mt,"DataTable").$$render(r,{data:b},{},{})}`});export{Kt as default};
