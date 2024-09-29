import{S as V,i as W,d as J,s as X,v as Y,aa as y,H as Z,J as P,F as N,ac as T,a1 as C,M as z,P as j,b as D,e as h,X as G,a4 as K,Q as O,j as m,k as R,g as w,h as v,Y as L,N as F,m as b,T as H,n as p,U as I,Z as tt,r as _,t as q,W as A,u as et,x as ot}from"../chunks/vendor.DqaX6SDZ.js";import{j as B}from"../chunks/graphql.CNu7qPRc.js";import{M as Q}from"../chunks/ModForm.Cmqecs7B.js";import{M as U}from"../chunks/MetaDescriptors.TEX4T1nT.js";const{console:st}=z,x="src/routes/new-mod/+page.svelte";function S(u){let e,d,s,r=u[1]("new-mod.title")+"",f,g,c,a,n,l;e=new U({props:{description:"Adding a new mod in the Satisfactory Mod Repository",title:"New mod"},$$inline:!0}),n=new Q({props:{onSubmit:u[2]},$$inline:!0});const $={c:function(){j(e.$$.fragment),d=D(),s=h("h1"),f=G(r),g=D(),c=h("div"),a=h("section"),j(n.$$.fragment),this.h()},l:function(t){const o=K("svelte-17bmqo",document.head);O(e.$$.fragment,o),o.forEach(m),d=R(t),s=w(t,"H1",{class:!0});var E=v(s);f=L(E,r),E.forEach(m),g=R(t),c=w(t,"DIV",{class:!0});var M=v(c);a=w(M,"SECTION",{});var k=v(a);O(n.$$.fragment,k),k.forEach(m),M.forEach(m),this.h()},h:function(){F(s,"class","my-4 text-4xl font-bold"),b(s,x,47,0,1412),b(a,x,50,2,1501),F(c,"class","card p-4"),b(c,x,49,0,1476)},m:function(t,o){H(e,document.head,null),p(t,d,o),p(t,s,o),I(s,f),p(t,g,o),p(t,c,o),I(c,a),H(n,a,null),l=!0},p:function(t,[o]){(!l||o&2)&&r!==(r=t[1]("new-mod.title")+"")&&tt(f,r)},i:function(t){l||(_(e.$$.fragment,t),_(n.$$.fragment,t),l=!0)},o:function(t){q(e.$$.fragment,t),q(n.$$.fragment,t),l=!1},d:function(t){t&&(m(d),m(s),m(g),m(c)),A(e),A(n)}};return J("SvelteRegisterBlock",{block:$,id:S.name,type:"component",source:"",ctx:u}),$}function at(u,e,d){let s,r=et,f=()=>(r(),r=ot(a,t=>d(1,s=t)),a);u.$$.on_destroy.push(()=>r());let{$$slots:g={},$$scope:c}=e;Y("Page",g,[]);const{t:a}=y();Z(a,"t"),f();const n=P(),l=N(),$=t=>{l.mutation(B,{mod:t}).toPromise().then(o=>{o.error?(console.error(o.error.message),n.trigger({message:"Error creating mod: "+o.error.message,background:"variant-filled-error",autohide:!1})):(n.trigger({message:s("new-mod.toast.creation-success"),background:"variant-filled-success",timeout:5e3}),T(C+"/mod/"+o.data.createMod.id))})},i=[];return Object.keys(e).forEach(t=>{!~i.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&st.warn(`<Page> was created with unknown prop '${t}'`)}),u.$capture_state=()=>({getContextClient:N,NewModDocument:B,goto:T,ModForm:Q,base:C,MetaDescriptors:U,getToastStore:P,getTranslate:y,t:a,toastStore:n,client:l,onSubmit:$,$t:s}),[a,s,$]}class lt extends V{constructor(e){super(e),W(this,e,at,S,X,{t:0}),J("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:S.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{lt as component};
//# sourceMappingURL=22.sEd5wSCc.js.map
