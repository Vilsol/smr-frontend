import{S as kt,i as Rt,s as Pt,bb as Wt,Z as P,_ as A,$ as M,m as h,t as E,a1 as T,bc as Xt,bd as _t,e as v,c as x,d as S,f as $,a7 as tt,j as k,be as se,q as G,aa as w,a as D,ab as V,g as N,a5 as l,ac as et,aC as oe,b as wt,aV as ae,l as Vt,al as Bt,aB as le,k as yt,r as ie,w as fe,aH as lt,u as Yt,ad as te,ae as ee,b2 as re,aR as ne,aA as $e,aF as ce,aG as de}from"../../../../../chunks/vendor-93f46a94.js";import{M as ue}from"../../../../../chunks/MetaDescriptors-5ea9952a.js";import{l as me}from"../../../../../chunks/gql-d96f7ff1.js";import{H as pe,J as ge}from"../../../../../chunks/graphql-8819e72c.js";import{p as he}from"../../../../../chunks/routing-c6322149.js";import{m as Lt}from"../../../../../chunks/markdown-6a2ff7f0.js";import{p as zt,a as jt,b as qt}from"../../../../../chunks/formatting-b1e7d458.js";import{a as Ft}from"../../../../../chunks/api-bb6d5972.js";import{a as ve}from"../../../../../chunks/user-bfea9258.js";import{T as xe}from"../../../../../chunks/Toast-a853093a.js";import{g as Jt}from"../../../../../chunks/navigation-ce539261.js";import{b as Et}from"../../../../../chunks/paths-1c47712a.js";import{i as we}from"../../../../../chunks/launcher-0869f499.js";import"../../../../../chunks/stores-84e1d086.js";import"../../../../../chunks/global-98137ee8.js";import"../../../../../chunks/extras-8984d02f.js";import"../../../../../chunks/singletons-cdeec3fd.js";function Ve(s){return{c:G,l:G,m:G,p:G,d:G}}function ye(s){let t,r=s[1]+"";return{c(){t=v("p")},l(e){t=x(e,"P",{});var o=S(t);o.forEach($)},m(e,o){k(e,t,o),t.innerHTML=r},p(e,o){o&1&&r!==(r=e[1]+"")&&(t.innerHTML=r)},d(e){e&&$(t)}}}function Ee(s){return{c:G,l:G,m:G,p:G,d:G}}function be(s){let t,r,e={ctx:s,current:null,token:null,hasCatch:!1,pending:Ee,then:ye,catch:Ve,value:1};return _t(r=Lt(s[0]),e),{c(){t=v("div"),e.block.c(),this.h()},l(o){t=x(o,"DIV",{class:!0});var n=S(t);e.block.l(n),n.forEach($),this.h()},h(){tt(t,"class","markdown-content")},m(o,n){k(o,t,n),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null},p(o,n){s=o,e.ctx=s,n&1&&r!==(r=Lt(s[0]))&&_t(r,e)||se(e,s,n)},d(o){o&&$(t),e.block.d(),e.token=null,e=null}}}function Ie(s){let t,r;return t=new Xt({props:{$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,o){M(t,e,o),r=!0},p(e,o){const n={};o&5&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function Se(s){let t,r;return t=new Wt({props:{class:"h-fit",$$slots:{default:[Ie]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,o){M(t,e,o),r=!0},p(e,[o]){const n={};o&5&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function De(s,t,r){let{changelog:e}=t;return s.$$set=o=>{"changelog"in o&&r(0,e=o.changelog)},[e]}class Ne extends kt{constructor(t){super(),Rt(this,t,De,Se,Pt,{changelog:0})}}function ke(s){let t,r,e,o,n,a,i,m,u=zt(s[0].created_at)+"",d,c,y,C,H,J,L,Q=jt(s[0].downloads)+"",z,F,rt,O,_,X,g,j=s[0].sml_version+"",nt,Y,R,b,st,it,f,p=s[0].stability+"",Z,U,B,q,W,ot,bt,ft=qt(s[0].size)+"",dt,It,St,at,$t,Dt,Nt,ct=s[0].hash+"",ut;return{c(){t=v("div"),r=v("h3"),e=w("Info"),o=D(),n=v("span"),a=v("strong"),i=w("Created:"),m=D(),d=w(u),c=v("br"),y=D(),C=v("span"),H=v("strong"),J=w("Downloads:"),L=D(),z=w(Q),F=v("br"),rt=D(),O=v("span"),_=v("strong"),X=w("SML Version:"),g=D(),nt=w(j),Y=v("br"),R=D(),b=v("span"),st=v("strong"),it=w("Stability:"),f=D(),Z=w(p),U=v("br"),B=D(),q=v("span"),W=v("strong"),ot=w("Size:"),bt=D(),dt=w(ft),It=v("br"),St=D(),at=v("span"),$t=v("strong"),Dt=w("Hash:"),Nt=D(),ut=w(ct),this.h()},l(K){t=x(K,"DIV",{class:!0});var I=S(t);r=x(I,"H3",{class:!0});var At=S(r);e=V(At,"Info"),At.forEach($),o=N(I),n=x(I,"SPAN",{});var mt=S(n);a=x(mt,"STRONG",{});var Mt=S(a);i=V(Mt,"Created:"),Mt.forEach($),m=N(mt),d=V(mt,u),mt.forEach($),c=x(I,"BR",{}),y=N(I),C=x(I,"SPAN",{});var pt=S(C);H=x(pt,"STRONG",{});var Tt=S(H);J=V(Tt,"Downloads:"),Tt.forEach($),L=N(pt),z=V(pt,Q),pt.forEach($),F=x(I,"BR",{}),rt=N(I),O=x(I,"SPAN",{});var gt=S(O);_=x(gt,"STRONG",{});var Ct=S(_);X=V(Ct,"SML Version:"),Ct.forEach($),g=N(gt),nt=V(gt,j),gt.forEach($),Y=x(I,"BR",{}),R=N(I),b=x(I,"SPAN",{});var ht=S(b);st=x(ht,"STRONG",{});var Gt=S(st);it=V(Gt,"Stability:"),Gt.forEach($),f=N(ht),Z=V(ht,p),ht.forEach($),U=x(I,"BR",{}),B=N(I),q=x(I,"SPAN",{});var vt=S(q);W=x(vt,"STRONG",{});var Ht=S(W);ot=V(Ht,"Size:"),Ht.forEach($),bt=N(vt),dt=V(vt,ft),vt.forEach($),It=x(I,"BR",{}),St=N(I),at=x(I,"SPAN",{});var xt=S(at);$t=x(xt,"STRONG",{});var Ot=S($t);Dt=V(Ot,"Hash:"),Ot.forEach($),Nt=N(xt),ut=V(xt,ct),xt.forEach($),I.forEach($),this.h()},h(){tt(r,"class","text-2xl my-4 font-bold"),tt(t,"class","text-lg break-words")},m(K,I){k(K,t,I),l(t,r),l(r,e),l(t,o),l(t,n),l(n,a),l(a,i),l(n,m),l(n,d),l(t,c),l(t,y),l(t,C),l(C,H),l(H,J),l(C,L),l(C,z),l(t,F),l(t,rt),l(t,O),l(O,_),l(_,X),l(O,g),l(O,nt),l(t,Y),l(t,R),l(t,b),l(b,st),l(st,it),l(b,f),l(b,Z),l(t,U),l(t,B),l(t,q),l(q,W),l(W,ot),l(q,bt),l(q,dt),l(t,It),l(t,St),l(t,at),l(at,$t),l($t,Dt),l(at,Nt),l(at,ut)},p(K,I){I&1&&u!==(u=zt(K[0].created_at)+"")&&et(d,u),I&1&&Q!==(Q=jt(K[0].downloads)+"")&&et(z,Q),I&1&&j!==(j=K[0].sml_version+"")&&et(nt,j),I&1&&p!==(p=K[0].stability+"")&&et(Z,p),I&1&&ft!==(ft=qt(K[0].size)+"")&&et(dt,ft),I&1&&ct!==(ct=K[0].hash+"")&&et(ut,ct)},d(K){K&&$(t)}}}function Re(s){let t,r;return t=new Xt({props:{$$slots:{default:[ke]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,o){M(t,e,o),r=!0},p(e,o){const n={};o&3&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function Pe(s){let t,r;return t=new Wt({props:{$$slots:{default:[Re]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,o){M(t,e,o),r=!0},p(e,[o]){const n={};o&3&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function Ae(s,t,r){let{version:e}=t;return s.$$set=o=>{"version"in o&&r(0,e=o.version)},[e]}class Me extends kt{constructor(t){super(),Rt(this,t,Ae,Pe,Pt,{version:0})}}function Zt(s){let t,r;return t=new ue({props:{description:"Information for mod version "+s[3].data.getVersion.mod.name+" "+s[3].data.getVersion.version,title:"Mod version "+s[3].data.getVersion.mod.name+" "+s[3].data.getVersion.version}}),{c(){P(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,o){M(t,e,o),r=!0},p(e,o){const n={};o&8&&(n.description="Information for mod version "+e[3].data.getVersion.mod.name+" "+e[3].data.getVersion.version),o&8&&(n.title="Mod version "+e[3].data.getVersion.mod.name+" "+e[3].data.getVersion.version),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){T(t,e)}}}function Te(s){let t;return{c(){t=w("404")},l(r){t=V(r,"404")},m(r,e){k(r,t,e)},p:G,i:G,o:G,d(r){r&&$(t)}}}function Ce(s){let t,r,e,o=s[3].data.getVersion.mod.name+"",n,a,i=s[3].data.getVersion.version+"",m,u,d,c,y,C,H,J,L,Q,z,F,rt,O,_,X,g,j,nt,Y,R=s[6]&&Kt(s);y=new lt({props:{variant:"outlined",href:Ft+"/mod/"+s[0]+"/versions/"+s[1]+"/download",$$slots:{default:[Be]},$$scope:{ctx:s}}}),H=new lt({props:{variant:"outlined",$$slots:{default:[je]},$$scope:{ctx:s}}}),H.$on("click",s[13]),L=new lt({props:{variant:"outlined",href:Et+"/mod/"+s[0],$$slots:{default:[Je]},$$scope:{ctx:s}}}),F=new Ne({props:{changelog:s[3].data.getVersion.changelog}}),_=new Me({props:{version:s[3].data.getVersion}});let b=s[6]&&Qt(s);function st(f){s[17](f)}let it={$$slots:{default:[Xe]},$$scope:{ctx:s}};return s[5]!==void 0&&(it.running=s[5]),j=new xe({props:it}),Yt.push(()=>te(j,"running",st)),{c(){t=v("div"),r=v("div"),e=v("h1"),n=w(o),a=w(`
        Version `),m=w(i),u=D(),d=v("div"),R&&R.c(),c=D(),P(y.$$.fragment),C=D(),P(H.$$.fragment),J=D(),P(L.$$.fragment),Q=D(),z=v("div"),P(F.$$.fragment),rt=D(),O=v("div"),P(_.$$.fragment),X=D(),b&&b.c(),g=D(),P(j.$$.fragment),this.h()},l(f){t=x(f,"DIV",{class:!0});var p=S(t);r=x(p,"DIV",{class:!0});var Z=S(r);e=x(Z,"H1",{class:!0});var U=S(e);n=V(U,o),a=V(U,`
        Version `),m=V(U,i),U.forEach($),u=N(Z),d=x(Z,"DIV",{class:!0});var B=S(d);R&&R.l(B),c=N(B),A(y.$$.fragment,B),C=N(B),A(H.$$.fragment,B),J=N(B),A(L.$$.fragment,B),B.forEach($),Z.forEach($),Q=N(p),z=x(p,"DIV",{class:!0});var q=S(z);A(F.$$.fragment,q),rt=N(q),O=x(q,"DIV",{class:!0});var W=S(O);A(_.$$.fragment,W),W.forEach($),q.forEach($),p.forEach($),X=N(f),b&&b.l(f),g=N(f),A(j.$$.fragment,f),this.h()},h(){tt(e,"class","text-4xl font-bold"),tt(d,"class","grid grid-flow-col gap-4"),tt(r,"class","flex flex-wrap h-auto justify-between items-center"),tt(O,"class","grid grid-cols-1 auto-rows-min gap-8"),tt(z,"class","grid grid-auto-max auto-cols-fr gap-4"),tt(t,"class","grid gap-6 xlx:grid-flow-row")},m(f,p){k(f,t,p),l(t,r),l(r,e),l(e,n),l(e,a),l(e,m),l(r,u),l(r,d),R&&R.m(d,null),l(d,c),M(y,d,null),l(d,C),M(H,d,null),l(d,J),M(L,d,null),l(t,Q),l(t,z),M(F,z,null),l(z,rt),l(z,O),M(_,O,null),k(f,X,p),b&&b.m(f,p),k(f,g,p),M(j,f,p),Y=!0},p(f,p){(!Y||p&8)&&o!==(o=f[3].data.getVersion.mod.name+"")&&et(n,o),(!Y||p&8)&&i!==(i=f[3].data.getVersion.version+"")&&et(m,i),f[6]?R?(R.p(f,p),p&64&&h(R,1)):(R=Kt(f),R.c(),h(R,1),R.m(d,c)):R&&(yt(),E(R,1,1,()=>{R=null}),Vt());const Z={};p&3&&(Z.href=Ft+"/mod/"+f[0]+"/versions/"+f[1]+"/download"),p&524288&&(Z.$$scope={dirty:p,ctx:f}),y.$set(Z);const U={};p&524288&&(U.$$scope={dirty:p,ctx:f}),H.$set(U);const B={};p&1&&(B.href=Et+"/mod/"+f[0]),p&524288&&(B.$$scope={dirty:p,ctx:f}),L.$set(B);const q={};p&8&&(q.changelog=f[3].data.getVersion.changelog),F.$set(q);const W={};p&8&&(W.version=f[3].data.getVersion),_.$set(W),f[6]?b?(b.p(f,p),p&64&&h(b,1)):(b=Qt(f),b.c(),h(b,1),b.m(g.parentNode,g)):b&&(yt(),E(b,1,1,()=>{b=null}),Vt());const ot={};p&524304&&(ot.$$scope={dirty:p,ctx:f}),!nt&&p&32&&(nt=!0,ot.running=f[5],ee(()=>nt=!1)),j.$set(ot)},i(f){Y||(h(R),h(y.$$.fragment,f),h(H.$$.fragment,f),h(L.$$.fragment,f),h(F.$$.fragment,f),h(_.$$.fragment,f),h(b),h(j.$$.fragment,f),Y=!0)},o(f){E(R),E(y.$$.fragment,f),E(H.$$.fragment,f),E(L.$$.fragment,f),E(F.$$.fragment,f),E(_.$$.fragment,f),E(b),E(j.$$.fragment,f),Y=!1},d(f){f&&$(t),R&&R.d(),T(y),T(H),T(L),T(F),T(_),f&&$(X),b&&b.d(f),f&&$(g),T(j,f)}}}function Ge(s){let t,r,e=s[3].error.message+"",o;return{c(){t=v("p"),r=w("Oh no... "),o=w(e)},l(n){t=x(n,"P",{});var a=S(t);r=V(a,"Oh no... "),o=V(a,e),a.forEach($)},m(n,a){k(n,t,a),l(t,r),l(t,o)},p(n,a){a&8&&e!==(e=n[3].error.message+"")&&et(o,e)},i:G,o:G,d(n){n&&$(t)}}}function He(s){let t,r;return{c(){t=v("p"),r=w("Loading...")},l(e){t=x(e,"P",{});var o=S(t);r=V(o,"Loading..."),o.forEach($)},m(e,o){k(e,t,o),l(t,r)},p:G,i:G,o:G,d(e){e&&$(t)}}}function Kt(s){let t,r,e,o;return t=new lt({props:{variant:"outlined",$$slots:{default:[Oe]},$$scope:{ctx:s}}}),t.$on("click",s[11]),e=new lt({props:{variant:"outlined",$$slots:{default:[_e]},$$scope:{ctx:s}}}),e.$on("click",s[12]),{c(){P(t.$$.fragment),r=D(),P(e.$$.fragment)},l(n){A(t.$$.fragment,n),r=N(n),A(e.$$.fragment,n)},m(n,a){M(t,n,a),k(n,r,a),M(e,n,a),o=!0},p(n,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:n}),t.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:n}),e.$set(m)},i(n){o||(h(t.$$.fragment,n),h(e.$$.fragment,n),o=!0)},o(n){E(t.$$.fragment,n),E(e.$$.fragment,n),o=!1},d(n){T(t,n),n&&$(r),T(e,n)}}}function Oe(s){let t;return{c(){t=w("Edit")},l(r){t=V(r,"Edit")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function _e(s){let t;return{c(){t=w("Delete")},l(r){t=V(r,"Delete")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function Be(s){let t;return{c(){t=w("Download")},l(r){t=V(r,"Download")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function Le(s){let t;return{c(){t=w("Install")},l(r){t=V(r,"Install")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function ze(s){let t;return{c(){t=w("download")},l(r){t=V(r,"download")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function je(s){let t,r,e,o;return t=new re({props:{$$slots:{default:[Le]},$$scope:{ctx:s}}}),e=new ne({props:{class:"material-icons",$$slots:{default:[ze]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment),r=D(),P(e.$$.fragment)},l(n){A(t.$$.fragment,n),r=N(n),A(e.$$.fragment,n)},m(n,a){M(t,n,a),k(n,r,a),M(e,n,a),o=!0},p(n,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:n}),t.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:n}),e.$set(m)},i(n){o||(h(t.$$.fragment,n),h(e.$$.fragment,n),o=!0)},o(n){E(t.$$.fragment,n),E(e.$$.fragment,n),o=!1},d(n){T(t,n),n&&$(r),T(e,n)}}}function qe(s){let t;return{c(){t=w("Mod")},l(r){t=V(r,"Mod")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function Fe(s){let t;return{c(){t=w("extension")},l(r){t=V(r,"extension")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function Je(s){let t,r,e,o;return t=new re({props:{$$slots:{default:[qe]},$$scope:{ctx:s}}}),e=new ne({props:{class:"material-icons",$$slots:{default:[Fe]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment),r=D(),P(e.$$.fragment)},l(n){A(t.$$.fragment,n),r=N(n),A(e.$$.fragment,n)},m(n,a){M(t,n,a),k(n,r,a),M(e,n,a),o=!0},p(n,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:n}),t.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:n}),e.$set(m)},i(n){o||(h(t.$$.fragment,n),h(e.$$.fragment,n),o=!0)},o(n){E(t.$$.fragment,n),E(e.$$.fragment,n),o=!1},d(n){T(t,n),n&&$(r),T(e,n)}}}function Qt(s){let t,r,e;function o(a){s[16](a)}let n={$$slots:{default:[We]},$$scope:{ctx:s}};return s[7]!==void 0&&(n.open=s[7]),t=new $e({props:n}),Yt.push(()=>te(t,"open",o)),{c(){P(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,i){M(t,a,i),e=!0},p(a,i){const m={};i&524288&&(m.$$scope={dirty:i,ctx:a}),!r&&i&128&&(r=!0,m.open=a[7],ee(()=>r=!1)),t.$set(m)},i(a){e||(h(t.$$.fragment,a),e=!0)},o(a){E(t.$$.fragment,a),e=!1},d(a){T(t,a)}}}function Ze(s){let t;return{c(){t=w("Delete Version?")},l(r){t=V(r,"Delete Version?")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function Ke(s){let t;return{c(){t=w("Cancel")},l(r){t=V(r,"Cancel")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function Qe(s){let t;return{c(){t=w("Delete")},l(r){t=V(r,"Delete")},m(r,e){k(r,t,e)},d(r){r&&$(t)}}}function Ue(s){let t,r,e,o,n,a,i,m;return n=new lt({props:{variant:"outlined",$$slots:{default:[Ke]},$$scope:{ctx:s}}}),n.$on("click",s[14]),i=new lt({props:{variant:"outlined",$$slots:{default:[Qe]},$$scope:{ctx:s}}}),i.$on("click",s[15]),{c(){t=v("div"),r=v("span"),e=w("Are you sure you wish to delete this version"),o=D(),P(n.$$.fragment),a=D(),P(i.$$.fragment),this.h()},l(u){t=x(u,"DIV",{class:!0});var d=S(t);r=x(d,"SPAN",{});var c=S(r);e=V(c,"Are you sure you wish to delete this version"),c.forEach($),o=N(d),A(n.$$.fragment,d),a=N(d),A(i.$$.fragment,d),d.forEach($),this.h()},h(){tt(t,"class","grid grid-flow-row gap-4")},m(u,d){k(u,t,d),l(t,r),l(r,e),l(t,o),M(n,t,null),l(t,a),M(i,t,null),m=!0},p(u,d){const c={};d&524288&&(c.$$scope={dirty:d,ctx:u}),n.$set(c);const y={};d&524288&&(y.$$scope={dirty:d,ctx:u}),i.$set(y)},i(u){m||(h(n.$$.fragment,u),h(i.$$.fragment,u),m=!0)},o(u){E(n.$$.fragment,u),E(i.$$.fragment,u),m=!1},d(u){u&&$(t),T(n),T(i)}}}function We(s){let t,r,e,o;return t=new ce({props:{id:"simple-title",$$slots:{default:[Ze]},$$scope:{ctx:s}}}),e=new de({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){P(t.$$.fragment),r=D(),P(e.$$.fragment)},l(n){A(t.$$.fragment,n),r=N(n),A(e.$$.fragment,n)},m(n,a){M(t,n,a),k(n,r,a),M(e,n,a),o=!0},p(n,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:n}),t.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:n}),e.$set(m)},i(n){o||(h(t.$$.fragment,n),h(e.$$.fragment,n),o=!0)},o(n){E(t.$$.fragment,n),E(e.$$.fragment,n),o=!1},d(n){T(t,n),n&&$(r),T(e,n)}}}function Xe(s){let t,r;return{c(){t=v("span"),r=w(s[4])},l(e){t=x(e,"SPAN",{});var o=S(t);r=V(o,s[4]),o.forEach($)},m(e,o){k(e,t,o),l(t,r)},p(e,o){o&16&&et(r,e[4])},d(e){e&&$(t)}}}function Ye(s){let t,r,e,o,n,a,i=!s[3].fetching&&!s[3].error&&s[3].data.getVersion&&Zt(s);const m=[He,Ge,Ce,Te],u=[];function d(c,y){return c[3].fetching?0:c[3].error?1:c[3].data.getVersion?2:3}return e=d(s),o=u[e]=m[e](s),{c(){i&&i.c(),t=wt(),r=D(),o.c(),n=wt()},l(c){const y=ae('[data-svelte="svelte-7zfw29"]',document.head);i&&i.l(y),t=wt(),y.forEach($),r=N(c),o.l(c),n=wt()},m(c,y){i&&i.m(document.head,null),l(document.head,t),k(c,r,y),u[e].m(c,y),k(c,n,y),a=!0},p(c,[y]){!c[3].fetching&&!c[3].error&&c[3].data.getVersion?i?(i.p(c,y),y&8&&h(i,1)):(i=Zt(c),i.c(),h(i,1),i.m(t.parentNode,t)):i&&(yt(),E(i,1,1,()=>{i=null}),Vt());let C=e;e=d(c),e===C?u[e].p(c,y):(yt(),E(u[C],1,1,()=>{u[C]=null}),Vt(),o=u[e],o?o.p(c,y):(o=u[e]=m[e](c),o.c()),h(o,1),o.m(n.parentNode,n))},i(c){a||(h(i),h(o),a=!0)},o(c){E(i),E(o),a=!1},d(c){i&&i.d(c),$(t),c&&$(r),u[e].d(c),c&&$(n)}}}const Ut=oe(pe,{version:void 0}),vr=he(async s=>(Ut.variables.version=s.params.versionId,me({version:Ut})(s)));function tr(s,t,r){let e,o,n,a=G,i=()=>(a(),a=ie(c,g=>r(3,n=g)),c),m;Bt(s,ve,g=>r(10,o=g)),s.$$.on_destroy.push(()=>a());let{modId:u}=t,{versionId:d}=t,{version:c}=t;i();let y="",C=!1;const H=le({query:ge}),J=fe(!1);Bt(s,J,g=>r(7,m=g));const L=()=>{H({versionId:d}).then(g=>{g.error?(console.error(g.error.message),r(4,y="Error deleting version: "+g.error.message),r(5,C=!0)):Jt(Et+"/mod/"+u)})},Q=()=>Jt(Et+"/mod/"+u+"/version/"+d+"/edit"),z=()=>J.set(!0),F=()=>we(c.data.getVersion.mod.mod_reference),rt=()=>J.set(!1),O=()=>L();function _(g){m=g,J.set(m)}function X(g){C=g,r(5,C)}return s.$$set=g=>{"modId"in g&&r(0,u=g.modId),"versionId"in g&&r(1,d=g.versionId),"version"in g&&i(r(2,c=g.version))},s.$$.update=()=>{s.$$.dirty&1032&&r(6,e=o?.roles?.deleteContent||n?.data?.getVersion.mod?.authors?.findIndex(g=>g.user_id==o?.id)>=0)},[u,d,c,n,y,C,e,m,J,L,o,Q,z,F,rt,O,_,X]}class xr extends kt{constructor(t){super(),Rt(this,t,tr,Ye,Pt,{modId:0,versionId:1,version:2})}}export{xr as default,vr as load};
//# sourceMappingURL=index.svelte-9d8d64fd.js.map