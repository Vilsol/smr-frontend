import{S,i as B,s as N,d as O,y as R,a3 as q,v as U,aa as _,H as V,F as k,ab as D,e as g,P as H,b as Q,X as W,g as v,h as I,Q as X,k as Y,Y as Z,j as w,N as C,m as F,n as z,T as A,U as E,V as G,a5 as J,Z as K,r as L,t as tt,W as ot,u as et,x as it}from"./vendor.b_0CKab-.js";import{M as T}from"./ModCompatibilityEdit.CTta2wrp.js";import{E as M}from"./graphql.CNu7qPRc.js";const x="src/lib/components/mods/compatibility/EditCompatibilityForm.svelte";function P(e){let o,i,d,p,m,c,u=e[2]("entry.save")+"",n,s,l,f;function $(a){e[5](a)}let b={};e[0].compatibility!==void 0&&(b.compatibilityInfo=e[0].compatibility),i=new T({props:b,$$inline:!0}),R.push(()=>q(i,"compatibilityInfo",$));const h={c:function(){o=g("form"),H(i.$$.fragment),p=Q(),m=g("div"),c=g("button"),n=W(u),this.h()},l:function(t){o=v(t,"FORM",{});var r=I(o);X(i.$$.fragment,r),p=Y(r),m=v(r,"DIV",{class:!0});var y=I(m);c=v(y,"BUTTON",{class:!0,type:!0});var j=I(c);n=Z(j,u),j.forEach(w),y.forEach(w),r.forEach(w),this.h()},h:function(){C(c,"class","variant-ghost-primary btn"),C(c,"type","submit"),F(c,x,38,4,921),C(m,"class","p-5"),F(m,x,37,2,899),F(o,x,35,0,799)},m:function(t,r){z(t,o,r),A(i,o,null),E(o,p),E(o,m),E(m,c),E(c,n),s=!0,l||(f=G(o,"submit",e[3],!1,!1,!1,!1),l=!0)},p:function(t,[r]){const y={};!d&&r&1&&(d=!0,y.compatibilityInfo=t[0].compatibility,J(()=>d=!1)),i.$set(y),(!s||r&4)&&u!==(u=t[2]("entry.save")+"")&&K(n,u)},i:function(t){s||(L(i.$$.fragment,t),s=!0)},o:function(t){tt(i.$$.fragment,t),s=!1},d:function(t){t&&w(o),ot(i),l=!1,f()}};return O("SvelteRegisterBlock",{block:h,id:P.name,type:"component",source:"",ctx:e}),h}function st(e,o,i){let d,p=et,m=()=>(p(),p=it(l,t=>i(2,d=t)),l);e.$$.on_destroy.push(()=>p());let{$$slots:c={},$$scope:u}=o;U("EditCompatibilityForm",c,[]);let{modId:n}=o,{mod:s}=o;const{t:l}=_();V(l,"t"),m();const f=k(),$=D();async function b(t){t.preventDefault();const r=(await f.mutation(M,{modId:n,compatibility:s.compatibility}).toPromise()).data.updateModCompatibility;$(r?"submit":"fail")}e.$$.on_mount.push(function(){n===void 0&&!("modId"in o||e.$$.bound[e.$$.props.modId])&&console.warn("<EditCompatibilityForm> was created without expected prop 'modId'"),s===void 0&&!("mod"in o||e.$$.bound[e.$$.props.mod])&&console.warn("<EditCompatibilityForm> was created without expected prop 'mod'")});const h=["modId","mod"];Object.keys(o).forEach(t=>{!~h.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<EditCompatibilityForm> was created with unknown prop '${t}'`)});function a(t){e.$$.not_equal(s.compatibility,t)&&(s.compatibility=t,i(0,s))}return e.$$set=t=>{"modId"in t&&i(4,n=t.modId),"mod"in t&&i(0,s=t.mod)},e.$capture_state=()=>({ModCompatibilityEdit:T,EditModCompatibilityDocument:M,getContextClient:k,createEventDispatcher:D,getTranslate:_,modId:n,mod:s,t:l,client:f,dispatch:$,onSubmit:b,$t:d}),e.$inject_state=t=>{"modId"in t&&i(4,n=t.modId),"mod"in t&&i(0,s=t.mod)},o&&"$$inject"in o&&e.$inject_state(o.$$inject),[s,l,d,b,n,a]}class ct extends S{constructor(o){super(o),B(this,o,st,P,N,{modId:4,mod:0,t:1}),O("SvelteRegisterComponent",{component:this,tagName:"EditCompatibilityForm",options:o,id:P.name})}get modId(){throw new Error("<EditCompatibilityForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set modId(o){throw new Error("<EditCompatibilityForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get mod(){throw new Error("<EditCompatibilityForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set mod(o){throw new Error("<EditCompatibilityForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(o){throw new Error("<EditCompatibilityForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ct as E};
//# sourceMappingURL=EditCompatibilityForm.CrGmxOK_.js.map
