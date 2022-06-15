import{S as ut,i as ft,s as pt,d as N,y as ye,ae as Se,bh as ke,aM as De,v as mt,am as Ae,an as je,w as Ve,e as x,af as Q,f as B,a7 as J,g as He,h as R,j as A,ag as K,k as h,l as P,a8 as Y,ac as v,n as w,p as j,ad as d,a9 as X,u as U,t as C,ab as Z,ah as q,aV as le,aW as ze,O as dt,ai as Qe,q as ht,r as gt,bi as $t,x as _}from"./vendor-71586dff.js";import{o as vt,b as bt,c as xt,g as Ke,s as Ee,S as Ge,V as ce,T as Le,I as Be,e as Pe,a as Ne,O as oe}from"./forms-a767280e.js";import{J as Rt}from"./jszip-581b0412.js";import{v as wt}from"./uplugin-730f616e.js";import{t as Fe}from"./forms-fcbfc7d5.js";import{m as re}from"./markdown-f8c8918c.js";import{V as Me}from"./graphql-587ea9ba.js";import{b as ae}from"./formatting-f0380eae.js";const Te=(s,e)=>vt({file:bt(xt().superRefine(async(t,n)=>{if(!("name"in t&&"size"in t&&"type"in t)){n.addIssue({message:"Unknown file error",code:Ke.custom});return}const i=await yt(t,s);if("message"in i){n.addIssue({message:i.message,code:Ke.custom});return}e.set(i)})),changelog:Ee(),stability:Ee()}),yt=async(s,e)=>new Rt().loadAsync(s).then(n=>{const i=n.file(e+".uplugin");return i?St(n,i,e):{message:e+".uplugin missing from mod"}}).catch(n=>({message:"invalid zip/smod file: "+n})),St=async(s,e,t)=>e.async("string").then(async n=>{const i=await wt(n);if(i.length!=0)return{message:`invalid ${t}.uplugin`,extended:i};const l=JSON.parse(n);let c=!1;for(const o of l.Plugins)if(o.Name==="SML"){c=!0;break}return c?{uplugin:l,objects:Object.keys(s.files).filter(o=>o.endsWith(".dll")||o.endsWith(".pak"))}:{message:"mod must depend on SML"}}).catch(n=>({message:`invalid ${t}.uplugin: ${n}`}));var Pt=(()=>`.split.s-Aj89xH93RQKp.s-Aj89xH93RQKp{grid-template-columns:50% 50%}.split.s-Aj89xH93RQKp .right.s-Aj89xH93RQKp{max-height:75vh;overflow:auto}
`)();const y="src/lib/components/versions/VersionForm.svelte";function Oe(s,e,t){const n=s.slice();return n[17]=e[t],n}function Ie(s,e,t){const n=s.slice();return n[20]=e[t],n}function Ue(s){let e;const t={c:function(){e=Q("Alpha")},l:function(i){e=K(i,"Alpha")},m:function(i,l){j(i,e,l)},d:function(i){i&&h(e)}};return N("SvelteRegisterBlock",{block:t,id:Ue.name,type:"slot",source:'(40:8) <Option value=\\"alpha\\">',ctx:s}),t}function _e(s){let e;const t={c:function(){e=Q("Beta")},l:function(i){e=K(i,"Beta")},m:function(i,l){j(i,e,l)},d:function(i){i&&h(e)}};return N("SvelteRegisterBlock",{block:t,id:_e.name,type:"slot",source:'(41:8) <Option value=\\"beta\\">',ctx:s}),t}function qe(s){let e;const t={c:function(){e=Q("Release")},l:function(i){e=K(i,"Release")},m:function(i,l){j(i,e,l)},d:function(i){i&&h(e)}};return N("SvelteRegisterBlock",{block:t,id:qe.name,type:"slot",source:'(42:8) <Option value=\\"release\\">',ctx:s}),t}function Ce(s){let e,t,n,i,l,c;e=new oe({props:{value:"alpha",$$slots:{default:[Ue]},$$scope:{ctx:s}},$$inline:!0}),n=new oe({props:{value:"beta",$$slots:{default:[_e]},$$scope:{ctx:s}},$$inline:!0}),l=new oe({props:{value:"release",$$slots:{default:[qe]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){J(e.$$.fragment),t=B(),J(n.$$.fragment),i=B(),J(l.$$.fragment)},l:function(r){Y(e.$$.fragment,r),t=P(r),Y(n.$$.fragment,r),i=P(r),Y(l.$$.fragment,r)},m:function(r,a){X(e,r,a),j(r,t,a),X(n,r,a),j(r,i,a),X(l,r,a),c=!0},p:function(r,a){const m={};a&8388608&&(m.$$scope={dirty:a,ctx:r}),e.$set(m);const u={};a&8388608&&(u.$$scope={dirty:a,ctx:r}),n.$set(u);const f={};a&8388608&&(f.$$scope={dirty:a,ctx:r}),l.$set(f)},i:function(r){c||(U(e.$$.fragment,r),U(n.$$.fragment,r),U(l.$$.fragment,r),c=!0)},o:function(r){C(e.$$.fragment,r),C(n.$$.fragment,r),C(l.$$.fragment,r),c=!1},d:function(r){Z(e,r),r&&h(t),Z(n,r),r&&h(i),Z(l,r)}};return N("SvelteRegisterBlock",{block:o,id:Ce.name,type:"slot",source:'(39:6) <Select bind:value={$data.stability} label=\\"Stability\\">',ctx:s}),o}function We(s){let e,t=(s[16]||"")+"",n;const i={c:function(){e=x("span"),n=Q(t),this.h()},l:function(c){e=R(c,"SPAN",{class:!0});var o=A(e);n=K(o,t),o.forEach(h),this.h()},h:function(){v(e,"class","validation-message s-Aj89xH93RQKp"),w(e,y,44,8,1656)},m:function(c,o){j(c,e,o),d(e,n)},p:function(c,o){o&65536&&t!==(t=(c[16]||"")+"")&&q(n,t)},d:function(c){c&&h(e)}};return N("SvelteRegisterBlock",{block:i,id:We.name,type:"slot",source:'(44:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:s}),i}function ue(s){let e,t,n,i,l,c,o,p,r,a,m;o=new ce({props:{for:"file",$$slots:{default:[Je,({messages:S})=>({16:S}),({messages:S})=>S?65536:0]},$$scope:{ctx:s}},$$inline:!0});let u=s[2].file&&fe(s),f=s[5]&&pe(s);const k={c:function(){e=x("div"),t=x("label"),n=Q("File:"),i=B(),l=x("input"),c=B(),J(o.$$.fragment),p=B(),u&&u.c(),r=B(),f&&f.c(),a=He(),this.h()},l:function($){e=R($,"DIV",{class:!0});var b=A(e);t=R(b,"LABEL",{for:!0,class:!0});var V=A(t);n=K(V,"File:"),V.forEach(h),i=P(b),l=R(b,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),c=P(b),Y(o.$$.fragment,b),b.forEach(h),p=P($),u&&u.l($),r=P($),f&&f.l($),a=He(),this.h()},h:function(){v(t,"for","file"),v(t,"class","s-Aj89xH93RQKp"),w(t,y,50,8,1823),v(l,"id","file"),v(l,"class","base-input s-Aj89xH93RQKp"),v(l,"name","file"),v(l,"type","file"),v(l,"accept",".zip,.smod"),v(l,"placeholder","File"),w(l,y,51,8,1863),v(e,"class","grid grid-flow-row gap-2 s-Aj89xH93RQKp"),w(e,y,49,6,1776)},m:function($,b){j($,e,b),d(e,t),d(t,n),d(e,i),d(e,l),d(e,c),X(o,e,null),j($,p,b),u&&u.m($,b),j($,r,b),f&&f.m($,b),j($,a,b),m=!0},p:function($,b){const V={};b&8454144&&(V.$$scope={dirty:b,ctx:$}),o.$set(V),$[2].file?u?u.p($,b):(u=fe($),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),$[5]?f?f.p($,b):(f=pe($),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null)},i:function($){m||(U(o.$$.fragment,$),m=!0)},o:function($){C(o.$$.fragment,$),m=!1},d:function($){$&&h(e),Z(o),$&&h(p),u&&u.d($),$&&h(r),f&&f.d($),$&&h(a)}};return N("SvelteRegisterBlock",{block:k,id:ue.name,type:"if",source:"(49:4) {#if !editing}",ctx:s}),k}function Je(s){let e,t=(s[16]||"")+"",n;const i={c:function(){e=x("span"),n=Q(t),this.h()},l:function(c){e=R(c,"SPAN",{class:!0});var o=A(e);n=K(o,t),o.forEach(h),this.h()},h:function(){v(e,"class","validation-message s-Aj89xH93RQKp"),w(e,y,53,10,2037)},m:function(c,o){j(c,e,o),d(e,n)},p:function(c,o){o&65536&&t!==(t=(c[16]||"")+"")&&q(n,t)},d:function(c){c&&h(e)}};return N("SvelteRegisterBlock",{block:i,id:Je.name,type:"slot",source:'(53:8) <ValidationMessage for=\\"file\\" let:messages={message}>',ctx:s}),i}function fe(s){let e,t,n,i,l,c=(s[2].file.type||"Unknown")+"",o,p,r,a,m,u,f,k=ae(s[2].file.size)+"",S;const $={c:function(){e=x("div"),t=x("span"),n=x("strong"),i=Q("File Type:"),l=B(),o=Q(c),p=x("br"),r=B(),a=x("span"),m=x("strong"),u=Q("File Size:"),f=B(),S=Q(k),this.h()},l:function(V){e=R(V,"DIV",{class:!0});var H=A(e);t=R(H,"SPAN",{class:!0});var D=A(t);n=R(D,"STRONG",{class:!0});var g=A(n);i=K(g,"File Type:"),g.forEach(h),l=P(D),o=K(D,c),D.forEach(h),p=R(H,"BR",{class:!0}),r=P(H),a=R(H,"SPAN",{class:!0});var E=A(a);m=R(E,"STRONG",{class:!0});var F=A(m);u=K(F,"File Size:"),F.forEach(h),f=P(E),S=K(E,k),E.forEach(h),H.forEach(h),this.h()},h:function(){v(n,"class","s-Aj89xH93RQKp"),w(n,y,59,16,2189),v(t,"class","s-Aj89xH93RQKp"),w(t,y,59,10,2183),v(p,"class","s-Aj89xH93RQKp"),w(p,y,59,81,2254),v(m,"class","s-Aj89xH93RQKp"),w(m,y,60,16,2277),v(a,"class","s-Aj89xH93RQKp"),w(a,y,60,10,2271),v(e,"class","s-Aj89xH93RQKp"),w(e,y,58,8,2167)},m:function(V,H){j(V,e,H),d(e,t),d(t,n),d(n,i),d(t,l),d(t,o),d(e,p),d(e,r),d(e,a),d(a,m),d(m,u),d(a,f),d(a,S)},p:function(V,H){H&4&&c!==(c=(V[2].file.type||"Unknown")+"")&&q(o,c),H&4&&k!==(k=ae(V[2].file.size)+"")&&q(S,k)},d:function(V){V&&h(e)}};return N("SvelteRegisterBlock",{block:$,id:fe.name,type:"if",source:"(58:6) {#if $data.file}",ctx:s}),$}function pe(s){let e,t,n,i,l,c,o=s[5].uplugin.Version+"",p,r,a,m,u;function f(g,E){return g[5].uplugin.SemVersion!==void 0?Xe:Ye}let k=f(s),S=k(s),$=s[5].uplugin.Plugins!==void 0&&me(s);function b(g,E){return g[5].objects&&g[5].objects.length>0?nt:tt}let V=b(s),H=V(s);const D={c:function(){e=x("div"),t=x("p"),n=x("span"),i=x("strong"),l=Q("Version:"),c=B(),p=Q(o),r=x("br"),a=B(),S.c(),m=B(),$&&$.c(),u=B(),H.c(),this.h()},l:function(E){e=R(E,"DIV",{class:!0});var F=A(e);t=R(F,"P",{class:!0});var z=A(t);n=R(z,"SPAN",{class:!0});var W=A(n);i=R(W,"STRONG",{class:!0});var ie=A(i);l=K(ie,"Version:"),ie.forEach(h),c=P(W),p=K(W,o),r=R(W,"BR",{class:!0}),W.forEach(h),a=P(z),S.l(z),z.forEach(h),m=P(F),$&&$.l(F),u=P(F),H.l(F),F.forEach(h),this.h()},h:function(){v(i,"class","s-Aj89xH93RQKp"),w(i,y,67,18,2451),v(r,"class","s-Aj89xH93RQKp"),w(r,y,67,70,2503),v(n,"class","s-Aj89xH93RQKp"),w(n,y,67,12,2445),v(t,"class","mb-4 s-Aj89xH93RQKp"),w(t,y,66,10,2416),v(e,"class","s-Aj89xH93RQKp"),w(e,y,65,8,2400)},m:function(E,F){j(E,e,F),d(e,t),d(t,n),d(n,i),d(i,l),d(n,c),d(n,p),d(n,r),d(t,a),S.m(t,null),d(e,m),$&&$.m(e,null),d(e,u),H.m(e,null)},p:function(E,F){F&32&&o!==(o=E[5].uplugin.Version+"")&&q(p,o),k===(k=f(E))&&S?S.p(E,F):(S.d(1),S=k(E),S&&(S.c(),S.m(t,null))),E[5].uplugin.Plugins!==void 0?$?$.p(E,F):($=me(E),$.c(),$.m(e,u)):$&&($.d(1),$=null),V===(V=b(E))&&H?H.p(E,F):(H.d(1),H=V(E),H&&(H.c(),H.m(e,null)))},d:function(E){E&&h(e),S.d(),$&&$.d(),H.d()}};return N("SvelteRegisterBlock",{block:D,id:pe.name,type:"if",source:"(65:6) {#if $modMeta}",ctx:s}),D}function Ye(s){let e,t,n=s[5].uplugin.Version+"",i,l;const c={c:function(){e=x("span"),t=Q("Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),i=Q(n),l=Q(".0.0"),this.h()},l:function(p){e=R(p,"SPAN",{class:!0});var r=A(e);t=K(r,"Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),i=K(r,n),l=K(r,".0.0"),r.forEach(h),this.h()},h:function(){v(e,"class","text-yellow-600 s-Aj89xH93RQKp"),w(e,y,72,14,2704)},m:function(p,r){j(p,e,r),d(e,t),d(e,i),d(e,l)},p:function(p,r){r&32&&n!==(n=p[5].uplugin.Version+"")&&q(i,n)},d:function(p){p&&h(e)}};return N("SvelteRegisterBlock",{block:c,id:Ye.name,type:"else",source:"(72:12) {:else}",ctx:s}),c}function Xe(s){let e,t,n,i,l=s[5].uplugin.SemVersion+"",c,o;const p={c:function(){e=x("span"),t=x("strong"),n=Q("SemVersion:"),i=B(),c=Q(l),o=x("br"),this.h()},l:function(a){e=R(a,"SPAN",{class:!0});var m=A(e);t=R(m,"STRONG",{class:!0});var u=A(t);n=K(u,"SemVersion:"),u.forEach(h),i=P(m),c=K(m,l),o=R(m,"BR",{class:!0}),m.forEach(h),this.h()},h:function(){v(t,"class","s-Aj89xH93RQKp"),w(t,y,70,20,2598),v(o,"class","s-Aj89xH93RQKp"),w(o,y,70,78,2656),v(e,"class","s-Aj89xH93RQKp"),w(e,y,70,14,2592)},m:function(a,m){j(a,e,m),d(e,t),d(t,n),d(e,i),d(e,c),d(e,o)},p:function(a,m){m&32&&l!==(l=a[5].uplugin.SemVersion+"")&&q(c,l)},d:function(a){a&&h(e)}};return N("SvelteRegisterBlock",{block:p,id:Xe.name,type:"if",source:"(70:12) {#if $modMeta.uplugin.SemVersion !== undefined}",ctx:s}),p}function me(s){let e,t,n,i,l,c=s[5].uplugin.Plugins;le(c);let o=[];for(let r=0;r<c.length;r+=1)o[r]=de(Ie(s,c,r));const p={c:function(){e=x("p"),t=x("strong"),n=Q("Dependencies:"),i=x("br"),l=B();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l:function(a){e=R(a,"P",{class:!0});var m=A(e);t=R(m,"STRONG",{class:!0});var u=A(t);n=K(u,"Dependencies:"),u.forEach(h),i=R(m,"BR",{class:!0}),l=P(m);for(let f=0;f<o.length;f+=1)o[f].l(m);m.forEach(h),this.h()},h:function(){v(t,"class","s-Aj89xH93RQKp"),w(t,y,81,14,3038),v(i,"class","s-Aj89xH93RQKp"),w(i,y,81,44,3068),v(e,"class","s-Aj89xH93RQKp"),w(e,y,80,12,3020)},m:function(a,m){j(a,e,m),d(e,t),d(t,n),d(e,i),d(e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null)},p:function(a,m){if(m&32){c=a[5].uplugin.Plugins,le(c);let u;for(u=0;u<c.length;u+=1){const f=Ie(a,c,u);o[u]?o[u].p(f,m):(o[u]=de(f),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}},d:function(a){a&&h(e),ze(o,a)}};return N("SvelteRegisterBlock",{block:p,id:me.name,type:"if",source:"(80:10) {#if $modMeta.uplugin.Plugins !== undefined}",ctx:s}),p}function Ze(s){let e,t;const n={c:function(){e=x("span"),t=Q("*"),this.h()},l:function(l){e=R(l,"SPAN",{class:!0});var c=A(e);t=K(c,"*"),c.forEach(h),this.h()},h:function(){v(e,"class","s-Aj89xH93RQKp"),w(e,y,87,18,3330)},m:function(l,c){j(l,e,c),d(e,t)},p:_,d:function(l){l&&h(e)}};return N("SvelteRegisterBlock",{block:n,id:Ze.name,type:"else",source:"(87:16) {:else}",ctx:s}),n}function et(s){let e,t=s[20].SemVersion+"",n;const i={c:function(){e=x("span"),n=Q(t),this.h()},l:function(c){e=R(c,"SPAN",{class:!0});var o=A(e);n=K(o,t),o.forEach(h),this.h()},h:function(){v(e,"class","s-Aj89xH93RQKp"),w(e,y,85,18,3251)},m:function(c,o){j(c,e,o),d(e,n)},p:function(c,o){o&32&&t!==(t=c[20].SemVersion+"")&&q(n,t)},d:function(c){c&&h(e)}};return N("SvelteRegisterBlock",{block:i,id:et.name,type:"if",source:"(85:16) {#if dependency.SemVersion}",ctx:s}),i}function de(s){let e,t=s[20].Name+"",n,i,l,c,o;function p(u,f){return u[20].SemVersion?et:Ze}let r=p(s),a=r(s);const m={c:function(){e=x("strong"),n=Q(t),i=Q(":"),l=B(),a.c(),c=B(),o=x("br"),this.h()},l:function(f){e=R(f,"STRONG",{class:!0});var k=A(e);n=K(k,t),i=K(k,":"),k.forEach(h),l=P(f),a.l(f),c=P(f),o=R(f,"BR",{class:!0}),this.h()},h:function(){v(e,"class","s-Aj89xH93RQKp"),w(e,y,83,16,3152),v(o,"class","s-Aj89xH93RQKp"),w(o,y,89,16,3383)},m:function(f,k){j(f,e,k),d(e,n),d(e,i),j(f,l,k),a.m(f,k),j(f,c,k),j(f,o,k)},p:function(f,k){k&32&&t!==(t=f[20].Name+"")&&q(n,t),r===(r=p(f))&&a?a.p(f,k):(a.d(1),a=r(f),a&&(a.c(),a.m(c.parentNode,c)))},d:function(f){f&&h(e),f&&h(l),a.d(f),f&&h(c),f&&h(o)}};return N("SvelteRegisterBlock",{block:m,id:de.name,type:"each",source:"(83:14) {#each $modMeta.uplugin.Plugins as dependency}",ctx:s}),m}function tt(s){let e,t,n;const i={c:function(){e=x("p"),t=x("span"),n=Q("Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),this.h()},l:function(c){e=R(c,"P",{class:!0});var o=A(e);t=R(o,"SPAN",{class:!0});var p=A(t);n=K(p,"Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),p.forEach(h),o.forEach(h),this.h()},h:function(){v(t,"class","text-yellow-600 s-Aj89xH93RQKp"),w(t,y,104,14,3769),v(e,"class","s-Aj89xH93RQKp"),w(e,y,103,12,3751)},m:function(c,o){j(c,e,o),d(e,t),d(t,n)},p:_,d:function(c){c&&h(e)}};return N("SvelteRegisterBlock",{block:i,id:tt.name,type:"else",source:"(103:10) {:else}",ctx:s}),i}function nt(s){let e,t,n,i,l,c=s[5].objects;le(c);let o=[];for(let r=0;r<c.length;r+=1)o[r]=he(Oe(s,c,r));const p={c:function(){e=x("p"),t=x("strong"),n=Q("Objects:"),i=x("br"),l=B();for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l:function(a){e=R(a,"P",{class:!0});var m=A(e);t=R(m,"STRONG",{class:!0});var u=A(t);n=K(u,"Objects:"),u.forEach(h),i=R(m,"BR",{class:!0}),l=P(m);for(let f=0;f<o.length;f+=1)o[f].l(m);m.forEach(h),this.h()},h:function(){v(t,"class","s-Aj89xH93RQKp"),w(t,y,96,14,3540),v(i,"class","s-Aj89xH93RQKp"),w(i,y,96,39,3565),v(e,"class","s-Aj89xH93RQKp"),w(e,y,95,12,3522)},m:function(a,m){j(a,e,m),d(e,t),d(t,n),d(e,i),d(e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null)},p:function(a,m){if(m&32){c=a[5].objects,le(c);let u;for(u=0;u<c.length;u+=1){const f=Oe(a,c,u);o[u]?o[u].p(f,m):(o[u]=he(f),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}},d:function(a){a&&h(e),ze(o,a)}};return N("SvelteRegisterBlock",{block:p,id:nt.name,type:"if",source:"(95:10) {#if $modMeta.objects && $modMeta.objects.length > 0}",ctx:s}),p}function he(s){let e,t=s[17]+"",n,i,l;const c={c:function(){e=x("span"),n=Q(t),i=B(),l=x("br"),this.h()},l:function(p){e=R(p,"SPAN",{class:!0});var r=A(e);n=K(r,t),r.forEach(h),i=P(p),l=R(p,"BR",{class:!0}),this.h()},h:function(){v(e,"class","s-Aj89xH93RQKp"),w(e,y,98,16,3637),v(l,"class","s-Aj89xH93RQKp"),w(l,y,99,16,3675)},m:function(p,r){j(p,e,r),d(e,n),j(p,i,r),j(p,l,r)},p:function(p,r){r&32&&t!==(t=p[17]+"")&&q(n,t)},d:function(p){p&&h(e),p&&h(i),p&&h(l)}};return N("SvelteRegisterBlock",{block:c,id:he.name,type:"each",source:"(98:14) {#each $modMeta.objects as object}",ctx:s}),c}function st(s){let e,t=(s[16]||"")+"",n;const i={c:function(){e=x("span"),n=Q(t),this.h()},l:function(c){e=R(c,"SPAN",{class:!0});var o=A(e);n=K(o,t),o.forEach(h),this.h()},h:function(){v(e,"class","validation-message s-Aj89xH93RQKp"),w(e,y,124,10,4350)},m:function(c,o){j(c,e,o),d(e,n)},p:function(c,o){o&65536&&t!==(t=(c[16]||"")+"")&&q(n,t)},d:function(c){c&&h(e)}};return N("SvelteRegisterBlock",{block:i,id:st.name,type:"slot",source:'(124:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:s}),i}function it(s){const e={c:_,l:_,m:_,p:_,d:_};return N("SvelteRegisterBlock",{block:e,id:it.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:s}),e}function ot(s){let e,t=s[15]+"";const n={c:function(){e=x("div"),this.h()},l:function(l){e=R(l,"DIV",{class:!0});var c=A(e);c.forEach(h),this.h()},h:function(){v(e,"class","markdown-content right s-Aj89xH93RQKp"),w(e,y,130,10,4603)},m:function(l,c){j(l,e,c),e.innerHTML=t},p:function(l,c){c&16&&t!==(t=l[15]+"")&&(e.innerHTML=t)},d:function(l){l&&h(e)}};return N("SvelteRegisterBlock",{block:n,id:ot.name,type:"then",source:'(130:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:s}),n}function lt(s){const e={c:_,l:_,m:_,p:_,d:_};return N("SvelteRegisterBlock",{block:e,id:lt.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:s}),e}function ct(s){let e;const t={c:function(){e=Q(s[0])},l:function(i){e=K(i,s[0])},m:function(i,l){j(i,e,l)},p:function(i,l){l&1&&q(e,i[0])},d:function(i){i&&h(e)}};return N("SvelteRegisterBlock",{block:t,id:ct.name,type:"slot",source:'(137:6) <Button variant=\\"outlined\\" type=\\"submit\\" {disabled}>',ctx:s}),t}function ge(s){let e,t,n,i,l,c,o,p,r,a,m,u,f,k,S,$,b,V,H,D,g,E,F,z,W,ie,$e;function rt(O){s[12](O)}let ve={label:"Stability",$$slots:{default:[Ce]},$$scope:{ctx:s}};s[2].stability!==void 0&&(ve.value=s[2].stability),i=new Ge({props:ve,$$inline:!0}),ye.push(()=>Se(i,"value",rt)),o=new ce({props:{for:"stability",$$slots:{default:[We,({messages:O})=>({16:O}),({messages:O})=>O?65536:0]},$$scope:{ctx:s}},$$inline:!0});let M=!s[1]&&ue(s);function at(O){s[13](O)}let be={textarea:!0,class:"vertical-textarea",label:"Changelog",required:!0,input$rows:10};s[2].changelog!==void 0&&(be.value=s[2].changelog),u=new Le({props:be,$$inline:!0}),ye.push(()=>Se(u,"value",at)),S=new ce({props:{for:"changelog",$$slots:{default:[st,({messages:O})=>({16:O}),({messages:O})=>O?65536:0]},$$scope:{ctx:s}},$$inline:!0});let G={ctx:s,current:null,token:null,hasCatch:!1,pending:lt,then:ot,catch:it,value:15};ke(g=re(s[4]),G),z=new De({props:{variant:"outlined",type:"submit",disabled:s[3],$$slots:{default:[ct]},$$scope:{ctx:s}},$$inline:!0});const xe={c:function(){e=x("form"),t=x("div"),n=x("div"),J(i.$$.fragment),c=B(),J(o.$$.fragment),p=B(),M&&M.c(),r=B(),a=x("div"),m=x("div"),J(u.$$.fragment),k=B(),J(S.$$.fragment),$=B(),b=x("div"),V=x("span"),H=Q("Preview:"),D=B(),G.block.c(),E=B(),F=x("div"),J(z.$$.fragment),this.h()},l:function(I){e=R(I,"FORM",{class:!0});var T=A(e);t=R(T,"DIV",{class:!0});var L=A(t);n=R(L,"DIV",{class:!0});var te=A(n);Y(i.$$.fragment,te),c=P(te),Y(o.$$.fragment,te),te.forEach(h),p=P(L),M&&M.l(L),r=P(L),a=R(L,"DIV",{class:!0});var ne=A(a);m=R(ne,"DIV",{class:!0});var se=A(m);Y(u.$$.fragment,se),k=P(se),Y(S.$$.fragment,se),se.forEach(h),$=P(ne),b=R(ne,"DIV",{class:!0});var ee=A(b);V=R(ee,"SPAN",{class:!0});var Re=A(V);H=K(Re,"Preview:"),Re.forEach(h),D=P(ee),G.block.l(ee),ee.forEach(h),ne.forEach(h),E=P(L),F=R(L,"DIV",{class:!0});var we=A(F);Y(z.$$.fragment,we),we.forEach(h),L.forEach(h),T.forEach(h),this.h()},h:function(){v(n,"class","grid grid-flow-row gap-2 s-Aj89xH93RQKp"),w(n,y,37,4,1329),v(m,"class","grid grid-flow-row gap-2 auto-rows-max s-Aj89xH93RQKp"),w(m,y,114,6,4023),v(V,"class","s-Aj89xH93RQKp"),w(V,y,128,8,4515),v(b,"class","grid grid-flow-row gap-2 auto-rows-max s-Aj89xH93RQKp"),w(b,y,127,6,4454),v(a,"class","grid gap-6 split s-Aj89xH93RQKp"),w(a,y,113,4,3986),v(F,"class","s-Aj89xH93RQKp"),w(F,y,135,4,4715),v(t,"class","grid grid-flow-row gap-6 s-Aj89xH93RQKp"),w(t,y,36,2,1286),v(e,"class","s-Aj89xH93RQKp"),w(e,y,35,0,1268)},m:function(I,T){j(I,e,T),d(e,t),d(t,n),X(i,n,null),d(n,c),X(o,n,null),d(t,p),M&&M.m(t,null),d(t,r),d(t,a),d(a,m),X(u,m,null),d(m,k),X(S,m,null),d(a,$),d(a,b),d(b,V),d(V,H),d(b,D),G.block.m(b,G.anchor=null),G.mount=()=>b,G.anchor=null,d(t,E),d(t,F),X(z,F,null),W=!0,ie||($e=dt(s[7].call(null,e)),ie=!0)},p:function(I,[T]){s=I;const L={};T&8388608&&(L.$$scope={dirty:T,ctx:s}),!l&&T&4&&(l=!0,L.value=s[2].stability,Qe(()=>l=!1)),i.$set(L);const te={};T&8454144&&(te.$$scope={dirty:T,ctx:s}),o.$set(te),s[1]?M&&(ht(),C(M,1,1,()=>{M=null}),gt()):M?(M.p(s,T),T&2&&U(M,1)):(M=ue(s),M.c(),U(M,1),M.m(t,r));const ne={};!f&&T&4&&(f=!0,ne.value=s[2].changelog,Qe(()=>f=!1)),u.$set(ne);const se={};T&8454144&&(se.$$scope={dirty:T,ctx:s}),S.$set(se),G.ctx=s,T&16&&g!==(g=re(s[4]))&&ke(g,G)||$t(G,s,T);const ee={};T&8&&(ee.disabled=s[3]),T&8388609&&(ee.$$scope={dirty:T,ctx:s}),z.$set(ee)},i:function(I){W||(U(i.$$.fragment,I),U(o.$$.fragment,I),U(M),U(u.$$.fragment,I),U(S.$$.fragment,I),U(z.$$.fragment,I),W=!0)},o:function(I){C(i.$$.fragment,I),C(o.$$.fragment,I),C(M),C(u.$$.fragment,I),C(S.$$.fragment,I),C(z.$$.fragment,I),W=!1},d:function(I){I&&h(e),Z(i),Z(o),M&&M.d(),Z(u),Z(S),G.block.d(),G.token=null,G=null,Z(z),ie=!1,$e()}};return N("SvelteRegisterBlock",{block:xe,id:ge.name,type:"component",source:"",ctx:s}),xe}function kt(s,e,t){let n,i,l,{$$slots:c={},$$scope:o}=e;mt("VersionForm",c,[]);let{modReference:p}=e,{onSubmit:r}=e,{initialValues:a={changelog:"",stability:Me.Alpha}}=e,{submitText:m="Create"}=e,{editing:u=!1}=e;const f=Ve();Ae(f,"modMeta"),je(s,f,g=>t(5,l=g));let k=!1;const S=Te(p,f),{form:$,data:b}=Be({initialValues:a,extend:[Pe,Ne],validateSchema:S,onSubmit:g=>{t(3,k=!0),r(Fe(g,S)).then(()=>t(3,k=!1))}});Ae(b,"data"),je(s,b,g=>t(2,i=g));const V=["modReference","onSubmit","initialValues","submitText","editing"];Object.keys(e).forEach(g=>{!~V.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&console.warn(`<VersionForm> was created with unknown prop '${g}'`)});function H(g){s.$$.not_equal(i.stability,g)&&(i.stability=g,b.set(i))}function D(g){s.$$.not_equal(i.changelog,g)&&(i.changelog=g,b.set(i))}return s.$$set=g=>{"modReference"in g&&t(9,p=g.modReference),"onSubmit"in g&&t(10,r=g.onSubmit),"initialValues"in g&&t(11,a=g.initialValues),"submitText"in g&&t(0,m=g.submitText),"editing"in g&&t(1,u=g.editing)},s.$capture_state=()=>({createForm:Be,validator:Pe,svelteReporter:Ne,ValidationMessage:ce,constructVersionSchema:Te,trimNonSchema:Fe,markdown:re,writable:Ve,Textfield:Le,Button:De,VersionStabilities:Me,Select:Ge,Option:oe,prettyBytes:ae,modReference:p,onSubmit:r,initialValues:a,submitText:m,editing:u,modMeta:f,disabled:k,versionSchema:S,form:$,data:b,preview:n,$data:i,$modMeta:l}),s.$inject_state=g=>{"modReference"in g&&t(9,p=g.modReference),"onSubmit"in g&&t(10,r=g.onSubmit),"initialValues"in g&&t(11,a=g.initialValues),"submitText"in g&&t(0,m=g.submitText),"editing"in g&&t(1,u=g.editing),"disabled"in g&&t(3,k=g.disabled),"preview"in g&&t(4,n=g.preview)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&4&&t(4,n=i.changelog||"")},[m,u,i,k,n,l,f,$,b,p,r,a,H,D]}class Nt extends ut{constructor(e){super(e),ft(this,e,kt,ge,pt,{modReference:9,onSubmit:10,initialValues:11,submitText:0,editing:1}),N("SvelteRegisterComponent",{component:this,tagName:"VersionForm",options:e,id:ge.name});const{ctx:t}=this.$$,n=e.props||{};t[9]===void 0&&!("modReference"in n)&&console.warn("<VersionForm> was created without expected prop 'modReference'"),t[10]===void 0&&!("onSubmit"in n)&&console.warn("<VersionForm> was created without expected prop 'onSubmit'")}get modReference(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modReference(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<VersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<VersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Nt as V};
//# sourceMappingURL=VersionForm-7085983a.js.map