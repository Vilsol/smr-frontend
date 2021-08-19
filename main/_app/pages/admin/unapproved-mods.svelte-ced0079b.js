import{S as e,i as t,s as a,e as s,j as r,c as o,a as n,m as c,d as l,b as i,f as d,o as u,x as f,u as h,v as p,k as m,l as g,n as v,w as $,$ as b,Z as D,at as E,_ as x,a0 as I,r as V,C as w,t as y,g as P,a1 as M,a6 as j,h as k,a8 as N,an as U,a7 as _}from"../../chunks/vendor-83c23bd8.js";import{j as O,k as T,l as q}from"../../chunks/graphql-71bf8d51.js";import{P as A}from"../../chunks/PageControls-c6eadfa6.js";import{b as L}from"../../chunks/paths-6758d194.js";function B(e,t,a){const s=e.slice();return s[12]=t[a],s}function C(e){let t,a,m;return a=new A({props:{totalPages:Math.ceil(e[1]/G),currentPage:e[3]}}),{c(){t=s("div"),r(a.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=n(t);c(a.$$.fragment,s),s.forEach(l),this.h()},h(){i(t,"class","mt-5 ml-auto flex justify-end")},m(e,s){d(e,t,s),u(a,t,null),m=!0},p(e,t){const s={};2&t&&(s.totalPages=Math.ceil(e[1]/G)),a.$set(s)},i(e){m||(f(a.$$.fragment,e),m=!0)},o(e){h(a.$$.fragment,e),m=!1},d(e){e&&l(t),p(a)}}}function R(e){let t,a,r,c,u,f,h,p,g,$,b,D,E=e[0].data.getUnapprovedMods.mods,x=[];for(let s=0;s<E.length;s+=1)x[s]=Z(B(e,E,s));return{c(){t=s("div"),a=s("div"),r=y("Mod"),c=m(),u=s("div"),f=y("Description"),h=m(),p=s("div"),g=y("Release Date"),$=m(),b=s("div"),D=m();for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var s=n(t);a=o(s,"DIV",{});var i=n(a);r=P(i,"Mod"),i.forEach(l),c=v(s),u=o(s,"DIV",{});var d=n(u);f=P(d,"Description"),d.forEach(l),h=v(s),p=o(s,"DIV",{});var m=n(p);g=P(m,"Release Date"),m.forEach(l),$=v(s),b=o(s,"DIV",{}),n(b).forEach(l),D=v(s);for(let t=0;t<x.length;t+=1)x[t].l(s);s.forEach(l),this.h()},h(){i(t,"class","grid grid-cols-6 itemList svelte-uwb2eg")},m(e,s){d(e,t,s),M(t,a),M(a,r),M(t,c),M(t,u),M(u,f),M(t,h),M(t,p),M(p,g),M(t,$),M(t,b),M(t,D);for(let a=0;a<x.length;a+=1)x[a].m(t,null)},p(e,a){if(49&a){let s;for(E=e[0].data.getUnapprovedMods.mods,s=0;s<E.length;s+=1){const r=B(e,E,s);x[s]?x[s].p(r,a):(x[s]=Z(r),x[s].c(),x[s].m(t,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=E.length}},d(e){e&&l(t),U(x,e)}}}function H(e){let t,a,r,c=e[0].error.message+"";return{c(){t=s("p"),a=y("Oh no... "),r=y(c)},l(e){t=o(e,"P",{});var s=n(t);a=P(s,"Oh no... "),r=P(s,c),s.forEach(l)},m(e,s){d(e,t,s),M(t,a),M(t,r)},p(e,t){1&t&&c!==(c=e[0].error.message+"")&&k(r,c)},d(e){e&&l(t)}}}function S(e){let t,a;return{c(){t=s("p"),a=y("Loading...")},l(e){t=o(e,"P",{});var s=n(t);a=P(s,"Loading..."),s.forEach(l)},m(e,s){d(e,t,s),M(t,a)},p:_,d(e){e&&l(t)}}}function Z(e){let t,a,r,c,u,f,h,p,g,$,b,D,E,x,I,V,w,U,_,O,T,q,A,B=e[12].name+"",C=e[12].short_description+"",R=e[12].created_at+"";function H(){return e[8](e[12])}function S(){return e[9](e[12])}return{c(){t=s("div"),a=s("div"),r=y(B),c=m(),u=s("div"),f=y(C),h=m(),p=s("div"),g=y(R),$=m(),b=s("div"),D=s("button"),E=y("Approve"),x=m(),I=s("button"),V=y("Deny"),w=m(),U=s("a"),_=y("View"),T=m(),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=n(t);a=o(s,"DIV",{class:!0});var i=n(a);r=P(i,B),i.forEach(l),c=v(s),u=o(s,"DIV",{class:!0});var d=n(u);f=P(d,C),d.forEach(l),h=v(s),p=o(s,"DIV",{class:!0});var m=n(p);g=P(m,R),m.forEach(l),$=v(s),b=o(s,"DIV",{class:!0});var y=n(b);D=o(y,"BUTTON",{class:!0});var M=n(D);E=P(M,"Approve"),M.forEach(l),x=v(y),I=o(y,"BUTTON",{class:!0});var j=n(I);V=P(j,"Deny"),j.forEach(l),w=v(y),U=o(y,"A",{href:!0,class:!0});var k=n(U);_=P(k,"View"),k.forEach(l),y.forEach(l),T=v(s),s.forEach(l),this.h()},h(){i(a,"class","svelte-uwb2eg"),i(u,"class","svelte-uwb2eg"),i(p,"class","svelte-uwb2eg"),i(D,"class","py-1 px-4 rounded text-base bg-green-600 text-center cursor-pointer"),i(I,"class","py-1 px-4 rounded text-base bg-red-600 text-center cursor-pointer"),i(U,"href",O=L+"/mod/"+e[12].id),i(U,"class","py-1 px-4 rounded text-base bg-blue-500 text-center cursor-pointer"),i(b,"class","grid grid-flow-col gap-4 svelte-uwb2eg"),i(t,"class","contents itemHeader svelte-uwb2eg")},m(e,s){d(e,t,s),M(t,a),M(a,r),M(t,c),M(t,u),M(u,f),M(t,h),M(t,p),M(p,g),M(t,$),M(t,b),M(b,D),M(D,E),M(b,x),M(b,I),M(I,V),M(b,w),M(b,U),M(U,_),M(t,T),q||(A=[j(D,"click",H),j(I,"click",S)],q=!0)},p(t,a){e=t,1&a&&B!==(B=e[12].name+"")&&k(r,B),1&a&&C!==(C=e[12].short_description+"")&&k(f,C),1&a&&R!==(R=e[12].created_at+"")&&k(g,R),1&a&&O!==(O=L+"/mod/"+e[12].id)&&i(U,"href",O)},d(e){e&&l(t),q=!1,N(A)}}}function z(e){let t,a,m;return a=new A({props:{totalPages:Math.ceil(e[1]/G),currentPage:e[3]}}),{c(){t=s("div"),r(a.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=n(t);c(a.$$.fragment,s),s.forEach(l),this.h()},h(){i(t,"class","mt-5 ml-auto flex justify-end")},m(e,s){d(e,t,s),u(a,t,null),m=!0},p(e,t){const s={};2&t&&(s.totalPages=Math.ceil(e[1]/G)),a.$set(s)},i(e){m||(f(a.$$.fragment,e),m=!0)},o(e){h(a.$$.fragment,e),m=!1},d(e){e&&l(t),p(a)}}}function F(e){let t,a,s,r,o=e[1]&&C(e);function n(e,t){return e[0].fetching?S:e[0].error?H:R}let c=n(e),i=c(e),u=e[1]&&z(e);return{c(){o&&o.c(),t=m(),i.c(),a=m(),u&&u.c(),s=g()},l(e){o&&o.l(e),t=v(e),i.l(e),a=v(e),u&&u.l(e),s=g()},m(e,n){o&&o.m(e,n),d(e,t,n),i.m(e,n),d(e,a,n),u&&u.m(e,n),d(e,s,n),r=!0},p(e,[r]){e[1]?o?(o.p(e,r),2&r&&f(o,1)):(o=C(e),o.c(),f(o,1),o.m(t.parentNode,t)):o&&(V(),h(o,1,1,(()=>{o=null})),$()),c===(c=n(e))&&i?i.p(e,r):(i.d(1),i=c(e),i&&(i.c(),i.m(a.parentNode,a))),e[1]?u?(u.p(e,r),2&r&&f(u,1)):(u=z(e),u.c(),f(u,1),u.m(s.parentNode,s)):u&&(V(),h(u,1,1,(()=>{u=null})),$())},i(e){r||(f(o),f(u),r=!0)},o(e){h(o),h(u),r=!1},d(e){o&&o.d(e),e&&l(t),i.d(e),e&&l(a),u&&u.d(e),e&&l(s)}}}const G=20;function J(e,t,a){let s;var r,o;const n=b(q,{filter:{offset:0,limit:G}});D(e,n,(e=>a(0,s=e)));const c=w(1);let l;c.subscribe((e=>E(n,s.variables.filter.offset=(e-1)*G,s)));const i=x({query:O}),d=e=>{i({modId:e}).then((()=>{n.reexecute()}))},u=x({query:T}),f=e=>{u({modId:e}).then((()=>{n.reexecute()}))};I(n);return e.$$.update=()=>{193&e.$$.dirty&&a(1,l=null===a(7,o=null===a(6,r=null==s?void 0:s.data)||void 0===r?void 0:r.getUnapprovedMods)||void 0===o?void 0:o.count)},[s,l,n,c,d,f,r,o,e=>d(e.id),e=>f(e.id)]}class K extends e{constructor(e){super(),t(this,e,J,F,a,{})}}export{K as default};