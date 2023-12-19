import{G as Fe,S as ve,i as we,s as be,d as R,v as xe,ab as ne,a1 as oe,e as w,W as M,b as V,g as b,h as G,X as H,j as p,k as N,N as I,m as x,n as A,Q as g,Y as z,u as D,x as Re,H as Y,a2 as ye,F as Ee,_ as ke,ar as Ge,$ as ce,a0 as Le,f as te,K as ze,r as F,t as L,q as Ie,J as re,L as ie,O as se,R as ae,a7 as De,p as Se,a8 as Je,M as ue,Z as _e,a6 as Ke,a9 as Qe,aa as We}from"../chunks/vendor.339d1c7d.js";import{n as Xe,B as Pe}from"../chunks/graphql.deb800f0.js";import{l as Ye}from"../chunks/gql.ff9241aa.js";import{p as de}from"../chunks/formatting.a9f13d93.js";import{u as le}from"../chunks/user.a647684e.js";import{m as fe}from"../chunks/markdown.f44df55f.js";import{M as Oe}from"../chunks/MetaDescriptors.d5a902ca.js";import{P as Be}from"../chunks/Page404.07ef7689.js";const Ze=!1,et=async({params:t,parent:e})=>({...t,...await Ye({guide:Fe({query:Xe,client:(await e()).client,variables:{guide:t.guideId}})})}),ft=Object.freeze(Object.defineProperty({__proto__:null,load:et,prerender:Ze},Symbol.toStringTag,{value:"Module"})),X="src/lib/components/guides/GuideInfo.svelte";function he(t){let e,i,o,n,r=t[2]("entry.info")+"",u,s,c,a,h=t[2]("entry.created-at")+"",l,$,d,m=de(t[0].created_at)+"",E,_;const B={c:function(){e=w("div"),i=w("section"),o=w("div"),n=w("h3"),u=M(r),s=V(),c=w("span"),a=w("strong"),l=M(h),$=M(":"),d=V(),E=M(m),_=w("br"),this.h()},l:function(f){e=b(f,"DIV",{class:!0});var v=G(e);i=b(v,"SECTION",{});var S=G(i);o=b(S,"DIV",{class:!0});var C=G(o);n=b(C,"H3",{class:!0});var j=G(n);u=H(j,r),j.forEach(p),s=N(C),c=b(C,"SPAN",{});var y=G(c);a=b(y,"STRONG",{});var k=G(a);l=H(k,h),$=H(k,":"),k.forEach(p),d=N(y),E=H(y,m),y.forEach(p),_=b(C,"BR",{}),C.forEach(p),S.forEach(p),v.forEach(p),this.h()},h:function(){I(n,"class","text-2xl my-4 font-bold"),x(n,X,13,6,250),x(a,X,14,12,322),x(c,X,14,6,316),x(_,X,14,92,402),I(o,"class","text-lg"),x(o,X,12,4,222),x(i,X,11,2,208),I(e,"class","card p-4"),x(e,X,10,0,183)},m:function(f,v){A(f,e,v),g(e,i),g(i,o),g(o,n),g(n,u),g(o,s),g(o,c),g(c,a),g(a,l),g(a,$),g(c,d),g(c,E),g(o,_)},p:function(f,[v]){v&4&&r!==(r=f[2]("entry.info")+"")&&z(u,r),v&4&&h!==(h=f[2]("entry.created-at")+"")&&z(l,h),v&1&&m!==(m=de(f[0].created_at)+"")&&z(E,m)},i:D,o:D,d:function(f){f&&p(e)}};return R("SvelteRegisterBlock",{block:B,id:he.name,type:"component",source:"",ctx:t}),B}function tt(t,e,i){let o,n=D,r=()=>(n(),n=Re(a,l=>i(2,o=l)),a);t.$$.on_destroy.push(()=>n());let{$$slots:u={},$$scope:s}=e;xe("GuideInfo",u,[]);let{guide:c}=e;const{t:a}=ne();oe(a,"t"),r(),t.$$.on_mount.push(function(){c===void 0&&!("guide"in e||t.$$.bound[t.$$.props.guide])&&console.warn("<GuideInfo> was created without expected prop 'guide'")});const h=["guide"];return Object.keys(e).forEach(l=>{!~h.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<GuideInfo> was created with unknown prop '${l}'`)}),t.$$set=l=>{"guide"in l&&i(0,c=l.guide)},t.$capture_state=()=>({prettyDate:de,getTranslate:ne,guide:c,t:a,$t:o}),t.$inject_state=l=>{"guide"in l&&i(0,c=l.guide)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,a,o]}class Ce extends ve{constructor(e){super(e),we(this,e,tt,he,be,{guide:0,t:1}),R("SvelteRegisterComponent",{component:this,tagName:"GuideInfo",options:e,id:he.name})}get guide(){throw new Error("<GuideInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set guide(e){throw new Error("<GuideInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<GuideInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const q="src/lib/components/guides/GuideAuthor.svelte";function ge(t){let e,i,o,n,r=t[2]("author")+"",u,s,c,a,h,l,$,d,m,E=t[0].username+"",_,B,P,f,v=t[2]("role.writer")+"",S;const C={c:function(){e=w("div"),i=w("section"),o=w("div"),n=w("h3"),u=M(r),s=V(),c=w("div"),a=w("div"),h=w("div"),$=V(),d=w("div"),m=w("a"),_=M(E),P=V(),f=w("div"),S=M(v),this.h()},l:function(y){e=b(y,"DIV",{class:!0});var k=G(e);i=b(k,"SECTION",{});var T=G(i);o=b(T,"DIV",{class:!0});var U=G(o);n=b(U,"H3",{class:!0});var Z=G(n);u=H(Z,r),Z.forEach(p),s=N(U),c=b(U,"DIV",{class:!0});var J=G(c);a=b(J,"DIV",{class:!0});var K=G(a);h=b(K,"DIV",{class:!0,style:!0}),G(h).forEach(p),$=N(K),d=b(K,"DIV",{class:!0});var Q=G(d);m=b(Q,"A",{href:!0,class:!0});var ee=G(m);_=H(ee,E),ee.forEach(p),P=N(Q),f=b(Q,"DIV",{});var W=G(f);S=H(W,v),W.forEach(p),Q.forEach(p),K.forEach(p),J.forEach(p),U.forEach(p),T.forEach(p),k.forEach(p),this.h()},h:function(){I(n,"class","text-2xl my-4 font-bold"),x(n,q,13,6,253),I(h,"class","rounded-full bg-cover w-14 h-14"),I(h,"style",l=`background-image: url("${t[0].avatar}")`),x(h,q,17,10,438),I(m,"href",B=Y+"/user/"+t[0].id+"/"),I(m,"class","text-yellow-500 underline"),x(m,q,19,12,593),x(f,q,20,12,696),I(d,"class","grid grid-flow-row"),x(d,q,18,10,548),I(a,"class","grid grid-flow-col auto-cols-min gap-x-4"),x(a,q,16,8,373),I(c,"class","grid auto-rows-min text-lg gap-y-4"),x(c,q,15,6,316),I(o,"class","grid grid-flow-row gap-y-2"),x(o,q,12,4,206),x(i,q,11,2,192),I(e,"class","card p-4"),x(e,q,10,0,167)},m:function(y,k){A(y,e,k),g(e,i),g(i,o),g(o,n),g(n,u),g(o,s),g(o,c),g(c,a),g(a,h),g(a,$),g(a,d),g(d,m),g(m,_),g(d,P),g(d,f),g(f,S)},p:function(y,[k]){k&4&&r!==(r=y[2]("author")+"")&&z(u,r),k&1&&l!==(l=`background-image: url("${y[0].avatar}")`)&&I(h,"style",l),k&1&&E!==(E=y[0].username+"")&&z(_,E),k&1&&B!==(B=Y+"/user/"+y[0].id+"/")&&I(m,"href",B),k&4&&v!==(v=y[2]("role.writer")+"")&&z(S,v)},i:D,o:D,d:function(y){y&&p(e)}};return R("SvelteRegisterBlock",{block:C,id:ge.name,type:"component",source:"",ctx:t}),C}function nt(t,e,i){let o,n=D,r=()=>(n(),n=Re(a,l=>i(2,o=l)),a);t.$$.on_destroy.push(()=>n());let{$$slots:u={},$$scope:s}=e;xe("GuideAuthor",u,[]);let{author:c}=e;const{t:a}=ne();oe(a,"t"),r(),t.$$.on_mount.push(function(){c===void 0&&!("author"in e||t.$$.bound[t.$$.props.author])&&console.warn("<GuideAuthor> was created without expected prop 'author'")});const h=["author"];return Object.keys(e).forEach(l=>{!~h.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<GuideAuthor> was created with unknown prop '${l}'`)}),t.$$set=l=>{"author"in l&&i(0,c=l.author)},t.$capture_state=()=>({base:Y,getTranslate:ne,author:c,t:a,$t:o}),t.$inject_state=l=>{"author"in l&&i(0,c=l.author)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,a,o]}class Ve extends ve{constructor(e){super(e),we(this,e,nt,ge,be,{author:0,t:1}),R("SvelteRegisterComponent",{component:this,tagName:"GuideAuthor",options:e,id:ge.name})}get author(){throw new Error("<GuideAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set author(e){throw new Error("<GuideAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<GuideAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:je}=Le,O="src/routes/guide/[guideId]/+page.svelte";function pe(t){let e,i;e=new Oe({props:{description:t[0].data.getGuide.short_description,title:t[0].data.getGuide.name},$$inline:!0});const o={c:function(){re(e.$$.fragment)},l:function(r){ie(e.$$.fragment,r)},m:function(r,u){se(e,r,u),i=!0},p:function(r,u){const s={};u&1&&(s.description=r[0].data.getGuide.short_description),u&1&&(s.title=r[0].data.getGuide.name),e.$set(s)},i:function(r){i||(F(e.$$.fragment,r),i=!0)},o:function(r){L(e.$$.fragment,r),i=!1},d:function(r){ae(e,r)}};return R("SvelteRegisterBlock",{block:o,id:pe.name,type:"if",source:"(54:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:t}),o}function Ne(t){let e,i;e=new Be({$$inline:!0});const o={c:function(){re(e.$$.fragment)},l:function(r){ie(e.$$.fragment,r)},m:function(r,u){se(e,r,u),i=!0},p:D,i:function(r){i||(F(e.$$.fragment,r),i=!0)},o:function(r){L(e.$$.fragment,r),i=!1},d:function(r){ae(e,r)}};return R("SvelteRegisterBlock",{block:o,id:Ne.name,type:"else",source:"(93:0) {:else}",ctx:t}),o}function Ae(t){let e,i,o,n=t[0].data.getGuide.name+"",r,u,s,c,a,h,l,$,d,m,E,_,B,P,f,v=t[1]&&me(t),S={ctx:t,current:null,token:null,hasCatch:!1,pending:He,then:Me,catch:qe,value:13};De(d=fe(t[0].data.getGuide.guide),S),_=new Ce({props:{guide:t[0].data.getGuide},$$inline:!0}),P=new Ve({props:{author:t[0].data.getGuide.user},$$inline:!0});const C={c:function(){e=w("div"),i=w("div"),o=w("h1"),r=M(n),u=V(),s=w("div"),v&&v.c(),c=V(),a=w("div"),h=w("div"),l=w("section"),$=w("div"),S.block.c(),m=V(),E=w("div"),re(_.$$.fragment),B=V(),re(P.$$.fragment),this.h()},l:function(y){e=b(y,"DIV",{class:!0});var k=G(e);i=b(k,"DIV",{class:!0});var T=G(i);o=b(T,"H1",{class:!0});var U=G(o);r=H(U,n),U.forEach(p),u=N(T),s=b(T,"DIV",{});var Z=G(s);v&&v.l(Z),Z.forEach(p),T.forEach(p),c=N(k),a=b(k,"DIV",{class:!0});var J=G(a);h=b(J,"DIV",{class:!0});var K=G(h);l=b(K,"SECTION",{});var Q=G(l);$=b(Q,"DIV",{class:!0});var ee=G($);S.block.l(ee),ee.forEach(p),Q.forEach(p),K.forEach(p),m=N(J),E=b(J,"DIV",{class:!0});var W=G(E);ie(_.$$.fragment,W),B=N(W),ie(P.$$.fragment,W),W.forEach(p),J.forEach(p),k.forEach(p),this.h()},h:function(){I(o,"class","text-4xl font-bold"),x(o,O,74,6,2261),x(s,O,76,6,2332),I(i,"class","flex flex-wrap h-auto justify-between items-center"),x(i,O,73,4,2190),I($,"class","markdown-content break-words"),x($,O,87,10,2777),x(l,O,86,8,2757),I(h,"class","card p-4 h-fit"),x(h,O,85,6,2720),I(E,"class","grid grid-cols-1 auto-rows-min gap-8"),x(E,O,95,6,3054),I(a,"class","grid grid-auto-max auto-cols-fr gap-4"),x(a,O,84,4,2662),I(e,"class","grid gap-6 xlx:grid-flow-row"),x(e,O,72,2,2143)},m:function(y,k){A(y,e,k),g(e,i),g(i,o),g(o,r),g(i,u),g(i,s),v&&v.m(s,null),g(e,c),g(e,a),g(a,h),g(h,l),g(l,$),S.block.m($,S.anchor=null),S.mount=()=>$,S.anchor=null,g(a,m),g(a,E),se(_,E,null),g(E,B),se(P,E,null),f=!0},p:function(y,k){t=y,(!f||k&1)&&n!==(n=t[0].data.getGuide.name+"")&&z(r,n),t[1]?v?v.p(t,k):(v=me(t),v.c(),v.m(s,null)):v&&(v.d(1),v=null),S.ctx=t,k&1&&d!==(d=fe(t[0].data.getGuide.guide))&&De(d,S)||Je(S,t,k);const T={};k&1&&(T.guide=t[0].data.getGuide),_.$set(T);const U={};k&1&&(U.author=t[0].data.getGuide.user),P.$set(U)},i:function(y){f||(F(_.$$.fragment,y),F(P.$$.fragment,y),f=!0)},o:function(y){L(_.$$.fragment,y),L(P.$$.fragment,y),f=!1},d:function(y){y&&p(e),v&&v.d(),S.block.d(),S.token=null,S=null,ae(_),ae(P)}};return R("SvelteRegisterBlock",{block:C,id:Ae.name,type:"if",source:"(63:31) ",ctx:t}),C}function Te(t){let e,i,o=t[0].error.message+"",n;const r={c:function(){e=w("p"),i=M("Oh no... "),n=M(o),this.h()},l:function(s){e=b(s,"P",{});var c=G(e);i=H(c,"Oh no... "),n=H(c,o),c.forEach(p),this.h()},h:function(){x(e,O,70,2,2070)},m:function(s,c){A(s,e,c),g(e,i),g(e,n)},p:function(s,c){c&1&&o!==(o=s[0].error.message+"")&&z(n,o)},i:D,o:D,d:function(s){s&&p(e)}};return R("SvelteRegisterBlock",{block:r,id:Te.name,type:"if",source:"(61:23) ",ctx:t}),r}function Ue(t){let e,i="Loading...";const o={c:function(){e=w("p"),e.textContent=i,this.h()},l:function(r){e=b(r,"P",{"data-svelte-h":!0}),ue(e)!=="svelte-qdsr2u"&&(e.textContent=i),this.h()},h:function(){x(e,O,68,2,2026)},m:function(r,u){A(r,e,u)},p:D,i:D,o:D,d:function(r){r&&p(e)}};return R("SvelteRegisterBlock",{block:o,id:Ue.name,type:"if",source:"(59:0) {#if $guide.fetching}",ctx:t}),o}function me(t){let e,i="Edit",o,n,r="Delete",u,s;const c={c:function(){e=w("button"),e.textContent=i,o=V(),n=w("button"),n.textContent=r,this.h()},l:function(h){e=b(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ue(e)!=="svelte-1oidlq5"&&(e.textContent=i),o=N(h),n=b(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ue(n)!=="svelte-tfawqf"&&(n.textContent=r),this.h()},h:function(){I(e,"class","btn variant-ghost-primary"),x(e,O,78,10,2374),I(n,"class","btn variant-ghost-primary"),x(n,O,80,10,2513)},m:function(h,l){A(h,e,l),A(h,o,l),A(h,n,l),u||(s=[_e(e,"click",t[8],!1,!1,!1,!1),_e(n,"click",t[9],!1,!1,!1,!1)],u=!0)},p:D,d:function(h){h&&(p(e),p(o),p(n)),u=!1,Ke(s)}};return R("SvelteRegisterBlock",{block:c,id:me.name,type:"if",source:"(69:8) {#if canUserEdit}",ctx:t}),c}function qe(t){const e={c:D,l:D,m:D,p:D,d:D};return R("SvelteRegisterBlock",{block:e,id:qe.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:t}),e}function Me(t){let e,i,o=t[13]+"";const n={c:function(){e=w("p"),i=new Qe(!1),this.h()},l:function(u){e=b(u,"P",{});var s=G(e);i=We(s,!1),s.forEach(p),this.h()},h:function(){i.a=null,x(e,O,90,14,2949)},m:function(u,s){A(u,e,s),i.m(o,e)},p:function(u,s){s&1&&o!==(o=u[13]+"")&&i.p(o)},d:function(u){u&&p(e)}};return R("SvelteRegisterBlock",{block:n,id:Me.name,type:"then",source:"(80:76)                <!-- eslint-disable -->               <p>{@html guideRendered}",ctx:t}),n}function He(t){const e={c:D,l:D,m:D,p:D,d:D};return R("SvelteRegisterBlock",{block:e,id:He.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { DeleteGuideDocument }',ctx:t}),e}function $e(t){let e,i,o,n,r,u,s=!t[0].fetching&&!t[0].error&&t[0].data.getGuide&&pe(t);const c=[Ue,Te,Ae,Ne],a=[];function h($,d){return $[0].fetching?0:$[0].error?1:$[0].data.getGuide?2:3}o=h(t),n=a[o]=c[o](t);const l={c:function(){s&&s.c(),e=te(),i=V(),n.c(),r=te()},l:function(d){const m=ze("svelte-bhfvpi",document.head);s&&s.l(m),e=te(),m.forEach(p),i=N(d),n.l(d),r=te()},m:function(d,m){s&&s.m(document.head,null),g(document.head,e),A(d,i,m),a[o].m(d,m),A(d,r,m),u=!0},p:function(d,[m]){!d[0].fetching&&!d[0].error&&d[0].data.getGuide?s?(s.p(d,m),m&1&&F(s,1)):(s=pe(d),s.c(),F(s,1),s.m(e.parentNode,e)):s&&(Se(),L(s,1,1,()=>{s=null}),Ie());let E=o;o=h(d),o===E?a[o].p(d,m):(Se(),L(a[E],1,1,()=>{a[E]=null}),Ie(),n=a[o],n?n.p(d,m):(n=a[o]=c[o](d),n.c()),F(n,1),n.m(r.parentNode,r))},i:function(d){u||(F(s),F(n),u=!0)},o:function(d){L(s),L(n),u=!1},d:function(d){d&&(p(i),p(r)),s&&s.d(d),p(e),a[o].d(d)}};return R("SvelteRegisterBlock",{block:l,id:$e.name,type:"component",source:"",ctx:t}),l}function ot(t,e,i){let o,n,r;oe(le,"user"),ye(t,le,f=>i(7,r=f));let{$$slots:u={},$$scope:s}=e;xe("Page",u,[]);let{data:c}=e;const{guideId:a,guide:h}=c;oe(h,"guide"),ye(t,h,f=>i(0,n=f));const l=Ee(),$=ke(),d=()=>{l.mutation(Pe,{guideId:a}).toPromise().then(f=>{f.error?(console.error(f.error.message),$.trigger({message:"Error deleting guide: "+f.error.message,background:"variant-filled-error",autohide:!1})):($.trigger({message:"Guide deleted",background:"variant-filled-success",timeout:5e3}),ce(Y+"/guides"))})},m={type:"confirm",title:"Delete Guide?",body:"Are you sure you wish to delete this guide?",response:f=>{f&&d()}},E=Ge();t.$$.on_mount.push(function(){c===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&je.warn("<Page> was created without expected prop 'data'")});const _=["data"];Object.keys(e).forEach(f=>{!~_.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&je.warn(`<Page> was created with unknown prop '${f}'`)});const B=()=>ce(Y+"/guide/"+a+"/edit"),P=()=>E.trigger(m);return t.$$set=f=>{"data"in f&&i(6,c=f.data)},t.$capture_state=()=>({DeleteGuideDocument:Pe,GuideInfo:Ce,GuideAuthor:Ve,user:le,goto:ce,markdown:fe,base:Y,MetaDescriptors:Oe,getContextClient:Ee,getModalStore:Ge,getToastStore:ke,Page404:Be,data:c,guideId:a,guide:h,client:l,toastStore:$,deleteGuideFn:d,deleteModal:m,modalStore:E,canUserEdit:o,$guide:n,$user:r}),t.$inject_state=f=>{"data"in f&&i(6,c=f.data),"canUserEdit"in f&&i(1,o=f.canUserEdit)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&129&&i(1,o=r?.roles?.deleteContent||r?.id===n?.data?.getGuide?.user?.id)},[n,o,a,h,m,E,c,r,B,P]}class ht extends ve{constructor(e){super(e),we(this,e,ot,$e,be,{data:6}),R("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:$e.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ht as component,ft as universal};
//# sourceMappingURL=11.3656b7b0.js.map
