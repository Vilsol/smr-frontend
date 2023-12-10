import{S as zs,i as js,s as Zs,d as X,a7 as fs,U as ps,v as Ws,ak as ms,a1 as gs,a2 as Qs,a0 as Xs,e as c,W as k,b,J as It,g as u,h,X as _,j as m,k as x,L as Rt,M as ee,m as f,N as g,a5 as M,am as _s,n as ut,Q as n,O as Mt,an as Te,Z as vt,ab as Gs,Y as I,ay as Ns,r as Y,p as hs,t as ct,q as ds,a8 as Hs,R as Ft,V as Js,a6 as Vs,u as yt,x as Ys,ao as vs,l as Ks,az as tn,a9 as en,aa as sn}from"./vendor.c64ec7d3.js";import{o as As,s as Ot,n as nn,e as an,f as ln,V as Vt,c as $s,v as bs,r as xs}from"./forms.2028c45b.js";import{t as ws}from"./forms.f5d9049e.js";import{m as Ke}from"./markdown.18bacfe5.js";import{V as Es,T as ie}from"./graphql.80ff4abf.js";const Ss=/^(<=|<|>|>=|\^)?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,on=As({targetName:Ot(),link:Ot().url()}),Ye=As({version:Ot().regex(Ss),satisfactory_version:nn(),bootstrap_version:Ot().regex(Ss).optional(),stability:Ot(),link:Ot().url(),targets:an(on).superRefine((t,e)=>{for(let s=0;s<t.length;s+=1)t.findIndex(o=>o.targetName==t[s].targetName)!==s&&e.addIssue({code:ln.custom,message:"Targets must be unique",path:[s,"targetName"]})}),changelog:Ot(),date:Ot(),engine_version:Ot()});const{console:ys}=Xs,p="src/lib/components/sml-versions/SMLVersionForm.svelte";function ks(t,e,s){const o=t.slice();return o[25]=e[s],o[26]=e,o[27]=s,o}function Ts(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,58,8,1774)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Ts.name,type:"slot",source:'(48:6) <ValidationMessage for=\\"version\\" let:messages={message}>',ctx:t}),i}function Ps(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,68,8,2190)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Ps.name,type:"slot",source:'(58:6) <ValidationMessage for=\\"satisfactory_version\\" let:messages={message}>',ctx:t}),i}function ts(t){let e,s,o,i,r=t[4]("version")+"",a,l,G,F,S,P,L,R,O;P=new Vt({props:{for:"bootstrap_version",$$slots:{default:[Ls,({messages:T})=>({24:T}),({messages:T})=>T?16777216:0]},$$scope:{ctx:t}},$$inline:!0});const w={c:function(){e=c("div"),s=c("label"),o=c("span"),i=k("Bootstrap "),a=k(r),l=k(" *"),G=b(),F=c("input"),S=b(),It(P.$$.fragment),this.h()},l:function(y){e=u(y,"DIV",{class:!0});var N=h(e);s=u(N,"LABEL",{class:!0});var q=h(s);o=u(q,"SPAN",{});var K=h(o);i=_(K,"Bootstrap "),a=_(K,r),l=_(K," *"),K.forEach(m),G=x(q),F=u(q,"INPUT",{type:!0,class:!0}),q.forEach(m),S=x(N),Rt(P.$$.fragment,N),N.forEach(m),this.h()},h:function(){f(o,p,75,10,2454),g(F,"type","text"),F.required=!0,g(F,"class","input p-2"),f(F,p,76,10,2505),g(s,"class","label"),f(s,p,74,8,2422),g(e,"class","grid grid-flow-row gap-2"),f(e,p,73,6,2375)},m:function(y,N){ut(y,e,N),n(e,s),n(s,o),n(o,i),n(o,a),n(o,l),n(s,G),n(s,F),M(F,t[2].bootstrap_version),n(e,S),Mt(P,e,null),L=!0,R||(O=vt(F,"input",t[13]),R=!0)},p:function(y,N){(!L||N&16)&&r!==(r=y[4]("version")+"")&&I(a,r),N&4&&F.value!==y[2].bootstrap_version&&M(F,y[2].bootstrap_version);const q={};N&553648128&&(q.$$scope={dirty:N,ctx:y}),P.$set(q)},i:function(y){L||(Y(P.$$.fragment,y),L=!0)},o:function(y){ct(P.$$.fragment,y),L=!1},d:function(y){y&&m(e),Ft(P),R=!1,O()}};return X("SvelteRegisterBlock",{block:w,id:ts.name,type:"if",source:"(63:4) {#if $data.bootstrap_version !== undefined && $data.bootstrap_version !== null}",ctx:t}),w}function Ls(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,79,10,2693)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Ls.name,type:"slot",source:'(69:8) <ValidationMessage for=\\"bootstrap_version\\" let:messages={message}>',ctx:t}),i}function Bs(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,94,8,3224)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Bs.name,type:"slot",source:'(84:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:t}),i}function Is(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,105,10,3690)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Is.name,type:"slot",source:'(95:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:t}),i}function Rs(t){const e={c:yt,l:yt,m:yt,p:yt,d:yt};return X("SvelteRegisterBlock",{block:e,id:Rs.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Ms(t){let e,s,o=t[28]+"";const i={c:function(){e=c("div"),s=new en(!1),this.h()},l:function(a){e=u(a,"DIV",{class:!0});var l=h(e);s=sn(l,!1),l.forEach(m),this.h()},h:function(){s.a=null,g(e,"class","markdown-content right s-N2rIGQHR_ehr"),f(e,p,112,10,3985)},m:function(a,l){ut(a,e,l),s.m(o,e)},p:function(a,l){l&8&&o!==(o=a[28]+"")&&s.p(o)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Ms.name,type:"then",source:'(101:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:t}),i}function Fs(t){const e={c:yt,l:yt,m:yt,p:yt,d:yt};return X("SvelteRegisterBlock",{block:e,id:Fs.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Os(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,140,12,5063)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Os.name,type:"slot",source:'(130:10) <ValidationMessage for=\\"targets.{i}.link\\" let:messages={message}>',ctx:t}),i}function es(t){let e,s,o,i="Platform",r,a,l,G=t[4]("arch.windows-client")+"",F,S,P=t[4]("arch.windows-server")+"",L,R,O=t[4]("arch.linux-server")+"",w,T,y,N,q="URL",K,z,Z,tt,et,st,ft=t[4]("add")+"",Q,H,C,lt=t[4]("remove")+"",$t,v,j,W,ot;function ce(){t[16].call(a,t[26],t[27])}function pt(){t[17].call(z,t[26],t[27])}tt=new Vt({props:{for:"targets."+t[27]+".link",$$slots:{default:[Os,({messages:nt})=>({24:nt}),({messages:nt})=>nt?16777216:0]},$$scope:{ctx:t}},$$inline:!0});function me(){return t[18](t[27])}const rt={c:function(){e=c("div"),s=c("label"),o=c("span"),o.textContent=i,r=b(),a=c("select"),l=c("option"),F=k(G),S=c("option"),L=k(P),R=c("option"),w=k(O),T=b(),y=c("label"),N=c("span"),N.textContent=q,K=b(),z=c("textarea"),Z=b(),It(tt.$$.fragment),et=b(),st=c("button"),Q=k(ft),H=b(),C=c("button"),$t=k(lt),this.h()},l:function(J){e=u(J,"DIV",{class:!0});var E=h(e);s=u(E,"LABEL",{class:!0});var bt=h(s);o=u(bt,"SPAN",{"data-svelte-h":!0}),ee(o)!=="svelte-b3aiat"&&(o.textContent=i),r=x(bt),a=u(bt,"SELECT",{class:!0});var at=h(a);l=u(at,"OPTION",{});var mt=h(l);F=_(mt,G),mt.forEach(m),S=u(at,"OPTION",{});var gt=h(S);L=_(gt,P),gt.forEach(m),R=u(at,"OPTION",{});var kt=h(R);w=_(kt,O),kt.forEach(m),at.forEach(m),bt.forEach(m),T=x(E),y=u(E,"LABEL",{class:!0});var _t=h(y);N=u(_t,"SPAN",{"data-svelte-h":!0}),ee(N)!=="svelte-4s1g5x"&&(N.textContent=q),K=x(_t),z=u(_t,"TEXTAREA",{class:!0,name:!0,placeholder:!0,style:!0}),h(z).forEach(m),_t.forEach(m),Z=x(E),Rt(tt.$$.fragment,E),et=x(E),st=u(E,"BUTTON",{class:!0});var jt=h(st);Q=_(jt,ft),jt.forEach(m),H=x(E),C=u(E,"BUTTON",{class:!0});var se=h(C);$t=_(se,lt),se.forEach(m),E.forEach(m),this.h()},h:function(){f(o,p,122,12,4289),l.__value=ie.Windows,M(l,l.__value),f(l,p,124,14,4392),S.__value=ie.WindowsServer,M(S,S.__value),f(S,p,125,14,4478),R.__value=ie.LinuxServer,M(R,R.__value),f(R,p,126,14,4570),g(a,"class","select"),t[25].targetName===void 0&&_s(ce),f(a,p,123,12,4323),g(s,"class","label"),f(s,p,121,10,4255),f(N,p,131,12,4730),g(z,"class","textarea p-2"),g(z,"name","data_link.link"),g(z,"placeholder","URL"),Ks(z,"min-width","850px"),f(z,p,132,12,4759),g(y,"class","label"),f(y,p,130,10,4696),g(st,"class","btn variant-ghost-primary"),f(st,p,143,10,5161),g(C,"class","btn variant-ghost-primary"),C.disabled=v=t[2].targets.length==1,f(C,p,144,10,5255),g(e,"class","gap-6 auto-rows-max"),f(e,p,120,8,4211)},m:function(J,E){ut(J,e,E),n(e,s),n(s,o),n(s,r),n(s,a),n(a,l),n(l,F),n(a,S),n(S,L),n(a,R),n(R,w),Te(a,t[25].targetName,!0),n(e,T),n(e,y),n(y,N),n(y,K),n(y,z),M(z,t[25].link),n(e,Z),Mt(tt,e,null),n(e,et),n(e,st),n(st,Q),n(e,H),n(e,C),n(C,$t),j=!0,W||(ot=[vt(a,"change",ce),vt(z,"input",pt),vt(st,"click",t[7],!1,!1,!1,!1),vt(C,"click",me,!1,!1,!1,!1)],W=!0)},p:function(J,E){t=J,(!j||E&16)&&G!==(G=t[4]("arch.windows-client")+"")&&I(F,G),(!j||E&16)&&P!==(P=t[4]("arch.windows-server")+"")&&I(L,P),(!j||E&16)&&O!==(O=t[4]("arch.linux-server")+"")&&I(w,O),E&4&&Te(a,t[25].targetName),E&4&&M(z,t[25].link);const bt={};E&553648128&&(bt.$$scope={dirty:E,ctx:t}),tt.$set(bt),(!j||E&16)&&ft!==(ft=t[4]("add")+"")&&I(Q,ft),(!j||E&16)&&lt!==(lt=t[4]("remove")+"")&&I($t,lt),(!j||E&4&&v!==(v=t[2].targets.length==1))&&tn(C,"disabled",v)},i:function(J){j||(Y(tt.$$.fragment,J),j=!0)},o:function(J){ct(tt.$$.fragment,J),j=!1},d:function(J){J&&m(e),Ft(tt),W=!1,Vs(ot)}};return X("SvelteRegisterBlock",{block:rt,id:es.name,type:"each",source:"(110:6) {#each $data.targets as target, i}",ctx:t}),rt}function Cs(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,154,8,5660)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Cs.name,type:"slot",source:'(144:6) <ValidationMessage for=\\"link\\" let:messages={message}>',ctx:t}),i}function Ds(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,164,8,6033)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Ds.name,type:"slot",source:'(154:6) <ValidationMessage for=\\"date\\" let:messages={message}>',ctx:t}),i}function Us(t){let e,s=(t[24]||"")+"",o;const i={c:function(){e=c("span"),o=k(s),this.h()},l:function(a){e=u(a,"SPAN",{class:!0});var l=h(e);o=_(l,s),l.forEach(m),this.h()},h:function(){g(e,"class","validation-message"),f(e,p,174,8,6419)},m:function(a,l){ut(a,e,l),n(e,o)},p:function(a,l){l&16777216&&s!==(s=(a[24]||"")+"")&&I(o,s)},d:function(a){a&&m(e)}};return X("SvelteRegisterBlock",{block:i,id:Us.name,type:"slot",source:'(164:6) <ValidationMessage for=\\"engine_version\\" let:messages={message}>',ctx:t}),i}function ss(t){let e,s,o,i,r,a=t[4]("version")+"",l,G,F,S,P,L,R,O,w,T,y,N=t[4]("version")+"",q,K,z,Z,tt,et,st,ft,Q,H,C,lt=t[4]("stability")+"",$t,v,j,W,ot,ce="Release",pt,me="Alpha",rt,nt="Beta",J,E,bt,at,mt,gt,kt,_t=t[4]("changelog")+"",jt,se,Pe,xt,Le,Ct,Be,Nt,Zt,ue=t[4]("preview")+"",ge,Ie,Re,he,Me,Wt,ns="Targets:",Fe,ht,de,At,ne,fe=t[4]("link")+"",ve,Oe,wt,Ce,Dt,De,Tt,Pt,ae,pe=t[4]("date-and-time")+"",$e,Ue,Et,qe,Ut,ze,Lt,Bt,Qt,as="Engine version",je,St,Ze,qt,We,le,zt,be,dt,Qe,ls;L=new Vt({props:{for:"version",$$slots:{default:[Ts,({messages:$})=>({24:$}),({messages:$})=>$?16777216:0]},$$scope:{ctx:t}},$$inline:!0}),et=new Vt({props:{for:"satisfactory_version",$$slots:{default:[Ps,({messages:$})=>({24:$}),({messages:$})=>$?16777216:0]},$$scope:{ctx:t}},$$inline:!0});let D=t[2].bootstrap_version!==void 0&&t[2].bootstrap_version!==null&&ts(t);E=new Vt({props:{for:"stability",$$slots:{default:[Bs,({messages:$})=>({24:$}),({messages:$})=>$?16777216:0]},$$scope:{ctx:t}},$$inline:!0}),Ct=new Vt({props:{for:"changelog",$$slots:{default:[Is,({messages:$})=>({24:$}),({messages:$})=>$?16777216:0]},$$scope:{ctx:t}},$$inline:!0});let it={ctx:t,current:null,token:null,hasCatch:!1,pending:Fs,then:Ms,catch:Rs,value:28};fs(he=Ke(t[3]),it);let Xt=ps(t[2].targets),B=[];for(let $=0;$<Xt.length;$+=1)B[$]=es(ks(t,Xt,$));const qs=$=>ct(B[$],1,1,()=>{B[$]=null});Dt=new Vt({props:{for:"link",$$slots:{default:[Cs,({messages:$})=>({24:$}),({messages:$})=>$?16777216:0]},$$scope:{ctx:t}},$$inline:!0}),Ut=new Vt({props:{for:"date",$$slots:{default:[Ds,({messages:$})=>({24:$}),({messages:$})=>$?16777216:0]},$$scope:{ctx:t}},$$inline:!0}),qt=new Vt({props:{for:"engine_version",$$slots:{default:[Us,({messages:$})=>({24:$}),({messages:$})=>$?16777216:0]},$$scope:{ctx:t}},$$inline:!0});const os={c:function(){e=c("form"),s=c("div"),o=c("div"),i=c("label"),r=c("span"),l=k(a),G=k(" *"),F=b(),S=c("input"),P=b(),It(L.$$.fragment),R=b(),O=c("div"),w=c("label"),T=c("span"),y=k("Satisfactory "),q=k(N),K=k(" *"),z=b(),Z=c("input"),tt=b(),It(et.$$.fragment),st=b(),D&&D.c(),ft=b(),Q=c("div"),H=c("label"),C=c("span"),$t=k(lt),v=k(" *"),j=b(),W=c("select"),ot=c("option"),ot.textContent=ce,pt=c("option"),pt.textContent=me,rt=c("option"),rt.textContent=nt,J=b(),It(E.$$.fragment),bt=b(),at=c("div"),mt=c("div"),gt=c("label"),kt=c("span"),jt=k(_t),se=k(" *"),Pe=b(),xt=c("textarea"),Le=b(),It(Ct.$$.fragment),Be=b(),Nt=c("div"),Zt=c("span"),ge=k(ue),Ie=k(":"),Re=b(),it.block.c(),Me=b(),Wt=c("span"),Wt.textContent=ns,Fe=b(),ht=c("div");for(let V=0;V<B.length;V+=1)B[V].c();de=b(),At=c("label"),ne=c("span"),ve=k(fe),Oe=b(),wt=c("input"),Ce=b(),It(Dt.$$.fragment),De=b(),Tt=c("div"),Pt=c("label"),ae=c("span"),$e=k(pe),Ue=b(),Et=c("input"),qe=b(),It(Ut.$$.fragment),ze=b(),Lt=c("div"),Bt=c("label"),Qt=c("span"),Qt.textContent=as,je=b(),St=c("input"),Ze=b(),It(qt.$$.fragment),We=b(),le=c("div"),zt=c("button"),be=k(t[1]),this.h()},l:function(V){e=u(V,"FORM",{});var d=h(e);s=u(d,"DIV",{class:!0});var A=h(s);o=u(A,"DIV",{class:!0});var Gt=h(o);i=u(Gt,"LABEL",{class:!0});var Ht=h(i);r=u(Ht,"SPAN",{});var oe=h(r);l=_(oe,a),G=_(oe," *"),oe.forEach(m),F=x(Ht),S=u(Ht,"INPUT",{type:!0,class:!0}),Ht.forEach(m),P=x(Gt),Rt(L.$$.fragment,Gt),Gt.forEach(m),R=x(A),O=u(A,"DIV",{class:!0});var Jt=h(O);w=u(Jt,"LABEL",{class:!0});var Yt=h(w);T=u(Yt,"SPAN",{});var Kt=h(T);y=_(Kt,"Satisfactory "),q=_(Kt,N),K=_(Kt," *"),Kt.forEach(m),z=x(Yt),Z=u(Yt,"INPUT",{type:!0,class:!0}),Yt.forEach(m),tt=x(Jt),Rt(et.$$.fragment,Jt),Jt.forEach(m),st=x(A),D&&D.l(A),ft=x(A),Q=u(A,"DIV",{class:!0});var U=h(Q);H=u(U,"LABEL",{class:!0});var te=h(H);C=u(te,"SPAN",{});var Xe=h(C);$t=_(Xe,lt),v=_(Xe," *"),Xe.forEach(m),j=x(te),W=u(te,"SELECT",{class:!0});var xe=h(W);ot=u(xe,"OPTION",{"data-svelte-h":!0}),ee(ot)!=="svelte-zdik1o"&&(ot.textContent=ce),pt=u(xe,"OPTION",{"data-svelte-h":!0}),ee(pt)!=="svelte-4emh7a"&&(pt.textContent=me),rt=u(xe,"OPTION",{"data-svelte-h":!0}),ee(rt)!=="svelte-14mt04m"&&(rt.textContent=nt),xe.forEach(m),te.forEach(m),J=x(U),Rt(E.$$.fragment,U),U.forEach(m),bt=x(A),at=u(A,"DIV",{class:!0});var we=h(at);mt=u(we,"DIV",{class:!0});var Ee=h(mt);gt=u(Ee,"LABEL",{class:!0});var Se=h(gt);kt=u(Se,"SPAN",{});var Ge=h(kt);jt=_(Ge,_t),se=_(Ge," *"),Ge.forEach(m),Pe=x(Se),xt=u(Se,"TEXTAREA",{class:!0,rows:!0}),h(xt).forEach(m),Se.forEach(m),Le=x(Ee),Rt(Ct.$$.fragment,Ee),Ee.forEach(m),Be=x(we),Nt=u(we,"DIV",{class:!0});var ye=h(Nt);Zt=u(ye,"SPAN",{});var He=h(Zt);ge=_(He,ue),Ie=_(He,":"),He.forEach(m),Re=x(ye),it.block.l(ye),ye.forEach(m),we.forEach(m),Me=x(A),Wt=u(A,"SPAN",{"data-svelte-h":!0}),ee(Wt)!=="svelte-1k801hy"&&(Wt.textContent=ns),Fe=x(A),ht=u(A,"DIV",{class:!0});var re=h(ht);for(let Je=0;Je<B.length;Je+=1)B[Je].l(re);de=x(re),At=u(re,"LABEL",{class:!0});var ke=h(At);ne=u(ke,"SPAN",{});var rs=h(ne);ve=_(rs,fe),rs.forEach(m),Oe=x(ke),wt=u(ke,"INPUT",{type:!0,class:!0}),ke.forEach(m),Ce=x(re),Rt(Dt.$$.fragment,re),re.forEach(m),De=x(A),Tt=u(A,"DIV",{class:!0});var _e=h(Tt);Pt=u(_e,"LABEL",{class:!0});var Ne=h(Pt);ae=u(Ne,"SPAN",{});var is=h(ae);$e=_(is,pe),is.forEach(m),Ue=x(Ne),Et=u(Ne,"INPUT",{type:!0,class:!0}),Ne.forEach(m),qe=x(_e),Rt(Ut.$$.fragment,_e),_e.forEach(m),ze=x(A),Lt=u(A,"DIV",{class:!0});var Ve=h(Lt);Bt=u(Ve,"LABEL",{class:!0});var Ae=h(Bt);Qt=u(Ae,"SPAN",{"data-svelte-h":!0}),ee(Qt)!=="svelte-1iyvkp4"&&(Qt.textContent=as),je=x(Ae),St=u(Ae,"INPUT",{type:!0,class:!0}),Ae.forEach(m),Ze=x(Ve),Rt(qt.$$.fragment,Ve),Ve.forEach(m),We=x(A),le=u(A,"DIV",{});var cs=h(le);zt=u(cs,"BUTTON",{class:!0,type:!0});var us=h(zt);be=_(us,t[1]),us.forEach(m),cs.forEach(m),A.forEach(m),d.forEach(m),this.h()},h:function(){f(r,p,54,8,1573),g(S,"type","text"),S.required=!0,g(S,"class","input p-2"),f(S,p,55,8,1612),g(i,"class","label"),f(i,p,53,6,1543),g(o,"class","grid grid-flow-row gap-2"),f(o,p,52,4,1498),f(T,p,64,8,1948),g(Z,"type","number"),Z.required=!0,g(Z,"class","input p-2"),f(Z,p,65,8,2e3),g(w,"class","label"),f(w,p,63,6,1918),g(O,"class","grid grid-flow-row gap-2"),f(O,p,62,4,1873),f(C,p,86,8,2881),ot.__value="release",M(ot,ot.__value),f(ot,p,88,10,2985),pt.__value="alpha",M(pt,pt.__value),f(pt,p,89,10,3036),rt.__value="beta",M(rt,rt.__value),f(rt,p,90,10,3083),g(W,"class","select"),t[2].stability===void 0&&_s(()=>t[14].call(W)),f(W,p,87,8,2922),g(H,"class","label"),f(H,p,85,6,2851),g(Q,"class","grid grid-flow-row gap-2"),f(Q,p,84,4,2806),f(kt,p,101,10,3453),g(xt,"class","vertical-textarea textarea p-2"),xt.required=!0,g(xt,"rows",10),f(xt,p,102,10,3496),g(gt,"class","label"),f(gt,p,100,8,3421),g(mt,"class","grid grid-flow-row gap-2 auto-rows-max"),f(mt,p,99,6,3360),f(Zt,p,109,8,3855),g(Nt,"class","grid grid-flow-row gap-2 auto-rows-max"),f(Nt,p,108,6,3794),g(at,"class","grid gap-6 split s-N2rIGQHR_ehr"),f(at,p,98,4,3323),f(Wt,p,117,4,4097),f(ne,p,150,8,5470),g(wt,"type","text"),wt.required=!0,g(wt,"class","input p-2"),f(wt,p,151,8,5504),g(At,"class","label"),f(At,p,149,6,5440),g(ht,"class","grid grid-flow-row gap-2"),f(ht,p,118,4,4123),f(ae,p,160,8,5834),g(Et,"type","text"),Et.required=!0,g(Et,"class","input p-2"),f(Et,p,161,8,5877),g(Pt,"class","label"),f(Pt,p,159,6,5804),g(Tt,"class","grid grid-flow-row gap-2"),f(Tt,p,158,4,5759),f(Qt,p,170,8,6207),g(St,"type","text"),St.required=!0,g(St,"class","input p-2"),f(St,p,171,8,6243),g(Bt,"class","label"),f(Bt,p,169,6,6177),g(Lt,"class","grid grid-flow-row gap-2"),f(Lt,p,168,4,6132),g(zt,"class","btn variant-ghost-primary"),g(zt,"type","submit"),f(zt,p,179,6,6530),f(le,p,178,4,6518),g(s,"class","grid grid-flow-row gap-6"),f(s,p,51,2,1455),f(e,p,50,0,1437)},m:function(V,d){ut(V,e,d),n(e,s),n(s,o),n(o,i),n(i,r),n(r,l),n(r,G),n(i,F),n(i,S),M(S,t[2].version),n(o,P),Mt(L,o,null),n(s,R),n(s,O),n(O,w),n(w,T),n(T,y),n(T,q),n(T,K),n(w,z),n(w,Z),M(Z,t[2].satisfactory_version),n(O,tt),Mt(et,O,null),n(s,st),D&&D.m(s,null),n(s,ft),n(s,Q),n(Q,H),n(H,C),n(C,$t),n(C,v),n(H,j),n(H,W),n(W,ot),n(W,pt),n(W,rt),Te(W,t[2].stability,!0),n(Q,J),Mt(E,Q,null),n(s,bt),n(s,at),n(at,mt),n(mt,gt),n(gt,kt),n(kt,jt),n(kt,se),n(gt,Pe),n(gt,xt),M(xt,t[2].changelog),n(mt,Le),Mt(Ct,mt,null),n(at,Be),n(at,Nt),n(Nt,Zt),n(Zt,ge),n(Zt,Ie),n(Nt,Re),it.block.m(Nt,it.anchor=null),it.mount=()=>Nt,it.anchor=null,n(s,Me),n(s,Wt),n(s,Fe),n(s,ht);for(let A=0;A<B.length;A+=1)B[A]&&B[A].m(ht,null);n(ht,de),n(ht,At),n(At,ne),n(ne,ve),n(At,Oe),n(At,wt),M(wt,t[2].link),n(ht,Ce),Mt(Dt,ht,null),n(s,De),n(s,Tt),n(Tt,Pt),n(Pt,ae),n(ae,$e),n(Pt,Ue),n(Pt,Et),M(Et,t[2].date),n(Tt,qe),Mt(Ut,Tt,null),n(s,ze),n(s,Lt),n(Lt,Bt),n(Bt,Qt),n(Bt,je),n(Bt,St),M(St,t[2].engine_version),n(Lt,Ze),Mt(qt,Lt,null),n(s,We),n(s,le),n(le,zt),n(zt,be),dt=!0,Qe||(ls=[vt(S,"input",t[11]),vt(Z,"input",t[12]),vt(W,"change",t[14]),vt(xt,"input",t[15]),vt(wt,"input",t[19]),vt(Et,"input",t[20]),vt(St,"input",t[21]),Gs(t[5].call(null,e))],Qe=!0)},p:function(V,[d]){t=V,(!dt||d&16)&&a!==(a=t[4]("version")+"")&&I(l,a),d&4&&S.value!==t[2].version&&M(S,t[2].version);const A={};d&553648128&&(A.$$scope={dirty:d,ctx:t}),L.$set(A),(!dt||d&16)&&N!==(N=t[4]("version")+"")&&I(q,N),d&4&&Ns(Z.value)!==t[2].satisfactory_version&&M(Z,t[2].satisfactory_version);const Gt={};d&553648128&&(Gt.$$scope={dirty:d,ctx:t}),et.$set(Gt),t[2].bootstrap_version!==void 0&&t[2].bootstrap_version!==null?D?(D.p(t,d),d&4&&Y(D,1)):(D=ts(t),D.c(),Y(D,1),D.m(s,ft)):D&&(hs(),ct(D,1,1,()=>{D=null}),ds()),(!dt||d&16)&&lt!==(lt=t[4]("stability")+"")&&I($t,lt),d&4&&Te(W,t[2].stability);const Ht={};d&553648128&&(Ht.$$scope={dirty:d,ctx:t}),E.$set(Ht),(!dt||d&16)&&_t!==(_t=t[4]("changelog")+"")&&I(jt,_t),d&4&&M(xt,t[2].changelog);const oe={};if(d&553648128&&(oe.$$scope={dirty:d,ctx:t}),Ct.$set(oe),(!dt||d&16)&&ue!==(ue=t[4]("preview")+"")&&I(ge,ue),it.ctx=t,d&8&&he!==(he=Ke(t[3]))&&fs(he,it)||Hs(it,t,d),d&16777620){Xt=ps(t[2].targets);let U;for(U=0;U<Xt.length;U+=1){const te=ks(t,Xt,U);B[U]?(B[U].p(te,d),Y(B[U],1)):(B[U]=es(te),B[U].c(),Y(B[U],1),B[U].m(ht,de))}for(hs(),U=Xt.length;U<B.length;U+=1)qs(U);ds()}(!dt||d&16)&&fe!==(fe=t[4]("link")+"")&&I(ve,fe),d&4&&wt.value!==t[2].link&&M(wt,t[2].link);const Jt={};d&553648128&&(Jt.$$scope={dirty:d,ctx:t}),Dt.$set(Jt),(!dt||d&16)&&pe!==(pe=t[4]("date-and-time")+"")&&I($e,pe),d&4&&Et.value!==t[2].date&&M(Et,t[2].date);const Yt={};d&553648128&&(Yt.$$scope={dirty:d,ctx:t}),Ut.$set(Yt),d&4&&St.value!==t[2].engine_version&&M(St,t[2].engine_version);const Kt={};d&553648128&&(Kt.$$scope={dirty:d,ctx:t}),qt.$set(Kt),(!dt||d&2)&&I(be,t[1])},i:function(V){if(!dt){Y(L.$$.fragment,V),Y(et.$$.fragment,V),Y(D),Y(E.$$.fragment,V),Y(Ct.$$.fragment,V);for(let d=0;d<Xt.length;d+=1)Y(B[d]);Y(Dt.$$.fragment,V),Y(Ut.$$.fragment,V),Y(qt.$$.fragment,V),dt=!0}},o:function(V){ct(L.$$.fragment,V),ct(et.$$.fragment,V),ct(D),ct(E.$$.fragment,V),ct(Ct.$$.fragment,V),B=B.filter(Boolean);for(let d=0;d<B.length;d+=1)ct(B[d]);ct(Dt.$$.fragment,V),ct(Ut.$$.fragment,V),ct(qt.$$.fragment,V),dt=!1},d:function(V){V&&m(e),Ft(L),Ft(et),D&&D.d(),Ft(E),Ft(Ct),it.block.d(),it.token=null,it=null,Js(B,V),Ft(Dt),Ft(Ut),Ft(qt),Qe=!1,Vs(ls)}};return X("SvelteRegisterBlock",{block:os,id:ss.name,type:"component",source:"",ctx:t}),os}function rn(t,e,s){let o,i,r,a=yt,l=()=>(a(),a=Ys(S,v=>s(4,r=v)),S);t.$$.on_destroy.push(()=>a());let{$$slots:G={},$$scope:F}=e;Ws("SMLVersionForm",G,[]);const{t:S}=ms();gs(S,"t"),l();let{onSubmit:P}=e,{initialValues:L={link:"",date:new Date().toISOString(),changelog:"",satisfactory_version:0,stability:Es.Alpha,version:"",targets:[{targetName:ie.Windows,link:""}],engine_version:""}}=e,{submitText:R=r("entry.create")}=e;const{form:O,data:w,addField:T,unsetField:y}=$s({initialValues:L,extend:[bs({schema:Ye}),xs],onSubmit:v=>(console.log("hello",v),P(ws(v,Ye)))});gs(w,"data"),Qs(t,w,v=>s(2,i=v));const N=()=>{T("targets",{targetName:ie.Windows,link:""})},q=v=>{y(`targets.${v}`)};t.$$.on_mount.push(function(){P===void 0&&!("onSubmit"in e||t.$$.bound[t.$$.props.onSubmit])&&ys.warn("<SMLVersionForm> was created without expected prop 'onSubmit'")});const K=["onSubmit","initialValues","submitText"];Object.keys(e).forEach(v=>{!~K.indexOf(v)&&v.slice(0,2)!=="$$"&&v!=="slot"&&ys.warn(`<SMLVersionForm> was created with unknown prop '${v}'`)});function z(){i.version=this.value,w.set(i)}function Z(){i.satisfactory_version=Ns(this.value),w.set(i)}function tt(){i.bootstrap_version=this.value,w.set(i)}function et(){i.stability=vs(this),w.set(i)}function st(){i.changelog=this.value,w.set(i)}function ft(v,j){v[j].targetName=vs(this),w.set(i)}function Q(v,j){v[j].link=this.value,w.set(i)}const H=v=>q(v);function C(){i.link=this.value,w.set(i)}function lt(){i.date=this.value,w.set(i)}function $t(){i.engine_version=this.value,w.set(i)}return t.$$set=v=>{"onSubmit"in v&&s(9,P=v.onSubmit),"initialValues"in v&&s(10,L=v.initialValues),"submitText"in v&&s(1,R=v.submitText)},t.$capture_state=()=>({createForm:$s,validator:bs,reporter:xs,ValidationMessage:Vt,trimNonSchema:ws,markdown:Ke,smlVersionSchema:Ye,TargetName:ie,VersionStabilities:Es,getTranslate:ms,t:S,onSubmit:P,initialValues:L,submitText:R,form:O,data:w,addField:T,unsetField:y,addTarget:N,removeTarget:q,preview:o,$data:i,$t:r}),t.$inject_state=v=>{"onSubmit"in v&&s(9,P=v.onSubmit),"initialValues"in v&&s(10,L=v.initialValues),"submitText"in v&&s(1,R=v.submitText),"preview"in v&&s(3,o=v.preview)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&4&&s(3,o=i.changelog||"")},[S,R,i,o,r,O,w,N,q,P,L,z,Z,tt,et,st,ft,Q,H,C,lt,$t]}class gn extends zs{constructor(e){super(e),js(this,e,rn,ss,Zs,{t:0,onSubmit:9,initialValues:10,submitText:1}),X("SvelteRegisterComponent",{component:this,tagName:"SMLVersionForm",options:e,id:ss.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{gn as S};
//# sourceMappingURL=SMLVersionForm.79ce6167.js.map
