import { c as create_ssr_component, a as subscribe, f as set_store_value, b as add_attribute, e as escape, v as validate_component, d as each } from "./ssr.js";
import { b as base } from "./paths.js";
import { d as derived, r as readable, w as writable } from "./index.js";
const translations = {
  home: { es: "Portada", en: "Home" },
  explore: { es: "Explorar", en: "Explore" },
  gallery: { es: "Galería", en: "Gallery" },
  tour: { es: "Tour", en: "Tour" },
  metadata: { es: "Metadatos", en: "Metadata" },
  metadataTable: { es: "Tabla de metadatos", en: "Metadata table" },
  download: { es: "Descargar", en: "Download" },
  search: { es: "Buscar", en: "Search" },
  result: { es: "Resultado", en: "Result" },
  results: { es: "Resultados", en: "Results" },
  filters: { es: "Filtros", en: "Filters" },
  all: { es: "Todos", en: "All" },
  page: { es: "Página", en: "Page" },
  randomItems: { es: "Al azar", en: "Random items" }
};
const lang = writable("es");
const t = derived(lang, ($lang) => {
  const dictionary = {};
  for (let [key, value] of Object.entries(translations)) {
    dictionary[key] = value[$lang];
  }
  return dictionary;
});
readable(Object.keys(translations));
const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://srsergiorodriguez.github.io",
  "baseurl": "/zine",
  "title": "¡Zine!",
  "subtitle": "Colección digital de zines y publicaciones alternativas",
  "credits": "Por Sergio Rodríguez Gómez",
  "copyright": "2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autores",
        "label": "Autores",
        "type": "text"
      },
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text"
      },
      {
        "key": "pais",
        "label": "País",
        "type": "text"
      },
      {
        "key": "tipo_principal",
        "label": "Tipo",
        "type": "text"
      },
      {
        "key": "medio_impresion",
        "label": "Medio de impresión",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autores",
      "grupo",
      "fecha",
      "ciudad",
      "medio_impresion"
    ]
  }
};
const Default = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lang, $$unsubscribe_lang;
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  set_store_value(lang, $lang = config.lang, $lang);
  $$unsubscribe_lang();
  return `<section class="general">${slots.default ? slots.default({}) : ``}</section>`;
});
const css$3 = {
  code: ".menu-list.svelte-chrkdp.svelte-chrkdp{display:flex;gap:1em;justify-content:space-around;padding:0;margin:0}.menu-list.svelte-chrkdp li.svelte-chrkdp{list-style-type:none;font-size:1.2em}.menu-link.svelte-chrkdp.svelte-chrkdp{background:var(--accent2);padding:0.2em;color:var(--fill)}.menu-link.svelte-chrkdp.svelte-chrkdp:hover{background:var(--fill);background:var(--accent2)}@media screen and (max-width: 800px){.menu-list.svelte-chrkdp.svelte-chrkdp{margin:1em}}@media screen and (max-width: 500px){.menu-list.svelte-chrkdp.svelte-chrkdp{flex-direction:column;margin:1em}}",
  map: `{"version":3,"file":"MainMenu.svelte","sources":["MainMenu.svelte"],"sourcesContent":["<script>\\n  import { base } from '$app/paths';\\n  import { t } from '$stores/translations';\\n<\/script>\\n\\n<nav>\\n  <ul class=\\"menu-list no-select\\">\\n    <li><a class=\\"silent-link menu-link\\" href=\\"{base}\\">{$t.home}</a></li>\\n    <li><a class=\\"silent-link menu-link\\" href=\\"{base}/pages\\">{$t.explore}</a></li>\\n    <li><a class=\\"silent-link menu-link\\" href=\\"{base}/tour\\">{$t.tour}</a></li>\\n    <li><a class=\\"silent-link menu-link\\" href=\\"{base}/metadata\\">{$t.metadata}</a></li>\\n  </ul>\\n</nav>\\n\\n<style>\\n  .menu-list {\\n    display: flex;\\n    gap: 1em;\\n    justify-content: space-around;\\n    padding: 0;\\n    margin: 0;\\n  }\\n\\n  .menu-list li {\\n    list-style-type: none;\\n    font-size: 1.2em;\\n  }\\n\\n  .menu-link {\\n    background: var(--accent2);\\n    padding: 0.2em;\\n    color: var(--fill);\\n  }\\n\\n  .menu-link:hover {\\n    background: var(--fill);\\n    background: var(--accent2);\\n  }\\n\\n  @media screen and (max-width: 800px) {\\n    .menu-list {\\n      margin: 1em;\\n    }\\n  }\\n\\n  @media screen and (max-width: 500px) {\\n    .menu-list {\\n      flex-direction: column;\\n      margin: 1em;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"AAeE,sCAAW,CACT,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,YAAY,CAC7B,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACV,CAEA,wBAAU,CAAC,gBAAG,CACZ,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,KACb,CAEA,sCAAW,CACT,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,MAAM,CACnB,CAEA,sCAAU,MAAO,CACf,UAAU,CAAE,IAAI,MAAM,CAAC,CACvB,UAAU,CAAE,IAAI,SAAS,CAC3B,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,sCAAW,CACT,MAAM,CAAE,GACV,CACF,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,sCAAW,CACT,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,GACV,CACF"}`
};
const MainMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$result.css.add(css$3);
  $$unsubscribe_t();
  return `<nav><ul class="menu-list no-select svelte-chrkdp"><li class="svelte-chrkdp"><a class="silent-link menu-link svelte-chrkdp"${add_attribute("href", base, 0)}>${escape($t.home)}</a></li> <li class="svelte-chrkdp"><a class="silent-link menu-link svelte-chrkdp" href="${escape(base, true) + "/pages"}">${escape($t.explore)}</a></li> <li class="svelte-chrkdp"><a class="silent-link menu-link svelte-chrkdp" href="${escape(base, true) + "/tour"}">${escape($t.tour)}</a></li> <li class="svelte-chrkdp"><a class="silent-link menu-link svelte-chrkdp" href="${escape(base, true) + "/metadata"}">${escape($t.metadata)}</a></li></ul> </nav>`;
});
const css$2 = {
  code: "a.svelte-1yo817c.svelte-1yo817c{text-decoration:none;color:var(--accent2)}.main-title.svelte-1yo817c.svelte-1yo817c{max-width:600px;font-size:5em;margin:0.1em;padding:0.1em}.main-title.svelte-1yo817c a.svelte-1yo817c{background:var(--accent2);color:var(--fill)}.main-subtitle.svelte-1yo817c.svelte-1yo817c{background:var(--accent2);padding:0.2em;color:var(--fill)}.main-header.svelte-1yo817c.svelte-1yo817c{display:flex;padding:1em;justify-content:space-around;align-items:end;background:var(--accent1);border:solid 1px var(--accent1);flex-direction:row}@media screen and (max-width: 800px){.main-header.svelte-1yo817c.svelte-1yo817c{flex-direction:column;text-align:center;align-items:center}}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n  import MainMenu from \'./MainMenu.svelte\';\\n  import serieConfig from \'$config/serie.config.js\';\\n  import { base } from \'$app/paths\';\\n\\n  const backgroundImage = serieConfig.banner !== undefined ? (/(^http)/.test(serieConfig.banner) ? serieConfig.banner : `${base}/${serieConfig.banner}`) : undefined;\\n<\/script>\\n\\n<header class=\\"main-header\\" style={`background-image: url(${base}/banner/banner${Math.floor(Math.random() * 5)}.png`}>\\n  <div>\\n    <h1 class=\\"main-title\\" id=\\"main-title\\" style={`transform: rotate(${Math.floor((Math.random() * 10) - 5)}deg);`}><a href={base}>{serieConfig.title}</a></h1>\\n    <span class=\\"main-subtitle\\">{serieConfig.subtitle}</span>\\n  </div>\\n  \\n  <MainMenu />\\n</header>\\n\\n<style>\\n  a {\\n    text-decoration: none;\\n    color: var(--accent2);\\n  }\\n\\n  .main-title {\\n    max-width: 600px;\\n    font-size: 5em;\\n    margin: 0.1em;\\n    padding: 0.1em;\\n  }\\n\\n  .main-title a {\\n    background: var(--accent2);\\n    color: var(--fill);\\n  }\\n\\n  .main-subtitle {\\n    background: var(--accent2);\\n    padding: 0.2em;\\n    color: var(--fill);\\n  }\\n\\n  .main-header {\\n    display: flex;\\n    padding: 1em;\\n    justify-content: space-around;\\n    align-items: end;\\n    background: var(--accent1);\\n    border: solid 1px var(--accent1);\\n    flex-direction: row;\\n  }\\n\\n  @media screen and (max-width: 800px) {\\n    .main-header {\\n      flex-direction: column;\\n      text-align: center;\\n      align-items: center;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"AAkBE,+BAAE,CACA,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,SAAS,CACtB,CAEA,yCAAY,CACV,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,KACX,CAEA,0BAAW,CAAC,gBAAE,CACZ,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,KAAK,CAAE,IAAI,MAAM,CACnB,CAEA,4CAAe,CACb,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,MAAM,CACnB,CAEA,0CAAa,CACX,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CACZ,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,SAAS,CAAC,CAChC,cAAc,CAAE,GAClB,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,0CAAa,CACX,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MACf,CACF"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="main-header svelte-1yo817c"${add_attribute("style", `background-image: url(${base}/banner/banner${Math.floor(Math.random() * 5)}.png`, 0)}><div><h1 class="main-title svelte-1yo817c" id="main-title"${add_attribute("style", `transform: rotate(${Math.floor(Math.random() * 10 - 5)}deg);`, 0)}><a${add_attribute("href", base, 0)} class="svelte-1yo817c">${escape(config.title)}</a></h1> <span class="main-subtitle svelte-1yo817c">${escape(config.subtitle)}</span></div> ${validate_component(MainMenu, "MainMenu").$$render($$result, {}, {}, {})} </header>`;
});
const css$1 = {
  code: ".content-slot.svelte-j23o33{padding:1em;max-width:1200px;margin:auto}",
  map: '{"version":3,"file":"ContentSlot.svelte","sources":["ContentSlot.svelte"],"sourcesContent":["<section class=\\"content-slot\\">\\n  <slot></slot>\\n</section>\\n\\n<style>\\n  .content-slot {\\n    padding: 1em;\\n    max-width: 1200px;\\n    margin: auto;\\n  }\\n</style>"],"names":[],"mappings":"AAKE,2BAAc,CACZ,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IACV"}'
};
const ContentSlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="content-slot svelte-j23o33">${slots.default ? slots.default({}) : ``} </section>`;
});
const css = {
  code: ".main-footer.svelte-os1ckc.svelte-os1ckc{display:flex;padding:1em;justify-content:space-around;align-items:center;background:var(--accent1);border:solid 1px var(--accent1);flex-direction:row}@media screen and (max-width: 800px){.main-footer.svelte-os1ckc.svelte-os1ckc{flex-direction:column;align-items:start;text-align:left}}.logos-container.svelte-os1ckc.svelte-os1ckc{display:flex;gap:0.5em}.logo.svelte-os1ckc.svelte-os1ckc{max-width:300px}.logo.svelte-os1ckc img.svelte-os1ckc{width:100%}.footer-text.svelte-os1ckc.svelte-os1ckc{background:var(--accent2);padding:0.2em;color:var(--fill)}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\n  import { base } from \'$app/paths\';\\n  import serieConfig from \'$config/serie.config.js\';\\n<\/script>\\n\\n<footer class=\\"main-footer\\" style={`background-image: url(${base}/banner/banner${Math.floor(Math.random() * 5)}.png`}>\\n  <div>\\n    <a href=\\"{base}/credits\\"><p class=\\"footer-text\\">{serieConfig.credits}</p></a>\\n    <span class=\\"footer-text\\">Colección creada con <a class=\\"footer-text\\"href=\\"https://github.com/srsergiorodriguez/serie-mini\\" target=\\"_blank\\">Serie Mini</a></span>\\n  </div>\\n  <div>\\n    <p class=\\"main-title no-select footer-text\\">{serieConfig.copyright}</p>\\n    <div class=\\"logos-container\\">\\n      {#if serieConfig.logos !== undefined}\\n        {#each serieConfig.logos as {img, link}}\\n          <div class=\\"logo\\">\\n            <a href={link} target=\\"_blank\\">\\n              <img src={/(^http)/.test(img) ? img : `${base}/${img}`} alt=\\"logo\\"/>\\n            </a>\\n          </div>\\n        {/each}\\n      {/if}\\n    </div>\\n  </div>\\n</footer>\\n\\n<style>\\n  .main-footer {\\n    display: flex;\\n    padding: 1em;\\n    justify-content: space-around;\\n    align-items: center;\\n    background: var(--accent1);\\n    border: solid 1px var(--accent1);\\n    flex-direction: row;\\n  }\\n\\n  @media screen and (max-width: 800px) {\\n    .main-footer {\\n      flex-direction: column;\\n      align-items: start;\\n      text-align: left;\\n    }\\n  }\\n\\n  .logos-container {\\n    display: flex;\\n    gap: 0.5em;\\n  }\\n\\n  .logo {\\n    max-width: 300px;\\n  }\\n\\n  .logo img {\\n    width: 100%;\\n  }\\n\\n  .footer-text {\\n    background: var(--accent2);\\n    padding: 0.2em;\\n    color: var(--fill);\\n  }\\n</style>"],"names":[],"mappings":"AA2BE,wCAAa,CACX,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CACZ,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,SAAS,CAAC,CAChC,cAAc,CAAE,GAClB,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,wCAAa,CACX,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,KAAK,CAClB,UAAU,CAAE,IACd,CACF,CAEA,4CAAiB,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KACP,CAEA,iCAAM,CACJ,SAAS,CAAE,KACb,CAEA,mBAAK,CAAC,iBAAI,CACR,KAAK,CAAE,IACT,CAEA,wCAAa,CACX,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,MAAM,CACnB"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="main-footer svelte-os1ckc"${add_attribute("style", `background-image: url(${base}/banner/banner${Math.floor(Math.random() * 5)}.png`, 0)}><div><a href="${escape(base, true) + "/credits"}"><p class="footer-text svelte-os1ckc">${escape(config.credits)}</p></a> <span class="footer-text svelte-os1ckc" data-svelte-h="svelte-1q5bda2">Colección creada con <a class="footer-text svelte-os1ckc" href="https://github.com/srsergiorodriguez/serie-mini" target="_blank">Serie Mini</a></span></div> <div><p class="main-title no-select footer-text svelte-os1ckc">${escape(config.copyright)}</p> <div class="logos-container svelte-os1ckc">${config.logos !== void 0 ? `${each(config.logos, ({ img, link }) => {
    return `<div class="logo svelte-os1ckc" data-svelte-h="svelte-xyvup8"><a${add_attribute("href", link, 0)} target="_blank"><img${add_attribute("src", /(^http)/.test(img) ? img : `${base}/${img}`, 0)} alt="logo" class="svelte-os1ckc"></a> </div>`;
  })}` : ``}</div></div> </footer>`;
});
export {
  ContentSlot as C,
  Default as D,
  Footer as F,
  Header as H,
  config as c,
  t
};
