import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as Page } from "../../../chunks/Page.js";
import { I as ItemPreviewMarked } from "../../../chunks/ItemPreviewMarked.js";
import { m as mdData, S as SvelteMarkdown } from "../../../chunks/md.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const md = mdData.tour.body;
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render(
        $$result,
        {
          source: md,
          renderers: { image: ItemPreviewMarked }
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page_1 as default
};
