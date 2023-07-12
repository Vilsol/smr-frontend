import{S as Pt,i as vt,d as V,s as gt,bo as ht,v as At,bp as pt,a8 as z,a6 as L,x as u,L as h,bi as Et,ab as U,q as n,a9 as w,y as p,z as $,N as d,ac as D,C as m,ae as Y,l as C,ad as s,p as F,t as K,aj as W,P as It}from"../chunks/vendor.4f31a686.js";import{A as Z,d as tt,c as et,e as at}from"../chunks/api.44414049.js";import"../chunks/user.83a5f5c1.js";import{M as $t}from"../chunks/MetaDescriptors.5032d4fd.js";const P="src/routes/api-docs/+page.svelte";function dt(E){let t,c,r,i,e,o,l,k,v,a,f,I,g,b,_,J,O,X,y,H,B,R,N,j,T,q;const ot={c:function(){t=u("div"),c=u("h2"),r=h("GraphQL API"),i=L(),e=u("p"),o=h("The GraphQL API is available at the endpoint "),l=u("code"),k=h(Z),v=h(` with a playground available at
        `),a=u("code"),f=h(tt),I=L(),g=u("div"),b=u("h2"),_=h("REST API"),J=L(),O=u("p"),X=h("The GraphQL API is available at the endpoint "),y=u("code"),H=h(et),B=h(` with docs available at
        `),R=u("code"),N=h(at),j=L(),T=u("p"),q=h("It is recommended that you use the GraphQL API as the REST API is not feature complete by design."),this.h()},l:function(A){t=p(A,"DIV",{});var S=$(t);c=p(S,"H2",{class:!0});var nt=$(c);r=d(nt,"GraphQL API"),nt.forEach(n),i=w(S),e=p(S,"P",{class:!0});var G=$(e);o=d(G,"The GraphQL API is available at the endpoint "),l=p(G,"CODE",{});var ct=$(l);k=d(ct,Z),ct.forEach(n),v=d(G,` with a playground available at
        `),a=p(G,"CODE",{});var rt=$(a);f=d(rt,tt),rt.forEach(n),G.forEach(n),S.forEach(n),I=w(A),g=p(A,"DIV",{});var x=$(g);b=p(x,"H2",{class:!0});var it=$(b);_=d(it,"REST API"),it.forEach(n),J=w(x),O=p(x,"P",{class:!0});var Q=$(O);X=d(Q,"The GraphQL API is available at the endpoint "),y=p(Q,"CODE",{});var lt=$(y);H=d(lt,et),lt.forEach(n),B=d(Q,` with docs available at
        `),R=p(Q,"CODE",{});var ft=$(R);N=d(ft,at),ft.forEach(n),Q.forEach(n),j=w(x),T=p(x,"P",{class:!0});var ut=$(T);q=d(ut,"It is recommended that you use the GraphQL API as the REST API is not feature complete by design."),ut.forEach(n),x.forEach(n),this.h()},h:function(){D(c,"class","s-OSOTaXMk1VPJ"),m(c,P,13,6,429),m(l,P,15,53,513),m(a,P,16,8,579),D(e,"class","s-OSOTaXMk1VPJ"),m(e,P,14,6,456),m(t,P,12,4,417),D(b,"class","s-OSOTaXMk1VPJ"),m(b,P,20,6,655),m(y,P,22,53,736),m(R,P,23,8,791),D(O,"class","s-OSOTaXMk1VPJ"),m(O,P,21,6,679),D(T,"class","s-OSOTaXMk1VPJ"),m(T,P,25,6,837),m(g,P,19,4,643)},m:function(A,S){C(A,t,S),s(t,c),s(c,r),s(t,i),s(t,e),s(e,o),s(e,l),s(l,k),s(e,v),s(e,a),s(a,f),C(A,I,S),C(A,g,S),s(g,b),s(b,_),s(g,J),s(g,O),s(O,X),s(O,y),s(y,H),s(O,B),s(O,R),s(R,N),s(g,j),s(g,T),s(T,q)},p:It,d:function(A){A&&n(t),A&&n(I),A&&n(g)}};return V("SvelteRegisterBlock",{block:ot,id:dt.name,type:"slot",source:"(12:2) <Content>",ctx:E}),ot}function mt(E){let t,c;t=new pt({props:{$$slots:{default:[dt]},$$scope:{ctx:E}},$$inline:!0});const r={c:function(){z(t.$$.fragment)},l:function(e){U(t.$$.fragment,e)},m:function(e,o){Y(t,e,o),c=!0},p:function(e,o){const l={};o&1&&(l.$$scope={dirty:o,ctx:e}),t.$set(l)},i:function(e){c||(F(t.$$.fragment,e),c=!0)},o:function(e){K(t.$$.fragment,e),c=!1},d:function(e){W(t,e)}};return V("SvelteRegisterBlock",{block:r,id:mt.name,type:"slot",source:"(11:0) <Card>",ctx:E}),r}function st(E){let t,c,r,i,e,o,l;t=new $t({props:{description:"API documentation for the Satisfactory Mod Repository",title:"API Docs"},$$inline:!0}),o=new ht({props:{$$slots:{default:[mt]},$$scope:{ctx:E}},$$inline:!0});const k={c:function(){z(t.$$.fragment),c=L(),r=u("h1"),i=h("API Docs"),e=L(),z(o.$$.fragment),this.h()},l:function(a){const f=Et("svelte-rqox2n",document.head);U(t.$$.fragment,f),f.forEach(n),c=w(a),r=p(a,"H1",{class:!0});var I=$(r);i=d(I,"API Docs"),I.forEach(n),e=w(a),U(o.$$.fragment,a),this.h()},h:function(){D(r,"class","s-OSOTaXMk1VPJ"),m(r,P,9,0,376)},m:function(a,f){Y(t,document.head,null),C(a,c,f),C(a,r,f),s(r,i),C(a,e,f),Y(o,a,f),l=!0},p:function(a,[f]){const I={};f&1&&(I.$$scope={dirty:f,ctx:a}),o.$set(I)},i:function(a){l||(F(t.$$.fragment,a),F(o.$$.fragment,a),l=!0)},o:function(a){K(t.$$.fragment,a),K(o.$$.fragment,a),l=!1},d:function(a){W(t),a&&n(c),a&&n(r),a&&n(e),W(o,a)}};return V("SvelteRegisterBlock",{block:k,id:st.name,type:"component",source:"",ctx:E}),k}function Ot(E,t,c){let{$$slots:r={},$$scope:i}=t;At("Page",r,[]);const e=[];return Object.keys(t).forEach(o=>{!~e.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<Page> was created with unknown prop '${o}'`)}),E.$capture_state=()=>({API_GRAPHQL:Z,API_GRAPHQL_PLAYGROUND:tt,API_REST:et,API_REST_DOCS:at,MetaDescriptors:$t,Card:ht,Content:pt}),[]}class yt extends Pt{constructor(t){super(t),vt(this,t,Ot,st,gt,{}),V("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:st.name})}}export{yt as component};
//# sourceMappingURL=10.c587510a.js.map
