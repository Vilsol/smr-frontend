import{as as et,at as ge,az as Ke,aA as tt,aB as at,S as st,i as lt,s as rt,au as se,am as Qe,e as u,t as $,k as g,j as le,c as d,a as f,g as b,d as c,n as h,m as re,b as l,f as O,R as s,o as ne,av as nt,an as ot,x as oe,u as ie,v as ce,aw as it,ax as ct,ay as ut,M as dt,h as ue,X as I}from"./vendor-bd04eeb5.js";import{t as ft}from"./forms-8d025218.js";import{m as We}from"./markdown-b0181a82.js";const Ye=et({name:ge().min(3).max(32),mod_reference:ge().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:ge().min(16).max(128),full_description:Ke(ge()),logo:Ke(tt().refine(n=>"name"in n&&"size"in n&&"type"in n)),source_url:ge().url().optional().or(at(""))});function mt(n){let e,t=(n[8]||"")+"",r;return{c(){e=u("span"),r=$(t),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);r=b(o,t),o.forEach(c),this.h()},h(){l(e,"class","validation-message")},m(a,o){O(a,e,o),s(e,r)},p(a,o){o&256&&t!==(t=(a[8]||"")+"")&&ue(r,t)},d(a){a&&c(e)}}}function pt(n){let e,t=(n[8]||"")+"",r;return{c(){e=u("span"),r=$(t),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);r=b(o,t),o.forEach(c),this.h()},h(){l(e,"class","validation-message")},m(a,o){O(a,e,o),s(e,r)},p(a,o){o&256&&t!==(t=(a[8]||"")+"")&&ue(r,t)},d(a){a&&c(e)}}}function gt(n){let e,t=(n[8]||"")+"",r;return{c(){e=u("span"),r=$(t),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);r=b(o,t),o.forEach(c),this.h()},h(){l(e,"class","validation-message")},m(a,o){O(a,e,o),s(e,r)},p(a,o){o&256&&t!==(t=(a[8]||"")+"")&&ue(r,t)},d(a){a&&c(e)}}}function ht(n){let e,t=(n[8]||"")+"",r;return{c(){e=u("span"),r=$(t),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);r=b(o,t),o.forEach(c),this.h()},h(){l(e,"class","validation-message")},m(a,o){O(a,e,o),s(e,r)},p(a,o){o&256&&t!==(t=(a[8]||"")+"")&&ue(r,t)},d(a){a&&c(e)}}}function _t(n){return{c:I,l:I,m:I,p:I,d:I}}function vt(n){let e,t=n[9]+"";return{c(){e=u("div"),this.h()},l(r){e=d(r,"DIV",{class:!0});var a=f(e);a.forEach(c),this.h()},h(){l(e,"class","markdown-content right svelte-1ks9yo5")},m(r,a){O(r,e,a),e.innerHTML=t},p(r,a){a&4&&t!==(t=r[9]+"")&&(e.innerHTML=t)},d(r){r&&c(e)}}}function $t(n){return{c:I,l:I,m:I,p:I,d:I}}function bt(n){let e,t=(n[8]||"")+"",r;return{c(){e=u("span"),r=$(t),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);r=b(o,t),o.forEach(c),this.h()},h(){l(e,"class","validation-message")},m(a,o){O(a,e,o),s(e,r)},p(a,o){o&256&&t!==(t=(a[8]||"")+"")&&ue(r,t)},d(a){a&&c(e)}}}function wt(n){let e,t=(n[8]||"")+"",r;return{c(){e=u("span"),r=$(t),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);r=b(o,t),o.forEach(c),this.h()},h(){l(e,"class","validation-message")},m(a,o){O(a,e,o),s(e,r)},p(a,o){o&256&&t!==(t=(a[8]||"")+"")&&ue(r,t)},d(a){a&&c(e)}}}function Et(n){let e,t,r,a,o,H,w,Z,E,q,m,G,$e,be,S,we,R,Ee,L,J,Se,Le,U,Te,B,ye,j,T,K,Ae,Ie,D,De,x,Ne,N,de,ke,Ve,he,Pe,y,Q,Me,Re,k,Ue,F,Be,A,W,je,xe,z,Fe,C,ze,fe,X,Y,Ce,Oe;E=new se({props:{for:"name",$$slots:{default:[mt,({messages:i})=>({8:i}),({messages:i})=>i?256:0]},$$scope:{ctx:n}}}),R=new se({props:{for:"mod_reference",$$slots:{default:[pt,({messages:i})=>({8:i}),({messages:i})=>i?256:0]},$$scope:{ctx:n}}}),B=new se({props:{for:"short_description",$$slots:{default:[gt,({messages:i})=>({8:i}),({messages:i})=>i?256:0]},$$scope:{ctx:n}}}),x=new se({props:{for:"full_description",$$slots:{default:[ht,({messages:i})=>({8:i}),({messages:i})=>i?256:0]},$$scope:{ctx:n}}});let v={ctx:n,current:null,token:null,hasCatch:!1,pending:$t,then:vt,catch:_t,value:9};return Qe(he=We(n[2]),v),F=new se({props:{for:"logo",$$slots:{default:[bt,({messages:i})=>({8:i}),({messages:i})=>i?256:0]},$$scope:{ctx:n}}}),C=new se({props:{for:"source_url",$$slots:{default:[wt,({messages:i})=>({8:i}),({messages:i})=>i?256:0]},$$scope:{ctx:n}}}),{c(){e=u("form"),t=u("div"),r=u("div"),a=u("label"),o=$("Name:"),H=g(),w=u("input"),Z=g(),le(E.$$.fragment),q=g(),m=u("div"),G=u("label"),$e=$("Mod Reference:"),be=g(),S=u("input"),we=g(),le(R.$$.fragment),Ee=g(),L=u("div"),J=u("label"),Se=$("Short Description:"),Le=g(),U=u("input"),Te=g(),le(B.$$.fragment),ye=g(),j=u("div"),T=u("div"),K=u("label"),Ae=$("Full Description:"),Ie=g(),D=u("textarea"),De=g(),le(x.$$.fragment),Ne=g(),N=u("div"),de=u("span"),ke=$("Preview:"),Ve=g(),v.block.c(),Pe=g(),y=u("div"),Q=u("label"),Me=$("Logo:"),Re=g(),k=u("input"),Ue=g(),le(F.$$.fragment),Be=g(),A=u("div"),W=u("label"),je=$("Source URL:"),xe=g(),z=u("input"),Fe=g(),le(C.$$.fragment),ze=g(),fe=u("div"),X=u("input"),this.h()},l(i){e=d(i,"FORM",{});var p=f(e);t=d(p,"DIV",{class:!0});var _=f(t);r=d(_,"DIV",{class:!0});var V=f(r);a=d(V,"LABEL",{for:!0});var me=f(a);o=b(me,"Name:"),me.forEach(c),H=h(V),w=d(V,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Z=h(V),re(E.$$.fragment,V),V.forEach(c),q=h(_),m=d(_,"DIV",{class:!0});var P=f(m);G=d(P,"LABEL",{for:!0});var pe=f(G);$e=b(pe,"Mod Reference:"),pe.forEach(c),be=h(P),S=d(P,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),we=h(P),re(R.$$.fragment,P),P.forEach(c),Ee=h(_),L=d(_,"DIV",{class:!0});var M=f(L);J=d(M,"LABEL",{for:!0});var He=f(J);Se=b(He,"Short Description:"),He.forEach(c),Le=h(M),U=d(M,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Te=h(M),re(B.$$.fragment,M),M.forEach(c),ye=h(_),j=d(_,"DIV",{class:!0});var _e=f(j);T=d(_e,"DIV",{class:!0});var ee=f(T);K=d(ee,"LABEL",{for:!0});var Xe=f(K);Ae=b(Xe,"Full Description:"),Xe.forEach(c),Ie=h(ee),D=d(ee,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0,rows:!0}),f(D).forEach(c),De=h(ee),re(x.$$.fragment,ee),ee.forEach(c),Ne=h(_e),N=d(_e,"DIV",{class:!0});var ve=f(N);de=d(ve,"SPAN",{});var Ze=f(de);ke=b(Ze,"Preview:"),Ze.forEach(c),Ve=h(ve),v.block.l(ve),ve.forEach(c),_e.forEach(c),Pe=h(_),y=d(_,"DIV",{class:!0});var te=f(y);Q=d(te,"LABEL",{for:!0});var qe=f(Q);Me=b(qe,"Logo:"),qe.forEach(c),Re=h(te),k=d(te,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),Ue=h(te),re(F.$$.fragment,te),te.forEach(c),Be=h(_),A=d(_,"DIV",{class:!0});var ae=f(A);W=d(ae,"LABEL",{for:!0});var Ge=f(W);je=b(Ge,"Source URL:"),Ge.forEach(c),xe=h(ae),z=d(ae,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Fe=h(ae),re(C.$$.fragment,ae),ae.forEach(c),ze=h(_),fe=d(_,"DIV",{});var Je=f(fe);X=d(Je,"INPUT",{type:!0,class:!0}),Je.forEach(c),_.forEach(c),p.forEach(c),this.h()},h(){l(a,"for","name"),l(w,"id","name"),l(w,"class","base-input"),l(w,"name","name"),l(w,"type","text"),l(w,"placeholder","Name"),l(r,"class","grid grid-flow-row gap-2"),l(G,"for","mod_reference"),l(S,"id","mod_reference"),l(S,"class","base-input"),l(S,"name","mod_reference"),l(S,"type","text"),l(S,"placeholder","Mod Reference"),S.readOnly=n[1],l(m,"class","grid grid-flow-row gap-2"),l(J,"for","short_description"),l(U,"id","short_description"),l(U,"class","base-input"),l(U,"name","short_description"),l(U,"type","text"),l(U,"placeholder","Short Description"),l(L,"class","grid grid-flow-row gap-2"),l(K,"for","full_description"),l(D,"class","base-input"),l(D,"id","full_description"),l(D,"name","full_description"),l(D,"placeholder","Full Description"),l(D,"rows","10"),l(T,"class","grid grid-flow-row gap-2 auto-rows-max"),l(N,"class","grid grid-flow-row gap-2 auto-rows-max"),l(j,"class","grid gap-6 split svelte-1ks9yo5"),l(Q,"for","logo"),l(k,"id","logo"),l(k,"class","base-input"),l(k,"name","logo"),l(k,"type","file"),l(k,"accept","image/png,image/jpeg,image/gif"),l(k,"placeholder","Logo"),l(y,"class","grid grid-flow-row gap-2"),l(W,"for","source_url"),l(z,"id","source_url"),l(z,"class","base-input"),l(z,"name","source_url"),l(z,"type","text"),l(z,"placeholder","Source URL"),l(A,"class","grid grid-flow-row gap-2"),l(X,"type","submit"),X.value=n[0],l(X,"class","px-4 py-2 rounded text-base bg-blue-500 cursor-pointer"),l(t,"class","grid grid-flow-row gap-6")},m(i,p){O(i,e,p),s(e,t),s(t,r),s(r,a),s(a,o),s(r,H),s(r,w),s(r,Z),ne(E,r,null),s(t,q),s(t,m),s(m,G),s(G,$e),s(m,be),s(m,S),s(m,we),ne(R,m,null),s(t,Ee),s(t,L),s(L,J),s(J,Se),s(L,Le),s(L,U),s(L,Te),ne(B,L,null),s(t,ye),s(t,j),s(j,T),s(T,K),s(K,Ae),s(T,Ie),s(T,D),s(T,De),ne(x,T,null),s(j,Ne),s(j,N),s(N,de),s(de,ke),s(N,Ve),v.block.m(N,v.anchor=null),v.mount=()=>N,v.anchor=null,s(t,Pe),s(t,y),s(y,Q),s(Q,Me),s(y,Re),s(y,k),s(y,Ue),ne(F,y,null),s(t,Be),s(t,A),s(A,W),s(W,je),s(A,xe),s(A,z),s(A,Fe),ne(C,A,null),s(t,ze),s(t,fe),s(fe,X),Y=!0,Ce||(Oe=nt(n[3].call(null,e)),Ce=!0)},p(i,[p]){n=i;const _={};p&1280&&(_.$$scope={dirty:p,ctx:n}),E.$set(_),(!Y||p&2)&&(S.readOnly=n[1]);const V={};p&1280&&(V.$$scope={dirty:p,ctx:n}),R.$set(V);const me={};p&1280&&(me.$$scope={dirty:p,ctx:n}),B.$set(me);const P={};p&1280&&(P.$$scope={dirty:p,ctx:n}),x.$set(P),v.ctx=n,p&4&&he!==(he=We(n[2]))&&Qe(he,v)||ot(v,n,p);const pe={};p&1280&&(pe.$$scope={dirty:p,ctx:n}),F.$set(pe);const M={};p&1280&&(M.$$scope={dirty:p,ctx:n}),C.$set(M),(!Y||p&1)&&(X.value=n[0])},i(i){Y||(oe(E.$$.fragment,i),oe(R.$$.fragment,i),oe(B.$$.fragment,i),oe(x.$$.fragment,i),oe(F.$$.fragment,i),oe(C.$$.fragment,i),Y=!0)},o(i){ie(E.$$.fragment,i),ie(R.$$.fragment,i),ie(B.$$.fragment,i),ie(x.$$.fragment,i),ie(F.$$.fragment,i),ie(C.$$.fragment,i),Y=!1},d(i){i&&c(e),ce(E),ce(R),ce(B),ce(x),v.block.d(),v.token=null,v=null,ce(F),ce(C),Ce=!1,Oe()}}}function St(n,e,t){let r,a,{onSubmit:o}=e,{initialValues:H=void 0}=e,{submitText:w="Create"}=e,{editing:Z=!1}=e;const{form:E,data:q}=it({initialValues:H,extend:[ct,ut],validateSchema:Ye,onSubmit:m=>o(ft(m,Ye))});return dt(n,q,m=>t(7,a=m)),n.$$set=m=>{"onSubmit"in m&&t(5,o=m.onSubmit),"initialValues"in m&&t(6,H=m.initialValues),"submitText"in m&&t(0,w=m.submitText),"editing"in m&&t(1,Z=m.editing)},n.$$.update=()=>{n.$$.dirty&128&&t(2,r=a.full_description||"")},[w,Z,r,E,q,o,H,a]}class At extends st{constructor(e){super();lt(this,e,St,Et,rt,{onSubmit:5,initialValues:6,submitText:0,editing:1})}}export{At as M};
//# sourceMappingURL=ModForm-b2319bd6.js.map