import{S as Se,i as ke,d as M,s as Ee,H as we,I as Ce,v as Pe,J as ne,F as re,ac as oe,a1 as ie,M as Ne,P as W,b as U,e as x,a4 as Ve,Q as X,j as g,k as j,g as b,R as O,h as N,N as p,m as y,T as Y,n as A,U as d,t as z,q as Be,r as L,W as Z,u as H,x as Ie,p as Ue,$ as le,V as je,ad as Ae,a0 as De,X as pe,Y as ge,Z as $e}from"../chunks/vendor.DqaX6SDZ.js";import{k as ce}from"../chunks/graphql.CNu7qPRc.js";import{o as Re,a as Te,b as Me,s as Oe,c as ue,v as fe,r as me,V as G,z as ze}from"../chunks/forms.QVQn9_Bp.js";import{t as de}from"../chunks/forms.DG6XnBFm.js";import{u as Q}from"../chunks/user.B11sKlvf.js";import{M as he}from"../chunks/MetaDescriptors.TEX4T1nT.js";const{console:Le}=Ne,S="src/routes/settings/+page.svelte";function ve(l){let e,s,a,i,o="Avatar:",r,n,$,c,C,h,u,m,D="Username",E,t,v,f,R,T,V,ee="Save",_,J,te;c=new G({props:{for:"avatar",$$slots:{default:[be,({messages:w})=>({8:w}),({messages:w})=>w?256:0]},$$scope:{ctx:l}},$$inline:!0}),f=new G({props:{for:"username",$$slots:{default:[ye,({messages:w})=>({8:w}),({messages:w})=>w?256:0]},$$scope:{ctx:l}},$$inline:!0});const ae={c:function(){e=x("form"),s=x("div"),a=x("div"),i=x("label"),i.textContent=o,r=U(),n=x("input"),$=U(),W(c.$$.fragment),C=U(),h=x("div"),u=x("label"),m=x("span"),m.textContent=D,E=U(),t=x("input"),v=U(),W(f.$$.fragment),R=U(),T=x("div"),V=x("button"),V.textContent=ee,this.h()},l:function(k){e=b(k,"FORM",{});var P=N(e);s=b(P,"DIV",{class:!0});var B=N(s);a=b(B,"DIV",{class:!0});var I=N(a);i=b(I,"LABEL",{for:!0,"data-svelte-h":!0}),O(i)!=="svelte-1a2u3bg"&&(i.textContent=o),r=j(I),n=b(I,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),$=j(I),X(c.$$.fragment,I),I.forEach(g),C=j(B),h=b(B,"DIV",{class:!0});var q=N(h);u=b(q,"LABEL",{class:!0});var F=N(u);m=b(F,"SPAN",{"data-svelte-h":!0}),O(m)!=="svelte-9difb2"&&(m.textContent=D),E=j(F),t=b(F,"INPUT",{type:!0,class:!0}),F.forEach(g),v=j(q),X(f.$$.fragment,q),q.forEach(g),R=j(B),T=b(B,"DIV",{});var se=N(T);V=b(se,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),O(V)!=="svelte-13mhoq1"&&(V.textContent=ee),se.forEach(g),B.forEach(g),P.forEach(g),this.h()},h:function(){p(i,"for","avatar"),y(i,S,83,12,2729),p(n,"id","avatar"),p(n,"class","base-input"),p(n,"name","avatar"),p(n,"type","file"),p(n,"accept","image/png,image/jpeg,image/gif"),p(n,"placeholder","Avatar"),y(n,S,84,12,2777),p(a,"class","grid grid-flow-row gap-2"),y(a,S,82,10,2678),y(m,S,98,14,3275),p(t,"type","text"),t.required=!0,p(t,"class","input p-2"),y(t,S,99,14,3311),p(u,"class","label"),y(u,S,97,12,3239),p(h,"class","grid grid-flow-row gap-2"),y(h,S,96,10,3188),p(V,"class","variant-ghost-primary btn"),p(V,"type","submit"),y(V,S,107,12,3628),y(T,S,106,10,3610),p(s,"class","grid grid-flow-row gap-6"),y(s,S,81,8,2629),y(e,S,80,6,2605)},m:function(k,P){A(k,e,P),d(e,s),d(s,a),d(a,i),d(a,r),d(a,n),d(a,$),Y(c,a,null),d(s,C),d(s,h),d(h,u),d(u,m),d(u,E),d(u,t),le(t,l[3].username),d(h,v),Y(f,h,null),d(s,R),d(s,T),d(T,V),_=!0,J||(te=[je(t,"input",l[5]),Ae(l[2].call(null,e))],J=!0)},p:function(k,P){const B={};P&768&&(B.$$scope={dirty:P,ctx:k}),c.$set(B),P&8&&t.value!==k[3].username&&le(t,k[3].username);const I={};P&768&&(I.$$scope={dirty:P,ctx:k}),f.$set(I)},i:function(k){_||(L(c.$$.fragment,k),L(f.$$.fragment,k),_=!0)},o:function(k){z(c.$$.fragment,k),z(f.$$.fragment,k),_=!1},d:function(k){k&&g(e),Z(c),Z(f),J=!1,De(te)}};return M("SvelteRegisterBlock",{block:ae,id:ve.name,type:"else",source:"(72:4) {:else}",ctx:l}),ae}function xe(l){let e,s="Please log in";const a={c:function(){e=x("p"),e.textContent=s,this.h()},l:function(o){e=b(o,"P",{"data-svelte-h":!0}),O(e)!=="svelte-1njyisr"&&(e.textContent=s),this.h()},h:function(){y(e,S,78,6,2566)},m:function(o,r){A(o,e,r)},p:H,i:H,o:H,d:function(o){o&&g(e)}};return M("SvelteRegisterBlock",{block:a,id:xe.name,type:"if",source:"(70:4) {#if $user === null}",ctx:l}),a}function be(l){let e,s=(l[8]||"")+"",a;const i={c:function(){e=x("span"),a=pe(s),this.h()},l:function(r){e=b(r,"SPAN",{class:!0});var n=N(e);a=ge(n,s),n.forEach(g),this.h()},h:function(){p(e,"class","validation-message"),y(e,S,92,14,3071)},m:function(r,n){A(r,e,n),d(e,a)},p:function(r,n){n&256&&s!==(s=(r[8]||"")+"")&&$e(a,s)},d:function(r){r&&g(e)}};return M("SvelteRegisterBlock",{block:i,id:be.name,type:"slot",source:'(84:12) <ValidationMessage for=\\"avatar\\" let:messages={message}>',ctx:l}),i}function ye(l){let e,s=(l[8]||"")+"",a;const i={c:function(){e=x("span"),a=pe(s),this.h()},l:function(r){e=b(r,"SPAN",{class:!0});var n=N(e);a=ge(n,s),n.forEach(g),this.h()},h:function(){p(e,"class","validation-message"),y(e,S,102,14,3493)},m:function(r,n){A(r,e,n),d(e,a)},p:function(r,n){n&256&&s!==(s=(r[8]||"")+"")&&$e(a,s)},d:function(r){r&&g(e)}};return M("SvelteRegisterBlock",{block:i,id:ye.name,type:"slot",source:'(94:12) <ValidationMessage for=\\"username\\" let:messages={message}>',ctx:l}),i}function K(l){let e,s,a,i="Settings",o,r,n,$,c,C;e=new he({props:{description:"Change your user settings",title:"Settings"},$$inline:!0});const h=[xe,ve],u=[];function m(E,t){return E[1]===null?0:1}$=m(l),c=u[$]=h[$](l);const D={c:function(){W(e.$$.fragment),s=U(),a=x("h1"),a.textContent=i,o=U(),r=x("div"),n=x("section"),c.c(),this.h()},l:function(t){const v=Ve("svelte-1ae5i2c",document.head);X(e.$$.fragment,v),v.forEach(g),s=j(t),a=b(t,"H1",{class:!0,"data-svelte-h":!0}),O(a)!=="svelte-1pzybri"&&(a.textContent=i),o=j(t),r=b(t,"DIV",{class:!0});var f=N(r);n=b(f,"SECTION",{});var R=N(n);c.l(R),R.forEach(g),f.forEach(g),this.h()},h:function(){p(a,"class","my-4 text-4xl font-bold"),y(a,S,73,0,2449),y(n,S,76,2,2525),p(r,"class","card p-4"),y(r,S,75,0,2500)},m:function(t,v){Y(e,document.head,null),A(t,s,v),A(t,a,v),A(t,o,v),A(t,r,v),d(r,n),u[$].m(n,null),C=!0},p:function(t,[v]){let f=$;$=m(t),$===f?u[$].p(t,v):(Ue(),z(u[f],1,1,()=>{u[f]=null}),Be(),c=u[$],c?c.p(t,v):(c=u[$]=h[$](t),c.c()),L(c,1),c.m(n,null))},i:function(t){C||(L(e.$$.fragment,t),L(c),C=!0)},o:function(t){z(e.$$.fragment,t),z(c),C=!1},d:function(t){t&&(g(s),g(a),g(o),g(r)),Z(e),u[$].d()}};return M("SvelteRegisterBlock",{block:D,id:K.name,type:"component",source:"",ctx:l}),D}function _e(l,e,s){let a,i,o=H,r=()=>(o(),o=Ie(m,t=>s(3,i=t)),m);we(Q,"user"),Ce(l,Q,t=>s(1,a=t)),l.$$.on_destroy.push(()=>o());let{$$slots:n={},$$scope:$}=e;Pe("Page",n,[]);const c=ne(),C=re(),h=Re({avatar:Te(Me().refine(t=>"name"in t&&"size"in t&&"type"in t)),username:Oe().min(3).max(32)});let u,m;const D=[];Object.keys(e).forEach(t=>{!~D.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&Le.warn(`<Page> was created with unknown prop '${t}'`)});function E(){i.username=this.value,m.set(i)}return l.$capture_state=()=>({getContextClient:re,UpdateUserDocument:ce,goto:oe,createForm:ue,validator:fe,reporter:me,ValidationMessage:G,trimNonSchema:de,user:Q,zod:ze,base:ie,MetaDescriptors:he,getToastStore:ne,toastStore:c,client:C,userSchema:h,form:u,data:m,$user:a,$data:i}),l.$inject_state=t=>{"form"in t&&s(2,u=t.form),"data"in t&&r(s(0,m=t.data))},e&&"$$inject"in e&&l.$inject_state(e.$$inject),l.$$.update=()=>{if(l.$$.dirty&3&&a&&!m){const t=ue({initialValues:{username:a.username},extend:[fe({schema:h}),me],onSubmit:v=>{console.log("submitted",v),C.mutation(ce,{user:de(v,h),userId:a.id}).toPromise().then(f=>{f.error?(console.error(f.error.message),c.trigger({message:"Error editing user: "+f.error.message,background:"variant-filled-error",autohide:!1})):(c.trigger({message:"User updated",background:"variant-filled-success",timeout:5e3}),oe(ie+"/user/"+f.data.updateUser.id))})}});s(2,u=t.form),r(s(0,m=t.data))}},[m,a,u,i,h,E]}class Xe extends Se{constructor(e){super(e),ke(this,e,_e,K,Ee,{userSchema:4}),M("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:K.name})}get userSchema(){return this.$$.ctx[4]}set userSchema(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Xe as component};
//# sourceMappingURL=24.DewQp4jA.js.map
