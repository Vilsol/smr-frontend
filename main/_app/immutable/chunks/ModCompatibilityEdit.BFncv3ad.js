import{S as Y,i as Z,s as tt,T as U,e as b,a as P,c as x,d as S,K as B,g as C,f as u,A as E,h as rt,ah as ot,j as h,M as A,ai as V,W as K,N as z,q as I,U as ct,X as ft,a5 as et,P as _,Q as X,r as at,aj as $t,H as ut,I as L,J as k,L as w,m as O,t as T,O as j,V as D,R,u as lt,_ as it,$ as st}from"./vendor.C9t1ZX-H.js";import{t as q}from"./graphql.CfvMSMJ1.js";function F(n,t,s){const l=n.slice();return l[5]=t[s],l}function G(n){let t,s=n[5]+"",l;return{c(){t=b("option"),l=_(s),this.h()},l(r){t=x(r,"OPTION",{});var e=S(t);l=X(e,s),e.forEach(u),this.h()},h(){t.__value=n[5],K(t,t.__value)},m(r,e){h(r,t,e),A(t,l)},p:I,d(r){r&&u(t)}}}function pt(n){let t,s,l="Compatibility State",r,e,a,o,c,i,f,y="Note",M,d,W,H,Q,N=U(Object.values(q)),m=[];for(let $=0;$<N.length;$+=1)m[$]=G(F(n,N,$));return{c(){t=b("label"),s=b("span"),s.textContent=l,r=P(),e=b("select");for(let $=0;$<m.length;$+=1)m[$].c();a=P(),o=b("br"),c=P(),i=b("label"),f=b("span"),f.textContent=y,M=P(),d=b("textarea"),this.h()},l($){t=x($,"LABEL",{class:!0});var g=S(t);s=x(g,"SPAN",{"data-svelte-h":!0}),B(s)!=="svelte-aygekh"&&(s.textContent=l),r=C(g),e=x(g,"SELECT",{class:!0,style:!0});var p=S(e);for(let J=0;J<m.length;J+=1)m[J].l(p);p.forEach(u),g.forEach(u),a=C($),o=x($,"BR",{}),c=C($),i=x($,"LABEL",{class:!0});var v=S(i);f=x(v,"SPAN",{"data-svelte-h":!0}),B(f)!=="svelte-34a23a"&&(f.textContent=y),M=C(v),d=x(v,"TEXTAREA",{class:!0,placeholder:!0}),S(d).forEach(u),v.forEach(u),this.h()},h(){E(e,"class","select"),rt(e,"margin-bottom","10px"),n[0].state===void 0&&ot(()=>n[3].call(e)),E(t,"class","label"),E(d,"class","textarea p-4"),E(d,"placeholder",W=n[2]("compatibility-info.notes")),E(i,"class","label")},m($,g){h($,t,g),A(t,s),A(t,r),A(t,e);for(let p=0;p<m.length;p+=1)m[p]&&m[p].m(e,null);V(e,n[0].state,!0),h($,a,g),h($,o,g),h($,c,g),h($,i,g),A(i,f),A(i,M),A(i,d),K(d,n[0].note),H||(Q=[z(e,"change",n[3]),z(d,"input",n[4])],H=!0)},p($,[g]){if(g&0){N=U(Object.values(q));let p;for(p=0;p<N.length;p+=1){const v=F($,N,p);m[p]?m[p].p(v,g):(m[p]=G(v),m[p].c(),m[p].m(e,null))}for(;p<m.length;p+=1)m[p].d(1);m.length=N.length}g&1&&V(e,$[0].state),g&4&&W!==(W=$[2]("compatibility-info.notes"))&&E(d,"placeholder",W),g&1&&K(d,$[0].note)},i:I,o:I,d($){$&&(u(t),u(a),u(o),u(c),u(i)),ct(m,$),H=!1,ft(Q)}}}function mt(n,t,s){let l,r=I,e=()=>(r(),r=at(o,f=>s(2,l=f)),o);n.$$.on_destroy.push(()=>r());let{compatibility:a={state:q.Works}}=t;const{t:o}=et();e();function c(){a.state=$t(this),s(0,a)}function i(){a.note=this.value,s(0,a)}return n.$$set=f=>{"compatibility"in f&&s(0,a=f.compatibility)},[a,o,l,c,i]}class nt extends Y{constructor(t){super(),Z(this,t,mt,pt,tt,{compatibility:0,t:1})}get t(){return this.$$.ctx[1]}}function ht(n){let t,s="rocket_launch",l,r=n[2]("early-access")+"",e,a,o=n[2]("compatibility")+"",c;return{c(){t=b("span"),t.textContent=s,l=P(),e=_(r),a=_(" - "),c=_(o),this.h()},l(i){t=x(i,"SPAN",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-1ol260v"&&(t.textContent=s),l=C(i),e=X(i,r),a=X(i," - "),c=X(i,o),this.h()},h(){E(t,"class","material-icons text-sm")},m(i,f){h(i,t,f),h(i,l,f),h(i,e,f),h(i,a,f),h(i,c,f)},p(i,f){f&4&&r!==(r=i[2]("early-access")+"")&&R(e,r),f&4&&o!==(o=i[2]("compatibility")+"")&&R(c,o)},d(i){i&&(u(t),u(l),u(e),u(a),u(c))}}}function gt(n){let t,s,l;function r(a){n[3](a)}let e={};return n[0].EA!==void 0&&(e.compatibility=n[0].EA),t=new nt({props:e}),lt.push(()=>it(t,"compatibility",r)),{c(){L(t.$$.fragment)},l(a){k(t.$$.fragment,a)},m(a,o){w(t,a,o),l=!0},p(a,o){const c={};!s&&o&1&&(s=!0,c.compatibility=a[0].EA,st(()=>s=!1)),t.$set(c)},i(a){l||(O(t.$$.fragment,a),l=!0)},o(a){T(t.$$.fragment,a),l=!1},d(a){j(t,a)}}}function yt(n){let t,s="science",l,r=n[2]("experimental")+"",e,a,o=n[2]("compatibility")+"",c;return{c(){t=b("span"),t.textContent=s,l=P(),e=_(r),a=_(" - "),c=_(o),this.h()},l(i){t=x(i,"SPAN",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-rqph63"&&(t.textContent=s),l=C(i),e=X(i,r),a=X(i," - "),c=X(i,o),this.h()},h(){E(t,"class","material-icons text-sm")},m(i,f){h(i,t,f),h(i,l,f),h(i,e,f),h(i,a,f),h(i,c,f)},p(i,f){f&4&&r!==(r=i[2]("experimental")+"")&&R(e,r),f&4&&o!==(o=i[2]("compatibility")+"")&&R(c,o)},d(i){i&&(u(t),u(l),u(e),u(a),u(c))}}}function dt(n){let t,s,l;function r(a){n[4](a)}let e={};return n[0].EXP!==void 0&&(e.compatibility=n[0].EXP),t=new nt({props:e}),lt.push(()=>it(t,"compatibility",r)),{c(){L(t.$$.fragment)},l(a){k(t.$$.fragment,a)},m(a,o){w(t,a,o),l=!0},p(a,o){const c={};!s&&o&1&&(s=!0,c.compatibility=a[0].EXP,st(()=>s=!1)),t.$set(c)},i(a){l||(O(t.$$.fragment,a),l=!0)},o(a){T(t.$$.fragment,a),l=!1},d(a){j(t,a)}}}function bt(n){let t,s,l,r;return t=new D({props:{$$slots:{content:[gt],summary:[ht]},$$scope:{ctx:n}}}),l=new D({props:{$$slots:{content:[dt],summary:[yt]},$$scope:{ctx:n}}}),{c(){L(t.$$.fragment),s=P(),L(l.$$.fragment)},l(e){k(t.$$.fragment,e),s=C(e),k(l.$$.fragment,e)},m(e,a){w(t,e,a),h(e,s,a),w(l,e,a),r=!0},p(e,a){const o={};a&69&&(o.$$scope={dirty:a,ctx:e}),t.$set(o);const c={};a&69&&(c.$$scope={dirty:a,ctx:e}),l.$set(c)},i(e){r||(O(t.$$.fragment,e),O(l.$$.fragment,e),r=!0)},o(e){T(t.$$.fragment,e),T(l.$$.fragment,e),r=!1},d(e){e&&u(s),j(t,e),j(l,e)}}}function xt(n){let t,s;return t=new ut({props:{$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){L(t.$$.fragment)},l(l){k(t.$$.fragment,l)},m(l,r){w(t,l,r),s=!0},p(l,[r]){const e={};r&69&&(e.$$scope={dirty:r,ctx:l}),t.$set(e)},i(l){s||(O(t.$$.fragment,l),s=!0)},o(l){T(t.$$.fragment,l),s=!1},d(l){j(t,l)}}}function Et(n,t,s){let l,r=I,e=()=>(r(),r=at(c,y=>s(2,l=y)),c);n.$$.on_destroy.push(()=>r());const a={EA:{state:q.Works,note:""},EXP:{state:q.Works,note:""}};let{compatibilityInfo:o=null}=t;const{t:c}=et();e();function i(y){n.$$.not_equal(o.EA,y)&&(o.EA=y,s(0,o))}function f(y){n.$$.not_equal(o.EXP,y)&&(o.EXP=y,s(0,o))}return n.$$set=y=>{"compatibilityInfo"in y&&s(0,o=y.compatibilityInfo)},n.$$.update=()=>{n.$$.dirty&1&&o==null&&s(0,o=a)},[o,c,l,i,f]}class Pt extends Y{constructor(t){super(),Z(this,t,Et,xt,tt,{compatibilityInfo:0,t:1})}get t(){return this.$$.ctx[1]}}export{Pt as M};
//# sourceMappingURL=ModCompatibilityEdit.BFncv3ad.js.map