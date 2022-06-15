import{S as N,i as V,s as X,d as g,v as H,a7 as A,a8 as B,a9 as D,u as h,t as k,ab as z,e as b,af as K,h as w,j as v,ag as L,k as m,n as S,ac as T,p as y,ad as C,ah as Y,aV as P,x as Z,f as F,b0 as tt,l as I,r as ot,aW as et,q as st}from"../../chunks/vendor-71586dff.js";import{F as U}from"../../chunks/FicsitCard-7d9781f6.js";import{M as W}from"../../chunks/MetaDescriptors-51ef3627.js";import"../../chunks/paths-396f020f.js";import"../../chunks/navigation-fe373893.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/stores-b24fbbcb.js";const O="src/lib/components/tools/ToolCard.svelte";function q(i){let t,n,a=i[0].author+"",l;const o={c:function(){t=b("div"),n=b("span"),l=K(a),this.h()},l:function(e){t=w(e,"DIV",{slot:!0});var d=v(t);n=w(d,"SPAN",{});var r=v(n);l=L(r,a),r.forEach(m),d.forEach(m),this.h()},h:function(){S(n,O,6,4,234),T(t,"slot","stats"),S(t,O,5,2,211)},m:function(e,d){y(e,t,d),C(t,n),C(n,l)},p:function(e,d){d&1&&a!==(a=e[0].author+"")&&Y(l,a)},d:function(e){e&&m(t)}};return g("SvelteRegisterBlock",{block:o,id:q.name,type:"slot",source:"(6:2) ",ctx:i}),o}function E(i){let t,n;t=new U({props:{name:i[0].name,link:i[0].link,logo:i[0].logo,description:i[0].description,$$slots:{stats:[q]},$$scope:{ctx:i}},$$inline:!0});const a={c:function(){A(t.$$.fragment)},l:function(o){B(t.$$.fragment,o)},m:function(o,s){D(t,o,s),n=!0},p:function(o,[s]){const e={};s&1&&(e.name=o[0].name),s&1&&(e.link=o[0].link),s&1&&(e.logo=o[0].logo),s&1&&(e.description=o[0].description),s&3&&(e.$$scope={dirty:s,ctx:o}),t.$set(e)},i:function(o){n||(h(t.$$.fragment,o),n=!0)},o:function(o){k(t.$$.fragment,o),n=!1},d:function(o){z(t,o)}};return g("SvelteRegisterBlock",{block:a,id:E.name,type:"component",source:"",ctx:i}),a}function nt(i,t,n){let{$$slots:a={},$$scope:l}=t;H("ToolCard",a,[]);let{tool:o}=t;const s=["tool"];return Object.keys(t).forEach(e=>{!~s.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<ToolCard> was created with unknown prop '${e}'`)}),i.$$set=e=>{"tool"in e&&n(0,o=e.tool)},i.$capture_state=()=>({FicsitCard:U,tool:o}),i.$inject_state=e=>{"tool"in e&&n(0,o=e.tool)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[o]}class Q extends N{constructor(t){super(t),V(this,t,nt,E,X,{tool:0}),g("SvelteRegisterComponent",{component:this,tagName:"ToolCard",options:t,id:E.name});const{ctx:n}=this.$$,a=t.props||{};n[0]===void 0&&!("tool"in a)&&console.warn("<ToolCard> was created without expected prop 'tool'")}get tool(){throw new Error("<ToolCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tool(t){throw new Error("<ToolCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const _="src/routes/tools/index.svelte";function G(i,t,n){const a=i.slice();return a[1]=t[n],a}function R(i){let t,n;t=new Q({props:{tool:i[1]},$$inline:!0});const a={c:function(){A(t.$$.fragment)},l:function(o){B(t.$$.fragment,o)},m:function(o,s){D(t,o,s),n=!0},p:Z,i:function(o){n||(h(t.$$.fragment,o),n=!0)},o:function(o){k(t.$$.fragment,o),n=!1},d:function(o){z(t,o)}};return g("SvelteRegisterBlock",{block:a,id:R.name,type:"each",source:"(94:2) {#each tools as tool}",ctx:i}),a}function j(i){let t,n,a,l,o,s,e;t=new W({props:{description:"A collection of useful tools for Satisfactory, such as recipe calculators and save editors",title:"Tools"},$$inline:!0});let d=i[0];P(d);let r=[];for(let p=0;p<d.length;p+=1)r[p]=R(G(i,d,p));const J=p=>k(r[p],1,1,()=>{r[p]=null}),M={c:function(){A(t.$$.fragment),n=F(),a=b("h1"),l=K("Tools"),o=F(),s=b("div");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l:function(c){const u=tt('[data-svelte="svelte-f11w9o"]',document.head);B(t.$$.fragment,u),u.forEach(m),n=I(c),a=w(c,"H1",{class:!0});var f=v(a);l=L(f,"Tools"),f.forEach(m),o=I(c),s=w(c,"DIV",{class:!0});var $=v(s);for(let x=0;x<r.length;x+=1)r[x].l($);$.forEach(m),this.h()},h:function(){document.title="Tools - SMR",T(a,"class","text-4xl my-4 font-bold"),S(a,_,91,0,3818),T(s,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4"),S(s,_,92,0,3865)},m:function(c,u){D(t,document.head,null),y(c,n,u),y(c,a,u),C(a,l),y(c,o,u),y(c,s,u);for(let f=0;f<r.length;f+=1)r[f].m(s,null);e=!0},p:function(c,[u]){if(u&1){d=c[0],P(d);let f;for(f=0;f<d.length;f+=1){const $=G(c,d,f);r[f]?(r[f].p($,u),h(r[f],1)):(r[f]=R($),r[f].c(),h(r[f],1),r[f].m(s,null))}for(st(),f=d.length;f<r.length;f+=1)J(f);ot()}},i:function(c){if(!e){h(t.$$.fragment,c);for(let u=0;u<d.length;u+=1)h(r[u]);e=!0}},o:function(c){k(t.$$.fragment,c),r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)k(r[u]);e=!1},d:function(c){z(t),c&&m(n),c&&m(a),c&&m(o),c&&m(s),et(r,c)}};return g("SvelteRegisterBlock",{block:M,id:j.name,type:"component",source:"",ctx:i}),M}function at(i,t,n){let{$$slots:a={},$$scope:l}=t;H("Tools",a,[]);const o=[{name:"Save Editor",author:"Goz3rr",logo:"https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png",description:"A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.",link:"https://github.com/Goz3rr/SatisfactorySaveEditor"},{name:"Satisfactory Tools",author:"greeny",logo:"https://i.imgur.com/WQEHo26.png",description:"A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!",link:"https://www.satisfactorytools.com/"},{name:"Recipe Calculator",author:"KirkMcDonald",logo:"",description:"Recipe calculator using sankey diagrams.",link:"https://kirkmcdonald.github.io/satisfactory-calculator/calc.html"},{name:"Map",author:"Cornik and S4XXX",logo:"",description:"Satisfactory map based on in-game coordinates.",link:"https://www.satisfactorymap.com/"},{name:"SatisGraphtory",author:"tehalexf and thinkaliker",logo:"https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png",description:"This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!",link:"https://satisgraphtory.com/"},{name:"Satisfactory Calculator",author:"Anthor",logo:"",description:"Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)",link:"https://satisfactory-calculator.com/"},{name:"Savegame Tool",author:"SillyBits",logo:"",description:"Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities",link:"https://github.com/SillyBits/satisfactory-savegame-tool-ng"},{name:"Satisfactory UI Kit",author:"Deantendo",logo:"",description:"A UI kit for Satisfactory mods",link:"https://github.com/deantendo/sfuikit"},{name:"Ficsit.info",author:"Nevir",logo:"https://github.com/ficsit/ficsit.info/blob/master/web/assets/site-icons/maskable-512.png?raw=true",description:"Production line optimization tool, and game info database",link:"https://ficsit.info/"},{name:"Daniel's Satisfactory Tools",author:"DanielTheProgrammer",logo:"https://i.imgur.com/Ogt0r9k.png",description:"Visualize production chains, and browse items and recipes!",link:"https://daniel2013.github.io/satisfactory/"},{name:"Satisfactory Toolbox",author:"Lucek",logo:"",description:'Factory tool collection, with main tool called "factory planner" with detailed, realtime stats for production and consumption, overclocking and much more.',link:"https://toolbox.satisfactory.lucek.io/"}],s=[];return Object.keys(t).forEach(e=>{!~s.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Tools> was created with unknown prop '${e}'`)}),i.$capture_state=()=>({ToolCard:Q,MetaDescriptors:W,tools:o}),[o]}class pt extends N{constructor(t){super(t),V(this,t,at,j,X,{}),g("SvelteRegisterComponent",{component:this,tagName:"Tools",options:t,id:j.name})}}export{pt as default};
//# sourceMappingURL=index.svelte-6310499b.js.map