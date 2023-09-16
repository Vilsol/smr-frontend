import{S as le,i as fe,d as T,s as ue,y as me,I as de,v as $e,F as J,G as K,$ as pe,a0 as ge,Z as Q,H as W,_ as he,J as N,b as D,e as w,K as O,L as ve,M as q,j as $,k as C,g as E,h as x,N as R,O as X,m as M,Q as A,n as S,R as P,t as _,q as Se,r as j,U as Ve,T as G,p as be,X as te,u as I}from"../chunks/vendor.7f7881cb.js";import{l as Z,m as Y}from"../chunks/graphql.fef59309.js";import{T as ne}from"../chunks/Toast.94a1f60f.js";import{S as se}from"../chunks/SMLVersionForm.47075abc.js";import{M as oe}from"../chunks/MetaDescriptors.3fc0d18e.js";const ye=async({params:t})=>({...t}),Te=Object.freeze(Object.defineProperty({__proto__:null,load:ye},Symbol.toStringTag,{value:"Module"})),{console:ee}=he,k="src/routes/admin/sml-versions/[smlVersionId]/edit/+page.svelte";function ie(t){let e,s;e=new se({props:{onSubmit:t[5],initialValues:t[3],editing:!0,submitText:"Save"},$$inline:!0});const a={c:function(){N(e.$$.fragment)},l:function(n){q(e.$$.fragment,n)},m:function(n,r){A(e,n,r),s=!0},p:function(n,r){const c={};r&8&&(c.initialValues=n[3]),e.$set(c)},i:function(n){s||(j(e.$$.fragment,n),s=!0)},o:function(n){_(e.$$.fragment,n),s=!1},d:function(n){G(e,n)}};return T("SvelteRegisterBlock",{block:a,id:ie.name,type:"else",source:"(60:4) {:else}",ctx:t}),a}function re(t){let e,s,a=t[1].error.message+"",i;const n={c:function(){e=w("p"),s=O("Oh no... "),i=O(a),this.h()},l:function(c){e=E(c,"P",{});var f=x(e);s=R(f,"Oh no... "),i=R(f,a),f.forEach($),this.h()},h:function(){M(e,k,58,6,1753)},m:function(c,f){S(c,e,f),P(e,s),P(e,i)},p:function(c,f){f&2&&a!==(a=c[1].error.message+"")&&te(i,a)},i:I,o:I,d:function(c){c&&$(e)}};return T("SvelteRegisterBlock",{block:n,id:re.name,type:"if",source:"(58:32) ",ctx:t}),n}function ae(t){let e,s;const a={c:function(){e=w("p"),s=O("Loading..."),this.h()},l:function(n){e=E(n,"P",{});var r=x(e);s=R(r,"Loading..."),r.forEach($),this.h()},h:function(){M(e,k,56,6,1696)},m:function(n,r){S(n,e,r),P(e,s)},p:I,i:I,o:I,d:function(n){n&&$(e)}};return T("SvelteRegisterBlock",{block:a,id:ae.name,type:"if",source:"(56:4) {#if $smlVersion.fetching}",ctx:t}),a}function ce(t){let e,s;const a={c:function(){e=w("span"),s=O(t[2]),this.h()},l:function(n){e=E(n,"SPAN",{});var r=x(e);s=R(r,t[2]),r.forEach($),this.h()},h:function(){M(e,k,66,2,1954)},m:function(n,r){S(n,e,r),P(e,s)},p:function(n,r){r&4&&te(s,n[2])},d:function(n){n&&$(e)}};return T("SvelteRegisterBlock",{block:a,id:ce.name,type:"slot",source:"(66:0) <Toast bind:running={errorToast}>",ctx:t}),a}function H(t){let e,s,a,i,n,r,c,f,m,g,u,v,V;e=new oe({props:{description:"Edit SML Version",title:"Admin: Edit SML Version"},$$inline:!0});const B=[ae,re,ie],h=[];function l(p,o){return p[1].fetching?0:p[1].error?1:2}f=l(t),m=h[f]=B[f](t);function L(p){t[7](p)}let U={$$slots:{default:[ce]},$$scope:{ctx:t}};t[0]!==void 0&&(U.running=t[0]),u=new ne({props:U,$$inline:!0}),me.push(()=>de(u,"running",L));const F={c:function(){N(e.$$.fragment),s=D(),a=w("h1"),i=O("Edit SMLVersion"),n=D(),r=w("div"),c=w("section"),m.c(),g=D(),N(u.$$.fragment),this.h()},l:function(o){const d=ve("svelte-7e9nlv",document.head);q(e.$$.fragment,d),d.forEach($),s=C(o),a=E(o,"H1",{class:!0});var b=x(a);i=R(b,"Edit SMLVersion"),b.forEach($),n=C(o),r=E(o,"DIV",{class:!0});var y=x(r);c=E(y,"SECTION",{});var z=x(c);m.l(z),z.forEach($),y.forEach($),g=C(o),q(u.$$.fragment,o),this.h()},h:function(){X(a,"class","text-4xl my-4 font-bold"),M(a,k,51,0,1566),M(c,k,54,2,1649),X(r,"class","card p-4"),M(r,k,53,0,1624)},m:function(o,d){A(e,document.head,null),S(o,s,d),S(o,a,d),P(a,i),S(o,n,d),S(o,r,d),P(r,c),h[f].m(c,null),S(o,g,d),A(u,o,d),V=!0},p:function(o,[d]){let b=f;f=l(o),f===b?h[f].p(o,d):(be(),_(h[b],1,1,()=>{h[b]=null}),Se(),m=h[f],m?m.p(o,d):(m=h[f]=B[f](o),m.c()),j(m,1),m.m(c,null));const y={};d&1028&&(y.$$scope={dirty:d,ctx:o}),!v&&d&1&&(v=!0,y.running=o[0],Ve(()=>v=!1)),u.$set(y)},i:function(o){V||(j(e.$$.fragment,o),j(m),j(u.$$.fragment,o),V=!0)},o:function(o){_(e.$$.fragment,o),_(m),_(u.$$.fragment,o),V=!1},d:function(o){G(e),o&&$(s),o&&$(a),o&&$(n),o&&$(r),h[f].d(),o&&$(g),G(u,o)}};return T("SvelteRegisterBlock",{block:F,id:H.name,type:"component",source:"",ctx:t}),F}function we(t,e,s){let a,i,{$$slots:n={},$$scope:r}=e;$e("Page",n,[]);let{data:c}=e;const{smlVersionId:f}=c,m=J();let g="",u=!1;const v=K({query:Z,client:m,variables:{smlVersionID:f}});pe(v,"smlVersion"),ge(t,v,l=>s(1,i=l));const V=l=>{m.mutation(Y,{smlVersionID:f,smlVersion:l}).toPromise().then(L=>{L.error?(console.error(L.error.message),s(2,g="Error editing SMLVersion: "+L.error.message),s(0,u=!0)):Q(W+"/admin/sml-versions")})};t.$$.on_mount.push(function(){c===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&ee.warn("<Page> was created without expected prop 'data'")});const B=["data"];Object.keys(e).forEach(l=>{!~B.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&ee.warn(`<Page> was created with unknown prop '${l}'`)});function h(l){u=l,s(0,u)}return t.$$set=l=>{"data"in l&&s(6,c=l.data)},t.$capture_state=()=>({getContextClient:J,queryStore:K,GetSmlVersionAdminDocument:Z,UpdateSmlVersionDocument:Y,Toast:ne,goto:Q,SMLVersionForm:se,base:W,MetaDescriptors:oe,data:c,smlVersionId:f,client:m,errorMessage:g,errorToast:u,smlVersion:v,onSubmit:V,initialValues:a,$smlVersion:i}),t.$inject_state=l=>{"data"in l&&s(6,c=l.data),"errorMessage"in l&&s(2,g=l.errorMessage),"errorToast"in l&&s(0,u=l.errorToast),"initialValues"in l&&s(3,a=l.initialValues)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&(u||s(2,g="")),t.$$.dirty&2&&s(3,a=i.data?{...i.data.getSMLVersion,logo:void 0}:void 0)},[u,i,g,a,v,V,c,h]}class Le extends le{constructor(e){super(e),fe(this,e,we,H,ue,{data:6}),T("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:H.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Le as component,Te as universal};
//# sourceMappingURL=5.d57c45e3.js.map