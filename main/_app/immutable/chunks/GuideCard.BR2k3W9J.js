import{S as v,i as x,s as w,a0 as g,I as k,J as A,L as P,m as S,t as _,O as C,e as c,P as b,c as m,d as $,K as j,Q as y,f as d,A as p,j as E,M as u,R as I,a9 as N}from"./vendor.DBwCcoHF.js";import{F as D}from"./FicsitCard.DuujPStn.js";import{a as h}from"./formatting.CznGdE0H.js";function F(o){let e,i,s,a="visibility",t=h(o[0].views)+"",l;return{c(){e=c("div"),i=c("span"),s=c("span"),s.textContent=a,l=b(t),this.h()},l(r){e=m(r,"DIV",{slot:!0});var n=$(e);i=m(n,"SPAN",{});var f=$(i);s=m(f,"SPAN",{class:!0,"data-svelte-h":!0}),j(s)!=="svelte-139kimw"&&(s.textContent=a),l=y(f,t),f.forEach(d),n.forEach(d),this.h()},h(){p(s,"class","material-icons align-middle text-sm"),p(e,"slot","stats")},m(r,n){E(r,e,n),u(e,i),u(i,s),u(i,l)},p(r,n){n&1&&t!==(t=h(r[0].views)+"")&&I(l,t)},d(r){r&&d(e)}}}function G(o){let e,i;return e=new D({props:{name:o[0].name,logo:o[1],description:o[0].short_description,link:g+`/guide/${o[0].id}`,$$slots:{stats:[F]},$$scope:{ctx:o}}}),{c(){k(e.$$.fragment)},l(s){A(e.$$.fragment,s)},m(s,a){P(e,s,a),i=!0},p(s,[a]){const t={};a&1&&(t.name=s[0].name),a&2&&(t.logo=s[1]),a&1&&(t.description=s[0].short_description),a&1&&(t.link=g+`/guide/${s[0].id}`),a&5&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){i||(S(e.$$.fragment,s),i=!0)},o(s){_(e.$$.fragment,s),i=!1},d(s){C(e,s)}}}function J(o,e,i){let{guide:s}=e,{logo:a=N+"/images/no_image.webp"}=e;return o.$$set=t=>{"guide"in t&&i(0,s=t.guide),"logo"in t&&i(1,a=t.logo)},[s,a]}class O extends v{constructor(e){super(),x(this,e,J,G,w,{guide:0,logo:1})}}export{O as G};
//# sourceMappingURL=GuideCard.BR2k3W9J.js.map
