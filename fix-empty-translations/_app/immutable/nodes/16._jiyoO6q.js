import{o as st,p as q}from"../chunks/graphql.wCfPrEY1.js";import{l as rt}from"../chunks/gql.DGDorg1Q.js";import{G as ct,S as dt,i as lt,d as x,s as ut,v as ft,F as B,J as T,ac as N,a1 as D,ag as F,M as mt,f as z,b as G,e as S,a4 as pt,j as g,k as H,g as P,R as Y,h as C,N as J,m as _,U as j,n as v,r as $,t as b,q as L,u as w,x as gt,P as Z,Q as A,T as K,W as tt,p as Q,X as U,Y as W,Z as $t}from"../chunks/vendor.R_JgeKWw.js";import{M as et}from"../chunks/ModForm.Ti9t_srR.js";import{M as ot}from"../chunks/MetaDescriptors.0_4Jz1KZ.js";const ht=async({params:o,parent:t})=>({...o,...await rt({mod:ct({query:st,client:(await t()).client,variables:{mod:o.modId},requestPolicy:"network-only"})})}),Et=Object.freeze(Object.defineProperty({__proto__:null,load:ht},Symbol.toStringTag,{value:"Module"})),{console:X}=mt,I="src/routes/mod/[modId]/edit/+page.svelte";function R(o){let t,s;t=new ot({props:{description:"Editing mod "+o[0].data.mod.name,title:"Edit mod "+o[0].data.mod.name,image:o[0].data.mod.logo},$$inline:!0});const r={c:function(){Z(t.$$.fragment)},l:function(e){A(t.$$.fragment,e)},m:function(e,i){K(t,e,i),s=!0},p:function(e,i){const d={};i&1&&(d.description="Editing mod "+e[0].data.mod.name),i&1&&(d.title="Edit mod "+e[0].data.mod.name),i&1&&(d.image=e[0].data.mod.logo),t.$set(d)},i:function(e){s||($(t.$$.fragment,e),s=!0)},o:function(e){b(t.$$.fragment,e),s=!1},d:function(e){tt(t,e)}};return x("SvelteRegisterBlock",{block:r,id:R.name,type:"if",source:"(48:2) {#if !$mod.fetching && !$mod.error && $mod.data.mod}",ctx:o}),r}function nt(o){let t,s;t=new et({props:{onSubmit:o[3],initialValues:o[1],editing:!0,submitText:"Save"},$$inline:!0});const r={c:function(){Z(t.$$.fragment)},l:function(e){A(t.$$.fragment,e)},m:function(e,i){K(t,e,i),s=!0},p:function(e,i){const d={};i&2&&(d.initialValues=e[1]),t.$set(d)},i:function(e){s||($(t.$$.fragment,e),s=!0)},o:function(e){b(t.$$.fragment,e),s=!1},d:function(e){tt(t,e)}};return x("SvelteRegisterBlock",{block:r,id:nt.name,type:"else",source:"(64:4) {:else}",ctx:o}),r}function it(o){let t,s,r=o[0].error.message+"",n;const e={c:function(){t=S("p"),s=U("Oh no... "),n=U(r),this.h()},l:function(d){t=P(d,"P",{});var u=C(t);s=W(u,"Oh no... "),n=W(u,r),u.forEach(g),this.h()},h:function(){_(t,I,69,6,1801)},m:function(d,u){v(d,t,u),j(t,s),j(t,n)},p:function(d,u){u&1&&r!==(r=d[0].error.message+"")&&$t(n,r)},i:w,o:w,d:function(d){d&&g(t)}};return x("SvelteRegisterBlock",{block:e,id:it.name,type:"if",source:"(62:25) ",ctx:o}),e}function at(o){let t,s="Loading...";const r={c:function(){t=S("p"),t.textContent=s,this.h()},l:function(e){t=P(e,"P",{"data-svelte-h":!0}),Y(t)!=="svelte-qdsr2u"&&(t.textContent=s),this.h()},h:function(){_(t,I,67,6,1751)},m:function(e,i){v(e,t,i)},p:w,i:w,o:w,d:function(e){e&&g(t)}};return x("SvelteRegisterBlock",{block:r,id:at.name,type:"if",source:"(60:4) {#if $mod.fetching}",ctx:o}),r}function O(o){let t,s,r,n="Edit Mod",e,i,d,u,f,y,l=!o[0].fetching&&!o[0].error&&o[0].data.mod&&R(o);const k=[at,it,nt],m=[];function E(a,c){return a[0].fetching?0:a[0].error?1:2}u=E(o),f=m[u]=k[u](o);const M={c:function(){l&&l.c(),t=z(),s=G(),r=S("h1"),r.textContent=n,e=G(),i=S("div"),d=S("section"),f.c(),this.h()},l:function(c){const p=pt("svelte-q8g25b",document.head);l&&l.l(p),t=z(),p.forEach(g),s=H(c),r=P(c,"H1",{class:!0,"data-svelte-h":!0}),Y(r)!=="svelte-1bmvkg7"&&(r.textContent=n),e=H(c),i=P(c,"DIV",{class:!0});var h=C(i);d=P(h,"SECTION",{});var V=C(d);f.l(V),V.forEach(g),h.forEach(g),this.h()},h:function(){J(r,"class","my-4 text-4xl font-bold"),_(r,I,62,0,1635),_(d,I,65,2,1711),J(i,"class","card p-4"),_(i,I,64,0,1686)},m:function(c,p){l&&l.m(document.head,null),j(document.head,t),v(c,s,p),v(c,r,p),v(c,e,p),v(c,i,p),j(i,d),m[u].m(d,null),y=!0},p:function(c,[p]){!c[0].fetching&&!c[0].error&&c[0].data.mod?l?(l.p(c,p),p&1&&$(l,1)):(l=R(c),l.c(),$(l,1),l.m(t.parentNode,t)):l&&(Q(),b(l,1,1,()=>{l=null}),L());let h=u;u=E(c),u===h?m[u].p(c,p):(Q(),b(m[h],1,1,()=>{m[h]=null}),L(),f=m[u],f?f.p(c,p):(f=m[u]=k[u](c),f.c()),$(f,1),f.m(d,null))},i:function(c){y||($(l),$(f),y=!0)},o:function(c){b(l),b(f),y=!1},d:function(c){c&&(g(s),g(r),g(e),g(i)),l&&l.d(c),g(t),m[u].d()}};return x("SvelteRegisterBlock",{block:M,id:O.name,type:"component",source:"",ctx:o}),M}function vt(o,t,s){let r,n,e,i,d=w,u=()=>(d(),d=gt(n,a=>s(0,i=a)),n);o.$$.on_destroy.push(()=>d());let{$$slots:f={},$$scope:y}=t;ft("Page",f,[]);let{data:l}=t;const k=B(),m=T(),E=a=>{k.mutation(q,{modId:F(n).data.mod.id,mod:a}).toPromise().then(c=>{c.error?(console.error(c.error.message),m.trigger({message:"Error editing mod: "+c.error.message,background:"variant-filled-error",autohide:!1})):(m.trigger({message:"Mod updated",background:"variant-filled-success",timeout:5e3}),N(D+"/mod/"+r))})};o.$$.on_mount.push(function(){l===void 0&&!("data"in t||o.$$.bound[o.$$.props.data])&&X.warn("<Page> was created without expected prop 'data'")});const M=["data"];return Object.keys(t).forEach(a=>{!~M.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&X.warn(`<Page> was created with unknown prop '${a}'`)}),o.$$set=a=>{"data"in a&&s(4,l=a.data)},o.$capture_state=()=>({getContextClient:B,EditModDocument:q,goto:N,ModForm:et,base:D,MetaDescriptors:ot,getToastStore:T,get:F,data:l,client:k,toastStore:m,onSubmit:E,initialValues:e,modId:r,mod:n,$mod:i}),o.$inject_state=a=>{"data"in a&&s(4,l=a.data),"initialValues"in a&&s(1,e=a.initialValues),"modId"in a&&(r=a.modId),"mod"in a&&u(s(2,n=a.mod))},t&&"$$inject"in t&&o.$inject_state(t.$$inject),o.$$.update=()=>{o.$$.dirty&16&&u(s(2,{modId:r,mod:n}=l,n)),o.$$.dirty&1&&s(1,e=i.data?{...i.data.mod,logo:void 0}:void 0)},[i,e,n,E,l]}class St extends dt{constructor(t){super(t),lt(this,t,vt,O,ut,{data:4}),x("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:O.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{St as component,Et as universal};
//# sourceMappingURL=16._jiyoO6q.js.map
