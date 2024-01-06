import{G as qe,S as $e,i as ve,s as we,d as O,v as be,ab as ne,a1 as xe,e as b,W as C,b as A,g as x,h as k,X as V,j as p,k as T,N as S,m as y,n as M,Q as h,Y as z,u as P,x as ye,H as Y,a2 as Fe,F as Ee,_ as ke,aj as Ge,$ as ae,a0 as Le,f as te,K as ze,r as F,t as L,q as Ie,J as oe,L as ie,O as re,R as se,a7 as Se,p as De,a8 as Je,M as le,Z as Pe,a6 as Ke,a9 as Qe,aa as We}from"../chunks/vendor.NxVab9sX.js";import{o as Xe,B as _e}from"../chunks/graphql.NT0BIh3j.js";import{l as Ye}from"../chunks/gql.WZvlfNZ8.js";import{p as ue}from"../chunks/formatting.GdW8kOxI.js";import{u as ce}from"../chunks/user.w2TKUtV2.js";import{m as de}from"../chunks/markdown.Z_xBtuQ-.js";import{M as Re}from"../chunks/MetaDescriptors.Shi-Pmo6.js";import{P as Be}from"../chunks/Page404.-2R6XRAW.js";const Ze=!1,et=async({params:t,parent:e})=>({...t,...await Ye({guide:qe({query:Xe,client:(await e()).client,variables:{guide:t.guideId}})})}),ft=Object.freeze(Object.defineProperty({__proto__:null,load:et,prerender:Ze},Symbol.toStringTag,{value:"Module"})),X="src/lib/components/guides/GuideInfo.svelte";function fe(t){let e,i,n,o,r=t[2]("entry.info")+"",a,s,u,c,$=t[2]("entry.created-at")+"",d,m,l,g=ue(t[0].created_at)+"",v,I;const B={c:function(){e=b("div"),i=b("section"),n=b("div"),o=b("h3"),a=C(r),s=A(),u=b("span"),c=b("strong"),d=C($),m=C(":"),l=A(),v=C(g),I=b("br"),this.h()},l:function(D){e=x(D,"DIV",{class:!0});var w=k(e);i=x(w,"SECTION",{});var f=k(i);n=x(f,"DIV",{class:!0});var N=k(n);o=x(N,"H3",{class:!0});var j=k(o);a=V(j,r),j.forEach(p),s=T(N),u=x(N,"SPAN",{});var E=k(u);c=x(E,"STRONG",{});var G=k(c);d=V(G,$),m=V(G,":"),G.forEach(p),l=T(E),v=V(E,g),E.forEach(p),I=x(N,"BR",{}),N.forEach(p),f.forEach(p),w.forEach(p),this.h()},h:function(){S(o,"class","my-4 text-2xl font-bold"),y(o,X,13,6,250),y(c,X,14,12,322),y(u,X,14,6,316),y(I,X,14,92,402),S(n,"class","text-lg"),y(n,X,12,4,222),y(i,X,11,2,208),S(e,"class","card p-4"),y(e,X,10,0,183)},m:function(D,w){M(D,e,w),h(e,i),h(i,n),h(n,o),h(o,a),h(n,s),h(n,u),h(u,c),h(c,d),h(c,m),h(u,l),h(u,v),h(n,I)},p:function(D,[w]){w&4&&r!==(r=D[2]("entry.info")+"")&&z(a,r),w&4&&$!==($=D[2]("entry.created-at")+"")&&z(d,$),w&1&&g!==(g=ue(D[0].created_at)+"")&&z(v,g)},i:P,o:P,d:function(D){D&&p(e)}};return O("SvelteRegisterBlock",{block:B,id:fe.name,type:"component",source:"",ctx:t}),B}function tt(t,e,i){let n,o=P,r=()=>(o(),o=ye(c,d=>i(2,n=d)),c);t.$$.on_destroy.push(()=>o());let{$$slots:a={},$$scope:s}=e;be("GuideInfo",a,[]);let{guide:u}=e;const{t:c}=ne();xe(c,"t"),r(),t.$$.on_mount.push(function(){u===void 0&&!("guide"in e||t.$$.bound[t.$$.props.guide])&&console.warn("<GuideInfo> was created without expected prop 'guide'")});const $=["guide"];return Object.keys(e).forEach(d=>{!~$.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<GuideInfo> was created with unknown prop '${d}'`)}),t.$$set=d=>{"guide"in d&&i(0,u=d.guide)},t.$capture_state=()=>({prettyDate:ue,getTranslate:ne,guide:u,t:c,$t:n}),t.$inject_state=d=>{"guide"in d&&i(0,u=d.guide)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[u,c,n]}class Oe extends $e{constructor(e){super(e),ve(this,e,tt,fe,we,{guide:0,t:1}),O("SvelteRegisterComponent",{component:this,tagName:"GuideInfo",options:e,id:fe.name})}get guide(){throw new Error("<GuideInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set guide(e){throw new Error("<GuideInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<GuideInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const q="src/lib/components/guides/GuideAuthor.svelte";function he(t){let e,i,n,o,r=t[2]("author")+"",a,s,u,c,$,d,m,l,g,v=t[0].username+"",I,B,_,D,w=t[2]("role.writer")+"",f;const N={c:function(){e=b("div"),i=b("section"),n=b("div"),o=b("h3"),a=C(r),s=A(),u=b("div"),c=b("div"),$=b("div"),m=A(),l=b("div"),g=b("a"),I=C(v),_=A(),D=b("div"),f=C(w),this.h()},l:function(E){e=x(E,"DIV",{class:!0});var G=k(e);i=x(G,"SECTION",{});var U=k(i);n=x(U,"DIV",{class:!0});var H=k(n);o=x(H,"H3",{class:!0});var Z=k(o);a=V(Z,r),Z.forEach(p),s=T(H),u=x(H,"DIV",{class:!0});var J=k(u);c=x(J,"DIV",{class:!0});var K=k(c);$=x(K,"DIV",{class:!0,style:!0}),k($).forEach(p),m=T(K),l=x(K,"DIV",{class:!0});var Q=k(l);g=x(Q,"A",{href:!0,class:!0});var ee=k(g);I=V(ee,v),ee.forEach(p),_=T(Q),D=x(Q,"DIV",{});var W=k(D);f=V(W,w),W.forEach(p),Q.forEach(p),K.forEach(p),J.forEach(p),H.forEach(p),U.forEach(p),G.forEach(p),this.h()},h:function(){S(o,"class","my-4 text-2xl font-bold"),y(o,q,13,6,253),S($,"class","h-14 w-14 rounded-full bg-cover"),S($,"style",d=`background-image: url("${t[0].avatar}")`),y($,q,17,10,438),S(g,"href",B=Y+"/user/"+t[0].id+"/"),S(g,"class","text-yellow-500 underline"),y(g,q,19,12,593),y(D,q,20,12,696),S(l,"class","grid grid-flow-row"),y(l,q,18,10,548),S(c,"class","grid auto-cols-min grid-flow-col gap-x-4"),y(c,q,16,8,373),S(u,"class","grid auto-rows-min gap-y-4 text-lg"),y(u,q,15,6,316),S(n,"class","grid grid-flow-row gap-y-2"),y(n,q,12,4,206),y(i,q,11,2,192),S(e,"class","card p-4"),y(e,q,10,0,167)},m:function(E,G){M(E,e,G),h(e,i),h(i,n),h(n,o),h(o,a),h(n,s),h(n,u),h(u,c),h(c,$),h(c,m),h(c,l),h(l,g),h(g,I),h(l,_),h(l,D),h(D,f)},p:function(E,[G]){G&4&&r!==(r=E[2]("author")+"")&&z(a,r),G&1&&d!==(d=`background-image: url("${E[0].avatar}")`)&&S($,"style",d),G&1&&v!==(v=E[0].username+"")&&z(I,v),G&1&&B!==(B=Y+"/user/"+E[0].id+"/")&&S(g,"href",B),G&4&&w!==(w=E[2]("role.writer")+"")&&z(f,w)},i:P,o:P,d:function(E){E&&p(e)}};return O("SvelteRegisterBlock",{block:N,id:he.name,type:"component",source:"",ctx:t}),N}function nt(t,e,i){let n,o=P,r=()=>(o(),o=ye(c,d=>i(2,n=d)),c);t.$$.on_destroy.push(()=>o());let{$$slots:a={},$$scope:s}=e;be("GuideAuthor",a,[]);let{author:u}=e;const{t:c}=ne();xe(c,"t"),r(),t.$$.on_mount.push(function(){u===void 0&&!("author"in e||t.$$.bound[t.$$.props.author])&&console.warn("<GuideAuthor> was created without expected prop 'author'")});const $=["author"];return Object.keys(e).forEach(d=>{!~$.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<GuideAuthor> was created with unknown prop '${d}'`)}),t.$$set=d=>{"author"in d&&i(0,u=d.author)},t.$capture_state=()=>({base:Y,getTranslate:ne,author:u,t:c,$t:n}),t.$inject_state=d=>{"author"in d&&i(0,u=d.author)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[u,c,n]}class Ce extends $e{constructor(e){super(e),ve(this,e,nt,he,we,{author:0,t:1}),O("SvelteRegisterComponent",{component:this,tagName:"GuideAuthor",options:e,id:he.name})}get author(){throw new Error("<GuideAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set author(e){throw new Error("<GuideAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<GuideAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:je}=Le,R="src/routes/guide/[guideId]/+page.svelte";function ge(t){let e,i;e=new Re({props:{description:t[0].data.getGuide.short_description,title:t[0].data.getGuide.name},$$inline:!0});const n={c:function(){oe(e.$$.fragment)},l:function(r){ie(e.$$.fragment,r)},m:function(r,a){re(e,r,a),i=!0},p:function(r,a){const s={};a&1&&(s.description=r[0].data.getGuide.short_description),a&1&&(s.title=r[0].data.getGuide.name),e.$set(s)},i:function(r){i||(F(e.$$.fragment,r),i=!0)},o:function(r){L(e.$$.fragment,r),i=!1},d:function(r){se(e,r)}};return O("SvelteRegisterBlock",{block:n,id:ge.name,type:"if",source:"(54:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:t}),n}function Ve(t){let e,i;e=new Be({$$inline:!0});const n={c:function(){oe(e.$$.fragment)},l:function(r){ie(e.$$.fragment,r)},m:function(r,a){re(e,r,a),i=!0},p:P,i:function(r){i||(F(e.$$.fragment,r),i=!0)},o:function(r){L(e.$$.fragment,r),i=!1},d:function(r){se(e,r)}};return O("SvelteRegisterBlock",{block:n,id:Ve.name,type:"else",source:"(96:0) {:else}",ctx:t}),n}function Ne(t){let e,i,n,o=t[0].data.getGuide.name+"",r,a,s,u,c,$,d,m,l,g,v,I,B,_,D,w=t[2]&&pe(t),f={ctx:t,current:null,token:null,hasCatch:!1,pending:He,then:Ue,catch:Me,value:13};Se(l=de(t[0].data.getGuide.guide),f),I=new Oe({props:{guide:t[0].data.getGuide},$$inline:!0}),_=new Ce({props:{author:t[0].data.getGuide.user},$$inline:!0});const N={c:function(){e=b("div"),i=b("div"),n=b("h1"),r=C(o),a=A(),s=b("div"),w&&w.c(),u=A(),c=b("div"),$=b("div"),d=b("section"),m=b("div"),f.block.c(),g=A(),v=b("div"),oe(I.$$.fragment),B=A(),oe(_.$$.fragment),this.h()},l:function(E){e=x(E,"DIV",{class:!0});var G=k(e);i=x(G,"DIV",{class:!0});var U=k(i);n=x(U,"H1",{class:!0});var H=k(n);r=V(H,o),H.forEach(p),a=T(U),s=x(U,"DIV",{});var Z=k(s);w&&w.l(Z),Z.forEach(p),U.forEach(p),u=T(G),c=x(G,"DIV",{class:!0});var J=k(c);$=x(J,"DIV",{class:!0});var K=k($);d=x(K,"SECTION",{});var Q=k(d);m=x(Q,"DIV",{class:!0});var ee=k(m);f.block.l(ee),ee.forEach(p),Q.forEach(p),K.forEach(p),g=T(J),v=x(J,"DIV",{class:!0});var W=k(v);ie(I.$$.fragment,W),B=T(W),ie(_.$$.fragment,W),W.forEach(p),J.forEach(p),G.forEach(p),this.h()},h:function(){S(n,"class","text-4xl font-bold"),y(n,R,74,6,2260),y(s,R,76,6,2331),S(i,"class","flex h-auto flex-wrap items-center justify-between"),y(i,R,73,4,2189),S(m,"class","markdown-content break-words"),y(m,R,90,10,2907),y(d,R,89,8,2887),S($,"class","card h-fit p-4"),y($,R,88,6,2850),S(v,"class","grid auto-rows-min grid-cols-1 gap-8"),y(v,R,98,6,3184),S(c,"class","grid-auto-max grid auto-cols-fr gap-4"),y(c,R,87,4,2792),S(e,"class","grid gap-6 xlx:grid-flow-row"),y(e,R,72,2,2142)},m:function(E,G){M(E,e,G),h(e,i),h(i,n),h(n,r),h(i,a),h(i,s),w&&w.m(s,null),h(e,u),h(e,c),h(c,$),h($,d),h(d,m),f.block.m(m,f.anchor=null),f.mount=()=>m,f.anchor=null,h(c,g),h(c,v),re(I,v,null),h(v,B),re(_,v,null),D=!0},p:function(E,G){t=E,(!D||G&1)&&o!==(o=t[0].data.getGuide.name+"")&&z(r,o),t[2]?w?w.p(t,G):(w=pe(t),w.c(),w.m(s,null)):w&&(w.d(1),w=null),f.ctx=t,G&1&&l!==(l=de(t[0].data.getGuide.guide))&&Se(l,f)||Je(f,t,G);const U={};G&1&&(U.guide=t[0].data.getGuide),I.$set(U);const H={};G&1&&(H.author=t[0].data.getGuide.user),_.$set(H)},i:function(E){D||(F(I.$$.fragment,E),F(_.$$.fragment,E),D=!0)},o:function(E){L(I.$$.fragment,E),L(_.$$.fragment,E),D=!1},d:function(E){E&&p(e),w&&w.d(),f.block.d(),f.token=null,f=null,se(I),se(_)}};return O("SvelteRegisterBlock",{block:N,id:Ne.name,type:"if",source:"(63:31) ",ctx:t}),N}function Ae(t){let e,i,n=t[0].error.message+"",o;const r={c:function(){e=b("p"),i=C("Oh no... "),o=C(n),this.h()},l:function(s){e=x(s,"P",{});var u=k(e);i=V(u,"Oh no... "),o=V(u,n),u.forEach(p),this.h()},h:function(){y(e,R,70,2,2069)},m:function(s,u){M(s,e,u),h(e,i),h(e,o)},p:function(s,u){u&1&&n!==(n=s[0].error.message+"")&&z(o,n)},i:P,o:P,d:function(s){s&&p(e)}};return O("SvelteRegisterBlock",{block:r,id:Ae.name,type:"if",source:"(61:23) ",ctx:t}),r}function Te(t){let e,i="Loading...";const n={c:function(){e=b("p"),e.textContent=i,this.h()},l:function(r){e=x(r,"P",{"data-svelte-h":!0}),le(e)!=="svelte-qdsr2u"&&(e.textContent=i),this.h()},h:function(){y(e,R,68,2,2025)},m:function(r,a){M(r,e,a)},p:P,i:P,o:P,d:function(r){r&&p(e)}};return O("SvelteRegisterBlock",{block:n,id:Te.name,type:"if",source:"(59:0) {#if $guide.fetching}",ctx:t}),n}function pe(t){let e,i,n="edit",o,r,a,s,u="delete",c,$,d;const m={c:function(){e=b("button"),i=b("span"),i.textContent=n,o=C(`
            Edit`),r=A(),a=b("button"),s=b("span"),s.textContent=u,c=C(`
            Delete`),this.h()},l:function(g){e=x(g,"BUTTON",{class:!0});var v=k(e);i=x(v,"SPAN",{class:!0,"data-svelte-h":!0}),le(i)!=="svelte-xwpm3e"&&(i.textContent=n),o=V(v,`
            Edit`),v.forEach(p),r=T(g),a=x(g,"BUTTON",{class:!0});var I=k(a);s=x(I,"SPAN",{class:!0,"data-svelte-h":!0}),le(s)!=="svelte-120hsax"&&(s.textContent=u),c=V(I,`
            Delete`),I.forEach(p),this.h()},h:function(){S(i,"class","material-icons pr-2"),y(i,R,79,12,2488),S(e,"class","variant-ghost-primary btn"),y(e,R,78,10,2373),S(s,"class","material-icons pr-2"),y(s,R,82,12,2674),S(a,"class","variant-ghost-primary btn"),y(a,R,81,10,2570)},m:function(g,v){M(g,e,v),h(e,i),h(e,o),M(g,r,v),M(g,a,v),h(a,s),h(a,c),$||(d=[Pe(e,"click",t[8],!1,!1,!1,!1),Pe(a,"click",t[9],!1,!1,!1,!1)],$=!0)},p:P,d:function(g){g&&(p(e),p(r),p(a)),$=!1,Ke(d)}};return O("SvelteRegisterBlock",{block:m,id:pe.name,type:"if",source:"(69:8) {#if canUserEdit}",ctx:t}),m}function Me(t){const e={c:P,l:P,m:P,p:P,d:P};return O("SvelteRegisterBlock",{block:e,id:Me.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:t}),e}function Ue(t){let e,i,n=t[13]+"";const o={c:function(){e=b("p"),i=new Qe(!1),this.h()},l:function(a){e=x(a,"P",{});var s=k(e);i=We(s,!1),s.forEach(p),this.h()},h:function(){i.a=null,y(e,R,93,14,3079)},m:function(a,s){M(a,e,s),i.m(n,e)},p:function(a,s){s&1&&n!==(n=a[13]+"")&&i.p(n)},d:function(a){a&&p(e)}};return O("SvelteRegisterBlock",{block:o,id:Ue.name,type:"then",source:"(83:76)                <!-- eslint-disable -->               <p>{@html guideRendered}",ctx:t}),o}function He(t){const e={c:P,l:P,m:P,p:P,d:P};return O("SvelteRegisterBlock",{block:e,id:He.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:t}),e}function me(t){let e,i,n,o,r,a,s=!t[0].fetching&&!t[0].error&&t[0].data.getGuide&&ge(t);const u=[Te,Ae,Ne,Ve],c=[];function $(m,l){return m[0].fetching?0:m[0].error?1:m[0].data.getGuide?2:3}n=$(t),o=c[n]=u[n](t);const d={c:function(){s&&s.c(),e=te(),i=A(),o.c(),r=te()},l:function(l){const g=ze("svelte-bhfvpi",document.head);s&&s.l(g),e=te(),g.forEach(p),i=T(l),o.l(l),r=te()},m:function(l,g){s&&s.m(document.head,null),h(document.head,e),M(l,i,g),c[n].m(l,g),M(l,r,g),a=!0},p:function(l,[g]){!l[0].fetching&&!l[0].error&&l[0].data.getGuide?s?(s.p(l,g),g&1&&F(s,1)):(s=ge(l),s.c(),F(s,1),s.m(e.parentNode,e)):s&&(De(),L(s,1,1,()=>{s=null}),Ie());let v=n;n=$(l),n===v?c[n].p(l,g):(De(),L(c[v],1,1,()=>{c[v]=null}),Ie(),o=c[n],o?o.p(l,g):(o=c[n]=u[n](l),o.c()),F(o,1),o.m(r.parentNode,r))},i:function(l){a||(F(s),F(o),a=!0)},o:function(l){L(s),L(o),a=!1},d:function(l){l&&(p(i),p(r)),s&&s.d(l),p(e),c[n].d(l)}};return O("SvelteRegisterBlock",{block:d,id:me.name,type:"component",source:"",ctx:t}),d}function ot(t,e,i){let n,o,r,a,s=P,u=()=>(s(),s=ye(o,f=>i(0,a=f)),o),c;xe(ce,"user"),Fe(t,ce,f=>i(7,c=f)),t.$$.on_destroy.push(()=>s());let{$$slots:$={},$$scope:d}=e;be("Page",$,[]);let{data:m}=e;const l=Ee(),g=ke(),v=()=>{l.mutation(_e,{guideId:n}).toPromise().then(f=>{f.error?(console.error(f.error.message),g.trigger({message:"Error deleting guide: "+f.error.message,background:"variant-filled-error",autohide:!1})):(g.trigger({message:"Guide deleted",background:"variant-filled-success",timeout:5e3}),ae(Y+"/guides"))})},I={type:"confirm",title:"Delete Guide?",body:"Are you sure you wish to delete this guide?",response:f=>{f&&v()}},B=Ge();t.$$.on_mount.push(function(){m===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&je.warn("<Page> was created without expected prop 'data'")});const _=["data"];Object.keys(e).forEach(f=>{!~_.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&je.warn(`<Page> was created with unknown prop '${f}'`)});const D=()=>ae(Y+"/guide/"+n+"/edit"),w=()=>B.trigger(I);return t.$$set=f=>{"data"in f&&i(6,m=f.data)},t.$capture_state=()=>({DeleteGuideDocument:_e,GuideInfo:Oe,GuideAuthor:Ce,user:ce,goto:ae,markdown:de,base:Y,MetaDescriptors:Re,getContextClient:Ee,getModalStore:Ge,getToastStore:ke,Page404:Be,data:m,client:l,toastStore:g,deleteGuideFn:v,deleteModal:I,modalStore:B,guideId:n,canUserEdit:r,guide:o,$guide:a,$user:c}),t.$inject_state=f=>{"data"in f&&i(6,m=f.data),"guideId"in f&&i(1,n=f.guideId),"canUserEdit"in f&&i(2,r=f.canUserEdit),"guide"in f&&u(i(3,o=f.guide))},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&64&&i(1,{guideId:n,guide:o}=m,n,u(i(3,o))),t.$$.dirty&129&&i(2,r=c?.roles?.deleteContent||c?.id===a?.data?.getGuide?.user?.id)},[a,n,r,o,I,B,m,c,D,w]}class ht extends $e{constructor(e){super(e),ve(this,e,ot,me,we,{data:6}),O("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:me.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ht as component,ft as universal};
//# sourceMappingURL=12.AojSjFPJ.js.map
