import{S as z,i as F,s as R,e as d,I as N,a as k,c as g,d as E,J as A,g as O,f as c,A as $,j as C,L as P,M as h,N as J,m as _,t as T,O as V,a5 as Q,ae as G,q as K,r as W,a0 as L,P as X,K as D,Q as j,R as B,b as H}from"./vendor.DBwCcoHF.js";import{F as Y}from"./FicsitCard.DuujPStn.js";import{i as Z}from"./launcher.CJOxkMkf.js";import{a as I}from"./formatting.CznGdE0H.js";import{C as U,a as tt,O as et}from"./CompatibilityModal.k7Fa59-D.js";import{T as it}from"./TagList.DP2FHsP3.js";function st(r){let t,i,s,e,a,l,u,p;return i=new U({props:{compatibility:r[0]?.EA}}),e=new U({props:{compatibility:r[0]?.EXP,EXP:!0}}),{c(){t=d("button"),N(i.$$.fragment),s=k(),N(e.$$.fragment),this.h()},l(n){t=g(n,"BUTTON",{class:!0,title:!0});var o=E(t);A(i.$$.fragment,o),s=O(o),A(e.$$.fragment,o),o.forEach(c),this.h()},h(){$(t,"class","variant-soft-surface btn m-0 min-w-0 px-1 py-0 text-xs"),$(t,"title",a=r[2]("compatibility-info.button"))},m(n,o){C(n,t,o),P(i,t,null),h(t,s),P(e,t,null),l=!0,u||(p=J(t,"click",r[3]),u=!0)},p(n,[o]){const b={};o&1&&(b.compatibility=n[0]?.EA),i.$set(b);const v={};o&1&&(v.compatibility=n[0]?.EXP),e.$set(v),(!l||o&4&&a!==(a=n[2]("compatibility-info.button")))&&$(t,"title",a)},i(n){l||(_(i.$$.fragment,n),_(e.$$.fragment,n),l=!0)},o(n){T(i.$$.fragment,n),T(e.$$.fragment,n),l=!1},d(n){n&&c(t),V(i),V(e),u=!1,p()}}}function at(r,t,i){let s,e=K,a=()=>(e(),e=W(u,o=>i(2,s=o)),u);r.$$.on_destroy.push(()=>e());let{compatibility:l}=t;const{t:u}=Q();a();const p=G(),n=()=>{p.trigger({type:"component",component:{ref:tt,props:{compatibility:l}}})};return r.$$set=o=>{"compatibility"in o&&i(0,l=o.compatibility)},[l,u,s,n]}class rt extends z{constructor(t){super(),F(this,t,at,st,R,{compatibility:0,t:1})}get t(){return this.$$.ctx[1]}}function lt(r){let t,i,s,e="visibility",a=I(r[0].views)+"",l,u,p,n,o="download",b=I(r[0].downloads)+"",v,S,y,x;return y=new rt({props:{compatibility:r[0].compatibility}}),{c(){t=d("div"),i=d("span"),s=d("span"),s.textContent=e,l=X(a),u=k(),p=d("span"),n=d("span"),n.textContent=o,v=X(b),S=k(),N(y.$$.fragment),this.h()},l(f){t=g(f,"DIV",{slot:!0,class:!0});var m=E(t);i=g(m,"SPAN",{});var w=E(i);s=g(w,"SPAN",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-12ecnwz"&&(s.textContent=e),l=j(w,a),w.forEach(c),u=O(m),p=g(m,"SPAN",{});var M=E(p);n=g(M,"SPAN",{class:!0,"data-svelte-h":!0}),D(n)!=="svelte-1rth8xv"&&(n.textContent=o),v=j(M,b),M.forEach(c),S=O(m),A(y.$$.fragment,m),m.forEach(c),this.h()},h(){$(s,"class","material-icons mr-1 align-middle text-sm"),$(n,"class","material-icons mr-1 align-middle text-sm"),$(t,"slot","stats"),$(t,"class","flex flex-row items-center gap-2")},m(f,m){C(f,t,m),h(t,i),h(i,s),h(i,l),h(t,u),h(t,p),h(p,n),h(p,v),h(t,S),P(y,t,null),x=!0},p(f,m){(!x||m&1)&&a!==(a=I(f[0].views)+"")&&B(l,a),(!x||m&1)&&b!==(b=I(f[0].downloads)+"")&&B(v,b);const w={};m&1&&(w.compatibility=f[0].compatibility),y.$set(w)},i(f){x||(_(y.$$.fragment,f),x=!0)},o(f){T(y.$$.fragment,f),x=!1},d(f){f&&c(t),V(y)}}}function nt(r){let t,i,s;return i=new it({props:{tags:r[0].tags}}),{c(){t=d("div"),N(i.$$.fragment),this.h()},l(e){t=g(e,"DIV",{slot:!0});var a=E(t);A(i.$$.fragment,a),a.forEach(c),this.h()},h(){$(t,"slot","tags")},m(e,a){C(e,t,a),P(i,t,null),s=!0},p(e,a){const l={};a&1&&(l.tags=e[0].tags),i.$set(l)},i(e){s||(_(i.$$.fragment,e),s=!0)},o(e){T(i.$$.fragment,e),s=!1},d(e){e&&c(t),V(i)}}}function q(r){let t,i='<span class="material-icons">download</span>',s,e;return{c(){t=d("button"),t.innerHTML=i,this.h()},l(a){t=g(a,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),D(t)!=="svelte-ragfgm"&&(t.innerHTML=i),this.h()},h(){$(t,"class","variant-soft-surface btn btn-sm"),$(t,"title","Install")},m(a,l){C(a,t,l),s||(e=J(t,"click",r[2]),s=!0)},p:K,d(a){a&&c(t),s=!1,e()}}}function ot(r){let t,i=r[1]&&q(r);return{c(){i&&i.c(),t=H()},l(s){i&&i.l(s),t=H()},m(s,e){i&&i.m(s,e),C(s,t,e)},p(s,e){s[1]?i?i.p(s,e):(i=q(s),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(s){s&&c(t),i&&i.d(s)}}}function ft(r){let t,i,s;return i=new et({props:{compatibility:r[0].compatibility}}),{c(){t=d("div"),N(i.$$.fragment),this.h()},l(e){t=g(e,"DIV",{slot:!0});var a=E(t);A(i.$$.fragment,a),a.forEach(c),this.h()},h(){$(t,"slot","outer")},m(e,a){C(e,t,a),P(i,t,null),s=!0},p(e,a){const l={};a&1&&(l.compatibility=e[0].compatibility),i.$set(l)},i(e){s||(_(i.$$.fragment,e),s=!0)},o(e){T(i.$$.fragment,e),s=!1},d(e){e&&c(t),V(i)}}}function mt(r){let t,i;return t=new Y({props:{name:r[0].name,link:L+"/mod/"+r[0].mod_reference,logo:r[0].logo,thumbhash:r[0].logo_thumbhash,description:r[0].short_description,$$slots:{outer:[ft],actions:[ot],tags:[nt],stats:[lt]},$$scope:{ctx:r}}}),{c(){N(t.$$.fragment)},l(s){A(t.$$.fragment,s)},m(s,e){P(t,s,e),i=!0},p(s,[e]){const a={};e&1&&(a.name=s[0].name),e&1&&(a.link=L+"/mod/"+s[0].mod_reference),e&1&&(a.logo=s[0].logo),e&1&&(a.thumbhash=s[0].logo_thumbhash),e&1&&(a.description=s[0].short_description),e&11&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){i||(_(t.$$.fragment,s),i=!0)},o(s){T(t.$$.fragment,s),i=!1},d(s){V(t,s)}}}function ct(r,t,i){let s,{mod:e}=t;const a=()=>Z(e.mod_reference);return r.$$set=l=>{"mod"in l&&i(0,e=l.mod)},r.$$.update=()=>{r.$$.dirty&1&&i(1,s="latestVersions"in e?e.latestVersions.alpha||e.latestVersions.beta||e.latestVersions.release:!1)},[e,s,a]}class bt extends z{constructor(t){super(),F(this,t,ct,mt,R,{mod:0})}}export{bt as M};
//# sourceMappingURL=ModCard.D379YlEl.js.map
