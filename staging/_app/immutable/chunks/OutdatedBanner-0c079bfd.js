import{S as b,i as g,s as w,d as f,v as y,e as $,h as O,j as B,k as d,ac as m,n as v,p as S,x as u}from"./vendor-71586dff.js";import{C as l}from"./graphql-587ea9ba.js";const k="src/lib/components/mods/compatibility/OutdatedBanner.svelte";function p(n){let t;const s={c:function(){t=$("div"),this.h()},l:function(a){t=O(a,"DIV",{class:!0});var e=B(t);e.forEach(d),this.h()},h:function(){m(t,"class",n[0]),v(t,k,21,0,564)},m:function(a,e){S(a,t,e)},p:function(a,[e]){e&1&&m(t,"class",a[0])},i:u,o:u,d:function(a){a&&d(t)}};return f("SvelteRegisterBlock",{block:s,id:p.name,type:"component",source:"",ctx:n}),s}function C(n,t,s){let{$$slots:i={},$$scope:a}=t;y("OutdatedBanner",i,[]);let{compatibility:e}=t,{logo:r=!1}=t,c="";if(e)switch(e.EXP.state){case l.Broken:c+="mod-outdated-stripe",c+=" mod-broken";break;case l.Damaged:c+="mod-outdated-stripe",c+=" mod-damaged";break}r&&(c+=" mod-logo-outdated");const h=["compatibility","logo"];return Object.keys(t).forEach(o=>{!~h.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<OutdatedBanner> was created with unknown prop '${o}'`)}),n.$$set=o=>{"compatibility"in o&&s(1,e=o.compatibility),"logo"in o&&s(2,r=o.logo)},n.$capture_state=()=>({CompatibilityState:l,compatibility:e,logo:r,CSSClass:c}),n.$inject_state=o=>{"compatibility"in o&&s(1,e=o.compatibility),"logo"in o&&s(2,r=o.logo),"CSSClass"in o&&s(0,c=o.CSSClass)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[c,e,r]}class j extends b{constructor(t){super(t),g(this,t,C,p,w,{compatibility:1,logo:2}),f("SvelteRegisterComponent",{component:this,tagName:"OutdatedBanner",options:t,id:p.name});const{ctx:s}=this.$$,i=t.props||{};s[1]===void 0&&!("compatibility"in i)&&console.warn("<OutdatedBanner> was created without expected prop 'compatibility'")}get compatibility(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<OutdatedBanner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(t){throw new Error("<OutdatedBanner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{j as O};
//# sourceMappingURL=OutdatedBanner-0c079bfd.js.map