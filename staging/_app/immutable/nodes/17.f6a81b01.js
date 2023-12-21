import{G as et,S as _t,i as Ft,d as T,s as jt,v as Mt,F as ht,a1 as W,a2 as X,_ as gt,am as vt,$ as Z,w as L,H as tt,a0 as Rt,f as $t,b as U,e as I,W as R,K as Ot,j as p,k as z,g as E,h as C,X as O,M as lt,N as D,m as P,Q as w,n as N,Z as Tt,r as A,t as H,q as bt,J as ot,L as nt,O as at,R as rt,p as wt,Y,u as K,l as xt}from"../chunks/vendor.82fda689.js";import{V as It}from"../chunks/VersionForm.1124a4f3.js";import{w as qt,F as At,x as Ut,y as zt,q as yt}from"../chunks/graphql.deb800f0.js";import{M as Et}from"../chunks/MetaDescriptors.57ad588d.js";import{E as Pt}from"../chunks/EditCompatibilityForm.6b1aef88.js";const Gt=async({params:n})=>({...n}),Wt=Object.freeze(Object.defineProperty({__proto__:null,load:Gt},Symbol.toStringTag,{value:"Module"})),kt=async(n,t,s,r,e)=>{const m=Math.ceil(n.size/1e7),d=new Array(m).fill(0).map((i,o)=>o).reverse(),c=(i,o,l)=>e.mutation(zt,{modId:t,versionId:l,part:o,file:i}).toPromise(),h=10;let y=0,u=0;const x=i=>{if(y>=h||!d.length)return;const o=d.pop(),l=o*1e7,g=n.slice(l,l+1e7);return y+=1,Promise.all([c(g,o+1,i).then(()=>(y-=1,r.set({total:m,uploaded:m-d.length-y}),x(i))).catch(b=>{if(console.error("Upload failed:",b),y-=1,d.push(o),u+=1,u<5)return x(i);throw new Error("Failed uploading after 5 attempts")}),x(i)])};return e.mutation(qt,{modId:t}).toPromise().then(async i=>(r.set({total:m,uploaded:0}),await x(i.data.createVersion),i.data.createVersion)).then(i=>(console.log("Finalizing",{versionID:i}),e.mutation(At,{modId:t,versionId:i,version:s}).toPromise().then(()=>new Promise((o,l)=>{let g=0,b=et({query:Ut,client:e,variables:{modId:t,versionId:i},requestPolicy:"network-only"});const k=setInterval(()=>{if(g==60)return clearInterval(k),l(new Error("Timed out waiting for mod processing"));b.pause(),b.resume(),g++},1e4),B=b.subscribe(v=>{if(!v.fetching){if(v.error){clearInterval(k),l(new Error(v.error.message)),setTimeout(B);return}v.data?.checkVersionUploadState?.version?.id&&(B(),clearInterval(k),o(v.data.checkVersionUploadState))}})})))).catch(i=>{throw console.error(i),i})},{console:St}=Rt,V="src/routes/mod/[modId]/new-version/+page.svelte";function st(n){let t,s;t=new Et({props:{description:"Creating a new version of mod "+n[0].data.mod.name,title:"New version of mod "+n[0].data.mod.name},$$inline:!0});const r={c:function(){ot(t.$$.fragment)},l:function(a){nt(t.$$.fragment,a)},m:function(a,m){at(t,a,m),s=!0},p:function(a,m){const d={};m&1&&(d.description="Creating a new version of mod "+a[0].data.mod.name),m&1&&(d.title="New version of mod "+a[0].data.mod.name),t.$set(d)},i:function(a){s||(A(t.$$.fragment,a),s=!0)},o:function(a){H(t.$$.fragment,a),s=!1},d:function(a){rt(t,a)}};return T("SvelteRegisterBlock",{block:r,id:st.name,type:"if",source:"(78:2) {#if !$mod.fetching && !$mod.error && $mod.data.mod}",ctx:n}),r}function Vt(n){let t=n[0].data.mod.name+"",s;const r={c:function(){s=R(t)},l:function(a){s=O(a,t)},m:function(a,m){N(a,s,m)},p:function(a,m){m&1&&t!==(t=a[0].data.mod.name+"")&&Y(s,t)},d:function(a){a&&p(s)}};return T("SvelteRegisterBlock",{block:r,id:Vt.name,type:"if",source:"(90:26) ",ctx:n}),r}function Ct(n){let t;const s={c:function(){t=R("...")},l:function(e){t=O(e,"...")},m:function(e,a){N(e,t,a)},p:K,d:function(e){e&&p(t)}};return T("SvelteRegisterBlock",{block:s,id:Ct.name,type:"if",source:"(88:4) {#if $mod.fetching}",ctx:n}),s}function Dt(n){let t,s,r,e,a,m="Edit Compatibility Info",d,c,h,y;t=new It({props:{onSubmit:n[6],modReference:n[0].data.mod.mod_reference,submitIcon:"add_circle"},$$inline:!0});let u=n[1]&&it(n);h=new Pt({props:{mod:n[0].data.mod,modId:n[0].data.mod.id},$$inline:!0}),h.$on("fail",n[11]),h.$on("submit",n[12]);const x={c:function(){ot(t.$$.fragment),s=U(),u&&u.c(),r=U(),e=I("div"),a=I("span"),a.textContent=m,d=U(),c=I("div"),ot(h.$$.fragment),this.h()},l:function(o){nt(t.$$.fragment,o),s=z(o),u&&u.l(o),r=z(o),e=E(o,"DIV",{class:!0});var l=C(e);a=E(l,"SPAN",{"data-svelte-h":!0}),lt(a)!=="svelte-d0elmi"&&(a.textContent=m),l.forEach(p),d=z(o),c=E(o,"DIV",{class:!0});var g=C(c);nt(h.$$.fragment,g),g.forEach(p),this.h()},h:function(){P(a,V,156,8,4344),D(e,"class","p-4"),P(e,V,155,6,4318),D(c,"class","card p-4"),P(c,V,158,6,4400)},m:function(o,l){at(t,o,l),N(o,s,l),u&&u.m(o,l),N(o,r,l),N(o,e,l),w(e,a),N(o,d,l),N(o,c,l),at(h,c,null),y=!0},p:function(o,l){const g={};l&1&&(g.modReference=o[0].data.mod.mod_reference),t.$set(g),o[1]?u?u.p(o,l):(u=it(o),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null);const b={};l&1&&(b.mod=o[0].data.mod),l&1&&(b.modId=o[0].data.mod.id),h.$set(b)},i:function(o){y||(A(t.$$.fragment,o),A(h.$$.fragment,o),y=!0)},o:function(o){H(t.$$.fragment,o),H(h.$$.fragment,o),y=!1},d:function(o){o&&(p(s),p(r),p(e),p(d),p(c)),rt(t,o),u&&u.d(o),rt(h)}};return T("SvelteRegisterBlock",{block:x,id:Dt.name,type:"else",source:"(111:4) {:else}",ctx:n}),x}function Bt(n){let t,s,r=n[0].error.message+"",e;const a={c:function(){t=I("p"),s=R("Oh no... "),e=R(r),this.h()},l:function(d){t=E(d,"P",{});var c=C(t);s=O(c,"Oh no... "),e=O(c,r),c.forEach(p),this.h()},h:function(){P(t,V,130,6,3302)},m:function(d,c){N(d,t,c),w(t,s),w(t,e)},p:function(d,c){c&1&&r!==(r=d[0].error.message+"")&&Y(e,r)},i:K,o:K,d:function(d){d&&p(t)}};return T("SvelteRegisterBlock",{block:a,id:Bt.name,type:"if",source:"(109:25) ",ctx:n}),a}function Nt(n){let t,s="Loading...";const r={c:function(){t=I("p"),t.textContent=s,this.h()},l:function(a){t=E(a,"P",{"data-svelte-h":!0}),lt(t)!=="svelte-qdsr2u"&&(t.textContent=s),this.h()},h:function(){P(t,V,128,6,3252)},m:function(a,m){N(a,t,m)},p:K,i:K,o:K,d:function(a){a&&p(t)}};return T("SvelteRegisterBlock",{block:r,id:Nt.name,type:"if",source:"(107:4) {#if $mod.fetching}",ctx:n}),r}function it(n){let t,s,r,e,a,m,d,c,h=n[2].toFixed(0)+"",y,u,x,i,o;const l={c:function(){t=I("div"),s=I("div"),r=I("div"),e=I("span"),a=R(n[1]),m=U(),d=I("div"),c=I("span"),y=R(h),u=R("%"),x=U(),i=I("div"),o=I("div"),this.h()},l:function(b){t=E(b,"DIV",{class:!0});var k=C(t);s=E(k,"DIV",{class:!0});var B=C(s);r=E(B,"DIV",{});var v=C(r);e=E(v,"SPAN",{class:!0});var G=C(e);a=O(G,n[1]),G.forEach(p),v.forEach(p),m=z(B),d=E(B,"DIV",{class:!0});var M=C(d);c=E(M,"SPAN",{class:!0});var S=C(c);y=O(S,h),u=O(S,"%"),S.forEach(p),M.forEach(p),B.forEach(p),x=z(k),i=E(k,"DIV",{class:!0});var f=C(i);o=E(f,"DIV",{style:!0,class:!0}),C(o).forEach(p),f.forEach(p),k.forEach(p),this.h()},h:function(){D(e,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),P(e,V,138,14,3609),P(r,V,137,12,3589),D(c,"class","text-xs font-semibold inline-block text-white"),P(c,V,144,14,3857),D(d,"class","text-right"),P(d,V,143,12,3818),D(s,"class","flex mb-2 items-center justify-between"),P(s,V,136,10,3524),xt(o,"width",n[2].toFixed(0)+"%"),D(o,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),P(o,V,148,12,4083),D(i,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),P(i,V,147,10,3999),D(t,"class","relative pt-4"),P(t,V,135,8,3486)},m:function(b,k){N(b,t,k),w(t,s),w(s,r),w(r,e),w(e,a),w(s,m),w(s,d),w(d,c),w(c,y),w(c,u),w(t,x),w(t,i),w(i,o)},p:function(b,k){k&2&&Y(a,b[1]),k&4&&h!==(h=b[2].toFixed(0)+"")&&Y(y,h),k&4&&xt(o,"width",b[2].toFixed(0)+"%")},d:function(b){b&&p(t)}};return T("SvelteRegisterBlock",{block:l,id:it.name,type:"if",source:"(114:6) {#if $uploadStatus}",ctx:n}),l}function ct(n){let t,s,r,e,a,m,d,c,h,y="arrow_back",u,x,i,o,l,g,b,k,B,v=!n[0].fetching&&!n[0].error&&n[0].data.mod&&st(n);function G(F,$){if(F[0].fetching)return Ct;if(!F[0].error)return Vt}let M=G(n),S=M&&M(n);const f=[Nt,Bt,Dt],_=[];function dt(F,$){return F[0].fetching?0:F[0].error?1:2}l=dt(n),g=_[l]=f[l](n);const ft={c:function(){v&&v.c(),t=$t(),s=U(),r=I("div"),e=I("h1"),a=R(`New Version for
    `),S&&S.c(),m=U(),d=I("div"),c=I("button"),h=I("span"),h.textContent=y,u=R(`
      Back to Mod`),x=U(),i=I("div"),o=I("section"),g.c(),this.h()},l:function($){const j=Ot("svelte-nx2zao",document.head);v&&v.l(j),t=$t(),j.forEach(p),s=z($),r=E($,"DIV",{class:!0});var q=C(r);e=E(q,"H1",{class:!0});var J=C(e);a=O(J,`New Version for
    `),S&&S.l(J),J.forEach(p),m=z(q),d=E(q,"DIV",{});var ut=C(d);c=E(ut,"BUTTON",{class:!0,title:!0});var Q=C(c);h=E(Q,"SPAN",{class:!0,"data-svelte-h":!0}),lt(h)!=="svelte-qua3zr"&&(h.textContent=y),u=O(Q,`
      Back to Mod`),Q.forEach(p),ut.forEach(p),q.forEach(p),x=z($),i=E($,"DIV",{class:!0});var mt=C(i);o=E(mt,"SECTION",{});var pt=C(o);g.l(pt),pt.forEach(p),mt.forEach(p),this.h()},h:function(){D(e,"class","text-4xl my-4 font-bold"),P(e,V,106,2,2750),D(h,"class","material-icons pr-2"),P(h,V,119,6,3086),D(c,"class","btn variant-ghost-primary"),D(c,"title","View the description page for this mod"),P(c,V,115,4,2925),P(d,V,114,2,2915),D(r,"class","flex flex-wrap h-auto justify-between items-center"),P(r,V,105,0,2683),P(o,V,126,2,3212),D(i,"class","card p-4"),P(i,V,125,0,3187)},m:function($,j){v&&v.m(document.head,null),w(document.head,t),N($,s,j),N($,r,j),w(r,e),w(e,a),S&&S.m(e,null),w(r,m),w(r,d),w(d,c),w(c,h),w(c,u),N($,x,j),N($,i,j),w(i,o),_[l].m(o,null),b=!0,k||(B=Tt(c,"click",n[10],!1,!1,!1,!1),k=!0)},p:function($,[j]){!$[0].fetching&&!$[0].error&&$[0].data.mod?v?(v.p($,j),j&1&&A(v,1)):(v=st($),v.c(),A(v,1),v.m(t.parentNode,t)):v&&(wt(),H(v,1,1,()=>{v=null}),bt()),M===(M=G($))&&S?S.p($,j):(S&&S.d(1),S=M&&M($),S&&(S.c(),S.m(e,null)));let q=l;l=dt($),l===q?_[l].p($,j):(wt(),H(_[q],1,1,()=>{_[q]=null}),bt(),g=_[l],g?g.p($,j):(g=_[l]=f[l]($),g.c()),A(g,1),g.m(o,null))},i:function($){b||(A(v),A(g),b=!0)},o:function($){H(v),H(g),b=!1},d:function($){$&&(p(s),p(r),p(x),p(i)),v&&v.d($),p(t),S&&S.d(),_[l].d(),k=!1,B()}};return T("SvelteRegisterBlock",{block:ft,id:ct.name,type:"component",source:"",ctx:n}),ft}function Ht(n,t,s){let r,e,a,{$$slots:m={},$$scope:d}=t;Mt("Page",m,[]);let{data:c}=t;const{modId:h}=c,y=ht(),u=L("");W(u,"uploadStatus"),X(n,u,f=>s(1,e=f));const x=L(0);W(x,"uploadPercent"),X(n,x,f=>s(2,a=f));const i=L();i.subscribe(f=>{f&&(f.uploaded===f.total?(u.set("Processing..."),x.set(100)):(u.set(`Uploading: ${f.uploaded}/${f.total}`),x.set(f.uploaded/f.total*100)))});const o=gt(),l=et({query:yt,client:y,variables:{mod:h}});W(l,"mod"),X(n,l,f=>s(0,r=f));const g=async f=>kt(f.file,r.data.mod.id,{changelog:f.changelog,stability:f.stability},i,y).then(_=>{o.trigger({message:"Version created",background:"variant-filled-success",timeout:5e3}),Z(tt+"/mod/"+h+"/version/"+_.version.id)}).catch(_=>{console.error(_),o.trigger({message:"Error creating version: "+_.message,background:"variant-filled-error",autohide:!1}),u.set("")}),b=()=>{Z(tt+"/mod/"+h)},k={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:f=>{f&&b()}},B=vt();n.$$.on_mount.push(function(){c===void 0&&!("data"in t||n.$$.bound[n.$$.props.data])&&St.warn("<Page> was created without expected prop 'data'")});const v=["data"];Object.keys(t).forEach(f=>{!~v.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&St.warn(`<Page> was created with unknown prop '${f}'`)});const G=()=>B.trigger(k),M=()=>{alert("Failed to update compatibility information, check browser console for more info.")},S=()=>{alert("Mod compatibility data updated. Don't forget to upload the version too!")};return n.$$set=f=>{"data"in f&&s(9,c=f.data)},n.$capture_state=()=>({getContextClient:ht,queryStore:et,goto:Z,VersionForm:It,GetModDocument:yt,writable:L,chunkedUpload:kt,base:tt,MetaDescriptors:Et,getModalStore:vt,getToastStore:gt,EditCompatibilityForm:Pt,data:c,modId:h,client:y,uploadStatus:u,uploadPercent:x,uploadState:i,toastStore:o,mod:l,onSubmit:g,goBackFn:b,backModal:k,modalStore:B,$mod:r,$uploadStatus:e,$uploadPercent:a}),n.$inject_state=f=>{"data"in f&&s(9,c=f.data)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[r,e,a,u,x,l,g,k,B,c,G,M,S]}class Xt extends _t{constructor(t){super(t),Ft(this,t,Ht,ct,jt,{data:9}),T("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:ct.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Xt as component,Wt as universal};
//# sourceMappingURL=17.f6a81b01.js.map
