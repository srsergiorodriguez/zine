import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ':root{--stroke:black;--fill:#ebe6e6;--accent1:#bdc2c0;--accent2:#0d0d0d;--mainfont:"Noto Serif", serif;--headerfont:"DM Serif Display", serif;font-family:var(--mainfont)}body{padding:0px;margin:0px;background:var(--fill);color:var(--stroke)}button, select, input{font-family:var(--mainfont)}h1, h2, h3, h4, h5, h6{font-family:var(--headerfont);color:var(--accent2)}h1{font-size:2em}p, li{font-size:1.1em}table{border-collapse:collapse;max-width:100%}a{color:var(--accent2)}.silent-link{text-decoration:none;font-weight:bold;color:var(--stroke)}.default-button{padding:0.5em;margin:0.5em 0;border:solid 1px var(--accent2);color:var(--fill);font-size:1em;background:var(--accent2);cursor:pointer}.default-button:hover{color:var(--accent2);background:var(--fill)}.default-button:active{background:var(--accent1)}th, td{border:1px solid rgba(0,0,0,0.2);padding:0.5em;text-align:left}.silent-link:hover{color:var(--accent2)}.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.noevents{pointer-events:none}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1o5d4ez_START --><style data-svelte-h="svelte-17djkzy">@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');</style><!-- HEAD_svelte-1o5d4ez_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
