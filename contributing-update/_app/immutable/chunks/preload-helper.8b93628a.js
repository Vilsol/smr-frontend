const f="modulepreload",h=function(i,o){return new URL(i,o).href},d={},p=function(o,c,l){if(!c||c.length===0)return o();const a=document.getElementsByTagName("link");return Promise.all(c.map(e=>{if(e=h(e,l),e in d)return;d[e]=!0;const t=e.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!l)for(let r=a.length-1;r>=0;r--){const s=a[r];if(s.href===e&&(!t||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":f,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t)return new Promise((r,s)=>{n.addEventListener("load",r),n.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e})};export{p as _};
//# sourceMappingURL=preload-helper.8b93628a.js.map
