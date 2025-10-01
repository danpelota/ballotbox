import{s as Mt,d as c,i as m,a as yt,b as y,c as b,h as Ft,e as D,f as vt,g as ut,j as $,k as M,l as kt,m as St,o as It,n as At,p as Lt,q as nt,r as Nt,t as Vt,u as Ut}from"../chunks/scheduler.C5a5hvA0.js";import{S as Ot,i as Qt,d as B,t as w,a as v,c as ct,m as G,b as P,e as z,g as ft}from"../chunks/index.FKm0evoM.js";import{D as jt,e as Bt,s as Gt,Q as mt,p as Pt,a as Tt,r as Rt,C as zt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.kElcD--Z.js";import{w as Kt}from"../chunks/entry.-FwRyMk-.js";import{h as J,p as Xt}from"../chunks/button.YRA7BHb9.js";import{D as Yt,Q as pt,a as Jt}from"../chunks/QueryViewer.9A6MrQ9A.js";import{p as Wt}from"../chunks/stores.CFaZwgXM.js";import{B as gt}from"../chunks/BarChart.D3j073Ot.js";function Zt(i){let r,a=p.title+"",e;return{c(){r=M("h1"),e=Ut(a),this.h()},l(s){r=D(s,"H1",{class:!0});var n=Nt(r);e=Vt(n,a),n.forEach(c),this.h()},h(){y(r,"class","title")},m(s,n){m(s,r,n),yt(r,e)},p:nt,d(s){s&&c(r)}}}function xt(i){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:nt,p:nt,d:nt}}function te(i){let r,a,e,s,n;return document.title=r=p.title,{c(){a=$(),e=M("meta"),s=$(),n=M("meta"),this.h()},l(o){a=b(o),e=D(o,"META",{property:!0,content:!0}),s=b(o),n=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f;y(e,"property","og:title"),y(e,"content",((o=p.og)==null?void 0:o.title)??p.title),y(n,"name","twitter:title"),y(n,"content",((f=p.og)==null?void 0:f.title)??p.title)},m(o,f){m(o,a,f),m(o,e,f),m(o,s,f),m(o,n,f)},p(o,f){f&0&&r!==(r=p.title)&&(document.title=r)},d(o){o&&(c(a),c(e),c(s),c(n))}}}function ee(i){var n,o;let r,a,e=(p.description||((n=p.og)==null?void 0:n.description))&&re(),s=((o=p.og)==null?void 0:o.image)&&ae();return{c(){e&&e.c(),r=$(),s&&s.c(),a=vt()},l(f){e&&e.l(f),r=b(f),s&&s.l(f),a=vt()},m(f,T){e&&e.m(f,T),m(f,r,T),s&&s.m(f,T),m(f,a,T)},p(f,T){var _,S;(p.description||(_=p.og)!=null&&_.description)&&e.p(f,T),(S=p.og)!=null&&S.image&&s.p(f,T)},d(f){f&&(c(r),c(a)),e&&e.d(f),s&&s.d(f)}}}function re(i){let r,a,e,s,n;return{c(){r=M("meta"),a=$(),e=M("meta"),s=$(),n=M("meta"),this.h()},l(o){r=D(o,"META",{name:!0,content:!0}),a=b(o),e=D(o,"META",{property:!0,content:!0}),s=b(o),n=D(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f,T;y(r,"name","description"),y(r,"content",p.description??((o=p.og)==null?void 0:o.description)),y(e,"property","og:description"),y(e,"content",((f=p.og)==null?void 0:f.description)??p.description),y(n,"name","twitter:description"),y(n,"content",((T=p.og)==null?void 0:T.description)??p.description)},m(o,f){m(o,r,f),m(o,a,f),m(o,e,f),m(o,s,f),m(o,n,f)},p:nt,d(o){o&&(c(r),c(a),c(e),c(s),c(n))}}}function ae(i){let r,a,e;return{c(){r=M("meta"),a=$(),e=M("meta"),this.h()},l(s){r=D(s,"META",{property:!0,content:!0}),a=b(s),e=D(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;y(r,"property","og:image"),y(r,"content",Tt((s=p.og)==null?void 0:s.image)),y(e,"name","twitter:image"),y(e,"content",Tt((n=p.og)==null?void 0:n.image))},m(s,n){m(s,r,n),m(s,a,n),m(s,e,n)},p:nt,d(s){s&&(c(r),c(a),c(e))}}}function Et(i){let r,a;return r=new pt({props:{queryID:"states",queryResult:i[0]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,s){G(r,e,s),a=!0},p(e,s){const n={};s[0]&1&&(n.queryResult=e[0]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function oe(i){let r,a;return r=new Jt({props:{valueLabel:"All States",value:""}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,s){G(r,e,s),a=!0},p:nt,i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function qt(i){let r,a;return r=new pt({props:{queryID:"voter_counts",queryResult:i[1]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,s){G(r,e,s),a=!0},p(e,s){const n={};s[0]&2&&(n.queryResult=e[1]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function Ht(i){let r,a;return r=new pt({props:{queryID:"state_totals",queryResult:i[2]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,s){G(r,e,s),a=!0},p(e,s){const n={};s[0]&4&&(n.queryResult=e[2]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function Ct(i){let r,a;return r=new pt({props:{queryID:"party_totals",queryResult:i[3]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,s){G(r,e,s),a=!0},p(e,s){const n={};s[0]&8&&(n.queryResult=e[3]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function Dt(i){let r,a;return r=new pt({props:{queryID:"age_totals",queryResult:i[4]}}),{c(){z(r.$$.fragment)},l(e){P(r.$$.fragment,e)},m(e,s){G(r,e,s),a=!0},p(e,s){const n={};s[0]&16&&(n.queryResult=e[4]),r.$set(n)},i(e){a||(v(r.$$.fragment,e),a=!0)},o(e){w(r.$$.fragment,e),a=!1},d(e){B(r,e)}}}function se(i){let r,a,e,s,n,o,f='<a href="#voter-registration-counts">Voter Registration Counts</a>',T,_,S,j,F,R,x='<a href="#counts-by-state">Counts by State</a>',tt,K,A,L,E,et='<a href="#counts-by-party">Counts by Party</a>',rt,X,N,V,q,at='<a href="#counts-by-age-group">Counts by Age Group</a>',ot,Y,U,O,H,st='<a href="#detailed-breakdown">Detailed Breakdown</a>',lt,Q,it,C=typeof p<"u"&&p.title&&p.hide_title!==!0&&Zt();function W(t,l){return typeof p<"u"&&p.title?te:xt}let Z=W()(i),I=typeof p=="object"&&ee(),d=i[0]&&Et(i);S=new Yt({props:{name:"state_filter",data:i[0],value:"state",defaultValue:"",$$slots:{default:[oe]},$$scope:{ctx:i}}});let u=i[1]&&qt(i),g=i[2]&&Ht(i);A=new gt({props:{data:i[2],x:"state",y:"total_voters",series:"party",sort:"true",sortOrder:"desc",title:"Registered Voters by State"}});let h=i[3]&&Ct(i);N=new gt({props:{data:i[3],x:"party",y:"total_voters",title:"Registered Voters by Party"}});let k=i[4]&&Dt(i);return U=new gt({props:{data:i[4],x:"age_group",y:"total_voters",title:"Registered Voters by Age Group"}}),Q=new jt({props:{data:i[1]}}),{c(){C&&C.c(),r=$(),Z.c(),a=M("meta"),e=M("meta"),I&&I.c(),s=vt(),n=$(),o=M("h1"),o.innerHTML=f,T=$(),d&&d.c(),_=$(),z(S.$$.fragment),j=$(),u&&u.c(),F=$(),R=M("h2"),R.innerHTML=x,tt=$(),g&&g.c(),K=$(),z(A.$$.fragment),L=$(),E=M("h2"),E.innerHTML=et,rt=$(),h&&h.c(),X=$(),z(N.$$.fragment),V=$(),q=M("h2"),q.innerHTML=at,ot=$(),k&&k.c(),Y=$(),z(U.$$.fragment),O=$(),H=M("h2"),H.innerHTML=st,lt=$(),z(Q.$$.fragment),this.h()},l(t){C&&C.l(t),r=b(t);const l=Ft("svelte-2igo1p",document.head);Z.l(l),a=D(l,"META",{name:!0,content:!0}),e=D(l,"META",{name:!0,content:!0}),I&&I.l(l),s=vt(),l.forEach(c),n=b(t),o=D(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),ut(o)!=="svelte-1hbwi21"&&(o.innerHTML=f),T=b(t),d&&d.l(t),_=b(t),P(S.$$.fragment,t),j=b(t),u&&u.l(t),F=b(t),R=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ut(R)!=="svelte-19mh2n8"&&(R.innerHTML=x),tt=b(t),g&&g.l(t),K=b(t),P(A.$$.fragment,t),L=b(t),E=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ut(E)!=="svelte-1yg7ffb"&&(E.innerHTML=et),rt=b(t),h&&h.l(t),X=b(t),P(N.$$.fragment,t),V=b(t),q=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ut(q)!=="svelte-1uez6ch"&&(q.innerHTML=at),ot=b(t),k&&k.l(t),Y=b(t),P(U.$$.fragment,t),O=b(t),H=D(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),ut(H)!=="svelte-1c31rk9"&&(H.innerHTML=st),lt=b(t),P(Q.$$.fragment,t),this.h()},h(){y(a,"name","twitter:card"),y(a,"content","summary_large_image"),y(e,"name","twitter:site"),y(e,"content","@evidence_dev"),y(o,"class","markdown"),y(o,"id","voter-registration-counts"),y(R,"class","markdown"),y(R,"id","counts-by-state"),y(E,"class","markdown"),y(E,"id","counts-by-party"),y(q,"class","markdown"),y(q,"id","counts-by-age-group"),y(H,"class","markdown"),y(H,"id","detailed-breakdown")},m(t,l){C&&C.m(t,l),m(t,r,l),Z.m(document.head,null),yt(document.head,a),yt(document.head,e),I&&I.m(document.head,null),yt(document.head,s),m(t,n,l),m(t,o,l),m(t,T,l),d&&d.m(t,l),m(t,_,l),G(S,t,l),m(t,j,l),u&&u.m(t,l),m(t,F,l),m(t,R,l),m(t,tt,l),g&&g.m(t,l),m(t,K,l),G(A,t,l),m(t,L,l),m(t,E,l),m(t,rt,l),h&&h.m(t,l),m(t,X,l),G(N,t,l),m(t,V,l),m(t,q,l),m(t,ot,l),k&&k.m(t,l),m(t,Y,l),G(U,t,l),m(t,O,l),m(t,H,l),m(t,lt,l),G(Q,t,l),it=!0},p(t,l){typeof p<"u"&&p.title&&p.hide_title!==!0&&C.p(t,l),Z.p(t,l),typeof p=="object"&&I.p(t,l),t[0]?d?(d.p(t,l),l[0]&1&&v(d,1)):(d=Et(t),d.c(),v(d,1),d.m(_.parentNode,_)):d&&(ft(),w(d,1,1,()=>{d=null}),ct());const dt={};l[0]&1&&(dt.data=t[0]),l[1]&2048&&(dt.$$scope={dirty:l,ctx:t}),S.$set(dt),t[1]?u?(u.p(t,l),l[0]&2&&v(u,1)):(u=qt(t),u.c(),v(u,1),u.m(F.parentNode,F)):u&&(ft(),w(u,1,1,()=>{u=null}),ct()),t[2]?g?(g.p(t,l),l[0]&4&&v(g,1)):(g=Ht(t),g.c(),v(g,1),g.m(K.parentNode,K)):g&&(ft(),w(g,1,1,()=>{g=null}),ct());const bt={};l[0]&4&&(bt.data=t[2]),A.$set(bt),t[3]?h?(h.p(t,l),l[0]&8&&v(h,1)):(h=Ct(t),h.c(),v(h,1),h.m(X.parentNode,X)):h&&(ft(),w(h,1,1,()=>{h=null}),ct());const $t={};l[0]&8&&($t.data=t[3]),N.$set($t),t[4]?k?(k.p(t,l),l[0]&16&&v(k,1)):(k=Dt(t),k.c(),v(k,1),k.m(Y.parentNode,Y)):k&&(ft(),w(k,1,1,()=>{k=null}),ct());const wt={};l[0]&16&&(wt.data=t[4]),U.$set(wt);const ht={};l[0]&2&&(ht.data=t[1]),Q.$set(ht)},i(t){it||(v(d),v(S.$$.fragment,t),v(u),v(g),v(A.$$.fragment,t),v(h),v(N.$$.fragment,t),v(k),v(U.$$.fragment,t),v(Q.$$.fragment,t),it=!0)},o(t){w(d),w(S.$$.fragment,t),w(u),w(g),w(A.$$.fragment,t),w(h),w(N.$$.fragment,t),w(k),w(U.$$.fragment,t),w(Q.$$.fragment,t),it=!1},d(t){t&&(c(r),c(n),c(o),c(T),c(_),c(j),c(F),c(R),c(tt),c(K),c(L),c(E),c(rt),c(X),c(V),c(q),c(ot),c(Y),c(O),c(H),c(lt)),C&&C.d(t),Z.d(t),c(a),c(e),I&&I.d(t),c(s),d&&d.d(t),B(S,t),u&&u.d(t),g&&g.d(t),B(A,t),h&&h.d(t),B(N,t),k&&k.d(t),B(U,t),B(Q,t)}}}const p={title:"Voter Counts"};function le(i,r,a){let e,s;kt(i,Wt,u=>a(28,e=u)),kt(i,Rt,u=>a(33,s=u));let{data:n}=r,{data:o={},customFormattingSettings:f,__db:T,inputs:_}=n;St(Rt,s="ce5c5fb532a072dbc434dcfdf4cdcd01",s);let S=Bt(Kt(_));It(S.subscribe(u=>a(7,_=u))),At(zt,{getCustomFormats:()=>f.customFormats||[]});const j=(u,g)=>Xt(T.query,u,{query_name:g});Gt(j),e.params,Lt(()=>!0);let F={initialData:void 0,initialError:void 0},R=J`select distinct state
from voter_analytics.mrt_voter_counts
order by state`,x=`select distinct state
from voter_analytics.mrt_voter_counts
order by state`;o.states_data&&(o.states_data instanceof Error?F.initialError=o.states_data:F.initialData=o.states_data,o.states_columns&&(F.knownColumns=o.states_columns));let tt,K=!1;const A=mt.createReactive({callback:u=>{a(0,tt=u)},execFn:j},{id:"states",...F});A(x,{noResolve:R,...F}),globalThis[Symbol.for("states")]={get value(){return tt}};let L={initialData:void 0,initialError:void 0},E=J`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
order by state, age_group, party`,et=`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
order by state, age_group, party`;o.voter_counts_data&&(o.voter_counts_data instanceof Error?L.initialError=o.voter_counts_data:L.initialData=o.voter_counts_data,o.voter_counts_columns&&(L.knownColumns=o.voter_counts_columns));let rt,X=!1;const N=mt.createReactive({callback:u=>{a(1,rt=u)},execFn:j},{id:"voter_counts",...L});N(et,{noResolve:E,...L}),globalThis[Symbol.for("voter_counts")]={get value(){return rt}};let V={initialData:void 0,initialError:void 0},q=J`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by state, party
order by state, party`,at=`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by state, party
order by state, party`;o.state_totals_data&&(o.state_totals_data instanceof Error?V.initialError=o.state_totals_data:V.initialData=o.state_totals_data,o.state_totals_columns&&(V.knownColumns=o.state_totals_columns));let ot,Y=!1;const U=mt.createReactive({callback:u=>{a(2,ot=u)},execFn:j},{id:"state_totals",...V});U(at,{noResolve:q,...V}),globalThis[Symbol.for("state_totals")]={get value(){return ot}};let O={initialData:void 0,initialError:void 0},H=J`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by party
order by total_voters desc`,st=`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by party
order by total_voters desc`;o.party_totals_data&&(o.party_totals_data instanceof Error?O.initialError=o.party_totals_data:O.initialData=o.party_totals_data,o.party_totals_columns&&(O.knownColumns=o.party_totals_columns));let lt,Q=!1;const it=mt.createReactive({callback:u=>{a(3,lt=u)},execFn:j},{id:"party_totals",...O});it(st,{noResolve:H,...O}),globalThis[Symbol.for("party_totals")]={get value(){return lt}};let C={initialData:void 0,initialError:void 0},W=J`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by age_group
order by age_group`,_t=`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by age_group
order by age_group`;o.age_totals_data&&(o.age_totals_data instanceof Error?C.initialError=o.age_totals_data:C.initialData=o.age_totals_data,o.age_totals_columns&&(C.knownColumns=o.age_totals_columns));let Z,I=!1;const d=mt.createReactive({callback:u=>{a(4,Z=u)},execFn:j},{id:"age_totals",...C});return d(_t,{noResolve:W,...C}),globalThis[Symbol.for("age_totals")]={get value(){return Z}},i.$$set=u=>{"data"in u&&a(5,n=u.data)},i.$$.update=()=>{i.$$.dirty[0]&32&&a(6,{data:o={},customFormattingSettings:f,__db:T}=n,o),i.$$.dirty[0]&64&&Pt.set(Object.keys(o).length>0),i.$$.dirty[0]&268435456&&e.params,i.$$.dirty[0]&3840&&(R||!K?R||(A(x,{noResolve:R,...F}),a(11,K=!0)):A(x,{noResolve:R})),i.$$.dirty[0]&128&&a(13,E=J`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
order by state, age_group, party`),i.$$.dirty[0]&128&&a(14,et=`select
    state,
    age_group,
    party,
    voter_count
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
order by state, age_group, party`),i.$$.dirty[0]&61440&&(E||!X?E||(N(et,{noResolve:E,...L}),a(15,X=!0)):N(et,{noResolve:E})),i.$$.dirty[0]&128&&a(17,q=J`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by state, party
order by state, party`),i.$$.dirty[0]&128&&a(18,at=`select
    state,
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by state, party
order by state, party`),i.$$.dirty[0]&983040&&(q||!Y?q||(U(at,{noResolve:q,...V}),a(19,Y=!0)):U(at,{noResolve:q})),i.$$.dirty[0]&128&&a(21,H=J`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by party
order by total_voters desc`),i.$$.dirty[0]&128&&a(22,st=`select
    party,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by party
order by total_voters desc`),i.$$.dirty[0]&15728640&&(H||!Q?H||(it(st,{noResolve:H,...O}),a(23,Q=!0)):it(st,{noResolve:H})),i.$$.dirty[0]&128&&a(25,W=J`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by age_group
order by age_group`),i.$$.dirty[0]&128&&a(26,_t=`select
    age_group,
    sum(voter_count) as total_voters
from voter_analytics.mrt_voter_counts
where coalesce('${_.state_filter.value}', '') = '' or state = '${_.state_filter.value}'
group by age_group
order by age_group`),i.$$.dirty[0]&251658240&&(W||!I?W||(d(_t,{noResolve:W,...C}),a(27,I=!0)):d(_t,{noResolve:W}))},a(9,R=J`select distinct state
from voter_analytics.mrt_voter_counts
order by state`),a(10,x=`select distinct state
from voter_analytics.mrt_voter_counts
order by state`),[tt,rt,ot,lt,Z,n,o,_,F,R,x,K,L,E,et,X,V,q,at,Y,O,H,st,Q,C,W,_t,I,e]}class ye extends Ot{constructor(r){super(),Qt(this,r,le,se,Mt,{data:5},null,[-1,-1])}}export{ye as component};
