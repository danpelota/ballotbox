import{s as ft,d as m,i as f,a as x,b as p,c as k,h as pt,e as F,f as J,g as Z,j as $,k as H,l as lt,m as yt,o as dt,n as ht,p as wt,q as U,r as gt,t as bt,u as vt}from"../chunks/scheduler.C5a5hvA0.js";import{S as kt,i as $t,d as G,t as M,a as v,c as tt,m as V,b as z,e as B,g as et}from"../chunks/index.FKm0evoM.js";import{D as nt,e as Tt,s as Et,Q as rt,p as Rt,a as ot,r as _t,C as qt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.fCrkPG0n.js";import{w as St}from"../chunks/entry.C-QHT0V0.js";import{h as Y,p as Mt}from"../chunks/button.CzwxGecW.js";import{D as Ft,Q as at,a as Ht}from"../chunks/QueryViewer.DSk3zPKI.js";import{p as Dt}from"../chunks/stores.Ds-wwWgJ.js";function Ct(o){let r,s=u.title+"",t;return{c(){r=H("h1"),t=vt(s),this.h()},l(i){r=F(i,"H1",{class:!0});var l=gt(r);t=bt(l,s),l.forEach(m),this.h()},h(){p(r,"class","title")},m(i,l){f(i,r,l),x(r,t)},p:U,d(i){i&&m(r)}}}function At(o){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:U,p:U,d:U}}function It(o){let r,s,t,i,l;return document.title=r=u.title,{c(){s=$(),t=H("meta"),i=$(),l=H("meta"),this.h()},l(a){s=k(a),t=F(a,"META",{property:!0,content:!0}),i=k(a),l=F(a,"META",{name:!0,content:!0}),this.h()},h(){var a,_;p(t,"property","og:title"),p(t,"content",((a=u.og)==null?void 0:a.title)??u.title),p(l,"name","twitter:title"),p(l,"content",((_=u.og)==null?void 0:_.title)??u.title)},m(a,_){f(a,s,_),f(a,t,_),f(a,i,_),f(a,l,_)},p(a,_){_&0&&r!==(r=u.title)&&(document.title=r)},d(a){a&&(m(s),m(t),m(i),m(l))}}}function Lt(o){var l,a;let r,s,t=(u.description||((l=u.og)==null?void 0:l.description))&&Nt(),i=((a=u.og)==null?void 0:a.image)&&Qt();return{c(){t&&t.c(),r=$(),i&&i.c(),s=J()},l(_){t&&t.l(_),r=k(_),i&&i.l(_),s=J()},m(_,w){t&&t.m(_,w),f(_,r,w),i&&i.m(_,w),f(_,s,w)},p(_,w){var h,q;(u.description||(h=u.og)!=null&&h.description)&&t.p(_,w),(q=u.og)!=null&&q.image&&i.p(_,w)},d(_){_&&(m(r),m(s)),t&&t.d(_),i&&i.d(_)}}}function Nt(o){let r,s,t,i,l;return{c(){r=H("meta"),s=$(),t=H("meta"),i=$(),l=H("meta"),this.h()},l(a){r=F(a,"META",{name:!0,content:!0}),s=k(a),t=F(a,"META",{property:!0,content:!0}),i=k(a),l=F(a,"META",{name:!0,content:!0}),this.h()},h(){var a,_,w;p(r,"name","description"),p(r,"content",u.description??((a=u.og)==null?void 0:a.description)),p(t,"property","og:description"),p(t,"content",((_=u.og)==null?void 0:_.description)??u.description),p(l,"name","twitter:description"),p(l,"content",((w=u.og)==null?void 0:w.description)??u.description)},m(a,_){f(a,r,_),f(a,s,_),f(a,t,_),f(a,i,_),f(a,l,_)},p:U,d(a){a&&(m(r),m(s),m(t),m(i),m(l))}}}function Qt(o){let r,s,t;return{c(){r=H("meta"),s=$(),t=H("meta"),this.h()},l(i){r=F(i,"META",{property:!0,content:!0}),s=k(i),t=F(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;p(r,"property","og:image"),p(r,"content",ot((i=u.og)==null?void 0:i.image)),p(t,"name","twitter:image"),p(t,"content",ot((l=u.og)==null?void 0:l.image))},m(i,l){f(i,r,l),f(i,s,l),f(i,t,l)},p:U,d(i){i&&(m(r),m(s),m(t))}}}function ct(o){let r,s;return r=new at({props:{queryID:"states_list",queryResult:o[0]}}),{c(){B(r.$$.fragment)},l(t){z(r.$$.fragment,t)},m(t,i){V(r,t,i),s=!0},p(t,i){const l={};i&1&&(l.queryResult=t[0]),r.$set(l)},i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){M(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function jt(o){let r,s;return r=new Ht({props:{valueLabel:"All States",value:"%"}}),{c(){B(r.$$.fragment)},l(t){z(r.$$.fragment,t)},m(t,i){V(r,t,i),s=!0},p:U,i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){M(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function mt(o){let r,s;return r=new at({props:{queryID:"party_switchers",queryResult:o[1]}}),{c(){B(r.$$.fragment)},l(t){z(r.$$.fragment,t)},m(t,i){V(r,t,i),s=!0},p(t,i){const l={};i&2&&(l.queryResult=t[1]),r.$set(l)},i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){M(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function ut(o){let r,s;return r=new at({props:{queryID:"switch_summary",queryResult:o[2]}}),{c(){B(r.$$.fragment)},l(t){z(r.$$.fragment,t)},m(t,i){V(r,t,i),s=!0},p(t,i){const l={};i&4&&(l.queryResult=t[2]),r.$set(l)},i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){M(r.$$.fragment,t),s=!1},d(t){G(r,t)}}}function Ot(o){let r,s,t,i,l,a,_='<a href="#recent-party-switchers">Recent Party Switchers</a>',w,h,q,I,E,R,T,K='<a href="#switch-summary">Switch Summary</a>',Q,D,C,g,j='<a href="#all-party-switchers">All Party Switchers</a>',O,A,P,b=typeof u<"u"&&u.title&&u.hide_title!==!0&&Ct();function L(e,n){return typeof u<"u"&&u.title?It:At}let N=L()(o),S=typeof u=="object"&&Lt(),y=o[0]&&ct(o);q=new Ft({props:{data:o[0],name:"state_filter",value:"state",title:"Filter by State",$$slots:{default:[jt]},$$scope:{ctx:o}}});let c=o[1]&&mt(o),d=o[2]&&ut(o);return D=new nt({props:{data:o[2]}}),A=new nt({props:{data:o[1]}}),{c(){b&&b.c(),r=$(),N.c(),s=H("meta"),t=H("meta"),S&&S.c(),i=J(),l=$(),a=H("h1"),a.innerHTML=_,w=$(),y&&y.c(),h=$(),B(q.$$.fragment),I=$(),c&&c.c(),E=$(),d&&d.c(),R=$(),T=H("h2"),T.innerHTML=K,Q=$(),B(D.$$.fragment),C=$(),g=H("h2"),g.innerHTML=j,O=$(),B(A.$$.fragment),this.h()},l(e){b&&b.l(e),r=k(e);const n=pt("svelte-2igo1p",document.head);N.l(n),s=F(n,"META",{name:!0,content:!0}),t=F(n,"META",{name:!0,content:!0}),S&&S.l(n),i=J(),n.forEach(m),l=k(e),a=F(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),Z(a)!=="svelte-14ammt9"&&(a.innerHTML=_),w=k(e),y&&y.l(e),h=k(e),z(q.$$.fragment,e),I=k(e),c&&c.l(e),E=k(e),d&&d.l(e),R=k(e),T=F(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(T)!=="svelte-14lxn38"&&(T.innerHTML=K),Q=k(e),z(D.$$.fragment,e),C=k(e),g=F(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Z(g)!=="svelte-7dzgj9"&&(g.innerHTML=j),O=k(e),z(A.$$.fragment,e),this.h()},h(){p(s,"name","twitter:card"),p(s,"content","summary_large_image"),p(t,"name","twitter:site"),p(t,"content","@evidence_dev"),p(a,"class","markdown"),p(a,"id","recent-party-switchers"),p(T,"class","markdown"),p(T,"id","switch-summary"),p(g,"class","markdown"),p(g,"id","all-party-switchers")},m(e,n){b&&b.m(e,n),f(e,r,n),N.m(document.head,null),x(document.head,s),x(document.head,t),S&&S.m(document.head,null),x(document.head,i),f(e,l,n),f(e,a,n),f(e,w,n),y&&y.m(e,n),f(e,h,n),V(q,e,n),f(e,I,n),c&&c.m(e,n),f(e,E,n),d&&d.m(e,n),f(e,R,n),f(e,T,n),f(e,Q,n),V(D,e,n),f(e,C,n),f(e,g,n),f(e,O,n),V(A,e,n),P=!0},p(e,[n]){typeof u<"u"&&u.title&&u.hide_title!==!0&&b.p(e,n),N.p(e,n),typeof u=="object"&&S.p(e,n),e[0]?y?(y.p(e,n),n&1&&v(y,1)):(y=ct(e),y.c(),v(y,1),y.m(h.parentNode,h)):y&&(et(),M(y,1,1,()=>{y=null}),tt());const W={};n&1&&(W.data=e[0]),n&1073741824&&(W.$$scope={dirty:n,ctx:e}),q.$set(W),e[1]?c?(c.p(e,n),n&2&&v(c,1)):(c=mt(e),c.c(),v(c,1),c.m(E.parentNode,E)):c&&(et(),M(c,1,1,()=>{c=null}),tt()),e[2]?d?(d.p(e,n),n&4&&v(d,1)):(d=ut(e),d.c(),v(d,1),d.m(R.parentNode,R)):d&&(et(),M(d,1,1,()=>{d=null}),tt());const st={};n&4&&(st.data=e[2]),D.$set(st);const it={};n&2&&(it.data=e[1]),A.$set(it)},i(e){P||(v(y),v(q.$$.fragment,e),v(c),v(d),v(D.$$.fragment,e),v(A.$$.fragment,e),P=!0)},o(e){M(y),M(q.$$.fragment,e),M(c),M(d),M(D.$$.fragment,e),M(A.$$.fragment,e),P=!1},d(e){e&&(m(r),m(l),m(a),m(w),m(h),m(I),m(E),m(R),m(T),m(Q),m(C),m(g),m(O)),b&&b.d(e),N.d(e),m(s),m(t),S&&S.d(e),m(i),y&&y.d(e),G(q,e),c&&c.d(e),d&&d.d(e),G(D,e),G(A,e)}}}const u={title:"Party Switchers"};function Pt(o,r,s){let t,i;lt(o,Dt,c=>s(18,t=c)),lt(o,_t,c=>s(23,i=c));let{data:l}=r,{data:a={},customFormattingSettings:_,__db:w,inputs:h}=l;yt(_t,i="da2c76cc7e3f14dfe44f0c90218b75a5",i);let q=Tt(St(h));dt(q.subscribe(c=>s(5,h=c))),ht(qt,{getCustomFormats:()=>_.customFormats||[]});const I=(c,d)=>Mt(w.query,c,{query_name:d});Et(I),t.params,wt(()=>!0);let E={initialData:void 0,initialError:void 0},R=Y`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`,T=`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`;a.states_list_data&&(a.states_list_data instanceof Error?E.initialError=a.states_list_data:E.initialData=a.states_list_data,a.states_list_columns&&(E.knownColumns=a.states_list_columns));let K,Q=!1;const D=rt.createReactive({callback:c=>{s(0,K=c)},execFn:I},{id:"states_list",...E});D(T,{noResolve:R,...E}),globalThis[Symbol.for("states_list")]={get value(){return K}};let C={initialData:void 0,initialError:void 0},g=Y`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
order by switched_at desc`,j=`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
order by switched_at desc`;a.party_switchers_data&&(a.party_switchers_data instanceof Error?C.initialError=a.party_switchers_data:C.initialData=a.party_switchers_data,a.party_switchers_columns&&(C.knownColumns=a.party_switchers_columns));let O,A=!1;const P=rt.createReactive({callback:c=>{s(1,O=c)},execFn:I},{id:"party_switchers",...C});P(j,{noResolve:g,...C}),globalThis[Symbol.for("party_switchers")]={get value(){return O}};let b={initialData:void 0,initialError:void 0},L=Y`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
group by old_party, new_party
order by num_voters desc`,X=`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
group by old_party, new_party
order by num_voters desc`;a.switch_summary_data&&(a.switch_summary_data instanceof Error?b.initialError=a.switch_summary_data:b.initialData=a.switch_summary_data,a.switch_summary_columns&&(b.knownColumns=a.switch_summary_columns));let N,S=!1;const y=rt.createReactive({callback:c=>{s(2,N=c)},execFn:I},{id:"switch_summary",...b});return y(X,{noResolve:L,...b}),globalThis[Symbol.for("switch_summary")]={get value(){return N}},o.$$set=c=>{"data"in c&&s(3,l=c.data)},o.$$.update=()=>{o.$$.dirty&8&&s(4,{data:a={},customFormattingSettings:_,__db:w}=l,a),o.$$.dirty&16&&Rt.set(Object.keys(a).length>0),o.$$.dirty&262144&&t.params,o.$$.dirty&960&&(R||!Q?R||(D(T,{noResolve:R,...E}),s(9,Q=!0)):D(T,{noResolve:R})),o.$$.dirty&32&&s(11,g=Y`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
order by switched_at desc`),o.$$.dirty&32&&s(12,j=`select
    id,
    first_name,
    last_name,
    state,
    old_party,
    new_party,
    switched_at
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
order by switched_at desc`),o.$$.dirty&15360&&(g||!A?g||(P(j,{noResolve:g,...C}),s(13,A=!0)):P(j,{noResolve:g})),o.$$.dirty&32&&s(15,L=Y`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
group by old_party, new_party
order by num_voters desc`),o.$$.dirty&32&&s(16,X=`select
    old_party || ' → ' || new_party as party_change,
    count(*) as num_voters
from voter_analytics.mrt_party_registration_changes
where state like '${h.state_filter.value}'
group by old_party, new_party
order by num_voters desc`),o.$$.dirty&245760&&(L||!S?L||(y(X,{noResolve:L,...b}),s(17,S=!0)):y(X,{noResolve:L}))},s(7,R=Y`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`),s(8,T=`select distinct state
from voter_analytics.mrt_party_registration_changes
order by state`),[K,O,N,l,a,h,E,R,T,Q,C,g,j,A,b,L,X,S,t]}class Yt extends kt{constructor(r){super(),$t(this,r,Pt,Ot,ft,{data:3})}}export{Yt as component};
