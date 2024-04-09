import { c as create_ssr_component, a as subscribe, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { P as Page } from "../../../chunks/Page.js";
import { t } from "../../../chunks/Footer.js";
import { m as metadata } from "../../../chunks/metadata.js";
import { m as mdData, S as SvelteMarkdown } from "../../../chunks/md.js";
const css = {
  code: ".metadata-table-container.svelte-1zevmy{border:1px dotted rgba(0,0,0,0.2);max-height:700px;max-width:100%;overflow:scroll}",
  map: null
};
const MetadataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { metadata: metadata2 } = $$props;
  const metadataFiltered = metadata2.map((d) => {
    const filtered = {};
    for (let [key, value] of Object.entries(d)) {
      if (!/^_/.test(key))
        filtered[key] = value;
    }
    return filtered;
  });
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata2 !== void 0)
    $$bindings.metadata(metadata2);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `<h2>${escape($t.metadataTable)}</h2> <div class="metadata-table-container svelte-1zevmy"><table class="metadata-table"><tr>${each(Object.keys(metadataFiltered[0]), (h) => {
    return `<th>${escape(h)}</th>`;
  })}</tr> ${each(metadataFiltered, (row) => {
    return `<tr>${each(Object.values(row), (d) => {
      return `<td>${escape(d)}</td>`;
    })} </tr>`;
  })}</table></div> <div class="button-container"><button class="default-button">${escape($t.download)} CSV</button> </div>`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const md = mdData.metadata.body;
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: md }, {}, {})} ${validate_component(MetadataTable, "MetadataTable").$$render($$result, { metadata }, {}, {})}`;
    }
  })}`;
});
export {
  Page_1 as default
};
