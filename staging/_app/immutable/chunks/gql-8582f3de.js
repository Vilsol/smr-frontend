import{aE as c}from"./vendor-71586dff.js";import{g as s}from"./global-04fbeec3.js";const p=n=>async function(){{const o=Object.keys(n).map(a=>{const t=n[a];return c(s).query(t.query,t.variables,t.context).toPromise().then(r=>{t.update(e=>(e.fetching=!1,r&&(e.data=r.data,e.error=r.error),e)),t.set({context:{...t.context,updated:new Date}})}).catch(r=>{t.update(e=>(e.fetching=!1,e.data=void 0,e.error=r,e)),t.set({context:{...t.context,updated:new Date}})}),t.update(r=>(r.fetching=!0,r)),t.set({context:{...t.context,updated:new Date}}),[a,t]});return{props:Object.fromEntries(o)}}};export{p as l};
//# sourceMappingURL=gql-8582f3de.js.map