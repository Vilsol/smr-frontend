import{S as Ht,i as Nt,d as G,s as _t,v as Ot,F as xt,G as kt,P as lt,y as wt,I as Dt,J as at,b as j,e as x,f as Q,K as Gt,L as rt,j as p,k as I,g as k,h as D,N as _,m as S,O as ct,n as P,r as F,t as Y,q as St,R as ft,u as O,x as qt,Q as g,T as Rt,U as yt,p as Vt,M as K,V as At,W as z,X as J,Y as W,a7 as bt,Z as Ft,a8 as Yt,a9 as zt,aa as Jt}from"../chunks/vendor.fvIxxvlM.js";import{k as Et}from"../chunks/graphql.olkSQdQZ.js";import{m as Z}from"../chunks/markdown.x7OnUiHB.js";import{M as Bt}from"../chunks/MetaDescriptors.cADo0NaG.js";import{p as tt}from"../chunks/formatting._lqNW8ln.js";const y="src/routes/sml-versions/+page.svelte";function Tt(i,t,e){const n=i.slice();return n[16]=t[e],n}function et(i){let t,e,n,o,s;function c(d){i[8](d)}let f={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};i[5]!==void 0&&(f.settings=i[5]),n=new lt({props:f,$$inline:!0}),wt.push(()=>Dt(n,"settings",c)),n.$on("page",i[9]),n.$on("amount",i[10]);const a={c:function(){t=x("div"),e=x("div"),at(n.$$.fragment),this.h()},l:function(u){t=k(u,"DIV",{class:!0});var m=D(t);e=k(m,"DIV",{});var r=D(e);rt(n.$$.fragment,r),r.forEach(p),m.forEach(p),this.h()},h:function(){S(e,y,50,4,1298),_(t,"class","mb-5 ml-auto flex justify-end"),S(t,y,49,2,1250)},m:function(u,m){P(u,t,m),g(t,e),ct(n,e,null),s=!0},p:function(u,m){const r={};!o&&m&32&&(o=!0,r.settings=u[5],Rt(()=>o=!1)),n.$set(r)},i:function(u){s||(F(n.$$.fragment,u),s=!0)},o:function(u){Y(n.$$.fragment,u),s=!1},d:function(u){u&&p(t),ft(n)}};return G("SvelteRegisterBlock",{block:a,id:et.name,type:"if",source:"(42:0) {#if totalVersions}",ctx:i}),a}function Ct(i){let t,e,n,o,s="Version",c,f,a="Stability",d,u,m="Game Version",r,V,$="Release Date",h,v,q="",H,B,R=yt(i[3].data.getSMLVersions.sml_versions),E=[];for(let C=0;C<R.length;C+=1)E[C]=it(Tt(i,R,C));const A={c:function(){t=x("table"),e=x("thead"),n=x("tr"),o=x("th"),o.textContent=s,c=j(),f=x("th"),f.textContent=a,d=j(),u=x("th"),u.textContent=m,r=j(),V=x("th"),V.textContent=$,h=j(),v=x("th"),v.innerHTML=q,H=j(),B=x("tbody");for(let l=0;l<E.length;l+=1)E[l].c();this.h()},l:function(l){t=k(l,"TABLE",{class:!0});var L=D(t);e=k(L,"THEAD",{});var b=D(e);n=k(b,"TR",{});var M=D(n);o=k(M,"TH",{"data-svelte-h":!0}),K(o)!=="svelte-1mhdjxa"&&(o.textContent=s),c=I(M),f=k(M,"TH",{"data-svelte-h":!0}),K(f)!=="svelte-rpc5kf"&&(f.textContent=a),d=I(M),u=k(M,"TH",{"data-svelte-h":!0}),K(u)!=="svelte-1fnu9t0"&&(u.textContent=m),r=I(M),V=k(M,"TH",{"data-svelte-h":!0}),K(V)!=="svelte-pi2tux"&&(V.textContent=$),h=I(M),v=k(M,"TH",{"data-svelte-h":!0}),K(v)!=="svelte-qfgexu"&&(v.innerHTML=q),M.forEach(p),b.forEach(p),H=I(L),B=k(L,"TBODY",{});var X=D(B);for(let w=0;w<E.length;w+=1)E[w].l(X);X.forEach(p),L.forEach(p),this.h()},h:function(){S(o,y,71,10,1895),S(f,y,72,10,1922),S(u,y,73,10,1951),S(V,y,74,10,1983),S(v,y,75,10,2015),S(n,y,70,8,1880),S(e,y,69,6,1864),S(B,y,78,6,2076),_(t,"class","max-w-full table table-hover"),S(t,y,68,4,1813)},m:function(l,L){P(l,t,L),g(t,e),g(e,n),g(n,o),g(n,c),g(n,f),g(n,d),g(n,u),g(n,r),g(n,V),g(n,h),g(n,v),g(t,H),g(t,B);for(let b=0;b<E.length;b+=1)E[b]&&E[b].m(B,null)},p:function(l,L){if(L&152){R=yt(l[3].data.getSMLVersions.sml_versions);let b;for(b=0;b<R.length;b+=1){const M=Tt(l,R,b);E[b]?E[b].p(M,L):(E[b]=it(M),E[b].c(),E[b].m(B,null))}for(;b<E.length;b+=1)E[b].d(1);E.length=R.length}},d:function(l){l&&p(t),At(E,l)}};return G("SvelteRegisterBlock",{block:A,id:Ct.name,type:"else",source:"(61:2) {:else}",ctx:i}),A}function Lt(i){let t,e,n=i[3].error.message+"",o;const s={c:function(){t=x("section"),e=z("Oh no... "),o=z(n),this.h()},l:function(f){t=k(f,"SECTION",{class:!0});var a=D(t);e=J(a,"Oh no... "),o=J(a,n),a.forEach(p),this.h()},h:function(){_(t,"class","p-4"),S(t,y,66,4,1733)},m:function(f,a){P(f,t,a),g(t,e),g(t,o)},p:function(f,a){a&8&&n!==(n=f[3].error.message+"")&&W(o,n)},d:function(f){f&&p(t)}};return G("SvelteRegisterBlock",{block:s,id:Lt.name,type:"if",source:"(59:28) ",ctx:i}),s}function Mt(i){let t,e="Loading...";const n={c:function(){t=x("section"),t.textContent=e,this.h()},l:function(s){t=k(s,"SECTION",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-1e06hs8"&&(t.textContent=e),this.h()},h:function(){_(t,"class","p-4"),S(t,y,64,4,1658)},m:function(s,c){P(s,t,c)},p:O,d:function(s){s&&p(t)}};return G("SvelteRegisterBlock",{block:n,id:Mt.name,type:"if",source:"(57:2) {#if $versions.fetching}",ctx:i}),n}function nt(i){let t,e,n,o,s={ctx:i,current:null,token:null,hasCatch:!1,pending:It,then:jt,catch:Pt,value:19};bt(n=Z(i[16].changelog),s);const c={c:function(){t=x("tr"),e=x("td"),s.block.c(),o=j(),this.h()},l:function(a){t=k(a,"TR",{});var d=D(t);e=k(d,"TD",{colspan:!0,class:!0});var u=D(e);s.block.l(u),u.forEach(p),o=I(d),d.forEach(p),this.h()},h:function(){_(e,"colspan",5),_(e,"class","p-2 markdown-content"),S(e,y,94,14,2698),S(t,y,93,12,2679)},m:function(a,d){P(a,t,d),g(t,e),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,g(t,o)},p:function(a,d){i=a,s.ctx=i,d&8&&n!==(n=Z(i[16].changelog))&&bt(n,s)||Yt(s,i,d)},d:function(a){a&&p(t),s.block.d(),s.token=null,s=null}};return G("SvelteRegisterBlock",{block:c,id:nt.name,type:"if",source:"(86:10) {#if expandedVersions.has(version.id)}",ctx:i}),c}function Pt(i){const t={c:O,l:O,m:O,p:O,d:O};return G("SvelteRegisterBlock",{block:t,id:Pt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { GetSmlVersionsDocument }',ctx:i}),t}function jt(i){let t,e=i[19]+"",n;const o={c:function(){t=new zt(!1),n=Q(),this.h()},l:function(c){t=Jt(c,!1),n=Q(),this.h()},h:function(){t.a=n},m:function(c,f){t.m(e,c,f),P(c,n,f)},p:function(c,f){f&8&&e!==(e=c[19]+"")&&t.p(e)},d:function(c){c&&(p(n),t.d())}};return G("SvelteRegisterBlock",{block:o,id:jt.name,type:"then",source:"(89:75)                    <!-- eslint-disable -->                   {@html changelogRendered}",ctx:i}),o}function It(i){const t={c:O,l:O,m:O,p:O,d:O};return G("SvelteRegisterBlock",{block:t,id:It.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { GetSmlVersionsDocument }',ctx:i}),t}function it(i){let t,e,n=i[16].version+"",o,s,c,f=i[16].stability+"",a,d,u,m=i[16].satisfactory_version+"",r,V,$,h=tt(i[16].date)+"",v,q,H,B,R,E,A,C,l=i[4].has(i[16].id),L,b,M;function X(){return i[11](i[16])}let w=l&&nt(i);const ut={c:function(){t=x("tr"),e=x("td"),o=z(n),s=j(),c=x("td"),a=z(f),d=j(),u=x("td"),r=z(m),V=j(),$=x("td"),v=z(h),q=j(),H=x("td"),B=x("div"),R=x("a"),E=z("View"),C=j(),w&&w.c(),L=Q(),this.h()},l:function(N){t=k(N,"TR",{});var T=D(t);e=k(T,"TD",{});var ht=D(e);o=J(ht,n),ht.forEach(p),s=I(T),c=k(T,"TD",{});var dt=D(c);a=J(dt,f),dt.forEach(p),d=I(T),u=k(T,"TD",{});var mt=D(u);r=J(mt,m),mt.forEach(p),V=I(T),$=k(T,"TD",{});var pt=D($);v=J(pt,h),pt.forEach(p),q=I(T),H=k(T,"TD",{class:!0});var gt=D(H);B=k(gt,"DIV",{class:!0});var vt=D(B);R=k(vt,"A",{class:!0,href:!0});var $t=D(R);E=J($t,"View"),$t.forEach(p),vt.forEach(p),gt.forEach(p),T.forEach(p),C=I(N),w&&w.l(N),L=Q(),this.h()},h:function(){S(e,y,81,12,2220),S(c,y,82,12,2259),S(u,y,83,12,2300),S($,y,84,12,2352),_(R,"class","btn btn-sm variant-ghost-primary"),_(R,"href",A=i[16].link),S(R,y,87,16,2489),_(B,"class","grid grid-flow-col gap-4"),S(B,y,86,14,2434),_(H,"class","!p-2.5"),S(H,y,85,12,2400),S(t,y,80,10,2164)},m:function(N,T){P(N,t,T),g(t,e),g(e,o),g(t,s),g(t,c),g(c,a),g(t,d),g(t,u),g(u,r),g(t,V),g(t,$),g($,v),g(t,q),g(t,H),g(H,B),g(B,R),g(R,E),P(N,C,T),w&&w.m(N,T),P(N,L,T),b||(M=Ft(t,"click",X,!1,!1,!1,!1),b=!0)},p:function(N,T){i=N,T&8&&n!==(n=i[16].version+"")&&W(o,n),T&8&&f!==(f=i[16].stability+"")&&W(a,f),T&8&&m!==(m=i[16].satisfactory_version+"")&&W(r,m),T&8&&h!==(h=tt(i[16].date)+"")&&W(v,h),T&8&&A!==(A=i[16].link)&&_(R,"href",A),T&24&&(l=i[4].has(i[16].id)),l?w?w.p(i,T):(w=nt(i),w.c(),w.m(L.parentNode,L)):w&&(w.d(1),w=null)},d:function(N){N&&(p(t),p(C),p(L)),w&&w.d(N),b=!1,M()}};return G("SvelteRegisterBlock",{block:ut,id:it.name,type:"each",source:"(73:8) {#each $versions.data.getSMLVersions.sml_versions as version}",ctx:i}),ut}function st(i){let t,e,n,o,s;function c(d){i[12](d)}let f={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};i[5]!==void 0&&(f.settings=i[5]),n=new lt({props:f,$$inline:!0}),wt.push(()=>Dt(n,"settings",c)),n.$on("page",i[13]),n.$on("amount",i[14]);const a={c:function(){t=x("div"),e=x("div"),at(n.$$.fragment),this.h()},l:function(u){t=k(u,"DIV",{class:!0});var m=D(t);e=k(m,"DIV",{});var r=D(e);rt(n.$$.fragment,r),r.forEach(p),m.forEach(p),this.h()},h:function(){S(e,y,110,4,3115),_(t,"class","mt-5 ml-auto flex justify-end"),S(t,y,109,2,3067)},m:function(u,m){P(u,t,m),g(t,e),ct(n,e,null),s=!0},p:function(u,m){const r={};!o&&m&32&&(o=!0,r.settings=u[5],Rt(()=>o=!1)),n.$set(r)},i:function(u){s||(F(n.$$.fragment,u),s=!0)},o:function(u){Y(n.$$.fragment,u),s=!1},d:function(u){u&&p(t),ft(n)}};return G("SvelteRegisterBlock",{block:a,id:st.name,type:"if",source:"(102:0) {#if totalVersions}",ctx:i}),a}function ot(i){let t,e,n,o,s,c,f;t=new Bt({props:{description:"Versions of the Satisfactory Mod Loader",title:"Satisfactory Mod Loader versions"},$$inline:!0});let a=i[2]&&et(i);function d($,h){return $[3].fetching?Mt:$[3].error?Lt:Ct}let u=d(i),m=u(i),r=i[2]&&st(i);const V={c:function(){at(t.$$.fragment),e=j(),a&&a.c(),n=j(),o=x("div"),m.c(),s=j(),r&&r.c(),c=Q(),this.h()},l:function(h){const v=Gt("svelte-1fte9vn",document.head);rt(t.$$.fragment,v),v.forEach(p),e=I(h),a&&a.l(h),n=I(h),o=k(h,"DIV",{class:!0});var q=D(o);m.l(q),q.forEach(p),s=I(h),r&&r.l(h),c=Q(),this.h()},h:function(){document.title="SML Versions - SMR",_(o,"class","card"),S(o,y,62,0,1608)},m:function(h,v){ct(t,document.head,null),P(h,e,v),a&&a.m(h,v),P(h,n,v),P(h,o,v),m.m(o,null),P(h,s,v),r&&r.m(h,v),P(h,c,v),f=!0},p:function(h,[v]){h[2]?a?(a.p(h,v),v&4&&F(a,1)):(a=et(h),a.c(),F(a,1),a.m(n.parentNode,n)):a&&(Vt(),Y(a,1,1,()=>{a=null}),St()),u===(u=d(h))&&m?m.p(h,v):(m.d(1),m=u(h),m&&(m.c(),m.m(o,null))),h[2]?r?(r.p(h,v),v&4&&F(r,1)):(r=st(h),r.c(),F(r,1),r.m(c.parentNode,c)):r&&(Vt(),Y(r,1,1,()=>{r=null}),St())},i:function(h){f||(F(t.$$.fragment,h),F(a),F(r),f=!0)},o:function(h){Y(t.$$.fragment,h),Y(a),Y(r),f=!1},d:function(h){h&&(p(e),p(n),p(o),p(s),p(c)),ft(t),a&&a.d(h),m.d(),r&&r.d(h)}};return G("SvelteRegisterBlock",{block:V,id:ot.name,type:"component",source:"",ctx:i}),V}function Kt(i,t,e){let n,o,s,c,f=O,a=()=>(f(),f=qt(n,l=>e(3,c=l)),n);i.$$.on_destroy.push(()=>f());let{$$slots:d={},$$scope:u}=t;Ot("Page",d,[]);const m=xt();let r=new Set,V=20,$=0;const h=l=>{r.has(l)?r.delete(l):r.add(l),e(4,r)},v=[];Object.keys(t).forEach(l=>{!~v.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Page> was created with unknown prop '${l}'`)});function q(l){s=l,e(5,s),e(1,$),e(0,V),e(2,o),e(3,c)}const H=l=>e(1,$=l.detail),B=l=>e(0,V=l.detail),R=l=>h(l.id);function E(l){s=l,e(5,s),e(1,$),e(0,V),e(2,o),e(3,c)}const A=l=>e(1,$=l.detail),C=l=>e(0,V=l.detail);return i.$capture_state=()=>({GetSmlVersionsDocument:Et,getContextClient:xt,queryStore:kt,markdown:Z,MetaDescriptors:Bt,prettyDate:tt,Paginator:lt,client:m,expandedVersions:r,perPage:V,page:$,toggleRow:h,totalVersions:o,paginationSettings:s,versions:n,$versions:c}),i.$inject_state=l=>{"expandedVersions"in l&&e(4,r=l.expandedVersions),"perPage"in l&&e(0,V=l.perPage),"page"in l&&e(1,$=l.page),"totalVersions"in l&&e(2,o=l.totalVersions),"paginationSettings"in l&&e(5,s=l.paginationSettings),"versions"in l&&a(e(6,n=l.versions))},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&3&&a(e(6,n=kt({query:Et,client:m,variables:{offset:$*V,limit:V}}))),i.$$.dirty&8&&e(2,o=c?.data?.getSMLVersions?.count),i.$$.dirty&7&&e(5,s={page:$,limit:V,size:o,amounts:[5,10,20,50,100]})},[V,$,o,c,r,s,n,h,q,H,B,R,E,A,C]}class te extends Ht{constructor(t){super(t),Nt(this,t,Kt,ot,_t,{}),G("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:ot.name})}}export{te as component};
//# sourceMappingURL=26.QqYH-DQr.js.map
