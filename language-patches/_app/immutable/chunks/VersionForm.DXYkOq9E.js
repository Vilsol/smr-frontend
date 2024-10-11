import{S as $t,i as wt,s as St,d as C,a6 as Oe,v as yt,aa as Ge,H as ye,I as De,w as qe,O as be,e as b,b as B,X as E,P as tt,g as $,h as x,k as T,Y as R,j as g,Q as nt,m as w,N as F,n as M,U as a,$ as Ce,T as st,V as Vt,ad as xt,r as ue,p as kt,t as ve,q as Et,Z as A,a7 as Rt,aB as Pt,W as ot,a0 as Nt,u as ee,x as Bt,f as ze,R as $e,_ as it,a8 as Tt,a9 as jt}from"./vendor.DvwuOXpe.js";import{o as Ft,a as It,b as At,e as Ue,s as Le,V as je,c as _e,v as We,r as Je}from"./forms.DJJVWecN.js";import{J as Mt}from"./jszip.C54MQWfB.js";import{v as Ot}from"./uplugin.Cq6NZiUg.js";import{T as Xe,V as He}from"./graphql.CNu7qPRc.js";import{t as Ye}from"./forms.UnkHsA4k.js";import{m as Ve}from"./markdown.CqsJm4qk.js";import{b as xe}from"./formatting.DRqZGGFY.js";const Gt=Object.keys(Xe).map(n=>Xe[n]).filter(n=>typeof n=="string"),Ze=async(n,e)=>{const t=await Ot(n);if(t.length!=0)return{message:`invalid ${e}.uplugin`,extended:t};const s=JSON.parse(n),l=s.Plugins?.some(o=>o.Name==="SML"),r=!!s.GameVersion;return!l&&!r?{message:`either GameVersion or SML dependency must be present in ${e}.uplugin`}:s};function Dt(n){const e=n.split("/");return e[e.length-1]}function qt(n){const e=n.split("/");return e.slice(0,e.length-1).join("/")}const Ct=[".so",".dll",".pak",".utoc",".ucas"],zt=async(n,e)=>new Mt().loadAsync(n).then(async s=>{const l=s.filter(u=>Dt(u)==e+".uplugin");if(l.length===0)return{message:"Mod does not contain any "+e+".uplugin files"};const r=Object.keys(s.files).filter(u=>Ct.some(m=>u.endsWith(m)));if(l.length===1&&l[0].name===e+".uplugin"){const u=await Ze(await l[0].async("string"),e);return"message"in u?u:{uplugin:u,objects:r,targets:["Windows"]}}if(l.some(u=>u.name===e+".uplugin"))return{message:"Mod contains "+e+".uplugin files in the root directory. New uploads must use the multi-target format. Read more on the docs: https://docs.ficsit.app/satisfactory-modding/latest/Development/UpdatingToDedi.html"};const o=l.map(u=>qt(u.name)),i=o.filter(u=>!Gt.includes(u));if(i.length!==0)return{message:`invalid target(s): ${i.join(", ")}`};const p=s.filter(u=>!o.some(m=>u.startsWith(m+"/")));if(p.length!==0)return{message:`file(s) outside target directories: ${p.map(u=>u.name).join(", ")}`};const c=await Promise.all(l.map(u=>u.async("string").catch(m=>{throw new Error(`invalid ${e}.uplugin: ${m}`)})));if(!c.every(u=>u===c[0]))return{message:"Mod contains "+e+".uplugin files with different contents"};const v=await Ze(c[0],e);return"message"in v?v:{uplugin:v,objects:r,targets:o}}).catch(s=>({message:"invalid zip/smod file: "+s})),Ke=(n,e)=>Ft({file:It(At().superRefine(async(t,s)=>{if(!("name"in t&&"size"in t&&"type"in t)){s.addIssue({message:"Unknown file error",code:Ue.custom});return}const l=await zt(t,n);if("message"in l){s.addIssue({message:l.message,code:Ue.custom});return}e.set(l)})),changelog:Le(),stability:Le()}),S="src/lib/components/versions/VersionForm.svelte";function Qe(n,e,t){const s=n.slice();return s[20]=e[t],s}function et(n,e,t){const s=n.slice();return s[23]=e[t],s}function ke(n){let e,t,s=n[9]("file")+"",l,r,o,i,p,c,v,u,m,d;c=new je({props:{for:"file",$$slots:{default:[rt,({messages:N})=>({19:N}),({messages:N})=>N?524288:0]},$$scope:{ctx:n}},$$inline:!0});let f=n[5].file&&Ee(n),y=n[4]&&Re(n);const P={c:function(){e=b("div"),t=b("label"),l=E(s),r=E(" *"),o=B(),i=b("input"),p=B(),tt(c.$$.fragment),v=B(),f&&f.c(),u=B(),y&&y.c(),m=ze(),this.h()},l:function(V){e=$(V,"DIV",{class:!0});var k=x(e);t=$(k,"LABEL",{for:!0});var O=x(t);l=R(O,s),r=R(O," *"),O.forEach(g),o=T(k),i=$(k,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),p=T(k),nt(c.$$.fragment,k),k.forEach(g),v=T(V),f&&f.l(V),u=T(V),y&&y.l(V),m=ze(),this.h()},h:function(){F(t,"for","file"),w(t,S,48,8,1465),F(i,"id","file"),F(i,"class","base-input"),F(i,"name","file"),F(i,"type","file"),F(i,"accept",".zip,.smod"),F(i,"placeholder","File"),w(i,S,49,8,1514),F(e,"class","grid grid-flow-row gap-2"),w(e,S,47,6,1418)},m:function(V,k){M(V,e,k),a(e,t),a(t,l),a(t,r),a(e,o),a(e,i),a(e,p),st(c,e,null),M(V,v,k),f&&f.m(V,k),M(V,u,k),y&&y.m(V,k),M(V,m,k),d=!0},p:function(V,k){(!d||k&512)&&s!==(s=V[9]("file")+"")&&A(l,s);const O={};k&67633152&&(O.$$scope={dirty:k,ctx:V}),c.$set(O),V[5].file?f?f.p(V,k):(f=Ee(V),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null),V[4]?y?y.p(V,k):(y=Re(V),y.c(),y.m(m.parentNode,m)):y&&(y.d(1),y=null)},i:function(V){d||(ue(c.$$.fragment,V),d=!0)},o:function(V){ve(c.$$.fragment,V),d=!1},d:function(V){V&&(g(e),g(v),g(u),g(m)),ot(c),f&&f.d(V),y&&y.d(V)}};return C("SvelteRegisterBlock",{block:P,id:ke.name,type:"if",source:"(38:4) {#if !editing}",ctx:n}),P}function rt(n){let e,t=(n[19]||"")+"",s;const l={c:function(){e=b("span"),s=E(t),this.h()},l:function(o){e=$(o,"SPAN",{class:!0});var i=x(e);s=R(i,t),i.forEach(g),this.h()},h:function(){F(e,"class","validation-message"),w(e,S,51,10,1688)},m:function(o,i){M(o,e,i),a(e,s)},p:function(o,i){i&524288&&t!==(t=(o[19]||"")+"")&&A(s,t)},d:function(o){o&&g(e)}};return C("SvelteRegisterBlock",{block:l,id:rt.name,type:"slot",source:'(42:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:n}),l}function Ee(n){let e,t,s,l=n[9]("file-type")+"",r,o,i,p=(n[5].file.type||"Unknown")+"",c,v,u,m,d,f=n[9]("file-size")+"",y,P,N,V=xe(n[5].file.size)+"",k;const O={c:function(){e=b("div"),t=b("span"),s=b("strong"),r=E(l),o=E(":"),i=B(),c=E(p),v=b("br"),u=B(),m=b("span"),d=b("strong"),y=E(f),P=E(":"),N=B(),k=E(V),this.h()},l:function(G){e=$(G,"DIV",{});var I=x(e);t=$(I,"SPAN",{});var z=x(t);s=$(z,"STRONG",{});var Y=x(s);r=R(Y,l),o=R(Y,":"),Y.forEach(g),i=T(z),c=R(z,p),z.forEach(g),v=$(I,"BR",{}),u=T(I),m=$(I,"SPAN",{});var h=x(m);d=$(h,"STRONG",{});var ie=x(d);y=R(ie,f),P=R(ie,":"),ie.forEach(g),N=T(h),k=R(h,V),h.forEach(g),I.forEach(g),this.h()},h:function(){w(s,S,57,16,1840),w(t,S,57,10,1834),w(v,S,57,89,1913),w(d,S,58,16,1936),w(m,S,58,10,1930),w(e,S,56,8,1818)},m:function(G,I){M(G,e,I),a(e,t),a(t,s),a(s,r),a(s,o),a(t,i),a(t,c),a(e,v),a(e,u),a(e,m),a(m,d),a(d,y),a(d,P),a(m,N),a(m,k)},p:function(G,I){I&512&&l!==(l=G[9]("file-type")+"")&&A(r,l),I&32&&p!==(p=(G[5].file.type||"Unknown")+"")&&A(c,p),I&512&&f!==(f=G[9]("file-size")+"")&&A(y,f),I&32&&V!==(V=xe(G[5].file.size)+"")&&A(k,V)},d:function(G){G&&g(e)}};return C("SvelteRegisterBlock",{block:O,id:Ee.name,type:"if",source:"(47:6) {#if $data.file}",ctx:n}),O}function Re(n){let e,t,s,l,r=n[9]("version")+"",o,i,p,c=n[4].uplugin.Version+"",v,u,m,d,f,y,P,N="Targets:",V,k=n[4].targets.join(", ")+"",O,W,G,I;function z(U,j){return U[4].uplugin.SemVersion!==void 0?ct:lt}let Y=z(n),h=Y(n);function ie(U,j){return U[4].uplugin.GameVersion!==void 0?ft:at}let K=ie(n),X=K(n),q=n[4].uplugin.Plugins!==void 0&&Pe(n);function ae(U,j){return U[4].objects&&U[4].objects.length>0?pt:dt}let re=ae(n),J=re(n);const Z={c:function(){e=b("div"),t=b("p"),s=b("span"),l=b("strong"),o=E(r),i=E(":"),p=B(),v=E(c),u=b("br"),m=B(),h.c(),d=B(),X.c(),f=B(),y=b("span"),P=b("strong"),P.textContent=N,V=B(),O=E(k),W=b("br"),G=B(),q&&q.c(),I=B(),J.c(),this.h()},l:function(j){e=$(j,"DIV",{});var D=x(e);t=$(D,"P",{class:!0});var te=x(t);s=$(te,"SPAN",{});var H=x(s);l=$(H,"STRONG",{});var ce=x(l);o=R(ce,r),i=R(ce,":"),ce.forEach(g),p=T(H),v=R(H,c),u=$(H,"BR",{}),H.forEach(g),m=T(te),h.l(te),d=T(te),X.l(te),te.forEach(g),f=T(D),y=$(D,"SPAN",{});var le=x(y);P=$(le,"STRONG",{"data-svelte-h":!0}),$e(P)!=="svelte-8zo0qs"&&(P.textContent=N),V=T(le),O=R(le,k),W=$(le,"BR",{}),le.forEach(g),G=T(D),q&&q.l(D),I=T(D),J.l(D),D.forEach(g),this.h()},h:function(){w(l,S,65,18,2118),w(u,S,65,78,2178),w(s,S,65,12,2112),F(t,"class","mb-4"),w(t,S,64,10,2083),w(P,S,85,16,2906),w(W,S,85,71,2961),w(y,S,85,10,2900),w(e,S,63,8,2067)},m:function(j,D){M(j,e,D),a(e,t),a(t,s),a(s,l),a(l,o),a(l,i),a(s,p),a(s,v),a(s,u),a(t,m),h.m(t,null),a(t,d),X.m(t,null),a(e,f),a(e,y),a(y,P),a(y,V),a(y,O),a(y,W),a(e,G),q&&q.m(e,null),a(e,I),J.m(e,null)},p:function(j,D){D&512&&r!==(r=j[9]("version")+"")&&A(o,r),D&16&&c!==(c=j[4].uplugin.Version+"")&&A(v,c),Y===(Y=z(j))&&h?h.p(j,D):(h.d(1),h=Y(j),h&&(h.c(),h.m(t,d))),K===(K=ie(j))&&X?X.p(j,D):(X.d(1),X=K(j),X&&(X.c(),X.m(t,null))),D&16&&k!==(k=j[4].targets.join(", ")+"")&&A(O,k),j[4].uplugin.Plugins!==void 0?q?q.p(j,D):(q=Pe(j),q.c(),q.m(e,I)):q&&(q.d(1),q=null),re===(re=ae(j))&&J?J.p(j,D):(J.d(1),J=re(j),J&&(J.c(),J.m(e,null)))},d:function(j){j&&g(e),h.d(),X.d(),q&&q.d(),J.d()}};return C("SvelteRegisterBlock",{block:Z,id:Re.name,type:"if",source:"(54:6) {#if $modMeta}",ctx:n}),Z}function lt(n){let e,t=n[9]("version-form.missing-sem-version")+"",s,l,r=n[4].uplugin.Version+"",o,i;const p={c:function(){e=b("span"),s=E(t),l=B(),o=E(r),i=E(".0.0"),this.h()},l:function(v){e=$(v,"SPAN",{class:!0});var u=x(e);s=R(u,t),l=T(u),o=R(u,r),i=R(u,".0.0"),u.forEach(g),this.h()},h:function(){F(e,"class","text-yellow-600"),w(e,S,70,14,2379)},m:function(v,u){M(v,e,u),a(e,s),a(e,l),a(e,o),a(e,i)},p:function(v,u){u&512&&t!==(t=v[9]("version-form.missing-sem-version")+"")&&A(s,t),u&16&&r!==(r=v[4].uplugin.Version+"")&&A(o,r)},d:function(v){v&&g(e)}};return C("SvelteRegisterBlock",{block:p,id:lt.name,type:"else",source:"(61:12) {:else}",ctx:n}),p}function ct(n){let e,t,s="SemVersion:",l,r=n[4].uplugin.SemVersion+"",o,i;const p={c:function(){e=b("span"),t=b("strong"),t.textContent=s,l=B(),o=E(r),i=b("br"),this.h()},l:function(v){e=$(v,"SPAN",{});var u=x(e);t=$(u,"STRONG",{"data-svelte-h":!0}),$e(t)!=="svelte-1q9kpdp"&&(t.textContent=s),l=T(u),o=R(u,r),i=$(u,"BR",{}),u.forEach(g),this.h()},h:function(){w(t,S,68,20,2273),w(i,S,68,78,2331),w(e,S,68,14,2267)},m:function(v,u){M(v,e,u),a(e,t),a(e,l),a(e,o),a(e,i)},p:function(v,u){u&16&&r!==(r=v[4].uplugin.SemVersion+"")&&A(o,r)},d:function(v){v&&g(e)}};return C("SvelteRegisterBlock",{block:p,id:ct.name,type:"if",source:"(59:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:n}),p}function at(n){let e,t=n[9]("version-form.missing-game-version")+"",s;const l={c:function(){e=b("span"),s=E(t),this.h()},l:function(o){e=$(o,"SPAN",{class:!0});var i=x(e);s=R(i,t),i.forEach(g),this.h()},h:function(){F(e,"class","text-yellow-600"),w(e,S,79,14,2745)},m:function(o,i){M(o,e,i),a(e,s)},p:function(o,i){i&512&&t!==(t=o[9]("version-form.missing-game-version")+"")&&A(s,t)},d:function(o){o&&g(e)}};return C("SvelteRegisterBlock",{block:l,id:at.name,type:"else",source:"(70:12) {:else}",ctx:n}),l}function ft(n){let e,t,s="Game version:",l,r=n[4].uplugin.GameVersion+"",o,i;const p={c:function(){e=b("span"),t=b("strong"),t.textContent=s,l=B(),o=E(r),i=b("br"),this.h()},l:function(v){e=$(v,"SPAN",{});var u=x(e);t=$(u,"STRONG",{"data-svelte-h":!0}),$e(t)!=="svelte-182gpem"&&(t.textContent=s),l=T(u),o=R(u,r),i=$(u,"BR",{}),u.forEach(g),this.h()},h:function(){w(t,S,77,20,2636),w(i,S,77,81,2697),w(e,S,77,14,2630)},m:function(v,u){M(v,e,u),a(e,t),a(e,l),a(e,o),a(e,i)},p:function(v,u){u&16&&r!==(r=v[4].uplugin.GameVersion+"")&&A(o,r)},d:function(v){v&&g(e)}};return C("SvelteRegisterBlock",{block:p,id:ft.name,type:"if",source:"(68:12) {#if $modMeta.uplugin.GameVersion !== undefined}",ctx:n}),p}function Pe(n){let e,t,s=n[9]("dependencies")+"",l,r,o,i,p=be(n[7]),c=[];for(let u=0;u<p.length;u+=1)c[u]=Ne(et(n,p,u));const v={c:function(){e=b("p"),t=b("strong"),l=E(s),r=E(":"),o=b("br"),i=B();for(let m=0;m<c.length;m+=1)c[m].c();this.h()},l:function(m){e=$(m,"P",{});var d=x(e);t=$(d,"STRONG",{});var f=x(t);l=R(f,s),r=R(f,":"),f.forEach(g),o=$(d,"BR",{}),i=T(d);for(let y=0;y<c.length;y+=1)c[y].l(d);d.forEach(g),this.h()},h:function(){w(t,S,89,14,3061),w(o,S,89,52,3099),w(e,S,88,12,3043)},m:function(m,d){M(m,e,d),a(e,t),a(t,l),a(t,r),a(e,o),a(e,i);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(e,null)},p:function(m,d){if(d&512&&s!==(s=m[9]("dependencies")+"")&&A(l,s),d&128){p=be(m[7]);let f;for(f=0;f<p.length;f+=1){const y=et(m,p,f);c[f]?c[f].p(y,d):(c[f]=Ne(y),c[f].c(),c[f].m(e,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=p.length}},d:function(m){m&&g(e),it(c,m)}};return C("SvelteRegisterBlock",{block:v,id:Pe.name,type:"if",source:"(79:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:n}),v}function ut(n){let e,t="*";const s={c:function(){e=b("span"),e.textContent=t,this.h()},l:function(r){e=$(r,"SPAN",{"data-svelte-h":!0}),$e(e)!=="svelte-140b0co"&&(e.textContent=t),this.h()},h:function(){w(e,S,95,18,3349)},m:function(r,o){M(r,e,o)},p:ee,d:function(r){r&&g(e)}};return C("SvelteRegisterBlock",{block:s,id:ut.name,type:"else",source:"(86:16) {:else}",ctx:n}),s}function mt(n){let e,t=n[23].SemVersion+"",s;const l={c:function(){e=b("span"),s=E(t),this.h()},l:function(o){e=$(o,"SPAN",{});var i=x(e);s=R(i,t),i.forEach(g),this.h()},h:function(){w(e,S,93,18,3270)},m:function(o,i){M(o,e,i),a(e,s)},p:function(o,i){i&128&&t!==(t=o[23].SemVersion+"")&&A(s,t)},d:function(o){o&&g(e)}};return C("SvelteRegisterBlock",{block:l,id:mt.name,type:"if",source:"(84:16) {#if dependency.SemVersion}",ctx:n}),l}function Ne(n){let e,t=n[23].Name+"",s,l,r,o,i;function p(m,d){return m[23].SemVersion?mt:ut}let c=p(n),v=c(n);const u={c:function(){e=b("strong"),s=E(t),l=E(":"),r=B(),v.c(),o=B(),i=b("br"),this.h()},l:function(d){e=$(d,"STRONG",{});var f=x(e);s=R(f,t),l=R(f,":"),f.forEach(g),r=T(d),v.l(d),o=T(d),i=$(d,"BR",{}),this.h()},h:function(){w(e,S,91,16,3171),w(i,S,97,16,3402)},m:function(d,f){M(d,e,f),a(e,s),a(e,l),M(d,r,f),v.m(d,f),M(d,o,f),M(d,i,f)},p:function(d,f){f&128&&t!==(t=d[23].Name+"")&&A(s,t),c===(c=p(d))&&v?v.p(d,f):(v.d(1),v=c(d),v&&(v.c(),v.m(o.parentNode,o)))},d:function(d){d&&(g(e),g(r),g(o),g(i)),v.d(d)}};return C("SvelteRegisterBlock",{block:u,id:Ne.name,type:"each",source:"(82:14) {#each dependencies as dependency}",ctx:n}),u}function dt(n){let e,t,s=n[9]("version-form.missing-sem-version")+"",l;const r={c:function(){e=b("p"),t=b("span"),l=E(s),this.h()},l:function(i){e=$(i,"P",{});var p=x(e);t=$(p,"SPAN",{class:!0});var c=x(t);l=R(c,s),c.forEach(g),p.forEach(g),this.h()},h:function(){F(t,"class","text-yellow-600"),w(t,S,112,14,3796),w(e,S,111,12,3778)},m:function(i,p){M(i,e,p),a(e,t),a(t,l)},p:function(i,p){p&512&&s!==(s=i[9]("version-form.missing-sem-version")+"")&&A(l,s)},d:function(i){i&&g(e)}};return C("SvelteRegisterBlock",{block:r,id:dt.name,type:"else",source:"(102:10) {:else}",ctx:n}),r}function pt(n){let e,t,s=n[9]("objects")+"",l,r,o,i,p=be(n[4].objects),c=[];for(let u=0;u<p.length;u+=1)c[u]=Be(Qe(n,p,u));const v={c:function(){e=b("p"),t=b("strong"),l=E(s),r=E(":"),o=b("br"),i=B();for(let m=0;m<c.length;m+=1)c[m].c();this.h()},l:function(m){e=$(m,"P",{});var d=x(e);t=$(d,"STRONG",{});var f=x(t);l=R(f,s),r=R(f,":"),f.forEach(g),o=$(d,"BR",{}),i=T(d);for(let y=0;y<c.length;y+=1)c[y].l(d);d.forEach(g),this.h()},h:function(){w(t,S,104,14,3559),w(o,S,104,47,3592),w(e,S,103,12,3541)},m:function(m,d){M(m,e,d),a(e,t),a(t,l),a(t,r),a(e,o),a(e,i);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(e,null)},p:function(m,d){if(d&512&&s!==(s=m[9]("objects")+"")&&A(l,s),d&16){p=be(m[4].objects);let f;for(f=0;f<p.length;f+=1){const y=Qe(m,p,f);c[f]?c[f].p(y,d):(c[f]=Be(y),c[f].c(),c[f].m(e,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=p.length}},d:function(m){m&&g(e),it(c,m)}};return C("SvelteRegisterBlock",{block:v,id:pt.name,type:"if",source:"(94:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:n}),v}function Be(n){let e,t=n[20]+"",s,l,r;const o={c:function(){e=b("span"),s=E(t),l=B(),r=b("br"),this.h()},l:function(p){e=$(p,"SPAN",{});var c=x(e);s=R(c,t),c.forEach(g),l=T(p),r=$(p,"BR",{}),this.h()},h:function(){w(e,S,106,16,3664),w(r,S,107,16,3702)},m:function(p,c){M(p,e,c),a(e,s),M(p,l,c),M(p,r,c)},p:function(p,c){c&16&&t!==(t=p[20]+"")&&A(s,t)},d:function(p){p&&(g(e),g(l),g(r))}};return C("SvelteRegisterBlock",{block:o,id:Be.name,type:"each",source:"(97:14) {#each $modMeta.objects as object}",ctx:n}),o}function ht(n){let e,t=(n[19]||"")+"",s;const l={c:function(){e=b("span"),s=E(t),this.h()},l:function(o){e=$(o,"SPAN",{class:!0});var i=x(e);s=R(i,t),i.forEach(g),this.h()},h:function(){F(e,"class","validation-message"),w(e,S,128,10,4348)},m:function(o,i){M(o,e,i),a(e,s)},p:function(o,i){i&524288&&t!==(t=(o[19]||"")+"")&&A(s,t)},d:function(o){o&&g(e)}};return C("SvelteRegisterBlock",{block:l,id:ht.name,type:"slot",source:'(119:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:n}),l}function gt(n){const e={c:ee,l:ee,m:ee,p:ee,d:ee};return C("SvelteRegisterBlock",{block:e,id:gt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function vt(n){let e,t,s=n[18]+"";const l={c:function(){e=b("div"),t=new Tt(!1),this.h()},l:function(o){e=$(o,"DIV",{class:!0});var i=x(e);t=jt(i,!1),i.forEach(g),this.h()},h:function(){t.a=null,F(e,"class","markdown-content right svelte-1q5q8ki"),w(e,S,135,10,4653)},m:function(o,i){M(o,e,i),t.m(s,e)},p:function(o,i){i&256&&s!==(s=o[18]+"")&&t.p(s)},d:function(o){o&&g(e)}};return C("SvelteRegisterBlock",{block:l,id:vt.name,type:"then",source:'(125:55)            <!-- eslint-disable-next-line -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:n}),l}function bt(n){const e={c:ee,l:ee,m:ee,p:ee,d:ee};return C("SvelteRegisterBlock",{block:e,id:bt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:n}),e}function Te(n){let e,t,s,l,r,o,i,p=n[9]("changelog")+"",c,v,u,m,d,f,y,P,N,V=n[9]("preview")+"",k,O,W,G,I,z,Y=n[9]("version-form.agreement-to")+"",h,ie,K,X=n[9]("content-policy")+"",q,ae,re,J,Z,U,j,D,te,H,ce,le,L=!n[3]&&ke(n);f=new je({props:{for:"changelog",$$slots:{default:[ht,({messages:ne})=>({19:ne}),({messages:ne})=>ne?524288:0]},$$scope:{ctx:n}},$$inline:!0});let Q={ctx:n,current:null,token:null,hasCatch:!1,pending:bt,then:vt,catch:gt,value:18};Oe(G=Ve(n[8]),Q);const Fe={c:function(){e=b("form"),t=b("div"),L&&L.c(),s=B(),l=b("div"),r=b("div"),o=b("label"),i=b("span"),c=E(p),v=E(" *"),u=B(),m=b("textarea"),d=B(),tt(f.$$.fragment),y=B(),P=b("div"),N=b("span"),k=E(V),O=E(":"),W=B(),Q.block.c(),I=B(),z=b("div"),h=E(Y),ie=B(),K=b("a"),q=E(X),ae=E("."),re=B(),J=b("div"),Z=b("button"),U=b("span"),j=E(n[1]),D=B(),te=E(n[2]),this.h()},l:function(se){e=$(se,"FORM",{});var _=x(e);t=$(_,"DIV",{class:!0});var oe=x(t);L&&L.l(oe),s=T(oe),l=$(oe,"DIV",{class:!0});var me=x(l);r=$(me,"DIV",{class:!0});var de=x(r);o=$(de,"LABEL",{class:!0});var pe=x(o);i=$(pe,"SPAN",{});var we=x(i);c=R(we,p),v=R(we," *"),we.forEach(g),u=T(pe),m=$(pe,"TEXTAREA",{class:!0,rows:!0}),x(m).forEach(g),pe.forEach(g),d=T(de),nt(f.$$.fragment,de),de.forEach(g),y=T(me),P=$(me,"DIV",{class:!0});var he=x(P);N=$(he,"SPAN",{});var Se=x(N);k=R(Se,V),O=R(Se,":"),Se.forEach(g),W=T(he),Q.block.l(he),he.forEach(g),me.forEach(g),I=T(oe),z=$(oe,"DIV",{class:!0});var fe=x(z);h=R(fe,Y),ie=T(fe),K=$(fe,"A",{href:!0,class:!0});var Ie=x(K);q=R(Ie,X),Ie.forEach(g),ae=R(fe,"."),fe.forEach(g),re=T(oe),J=$(oe,"DIV",{});var Ae=x(J);Z=$(Ae,"BUTTON",{class:!0,type:!0});var ge=x(Z);U=$(ge,"SPAN",{class:!0});var Me=x(U);j=R(Me,n[1]),Me.forEach(g),D=T(ge),te=R(ge,n[2]),ge.forEach(g),Ae.forEach(g),oe.forEach(g),_.forEach(g),this.h()},h:function(){w(i,S,124,10,4111),F(m,"class","vertical-textarea textarea p-2"),m.required=!0,F(m,"rows",10),w(m,S,125,10,4154),F(o,"class","label"),w(o,S,123,8,4079),F(r,"class","grid grid-flow-row auto-rows-max gap-2"),w(r,S,122,6,4018),w(N,S,132,8,4513),F(P,"class","grid grid-flow-row auto-rows-max gap-2"),w(P,S,131,6,4452),F(l,"class","split grid gap-6 svelte-1q5q8ki"),w(l,S,121,4,3981),F(K,"href","/content-policy"),F(K,"class","svelte-1q5q8ki"),w(K,S,141,40,4830),F(z,"class","text-muted"),w(z,S,140,4,4765),F(U,"class","material-icons pr-2"),w(U,S,146,8,4988),F(Z,"class","variant-ghost-primary btn"),F(Z,"type","submit"),Z.disabled=n[6],w(Z,S,145,6,4912),w(J,S,144,4,4900),F(t,"class","grid grid-flow-row gap-6"),w(t,S,45,2,1354),w(e,S,44,0,1336)},m:function(se,_){M(se,e,_),a(e,t),L&&L.m(t,null),a(t,s),a(t,l),a(l,r),a(r,o),a(o,i),a(i,c),a(i,v),a(o,u),a(o,m),Ce(m,n[5].changelog),a(r,d),st(f,r,null),a(l,y),a(l,P),a(P,N),a(N,k),a(N,O),a(P,W),Q.block.m(P,Q.anchor=null),Q.mount=()=>P,Q.anchor=null,a(t,I),a(t,z),a(z,h),a(z,ie),a(z,K),a(K,q),a(z,ae),a(t,re),a(t,J),a(J,Z),a(Z,U),a(U,j),a(Z,D),a(Z,te),H=!0,ce||(le=[Vt(m,"input",n[16]),xt(n[11].call(null,e))],ce=!0)},p:function(se,[_]){n=se,n[3]?L&&(kt(),ve(L,1,1,()=>{L=null}),Et()):L?(L.p(n,_),_&8&&ue(L,1)):(L=ke(n),L.c(),ue(L,1),L.m(t,s)),(!H||_&512)&&p!==(p=n[9]("changelog")+"")&&A(c,p),_&32&&Ce(m,n[5].changelog);const oe={};_&67633152&&(oe.$$scope={dirty:_,ctx:n}),f.$set(oe),(!H||_&512)&&V!==(V=n[9]("preview")+"")&&A(k,V),Q.ctx=n,_&256&&G!==(G=Ve(n[8]))&&Oe(G,Q)||Rt(Q,n,_),(!H||_&512)&&Y!==(Y=n[9]("version-form.agreement-to")+"")&&A(h,Y),(!H||_&512)&&X!==(X=n[9]("content-policy")+"")&&A(q,X),(!H||_&2)&&A(j,n[1]),(!H||_&4)&&A(te,n[2]),(!H||_&64)&&Pt(Z,"disabled",n[6])},i:function(se){H||(ue(L),ue(f.$$.fragment,se),H=!0)},o:function(se){ve(L),ve(f.$$.fragment,se),H=!1},d:function(se){se&&g(e),L&&L.d(),ot(f),Q.block.d(),Q.token=null,Q=null,ce=!1,Nt(le)}};return C("SvelteRegisterBlock",{block:Fe,id:Te.name,type:"component",source:"",ctx:n}),Fe}function Ut(n,e,t){let s,l,r,o,i,p=ee,c=()=>(p(),p=Bt(m,h=>t(9,i=h)),m);n.$$.on_destroy.push(()=>p());let{$$slots:v={},$$scope:u}=e;yt("VersionForm",v,[]);const{t:m}=Ge();ye(m,"t"),c();let{modReference:d}=e,{onSubmit:f}=e,{initialValues:y={changelog:"",stability:He.Release}}=e,{submitIcon:P}=e,{submitText:N=i("entry.create")}=e,{editing:V=!1}=e;const k=qe();ye(k,"modMeta"),De(n,k,h=>t(4,r=h));let O=!1;const W=Ke(d,k),{form:G,data:I}=_e({initialValues:y,extend:[We({schema:W}),Je],onSubmit:h=>{t(6,O=!0),f(Ye(h,W)).then(()=>t(6,O=!1))}});ye(I,"data"),De(n,I,h=>t(5,o=h)),n.$$.on_mount.push(function(){d===void 0&&!("modReference"in e||n.$$.bound[n.$$.props.modReference])&&console.warn("<VersionForm> was created without expected prop 'modReference'"),f===void 0&&!("onSubmit"in e||n.$$.bound[n.$$.props.onSubmit])&&console.warn("<VersionForm> was created without expected prop 'onSubmit'"),P===void 0&&!("submitIcon"in e||n.$$.bound[n.$$.props.submitIcon])&&console.warn("<VersionForm> was created without expected prop 'submitIcon'")});const z=["modReference","onSubmit","initialValues","submitIcon","submitText","editing"];Object.keys(e).forEach(h=>{!~z.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${h}'`)});function Y(){o.changelog=this.value,I.set(o)}return n.$$set=h=>{"modReference"in h&&t(13,d=h.modReference),"onSubmit"in h&&t(14,f=h.onSubmit),"initialValues"in h&&t(15,y=h.initialValues),"submitIcon"in h&&t(1,P=h.submitIcon),"submitText"in h&&t(2,N=h.submitText),"editing"in h&&t(3,V=h.editing)},n.$capture_state=()=>({createForm:_e,validator:We,reporter:Je,ValidationMessage:je,constructVersionSchema:Ke,trimNonSchema:Ye,markdown:Ve,writable:qe,VersionStabilities:He,prettyBytes:xe,getTranslate:Ge,t:m,modReference:d,onSubmit:f,initialValues:y,submitIcon:P,submitText:N,editing:V,modMeta:k,disabled:O,versionSchema:W,form:G,data:I,dependencies:l,preview:s,$modMeta:r,$data:o,$t:i}),n.$inject_state=h=>{"modReference"in h&&t(13,d=h.modReference),"onSubmit"in h&&t(14,f=h.onSubmit),"initialValues"in h&&t(15,y=h.initialValues),"submitIcon"in h&&t(1,P=h.submitIcon),"submitText"in h&&t(2,N=h.submitText),"editing"in h&&t(3,V=h.editing),"disabled"in h&&t(6,O=h.disabled),"dependencies"in h&&t(7,l=h.dependencies),"preview"in h&&t(8,s=h.preview)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&32&&t(8,s=o.changelog||""),n.$$.dirty&16&&t(7,l=r?.uplugin?.Plugins?.filter(h=>!h.BasePlugin)||[])},[m,P,N,V,r,o,O,l,s,i,k,G,I,d,f,y,Y]}class Kt extends $t{constructor(e){super(e),wt(this,e,Ut,Te,St,{t:0,modReference:13,onSubmit:14,initialValues:15,submitIcon:1,submitText:2,editing:3}),C("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:Te.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitIcon(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitIcon(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Kt as V};
//# sourceMappingURL=VersionForm.DXYkOq9E.js.map
