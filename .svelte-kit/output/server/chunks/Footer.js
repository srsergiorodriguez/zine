import { c as create_ssr_component, a as subscribe, i as set_store_value, d as add_attribute, e as escape, v as validate_component, b as each } from "./ssr.js";
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
  page: { es: "Página", en: "Page" }
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
  map: null
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
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="main-header svelte-1yo817c"${add_attribute("style", `background-image: url(${base}/banner/banner${Math.floor(Math.random() * 5)}.png`, 0)}><div><h1 class="main-title svelte-1yo817c" id="main-title"${add_attribute("style", `transform: rotate(${Math.floor(Math.random() * 10 - 5)}deg);`, 0)}><a${add_attribute("href", base, 0)} class="svelte-1yo817c">${escape(config.title)}</a></h1> <span class="main-subtitle svelte-1yo817c">${escape(config.subtitle)}</span></div> ${validate_component(MainMenu, "MainMenu").$$render($$result, {}, {}, {})} </header>`;
});
const css$1 = {
  code: ".content-slot.svelte-j23o33{padding:1em;max-width:1200px;margin:auto}",
  map: null
};
const ContentSlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="content-slot svelte-j23o33">${slots.default ? slots.default({}) : ``} </section>`;
});
const css = {
  code: ".main-footer.svelte-os1ckc.svelte-os1ckc{display:flex;padding:1em;justify-content:space-around;align-items:center;background:var(--accent1);border:solid 1px var(--accent1);flex-direction:row}@media screen and (max-width: 800px){.main-footer.svelte-os1ckc.svelte-os1ckc{flex-direction:column;align-items:start;text-align:left}}.logos-container.svelte-os1ckc.svelte-os1ckc{display:flex;gap:0.5em}.logo.svelte-os1ckc.svelte-os1ckc{max-width:300px}.logo.svelte-os1ckc img.svelte-os1ckc{width:100%}.footer-text.svelte-os1ckc.svelte-os1ckc{background:var(--accent2);padding:0.2em;color:var(--fill)}",
  map: null
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
