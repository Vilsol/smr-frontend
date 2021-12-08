import{S as A,i as F,s as H,j as P,m as j,o as C,x as _,u as p,v as D,e as b,k as q,c as k,a as G,n as N,d as m,b as B,f as h,V as E,r as z,w as Q,P as U,N as Y,au as Z,Q as x,W as ee,t as L,g as O,C as te,az as se,h as re,X as y,a0 as ae}from"../../chunks/vendor-1349e522.js";import{g as ne}from"../../chunks/graphql-06a000cd.js";import{G as oe}from"../../chunks/GuideCard-e9380eaa.js";import{P as J}from"../../chunks/PageControls-2fef69e5.js";import{b as le}from"../../chunks/paths-6758d194.js";import{M as ie}from"../../chunks/MetaDescriptors-f7c013cb.js";import"../../chunks/navigation-51f4a605.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/stores-6d06ecdd.js";function K(i,e,a){const t=i.slice();return t[7]=e[a],t}function R(i){let e,a;return e=new ee({props:{variant:"outlined",href:""+(le+"/new-guide"),$$slots:{default:[ce]},$$scope:{ctx:i}}}),{c(){P(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){C(e,t,r),a=!0},p(t,r){const s={};r&1024&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(_(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function ce(i){let e;return{c(){e=L("New Guide")},l(a){e=O(a,"New Guide")},m(a,t){h(a,e,t)},d(a){a&&m(e)}}}function ue(i){let e,a,t,r=i[1].data.getGuides.guides,s=[];for(let n=0;n<r.length;n+=1)s[n]=T(K(i,r,n));const c=n=>p(s[n],1,1,()=>{s[n]=null});return{c(){e=b("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=k(n,"DIV",{class:!0});var u=G(e);for(let l=0;l<s.length;l+=1)s[l].l(u);u.forEach(m),this.h()},h(){B(e,"class",a="grid "+i[3]+" gap-4")},m(n,u){h(n,e,u);for(let l=0;l<s.length;l+=1)s[l].m(e,null);t=!0},p(n,u){if(u&2){r=n[1].data.getGuides.guides;let l;for(l=0;l<r.length;l+=1){const g=K(n,r,l);s[l]?(s[l].p(g,u),_(s[l],1)):(s[l]=T(g),s[l].c(),_(s[l],1),s[l].m(e,null))}for(z(),l=r.length;l<s.length;l+=1)c(l);Q()}(!t||u&8&&a!==(a="grid "+n[3]+" gap-4"))&&B(e,"class",a)},i(n){if(!t){for(let u=0;u<r.length;u+=1)_(s[u]);t=!0}},o(n){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)p(s[u]);t=!1},d(n){n&&m(e),se(s,n)}}}function fe(i){let e,a,t=i[1].error.message+"",r;return{c(){e=b("p"),a=L("Oh no... "),r=L(t)},l(s){e=k(s,"P",{});var c=G(e);a=O(c,"Oh no... "),r=O(c,t),c.forEach(m)},m(s,c){h(s,e,c),E(e,a),E(e,r)},p(s,c){c&2&&t!==(t=s[1].error.message+"")&&re(r,t)},i:y,o:y,d(s){s&&m(e)}}}function de(i){let e,a;return{c(){e=b("p"),a=L("Loading...")},l(t){e=k(t,"P",{});var r=G(e);a=O(r,"Loading..."),r.forEach(m)},m(t,r){h(t,e,r),E(e,a)},p:y,i:y,o:y,d(t){t&&m(e)}}}function T(i){let e,a;return e=new oe({props:{guide:i[7],logo:i[7].user.avatar}}),{c(){P(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){C(e,t,r),a=!0},p(t,r){const s={};r&2&&(s.guide=t[7]),r&2&&(s.logo=t[7].user.avatar),e.$set(s)},i(t){a||(_(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function ge(i){let e,a,t,r,s,c,n,u,l,g,$,S,f=i[0]&&R(i);r=new J({props:{totalPages:Math.ceil(i[2]/M),currentPage:i[5]}});const W=[de,fe,ue],v=[];function X(o,d){return o[1].fetching?0:o[1].error?1:2}return c=X(i),n=v[c]=W[c](i),$=new J({props:{totalPages:Math.ceil(i[2]/M),currentPage:i[5]}}),{c(){e=b("div"),f&&f.c(),a=q(),t=b("div"),P(r.$$.fragment),s=q(),n.c(),u=q(),l=b("div"),g=b("div"),P($.$$.fragment),this.h()},l(o){e=k(o,"DIV",{class:!0});var d=G(e);f&&f.l(d),a=N(d),t=k(d,"DIV",{});var V=G(t);j(r.$$.fragment,V),V.forEach(m),d.forEach(m),s=N(o),n.l(o),u=N(o),l=k(o,"DIV",{class:!0});var w=G(l);g=k(w,"DIV",{});var I=G(g);j($.$$.fragment,I),I.forEach(m),w.forEach(m),this.h()},h(){B(e,"class","mb-5 ml-auto flex justify-between"),B(l,"class","mt-5 ml-auto flex justify-end")},m(o,d){h(o,e,d),f&&f.m(e,null),E(e,a),E(e,t),C(r,t,null),h(o,s,d),v[c].m(o,d),h(o,u,d),h(o,l,d),E(l,g),C($,g,null),S=!0},p(o,[d]){o[0]?f?(f.p(o,d),d&1&&_(f,1)):(f=R(o),f.c(),_(f,1),f.m(e,a)):f&&(z(),p(f,1,1,()=>{f=null}),Q());const V={};d&4&&(V.totalPages=Math.ceil(o[2]/M)),r.$set(V);let w=c;c=X(o),c===w?v[c].p(o,d):(z(),p(v[w],1,1,()=>{v[w]=null}),Q(),n=v[c],n?n.p(o,d):(n=v[c]=W[c](o),n.c()),_(n,1),n.m(u.parentNode,u));const I={};d&4&&(I.totalPages=Math.ceil(o[2]/M)),$.$set(I)},i(o){S||(_(f),_(r.$$.fragment,o),_(n),_($.$$.fragment,o),S=!0)},o(o){p(f),p(r.$$.fragment,o),p(n),p($.$$.fragment,o),S=!1},d(o){o&&m(e),f&&f.d(),D(r),o&&m(s),v[c].d(o),o&&m(u),o&&m(l),D($)}}}const M=40;function me(i,e,a){let t,r,{colCount:s=4}=e,{newGuide:c=!1}=e;const n=U(ne,{offset:0,limit:M});Y(i,n,g=>a(1,r=g));const u=te(1);let l;return u.subscribe(g=>{Z(n,r.variables.offset=(g-1)*M,r),r.reexecute()}),x(n),i.$$set=g=>{"colCount"in g&&a(6,s=g.colCount),"newGuide"in g&&a(0,c=g.newGuide)},i.$$.update=()=>{i.$$.dirty&2&&a(2,l=r?.data?.getGuides?.count||0),i.$$.dirty&64&&a(3,t=s==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1")},[c,r,l,t,n,u,s]}class _e extends A{constructor(e){super();F(this,e,me,ge,H,{colCount:6,newGuide:0})}}function pe(i){let e,a,t,r;return e=new ie({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),t=new _e({props:{newGuide:!0,colCount:4}}),{c(){P(e.$$.fragment),a=q(),P(t.$$.fragment)},l(s){const c=ae('[data-svelte="svelte-gby4d8"]',document.head);j(e.$$.fragment,c),c.forEach(m),a=N(s),j(t.$$.fragment,s)},m(s,c){C(e,document.head,null),h(s,a,c),C(t,s,c),r=!0},p:y,i(s){r||(_(e.$$.fragment,s),_(t.$$.fragment,s),r=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),r=!1},d(s){D(e),s&&m(a),D(t,s)}}}class Ce extends A{constructor(e){super();F(this,e,null,pe,H,{})}}export{Ce as default};
//# sourceMappingURL=index.svelte-acf83896.js.map