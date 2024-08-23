import{r as ie,s as N,c as te,u as se,g as ae,b as le,d as ne,C as ce,n as V}from"./scheduler.CrsDffe0.js";import{t as B,b as U,S as j,i as q,e as h,f as m,n as _,k as u,v as c,j as F,l as L,s as H,o as P,h as R,p as o,q as G,c as ue,a as de,m as fe,d as he,g as re,r as ee,B as me}from"./index.DSWBlzAv.js";import{d as pe,r as _e,w as ve,b as D}from"./paths.DAd0bepC.js";function ge(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Re(n,e){n.d(1),e.delete(n.key)}function ze(n,e){U(n,1,1,()=>{e.delete(n.key)})}function Ve(n,e,s,a,t,l,r,S,p,I,M,w){let f=n.length,v=l.length,d=f;const b={};for(;d--;)b[n[d].key]=d;const k=[],y=new Map,E=new Map,$=[];for(d=v;d--;){const i=w(t,l,d),g=s(i);let A=r.get(g);A?$.push(()=>A.p(i,e)):(A=I(g,i),A.c()),y.set(g,k[d]=A),g in b&&E.set(g,Math.abs(d-b[g]))}const x=new Set,C=new Set;function T(i){B(i,1),i.m(S,M),r.set(i.key,i),M=i.first,v--}for(;f&&v;){const i=k[v-1],g=n[f-1],A=i.key,z=g.key;i===g?(M=i.first,f--,v--):y.has(z)?!r.has(A)||x.has(A)?T(i):C.has(z)?f--:E.get(A)>E.get(z)?(C.add(A),T(i)):(x.add(z),f--):(p(g,r),f--)}for(;f--;){const i=n[f];y.has(i.key)||p(i,r)}for(;v;)T(k[v-1]);return ie($),k}const oe={home:{es:"Portada",en:"Home"},explore:{es:"Explorar",en:"Explore"},gallery:{es:"Galería",en:"Gallery"},tour:{es:"Tour",en:"Tour"},metadata:{es:"Metadatos",en:"Metadata"},metadataTable:{es:"Tabla de metadatos",en:"Metadata table"},download:{es:"Descargar",en:"Download"},search:{es:"Buscar",en:"Search"},result:{es:"Resultado",en:"Result"},results:{es:"Resultados",en:"Results"},filters:{es:"Filtros",en:"Filters"},all:{es:"Todos",en:"All"},page:{es:"Página",en:"Page"},randomItems:{es:"Al azar",en:"Random items"}},Z=ve("es"),ke=pe(Z,n=>{const e={};for(let[s,a]of Object.entries(oe))e[s]=a[n];return e});_e(Object.keys(oe));const O={lang:"es",localPort:"5173",base:"https://srsergiorodriguez.github.io",baseurl:"/zine",title:"¡Zine!",subtitle:"Colección digital de zines y publicaciones alternativas",credits:"Por Sergio Rodríguez Gómez",copyright:"2024",pages:{iiifViewer:!0,metadataToShow:[{key:"label",label:"Label",type:"text"},{key:"autores",label:"Autores",type:"text"},{key:"ciudad",label:"Ciudad",type:"text"},{key:"pais",label:"País",type:"text"},{key:"tipo_principal",label:"Tipo",type:"text"},{key:"medio_impresion",label:"Medio de impresión",type:"text"}],metadataToIndex:["label","autores","grupo","fecha","ciudad","medio_impresion"]}};function be(n){let e,s;const a=n[1].default,t=te(a,n,n[0],null);return{c(){e=h("section"),t&&t.c(),this.h()},l(l){e=m(l,"SECTION",{class:!0});var r=_(e);t&&t.l(r),r.forEach(u),this.h()},h(){c(e,"class","general")},m(l,r){F(l,e,r),t&&t.m(e,null),s=!0},p(l,[r]){t&&t.p&&(!s||r&1)&&se(t,a,l,l[0],s?le(a,l[0],r,null):ae(l[0]),null)},i(l){s||(B(t,l),s=!0)},o(l){U(t,l),s=!1},d(l){l&&u(e),t&&t.d(l)}}}function $e(n,e,s){let a;ne(n,Z,r=>s(2,a=r));let{$$slots:t={},$$scope:l}=e;return ce(Z,a=O.lang,a),n.$$set=r=>{"$$scope"in r&&s(0,l=r.$$scope)},[l,t]}class Oe extends j{constructor(e){super(),q(this,e,$e,be,N,{})}}function ye(n){let e,s,a,t,l=n[0].home+"",r,S,p,I,M=n[0].explore+"",w,f,v,d,b=n[0].tour+"",k,y,E,$,x=n[0].metadata+"",C;return{c(){e=h("nav"),s=h("ul"),a=h("li"),t=h("a"),r=L(l),S=H(),p=h("li"),I=h("a"),w=L(M),f=H(),v=h("li"),d=h("a"),k=L(b),y=H(),E=h("li"),$=h("a"),C=L(x),this.h()},l(T){e=m(T,"NAV",{});var i=_(e);s=m(i,"UL",{class:!0});var g=_(s);a=m(g,"LI",{class:!0});var A=_(a);t=m(A,"A",{class:!0,href:!0});var z=_(t);r=P(z,l),z.forEach(u),A.forEach(u),S=R(g),p=m(g,"LI",{class:!0});var J=_(p);I=m(J,"A",{class:!0,href:!0});var K=_(I);w=P(K,M),K.forEach(u),J.forEach(u),f=R(g),v=m(g,"LI",{class:!0});var Q=_(v);d=m(Q,"A",{class:!0,href:!0});var W=_(d);k=P(W,b),W.forEach(u),Q.forEach(u),y=R(g),E=m(g,"LI",{class:!0});var X=_(E);$=m(X,"A",{class:!0,href:!0});var Y=_($);C=P(Y,x),Y.forEach(u),X.forEach(u),g.forEach(u),i.forEach(u),this.h()},h(){c(t,"class","silent-link menu-link svelte-chrkdp"),c(t,"href",D),c(a,"class","svelte-chrkdp"),c(I,"class","silent-link menu-link svelte-chrkdp"),c(I,"href",D+"/pages"),c(p,"class","svelte-chrkdp"),c(d,"class","silent-link menu-link svelte-chrkdp"),c(d,"href",D+"/tour"),c(v,"class","svelte-chrkdp"),c($,"class","silent-link menu-link svelte-chrkdp"),c($,"href",D+"/metadata"),c(E,"class","svelte-chrkdp"),c(s,"class","menu-list no-select svelte-chrkdp")},m(T,i){F(T,e,i),o(e,s),o(s,a),o(a,t),o(t,r),o(s,S),o(s,p),o(p,I),o(I,w),o(s,f),o(s,v),o(v,d),o(d,k),o(s,y),o(s,E),o(E,$),o($,C)},p(T,[i]){i&1&&l!==(l=T[0].home+"")&&G(r,l),i&1&&M!==(M=T[0].explore+"")&&G(w,M),i&1&&b!==(b=T[0].tour+"")&&G(k,b),i&1&&x!==(x=T[0].metadata+"")&&G(C,x)},i:V,o:V,d(T){T&&u(e)}}}function Ee(n,e,s){let a;return ne(n,ke,t=>s(0,a=t)),[a]}class we extends j{constructor(e){super(),q(this,e,Ee,ye,N,{})}}function Me(n){let e,s,a,t,l=O.title+"",r,S,p,I=O.subtitle+"",M,w,f,v;return f=new we({}),{c(){e=h("header"),s=h("div"),a=h("h1"),t=h("a"),r=L(l),S=H(),p=h("span"),M=L(I),w=H(),ue(f.$$.fragment),this.h()},l(d){e=m(d,"HEADER",{class:!0,style:!0});var b=_(e);s=m(b,"DIV",{});var k=_(s);a=m(k,"H1",{class:!0,id:!0,style:!0});var y=_(a);t=m(y,"A",{href:!0,class:!0});var E=_(t);r=P(E,l),E.forEach(u),y.forEach(u),S=R(k),p=m(k,"SPAN",{class:!0});var $=_(p);M=P($,I),$.forEach(u),k.forEach(u),w=R(b),de(f.$$.fragment,b),b.forEach(u),this.h()},h(){c(t,"href",D),c(t,"class","svelte-1yo817c"),c(a,"class","main-title svelte-1yo817c"),c(a,"id","main-title"),c(a,"style",`transform: rotate(${Math.floor(Math.random()*10-5)}deg);`),c(p,"class","main-subtitle svelte-1yo817c"),c(e,"class","main-header svelte-1yo817c"),c(e,"style",`background-image: url(${D}/banner/banner${Math.floor(Math.random()*5)}.png`)},m(d,b){F(d,e,b),o(e,s),o(s,a),o(a,t),o(t,r),o(s,S),o(s,p),o(p,M),o(e,w),fe(f,e,null),v=!0},p:V,i(d){v||(B(f.$$.fragment,d),v=!0)},o(d){U(f.$$.fragment,d),v=!1},d(d){d&&u(e),he(f)}}}function Te(n){return[]}class Fe extends j{constructor(e){super(),q(this,e,Te,Me,N,{})}}function Ae(n){let e,s;const a=n[1].default,t=te(a,n,n[0],null);return{c(){e=h("section"),t&&t.c(),this.h()},l(l){e=m(l,"SECTION",{class:!0});var r=_(e);t&&t.l(r),r.forEach(u),this.h()},h(){c(e,"class","content-slot svelte-j23o33")},m(l,r){F(l,e,r),t&&t.m(e,null),s=!0},p(l,[r]){t&&t.p&&(!s||r&1)&&se(t,a,l,l[0],s?le(a,l[0],r,null):ae(l[0]),null)},i(l){s||(B(t,l),s=!0)},o(l){U(t,l),s=!1},d(l){l&&u(e),t&&t.d(l)}}}function Ie(n,e,s){let{$$slots:a={},$$scope:t}=e;return n.$$set=l=>{"$$scope"in l&&s(0,t=l.$$scope)},[t,a]}class Ne extends j{constructor(e){super(),q(this,e,Ie,Ae,N,{})}}function Se(n,e,s){const a=n.slice();return a[0]=e[s].img,a[1]=e[s].link,a}function xe(n){let e,s=ge(O.logos),a=[];for(let t=0;t<s.length;t+=1)a[t]=Ce(Se(n,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=ee()},l(t){for(let l=0;l<a.length;l+=1)a[l].l(t);e=ee()},m(t,l){for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(t,l);F(t,e,l)},d(t){t&&u(e),me(a,t)}}}function Ce(n){let e,s=`<a href="${n[1]}" target="_blank"><img src="${/(^http)/.test(n[0])?n[0]:`${D}/${n[0]}`}" alt="logo" class="svelte-os1ckc"/></a> `;return{c(){e=h("div"),e.innerHTML=s,this.h()},l(a){e=m(a,"DIV",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-xyvup8"&&(e.innerHTML=s),this.h()},h(){c(e,"class","logo svelte-os1ckc")},m(a,t){F(a,e,t)},p:V,d(a){a&&u(e)}}}function De(n){let e,s,a,t,l=O.credits+"",r,S,p,I='Colección creada con <a class="footer-text svelte-os1ckc" href="https://github.com/srsergiorodriguez/serie-mini" target="_blank">Serie Mini</a>',M,w,f,v=O.copyright+"",d,b,k,y=O.logos!==void 0&&xe(n);return{c(){e=h("footer"),s=h("div"),a=h("a"),t=h("p"),r=L(l),S=H(),p=h("span"),p.innerHTML=I,M=H(),w=h("div"),f=h("p"),d=L(v),b=H(),k=h("div"),y&&y.c(),this.h()},l(E){e=m(E,"FOOTER",{class:!0,style:!0});var $=_(e);s=m($,"DIV",{});var x=_(s);a=m(x,"A",{href:!0});var C=_(a);t=m(C,"P",{class:!0});var T=_(t);r=P(T,l),T.forEach(u),C.forEach(u),S=R(x),p=m(x,"SPAN",{class:!0,"data-svelte-h":!0}),re(p)!=="svelte-1q5bda2"&&(p.innerHTML=I),x.forEach(u),M=R($),w=m($,"DIV",{});var i=_(w);f=m(i,"P",{class:!0});var g=_(f);d=P(g,v),g.forEach(u),b=R(i),k=m(i,"DIV",{class:!0});var A=_(k);y&&y.l(A),A.forEach(u),i.forEach(u),$.forEach(u),this.h()},h(){c(t,"class","footer-text svelte-os1ckc"),c(a,"href",D+"/credits"),c(p,"class","footer-text svelte-os1ckc"),c(f,"class","main-title no-select footer-text svelte-os1ckc"),c(k,"class","logos-container svelte-os1ckc"),c(e,"class","main-footer svelte-os1ckc"),c(e,"style",`background-image: url(${D}/banner/banner${Math.floor(Math.random()*5)}.png`)},m(E,$){F(E,e,$),o(e,s),o(s,a),o(a,t),o(t,r),o(s,S),o(s,p),o(e,M),o(e,w),o(w,f),o(f,d),o(w,b),o(w,k),y&&y.m(k,null)},p:V,i:V,o:V,d(E){E&&u(e),y&&y.d()}}}class je extends j{constructor(e){super(),q(this,e,null,De,N,{})}}export{Ne as C,Oe as D,je as F,Fe as H,O as c,Re as d,ge as e,ze as o,ke as t,Ve as u};
