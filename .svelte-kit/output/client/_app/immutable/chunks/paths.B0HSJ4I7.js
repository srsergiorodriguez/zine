import{n as l,p as v,r as m,s as z,q as k}from"./scheduler.DTRRIkUf.js";const c=[];function x(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(z(e,t)&&(e=t,r)){const i=!c.length;for(const s of n)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function E(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return x(r,(f,t)=>{let i=!1;const s=[];let p=0,d=l;const h=()=>{if(p)return;d();const u=o(n?s[0]:s,f,t);b?f(u):d=k(u)?u:l},y=a.map((u,_)=>v(u,q=>{s[_]=q,p&=~(1<<_),i&&h()},()=>{p|=1<<_}));return i=!0,h(),function(){m(y),d(),i=!1}})}var g;const T=((g=globalThis.__sveltekit_1wbithv)==null?void 0:g.base)??"/zine";var w;const S=((w=globalThis.__sveltekit_1wbithv)==null?void 0:w.assets)??T;export{S as a,T as b,E as d,x as r,A as w};