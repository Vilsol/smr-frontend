import{S as Ve,i as ye,d as M,s as ke,v as xe,F as te,J as ne,aj as oe,G as se,ac as z,a1 as F,M as we,f as ie,b as U,e as x,X as H,a4 as Se,j as g,k as A,g as w,h as C,R as J,Y as K,N as O,m as S,U as k,n as j,V as Ee,r as B,t as R,q as re,u as T,x as Ie,P as fe,Q as ue,T as me,W as ge,p as ae,Z as Pe}from"../chunks/vendor.R_JgeKWw.js";import{r as ce,s as le}from"../chunks/graphql.wCfPrEY1.js";import{V as pe}from"../chunks/VersionForm.CBh4GC46.js";import{M as ve}from"../chunks/MetaDescriptors.0_4Jz1KZ.js";const _e=async({params:o})=>({...o}),Me=Object.freeze(Object.defineProperty({__proto__:null,load:_e},Symbol.toStringTag,{value:"Module"})),{console:de}=we,E="src/routes/mod/[modId]/version/[versionId]/edit/+page.svelte";function L(o){let e,s;e=new ve({props:{description:"Editing mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version,title:"Edit mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version},$$inline:!0});const i={c:function(){fe(e.$$.fragment)},l:function(t){ue(e.$$.fragment,t)},m:function(t,c){me(e,t,c),s=!0},p:function(t,c){const r={};c&1&&(r.description="Editing mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),c&1&&(r.title="Edit mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),e.$set(r)},i:function(t){s||(B(e.$$.fragment,t),s=!0)},o:function(t){R(e.$$.fragment,t),s=!1},d:function(t){ge(e,t)}};return M("SvelteRegisterBlock",{block:i,id:L.name,type:"if",source:"(66:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:o}),i}function $e(o){let e,s;e=new pe({props:{onSubmit:o[3],initialValues:o[1],modReference:o[0].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save",submitIcon:"save"},$$inline:!0});const i={c:function(){fe(e.$$.fragment)},l:function(t){ue(e.$$.fragment,t)},m:function(t,c){me(e,t,c),s=!0},p:function(t,c){const r={};c&2&&(r.initialValues=t[1]),c&1&&(r.modReference=t[0].data.getVersion.mod.mod_reference),e.$set(r)},i:function(t){s||(B(e.$$.fragment,t),s=!0)},o:function(t){R(e.$$.fragment,t),s=!1},d:function(t){ge(e,t)}};return M("SvelteRegisterBlock",{block:i,id:$e.name,type:"else",source:"(88:4) {:else}",ctx:o}),i}function he(o){let e,s,i=o[0].error.message+"",n;const t={c:function(){e=x("p"),s=H("Oh no... "),n=H(i),this.h()},l:function(r){e=w(r,"P",{});var f=C(e);s=K(f,"Oh no... "),n=K(f,i),f.forEach(g),this.h()},h:function(){S(e,E,99,6,2750)},m:function(r,f){j(r,e,f),k(e,s),k(e,n)},p:function(r,f){f&1&&i!==(i=r[0].error.message+"")&&Pe(n,i)},i:T,o:T,d:function(r){r&&g(e)}};return M("SvelteRegisterBlock",{block:t,id:he.name,type:"if",source:"(86:29) ",ctx:o}),t}function be(o){let e,s="Loading...";const i={c:function(){e=x("p"),e.textContent=s,this.h()},l:function(t){e=w(t,"P",{"data-svelte-h":!0}),J(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h:function(){S(e,E,97,6,2696)},m:function(t,c){j(t,e,c)},p:T,i:T,o:T,d:function(t){t&&g(e)}};return M("SvelteRegisterBlock",{block:i,id:be.name,type:"if",source:"(84:4) {#if $version.fetching}",ctx:o}),i}function Q(o){let e,s,i,n,t="Edit Version",c,r,f,h,D="arrow_back",N,b,p,V,u,m,I,_,q,d=!o[0].fetching&&!o[0].error&&o[0].data.getVersion&&L(o);const a=[be,he,$e],v=[];function W(y,l){return y[0].fetching?0:y[0].error?1:2}u=W(o),m=v[u]=a[u](o);const X={c:function(){d&&d.c(),e=ie(),s=U(),i=x("div"),n=x("h1"),n.textContent=t,c=U(),r=x("div"),f=x("button"),h=x("span"),h.textContent=D,N=H(`
      Back to Versions`),b=U(),p=x("div"),V=x("section"),m.c(),this.h()},l:function(l){const $=Se("svelte-wzsk0g",document.head);d&&d.l($),e=ie(),$.forEach(g),s=A(l),i=w(l,"DIV",{class:!0});var P=C(i);n=w(P,"H1",{class:!0,"data-svelte-h":!0}),J(n)!=="svelte-142h57n"&&(n.textContent=t),c=A(P),r=w(P,"DIV",{});var Y=C(r);f=w(Y,"BUTTON",{class:!0});var G=C(f);h=w(G,"SPAN",{class:!0,"data-svelte-h":!0}),J(h)!=="svelte-qua3zr"&&(h.textContent=D),N=K(G,`
      Back to Versions`),G.forEach(g),Y.forEach(g),P.forEach(g),b=A(l),p=w(l,"DIV",{class:!0});var Z=C(p);V=w(Z,"SECTION",{});var ee=C(V);m.l(ee),ee.forEach(g),Z.forEach(g),this.h()},h:function(){O(n,"class","my-4 text-4xl font-bold"),S(n,E,86,2,2364),O(h,"class","material-icons pr-2"),S(h,E,89,6,2526),O(f,"class","variant-ghost-primary btn"),S(f,E,88,4,2430),S(r,E,87,2,2420),O(i,"class","flex h-auto flex-wrap items-center justify-between"),S(i,E,85,0,2297),S(V,E,95,2,2652),O(p,"class","card p-4"),S(p,E,94,0,2627)},m:function(l,$){d&&d.m(document.head,null),k(document.head,e),j(l,s,$),j(l,i,$),k(i,n),k(i,c),k(i,r),k(r,f),k(f,h),k(f,N),j(l,b,$),j(l,p,$),k(p,V),v[u].m(V,null),I=!0,_||(q=Ee(f,"click",o[8],!1,!1,!1,!1),_=!0)},p:function(l,[$]){!l[0].fetching&&!l[0].error&&l[0].data.getVersion?d?(d.p(l,$),$&1&&B(d,1)):(d=L(l),d.c(),B(d,1),d.m(e.parentNode,e)):d&&(ae(),R(d,1,1,()=>{d=null}),re());let P=u;u=W(l),u===P?v[u].p(l,$):(ae(),R(v[P],1,1,()=>{v[P]=null}),re(),m=v[u],m?m.p(l,$):(m=v[u]=a[u](l),m.c()),B(m,1),m.m(V,null))},i:function(l){I||(B(d),B(m),I=!0)},o:function(l){R(d),R(m),I=!1},d:function(l){l&&(g(s),g(i),g(b),g(p)),d&&d.d(l),g(e),v[u].d(),_=!1,q()}};return M("SvelteRegisterBlock",{block:X,id:Q.name,type:"component",source:"",ctx:o}),X}function Be(o,e,s){let i,n,t,c,r,f=T,h=()=>(f(),f=Ie(t,a=>s(0,r=a)),t);o.$$.on_destroy.push(()=>f());let{$$slots:D={},$$scope:N}=e;xe("Page",D,[]);let{data:b}=e;const p=te(),V=ne(),u=async a=>p.mutation(le,{versionId:n,version:a}).toPromise().then(v=>{if(v.error)console.error(v.error.message),V.trigger({message:"Error editing version: "+v.error.message,background:"variant-filled-error",autohide:!1});else return V.trigger({message:"Version updated",background:"variant-filled-success",timeout:5e3}),z(F+"/mod/"+i+"/version/"+n)}),m=()=>{z(F+"/mod/"+i+"/version/"+n)},I={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:a=>{a&&m()}},_=oe();o.$$.on_mount.push(function(){b===void 0&&!("data"in e||o.$$.bound[o.$$.props.data])&&de.warn("<Page> was created without expected prop 'data'")});const q=["data"];Object.keys(e).forEach(a=>{!~q.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&de.warn(`<Page> was created with unknown prop '${a}'`)});const d=()=>_.trigger(I);return o.$$set=a=>{"data"in a&&s(6,b=a.data)},o.$capture_state=()=>({queryStore:se,getContextClient:te,GetModVersionDocument:ce,UpdateVersionDocument:le,goto:z,VersionForm:pe,base:F,MetaDescriptors:ve,getModalStore:oe,getToastStore:ne,data:b,client:p,toastStore:V,onSubmit:u,goBackFn:m,backModal:I,modalStore:_,versionId:n,modId:i,initialValues:c,version:t,$version:r}),o.$inject_state=a=>{"data"in a&&s(6,b=a.data),"versionId"in a&&s(7,n=a.versionId),"modId"in a&&(i=a.modId),"initialValues"in a&&s(1,c=a.initialValues),"version"in a&&h(s(2,t=a.version))},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&64&&s(7,{modId:i,versionId:n}=b,n),o.$$.dirty&128&&h(s(2,t=se({query:ce,client:p,variables:{version:n}}))),o.$$.dirty&1&&s(1,c=r.data?{...r.data.getVersion,logo:void 0}:void 0)},[r,c,t,u,I,_,b,n,d]}class Oe extends Ve{constructor(e){super(e),ye(this,e,Be,Q,ke,{data:6}),M("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Q.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Oe as component,Me as universal};
//# sourceMappingURL=19.KfuDp3SK.js.map
