import{S as ke,i as xe,d as D,s as Ge,v as ye,F as te,_ as ne,G as ie,a1 as we,a2 as Ee,am as oe,$ as q,H as V,a0 as Se,f as ae,b as z,e as x,W as A,K as Pe,j as m,k as F,g as G,h as O,M as H,X as K,N as M,m as y,Q as k,n as I,Z as Ce,r as B,t as T,q as se,J as de,L as fe,O as ge,R as me,p as re,Y as _e,u as N}from"../chunks/vendor.fvIxxvlM.js";import{n as ce,o as ue}from"../chunks/graphql.olkSQdQZ.js";import{G as pe}from"../chunks/GuideForm.mqdwuWBt.js";import{M as he}from"../chunks/MetaDescriptors.cADo0NaG.js";const Be=async({params:i})=>({...i}),Me=Object.freeze(Object.defineProperty({__proto__:null,load:Be},Symbol.toStringTag,{value:"Module"})),{console:le}=Se,w="src/routes/guide/[guideId]/edit/+page.svelte";function L(i){let e,r;e=new he({props:{description:"Editing guide '"+i[0].data.getGuide.short_description+"'",title:"Edit guide '"+i[0].data.getGuide.name+"'"},$$inline:!0});const o={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,a){ge(e,t,a),r=!0},p:function(t,a){const s={};a&1&&(s.description="Editing guide '"+t[0].data.getGuide.short_description+"'"),a&1&&(s.title="Edit guide '"+t[0].data.getGuide.name+"'"),e.$set(s)},i:function(t){r||(B(e.$$.fragment,t),r=!0)},o:function(t){T(e.$$.fragment,t),r=!1},d:function(t){me(e,t)}};return D("SvelteRegisterBlock",{block:o,id:L.name,type:"if",source:"(62:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:i}),o}function $e(i){let e,r;e=new pe({props:{onSubmit:i[2],initialValues:i[0].data.getGuide,submitText:"Save",submitIcon:"save"},$$inline:!0});const o={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,a){ge(e,t,a),r=!0},p:function(t,a){const s={};a&1&&(s.initialValues=t[0].data.getGuide),e.$set(s)},i:function(t){r||(B(e.$$.fragment,t),r=!0)},o:function(t){T(e.$$.fragment,t),r=!1},d:function(t){me(e,t)}};return D("SvelteRegisterBlock",{block:o,id:$e.name,type:"else",source:"(84:4) {:else}",ctx:i}),o}function ve(i){let e,r,o=i[0].error.message+"",n;const t={c:function(){e=x("p"),r=A("Oh no... "),n=A(o),this.h()},l:function(s){e=G(s,"P",{});var u=O(e);r=K(u,"Oh no... "),n=K(u,o),u.forEach(m),this.h()},h:function(){y(e,w,93,6,2540)},m:function(s,u){I(s,e,u),k(e,r),k(e,n)},p:function(s,u){u&1&&o!==(o=s[0].error.message+"")&&_e(n,o)},i:N,o:N,d:function(s){s&&m(e)}};return D("SvelteRegisterBlock",{block:t,id:ve.name,type:"if",source:"(82:27) ",ctx:i}),t}function be(i){let e,r="Loading...";const o={c:function(){e=x("p"),e.textContent=r,this.h()},l:function(t){e=G(t,"P",{"data-svelte-h":!0}),H(e)!=="svelte-qdsr2u"&&(e.textContent=r),this.h()},h:function(){y(e,w,91,6,2488)},m:function(t,a){I(t,e,a)},p:N,i:N,o:N,d:function(t){t&&m(e)}};return D("SvelteRegisterBlock",{block:o,id:be.name,type:"if",source:"(80:4) {#if $guide.fetching}",ctx:i}),o}function J(i){let e,r,o,n,t="Edit Guide",a,s,u,p,C="arrow_back",j,_,h,v,f,g,l,E,Q,d=!i[0].fetching&&!i[0].error&&i[0].data.getGuide&&L(i);const U=[be,ve,$e],S=[];function W(b,c){return b[0].fetching?0:b[0].error?1:2}f=W(i),g=S[f]=U[f](i);const X={c:function(){d&&d.c(),e=ae(),r=z(),o=x("div"),n=x("h1"),n.textContent=t,a=z(),s=x("div"),u=x("button"),p=x("span"),p.textContent=C,j=A(`
      Back to Guide`),_=z(),h=x("div"),v=x("section"),g.c(),this.h()},l:function(c){const $=Pe("svelte-2z35li",document.head);d&&d.l($),e=ae(),$.forEach(m),r=F(c),o=G(c,"DIV",{class:!0});var P=O(o);n=G(P,"H1",{class:!0,"data-svelte-h":!0}),H(n)!=="svelte-mvt1bp"&&(n.textContent=t),a=F(P),s=G(P,"DIV",{});var Y=O(s);u=G(Y,"BUTTON",{class:!0});var R=O(u);p=G(R,"SPAN",{class:!0,"data-svelte-h":!0}),H(p)!=="svelte-qua3zr"&&(p.textContent=C),j=K(R,`
      Back to Guide`),R.forEach(m),Y.forEach(m),P.forEach(m),_=F(c),h=G(c,"DIV",{class:!0});var Z=O(h);v=G(Z,"SECTION",{});var ee=O(v);g.l(ee),ee.forEach(m),Z.forEach(m),this.h()},h:function(){M(n,"class","text-4xl my-4 font-bold"),y(n,w,80,2,2163),M(p,"class","material-icons pr-2"),y(p,w,83,6,2323),M(u,"class","btn variant-ghost-primary"),y(u,w,82,4,2227),y(s,w,81,2,2217),M(o,"class","flex flex-wrap h-auto justify-between items-center"),y(o,w,79,0,2096),y(v,w,89,2,2446),M(h,"class","card p-4"),y(h,w,88,0,2421)},m:function(c,$){d&&d.m(document.head,null),k(document.head,e),I(c,r,$),I(c,o,$),k(o,n),k(o,a),k(o,s),k(s,u),k(u,p),k(u,j),I(c,_,$),I(c,h,$),k(h,v),S[f].m(v,null),l=!0,E||(Q=Ce(u,"click",i[6],!1,!1,!1,!1),E=!0)},p:function(c,[$]){!c[0].fetching&&!c[0].error&&c[0].data.getGuide?d?(d.p(c,$),$&1&&B(d,1)):(d=L(c),d.c(),B(d,1),d.m(e.parentNode,e)):d&&(re(),T(d,1,1,()=>{d=null}),se());let P=f;f=W(c),f===P?S[f].p(c,$):(re(),T(S[P],1,1,()=>{S[P]=null}),se(),g=S[f],g?g.p(c,$):(g=S[f]=U[f](c),g.c()),B(g,1),g.m(v,null))},i:function(c){l||(B(d),B(g),l=!0)},o:function(c){T(d),T(g),l=!1},d:function(c){c&&(m(r),m(o),m(_),m(h)),d&&d.d(c),m(e),S[f].d(),E=!1,Q()}};return D("SvelteRegisterBlock",{block:X,id:J.name,type:"component",source:"",ctx:i}),X}function je(i,e,r){let o,{$$slots:n={},$$scope:t}=e;ye("Page",n,[]);let{data:a}=e;const{guideId:s}=a,u=te(),p=ne(),C=ie({query:ce,client:u,variables:{guide:s}});we(C,"guide"),Ee(i,C,l=>r(0,o=l));const j=l=>{u.mutation(ue,{guideId:s,guide:l}).toPromise().then(E=>{E.error?(console.error(E.error.message),p.trigger({message:"Error editing guide: "+E.error.message,background:"variant-filled-error",autohide:!1})):(p.trigger({message:"Guide updated",background:"variant-filled-success",timeout:5e3}),q(V+"/guide/"+E.data.updateGuide.id))})},_=()=>{q(V+"/guide/"+s)},h={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:l=>{l&&_()}},v=oe();i.$$.on_mount.push(function(){a===void 0&&!("data"in e||i.$$.bound[i.$$.props.data])&&le.warn("<Page> was created without expected prop 'data'")});const f=["data"];Object.keys(e).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&le.warn(`<Page> was created with unknown prop '${l}'`)});const g=()=>v.trigger(h);return i.$$set=l=>{"data"in l&&r(5,a=l.data)},i.$capture_state=()=>({getContextClient:te,queryStore:ie,EditGuideDocument:ue,GetGuideDocument:ce,goto:q,GuideForm:pe,base:V,MetaDescriptors:he,getModalStore:oe,getToastStore:ne,data:a,guideId:s,client:u,toastStore:p,guide:C,onSubmit:j,goBackFn:_,backModal:h,modalStore:v,$guide:o}),i.$inject_state=l=>{"data"in l&&r(5,a=l.data)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[o,C,j,h,v,a,g]}class Ne extends ke{constructor(e){super(e),xe(this,e,je,J,Ge,{data:5}),D("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:J.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ne as component,Me as universal};
//# sourceMappingURL=12._tE1GEy7.js.map
