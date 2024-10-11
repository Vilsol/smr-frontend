import{S as J,i as Q,d as _,s as U,v as V,J as k,F as C,ac as N,a1 as E,M as W,P as G,b as P,e as p,a4 as q,Q as y,j as l,k as D,g as h,R as z,h as I,N as O,m as v,T as R,n as f,U as A,u as K,r as j,t as F,W as M}from"../chunks/vendor.DvwuOXpe.js";import{N as T}from"../chunks/graphql.CNu7qPRc.js";import{G as B}from"../chunks/GuideForm.Bc8PLX-1.js";import{M as H}from"../chunks/MetaDescriptors.BlbTkij7.js";const{console:L}=W,w="src/routes/new-guide/+page.svelte";function b(d){let t,g,a,$="New Guide",i,s,r,o,n;t=new H({props:{description:"Creating a new guide",title:"New guide"},$$inline:!0}),o=new B({props:{onSubmit:d[0],submitIcon:"add_circle"},$$inline:!0});const c={c:function(){G(t.$$.fragment),g=P(),a=p("h1"),a.textContent=$,i=P(),s=p("div"),r=p("section"),G(o.$$.fragment),this.h()},l:function(e){const u=q("svelte-u6ds2",document.head);y(t.$$.fragment,u),u.forEach(l),g=D(e),a=h(e,"H1",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-156mhpn"&&(a.textContent=$),i=D(e),s=h(e,"DIV",{class:!0});var x=I(s);r=h(x,"SECTION",{});var S=I(r);y(o.$$.fragment,S),S.forEach(l),x.forEach(l),this.h()},h:function(){O(a,"class","my-4 text-4xl font-bold"),v(a,w,44,0,1296),v(r,w,47,2,1373),O(s,"class","card p-4"),v(s,w,46,0,1348)},m:function(e,u){R(t,document.head,null),f(e,g,u),f(e,a,u),f(e,i,u),f(e,s,u),A(s,r),R(o,r,null),n=!0},p:K,i:function(e){n||(j(t.$$.fragment,e),j(o.$$.fragment,e),n=!0)},o:function(e){F(t.$$.fragment,e),F(o.$$.fragment,e),n=!1},d:function(e){e&&(l(g),l(a),l(i),l(s)),M(t),M(o)}};return _("SvelteRegisterBlock",{block:c,id:b.name,type:"component",source:"",ctx:d}),c}function X(d,t,g){let{$$slots:a={},$$scope:$}=t;V("Page",a,[]);const i=k(),s=C(),r=n=>{s.mutation(T,{guide:n}).toPromise().then(c=>{c.error?(console.error(c.error.message),i.trigger({message:"Error creating guide: "+c.error.message,background:"variant-filled-error",autohide:!1})):(i.trigger({message:"Guide created",background:"variant-filled-success",timeout:5e3}),N(E+"/guide/"+c.data.createGuide.id))})},o=[];return Object.keys(t).forEach(n=>{!~o.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&L.warn(`<Page> was created with unknown prop '${n}'`)}),d.$capture_state=()=>({getContextClient:C,NewGuideDocument:T,goto:N,GuideForm:B,base:E,MetaDescriptors:H,getToastStore:k,toastStore:i,client:s,onSubmit:r}),[r]}class ae extends J{constructor(t){super(t),Q(this,t,X,b,U,{}),_("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:b.name})}}export{ae as component};
//# sourceMappingURL=22.6mdxLIjJ.js.map
