const d="modulepreload",s={},a="/smr-frontend/staging/_app/",f=function(o,t){return!t||t.length===0?o():Promise.all(t.map(e=>{if(e=`${a}${e}`,e in s)return;s[e]=!0;const n=e.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":d,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((l,c)=>{r.addEventListener("load",l),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};export{f as _};
//# sourceMappingURL=preload-helper-b2fcde9f.js.map