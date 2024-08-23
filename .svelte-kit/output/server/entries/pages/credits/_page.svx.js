import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as Page$1 } from "../../../chunks/Page.js";
const metadata = { "name": "credits", "layout": "page" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page$1, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-1f6djpb">Créditos</h1> <p data-svelte-h="svelte-18bx8bs">Esta colección fue creada por <a href="https://srsergiorodriguez.github.io/" rel="nofollow">Sergio Rodríguez Gómez</a>.</p> <p data-svelte-h="svelte-3thp10">Basada en la plantilla <a href="https://github.com/srsergiorodriguez/serie-mini" rel="nofollow">Serie Mini</a>, para la creación de colecciones digitales, creada por <a href="https://srsergiorodriguez.github.io/" rel="nofollow">Sergio Rodríguez Gómez</a>.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
