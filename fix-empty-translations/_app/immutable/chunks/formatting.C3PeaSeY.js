import{T as t}from"./graphql.wCfPrEY1.js";const i=e=>(typeof e=="string"&&(e=new Date(e)),e.toLocaleString()),B=e=>e.toLocaleString(),u=(e,o=2)=>{if(e===0)return"0 Bytes";const r=1024,s=o<0?0:o,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,n)).toFixed(s))+" "+a[n]},l=e=>{switch(e){case t.Windows:return"Windows Client";case t.WindowsServer:return"Windows Server";case t.LinuxServer:return"Linux Server"}return e};export{B as a,u as b,l as c,i as p};
//# sourceMappingURL=formatting.C3PeaSeY.js.map
