import{G as Ze,S as Ue,i as be,s as xe,d as x,v as ke,ak as Pe,a1 as le,e as v,b as D,W as V,g as w,h as I,M as ye,k as T,X as N,j as g,N as E,m as U,n as P,Q as p,Y as ae,u as C,x as Fe,ac as Be,as as je,a2 as _e,H as De,f as oe,K as et,r as k,t as R,q as ee,J as X,L as Y,O as Z,R as F,p as te,Z as tt,U as ie,V as Te}from"../chunks/vendor.222e00a9.js";import{H as nt}from"../chunks/graphql.80ff4abf.js";import{l as st}from"../chunks/gql.ff9241aa.js";import{p as ue}from"../chunks/formatting.c598e8b5.js";import{M as Ve}from"../chunks/ModCard.5aabd031.js";import{G as Ne}from"../chunks/GuideCard.cd643f70.js";import{M as Me}from"../chunks/MetaDescriptors.62637ae5.js";import{u as ce}from"../chunks/user.f98c1746.js";import{P as Ge}from"../chunks/Page404.d2075540.js";const rt=!1,ot=async({params:r,parent:e})=>({...r,...await st({user:Ze({query:nt,client:(await e()).client,variables:{user:r.userId}})})}),vt=Object.freeze(Object.defineProperty({__proto__:null,load:ot,prerender:rt},Symbol.toStringTag,{value:"Module"})),J="src/lib/components/users/UserInfo.svelte";function fe(r){let e,o,a,n,t="Info",u,s,d,c=r[2]("entry.created-at")+"",f,l,i,m=ue(r[0].created_at)+"",$,y;const A={c:function(){e=v("div"),o=v("section"),a=v("div"),n=v("h3"),n.textContent=t,u=D(),s=v("span"),d=v("strong"),f=V(c),l=V(":"),i=D(),$=V(m),y=v("br"),this.h()},l:function(S){e=w(S,"DIV",{class:!0});var B=I(e);o=w(B,"SECTION",{});var K=I(o);a=w(K,"DIV",{class:!0});var H=I(a);n=w(H,"H3",{class:!0,"data-svelte-h":!0}),ye(n)!=="svelte-1cfi42f"&&(n.textContent=t),u=T(H),s=w(H,"SPAN",{});var b=I(s);d=w(b,"STRONG",{});var Q=I(d);f=N(Q,c),l=N(Q,":"),Q.forEach(g),i=T(b),$=N(b,m),b.forEach(g),y=w(H,"BR",{}),H.forEach(g),K.forEach(g),B.forEach(g),this.h()},h:function(){E(n,"class","text-2xl my-4 font-bold"),U(n,J,13,6,249),U(d,J,14,12,307),U(s,J,14,6,301),U(y,J,14,91,386),E(a,"class","text-lg"),U(a,J,12,4,221),U(o,J,11,2,207),E(e,"class","card p-4"),U(e,J,10,0,182)},m:function(S,B){P(S,e,B),p(e,o),p(o,a),p(a,n),p(a,u),p(a,s),p(s,d),p(d,f),p(d,l),p(s,i),p(s,$),p(a,y)},p:function(S,[B]){B&4&&c!==(c=S[2]("entry.created-at")+"")&&ae(f,c),B&1&&m!==(m=ue(S[0].created_at)+"")&&ae($,m)},i:C,o:C,d:function(S){S&&g(e)}};return x("SvelteRegisterBlock",{block:A,id:fe.name,type:"component",source:"",ctx:r}),A}function at(r,e,o){let a,n=C,t=()=>(n(),n=Fe(c,l=>o(2,a=l)),c);r.$$.on_destroy.push(()=>n());let{$$slots:u={},$$scope:s}=e;ke("UserInfo",u,[]);let{user:d}=e;const{t:c}=Pe();le(c,"t"),t(),r.$$.on_mount.push(function(){d===void 0&&!("user"in e||r.$$.bound[r.$$.props.user])&&console.warn("<UserInfo> was created without expected prop 'user'")});const f=["user"];return Object.keys(e).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<UserInfo> was created with unknown prop '${l}'`)}),r.$$set=l=>{"user"in l&&o(0,d=l.user)},r.$capture_state=()=>({prettyDate:ue,getTranslate:Pe,user:d,t:c,$t:a}),r.$inject_state=l=>{"user"in l&&o(0,d=l.user)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[d,c,a]}class He extends Ue{constructor(e){super(e),be(this,e,at,fe,xe,{user:0,t:1}),x("SvelteRegisterComponent",{component:this,tagName:"UserInfo",options:e,id:fe.name})}get user(){throw new Error("<UserInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set user(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Ae="src/lib/components/users/UserAvatar.svelte";function de(r){let e,o,a,n;const t={c:function(){e=v("div"),o=v("img"),this.h()},l:function(s){e=w(s,"DIV",{});var d=I(e);o=w(d,"IMG",{class:!0,src:!0,alt:!0}),d.forEach(g),this.h()},h:function(){E(o,"class","rounded-lg sm:max-w-lg max-w-full w-full"),je(o.src,a=r[1])||E(o,"src",a),E(o,"alt",n="Avatar for "+r[0]),U(o,Ae,10,2,174),U(e,Ae,9,0,166)},m:function(s,d){P(s,e,d),p(e,o)},p:function(s,[d]){d&2&&!je(o.src,a=s[1])&&E(o,"src",a),d&1&&n!==(n="Avatar for "+s[0])&&E(o,"alt",n)},i:C,o:C,d:function(s){s&&g(e)}};return x("SvelteRegisterBlock",{block:t,id:de.name,type:"component",source:"",ctx:r}),t}function it(r,e,o){let a,{$$slots:n={},$$scope:t}=e;ke("UserAvatar",n,[]);let{avatar:u}=e,{username:s}=e;r.$$.on_mount.push(function(){u===void 0&&!("avatar"in e||r.$$.bound[r.$$.props.avatar])&&console.warn("<UserAvatar> was created without expected prop 'avatar'"),s===void 0&&!("username"in e||r.$$.bound[r.$$.props.username])&&console.warn("<UserAvatar> was created without expected prop 'username'")});const d=["avatar","username"];return Object.keys(e).forEach(c=>{!~d.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<UserAvatar> was created with unknown prop '${c}'`)}),r.$$set=c=>{"avatar"in c&&o(2,u=c.avatar),"username"in c&&o(0,s=c.username)},r.$capture_state=()=>({assets:Be,avatar:u,username:s,userAvatar:a}),r.$inject_state=c=>{"avatar"in c&&o(2,u=c.avatar),"username"in c&&o(0,s=c.username),"userAvatar"in c&&o(1,a=c.userAvatar)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),r.$$.update=()=>{r.$$.dirty&4&&o(1,a=u||Be+"/images/no_image.webp")},[s,a,u]}class qe extends Ue{constructor(e){super(e),be(this,e,it,de,xe,{avatar:2,username:0}),x("SvelteRegisterComponent",{component:this,tagName:"UserAvatar",options:e,id:de.name})}get avatar(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set avatar(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get username(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set username(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const _="src/routes/user/[userId]/+page.svelte";function Oe(r,e,o){const a=r.slice();return a[9]=e[o],a}function Ce(r,e,o){const a=r.slice();return a[6]=e[o],a}function me(r){let e,o;e=new Me({props:{description:r[1].data.getUser.username+" profile",title:r[1].data.getUser.username+" profile"},$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Y(e.$$.fragment,t)},m:function(t,u){Z(e,t,u),o=!0},p:function(t,u){const s={};u&2&&(s.description=t[1].data.getUser.username+" profile"),u&2&&(s.title=t[1].data.getUser.username+" profile"),e.$set(s)},i:function(t){o||(k(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){F(e,t)}};return x("SvelteRegisterBlock",{block:a,id:me.name,type:"if",source:"(15:2) {#if !$user.fetching && !$user.error && $user.data.getUser}",ctx:r}),a}function Le(r){let e,o;e=new Ge({$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Y(e.$$.fragment,t)},m:function(t,u){Z(e,t,u),o=!0},p:C,i:function(t){o||(k(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){F(e,t)}};return x("SvelteRegisterBlock",{block:a,id:Le.name,type:"else",source:"(75:0) {:else}",ctx:r}),a}function ze(r){let e,o,a,n=r[1].data.getUser.username+"",t,u,s,d,c,f,l,i,m,$,y,A,M,S,B,K,H,b=r[2]&&r[1].data.getUser.id===r[2].id&&ge(r);function Q(O,h){return O[0]?Qe:We}let ne=Q(r),G=ne(r);const Ee=[Ye,Xe],q=[];function Se(O,h){return O[0]?1:0}i=Se(r),m=q[i]=Ee[i](r),A=new qe({props:{avatar:r[1].data.getUser.avatar,username:r[1].data.getUser.username},$$inline:!0}),S=new He({props:{user:r[1].data.getUser},$$inline:!0});const Ie={c:function(){e=v("div"),o=v("div"),a=v("h1"),t=V(n),u=D(),s=v("div"),b&&b.c(),d=D(),c=v("button"),G.c(),f=D(),l=v("div"),m.c(),$=D(),y=v("div"),X(A.$$.fragment),M=D(),X(S.$$.fragment),this.h()},l:function(h){e=w(h,"DIV",{class:!0});var j=I(e);o=w(j,"DIV",{class:!0});var L=I(o);a=w(L,"H1",{class:!0});var W=I(a);t=N(W,n),W.forEach(g),u=T(L),s=w(L,"DIV",{});var z=I(s);b&&b.l(z),d=T(z),c=w(z,"BUTTON",{class:!0});var Re=I(c);G.l(Re),Re.forEach(g),z.forEach(g),L.forEach(g),f=T(j),l=w(j,"DIV",{class:!0});var se=I(l);m.l(se),$=T(se),y=w(se,"DIV",{class:!0});var re=I(y);Y(A.$$.fragment,re),M=T(re),Y(S.$$.fragment,re),re.forEach(g),se.forEach(g),j.forEach(g),this.h()},h:function(){E(a,"class","text-4xl font-bold"),U(a,_,33,6,1052),E(c,"class","btn variant-ghost-primary"),U(c,_,40,8,1291),U(s,_,35,6,1125),E(o,"class","flex flex-wrap h-auto justify-between items-center"),U(o,_,32,4,981),E(y,"class","grid grid-cols-1 auto-rows-min gap-8"),U(y,_,73,6,2337),E(l,"class","grid grid-auto-max auto-cols-fr gap-4"),U(l,_,49,4,1519),E(e,"class","grid gap-6 xlx:grid-flow-row"),U(e,_,31,2,934)},m:function(h,j){P(h,e,j),p(e,o),p(o,a),p(a,t),p(o,u),p(o,s),b&&b.m(s,null),p(s,d),p(s,c),G.m(c,null),p(e,f),p(e,l),q[i].m(l,null),p(l,$),p(l,y),Z(A,y,null),p(y,M),Z(S,y,null),B=!0,K||(H=tt(c,"click",r[5],!1,!1,!1,!1),K=!0)},p:function(h,j){(!B||j&2)&&n!==(n=h[1].data.getUser.username+"")&&ae(t,n),h[2]&&h[1].data.getUser.id===h[2].id?b||(b=ge(h),b.c(),b.m(s,d)):b&&(b.d(1),b=null),ne!==(ne=Q(h))&&(G.d(1),G=ne(h),G&&(G.c(),G.m(c,null)));let L=i;i=Se(h),i===L?q[i].p(h,j):(te(),R(q[L],1,1,()=>{q[L]=null}),ee(),m=q[i],m?m.p(h,j):(m=q[i]=Ee[i](h),m.c()),k(m,1),m.m(l,$));const W={};j&2&&(W.avatar=h[1].data.getUser.avatar),j&2&&(W.username=h[1].data.getUser.username),A.$set(W);const z={};j&2&&(z.user=h[1].data.getUser),S.$set(z)},i:function(h){B||(k(m),k(A.$$.fragment,h),k(S.$$.fragment,h),B=!0)},o:function(h){R(m),R(A.$$.fragment,h),R(S.$$.fragment,h),B=!1},d:function(h){h&&g(e),b&&b.d(),G.d(),q[i].d(),F(A),F(S),K=!1,H()}};return x("SvelteRegisterBlock",{block:Ie,id:ze.name,type:"if",source:"(26:29) ",ctx:r}),Ie}function Je(r){let e,o,a=r[1].error.message+"",n;const t={c:function(){e=v("p"),o=V("Oh no... "),n=V(a),this.h()},l:function(s){e=w(s,"P",{});var d=I(e);o=N(d,"Oh no... "),n=N(d,a),d.forEach(g),this.h()},h:function(){U(e,_,29,2,864)},m:function(s,d){P(s,e,d),p(e,o),p(e,n)},p:function(s,d){d&2&&a!==(a=s[1].error.message+"")&&ae(n,a)},i:C,o:C,d:function(s){s&&g(e)}};return x("SvelteRegisterBlock",{block:t,id:Je.name,type:"if",source:"(24:22) ",ctx:r}),t}function Ke(r){let e,o="Loading...";const a={c:function(){e=v("p"),e.textContent=o,this.h()},l:function(t){e=w(t,"P",{"data-svelte-h":!0}),ye(e)!=="svelte-qdsr2u"&&(e.textContent=o),this.h()},h:function(){U(e,_,27,2,821)},m:function(t,u){P(t,e,u)},p:C,i:C,o:C,d:function(t){t&&g(e)}};return x("SvelteRegisterBlock",{block:a,id:Ke.name,type:"if",source:"(22:0) {#if $user.fetching}",ctx:r}),a}function ge(r){let e,o="Settings";const a={c:function(){e=v("a"),e.textContent=o,this.h()},l:function(t){e=w(t,"A",{class:!0,href:!0,"data-svelte-h":!0}),ye(e)!=="svelte-u7afob"&&(e.textContent=o),this.h()},h:function(){E(e,"class","btn variant-ghost-primary"),E(e,"href",De+"/settings"),U(e,_,37,10,1195)},m:function(t,u){P(t,e,u)},d:function(t){t&&g(e)}};return x("SvelteRegisterBlock",{block:a,id:ge.name,type:"if",source:"(32:8) {#if $me && $user.data.getUser.id === $me.id}",ctx:r}),a}function Qe(r){let e;const o={c:function(){e=V("Mods")},l:function(n){e=N(n,"Mods")},m:function(n,t){P(n,e,t)},d:function(n){n&&g(e)}};return x("SvelteRegisterBlock",{block:o,id:Qe.name,type:"else",source:"(39:10) {:else}",ctx:r}),o}function We(r){let e;const o={c:function(){e=V("Guides")},l:function(n){e=N(n,"Guides")},m:function(n,t){P(n,e,t)},d:function(n){n&&g(e)}};return x("SvelteRegisterBlock",{block:o,id:We.name,type:"if",source:"(37:10) {#if !guidesTab}",ctx:r}),o}function Xe(r){let e,o,a,n=ie(r[1].data.getUser.guides),t=[];for(let c=0;c<n.length;c+=1)t[c]=pe(Oe(r,n,c));const u=c=>R(t[c],1,1,()=>{t[c]=null});let s=r[1].data.getUser.guides.length===0&&he(r);const d={c:function(){e=v("div");for(let f=0;f<t.length;f+=1)t[f].c();o=D(),s&&s.c(),this.h()},l:function(f){e=w(f,"DIV",{class:!0});var l=I(e);for(let i=0;i<t.length;i+=1)t[i].l(l);o=T(l),s&&s.l(l),l.forEach(g),this.h()},h:function(){E(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),U(e,_,62,8,1953)},m:function(f,l){P(f,e,l);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);p(e,o),s&&s.m(e,null),a=!0},p:function(f,l){if(l&2){n=ie(f[1].data.getUser.guides);let i;for(i=0;i<n.length;i+=1){const m=Oe(f,n,i);t[i]?(t[i].p(m,l),k(t[i],1)):(t[i]=pe(m),t[i].c(),k(t[i],1),t[i].m(e,o))}for(te(),i=n.length;i<t.length;i+=1)u(i);ee()}f[1].data.getUser.guides.length===0?s||(s=he(f),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:function(f){if(!a){for(let l=0;l<n.length;l+=1)k(t[l]);a=!0}},o:function(f){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)R(t[l]);a=!1},d:function(f){f&&g(e),Te(t,f),s&&s.d()}};return x("SvelteRegisterBlock",{block:d,id:Xe.name,type:"else",source:"(57:6) {:else}",ctx:r}),d}function Ye(r){let e,o,a,n=ie(r[1].data.getUser.mods),t=[];for(let c=0;c<n.length;c+=1)t[c]=$e(Ce(r,n,c));const u=c=>R(t[c],1,1,()=>{t[c]=null});let s=r[1].data.getUser.mods.length===0&&ve(r);const d={c:function(){e=v("div");for(let f=0;f<t.length;f+=1)t[f].c();o=D(),s&&s.c(),this.h()},l:function(f){e=w(f,"DIV",{class:!0});var l=I(e);for(let i=0;i<t.length;i+=1)t[i].l(l);o=T(l),s&&s.l(l),l.forEach(g),this.h()},h:function(){E(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),U(e,_,51,8,1602)},m:function(f,l){P(f,e,l);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);p(e,o),s&&s.m(e,null),a=!0},p:function(f,l){if(l&2){n=ie(f[1].data.getUser.mods);let i;for(i=0;i<n.length;i+=1){const m=Ce(f,n,i);t[i]?(t[i].p(m,l),k(t[i],1)):(t[i]=$e(m),t[i].c(),k(t[i],1),t[i].m(e,o))}for(te(),i=n.length;i<t.length;i+=1)u(i);ee()}f[1].data.getUser.mods.length===0?s||(s=ve(f),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:function(f){if(!a){for(let l=0;l<n.length;l+=1)k(t[l]);a=!0}},o:function(f){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)R(t[l]);a=!1},d:function(f){f&&g(e),Te(t,f),s&&s.d()}};return x("SvelteRegisterBlock",{block:d,id:Ye.name,type:"if",source:"(46:6) {#if !guidesTab}",ctx:r}),d}function pe(r){let e,o;e=new Ne({props:{guide:r[9],logo:r[1].data.getUser.avatar},$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Y(e.$$.fragment,t)},m:function(t,u){Z(e,t,u),o=!0},p:function(t,u){const s={};u&2&&(s.guide=t[9]),u&2&&(s.logo=t[1].data.getUser.avatar),e.$set(s)},i:function(t){o||(k(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){F(e,t)}};return x("SvelteRegisterBlock",{block:a,id:pe.name,type:"each",source:"(59:10) {#each $user.data.getUser.guides as guide}",ctx:r}),a}function he(r){let e;const o={c:function(){e=V("User has no guides")},l:function(n){e=N(n,"User has no guides")},m:function(n,t){P(n,e,t)},d:function(n){n&&g(e)}};return x("SvelteRegisterBlock",{block:o,id:he.name,type:"if",source:"(63:10) {#if $user.data.getUser.guides.length === 0}",ctx:r}),o}function $e(r){let e,o;e=new Ve({props:{mod:r[6].mod},$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Y(e.$$.fragment,t)},m:function(t,u){Z(e,t,u),o=!0},p:function(t,u){const s={};u&2&&(s.mod=t[6].mod),e.$set(s)},i:function(t){o||(k(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){F(e,t)}};return x("SvelteRegisterBlock",{block:a,id:$e.name,type:"each",source:"(48:10) {#each $user.data.getUser.mods as mod}",ctx:r}),a}function ve(r){let e;const o={c:function(){e=V("User has no mods")},l:function(n){e=N(n,"User has no mods")},m:function(n,t){P(n,e,t)},d:function(n){n&&g(e)}};return x("SvelteRegisterBlock",{block:o,id:ve.name,type:"if",source:"(52:10) {#if $user.data.getUser.mods.length === 0}",ctx:r}),o}function we(r){let e,o,a,n,t,u,s=!r[1].fetching&&!r[1].error&&r[1].data.getUser&&me(r);const d=[Ke,Je,ze,Le],c=[];function f(i,m){return i[1].fetching?0:i[1].error?1:i[1].data.getUser?2:3}a=f(r),n=c[a]=d[a](r);const l={c:function(){s&&s.c(),e=oe(),o=D(),n.c(),t=oe()},l:function(m){const $=et("svelte-sx4i20",document.head);s&&s.l($),e=oe(),$.forEach(g),o=T(m),n.l(m),t=oe()},m:function(m,$){s&&s.m(document.head,null),p(document.head,e),P(m,o,$),c[a].m(m,$),P(m,t,$),u=!0},p:function(m,[$]){!m[1].fetching&&!m[1].error&&m[1].data.getUser?s?(s.p(m,$),$&2&&k(s,1)):(s=me(m),s.c(),k(s,1),s.m(e.parentNode,e)):s&&(te(),R(s,1,1,()=>{s=null}),ee());let y=a;a=f(m),a===y?c[a].p(m,$):(te(),R(c[y],1,1,()=>{c[y]=null}),ee(),n=c[a],n?n.p(m,$):(n=c[a]=d[a](m),n.c()),k(n,1),n.m(t.parentNode,t))},i:function(m){u||(k(s),k(n),u=!0)},o:function(m){R(s),R(n),u=!1},d:function(m){m&&(g(o),g(t)),s&&s.d(m),g(e),c[a].d(m)}};return x("SvelteRegisterBlock",{block:l,id:we.name,type:"component",source:"",ctx:r}),l}function ct(r,e,o){let a,n;le(ce,"me"),_e(r,ce,i=>o(2,n=i));let{$$slots:t={},$$scope:u}=e;ke("Page",t,[]);let{data:s}=e;const{user:d}=s;le(d,"user"),_e(r,d,i=>o(1,a=i));let c=!1;r.$$.on_mount.push(function(){s===void 0&&!("data"in e||r.$$.bound[r.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const f=["data"];Object.keys(e).forEach(i=>{!~f.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Page> was created with unknown prop '${i}'`)});const l=()=>o(0,c=!c);return r.$$set=i=>{"data"in i&&o(4,s=i.data)},r.$capture_state=()=>({UserInfo:He,UserAvatar:qe,ModCard:Ve,GuideCard:Ne,MetaDescriptors:Me,me:ce,base:De,Page404:Ge,data:s,user:d,guidesTab:c,$user:a,$me:n}),r.$inject_state=i=>{"data"in i&&o(4,s=i.data),"guidesTab"in i&&o(0,c=i.guidesTab)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[c,a,n,d,s,l]}class wt extends Ue{constructor(e){super(e),be(this,e,ct,we,xe,{data:4}),x("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:we.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{wt as component,vt as universal};
//# sourceMappingURL=29.d08483d2.js.map
