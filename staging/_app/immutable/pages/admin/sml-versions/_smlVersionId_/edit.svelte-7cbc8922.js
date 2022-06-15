import{S as ct,i as lt,d as V,Z as ft,bf as J,s as ut,bg as K,y as mt,ae as $t,a7 as b,f as q,e as R,af as I,b0 as dt,a8 as y,k as $,l as O,h as B,j as P,ag as M,ac as pt,n as j,a9 as E,p as h,ad as L,ai as gt,u as S,t as v,ab as w,v as ht,aH as N,am as Vt,an as St,aG as _,aI as G,g as H,q as vt,r as xt,ah as Q,x as k}from"../../../../chunks/vendor-71586dff.js";import{p as W}from"../../../../chunks/routing-689f9c1f.js";import{d as U,U as F}from"../../../../chunks/graphql-587ea9ba.js";import{T as X}from"../../../../chunks/Toast-a48313ee.js";import{g as Z}from"../../../../chunks/navigation-fe373893.js";import{S as Y}from"../../../../chunks/SMLVersionForm-098caca9.js";import{b as z}from"../../../../chunks/paths-396f020f.js";import{M as tt}from"../../../../chunks/MetaDescriptors-51ef3627.js";import"../../../../chunks/singletons-d1fb5791.js";import"../../../../chunks/forms-a767280e.js";import"../../../../chunks/forms-fcbfc7d5.js";import"../../../../chunks/markdown-f8c8918c.js";import"../../../../chunks/extras-71f1917d.js";import"../../../../chunks/stores-b24fbbcb.js";const{console:et}=ft,C="src/routes/admin/sml-versions/[smlVersionId]/edit.svelte";function nt(a){let t,n;t=new Y({props:{onSubmit:a[5],initialValues:a[3],submitText:"Save"},$$inline:!0});const r={c:function(){b(t.$$.fragment)},l:function(o){y(t.$$.fragment,o)},m:function(o,s){E(t,o,s),n=!0},p:function(o,s){const c={};s&8&&(c.initialValues=o[3]),t.$set(c)},i:function(o){n||(S(t.$$.fragment,o),n=!0)},o:function(o){v(t.$$.fragment,o),n=!1},d:function(o){w(t,o)}};return V("SvelteRegisterBlock",{block:r,id:nt.name,type:"else",source:"(59:4) {:else}",ctx:a}),r}function ot(a){let t,n,r=a[1].error.message+"",i;const o={c:function(){t=R("p"),n=I("Oh no... "),i=I(r),this.h()},l:function(c){t=B(c,"P",{});var l=P(t);n=M(l,"Oh no... "),i=M(l,r),l.forEach($),this.h()},h:function(){j(t,C,57,6,1826)},m:function(c,l){h(c,t,l),L(t,n),L(t,i)},p:function(c,l){l&2&&r!==(r=c[1].error.message+"")&&Q(i,r)},i:k,o:k,d:function(c){c&&$(t)}};return V("SvelteRegisterBlock",{block:o,id:ot.name,type:"if",source:"(57:32) ",ctx:a}),o}function st(a){let t,n;const r={c:function(){t=R("p"),n=I("Loading..."),this.h()},l:function(o){t=B(o,"P",{});var s=P(t);n=M(s,"Loading..."),s.forEach($),this.h()},h:function(){j(t,C,55,6,1769)},m:function(o,s){h(o,t,s),L(t,n)},p:k,i:k,o:k,d:function(o){o&&$(t)}};return V("SvelteRegisterBlock",{block:r,id:st.name,type:"if",source:"(55:4) {#if $smlVersion.fetching}",ctx:a}),r}function it(a){let t,n,r,i;const o=[st,ot,nt],s=[];function c(u,f){return u[1].fetching?0:u[1].error?1:2}t=c(a),n=s[t]=o[t](a);const l={c:function(){n.c(),r=H()},l:function(f){n.l(f),r=H()},m:function(f,p){s[t].m(f,p),h(f,r,p),i=!0},p:function(f,p){let g=t;t=c(f),t===g?s[t].p(f,p):(vt(),v(s[g],1,1,()=>{s[g]=null}),xt(),n=s[t],n?n.p(f,p):(n=s[t]=o[t](f),n.c()),S(n,1),n.m(r.parentNode,r))},i:function(f){i||(S(n),i=!0)},o:function(f){v(n),i=!1},d:function(f){s[t].d(f),f&&$(r)}};return V("SvelteRegisterBlock",{block:l,id:it.name,type:"slot",source:"(54:2) <Content>",ctx:a}),l}function rt(a){let t,n;t=new K({props:{$$slots:{default:[it]},$$scope:{ctx:a}},$$inline:!0});const r={c:function(){b(t.$$.fragment)},l:function(o){y(t.$$.fragment,o)},m:function(o,s){E(t,o,s),n=!0},p:function(o,s){const c={};s&522&&(c.$$scope={dirty:s,ctx:o}),t.$set(c)},i:function(o){n||(S(t.$$.fragment,o),n=!0)},o:function(o){v(t.$$.fragment,o),n=!1},d:function(o){w(t,o)}};return V("SvelteRegisterBlock",{block:r,id:rt.name,type:"slot",source:"(53:0) <Card>",ctx:a}),r}function at(a){let t,n;const r={c:function(){t=R("span"),n=I(a[2]),this.h()},l:function(o){t=B(o,"SPAN",{});var s=P(t);n=M(s,a[2]),s.forEach($),this.h()},h:function(){j(t,C,65,2,2020)},m:function(o,s){h(o,t,s),L(t,n)},p:function(o,s){s&4&&Q(n,o[2])},d:function(o){o&&$(t)}};return V("SvelteRegisterBlock",{block:r,id:at.name,type:"slot",source:"(65:0) <Toast bind:running={errorToast}>",ctx:a}),r}function A(a){let t,n,r,i,o,s,c,l,u,f;t=new tt({props:{description:"Edit SML Version",title:"Admin: Edit SML Version"},$$inline:!0}),s=new J({props:{$$slots:{default:[rt]},$$scope:{ctx:a}},$$inline:!0});function p(d){a[7](d)}let g={$$slots:{default:[at]},$$scope:{ctx:a}};a[0]!==void 0&&(g.running=a[0]),l=new X({props:g,$$inline:!0}),mt.push(()=>$t(l,"running",p));const T={c:function(){b(t.$$.fragment),n=q(),r=R("h1"),i=I("Edit SMLVersion"),o=q(),b(s.$$.fragment),c=q(),b(l.$$.fragment),this.h()},l:function(e){const m=dt('[data-svelte="svelte-7e9nlv"]',document.head);y(t.$$.fragment,m),m.forEach($),n=O(e),r=B(e,"H1",{class:!0});var x=P(r);i=M(x,"Edit SMLVersion"),x.forEach($),o=O(e),y(s.$$.fragment,e),c=O(e),y(l.$$.fragment,e),this.h()},h:function(){pt(r,"class","text-4xl my-4 font-bold"),j(r,C,50,0,1655)},m:function(e,m){E(t,document.head,null),h(e,n,m),h(e,r,m),L(r,i),h(e,o,m),E(s,e,m),h(e,c,m),E(l,e,m),f=!0},p:function(e,[m]){const x={};m&522&&(x.$$scope={dirty:m,ctx:e}),s.$set(x);const D={};m&516&&(D.$$scope={dirty:m,ctx:e}),!u&&m&1&&(u=!0,D.running=e[0],gt(()=>u=!1)),l.$set(D)},i:function(e){f||(S(t.$$.fragment,e),S(s.$$.fragment,e),S(l.$$.fragment,e),f=!0)},o:function(e){v(t.$$.fragment,e),v(s.$$.fragment,e),v(l.$$.fragment,e),f=!1},d:function(e){w(t),e&&$(n),e&&$(r),e&&$(o),w(s,e),e&&$(c),w(l,e)}};return V("SvelteRegisterBlock",{block:T,id:A.name,type:"component",source:"",ctx:a}),T}const bt=W();function yt(a,t,n){let r,i,{$$slots:o={},$$scope:s}=t;ht("Edit",o,[]);let{smlVersionId:c}=t,l="",u=!1;const f=N(U,{smlVersionID:c});Vt(f,"smlVersion"),St(a,f,e=>n(1,i=e));const p=_({query:F}),g=e=>{p({smlVersionID:c,smlVersion:e}).then(m=>{m.error?(console.error(m.error.message),n(2,l="Error editing sMLVersion: "+m.error.message),n(0,u=!0)):Z(z+"/admin/sml-versions")})};G(f);const T=["smlVersionId"];Object.keys(t).forEach(e=>{!~T.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&et.warn(`<Edit> was created with unknown prop '${e}'`)});function d(e){u=e,n(0,u)}return a.$$set=e=>{"smlVersionId"in e&&n(6,c=e.smlVersionId)},a.$capture_state=()=>({paramsToProps:W,load:bt,mutation:_,operationStore:N,query:G,GetSmlVersionAdminDocument:U,UpdateSmlVersionDocument:F,Toast:X,goto:Z,SMLVersionForm:Y,base:z,MetaDescriptors:tt,Card:J,Content:K,smlVersionId:c,errorMessage:l,errorToast:u,smlVersion:f,editSMLVersion:p,onSubmit:g,initialValues:r,$smlVersion:i}),a.$inject_state=e=>{"smlVersionId"in e&&n(6,c=e.smlVersionId),"errorMessage"in e&&n(2,l=e.errorMessage),"errorToast"in e&&n(0,u=e.errorToast),"initialValues"in e&&n(3,r=e.initialValues)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),a.$$.update=()=>{a.$$.dirty&1&&(u||n(2,l="")),a.$$.dirty&2&&n(3,r=i.data?{...i.data.getSMLVersion,logo:void 0}:void 0)},[u,i,l,r,f,g,c,d]}class Ot extends ct{constructor(t){super(t),lt(this,t,yt,A,ut,{smlVersionId:6}),V("SvelteRegisterComponent",{component:this,tagName:"Edit",options:t,id:A.name});const{ctx:n}=this.$$,r=t.props||{};n[6]===void 0&&!("smlVersionId"in r)&&et.warn("<Edit> was created without expected prop 'smlVersionId'")}get smlVersionId(){throw new Error("<Edit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set smlVersionId(t){throw new Error("<Edit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ot as default,bt as load};
//# sourceMappingURL=edit.svelte-7cbc8922.js.map