import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as add_attribute } from "../../chunks/ssr.js";
import { D as Default, H as Header, C as ContentSlot, F as Footer } from "../../chunks/Footer.js";
import { b as base } from "../../chunks/paths.js";
import { I as ItemPreviewMarked } from "../../chunks/ItemPreviewMarked.js";
import { m as metadata } from "../../chunks/metadata.js";
import { m as mdData, S as SvelteMarkdown } from "../../chunks/md.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Default, "Default").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(ContentSlot, "ContentSlot").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const css$1 = {
  code: ".preview-carousel.svelte-7ovhgn.svelte-7ovhgn{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-evenly;gap:1.5em;overflow:scroll}.preview-item.svelte-7ovhgn.svelte-7ovhgn{display:flex;flex-direction:column;width:256px;text-align:center}.preview-item.svelte-7ovhgn img.svelte-7ovhgn{max-width:200px;max-height:200px;object-fit:cover;object-position:100% 0}",
  map: null
};
const VCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metadata: metadata2 } = $$props;
  const selectNr = Math.min(3, metadata2.length);
  const selected = getSelection(metadata2);
  function getSelection(arr) {
    const selected2 = [];
    while (selected2.length < selectNr) {
      const rnd = Math.floor(Math.random() * metadata2.length);
      if (!selected2.includes(rnd)) {
        selected2.push(rnd);
      }
    }
    return selected2.map((d) => arr[d]);
  }
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata2 !== void 0)
    $$bindings.metadata(metadata2);
  $$result.css.add(css$1);
  return `<div class="preview-carousel svelte-7ovhgn">${each(selected, (d) => {
    return `<div class="preview-item svelte-7ovhgn">${d._images > 0 ? `<a href="${escape(base, true) + "/pages/" + escape(d.pid, true)}"><img src="${escape(base, true) + "/iiif/" + escape(d.pid, true) + "/0/full/256,/0/default.jpg"}"${add_attribute("alt", d.label, 0)} class="svelte-7ovhgn"></a>` : ``} <a class="silent-link" href="${escape(base, true) + "/pages/" + escape(d.pid, true)}">${escape(d.label)}</a> </div>`;
  })} </div>`;
});
const css = {
  code: ".two-columns.svelte-umjgv0{display:grid;grid-template-columns:1fr 0.5fr}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const md = mdData.home.body;
  $$result.css.add(css);
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="two-columns svelte-umjgv0"><div>${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render(
        $$result,
        {
          source: md,
          renderers: { image: ItemPreviewMarked }
        },
        {},
        {}
      )}</div> <div><h2 style="text-align: center;" data-svelte-h="svelte-l6qnwy">Al azar</h2> ${validate_component(VCarousel, "VCarousel").$$render($$result, { metadata }, {}, {})}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
