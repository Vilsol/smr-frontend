import{S as et,i as rt,s as lt,p as Y,P as Z,u as x,R,U as I,v as y,w as E,V as _,X as V,d as $,Y as F,a as w,Z as J,_ as b,b as m,g as k,t as p,c as q,a4 as H,a5 as C,a9 as st,aD as it,aF as ft,aJ as ot,aN as ut,I as L,J as z,L as O,ar as ct,aR as nt,K as gt,a_ as $t}from"../chunks/vendor.96815c21.js";import{t as dt}from"../chunks/graphql.22d32a05.js";import{G as mt}from"../chunks/GuideCard.00294ba5.js";import{P as Q}from"../chunks/PageControls.3f5918a8.js";import{a as ht}from"../chunks/user.6bc5f3a5.js";import{F as pt}from"../chunks/FicsitCard.b9bfb47e.js";import{M as vt}from"../chunks/MetaDescriptors.e9d71f4a.js";function T(s,t,l){const e=s.slice();return e[14]=t[l],e}function wt(s,t,l){const e=s.slice();return e[11]=t[l],e}function W(s){let t,l;return t=new ot({props:{variant:"outlined",href:ut+"/new-guide",$$slots:{default:[Gt]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,a){b(t,e,a),l=!0},p(e,a){const r={};a&131072&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function Gt(s){let t;return{c(){t=L("New Guide")},l(l){t=z(l,"New Guide")},m(l,e){w(l,t,e)},d(l){l&&$(t)}}}function Pt(s){let t,l,e,a=s[2].data.getGuides.guides,r=[];for(let n=0;n<a.length;n+=1)r[n]=tt(T(s,a,n));const i=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){t=x("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){t=y(n,"DIV",{class:!0});var o=E(t);for(let u=0;u<r.length;u+=1)r[u].l(o);o.forEach($),this.h()},h(){F(t,"class",l="grid "+s[4]+" gap-4")},m(n,o){w(n,t,o);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);e=!0},p(n,o){if(o&4){a=n[2].data.getGuides.guides;let u;for(u=0;u<a.length;u+=1){const v=T(n,a,u);r[u]?(r[u].p(v,o),m(r[u],1)):(r[u]=tt(v),r[u].c(),m(r[u],1),r[u].m(t,null))}for(k(),u=a.length;u<r.length;u+=1)i(u);q()}(!e||o&16&&l!==(l="grid "+n[4]+" gap-4"))&&F(t,"class",l)},i(n){if(!e){for(let o=0;o<a.length;o+=1)m(r[o]);e=!0}},o(n){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)p(r[o]);e=!1},d(n){n&&$(t),nt(r,n)}}}function xt(s){let t,l,e=s[2].error.message+"",a;return{c(){t=x("p"),l=L("Oh no... "),a=L(e)},l(r){t=y(r,"P",{});var i=E(t);l=z(i,"Oh no... "),a=z(i,e),i.forEach($)},m(r,i){w(r,t,i),J(t,l),J(t,a)},p(r,i){i&4&&e!==(e=r[2].error.message+"")&&gt(a,e)},i:O,o:O,d(r){r&&$(t)}}}function yt(s){let t,l,e,a=Array(D),r=[];for(let i=0;i<a.length;i+=1)r[i]=Et(wt(s,a,i));return{c(){t=x("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){t=y(i,"DIV",{class:!0});var n=E(t);for(let o=0;o<r.length;o+=1)r[o].l(n);n.forEach($),this.h()},h(){F(t,"class",l="grid "+s[4]+" gap-4")},m(i,n){w(i,t,n);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);e=!0},p(i,n){(!e||n&16&&l!==(l="grid "+i[4]+" gap-4"))&&F(t,"class",l)},i(i){if(!e){for(let n=0;n<a.length;n+=1)m(r[n]);e=!0}},o(i){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)p(r[n]);e=!1},d(i){i&&$(t),nt(r,i)}}}function tt(s){let t,l;return t=new mt({props:{guide:s[14],logo:s[14].user.avatar}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,a){b(t,e,a),l=!0},p(e,a){const r={};a&4&&(r.guide=e[14]),a&4&&(r.logo=e[14].user.avatar),t.$set(r)},i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function Et(s){let t,l;return t=new pt({props:{fake:!0}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,a){b(t,e,a),l=!0},p:O,i(e){l||(m(t.$$.fragment,e),l=!0)},o(e){p(t.$$.fragment,e),l=!1},d(e){C(t,e)}}}function Dt(s){let t,l,e,a,r,i,n,o,u,v,P,d,M,N,c=s[0]&&s[6]!==null&&W(s);function h(f){s[8](f)}let A={totalPages:Math.ceil(s[3]/D)};s[1]!==void 0&&(A.currentPage=s[1]),a=new Q({props:A}),Y.push(()=>Z(a,"currentPage",h));const K=[yt,xt,Pt],G=[];function U(f,g){return f[2].fetching?0:f[2].error?1:2}n=U(s),o=G[n]=K[n](s);function at(f){s[9](f)}let X={totalPages:Math.ceil(s[3]/D)};return s[1]!==void 0&&(X.currentPage=s[1]),d=new Q({props:X}),Y.push(()=>Z(d,"currentPage",at)),{c(){t=x("div"),c&&c.c(),l=R(),e=x("div"),I(a.$$.fragment),i=R(),o.c(),u=R(),v=x("div"),P=x("div"),I(d.$$.fragment),this.h()},l(f){t=y(f,"DIV",{class:!0});var g=E(t);c&&c.l(g),l=_(g),e=y(g,"DIV",{});var S=E(e);V(a.$$.fragment,S),S.forEach($),g.forEach($),i=_(f),o.l(f),u=_(f),v=y(f,"DIV",{class:!0});var j=E(v);P=y(j,"DIV",{});var B=E(P);V(d.$$.fragment,B),B.forEach($),j.forEach($),this.h()},h(){F(t,"class","mb-5 ml-auto flex justify-between"),F(v,"class","mt-5 ml-auto flex justify-end")},m(f,g){w(f,t,g),c&&c.m(t,null),J(t,l),J(t,e),b(a,e,null),w(f,i,g),G[n].m(f,g),w(f,u,g),w(f,v,g),J(v,P),b(d,P,null),N=!0},p(f,[g]){f[0]&&f[6]!==null?c?(c.p(f,g),g&65&&m(c,1)):(c=W(f),c.c(),m(c,1),c.m(t,l)):c&&(k(),p(c,1,1,()=>{c=null}),q());const S={};g&8&&(S.totalPages=Math.ceil(f[3]/D)),!r&&g&2&&(r=!0,S.currentPage=f[1],H(()=>r=!1)),a.$set(S);let j=n;n=U(f),n===j?G[n].p(f,g):(k(),p(G[j],1,1,()=>{G[j]=null}),q(),o=G[n],o?o.p(f,g):(o=G[n]=K[n](f),o.c()),m(o,1),o.m(u.parentNode,u));const B={};g&8&&(B.totalPages=Math.ceil(f[3]/D)),!M&&g&2&&(M=!0,B.currentPage=f[1],H(()=>M=!1)),d.$set(B)},i(f){N||(m(c),m(a.$$.fragment,f),m(o),m(d.$$.fragment,f),N=!0)},o(f){p(c),p(a.$$.fragment,f),p(o),p(d.$$.fragment,f),N=!1},d(f){f&&$(t),c&&c.d(),C(a),f&&$(i),G[n].d(f),f&&$(u),f&&$(v),C(d)}}}const D=40;function It(s,t,l){let e,a,r,i=O,n=()=>(i(),i=ct(e,h=>l(2,r=h)),e),o;st(s,ht,h=>l(6,o=h)),s.$$.on_destroy.push(()=>i());let{colCount:u=4}=t,{newGuide:v=!1}=t;const P=it();let d=1,M=0;function N(h){d=h,l(1,d)}function c(h){d=h,l(1,d)}return s.$$set=h=>{"colCount"in h&&l(7,u=h.colCount),"newGuide"in h&&l(0,v=h.newGuide)},s.$$.update=()=>{s.$$.dirty&2&&n(l(5,e=ft({query:dt,client:P,variables:{offset:(d-1)*D,limit:D}}))),s.$$.dirty&4&&r?.data?.getGuides?.count&&l(3,M=r.data.getGuides.count),s.$$.dirty&128&&l(4,a=u==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1")},[v,d,r,M,a,e,o,u,N,c]}class Vt extends et{constructor(t){super(),rt(this,t,It,Dt,lt,{colCount:7,newGuide:0})}}function bt(s){let t,l,e,a;return t=new vt({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),e=new Vt({props:{newGuide:!0,colCount:4}}),{c(){I(t.$$.fragment),l=R(),I(e.$$.fragment)},l(r){const i=$t("svelte-gby4d8",document.head);V(t.$$.fragment,i),i.forEach($),l=_(r),V(e.$$.fragment,r)},m(r,i){b(t,document.head,null),w(r,l,i),b(e,r,i),a=!0},p:O,i(r){a||(m(t.$$.fragment,r),m(e.$$.fragment,r),a=!0)},o(r){p(t.$$.fragment,r),p(e.$$.fragment,r),a=!1},d(r){C(t),r&&$(l),C(e,r)}}}class Jt extends et{constructor(t){super(),rt(this,t,null,bt,lt,{})}}export{Jt as component};
//# sourceMappingURL=14.c8be7ce3.js.map