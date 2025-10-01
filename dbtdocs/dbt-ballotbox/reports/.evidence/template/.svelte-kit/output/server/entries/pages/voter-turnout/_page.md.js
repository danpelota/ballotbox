import{s as Z,b as at}from"../../../chunks/utils.js";import{c as st,o as B,s as ut,h as tt,v as s,b as i}from"../../../chunks/ssr.js";import"dequal";import{v as lt}from"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as _t}from"../../../chunks/index2.js";import"clsx";import"chroma-js";import{r as et,Q as g,p as nt}from"../../../chunks/Query.js";import{p as it,h as a}from"../../../chunks/profile.js";import{a as rt}from"../../../chunks/index6.js";import{Q as R,D as ct,a as vt}from"../../../chunks/QueryViewer.js";import{C as mt,s as dt,h as pt}from"../../../chunks/DataTable.js";import{p as yt}from"../../../chunks/stores.js";import"ssf";import"@tidyjs/tidy";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"deep-object-diff";import"../../../chunks/index5.js";import"export-to-csv";import"prismjs";import"echarts";import"debounce";import"downloadjs";import{B as O}from"../../../chunks/BarChart.js";import"echarts-stat";const r={title:"Voter Turnout"},Lt=st((o,U,G,gt)=>{let k,N,q,P;N=Z(yt,e=>k=e),P=Z(et,e=>q=e);let{data:T}=U,{data:j={},customFormattingSettings:M,__db:K,inputs:t}=T;at(et,q="53bceb414748b25c468f9503e7e5d4b2",q);let L=lt(_t(t));B(L.subscribe(e=>t=e)),ut(mt,{getCustomFormats:()=>M.customFormats||[]}),B(()=>g.emptyCache());const c=(e,ot)=>it(K.query,e,{query_name:ot});dt(c),k.params;let E={initialData:void 0,initialError:void 0},v=a`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`,F=`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`,f,X=!1;const C=g.createReactive({callback:e=>{f=e},execFn:c},{id:"states",...E});C(F,{noResolve:v,...E}),globalThis[Symbol.for("states")]={get value(){return f}};let H={initialData:void 0,initialError:void 0},u=a`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,m=`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,b,Y=!1;const D=g.createReactive({callback:e=>{b=e},execFn:c},{id:"turnout_data",...H});D(m,{noResolve:u,...H}),globalThis[Symbol.for("turnout_data")]={get value(){return b}};let Q={initialData:void 0,initialError:void 0},l=a`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state
order by turnout_pct desc`,d=`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state
order by turnout_pct desc`,$,z=!1;const x=g.createReactive({callback:e=>{$=e},execFn:c},{id:"state_turnout",...Q});x(d,{noResolve:l,...Q}),globalThis[Symbol.for("state_turnout")]={get value(){return $}};let V={initialData:void 0,initialError:void 0},_=a`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by turnout_pct desc`,p=`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by turnout_pct desc`,h,J=!1;const I=g.createReactive({callback:e=>{h=e},execFn:c},{id:"party_turnout",...V});I(p,{noResolve:_,...V}),globalThis[Symbol.for("party_turnout")]={get value(){return h}};let A={initialData:void 0,initialError:void 0},n=a`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,y=`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,w,W=!1;const S=g.createReactive({callback:e=>{w=e},execFn:c},{id:"age_turnout",...A});return S(y,{noResolve:n,...A}),globalThis[Symbol.for("age_turnout")]={get value(){return w}},B(L.subscribe(e=>{u=a`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
order by state, age_group, party`,m=`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
order by state, age_group, party`,D(m,{noResolve:u}),l=a`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by state
order by turnout_pct desc`,d=`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by state
order by turnout_pct desc`,x(d,{noResolve:l}),_=a`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by party
order by turnout_pct desc`,p=`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by party
order by turnout_pct desc`,I(p,{noResolve:_}),n=a`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by age_group
order by age_group`,y=`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${e.state_filter.value}', '') = '' or state = '${e.state_filter.value}'
group by age_group
order by age_group`,S(y,{noResolve:n})})),U.data===void 0&&G.data&&T!==void 0&&G.data(T),{data:j={},customFormattingSettings:M,__db:K}=T,nt.set(Object.keys(j).length>0),k.params,v=a`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`,F=`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`,v||!X?v||(C(F,{noResolve:v,...E}),X=!0):C(F,{noResolve:v}),u=a`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,m=`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
order by state, age_group, party`,u||!Y?u||(D(m,{noResolve:u,...H}),Y=!0):D(m,{noResolve:u}),l=a`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state
order by turnout_pct desc`,d=`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by state
order by turnout_pct desc`,l||!z?l||(x(d,{noResolve:l,...Q}),z=!0):x(d,{noResolve:l}),_=a`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by turnout_pct desc`,p=`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by party
order by turnout_pct desc`,_||!J?_||(I(p,{noResolve:_,...V}),J=!0):I(p,{noResolve:_}),n=a`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,y=`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${t.state_filter.value}', '') = '' or state = '${t.state_filter.value}'
group by age_group
order by age_group`,n||!W?n||(S(y,{noResolve:n,...A}),W=!0):S(y,{noResolve:n}),N(),P(),`  ${typeof r<"u"&&r.title&&r.hide_title!==!0?`<h1 class="title">${tt(r.title)}</h1>`:""} ${o.head+=`<!-- HEAD_svelte-2igo1p_START -->${typeof r<"u"&&r.title?`${o.title=`<title>${tt(r.title)}</title>`,""} <meta property="og:title"${i("content",r.og?.title??r.title,0)}> <meta name="twitter:title"${i("content",r.og?.title??r.title,0)}>`:` ${o.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@evidence_dev">${typeof r=="object"?`${r.description||r.og?.description?`<meta name="description"${i("content",r.description??r.og?.description,0)}> <meta property="og:description"${i("content",r.og?.description??r.description,0)}> <meta name="twitter:description"${i("content",r.og?.description??r.description,0)}>`:""} ${r.og?.image?`<meta property="og:image"${i("content",rt(r.og?.image),0)}> <meta name="twitter:image"${i("content",rt(r.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-2igo1p_END -->`,""}   <h1 class="markdown" id="voter-turnout-analysis" data-svelte-h="svelte-1scmd0t"><a href="#voter-turnout-analysis">Voter Turnout Analysis</a></h1> ${f?`${s(R,"QueryViewer").$$render(o,{queryID:"states",queryResult:f},{},{})}`:""} ${s(ct,"Dropdown").$$render(o,{name:"state_filter",data:f,value:"state",defaultValue:""},{},{default:()=>`${s(vt,"DropdownOption").$$render(o,{valueLabel:"All States",value:""},{},{})}`})} ${b?`${s(R,"QueryViewer").$$render(o,{queryID:"turnout_data",queryResult:b},{},{})}`:""} <h2 class="markdown" id="turnout-by-state" data-svelte-h="svelte-161d2ix"><a href="#turnout-by-state">Turnout by State</a></h2> ${$?`${s(R,"QueryViewer").$$render(o,{queryID:"state_turnout",queryResult:$},{},{})}`:""} ${s(O,"BarChart").$$render(o,{data:$,x:"state",y:"turnout_pct",title:"Turnout Rate by State",yFmt:"pct"},{},{})} <h2 class="markdown" id="turnout-by-party" data-svelte-h="svelte-1cb960q"><a href="#turnout-by-party">Turnout by Party</a></h2> ${h?`${s(R,"QueryViewer").$$render(o,{queryID:"party_turnout",queryResult:h},{},{})}`:""} ${s(O,"BarChart").$$render(o,{data:h,x:"party",y:"turnout_pct",title:"Turnout Rate by Party",yFmt:"pct"},{},{})} <h2 class="markdown" id="turnout-by-age-group" data-svelte-h="svelte-90iqqe"><a href="#turnout-by-age-group">Turnout by Age Group</a></h2> ${w?`${s(R,"QueryViewer").$$render(o,{queryID:"age_turnout",queryResult:w},{},{})}`:""} ${s(O,"BarChart").$$render(o,{data:w,x:"age_group",y:"turnout_pct",xOrder:["<29","30-49","50-64","65+"],title:"Turnout Rate by Age Group",yFmt:"pct"},{},{})} <h2 class="markdown" id="detailed-breakdown" data-svelte-h="svelte-1c31rk9"><a href="#detailed-breakdown">Detailed Breakdown</a></h2> ${s(pt,"DataTable").$$render(o,{data:b},{},{})}`});export{Lt as default};
