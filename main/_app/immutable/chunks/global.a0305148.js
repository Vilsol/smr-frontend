import{a8 as s}from"./vendor.4592e533.js";const c=s(!1);let r;r=window.matchMedia("(min-width: 1280px)");const i=s(r&&!r.matches),w=s(!1),f=s(!1);r.addEventListener("change",e=>{i&&i.set(!e.matches)});{const e=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA","Space"],t=[];window.onkeyup=n=>{if(t.push(n.code),t.length>e.length&&t.shift(),t.length==e.length){let a=!0;for(let o=0;o<e.length;o++)if(e[o]!==t[o]){a=!1;break}a&&f.set(!0)}n.code=="KeyD"&&w.set(!0)}}export{w as d,f as e,c as l,i as o};
//# sourceMappingURL=global.a0305148.js.map