import{s as S,n as _,d as q}from"../chunks/scheduler.CrsDffe0.js";import{S as x,i as j,e as f,l as d,s as k,f as g,n as h,o as v,k as l,h as y,j as m,p as $,q as E}from"../chunks/index.DSWBlzAv.js";import{s as C}from"../chunks/entry.B8dkoyyA.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=f("h1"),o=d(r),n=k(),i=f("p"),u=d(p)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(l),n=y(e),i=g(e,"P",{});var c=h(i);u=v(c,p),c.forEach(l)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,u)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&E(u,p)},i:_,o:_,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return q(s,P,n=>r(0,o=n)),[o]}let F=class extends x{constructor(t){super(),j(this,t,z,w,S,{})}};export{F as component};
