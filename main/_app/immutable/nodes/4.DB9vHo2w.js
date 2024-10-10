import{S as Y,i as Z,s as tt,e as $,c as y,d as N,f as v,A as h,j as p,t as b,l as j,m as T,C as et,D as st,F as nt,G as rt,k as J,u as it,H as at,I as K,a as H,J as Q,g as I,K as M,L as R,M as x,N as V,O as W,P as U,Q as C,R as X,q as w,T as q,b as A,U as ot,V as lt,W as E,X as ct}from"../chunks/vendor.DBwCcoHF.js";import{G as ft,C as ut,U as dt,D as gt}from"../chunks/graphql.sMbDXPDh.js";function B(a,e,s){const t=a.slice();return t[17]=e[s],t[18]=e,t[19]=s,t}function vt(a){let e,s,t,n,f='<span>Add new Satisfactory version</span> <span class="material-icons">add</span>',r,l,o;return e=new at({props:{$$slots:{default:[yt]},$$scope:{ctx:a}}}),{c(){K(e.$$.fragment),s=H(),t=$("section"),n=$("button"),n.innerHTML=f,this.h()},l(c){Q(e.$$.fragment,c),s=I(c),t=y(c,"SECTION",{class:!0});var d=N(t);n=y(d,"BUTTON",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-1lvgdo4"&&(n.innerHTML=f),d.forEach(v),this.h()},h(){h(n,"class","variant-ghost-primary btn"),h(t,"class","p-4")},m(c,d){R(e,c,d),p(c,s,d),p(c,t,d),x(t,n),r=!0,l||(o=V(n,"click",a[4]),l=!0)},p(c,d){const m={};d&1048582&&(m.$$scope={dirty:d,ctx:c}),e.$set(m)},i(c){r||(T(e.$$.fragment,c),r=!0)},o(c){b(e.$$.fragment,c),r=!1},d(c){c&&(v(s),v(t)),W(e,c),l=!1,o()}}}function pt(a){let e,s,t=a[0].error.message+"",n;return{c(){e=$("h1"),s=U("Failed to load satisfactory versions: "),n=U(t)},l(f){e=y(f,"H1",{});var r=N(e);s=C(r,"Failed to load satisfactory versions: "),n=C(r,t),r.forEach(v)},m(f,r){p(f,e,r),x(e,s),x(e,n)},p(f,r){r&1&&t!==(t=f[0].error.message+"")&&X(n,t)},i:w,o:w,d(f){f&&v(e)}}}function ht(a){let e,s="Loading satisfactory versions...";return{c(){e=$("h1"),e.textContent=s},l(t){e=y(t,"H1",{"data-svelte-h":!0}),M(e)!=="svelte-kaw34n"&&(e.textContent=s)},m(t,n){p(t,e,n)},p:w,i:w,o:w,d(t){t&&v(e)}}}function mt(a){let e=a[17].version+"",s;return{c(){s=U(e)},l(t){s=C(t,e)},m(t,n){p(t,s,n)},p(t,n){n&4&&e!==(e=t[17].version+"")&&X(s,e)},d(t){t&&v(s)}}}function $t(a){let e,s,t=a[17],n,f,r,l,o="<span>Delete</span>",c,d,m;function P(){a[7].call(s,a[18],a[19])}const k=()=>a[8](s,t),_=()=>a[8](null,t);function D(){return a[9](a[17])}function F(){a[10].call(f,a[18],a[19])}function L(){return a[11](a[17])}function O(...g){return a[12](a[17],...g)}return{c(){e=$("div"),s=$("input"),n=H(),f=$("input"),r=H(),l=$("button"),l.innerHTML=o,c=H(),this.h()},l(g){e=y(g,"DIV",{});var i=N(e);s=y(i,"INPUT",{type:!0,class:!0,placeholder:!0}),n=I(i),f=y(i,"INPUT",{type:!0,class:!0,placeholder:!0}),i.forEach(v),r=I(g),l=y(g,"BUTTON",{class:!0,"data-svelte-h":!0}),M(l)!=="svelte-15tmc7w"&&(l.innerHTML=o),c=I(g),this.h()},h(){h(s,"type","text"),h(s,"class","input p-2"),h(s,"placeholder","Version"),h(f,"type","text"),h(f,"class","input p-2"),h(f,"placeholder","Engine version"),h(l,"class","variant-ghost-error btn")},m(g,i){p(g,e,i),x(e,s),E(s,a[17].version),k(),x(e,n),x(e,f),E(f,a[17].engine_version),p(g,r,i),p(g,l,i),p(g,c,i),d||(m=[V(s,"input",P),V(s,"change",D),V(f,"input",F),V(f,"change",L),V(l,"click",O)],d=!0)},p(g,i){a=g,i&4&&s.value!==a[17].version&&E(s,a[17].version),t!==a[17]&&(_(),t=a[17],k()),i&4&&f.value!==a[17].engine_version&&E(f,a[17].engine_version)},d(g){g&&(v(e),v(r),v(l),v(c)),_(),d=!1,ct(m)}}}function G(a){let e,s;return e=new lt({props:{$$slots:{content:[$t],summary:[mt]},$$scope:{ctx:a}}}),{c(){K(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,n){R(e,t,n),s=!0},p(t,n){const f={};n&1048582&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(T(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){W(e,t)}}}function yt(a){let e,s,t=q(a[2]),n=[];for(let r=0;r<t.length;r+=1)n[r]=G(B(a,t,r));const f=r=>b(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=A()},l(r){for(let l=0;l<n.length;l+=1)n[l].l(r);e=A()},m(r,l){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(r,l);p(r,e,l),s=!0},p(r,l){if(l&102){t=q(r[2]);let o;for(o=0;o<t.length;o+=1){const c=B(r,t,o);n[o]?(n[o].p(c,l),T(n[o],1)):(n[o]=G(c),n[o].c(),T(n[o],1),n[o].m(e.parentNode,e))}for(J(),o=t.length;o<n.length;o+=1)f(o);j()}},i(r){if(!s){for(let l=0;l<t.length;l+=1)T(n[l]);s=!0}},o(r){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)b(n[l]);s=!1},d(r){r&&v(e),ot(n,r)}}}function Tt(a){let e,s,t,n;const f=[ht,pt,vt],r=[];function l(o,c){return o[0].fetching?0:o[0].error?1:2}return s=l(a),t=r[s]=f[s](a),{c(){e=$("div"),t.c(),this.h()},l(o){e=y(o,"DIV",{class:!0});var c=N(e);t.l(c),c.forEach(v),this.h()},h(){h(e,"class","card")},m(o,c){p(o,e,c),r[s].m(e,null),n=!0},p(o,[c]){let d=s;s=l(o),s===d?r[s].p(o,c):(J(),b(r[d],1,1,()=>{r[d]=null}),j(),t=r[s],t?t.p(o,c):(t=r[s]=f[s](o),t.c()),T(t,1),t.m(e,null))},i(o){n||(T(t),n=!0)},o(o){b(t),n=!1},d(o){o&&v(e),r[s].d()}}}function St(a,e,s){let t,n;const f=et(),r={},l={},o=st({query:ft,client:f});nt(a,o,i=>s(0,n=i));const c=rt();function d(){if(t.find(i=>i.id<0))r[t[t.length-1].id].setOpen(!0),l[t[t.length-1].id].focus();else{const i={id:-1,version:0,engine_version:"4.26"};t.push(i),s(2,t),s(0,n),setTimeout(()=>{r[i.id].setOpen(!0);const u=l[i.id];u.focus(),u.getElement().querySelectorAll("input")[0].select()},0)}}async function m(i){if(i.version===0)return;console.log(i);let u=!1;if(i.id<0){try{const S=await f.mutation(ut,{satisfactoryVersion:{version:i.version,engine_version:i.engine_version}}).toPromise();S.data&&(i.id=S.data.createSatisfactoryVersion.id,u=!0)}catch(S){console.log(S)}if(!u){c.trigger({message:`Failed to create Satisfactory version '${i.version}'!`,background:"variant-filled-error",timeout:2e3});return}}else{try{u=(await f.mutation(dt,{id:i.id,satisfactoryVersion:{version:i.version,engine_version:i.engine_version}}).toPromise()).data.updateSatisfactoryVersion!=null}catch{}if(!u){c.trigger({message:`Failed to update Satisfactory version '${i.version}'!`,background:"variant-filled-error",timeout:2e3});return}}c.trigger({message:`Satisfactory version '${i.version}' saved!`,background:"variant-filled-success",timeout:2e3})}async function P(i){if(!(i.id<0)){let u=!1;try{u=(await f.mutation(gt,{satisfactoryVersionID:i.id}).toPromise()).data.deleteSatisfactoryVersion,u&&s(2,t=t.filter(z=>z.id!==i.id))}catch{u=!1}if(!u){c.trigger({message:`Failed to remove Satisfactory version '${i.version}'!`,background:"variant-filled-error",timeout:2e3});return}}c.trigger({message:`Satisfactory version '${i.version}' removed!`,background:"variant-filled-success",timeout:2e3})}function k(i,u){i.stopPropagation(),P(u)}function _(i,u){i[u].version=this.value,s(2,t),s(0,n)}function D(i,u){it[i?"unshift":"push"](()=>{l[u.id]=i,s(1,l)})}const F=i=>m(i);function L(i,u){i[u].engine_version=this.value,s(2,t),s(0,n)}const O=i=>m(i),g=(i,u)=>k(u,i);return a.$$.update=()=>{a.$$.dirty&1&&s(2,t=n.data?.getSatisfactoryVersions||[])},[n,l,t,o,d,m,k,_,D,F,L,O,g]}class bt extends Y{constructor(e){super(),Z(this,e,St,Tt,tt,{})}}export{bt as component};
//# sourceMappingURL=4.DB9vHo2w.js.map
