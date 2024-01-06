import{G as Fe,S as we,i as Ue,s as be,d as x,v as xe,ab as Re,a1 as Oe,e as v,b as D,W as N,g as w,h as I,M as ye,k as V,X as T,j as p,N as E,m as U,n as B,Q as $,Y as ae,u as A,x as Ce,ai as Be,aq as Pe,a2 as Ye,H as De,f as oe,K as et,r as y,t as R,q as ee,J as X,L as Z,O as F,R as Y,p as te,Z as tt,U as ie,V as Ve}from"../chunks/vendor.NxVab9sX.js";import{I as nt}from"../chunks/graphql.NT0BIh3j.js";import{l as st}from"../chunks/gql.WZvlfNZ8.js";import{p as le}from"../chunks/formatting.GdW8kOxI.js";import{M as Ne}from"../chunks/ModCard.Reou1Kyq.js";import{G as Te}from"../chunks/GuideCard.0hDww-ss.js";import{M as Me}from"../chunks/MetaDescriptors.Shi-Pmo6.js";import{u as ce}from"../chunks/user.w2TKUtV2.js";import{P as Ge}from"../chunks/Page404.-2R6XRAW.js";const rt=!1,ot=async({params:s,parent:e})=>({...s,...await st({user:Fe({query:nt,client:(await e()).client,variables:{user:s.userId}})})}),vt=Object.freeze(Object.defineProperty({__proto__:null,load:ot,prerender:rt},Symbol.toStringTag,{value:"Module"})),J="src/lib/components/users/UserInfo.svelte";function ue(s){let e,o,a,n,t="Info",u,r,m,i=s[2]("entry.created-at")+"",f,l,c,d=le(s[0].created_at)+"",g,k;const O={c:function(){e=v("div"),o=v("section"),a=v("div"),n=v("h3"),n.textContent=t,u=D(),r=v("span"),m=v("strong"),f=N(i),l=N(":"),c=D(),g=N(d),k=v("br"),this.h()},l:function(S){e=w(S,"DIV",{class:!0});var P=I(e);o=w(P,"SECTION",{});var K=I(o);a=w(K,"DIV",{class:!0});var q=I(a);n=w(q,"H3",{class:!0,"data-svelte-h":!0}),ye(n)!=="svelte-1p1x4o5"&&(n.textContent=t),u=V(q),r=w(q,"SPAN",{});var b=I(r);m=w(b,"STRONG",{});var Q=I(m);f=T(Q,i),l=T(Q,":"),Q.forEach(p),c=V(b),g=T(b,d),b.forEach(p),k=w(q,"BR",{}),q.forEach(p),K.forEach(p),P.forEach(p),this.h()},h:function(){E(n,"class","my-4 text-2xl font-bold"),U(n,J,13,6,249),U(m,J,14,12,307),U(r,J,14,6,301),U(k,J,14,91,386),E(a,"class","text-lg"),U(a,J,12,4,221),U(o,J,11,2,207),E(e,"class","card p-4"),U(e,J,10,0,182)},m:function(S,P){B(S,e,P),$(e,o),$(o,a),$(a,n),$(a,u),$(a,r),$(r,m),$(m,f),$(m,l),$(r,c),$(r,g),$(a,k)},p:function(S,[P]){P&4&&i!==(i=S[2]("entry.created-at")+"")&&ae(f,i),P&1&&d!==(d=le(S[0].created_at)+"")&&ae(g,d)},i:A,o:A,d:function(S){S&&p(e)}};return x("SvelteRegisterBlock",{block:O,id:ue.name,type:"component",source:"",ctx:s}),O}function at(s,e,o){let a,n=A,t=()=>(n(),n=Ce(i,l=>o(2,a=l)),i);s.$$.on_destroy.push(()=>n());let{$$slots:u={},$$scope:r}=e;xe("UserInfo",u,[]);let{user:m}=e;const{t:i}=Re();Oe(i,"t"),t(),s.$$.on_mount.push(function(){m===void 0&&!("user"in e||s.$$.bound[s.$$.props.user])&&console.warn("<UserInfo> was created without expected prop 'user'")});const f=["user"];return Object.keys(e).forEach(l=>{!~f.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<UserInfo> was created with unknown prop '${l}'`)}),s.$$set=l=>{"user"in l&&o(0,m=l.user)},s.$capture_state=()=>({prettyDate:le,getTranslate:Re,user:m,t:i,$t:a}),s.$inject_state=l=>{"user"in l&&o(0,m=l.user)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),[m,i,a]}class qe extends we{constructor(e){super(e),Ue(this,e,at,ue,be,{user:0,t:1}),x("SvelteRegisterComponent",{component:this,tagName:"UserInfo",options:e,id:ue.name})}get user(){throw new Error("<UserInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set user(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const _e="src/lib/components/users/UserAvatar.svelte";function fe(s){let e,o,a,n;const t={c:function(){e=v("div"),o=v("img"),this.h()},l:function(r){e=w(r,"DIV",{});var m=I(e);o=w(m,"IMG",{class:!0,src:!0,alt:!0}),m.forEach(p),this.h()},h:function(){E(o,"class","w-full max-w-full rounded-lg sm:max-w-lg"),Pe(o.src,a=s[1])||E(o,"src",a),E(o,"alt",n="Avatar for "+s[0]),U(o,_e,10,2,174),U(e,_e,9,0,166)},m:function(r,m){B(r,e,m),$(e,o)},p:function(r,[m]){m&2&&!Pe(o.src,a=r[1])&&E(o,"src",a),m&1&&n!==(n="Avatar for "+r[0])&&E(o,"alt",n)},i:A,o:A,d:function(r){r&&p(e)}};return x("SvelteRegisterBlock",{block:t,id:fe.name,type:"component",source:"",ctx:s}),t}function it(s,e,o){let a,{$$slots:n={},$$scope:t}=e;xe("UserAvatar",n,[]);let{avatar:u}=e,{username:r}=e;s.$$.on_mount.push(function(){u===void 0&&!("avatar"in e||s.$$.bound[s.$$.props.avatar])&&console.warn("<UserAvatar> was created without expected prop 'avatar'"),r===void 0&&!("username"in e||s.$$.bound[s.$$.props.username])&&console.warn("<UserAvatar> was created without expected prop 'username'")});const m=["avatar","username"];return Object.keys(e).forEach(i=>{!~m.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<UserAvatar> was created with unknown prop '${i}'`)}),s.$$set=i=>{"avatar"in i&&o(2,u=i.avatar),"username"in i&&o(0,r=i.username)},s.$capture_state=()=>({assets:Be,avatar:u,username:r,userAvatar:a}),s.$inject_state=i=>{"avatar"in i&&o(2,u=i.avatar),"username"in i&&o(0,r=i.username),"userAvatar"in i&&o(1,a=i.userAvatar)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&4&&o(1,a=u||Be+"/images/no_image.webp")},[r,a,u]}class He extends we{constructor(e){super(e),Ue(this,e,it,fe,be,{avatar:2,username:0}),x("SvelteRegisterComponent",{component:this,tagName:"UserAvatar",options:e,id:fe.name})}get avatar(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set avatar(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get username(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set username(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const j="src/routes/user/[userId]/+page.svelte";function je(s,e,o){const a=s.slice();return a[9]=e[o],a}function Ae(s,e,o){const a=s.slice();return a[6]=e[o],a}function de(s){let e,o;e=new Me({props:{description:s[2].data.getUser.username+" profile",title:s[2].data.getUser.username+" profile"},$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,u){F(e,t,u),o=!0},p:function(t,u){const r={};u&4&&(r.description=t[2].data.getUser.username+" profile"),u&4&&(r.title=t[2].data.getUser.username+" profile"),e.$set(r)},i:function(t){o||(y(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){Y(e,t)}};return x("SvelteRegisterBlock",{block:a,id:de.name,type:"if",source:"(15:2) {#if !$user.fetching && !$user.error && $user.data.getUser}",ctx:s}),a}function Le(s){let e,o;e=new Ge({$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,u){F(e,t,u),o=!0},p:A,i:function(t){o||(y(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){Y(e,t)}};return x("SvelteRegisterBlock",{block:a,id:Le.name,type:"else",source:"(75:0) {:else}",ctx:s}),a}function ze(s){let e,o,a,n=s[2].data.getUser.username+"",t,u,r,m,i,f,l,c,d,g,k,O,M,S,P,K,q,b=s[3]&&s[2].data.getUser.id===s[3].id&&me(s);function Q(C,h){return C[0]?Qe:We}let ne=Q(s),G=ne(s);const ke=[Ze,Xe],H=[];function Ee(C,h){return C[0]?1:0}c=Ee(s),d=H[c]=ke[c](s),O=new He({props:{avatar:s[2].data.getUser.avatar,username:s[2].data.getUser.username},$$inline:!0}),S=new qe({props:{user:s[2].data.getUser},$$inline:!0});const Se={c:function(){e=v("div"),o=v("div"),a=v("h1"),t=N(n),u=D(),r=v("div"),b&&b.c(),m=D(),i=v("button"),G.c(),f=D(),l=v("div"),d.c(),g=D(),k=v("div"),X(O.$$.fragment),M=D(),X(S.$$.fragment),this.h()},l:function(h){e=w(h,"DIV",{class:!0});var _=I(e);o=w(_,"DIV",{class:!0});var L=I(o);a=w(L,"H1",{class:!0});var W=I(a);t=T(W,n),W.forEach(p),u=V(L),r=w(L,"DIV",{});var z=I(r);b&&b.l(z),m=V(z),i=w(z,"BUTTON",{class:!0});var Ie=I(i);G.l(Ie),Ie.forEach(p),z.forEach(p),L.forEach(p),f=V(_),l=w(_,"DIV",{class:!0});var se=I(l);d.l(se),g=V(se),k=w(se,"DIV",{class:!0});var re=I(k);Z(O.$$.fragment,re),M=V(re),Z(S.$$.fragment,re),re.forEach(p),se.forEach(p),_.forEach(p),this.h()},h:function(){E(a,"class","text-4xl font-bold"),U(a,j,33,6,1051),E(i,"class","variant-ghost-primary btn"),U(i,j,40,8,1290),U(r,j,35,6,1124),E(o,"class","flex h-auto flex-wrap items-center justify-between"),U(o,j,32,4,980),E(k,"class","grid auto-rows-min grid-cols-1 gap-8"),U(k,j,73,6,2336),E(l,"class","grid-auto-max grid auto-cols-fr gap-4"),U(l,j,49,4,1518),E(e,"class","grid gap-6 xlx:grid-flow-row"),U(e,j,31,2,933)},m:function(h,_){B(h,e,_),$(e,o),$(o,a),$(a,t),$(o,u),$(o,r),b&&b.m(r,null),$(r,m),$(r,i),G.m(i,null),$(e,f),$(e,l),H[c].m(l,null),$(l,g),$(l,k),F(O,k,null),$(k,M),F(S,k,null),P=!0,K||(q=tt(i,"click",s[5],!1,!1,!1,!1),K=!0)},p:function(h,_){(!P||_&4)&&n!==(n=h[2].data.getUser.username+"")&&ae(t,n),h[3]&&h[2].data.getUser.id===h[3].id?b||(b=me(h),b.c(),b.m(r,m)):b&&(b.d(1),b=null),ne!==(ne=Q(h))&&(G.d(1),G=ne(h),G&&(G.c(),G.m(i,null)));let L=c;c=Ee(h),c===L?H[c].p(h,_):(te(),R(H[L],1,1,()=>{H[L]=null}),ee(),d=H[c],d?d.p(h,_):(d=H[c]=ke[c](h),d.c()),y(d,1),d.m(l,g));const W={};_&4&&(W.avatar=h[2].data.getUser.avatar),_&4&&(W.username=h[2].data.getUser.username),O.$set(W);const z={};_&4&&(z.user=h[2].data.getUser),S.$set(z)},i:function(h){P||(y(d),y(O.$$.fragment,h),y(S.$$.fragment,h),P=!0)},o:function(h){R(d),R(O.$$.fragment,h),R(S.$$.fragment,h),P=!1},d:function(h){h&&p(e),b&&b.d(),G.d(),H[c].d(),Y(O),Y(S),K=!1,q()}};return x("SvelteRegisterBlock",{block:Se,id:ze.name,type:"if",source:"(26:29) ",ctx:s}),Se}function Je(s){let e,o,a=s[2].error.message+"",n;const t={c:function(){e=v("p"),o=N("Oh no... "),n=N(a),this.h()},l:function(r){e=w(r,"P",{});var m=I(e);o=T(m,"Oh no... "),n=T(m,a),m.forEach(p),this.h()},h:function(){U(e,j,29,2,863)},m:function(r,m){B(r,e,m),$(e,o),$(e,n)},p:function(r,m){m&4&&a!==(a=r[2].error.message+"")&&ae(n,a)},i:A,o:A,d:function(r){r&&p(e)}};return x("SvelteRegisterBlock",{block:t,id:Je.name,type:"if",source:"(24:22) ",ctx:s}),t}function Ke(s){let e,o="Loading...";const a={c:function(){e=v("p"),e.textContent=o,this.h()},l:function(t){e=w(t,"P",{"data-svelte-h":!0}),ye(e)!=="svelte-qdsr2u"&&(e.textContent=o),this.h()},h:function(){U(e,j,27,2,820)},m:function(t,u){B(t,e,u)},p:A,i:A,o:A,d:function(t){t&&p(e)}};return x("SvelteRegisterBlock",{block:a,id:Ke.name,type:"if",source:"(22:0) {#if $user.fetching}",ctx:s}),a}function me(s){let e,o="Settings";const a={c:function(){e=v("a"),e.textContent=o,this.h()},l:function(t){e=w(t,"A",{class:!0,href:!0,"data-svelte-h":!0}),ye(e)!=="svelte-25wfcr"&&(e.textContent=o),this.h()},h:function(){E(e,"class","variant-ghost-primary btn"),E(e,"href",De+"/settings"),U(e,j,37,10,1194)},m:function(t,u){B(t,e,u)},d:function(t){t&&p(e)}};return x("SvelteRegisterBlock",{block:a,id:me.name,type:"if",source:"(32:8) {#if $me && $user.data.getUser.id === $me.id}",ctx:s}),a}function Qe(s){let e;const o={c:function(){e=N("Mods")},l:function(n){e=T(n,"Mods")},m:function(n,t){B(n,e,t)},d:function(n){n&&p(e)}};return x("SvelteRegisterBlock",{block:o,id:Qe.name,type:"else",source:"(39:10) {:else}",ctx:s}),o}function We(s){let e;const o={c:function(){e=N("Guides")},l:function(n){e=T(n,"Guides")},m:function(n,t){B(n,e,t)},d:function(n){n&&p(e)}};return x("SvelteRegisterBlock",{block:o,id:We.name,type:"if",source:"(37:10) {#if !guidesTab}",ctx:s}),o}function Xe(s){let e,o,a,n=ie(s[2].data.getUser.guides),t=[];for(let i=0;i<n.length;i+=1)t[i]=ge(je(s,n,i));const u=i=>R(t[i],1,1,()=>{t[i]=null});let r=s[2].data.getUser.guides.length===0&&pe(s);const m={c:function(){e=v("div");for(let f=0;f<t.length;f+=1)t[f].c();o=D(),r&&r.c(),this.h()},l:function(f){e=w(f,"DIV",{class:!0});var l=I(e);for(let c=0;c<t.length;c+=1)t[c].l(l);o=V(l),r&&r.l(l),l.forEach(p),this.h()},h:function(){E(e,"class","grid h-fit grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3"),U(e,j,62,8,1952)},m:function(f,l){B(f,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);$(e,o),r&&r.m(e,null),a=!0},p:function(f,l){if(l&4){n=ie(f[2].data.getUser.guides);let c;for(c=0;c<n.length;c+=1){const d=je(f,n,c);t[c]?(t[c].p(d,l),y(t[c],1)):(t[c]=ge(d),t[c].c(),y(t[c],1),t[c].m(e,o))}for(te(),c=n.length;c<t.length;c+=1)u(c);ee()}f[2].data.getUser.guides.length===0?r||(r=pe(f),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:function(f){if(!a){for(let l=0;l<n.length;l+=1)y(t[l]);a=!0}},o:function(f){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)R(t[l]);a=!1},d:function(f){f&&p(e),Ve(t,f),r&&r.d()}};return x("SvelteRegisterBlock",{block:m,id:Xe.name,type:"else",source:"(57:6) {:else}",ctx:s}),m}function Ze(s){let e,o,a,n=ie(s[2].data.getUser.mods),t=[];for(let i=0;i<n.length;i+=1)t[i]=$e(Ae(s,n,i));const u=i=>R(t[i],1,1,()=>{t[i]=null});let r=s[2].data.getUser.mods.length===0&&he(s);const m={c:function(){e=v("div");for(let f=0;f<t.length;f+=1)t[f].c();o=D(),r&&r.c(),this.h()},l:function(f){e=w(f,"DIV",{class:!0});var l=I(e);for(let c=0;c<t.length;c+=1)t[c].l(l);o=V(l),r&&r.l(l),l.forEach(p),this.h()},h:function(){E(e,"class","grid h-fit grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3"),U(e,j,51,8,1601)},m:function(f,l){B(f,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);$(e,o),r&&r.m(e,null),a=!0},p:function(f,l){if(l&4){n=ie(f[2].data.getUser.mods);let c;for(c=0;c<n.length;c+=1){const d=Ae(f,n,c);t[c]?(t[c].p(d,l),y(t[c],1)):(t[c]=$e(d),t[c].c(),y(t[c],1),t[c].m(e,o))}for(te(),c=n.length;c<t.length;c+=1)u(c);ee()}f[2].data.getUser.mods.length===0?r||(r=he(f),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:function(f){if(!a){for(let l=0;l<n.length;l+=1)y(t[l]);a=!0}},o:function(f){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)R(t[l]);a=!1},d:function(f){f&&p(e),Ve(t,f),r&&r.d()}};return x("SvelteRegisterBlock",{block:m,id:Ze.name,type:"if",source:"(46:6) {#if !guidesTab}",ctx:s}),m}function ge(s){let e,o;e=new Te({props:{guide:s[9],logo:s[2].data.getUser.avatar},$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,u){F(e,t,u),o=!0},p:function(t,u){const r={};u&4&&(r.guide=t[9]),u&4&&(r.logo=t[2].data.getUser.avatar),e.$set(r)},i:function(t){o||(y(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){Y(e,t)}};return x("SvelteRegisterBlock",{block:a,id:ge.name,type:"each",source:"(59:10) {#each $user.data.getUser.guides as guide}",ctx:s}),a}function pe(s){let e;const o={c:function(){e=N("User has no guides")},l:function(n){e=T(n,"User has no guides")},m:function(n,t){B(n,e,t)},d:function(n){n&&p(e)}};return x("SvelteRegisterBlock",{block:o,id:pe.name,type:"if",source:"(63:10) {#if $user.data.getUser.guides.length === 0}",ctx:s}),o}function $e(s){let e,o;e=new Ne({props:{mod:s[6].mod},$$inline:!0});const a={c:function(){X(e.$$.fragment)},l:function(t){Z(e.$$.fragment,t)},m:function(t,u){F(e,t,u),o=!0},p:function(t,u){const r={};u&4&&(r.mod=t[6].mod),e.$set(r)},i:function(t){o||(y(e.$$.fragment,t),o=!0)},o:function(t){R(e.$$.fragment,t),o=!1},d:function(t){Y(e,t)}};return x("SvelteRegisterBlock",{block:a,id:$e.name,type:"each",source:"(48:10) {#each $user.data.getUser.mods as mod}",ctx:s}),a}function he(s){let e;const o={c:function(){e=N("User has no mods")},l:function(n){e=T(n,"User has no mods")},m:function(n,t){B(n,e,t)},d:function(n){n&&p(e)}};return x("SvelteRegisterBlock",{block:o,id:he.name,type:"if",source:"(52:10) {#if $user.data.getUser.mods.length === 0}",ctx:s}),o}function ve(s){let e,o,a,n,t,u,r=!s[2].fetching&&!s[2].error&&s[2].data.getUser&&de(s);const m=[Ke,Je,ze,Le],i=[];function f(c,d){return c[2].fetching?0:c[2].error?1:c[2].data.getUser?2:3}a=f(s),n=i[a]=m[a](s);const l={c:function(){r&&r.c(),e=oe(),o=D(),n.c(),t=oe()},l:function(d){const g=et("svelte-sx4i20",document.head);r&&r.l(g),e=oe(),g.forEach(p),o=V(d),n.l(d),t=oe()},m:function(d,g){r&&r.m(document.head,null),$(document.head,e),B(d,o,g),i[a].m(d,g),B(d,t,g),u=!0},p:function(d,[g]){!d[2].fetching&&!d[2].error&&d[2].data.getUser?r?(r.p(d,g),g&4&&y(r,1)):(r=de(d),r.c(),y(r,1),r.m(e.parentNode,e)):r&&(te(),R(r,1,1,()=>{r=null}),ee());let k=a;a=f(d),a===k?i[a].p(d,g):(te(),R(i[k],1,1,()=>{i[k]=null}),ee(),n=i[a],n?n.p(d,g):(n=i[a]=m[a](d),n.c()),y(n,1),n.m(t.parentNode,t))},i:function(d){u||(y(r),y(n),u=!0)},o:function(d){R(r),R(n),u=!1},d:function(d){d&&(p(o),p(t)),r&&r.d(d),p(e),i[a].d(d)}};return x("SvelteRegisterBlock",{block:l,id:ve.name,type:"component",source:"",ctx:s}),l}function ct(s,e,o){let a,n,t=A,u=()=>(t(),t=Ce(a,g=>o(2,n=g)),a),r;Oe(ce,"me"),Ye(s,ce,g=>o(3,r=g)),s.$$.on_destroy.push(()=>t());let{$$slots:m={},$$scope:i}=e;xe("Page",m,[]);let{data:f}=e,l=!1;s.$$.on_mount.push(function(){f===void 0&&!("data"in e||s.$$.bound[s.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const c=["data"];Object.keys(e).forEach(g=>{!~c.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&console.warn(`<Page> was created with unknown prop '${g}'`)});const d=()=>o(0,l=!l);return s.$$set=g=>{"data"in g&&o(4,f=g.data)},s.$capture_state=()=>({UserInfo:qe,UserAvatar:He,ModCard:Ne,GuideCard:Te,MetaDescriptors:Me,me:ce,base:De,Page404:Ge,data:f,guidesTab:l,user:a,$user:n,$me:r}),s.$inject_state=g=>{"data"in g&&o(4,f=g.data),"guidesTab"in g&&o(0,l=g.guidesTab),"user"in g&&u(o(1,a=g.user))},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&16&&u(o(1,{user:a}=f,a))},[l,a,n,r,f,d]}class wt extends we{constructor(e){super(e),Ue(this,e,ct,ve,be,{data:4}),x("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:ve.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{wt as component,vt as universal};
//# sourceMappingURL=30.rsLZiWER.js.map
