import{S as vt,i as yt,d as P,s as xt,v as Tt,F as V,G as J,a1 as kt,a2 as bt,_ as M,a3 as at,a4 as st,a0 as Nt,e as b,g as N,h as j,j as p,N as D,m as S,n as T,t as E,q as ot,r as I,y as St,U as W,p as it,J as ct,b as O,L as lt,k as F,M as q,O as rt,Q as R,Z as _,R as ut,W as H,X as z,Y as ft,u as U,f as X,V as Ct,a5 as Y,a6 as wt}from"../chunks/vendor.222e00a9.js";import{a as Z,C as K,b as tt,U as et}from"../chunks/graphql.80ff4abf.js";const{console:Dt}=Nt,C="src/routes/admin/tag-manager/+page.svelte";function nt(o,t,a){const n=o.slice();return n[16]=t[a],n[17]=t,n[18]=a,n}function gt(o){let t,a,n,e,l,u="Add new tag",s,i,f="add",c,g,$;t=new at({props:{$$slots:{default:[$t]},$$scope:{ctx:o}},$$inline:!0});const B={c:function(){ct(t.$$.fragment),a=O(),n=b("section"),e=b("button"),l=b("span"),l.textContent=u,s=O(),i=b("span"),i.textContent=f,this.h()},l:function(m){lt(t.$$.fragment,m),a=F(m),n=N(m,"SECTION",{class:!0});var v=j(n);e=N(v,"BUTTON",{class:!0});var k=j(e);l=N(k,"SPAN",{"data-svelte-h":!0}),q(l)!=="svelte-haz7sd"&&(l.textContent=u),s=F(k),i=N(k,"SPAN",{class:!0,"data-svelte-h":!0}),q(i)!=="svelte-99y27o"&&(i.textContent=f),k.forEach(p),v.forEach(p),this.h()},h:function(){S(l,C,156,8,4498),D(i,"class","material-icons"),S(i,C,157,8,4531),D(e,"class","btn variant-ghost-primary"),S(e,C,155,6,4429),D(n,"class","p-4"),S(n,C,154,4,4401)},m:function(m,v){rt(t,m,v),T(m,a,v),T(m,n,v),R(n,e),R(e,l),R(e,s),R(e,i),c=!0,g||($=_(e,"click",o[4],!1,!1,!1,!1),g=!0)},p:function(m,v){const k={};v&524294&&(k.$$scope={dirty:v,ctx:m}),t.$set(k)},i:function(m){c||(I(t.$$.fragment,m),c=!0)},o:function(m){E(t.$$.fragment,m),c=!1},d:function(m){m&&(p(a),p(n)),ut(t,m),g=!1,$()}};return P("SvelteRegisterBlock",{block:B,id:gt.name,type:"else",source:"(123:2) {:else}",ctx:o}),B}function mt(o){let t,a,n=o[0].error.message+"",e;const l={c:function(){t=b("h1"),a=H("Failed to load tags: "),e=H(n),this.h()},l:function(s){t=N(s,"H1",{});var i=j(t);a=z(i,"Failed to load tags: "),e=z(i,n),i.forEach(p),this.h()},h:function(){S(t,C,130,4,3579)},m:function(s,i){T(s,t,i),R(t,a),R(t,e)},p:function(s,i){i&1&&n!==(n=s[0].error.message+"")&&ft(e,n)},i:U,o:U,d:function(s){s&&p(t)}};return P("SvelteRegisterBlock",{block:l,id:mt.name,type:"if",source:"(121:29) ",ctx:o}),l}function dt(o){let t,a="Loading tags...";const n={c:function(){t=b("h1"),t.textContent=a,this.h()},l:function(l){t=N(l,"H1",{"data-svelte-h":!0}),q(t)!=="svelte-ud4eq5"&&(t.textContent=a),this.h()},h:function(){S(t,C,128,4,3520)},m:function(l,u){T(l,t,u)},p:U,i:U,o:U,d:function(l){l&&p(t)}};return P("SvelteRegisterBlock",{block:n,id:dt.name,type:"if",source:"(119:2) {#if $tagsQuery.fetching}",ctx:o}),n}function ht(o){let t=o[16].name+"",a;const n={c:function(){a=H(t)},l:function(l){a=z(l,t)},m:function(l,u){T(l,a,u)},p:function(l,u){u&2&&t!==(t=l[16].name+"")&&ft(a,t)},d:function(l){l&&p(a)}};return P("SvelteRegisterBlock",{block:n,id:ht.name,type:"slot",source:'(127:10) <svelte:fragment slot=\\"summary\\">',ctx:o}),n}function pt(o){let t,a=o[16],n,e,l="Human-Readable name of the tag that is shown in UI",u,s,i,f="Delete",c,g,$;function B(){o[7].call(t,o[17],o[18])}const y=()=>o[8](t,a),m=()=>o[8](null,a);function v(){return o[9](o[16])}function k(...w){return o[10](o[16],...w)}const Q={c:function(){t=b("input"),n=O(),e=b("span"),e.textContent=l,u=O(),s=b("button"),i=b("span"),i.textContent=f,c=O(),this.h()},l:function(d){t=N(d,"INPUT",{type:!0,class:!0,placeholder:!0}),n=F(d),e=N(d,"SPAN",{slot:!0,"data-svelte-h":!0}),q(e)!=="svelte-o8239h"&&(e.textContent=l),u=F(d),s=N(d,"BUTTON",{class:!0});var x=j(s);i=N(x,"SPAN",{"data-svelte-h":!0}),q(i)!=="svelte-gz26bx"&&(i.textContent=f),x.forEach(p),c=F(d),this.h()},h:function(){D(t,"type","text"),D(t,"class","input p-2"),D(t,"placeholder","Tag-Name"),S(t,C,137,12,3838),D(e,"slot","helper"),S(e,C,144,12,4083),S(i,C,147,14,4269),D(s,"class","btn variant-ghost-error"),S(s,C,146,12,4174)},m:function(d,x){T(d,t,x),Y(t,o[16].name),y(),T(d,n,x),T(d,e,x),T(d,u,x),T(d,s,x),R(s,i),T(d,c,x),g||($=[_(t,"input",B),_(t,"change",v,!1,!1,!1,!1),_(s,"click",k,!1,!1,!1,!1)],g=!0)},p:function(d,x){o=d,x&2&&t.value!==o[16].name&&Y(t,o[16].name),a!==o[16]&&(m(),a=o[16],y())},d:function(d){d&&(p(t),p(n),p(e),p(u),p(s),p(c)),m(),g=!1,wt($)}};return P("SvelteRegisterBlock",{block:Q,id:pt.name,type:"slot",source:'(128:10) <svelte:fragment slot=\\"content\\">',ctx:o}),Q}function G(o){let t,a;t=new st({props:{$$slots:{content:[pt],summary:[ht]},$$scope:{ctx:o}},$$inline:!0});const n={c:function(){ct(t.$$.fragment)},l:function(l){lt(t.$$.fragment,l)},m:function(l,u){rt(t,l,u),a=!0},p:function(l,u){const s={};u&524294&&(s.$$scope={dirty:u,ctx:l}),t.$set(s)},i:function(l){a||(I(t.$$.fragment,l),a=!0)},o:function(l){E(t.$$.fragment,l),a=!1},d:function(l){ut(t,l)}};return P("SvelteRegisterBlock",{block:n,id:G.name,type:"each",source:"(125:6) {#each tags as tag}",ctx:o}),n}function $t(o){let t,a,n=W(o[1]),e=[];for(let s=0;s<n.length;s+=1)e[s]=G(nt(o,n,s));const l=s=>E(e[s],1,1,()=>{e[s]=null}),u={c:function(){for(let i=0;i<e.length;i+=1)e[i].c();t=X()},l:function(i){for(let f=0;f<e.length;f+=1)e[f].l(i);t=X()},m:function(i,f){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(i,f);T(i,t,f),a=!0},p:function(i,f){if(f&102){n=W(i[1]);let c;for(c=0;c<n.length;c+=1){const g=nt(i,n,c);e[c]?(e[c].p(g,f),I(e[c],1)):(e[c]=G(g),e[c].c(),I(e[c],1),e[c].m(t.parentNode,t))}for(it(),c=n.length;c<e.length;c+=1)l(c);ot()}},i:function(i){if(!a){for(let f=0;f<n.length;f+=1)I(e[f]);a=!0}},o:function(i){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)E(e[f]);a=!1},d:function(i){i&&p(t),Ct(e,i)}};return P("SvelteRegisterBlock",{block:u,id:$t.name,type:"slot",source:"(124:4) <Accordion>",ctx:o}),u}function L(o){let t,a,n,e;const l=[dt,mt,gt],u=[];function s(f,c){return f[0].fetching?0:f[0].error?1:2}a=s(o),n=u[a]=l[a](o);const i={c:function(){t=b("div"),n.c(),this.h()},l:function(c){t=N(c,"DIV",{class:!0});var g=j(t);n.l(g),g.forEach(p),this.h()},h:function(){D(t,"class","card"),S(t,C,126,0,3469)},m:function(c,g){T(c,t,g),u[a].m(t,null),e=!0},p:function(c,[g]){let $=a;a=s(c),a===$?u[a].p(c,g):(it(),E(u[$],1,1,()=>{u[$]=null}),ot(),n=u[a],n?n.p(c,g):(n=u[a]=l[a](c),n.c()),I(n,1),n.m(t,null))},i:function(c){e||(I(n),e=!0)},o:function(c){E(n),e=!1},d:function(c){c&&p(t),u[a].d()}};return P("SvelteRegisterBlock",{block:i,id:L.name,type:"component",source:"",ctx:o}),i}function Pt(o,t,a){let n,{$$slots:e={},$$scope:l}=t;Tt("Page",e,[]);const u=V();let s=[];const i={},f={};let c=-1;const g=J({query:Z,client:u,variables:{}});kt(g,"tagsQuery"),bt(o,g,r=>a(0,n=r));const $=M();function B(){if(s.find(r=>r.name=="New Tag"))i[s[s.length-1].id].setOpen(!0),f[s[s.length-1].id].focus();else{const r={id:c--,name:"New Tag"};s.push(r),a(1,s),a(0,n),setTimeout(()=>{i[r.id].setOpen(!0);const h=f[r.id];h.focus(),h.getElement().querySelectorAll("input")[0].select()},0)}}async function y(r){if(r.name=="New Tag")return;let h=!1;if(r.id<0){try{const A=await u.mutation(K,{tagName:r.name}).toPromise();A.data&&(r.id=A.data.createTag.id,h=!0)}catch(A){console.log(A)}if(!h){$.trigger({message:`Failed to create Tag '${r.name}'!`,background:"variant-filled-error",timeout:2e3});return}}else{try{h=(await u.mutation(et,{tagID:r.id,tagName:r.name}).toPromise()).data.updateTag!=null}catch{}if(!h){$.trigger({message:`Failed to update Tag '${r.name}'!`,background:"variant-filled-error",timeout:2e3});return}}$.trigger({message:`Tag '${r.name}' saved!`,background:"variant-filled-success",timeout:2e3})}async function m(r){if(r.name!="New Tag"){let h=!1;try{h=(await u.mutation(tt,{tagID:r.id}).toPromise()).data.deleteTag}catch{h=!1}if(!h){$.trigger({message:`Failed to remove Tag '${r.name}'!`,background:"variant-filled-error",timeout:2e3});return}}$.trigger({message:`Tag '${r.name}' removed!`,background:"variant-filled-success",timeout:2e3})}function v(r,h){r.stopPropagation(),m(h)}const k=[];Object.keys(t).forEach(r=>{!~k.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&Dt.warn(`<Page> was created with unknown prop '${r}'`)});function Q(r,h){r[h].name=this.value,a(1,s),a(0,n)}function w(r,h){St[r?"unshift":"push"](()=>{f[h.id]=r,a(2,f)})}const d=r=>y(r),x=(r,h)=>v(h,r);return o.$capture_state=()=>({getContextClient:V,queryStore:J,CreateTagDocument:K,DeleteTagDocument:tt,GetTagsDocument:Z,UpdateTagDocument:et,Accordion:at,AccordionItem:st,getToastStore:M,client:u,tags:s,panels:i,nameFields:f,tagNegativeID:c,tagsQuery:g,toastStore:$,newTag:B,tagChange:y,deleteTag:m,onDeleteClick:v,$tagsQuery:n}),o.$inject_state=r=>{"tags"in r&&a(1,s=r.tags),"tagNegativeID"in r&&(c=r.tagNegativeID)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),o.$$.update=()=>{o.$$.dirty&1&&a(1,s=n.data?.getTags||[])},[n,s,f,g,B,y,v,Q,w,d,x]}class It extends vt{constructor(t){super(t),yt(this,t,Pt,L,xt,{}),P("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:L.name})}}export{It as component};
//# sourceMappingURL=7.ac586db6.js.map
