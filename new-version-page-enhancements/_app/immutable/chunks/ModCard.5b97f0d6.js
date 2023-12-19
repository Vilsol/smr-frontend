import{S as et,i as ot,s as nt,d as k,v as it,ab as J,a1 as dt,ar as Q,e as w,J as _,b as I,g as v,h as E,L as N,k as X,j as d,N as h,m as x,n as A,O as P,Q as y,Z as st,r as M,t as R,R as O,u as at,x as bt,H as D,W,M as F,X as Y,Y as Z,f as G}from"./vendor.339d1c7d.js";import{F as ct}from"./FicsitCard.e4e0eebf.js";import{i as K}from"./launcher.c2edc083.js";import{a as V}from"./formatting.a9f13d93.js";import{C as L,a as tt,O as rt}from"./CompatibilityModal.e0deae97.js";import{T as lt}from"./TagList.8f86f15b.js";const ht="src/lib/components/mods/compatibility/CompatibilityButton.svelte";function U(i){let t,e,s,a,n,o,c,l;e=new L({props:{compatibility:i[0]?.EA},$$inline:!0}),a=new L({props:{compatibility:i[0]?.EXP,EXP:!0},$$inline:!0});const r={c:function(){t=w("button"),_(e.$$.fragment),s=I(),_(a.$$.fragment),this.h()},l:function(f){t=v(f,"BUTTON",{class:!0,title:!0});var m=E(t);N(e.$$.fragment,m),s=X(m),N(a.$$.fragment,m),m.forEach(d),this.h()},h:function(){h(t,"class","btn text-xs px-1 py-0 variant-soft-surface min-w-0 m-0"),h(t,"title",n=i[2]("compatibility-info.button")),x(t,ht,25,0,593)},m:function(f,m){A(f,t,m),P(e,t,null),y(t,s),P(a,t,null),o=!0,c||(l=st(t,"click",i[3],!1,!1,!1,!1),c=!0)},p:function(f,[m]){const u={};m&1&&(u.compatibility=f[0]?.EA),e.$set(u);const g={};m&1&&(g.compatibility=f[0]?.EXP),a.$set(g),(!o||m&4&&n!==(n=f[2]("compatibility-info.button")))&&h(t,"title",n)},i:function(f){o||(M(e.$$.fragment,f),M(a.$$.fragment,f),o=!0)},o:function(f){R(e.$$.fragment,f),R(a.$$.fragment,f),o=!1},d:function(f){f&&d(t),O(e),O(a),c=!1,l()}};return k("SvelteRegisterBlock",{block:r,id:U.name,type:"component",source:"",ctx:i}),r}function gt(i,t,e){let s,a=at,n=()=>(a(),a=bt(r,u=>e(2,s=u)),r);i.$$.on_destroy.push(()=>a());let{$$slots:o={},$$scope:c}=t;it("CompatibilityButton",o,[]);let{compatibility:l}=t;const{t:r}=J();dt(r,"t"),n();const p=Q(),f=()=>{p.trigger({type:"component",component:{ref:tt,props:{compatibility:l}}})};i.$$.on_mount.push(function(){l===void 0&&!("compatibility"in t||i.$$.bound[i.$$.props.compatibility])&&console.warn("<CompatibilityButton> was created without expected prop 'compatibility'")});const m=["compatibility"];return Object.keys(t).forEach(u=>{!~m.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<CompatibilityButton> was created with unknown prop '${u}'`)}),i.$$set=u=>{"compatibility"in u&&e(0,l=u.compatibility)},i.$capture_state=()=>({CompatibilityIcon:L,getTranslate:J,getModalStore:Q,CompatibilityModal:tt,compatibility:l,t:r,modalStore:p,openCompatibility:f,$t:s}),i.$inject_state=u=>{"compatibility"in u&&e(0,l=u.compatibility)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[l,r,s,f]}class ft extends et{constructor(t){super(t),ot(this,t,gt,U,nt,{compatibility:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityButton",options:t,id:U.name})}get compatibility(){throw new Error("<CompatibilityButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const C="src/lib/components/mods/ModCard.svelte";function ut(i){let t,e,s,a="visibility",n=V(i[0].views)+"",o,c,l,r,p="download",f=V(i[0].downloads)+"",m,u,g,S;g=new ft({props:{compatibility:i[0].compatibility},$$inline:!0});const H={c:function(){t=w("div"),e=w("span"),s=w("span"),s.textContent=a,o=W(n),c=I(),l=w("span"),r=w("span"),r.textContent=p,m=W(f),u=I(),_(g.$$.fragment),this.h()},l:function($){t=v($,"DIV",{slot:!0,class:!0});var b=E(t);e=v(b,"SPAN",{});var j=E(e);s=v(j,"SPAN",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-ejfr6v"&&(s.textContent=a),o=Y(j,n),j.forEach(d),c=X(b),l=v(b,"SPAN",{});var T=E(l);r=v(T,"SPAN",{class:!0,"data-svelte-h":!0}),F(r)!=="svelte-4dmd5j"&&(r.textContent=p),m=Y(T,f),T.forEach(d),u=X(b),N(g.$$.fragment,b),b.forEach(d),this.h()},h:function(){h(s,"class","material-icons align-middle text-sm mr-1"),x(s,C,31,10,838),x(e,C,31,4,832),h(r,"class","material-icons align-middle text-sm mr-1"),x(r,C,32,10,953),x(l,C,32,4,947),h(t,"slot","stats"),h(t,"class","flex flex-row items-center gap-2"),x(t,C,30,2,768)},m:function($,b){A($,t,b),y(t,e),y(e,s),y(e,o),y(t,c),y(t,l),y(l,r),y(l,m),y(t,u),P(g,t,null),S=!0},p:function($,b){(!S||b&1)&&n!==(n=V($[0].views)+"")&&Z(o,n),(!S||b&1)&&f!==(f=V($[0].downloads)+"")&&Z(m,f);const j={};b&1&&(j.compatibility=$[0].compatibility),g.$set(j)},i:function($){S||(M(g.$$.fragment,$),S=!0)},o:function($){R(g.$$.fragment,$),S=!1},d:function($){$&&d(t),O(g)}};return k("SvelteRegisterBlock",{block:H,id:ut.name,type:"slot",source:"(18:2) ",ctx:i}),H}function mt(i){let t,e,s;e=new lt({props:{tags:i[0].tags},$$inline:!0});const a={c:function(){t=w("div"),_(e.$$.fragment),this.h()},l:function(o){t=v(o,"DIV",{slot:!0});var c=E(t);N(e.$$.fragment,c),c.forEach(d),this.h()},h:function(){h(t,"slot","tags"),x(t,C,35,2,1133)},m:function(o,c){A(o,t,c),P(e,t,null),s=!0},p:function(o,c){const l={};c&1&&(l.tags=o[0].tags),e.$set(l)},i:function(o){s||(M(e.$$.fragment,o),s=!0)},o:function(o){R(e.$$.fragment,o),s=!1},d:function(o){o&&d(t),O(e)}};return k("SvelteRegisterBlock",{block:a,id:mt.name,type:"slot",source:"(23:2) ",ctx:i}),a}function q(i){let t,e,s="download",a,n;const o={c:function(){t=w("button"),e=w("span"),e.textContent=s,this.h()},l:function(l){t=v(l,"BUTTON",{class:!0,title:!0});var r=E(t);e=v(r,"SPAN",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-rqt9z7"&&(e.textContent=s),r.forEach(d),this.h()},h:function(){h(e,"class","material-icons"),x(e,C,41,8,1375),h(t,"class","btn btn-sm variant-soft-surface"),h(t,"title","Install"),x(t,C,40,6,1255)},m:function(l,r){A(l,t,r),y(t,e),a||(n=st(t,"click",i[2],!1,!1,!1,!1),a=!0)},p:at,d:function(l){l&&d(t),a=!1,n()}};return k("SvelteRegisterBlock",{block:o,id:q.name,type:"if",source:"(27:4) {#if installable}",ctx:i}),o}function pt(i){let t,e=i[1]&&q(i);const s={c:function(){e&&e.c(),t=G()},l:function(n){e&&e.l(n),t=G()},m:function(n,o){e&&e.m(n,o),A(n,t,o)},p:function(n,o){n[1]?e?e.p(n,o):(e=q(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d:function(n){n&&d(t),e&&e.d(n)}};return k("SvelteRegisterBlock",{block:s,id:pt.name,type:"slot",source:'(26:2) <svelte:fragment slot=\\"actions\\">',ctx:i}),s}function $t(i){let t,e,s;e=new rt({props:{compatibility:i[0].compatibility},$$inline:!0});const a={c:function(){t=w("div"),_(e.$$.fragment),this.h()},l:function(o){t=v(o,"DIV",{slot:!0});var c=E(t);N(e.$$.fragment,c),c.forEach(d),this.h()},h:function(){h(t,"slot","outer"),x(t,C,45,2,1469)},m:function(o,c){A(o,t,c),P(e,t,null),s=!0},p:function(o,c){const l={};c&1&&(l.compatibility=o[0].compatibility),e.$set(l)},i:function(o){s||(M(e.$$.fragment,o),s=!0)},o:function(o){R(e.$$.fragment,o),s=!1},d:function(o){o&&d(t),O(e)}};return k("SvelteRegisterBlock",{block:a,id:$t.name,type:"slot",source:"(33:2) ",ctx:i}),a}function z(i){let t,e;t=new ct({props:{name:i[0].name,link:D+"/mod/"+i[0].mod_reference,logo:i[0].logo,description:i[0].short_description,$$slots:{outer:[$t],actions:[pt],tags:[mt],stats:[ut]},$$scope:{ctx:i}},$$inline:!0});const s={c:function(){_(t.$$.fragment)},l:function(n){N(t.$$.fragment,n)},m:function(n,o){P(t,n,o),e=!0},p:function(n,[o]){const c={};o&1&&(c.name=n[0].name),o&1&&(c.link=D+"/mod/"+n[0].mod_reference),o&1&&(c.logo=n[0].logo),o&1&&(c.description=n[0].short_description),o&11&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){e||(M(t.$$.fragment,n),e=!0)},o:function(n){R(t.$$.fragment,n),e=!1},d:function(n){O(t,n)}};return k("SvelteRegisterBlock",{block:s,id:z.name,type:"component",source:"",ctx:i}),s}function yt(i,t,e){let s,{$$slots:a={},$$scope:n}=t;it("ModCard",a,[]);let{mod:o}=t;i.$$.on_mount.push(function(){o===void 0&&!("mod"in t||i.$$.bound[i.$$.props.mod])&&console.warn("<ModCard> was created without expected prop 'mod'")});const c=["mod"];Object.keys(t).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<ModCard> was created with unknown prop '${r}'`)});const l=()=>K(o.mod_reference);return i.$$set=r=>{"mod"in r&&e(0,o=r.mod)},i.$capture_state=()=>({base:D,FicsitCard:ct,installMod:K,prettyNumber:V,OutdatedBanner:rt,CompatibilityButton:ft,TagList:lt,mod:o,installable:s}),i.$inject_state=r=>{"mod"in r&&e(0,o=r.mod),"installable"in r&&e(1,s=r.installable)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&1&&e(1,s="latestVersions"in o?o.latestVersions.alpha||o.latestVersions.beta||o.latestVersions.release:!1)},[o,s,l]}class Et extends et{constructor(t){super(t),ot(this,t,yt,z,nt,{mod:0}),k("SvelteRegisterComponent",{component:this,tagName:"ModCard",options:t,id:z.name})}get mod(){throw new Error("<ModCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set mod(t){throw new Error("<ModCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Et as M};
//# sourceMappingURL=ModCard.5b97f0d6.js.map
