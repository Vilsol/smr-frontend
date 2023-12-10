import{S as B,i as J,d as T,s as K,v as L,_ as S,F as k,$ as N,H as C,a0 as Q,J as E,b as y,e as p,K as V,L as P,j as m,k as O,g as h,M as z,h as R,N as D,m as v,O as j,n as g,Q as G,u as U,r as q,t as F,R as H}from"../chunks/vendor.c64ec7d3.js";import{i as I}from"../chunks/graphql.80ff4abf.js";import{M as _}from"../chunks/ModForm.371733ca.js";import{M as A}from"../chunks/MetaDescriptors.d3cba586.js";const{console:W}=Q,w="src/routes/new-mod/+page.svelte";function b(d){let t,f,o,$="New Mod",i,a,r,n,s;t=new A({props:{description:"Adding a new mod in the Satisfactory Mod Repository",title:"New mod"},$$inline:!0}),n=new _({props:{onSubmit:d[0]},$$inline:!0});const c={c:function(){E(t.$$.fragment),f=y(),o=p("h1"),o.textContent=$,i=y(),a=p("div"),r=p("section"),E(n.$$.fragment),this.h()},l:function(e){const l=V("svelte-17bmqo",document.head);P(t.$$.fragment,l),l.forEach(m),f=O(e),o=h(e,"H1",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-1equp7t"&&(o.textContent=$),i=O(e),a=h(e,"DIV",{class:!0});var M=R(a);r=h(M,"SECTION",{});var x=R(r);P(n.$$.fragment,x),x.forEach(m),M.forEach(m),this.h()},h:function(){D(o,"class","text-4xl my-4 font-bold"),v(o,w,44,0,1305),v(r,w,47,2,1380),D(a,"class","card p-4"),v(a,w,46,0,1355)},m:function(e,l){j(t,document.head,null),g(e,f,l),g(e,o,l),g(e,i,l),g(e,a,l),G(a,r),j(n,r,null),s=!0},p:U,i:function(e){s||(q(t.$$.fragment,e),q(n.$$.fragment,e),s=!0)},o:function(e){F(t.$$.fragment,e),F(n.$$.fragment,e),s=!1},d:function(e){e&&(m(f),m(o),m(i),m(a)),H(t),H(n)}};return T("SvelteRegisterBlock",{block:c,id:b.name,type:"component",source:"",ctx:d}),c}function X(d,t,f){let{$$slots:o={},$$scope:$}=t;L("Page",o,[]);const i=S(),a=k(),r=s=>{a.mutation(I,{mod:s}).toPromise().then(c=>{c.error?(console.error(c.error.message),i.trigger({message:"Error creating mod: "+c.error.message,background:"variant-filled-error",autohide:!1})):(i.trigger({message:"Mod created",background:"variant-filled-success",timeout:5e3}),N(C+"/mod/"+c.data.createMod.id))})},n=[];return Object.keys(t).forEach(s=>{!~n.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&W.warn(`<Page> was created with unknown prop '${s}'`)}),d.$capture_state=()=>({getContextClient:k,NewModDocument:I,goto:N,ModForm:_,base:C,MetaDescriptors:A,getToastStore:S,toastStore:i,client:a,onSubmit:r}),[r]}class oe extends B{constructor(t){super(t),J(this,t,X,b,K,{}),T("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:b.name})}}export{oe as component};
//# sourceMappingURL=23.22e29974.js.map
