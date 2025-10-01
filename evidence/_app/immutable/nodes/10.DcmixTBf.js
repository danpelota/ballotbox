import{s as Mt,d as c,i as m,a as dt,b as d,c as b,h as St,e as D,f as vt,g as _t,j as $,k as M,l as kt,m as Ct,o as It,n as At,p as Lt,q as nt,r as Nt,t as Ut,u as Ot}from"../chunks/scheduler.C5a5hvA0.js";import{S as Qt,i as Vt,d as B,t as w,a as v,c as ct,m as G,b as P,e as K,g as ft}from"../chunks/index.FKm0evoM.js";import{D as jt,e as Bt,s as Gt,Q as mt,p as Pt,a as Tt,r as Rt,C as Kt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.kElcD--Z.js";import{w as Xt}from"../chunks/entry.-FwRyMk-.js";import{h as J,p as Yt}from"../chunks/button.YRA7BHb9.js";import{D as zt,Q as pt,a as Jt}from"../chunks/QueryViewer.9A6MrQ9A.js";import{p as Wt}from"../chunks/stores.CFaZwgXM.js";import{B as gt}from"../chunks/BarChart.D3j073Ot.js";function Zt(l){let r,a=p.title+"",e;return{c(){r=M("h1"),e=Ot(a),this.h()},l(u){r=D(u,"H1",{class:!0});var n=Nt(r);e=Ut(n,a),n.forEach(c),this.h()},h(){d(r,"class","title")},m(u,n){m(u,r,n),dt(r,e)},p:nt,d(u){u&&c(r)}}}function xt(l){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:nt,p:nt,d:nt}}function te(l){let r,a,e,u,n;return document.title=r=p.title,{c(){a=$(),e=M("meta"),u=$(),n=M("meta"),this.h()},l(o){a=b(o),e=D(o,"META",{property:!0,content:!0}),u=b(o),n=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f;d(e,"property","og:title"),d(e,"content",((o=p.og)==null?void 0:o.title)??p.title),d(n,"name","twitter:title"),d(n,"content",((f=p.og)==null?void 0:f.title)??p.title)},m(o,f){m(o,a,f),m(o,e,f),m(o,u,f),m(o,n,f)},p(o,f){f&0&&r!==(r=p.title)&&(document.title=r)},d(o){o&&(c(a),c(e),c(u),c(n))}}}function ee(l){var n,o;let r,a,e=(p.description||((n=p.og)==null?void 0:n.description))&&re(),u=((o=p.og)==null?void 0:o.image)&&ae();return{c(){e&&e.c(),r=$(),u&&u.c(),a=vt()},l(f){e&&e.l(f),r=b(f),u&&u.l(f),a=vt()},m(f,T){e&&e.m(f,T),m(f,r,T),u&&u.m(f,T),m(f,a,T)},p(f,T){var i,C;(p.description||(i=p.og)!=null&&i.description)&&e.p(f,T),(C=p.og)!=null&&C.image&&u.p(f,T)},d(f){f&&(c(r),c(a)),e&&e.d(f),u&&u.d(f)}}}function re(l){let r,a,e,u,n;return{c(){r=M("meta"),a=$(),e=M("meta"),u=$(),n=M("meta"),this.h()},l(o){r=D(o,"META",{name:!0,content:!0}),a=b(o),e=D(o,"META",{property:!0,content:!0}),u=b(o),n=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f,T;d(r,"name","description"),d(r,"content",p.description??((o=p.og)==null?void 0:o.description)),d(e,"property","og:description"),d(e,"content",((f=p.og)==null?void 0:f.description)??p.description),d(n,"name","twitter:description"),d(n,"content",((T=p.og)==null?void 0:T.description)??p.description)},m(o,f){m(o,r,f),m(o,a,f),m(o,e,f),m(o,u,f),m(o,n,f)},p:nt,d(o){o&&(c(r),c(a),c(e),c(u),c(n))}}}function ae(l){let r,a,e;return{c(){r=M("meta"),a=$(),e=M("meta"),this.h()},l(u){r=D(u,"META",{property:!0,content:!0}),a=b(u),e=D(u,"META",{name:!0,content:!0}),this.h()},h(){var u,n;d(r,"property","og:image"),d(r,"content",Tt((u=p.og)==null?void 0:u.image)),d(e,"name","twitter:image"),d(e,"content",Tt((n=p.og)==null?void 0:n.image))},m(u,n){m(u,r,n),m(u,a,n),m(u,e,n)},p:nt,d(u){u&&(c(r),c(a),c(e))}}}function qt(l){let r,a;return r=new pt({props:{queryID:"states",queryResult:l[0]}}),{c(){K(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,u){G(r,e,u),a=!0},p(e,u){const n={};u[0]&1&&(n.queryResult=e[0]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function oe(l){let r,a;return r=new Jt({props:{valueLabel:"All States",value:""}}),{c(){K(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,u){G(r,e,u),a=!0},p:nt,i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function Et(l){let r,a;return r=new pt({props:{queryID:"turnout_data",queryResult:l[1]}}),{c(){K(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,u){G(r,e,u),a=!0},p(e,u){const n={};u[0]&2&&(n.queryResult=e[1]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function Ft(l){let r,a;return r=new pt({props:{queryID:"state_turnout",queryResult:l[2]}}),{c(){K(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,u){G(r,e,u),a=!0},p(e,u){const n={};u[0]&4&&(n.queryResult=e[2]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function Ht(l){let r,a;return r=new pt({props:{queryID:"party_turnout",queryResult:l[3]}}),{c(){K(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,u){G(r,e,u),a=!0},p(e,u){const n={};u[0]&8&&(n.queryResult=e[3]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function Dt(l){let r,a;return r=new pt({props:{queryID:"age_turnout",queryResult:l[4]}}),{c(){K(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,u){G(r,e,u),a=!0},p(e,u){const n={};u[0]&16&&(n.queryResult=e[4]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function ue(l){let r,a,e,u,n,o,f='<a href="#voter-turnout-analysis">Voter Turnout Analysis</a>',T,i,C,j,S,R,x='<a href="#turnout-by-state">Turnout by State</a>',tt,X,A,L,q,et='<a href="#turnout-by-party">Turnout by Party</a>',rt,Y,N,U,E,at='<a href="#turnout-by-age-group">Turnout by Age Group</a>',ot,z,O,Q,F,ut='<a href="#detailed-breakdown">Detailed Breakdown</a>',st,V,lt,H=typeof p<"u"&&p.title&&p.hide_title!==!0&&Zt();function W(t,s){return typeof p<"u"&&p.title?te:xt}let Z=W()(l),I=typeof p=="object"&&ee(),y=l[0]&&qt(l);C=new zt({props:{name:"state_filter",data:l[0],value:"state",defaultValue:"",$$slots:{default:[oe]},$$scope:{ctx:l}}});let _=l[1]&&Et(l),g=l[2]&&Ft(l);A=new gt({props:{data:l[2],x:"state",y:"turnout_pct",title:"Turnout Rate by State",yFmt:"pct"}});let h=l[3]&&Ht(l);N=new gt({props:{data:l[3],x:"party",y:"turnout_pct",title:"Turnout Rate by Party",yFmt:"pct"}});let k=l[4]&&Dt(l);return O=new gt({props:{data:l[4],x:"age_group",y:"turnout_pct",xOrder:["<29","30-49","50-64","65+"],title:"Turnout Rate by Age Group",yFmt:"pct"}}),V=new jt({props:{data:l[1]}}),{c(){H&&H.c(),r=$(),Z.c(),a=M("meta"),e=M("meta"),I&&I.c(),u=vt(),n=$(),o=M("h1"),o.innerHTML=f,T=$(),y&&y.c(),i=$(),K(C.$$.fragment),j=$(),_&&_.c(),S=$(),R=M("h2"),R.innerHTML=x,tt=$(),g&&g.c(),X=$(),K(A.$$.fragment),L=$(),q=M("h2"),q.innerHTML=et,rt=$(),h&&h.c(),Y=$(),K(N.$$.fragment),U=$(),E=M("h2"),E.innerHTML=at,ot=$(),k&&k.c(),z=$(),K(O.$$.fragment),Q=$(),F=M("h2"),F.innerHTML=ut,st=$(),K(V.$$.fragment),this.h()},l(t){H&&H.l(t),r=b(t);const s=St("svelte-2igo1p",document.head);Z.l(s),a=D(s,"META",{name:!0,content:!0}),e=D(s,"META",{name:!0,content:!0}),I&&I.l(s),u=vt(),s.forEach(c),n=b(t),o=D(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),_t(o)!=="svelte-1scmd0t"&&(o.innerHTML=f),T=b(t),y&&y.l(t),i=b(t),P(C.$$.fragment,t),j=b(t),_&&_.l(t),S=b(t),R=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_t(R)!=="svelte-161d2ix"&&(R.innerHTML=x),tt=b(t),g&&g.l(t),X=b(t),P(A.$$.fragment,t),L=b(t),q=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_t(q)!=="svelte-1cb960q"&&(q.innerHTML=et),rt=b(t),h&&h.l(t),Y=b(t),P(N.$$.fragment,t),U=b(t),E=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_t(E)!=="svelte-90iqqe"&&(E.innerHTML=at),ot=b(t),k&&k.l(t),z=b(t),P(O.$$.fragment,t),Q=b(t),F=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_t(F)!=="svelte-1c31rk9"&&(F.innerHTML=ut),st=b(t),P(V.$$.fragment,t),this.h()},h(){d(a,"name","twitter:card"),d(a,"content","summary_large_image"),d(e,"name","twitter:site"),d(e,"content","@evidence_dev"),d(o,"class","markdown"),d(o,"id","voter-turnout-analysis"),d(R,"class","markdown"),d(R,"id","turnout-by-state"),d(q,"class","markdown"),d(q,"id","turnout-by-party"),d(E,"class","markdown"),d(E,"id","turnout-by-age-group"),d(F,"class","markdown"),d(F,"id","detailed-breakdown")},m(t,s){H&&H.m(t,s),m(t,r,s),Z.m(document.head,null),dt(document.head,a),dt(document.head,e),I&&I.m(document.head,null),dt(document.head,u),m(t,n,s),m(t,o,s),m(t,T,s),y&&y.m(t,s),m(t,i,s),G(C,t,s),m(t,j,s),_&&_.m(t,s),m(t,S,s),m(t,R,s),m(t,tt,s),g&&g.m(t,s),m(t,X,s),G(A,t,s),m(t,L,s),m(t,q,s),m(t,rt,s),h&&h.m(t,s),m(t,Y,s),G(N,t,s),m(t,U,s),m(t,E,s),m(t,ot,s),k&&k.m(t,s),m(t,z,s),G(O,t,s),m(t,Q,s),m(t,F,s),m(t,st,s),G(V,t,s),lt=!0},p(t,s){typeof p<"u"&&p.title&&p.hide_title!==!0&&H.p(t,s),Z.p(t,s),typeof p=="object"&&I.p(t,s),t[0]?y?(y.p(t,s),s[0]&1&&v(y,1)):(y=qt(t),y.c(),v(y,1),y.m(i.parentNode,i)):y&&(ft(),w(y,1,1,()=>{y=null}),ct());const yt={};s[0]&1&&(yt.data=t[0]),s[1]&2048&&(yt.$$scope={dirty:s,ctx:t}),C.$set(yt),t[1]?_?(_.p(t,s),s[0]&2&&v(_,1)):(_=Et(t),_.c(),v(_,1),_.m(S.parentNode,S)):_&&(ft(),w(_,1,1,()=>{_=null}),ct()),t[2]?g?(g.p(t,s),s[0]&4&&v(g,1)):(g=Ft(t),g.c(),v(g,1),g.m(X.parentNode,X)):g&&(ft(),w(g,1,1,()=>{g=null}),ct());const bt={};s[0]&4&&(bt.data=t[2]),A.$set(bt),t[3]?h?(h.p(t,s),s[0]&8&&v(h,1)):(h=Ht(t),h.c(),v(h,1),h.m(Y.parentNode,Y)):h&&(ft(),w(h,1,1,()=>{h=null}),ct());const $t={};s[0]&8&&($t.data=t[3]),N.$set($t),t[4]?k?(k.p(t,s),s[0]&16&&v(k,1)):(k=Dt(t),k.c(),v(k,1),k.m(z.parentNode,z)):k&&(ft(),w(k,1,1,()=>{k=null}),ct());const wt={};s[0]&16&&(wt.data=t[4]),O.$set(wt);const ht={};s[0]&2&&(ht.data=t[1]),V.$set(ht)},i(t){lt||(v(y),v(C.$$.fragment,t),v(_),v(g),v(A.$$.fragment,t),v(h),v(N.$$.fragment,t),v(k),v(O.$$.fragment,t),v(V.$$.fragment,t),lt=!0)},o(t){w(y),w(C.$$.fragment,t),w(_),w(g),w(A.$$.fragment,t),w(h),w(N.$$.fragment,t),w(k),w(O.$$.fragment,t),w(V.$$.fragment,t),lt=!1},d(t){t&&(c(r),c(n),c(o),c(T),c(i),c(j),c(S),c(R),c(tt),c(X),c(L),c(q),c(rt),c(Y),c(U),c(E),c(ot),c(z),c(Q),c(F),c(st)),H&&H.d(t),Z.d(t),c(a),c(e),I&&I.d(t),c(u),y&&y.d(t),B(C,t),_&&_.d(t),g&&g.d(t),B(A,t),h&&h.d(t),B(N,t),k&&k.d(t),B(O,t),B(V,t)}}}const p={title:"Voter Turnout"};function se(l,r,a){let e,u;kt(l,Wt,_=>a(28,e=_)),kt(l,Rt,_=>a(33,u=_));let{data:n}=r,{data:o={},customFormattingSettings:f,__db:T,inputs:i}=n;Ct(Rt,u="53bceb414748b25c468f9503e7e5d4b2",u);let C=Bt(Xt(i));It(C.subscribe(_=>a(7,i=_))),At(Kt,{getCustomFormats:()=>f.customFormats||[]});const j=(_,g)=>Yt(T.query,_,{query_name:g});Gt(j),e.params,Lt(()=>!0);let S={initialData:void 0,initialError:void 0},R=J`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`,x=`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`;o.states_data&&(o.states_data instanceof Error?S.initialError=o.states_data:S.initialData=o.states_data,o.states_columns&&(S.knownColumns=o.states_columns));let tt,X=!1;const A=mt.createReactive({callback:_=>{a(0,tt=_)},execFn:j},{id:"states",...S});A(x,{noResolve:R,...S}),globalThis[Symbol.for("states")]={get value(){return tt}};let L={initialData:void 0,initialError:void 0},q=J`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
order by state, age_group, party`,et=`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
order by state, age_group, party`;o.turnout_data_data&&(o.turnout_data_data instanceof Error?L.initialError=o.turnout_data_data:L.initialData=o.turnout_data_data,o.turnout_data_columns&&(L.knownColumns=o.turnout_data_columns));let rt,Y=!1;const N=mt.createReactive({callback:_=>{a(1,rt=_)},execFn:j},{id:"turnout_data",...L});N(et,{noResolve:q,...L}),globalThis[Symbol.for("turnout_data")]={get value(){return rt}};let U={initialData:void 0,initialError:void 0},E=J`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by state
order by turnout_pct desc`,at=`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by state
order by turnout_pct desc`;o.state_turnout_data&&(o.state_turnout_data instanceof Error?U.initialError=o.state_turnout_data:U.initialData=o.state_turnout_data,o.state_turnout_columns&&(U.knownColumns=o.state_turnout_columns));let ot,z=!1;const O=mt.createReactive({callback:_=>{a(2,ot=_)},execFn:j},{id:"state_turnout",...U});O(at,{noResolve:E,...U}),globalThis[Symbol.for("state_turnout")]={get value(){return ot}};let Q={initialData:void 0,initialError:void 0},F=J`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by party
order by turnout_pct desc`,ut=`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by party
order by turnout_pct desc`;o.party_turnout_data&&(o.party_turnout_data instanceof Error?Q.initialError=o.party_turnout_data:Q.initialData=o.party_turnout_data,o.party_turnout_columns&&(Q.knownColumns=o.party_turnout_columns));let st,V=!1;const lt=mt.createReactive({callback:_=>{a(3,st=_)},execFn:j},{id:"party_turnout",...Q});lt(ut,{noResolve:F,...Q}),globalThis[Symbol.for("party_turnout")]={get value(){return st}};let H={initialData:void 0,initialError:void 0},W=J`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by age_group
order by age_group`,it=`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by age_group
order by age_group`;o.age_turnout_data&&(o.age_turnout_data instanceof Error?H.initialError=o.age_turnout_data:H.initialData=o.age_turnout_data,o.age_turnout_columns&&(H.knownColumns=o.age_turnout_columns));let Z,I=!1;const y=mt.createReactive({callback:_=>{a(4,Z=_)},execFn:j},{id:"age_turnout",...H});return y(it,{noResolve:W,...H}),globalThis[Symbol.for("age_turnout")]={get value(){return Z}},l.$$set=_=>{"data"in _&&a(5,n=_.data)},l.$$.update=()=>{l.$$.dirty[0]&32&&a(6,{data:o={},customFormattingSettings:f,__db:T}=n,o),l.$$.dirty[0]&64&&Pt.set(Object.keys(o).length>0),l.$$.dirty[0]&268435456&&e.params,l.$$.dirty[0]&3840&&(R||!X?R||(A(x,{noResolve:R,...S}),a(11,X=!0)):A(x,{noResolve:R})),l.$$.dirty[0]&128&&a(13,q=J`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
order by state, age_group, party`),l.$$.dirty[0]&128&&a(14,et=`select
    state,
    age_group,
    party,
    total_voters,
    voted_count,
    turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
order by state, age_group, party`),l.$$.dirty[0]&61440&&(q||!Y?q||(N(et,{noResolve:q,...L}),a(15,Y=!0)):N(et,{noResolve:q})),l.$$.dirty[0]&128&&a(17,E=J`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by state
order by turnout_pct desc`),l.$$.dirty[0]&128&&a(18,at=`select
    state,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by state
order by turnout_pct desc`),l.$$.dirty[0]&983040&&(E||!z?E||(O(at,{noResolve:E,...U}),a(19,z=!0)):O(at,{noResolve:E})),l.$$.dirty[0]&128&&a(21,F=J`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by party
order by turnout_pct desc`),l.$$.dirty[0]&128&&a(22,ut=`select
    party,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by party
order by turnout_pct desc`),l.$$.dirty[0]&15728640&&(F||!V?F||(lt(ut,{noResolve:F,...Q}),a(23,V=!0)):lt(ut,{noResolve:F})),l.$$.dirty[0]&128&&a(25,W=J`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by age_group
order by age_group`),l.$$.dirty[0]&128&&a(26,it=`select
    age_group,
    sum(voted_count) as total_voted,
    sum(total_voters) as total_registered,
    sum(voted_count)::numeric / sum(total_voters) as turnout_pct
from voter_analytics.mrt_voter_turnout
where coalesce('${i.state_filter.value}', '') = '' or state = '${i.state_filter.value}'
group by age_group
order by age_group`),l.$$.dirty[0]&251658240&&(W||!I?W||(y(it,{noResolve:W,...H}),a(27,I=!0)):y(it,{noResolve:W}))},a(9,R=J`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`),a(10,x=`select distinct state
from voter_analytics.mrt_voter_turnout
order by state`),[tt,rt,ot,st,Z,n,o,i,S,R,x,X,L,q,et,Y,U,E,at,z,Q,F,ut,V,H,W,it,I,e]}class de extends Qt{constructor(r){super(),Vt(this,r,se,ue,Mt,{data:5},null,[-1,-1])}}export{de as component};
