import{S as lt,i as at,s as rt,d as k,O as it,v as ft,aa as Q,H as ut,M as wt,e as x,b as j,g as w,h as N,R as U,k as I,j as b,m as C,N as A,l as Ct,am as kt,n as g,U as _,an as nt,$ as z,V as st,u as X,_ as St,a0 as At,x as pt,ao as Pt,X as R,Y as B,K as mt,L as D,P as T,Q as L,T as q,r as W,t as H,W as K,y as $t,a3 as yt,Z as V,a5 as bt}from"./vendor.R_JgeKWw.js";import{t as O}from"./graphql.wCfPrEY1.js";const{Object:_t}=wt,S="src/lib/components/mods/compatibility/CompatibilityEdit.svelte";function ct(i,t,s){const c=i.slice();return c[5]=t[s],c}function F(i){let t,s=i[5]+"",c;const a={c:function(){t=x("option"),c=R(s),this.h()},l:function(r){t=w(r,"OPTION",{});var e=N(t);c=B(e,s),e.forEach(b),this.h()},h:function(){t.__value=i[5],z(t,t.__value),C(t,S,16,6,439)},m:function(r,e){g(r,t,e),_(t,c)},p:X,d:function(r){r&&b(t)}};return k("SvelteRegisterBlock",{block:a,id:F.name,type:"each",source:"(12:4) {#each Object.values(CompatibilityState) as state}",ctx:i}),a}function G(i){let t,s,c="Compatibility State",a,n,r,e,o,l,u,f="Note",m,p,$,Y,et,M=it(Object.values(O)),h=[];for(let v=0;v<M.length;v+=1)h[v]=F(ct(i,M,v));const ot={c:function(){t=x("label"),s=x("span"),s.textContent=c,a=j(),n=x("select");for(let y=0;y<h.length;y+=1)h[y].c();r=j(),e=x("br"),o=j(),l=x("label"),u=x("span"),u.textContent=f,m=j(),p=x("textarea"),this.h()},l:function(y){t=w(y,"LABEL",{class:!0});var E=N(t);s=w(E,"SPAN",{"data-svelte-h":!0}),U(s)!=="svelte-aygekh"&&(s.textContent=c),a=I(E),n=w(E,"SELECT",{class:!0,style:!0});var d=N(n);for(let Z=0;Z<h.length;Z+=1)h[Z].l(d);d.forEach(b),E.forEach(b),r=I(y),e=w(y,"BR",{}),o=I(y),l=w(y,"LABEL",{class:!0});var P=N(l);u=w(P,"SPAN",{"data-svelte-h":!0}),U(u)!=="svelte-34a23a"&&(u.textContent=f),m=I(P),p=w(P,"TEXTAREA",{class:!0,placeholder:!0}),N(p).forEach(b),P.forEach(b),this.h()},h:function(){C(s,S,13,2,258),A(n,"class","select"),Ct(n,"margin-bottom","10px"),i[0].state===void 0&&kt(()=>i[3].call(n)),C(n,S,14,2,293),A(t,"class","label"),C(t,S,12,0,234),C(e,S,21,0,512),C(u,S,24,2,544),A(p,"class","textarea p-4"),A(p,"placeholder",$=i[2]("compatibility-info.notes")),C(p,S,25,2,564),A(l,"class","label"),C(l,S,23,0,520)},m:function(y,E){g(y,t,E),_(t,s),_(t,a),_(t,n);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(n,null);nt(n,i[0].state,!0),g(y,r,E),g(y,e,E),g(y,o,E),g(y,l,E),_(l,u),_(l,m),_(l,p),z(p,i[0].note),Y||(et=[st(n,"change",i[3]),st(p,"input",i[4])],Y=!0)},p:function(y,[E]){if(E&0){M=it(Object.values(O));let d;for(d=0;d<M.length;d+=1){const P=ct(y,M,d);h[d]?h[d].p(P,E):(h[d]=F(P),h[d].c(),h[d].m(n,null))}for(;d<h.length;d+=1)h[d].d(1);h.length=M.length}E&1&&nt(n,y[0].state),E&4&&$!==($=y[2]("compatibility-info.notes"))&&A(p,"placeholder",$),E&1&&z(p,y[0].note)},i:X,o:X,d:function(y){y&&(b(t),b(r),b(e),b(o),b(l)),St(h,y),Y=!1,At(et)}};return k("SvelteRegisterBlock",{block:ot,id:G.name,type:"component",source:"",ctx:i}),ot}function jt(i,t,s){let c,a=X,n=()=>(a(),a=pt(l,p=>s(2,c=p)),l);i.$$.on_destroy.push(()=>a());let{$$slots:r={},$$scope:e}=t;ft("CompatibilityEdit",r,[]);let{compatibility:o={state:O.Works}}=t;const{t:l}=Q();ut(l,"t"),n();const u=["compatibility"];_t.keys(t).forEach(p=>{!~u.indexOf(p)&&p.slice(0,2)!=="$$"&&p!=="slot"&&console.warn(`<CompatibilityEdit> was created with unknown prop '${p}'`)});function f(){o.state=Pt(this),s(0,o)}function m(){o.note=this.value,s(0,o)}return i.$$set=p=>{"compatibility"in p&&s(0,o=p.compatibility)},i.$capture_state=()=>({CompatibilityState:O,getTranslate:Q,compatibility:o,t:l,$t:c}),i.$inject_state=p=>{"compatibility"in p&&s(0,o=p.compatibility)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[o,l,c,f,m]}class tt extends lt{constructor(t){super(t),at(this,t,jt,G,rt,{compatibility:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityEdit",options:t,id:G.name})}get compatibility(){throw new Error("<CompatibilityEdit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const dt="src/lib/components/mods/compatibility/ModCompatibilityEdit.svelte";function ht(i){let t,s="rocket_launch",c,a=i[2]("early-access")+"",n,r,e=i[2]("compatibility")+"",o;const l={c:function(){t=x("span"),t.textContent=s,c=j(),n=R(a),r=R(" - "),o=R(e),this.h()},l:function(f){t=w(f,"SPAN",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-1ol260v"&&(t.textContent=s),c=I(f),n=B(f,a),r=B(f," - "),o=B(f,e),this.h()},h:function(){A(t,"class","material-icons text-sm"),C(t,dt,28,6,716)},m:function(f,m){g(f,t,m),g(f,c,m),g(f,n,m),g(f,r,m),g(f,o,m)},p:function(f,m){m&4&&a!==(a=f[2]("early-access")+"")&&V(n,a),m&4&&e!==(e=f[2]("compatibility")+"")&&V(o,e)},d:function(f){f&&(b(t),b(c),b(n),b(r),b(o))}};return k("SvelteRegisterBlock",{block:l,id:ht.name,type:"slot",source:'(24:4) <svelte:fragment slot=\\"summary\\">',ctx:i}),l}function gt(i){let t,s,c;function a(e){i[3](e)}let n={};i[0].EA!==void 0&&(n.compatibility=i[0].EA),t=new tt({props:n,$$inline:!0}),$t.push(()=>yt(t,"compatibility",a));const r={c:function(){T(t.$$.fragment)},l:function(o){L(t.$$.fragment,o)},m:function(o,l){q(t,o,l),c=!0},p:function(o,l){const u={};!s&&l&1&&(s=!0,u.compatibility=o[0].EA,bt(()=>s=!1)),t.$set(u)},i:function(o){c||(W(t.$$.fragment,o),c=!0)},o:function(o){H(t.$$.fragment,o),c=!1},d:function(o){K(t,o)}};return k("SvelteRegisterBlock",{block:r,id:gt.name,type:"slot",source:'(27:4) <svelte:fragment slot=\\"content\\">',ctx:i}),r}function Et(i){let t,s="science",c,a=i[2]("experimental")+"",n,r,e=i[2]("compatibility")+"",o;const l={c:function(){t=x("span"),t.textContent=s,c=j(),n=R(a),r=R(" - "),o=R(e),this.h()},l:function(f){t=w(f,"SPAN",{class:!0,"data-svelte-h":!0}),U(t)!=="svelte-rqph63"&&(t.textContent=s),c=I(f),n=B(f,a),r=B(f," - "),o=B(f,e),this.h()},h:function(){A(t,"class","material-icons text-sm"),C(t,dt,36,6,1053)},m:function(f,m){g(f,t,m),g(f,c,m),g(f,n,m),g(f,r,m),g(f,o,m)},p:function(f,m){m&4&&a!==(a=f[2]("experimental")+"")&&V(n,a),m&4&&e!==(e=f[2]("compatibility")+"")&&V(o,e)},d:function(f){f&&(b(t),b(c),b(n),b(r),b(o))}};return k("SvelteRegisterBlock",{block:l,id:Et.name,type:"slot",source:'(32:4) <svelte:fragment slot=\\"summary\\">',ctx:i}),l}function vt(i){let t,s,c;function a(e){i[4](e)}let n={};i[0].EXP!==void 0&&(n.compatibility=i[0].EXP),t=new tt({props:n,$$inline:!0}),$t.push(()=>yt(t,"compatibility",a));const r={c:function(){T(t.$$.fragment)},l:function(o){L(t.$$.fragment,o)},m:function(o,l){q(t,o,l),c=!0},p:function(o,l){const u={};!s&&l&1&&(s=!0,u.compatibility=o[0].EXP,bt(()=>s=!1)),t.$set(u)},i:function(o){c||(W(t.$$.fragment,o),c=!0)},o:function(o){H(t.$$.fragment,o),c=!1},d:function(o){K(t,o)}};return k("SvelteRegisterBlock",{block:r,id:vt.name,type:"slot",source:'(35:4) <svelte:fragment slot=\\"content\\">',ctx:i}),r}function xt(i){let t,s,c,a;t=new D({props:{$$slots:{content:[gt],summary:[ht]},$$scope:{ctx:i}},$$inline:!0}),c=new D({props:{$$slots:{content:[vt],summary:[Et]},$$scope:{ctx:i}},$$inline:!0});const n={c:function(){T(t.$$.fragment),s=j(),T(c.$$.fragment)},l:function(e){L(t.$$.fragment,e),s=I(e),L(c.$$.fragment,e)},m:function(e,o){q(t,e,o),g(e,s,o),q(c,e,o),a=!0},p:function(e,o){const l={};o&69&&(l.$$scope={dirty:o,ctx:e}),t.$set(l);const u={};o&69&&(u.$$scope={dirty:o,ctx:e}),c.$set(u)},i:function(e){a||(W(t.$$.fragment,e),W(c.$$.fragment,e),a=!0)},o:function(e){H(t.$$.fragment,e),H(c.$$.fragment,e),a=!1},d:function(e){e&&b(s),K(t,e),K(c,e)}};return k("SvelteRegisterBlock",{block:n,id:xt.name,type:"slot",source:"(22:0) <Accordion>",ctx:i}),n}function J(i){let t,s;t=new mt({props:{$$slots:{default:[xt]},$$scope:{ctx:i}},$$inline:!0});const c={c:function(){T(t.$$.fragment)},l:function(n){L(t.$$.fragment,n)},m:function(n,r){q(t,n,r),s=!0},p:function(n,[r]){const e={};r&69&&(e.$$scope={dirty:r,ctx:n}),t.$set(e)},i:function(n){s||(W(t.$$.fragment,n),s=!0)},o:function(n){H(t.$$.fragment,n),s=!1},d:function(n){K(t,n)}};return k("SvelteRegisterBlock",{block:c,id:J.name,type:"component",source:"",ctx:i}),c}function It(i,t,s){let c,a=X,n=()=>(a(),a=pt(u,$=>s(2,c=$)),u);i.$$.on_destroy.push(()=>a());let{$$slots:r={},$$scope:e}=t;ft("ModCompatibilityEdit",r,[]);const o={EA:{state:O.Works,note:""},EXP:{state:O.Works,note:""}};let{compatibilityInfo:l=null}=t;const{t:u}=Q();ut(u,"t"),n();const f=["compatibilityInfo"];Object.keys(t).forEach($=>{!~f.indexOf($)&&$.slice(0,2)!=="$$"&&$!=="slot"&&console.warn(`<ModCompatibilityEdit> was created with unknown prop '${$}'`)});function m($){i.$$.not_equal(l.EA,$)&&(l.EA=$,s(0,l))}function p($){i.$$.not_equal(l.EXP,$)&&(l.EXP=$,s(0,l))}return i.$$set=$=>{"compatibilityInfo"in $&&s(0,l=$.compatibilityInfo)},i.$capture_state=()=>({CompatibilityState:O,CompatibilityEdit:tt,getTranslate:Q,Accordion:mt,AccordionItem:D,prefilledCompatibilityInfo:o,compatibilityInfo:l,t:u,$t:c}),i.$inject_state=$=>{"compatibilityInfo"in $&&s(0,l=$.compatibilityInfo)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&1&&l==null&&s(0,l=o)},[l,u,c,m,p]}class Ot extends lt{constructor(t){super(t),at(this,t,It,J,rt,{compatibilityInfo:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"ModCompatibilityEdit",options:t,id:J.name})}get compatibilityInfo(){throw new Error("<ModCompatibilityEdit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibilityInfo(t){throw new Error("<ModCompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<ModCompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ot as M};
//# sourceMappingURL=ModCompatibilityEdit.2xKqD0iW.js.map
