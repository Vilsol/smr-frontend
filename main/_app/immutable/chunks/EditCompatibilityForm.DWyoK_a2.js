import{S as M,i as O,s as _,u as q,_ as C,e as I,I as D,a as N,P as w,c as v,d as g,J as B,g as J,Q as P,f as $,A as E,j as R,L as j,M as b,N as T,$ as A,R as F,m as L,t as Q,O as S,a5 as U,C as V,a6 as k,q as z,r as G}from"./vendor.DBwCcoHF.js";import{M as H}from"./ModCompatibilityEdit.DpRGkfsh.js";import{E as K}from"./graphql.sMbDXPDh.js";function W(r){let a,i,u,f,l,e,o=r[2]("entry.save")+"",m,c,p,y;function h(t){r[5](t)}let s={};return r[0].compatibility!==void 0&&(s.compatibilityInfo=r[0].compatibility),i=new H({props:s}),q.push(()=>C(i,"compatibilityInfo",h)),{c(){a=I("form"),D(i.$$.fragment),f=N(),l=I("div"),e=I("button"),m=w(o),this.h()},l(t){a=v(t,"FORM",{});var n=g(a);B(i.$$.fragment,n),f=J(n),l=v(n,"DIV",{class:!0});var d=g(l);e=v(d,"BUTTON",{class:!0,type:!0});var x=g(e);m=P(x,o),x.forEach($),d.forEach($),n.forEach($),this.h()},h(){E(e,"class","variant-ghost-primary btn"),E(e,"type","submit"),E(l,"class","p-5")},m(t,n){R(t,a,n),j(i,a,null),b(a,f),b(a,l),b(l,e),b(e,m),c=!0,p||(y=T(a,"submit",r[3]),p=!0)},p(t,[n]){const d={};!u&&n&1&&(u=!0,d.compatibilityInfo=t[0].compatibility,A(()=>u=!1)),i.$set(d),(!c||n&4)&&o!==(o=t[2]("entry.save")+"")&&F(m,o)},i(t){c||(L(i.$$.fragment,t),c=!0)},o(t){Q(i.$$.fragment,t),c=!1},d(t){t&&$(a),S(i),p=!1,y()}}}function X(r,a,i){let u,f=z,l=()=>(f(),f=G(m,s=>i(2,u=s)),m);r.$$.on_destroy.push(()=>f());let{modId:e}=a,{mod:o}=a;const{t:m}=U();l();const c=V(),p=k();async function y(s){s.preventDefault();const t=(await c.mutation(K,{modId:e,compatibility:o.compatibility}).toPromise()).data.updateModCompatibility;p(t?"submit":"fail")}function h(s){r.$$.not_equal(o.compatibility,s)&&(o.compatibility=s,i(0,o))}return r.$$set=s=>{"modId"in s&&i(4,e=s.modId),"mod"in s&&i(0,o=s.mod)},[o,m,u,y,e,h]}class at extends M{constructor(a){super(),O(this,a,X,W,_,{modId:4,mod:0,t:1})}get t(){return this.$$.ctx[1]}}export{at as E};
//# sourceMappingURL=EditCompatibilityForm.DWyoK_a2.js.map
