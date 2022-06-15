import{S as K,i as z,s as G,d as y,v as H,e as _,af as I,h as A,j as T,ag as R,k as $,ac as L,n as N,p as b,ad as P,ah as q,x as pt,a7 as C,f as O,g as D,a8 as S,l as M,a9 as E,u as g,t as w,ab as B,q as ft,r as ut,b4 as J,aF as dt,aL as bt,aK as yt,y as _t,ae as At,ai as Nt,b6 as W}from"./vendor-71586dff.js";import{b as Y}from"./paths-396f020f.js";import{F as gt}from"./FicsitCard-7d9781f6.js";import{i as $t}from"./launcher-83e1142f.js";import{a as X}from"./formatting-f0380eae.js";import{O as ht}from"./OutdatedBanner-0c079bfd.js";import{C as Q}from"./graphql-587ea9ba.js";const Ot="src/lib/components/mods/compatibility/CompatibilityStateText.svelte";function Z(s){let t,o,n;const l={c:function(){t=_("p"),o=I(s[0]),this.h()},l:function(i){t=A(i,"P",{class:!0});var c=T(t);o=R(c,s[0]),c.forEach($),this.h()},h:function(){L(t,"class",n=tt(s[0])+" mod-state"),N(t,Ot,6,0,139)},m:function(i,c){b(i,t,c),P(t,o)},p:function(i,[c]){c&1&&q(o,i[0]),c&1&&n!==(n=tt(i[0])+" mod-state")&&L(t,"class",n)},i:pt,o:pt,d:function(i){i&&$(t)}};return y("SvelteRegisterBlock",{block:l,id:Z.name,type:"component",source:"",ctx:s}),l}function tt(s){return`mod-state-${s.toString().toLowerCase()}`}function Mt(s,t,o){let{$$slots:n={},$$scope:l}=t;H("CompatibilityStateText",n,[]);let{state:e}=t;const i=["state"];return Object.keys(t).forEach(c=>{!~i.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<CompatibilityStateText> was created with unknown prop '${c}'`)}),s.$$set=c=>{"state"in c&&o(0,e=c.state)},s.$capture_state=()=>({state:e,classForState:tt}),s.$inject_state=c=>{"state"in c&&o(0,e=c.state)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[e]}class et extends K{constructor(t){super(t),z(this,t,Mt,Z,G,{state:0}),y("SvelteRegisterComponent",{component:this,tagName:"CompatibilityStateText",options:t,id:Z.name});const{ctx:o}=this.$$,n=t.props||{};o[0]===void 0&&!("state"in n)&&console.warn("<CompatibilityStateText> was created without expected prop 'state'")}get state(){throw new Error("<CompatibilityStateText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set state(t){throw new Error("<CompatibilityStateText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const U="src/lib/components/mods/compatibility/CompatibilityInfo.svelte";function nt(s){let t,o,n,l,e,i,c,a,r,u,m,v,x;n=new et({props:{state:s[0].EA.state},$$inline:!0});let p=s[0].EA.note&&ot(s);u=new et({props:{state:s[0].EXP.state},$$inline:!0});let d=s[0].EXP.note&&it(s);const j={c:function(){t=_("div"),o=I("Early Access: "),C(n.$$.fragment),l=O(),p&&p.c(),e=O(),i=_("br"),c=O(),a=_("div"),r=I("Experimental: "),C(u.$$.fragment),m=O(),d&&d.c(),v=D(),this.h()},l:function(f){t=A(f,"DIV",{});var h=T(t);o=R(h,"Early Access: "),S(n.$$.fragment,h),h.forEach($),l=M(f),p&&p.l(f),e=M(f),i=A(f,"BR",{}),c=M(f),a=A(f,"DIV",{});var V=T(a);r=R(V,"Experimental: "),S(u.$$.fragment,V),V.forEach($),m=M(f),d&&d.l(f),v=D(),this.h()},h:function(){N(t,U,5,2,180),N(i,U,9,2,331),N(a,U,10,2,340)},m:function(f,h){b(f,t,h),P(t,o),E(n,t,null),b(f,l,h),p&&p.m(f,h),b(f,e,h),b(f,i,h),b(f,c,h),b(f,a,h),P(a,r),E(u,a,null),b(f,m,h),d&&d.m(f,h),b(f,v,h),x=!0},p:function(f,h){const V={};h&1&&(V.state=f[0].EA.state),n.$set(V),f[0].EA.note?p?p.p(f,h):(p=ot(f),p.c(),p.m(e.parentNode,e)):p&&(p.d(1),p=null);const mt={};h&1&&(mt.state=f[0].EXP.state),u.$set(mt),f[0].EXP.note?d?d.p(f,h):(d=it(f),d.c(),d.m(v.parentNode,v)):d&&(d.d(1),d=null)},i:function(f){x||(g(n.$$.fragment,f),g(u.$$.fragment,f),x=!0)},o:function(f){w(n.$$.fragment,f),w(u.$$.fragment,f),x=!1},d:function(f){f&&$(t),B(n),f&&$(l),p&&p.d(f),f&&$(e),f&&$(i),f&&$(c),f&&$(a),B(u),f&&$(m),d&&d.d(f),f&&$(v)}};return y("SvelteRegisterBlock",{block:j,id:nt.name,type:"if",source:"(5:0) {#if compatibility}",ctx:s}),j}function ot(s){let t=s[0].EA.note+"",o;const n={c:function(){o=I(t)},l:function(e){o=R(e,t)},m:function(e,i){b(e,o,i)},p:function(e,i){i&1&&t!==(t=e[0].EA.note+"")&&q(o,t)},d:function(e){e&&$(o)}};return y("SvelteRegisterBlock",{block:n,id:ot.name,type:"if",source:"(7:2) {#if compatibility.EA.note}",ctx:s}),n}function it(s){let t=s[0].EXP.note+"",o;const n={c:function(){o=I(t)},l:function(e){o=R(e,t)},m:function(e,i){b(e,o,i)},p:function(e,i){i&1&&t!==(t=e[0].EXP.note+"")&&q(o,t)},d:function(e){e&&$(o)}};return y("SvelteRegisterBlock",{block:n,id:it.name,type:"if",source:"(12:2) {#if compatibility.EXP.note}",ctx:s}),n}function ct(s){let t,o,n=s[0]&&nt(s);const l={c:function(){n&&n.c(),t=D()},l:function(i){n&&n.l(i),t=D()},m:function(i,c){n&&n.m(i,c),b(i,t,c),o=!0},p:function(i,[c]){i[0]?n?(n.p(i,c),c&1&&g(n,1)):(n=nt(i),n.c(),g(n,1),n.m(t.parentNode,t)):n&&(ft(),w(n,1,1,()=>{n=null}),ut())},i:function(i){o||(g(n),o=!0)},o:function(i){w(n),o=!1},d:function(i){n&&n.d(i),i&&$(t)}};return y("SvelteRegisterBlock",{block:l,id:ct.name,type:"component",source:"",ctx:s}),l}function Tt(s,t,o){let{$$slots:n={},$$scope:l}=t;H("CompatibilityInfo",n,[]);let{compatibility:e}=t;const i=["compatibility"];return Object.keys(t).forEach(c=>{!~i.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<CompatibilityInfo> was created with unknown prop '${c}'`)}),s.$$set=c=>{"compatibility"in c&&o(0,e=c.compatibility)},s.$capture_state=()=>({CompatibilityStateText:et,compatibility:e}),s.$inject_state=c=>{"compatibility"in c&&o(0,e=c.compatibility)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[e]}class wt extends K{constructor(t){super(t),z(this,t,Tt,ct,G,{compatibility:0}),y("SvelteRegisterComponent",{component:this,tagName:"CompatibilityInfo",options:t,id:ct.name});const{ctx:o}=this.$$,n=t.props||{};o[0]===void 0&&!("compatibility"in n)&&console.warn("<CompatibilityInfo> was created without expected prop 'compatibility'")}get compatibility(){throw new Error("<CompatibilityInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function st(s){let t,o,n,l,e;t=new J({props:{class:s[2]+" material-icons",title:"Compatibility issues",$$slots:{default:[xt]},$$scope:{ctx:s}},$$inline:!0}),t.$on("click",s[3]);function i(r){s[4](r)}let c={$$slots:{default:[Ct]},$$scope:{ctx:s}};s[1]!==void 0&&(c.open=s[1]),n=new dt({props:c,$$inline:!0}),_t.push(()=>At(n,"open",i));const a={c:function(){C(t.$$.fragment),o=O(),C(n.$$.fragment)},l:function(u){S(t.$$.fragment,u),o=M(u),S(n.$$.fragment,u)},m:function(u,m){E(t,u,m),b(u,o,m),E(n,u,m),e=!0},p:function(u,m){const v={};m&4&&(v.class=u[2]+" material-icons"),m&32&&(v.$$scope={dirty:m,ctx:u}),t.$set(v);const x={};m&33&&(x.$$scope={dirty:m,ctx:u}),!l&&m&2&&(l=!0,x.open=u[1],Nt(()=>l=!1)),n.$set(x)},i:function(u){e||(g(t.$$.fragment,u),g(n.$$.fragment,u),e=!0)},o:function(u){w(t.$$.fragment,u),w(n.$$.fragment,u),e=!1},d:function(u){B(t,u),u&&$(o),B(n,u)}};return y("SvelteRegisterBlock",{block:a,id:st.name,type:"if",source:"(20:0) {#if compatibility}",ctx:s}),a}function xt(s){let t;const o={c:function(){t=I("warning")},l:function(l){t=R(l,"warning")},m:function(l,e){b(l,t,e)},d:function(l){l&&$(t)}};return y("SvelteRegisterBlock",{block:o,id:xt.name,type:"slot",source:'(21:2) <IconButton     class=\\"{CSSClass} material-icons\\"     title=\\"Compatibility issues\\"     on:click={() => {       open = true;     }}   >',ctx:s}),o}function kt(s){let t;const o={c:function(){t=I("Compatibility Info")},l:function(l){t=R(l,"Compatibility Info")},m:function(l,e){b(l,t,e)},d:function(l){l&&$(t)}};return y("SvelteRegisterBlock",{block:o,id:kt.name,type:"slot",source:"(32:4) <Title>",ctx:s}),o}function vt(s){let t,o;t=new wt({props:{compatibility:s[0]},$$inline:!0});const n={c:function(){C(t.$$.fragment)},l:function(e){S(t.$$.fragment,e)},m:function(e,i){E(t,e,i),o=!0},p:function(e,i){const c={};i&1&&(c.compatibility=e[0]),t.$set(c)},i:function(e){o||(g(t.$$.fragment,e),o=!0)},o:function(e){w(t.$$.fragment,e),o=!1},d:function(e){B(t,e)}};return y("SvelteRegisterBlock",{block:n,id:vt.name,type:"slot",source:"(33:4) <Content>",ctx:s}),n}function Ct(s){let t,o,n,l;t=new yt({props:{$$slots:{default:[kt]},$$scope:{ctx:s}},$$inline:!0}),n=new bt({props:{$$slots:{default:[vt]},$$scope:{ctx:s}},$$inline:!0});const e={c:function(){C(t.$$.fragment),o=O(),C(n.$$.fragment)},l:function(c){S(t.$$.fragment,c),o=M(c),S(n.$$.fragment,c)},m:function(c,a){E(t,c,a),b(c,o,a),E(n,c,a),l=!0},p:function(c,a){const r={};a&32&&(r.$$scope={dirty:a,ctx:c}),t.$set(r);const u={};a&33&&(u.$$scope={dirty:a,ctx:c}),n.$set(u)},i:function(c){l||(g(t.$$.fragment,c),g(n.$$.fragment,c),l=!0)},o:function(c){w(t.$$.fragment,c),w(n.$$.fragment,c),l=!1},d:function(c){B(t,c),c&&$(o),B(n,c)}};return y("SvelteRegisterBlock",{block:e,id:Ct.name,type:"slot",source:"(31:2) <Dialog bind:open>",ctx:s}),e}function lt(s){let t,o,n=s[0]&&st(s);const l={c:function(){n&&n.c(),t=D()},l:function(i){n&&n.l(i),t=D()},m:function(i,c){n&&n.m(i,c),b(i,t,c),o=!0},p:function(i,[c]){i[0]?n?(n.p(i,c),c&1&&g(n,1)):(n=st(i),n.c(),g(n,1),n.m(t.parentNode,t)):n&&(ft(),w(n,1,1,()=>{n=null}),ut())},i:function(i){o||(g(n),o=!0)},o:function(i){w(n),o=!1},d:function(i){n&&n.d(i),i&&$(t)}};return y("SvelteRegisterBlock",{block:l,id:lt.name,type:"component",source:"",ctx:s}),l}function Vt(s,t,o){let{$$slots:n={},$$scope:l}=t;H("CompatibilityButton",n,[]);let e=!1,{compatibility:i}=t,c="";if(i)switch(i.EXP.state){case Q.Broken:c="mod-broken-button";break;case Q.Damaged:c="mod-damaged-button";break}const a=["compatibility"];Object.keys(t).forEach(m=>{!~a.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<CompatibilityButton> was created with unknown prop '${m}'`)});const r=()=>{o(1,e=!0)};function u(m){e=m,o(1,e)}return s.$$set=m=>{"compatibility"in m&&o(0,i=m.compatibility)},s.$capture_state=()=>({CompatibilityState:Q,IconButton:J,Dialog:dt,Content:bt,Title:yt,CompatibilityInfo:wt,open:e,compatibility:i,CSSClass:c}),s.$inject_state=m=>{"open"in m&&o(1,e=m.open),"compatibility"in m&&o(0,i=m.compatibility),"CSSClass"in m&&o(2,c=m.CSSClass)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[i,e,c,r,u]}class St extends K{constructor(t){super(t),z(this,t,Vt,lt,G,{compatibility:0}),y("SvelteRegisterComponent",{component:this,tagName:"CompatibilityButton",options:t,id:lt.name});const{ctx:o}=this.$$,n=t.props||{};o[0]===void 0&&!("compatibility"in n)&&console.warn("<CompatibilityButton> was created without expected prop 'compatibility'")}get compatibility(){throw new Error("<CompatibilityButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const F="src/lib/components/mods/ModCard.svelte";function Et(s){let t;const o={c:function(){t=I("visibility")},l:function(l){t=R(l,"visibility")},m:function(l,e){b(l,t,e)},d:function(l){l&&$(t)}};return y("SvelteRegisterBlock",{block:o,id:Et.name,type:"slot",source:'(20:10) <Icon class=\\"material-icons align-middle text-sm mr-1\\">',ctx:s}),o}function Bt(s){let t;const o={c:function(){t=I("download")},l:function(l){t=R(l,"download")},m:function(l,e){b(l,t,e)},d:function(l){l&&$(t)}};return y("SvelteRegisterBlock",{block:o,id:Bt.name,type:"slot",source:'(21:10) <Icon class=\\"material-icons align-middle text-sm mr-1\\">',ctx:s}),o}function It(s){let t,o,n,l=X(s[0].views)+"",e,i,c,a,r=X(s[0].downloads)+"",u,m;n=new W({props:{class:"material-icons align-middle text-sm mr-1",$$slots:{default:[Et]},$$scope:{ctx:s}},$$inline:!0}),a=new W({props:{class:"material-icons align-middle text-sm mr-1",$$slots:{default:[Bt]},$$scope:{ctx:s}},$$inline:!0});const v={c:function(){t=_("div"),o=_("span"),C(n.$$.fragment),e=I(l),i=O(),c=_("span"),C(a.$$.fragment),u=I(r),this.h()},l:function(p){t=A(p,"DIV",{slot:!0});var d=T(t);o=A(d,"SPAN",{});var j=T(o);S(n.$$.fragment,j),e=R(j,l),j.forEach($),i=M(d),c=A(d,"SPAN",{});var k=T(c);S(a.$$.fragment,k),u=R(k,r),k.forEach($),d.forEach($),this.h()},h:function(){N(o,F,19,4,786),N(c,F,20,4,901),L(t,"slot","stats"),N(t,F,18,2,763)},m:function(p,d){b(p,t,d),P(t,o),E(n,o,null),P(o,e),P(t,i),P(t,c),E(a,c,null),P(c,u),m=!0},p:function(p,d){const j={};d&8&&(j.$$scope={dirty:d,ctx:p}),n.$set(j),(!m||d&1)&&l!==(l=X(p[0].views)+"")&&q(e,l);const k={};d&8&&(k.$$scope={dirty:d,ctx:p}),a.$set(k),(!m||d&1)&&r!==(r=X(p[0].downloads)+"")&&q(u,r)},i:function(p){m||(g(n.$$.fragment,p),g(a.$$.fragment,p),m=!0)},o:function(p){w(n.$$.fragment,p),w(a.$$.fragment,p),m=!1},d:function(p){p&&$(t),B(n),B(a)}};return y("SvelteRegisterBlock",{block:v,id:It.name,type:"slot",source:"(19:2) ",ctx:s}),v}function at(s){let t,o;t=new J({props:{class:"material-icons",title:"Install",$$slots:{default:[Rt]},$$scope:{ctx:s}},$$inline:!0}),t.$on("click",s[2]);const n={c:function(){C(t.$$.fragment)},l:function(e){S(t.$$.fragment,e)},m:function(e,i){E(t,e,i),o=!0},p:function(e,i){const c={};i&8&&(c.$$scope={dirty:i,ctx:e}),t.$set(c)},i:function(e){o||(g(t.$$.fragment,e),o=!0)},o:function(e){w(t.$$.fragment,e),o=!1},d:function(e){B(t,e)}};return y("SvelteRegisterBlock",{block:n,id:at.name,type:"if",source:"(24:4) {#if installable}",ctx:s}),n}function Rt(s){let t;const o={c:function(){t=I("download")},l:function(l){t=R(l,"download")},m:function(l,e){b(l,t,e)},d:function(l){l&&$(t)}};return y("SvelteRegisterBlock",{block:o,id:Rt.name,type:"slot",source:'(25:6) <IconButton class=\\"material-icons\\" title=\\"Install\\" on:click={() => installMod(mod.mod_reference)}>',ctx:s}),o}function jt(s){let t,o,n,l,e=s[1]&&at(s);n=new St({props:{compatibility:s[0].compatibility},$$inline:!0});const i={c:function(){t=_("div"),e&&e.c(),o=O(),C(n.$$.fragment),this.h()},l:function(a){t=A(a,"DIV",{slot:!0});var r=T(t);e&&e.l(r),o=M(r),S(n.$$.fragment,r),r.forEach($),this.h()},h:function(){L(t,"slot","actions"),N(t,F,22,2,1025)},m:function(a,r){b(a,t,r),e&&e.m(t,null),P(t,o),E(n,t,null),l=!0},p:function(a,r){a[1]?e?(e.p(a,r),r&2&&g(e,1)):(e=at(a),e.c(),g(e,1),e.m(t,o)):e&&(ft(),w(e,1,1,()=>{e=null}),ut());const u={};r&1&&(u.compatibility=a[0].compatibility),n.$set(u)},i:function(a){l||(g(e),g(n.$$.fragment,a),l=!0)},o:function(a){w(e),w(n.$$.fragment,a),l=!1},d:function(a){a&&$(t),e&&e.d(),B(n)}};return y("SvelteRegisterBlock",{block:i,id:jt.name,type:"slot",source:"(23:2) ",ctx:s}),i}function Pt(s){let t,o,n;o=new ht({props:{compatibility:s[0].compatibility},$$inline:!0});const l={c:function(){t=_("div"),C(o.$$.fragment),this.h()},l:function(i){t=A(i,"DIV",{slot:!0});var c=T(t);S(o.$$.fragment,c),c.forEach($),this.h()},h:function(){L(t,"slot","outer"),N(t,F,30,2,1293)},m:function(i,c){b(i,t,c),E(o,t,null),n=!0},p:function(i,c){const a={};c&1&&(a.compatibility=i[0].compatibility),o.$set(a)},i:function(i){n||(g(o.$$.fragment,i),n=!0)},o:function(i){w(o.$$.fragment,i),n=!1},d:function(i){i&&$(t),B(o)}};return y("SvelteRegisterBlock",{block:l,id:Pt.name,type:"slot",source:"(31:2) ",ctx:s}),l}function rt(s){let t,o;t=new gt({props:{name:s[0].name,link:Y+"/mod/"+s[0].mod_reference,logo:s[0].logo,description:s[0].short_description,$$slots:{outer:[Pt],actions:[jt],stats:[It]},$$scope:{ctx:s}},$$inline:!0});const n={c:function(){C(t.$$.fragment)},l:function(e){S(t.$$.fragment,e)},m:function(e,i){E(t,e,i),o=!0},p:function(e,[i]){const c={};i&1&&(c.name=e[0].name),i&1&&(c.link=Y+"/mod/"+e[0].mod_reference),i&1&&(c.logo=e[0].logo),i&1&&(c.description=e[0].short_description),i&11&&(c.$$scope={dirty:i,ctx:e}),t.$set(c)},i:function(e){o||(g(t.$$.fragment,e),o=!0)},o:function(e){w(t.$$.fragment,e),o=!1},d:function(e){B(t,e)}};return y("SvelteRegisterBlock",{block:n,id:rt.name,type:"component",source:"",ctx:s}),n}function Dt(s,t,o){let n,{$$slots:l={},$$scope:e}=t;H("ModCard",l,[]);let{mod:i}=t;const c=["mod"];Object.keys(t).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<ModCard> was created with unknown prop '${r}'`)});const a=()=>$t(i.mod_reference);return s.$$set=r=>{"mod"in r&&o(0,i=r.mod)},s.$capture_state=()=>({base:Y,IconButton:J,Icon:W,FicsitCard:gt,installMod:$t,prettyNumber:X,OutdatedBanner:ht,CompatibilityButton:St,mod:i,installable:n}),s.$inject_state=r=>{"mod"in r&&o(0,i=r.mod),"installable"in r&&o(1,n=r.installable)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&1&&o(1,n="latestVersions"in i?i.latestVersions.alpha||i.latestVersions.beta||i.latestVersions.release:!1)},[i,n,a]}class Ht extends K{constructor(t){super(t),z(this,t,Dt,rt,G,{mod:0}),y("SvelteRegisterComponent",{component:this,tagName:"ModCard",options:t,id:rt.name});const{ctx:o}=this.$$,n=t.props||{};o[0]===void 0&&!("mod"in n)&&console.warn("<ModCard> was created without expected prop 'mod'")}get mod(){throw new Error("<ModCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set mod(t){throw new Error("<ModCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ht as M};
//# sourceMappingURL=ModCard-b1760076.js.map