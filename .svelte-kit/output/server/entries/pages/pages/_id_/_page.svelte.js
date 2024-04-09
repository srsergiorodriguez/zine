import { c as create_ssr_component, e as escape, d as add_attribute, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page } from "../../../../chunks/Page.js";
import { u as uniqueId } from "../../../../chunks/helpers.js";
import { b as base } from "../../../../chunks/paths.js";
import { m as metadata } from "../../../../chunks/metadata.js";
import { c as config } from "../../../../chunks/Footer.js";
const css$1 = {
  code: ".viewer-container.svelte-1wx3wfr{border:1px solid rgba(0,0,0,0.2);max-width:100%;height:500px;margin:auto}.manifest-link.svelte-1wx3wfr{position:relative;bottom:20px;right:5px;text-align:right}.osd-container.svelte-1wx3wfr{width:100%;height:100%}",
  map: null
};
const IIIFViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pid } = $$props;
  const viewerID = uniqueId();
  const itemMetadata = metadata.find((d) => d.pid === pid);
  getTileSources(itemMetadata._images);
  function getTileSources(n) {
    const tileSources = [];
    for (let i = 0; i < n; i++) {
      const path = `${base}/iiif/${pid}/${i}/${"info"}.json`;
      tileSources.push(path);
    }
    return tileSources;
  }
  if ($$props.pid === void 0 && $$bindings.pid && pid !== void 0)
    $$bindings.pid(pid);
  $$result.css.add(css$1);
  return `<div class="viewer-container svelte-1wx3wfr"><div id="${"osd-container-" + escape(viewerID, true)}" class="osd-container svelte-1wx3wfr"></div> ${itemMetadata.manifest !== void 0 ? `<div class="manifest-link svelte-1wx3wfr"><a${add_attribute("href", itemMetadata.manifest, 0)} target="_blank">IIIF Manifest</a></div>` : ``} </div>`;
});
const css = {
  code: ".metadata-card.svelte-zlc8y0.svelte-zlc8y0{padding:0;border:1px solid rgba(0,0,0,0.2);max-width:100%;margin:auto;margin-top:1em;padding:0px 1em}.metadata-card.svelte-zlc8y0 ul.svelte-zlc8y0{display:flex;flex-direction:column;gap:0.3em;padding:0}.metadata-item.svelte-zlc8y0.svelte-zlc8y0{display:flex;flex-wrap:wrap;gap:1em;justify-content:left;list-style-type:none}.metadata-item.block-item.svelte-zlc8y0.svelte-zlc8y0{gap:0.3em;flex-direction:column}.metadata-key.svelte-zlc8y0.svelte-zlc8y0,a.svelte-zlc8y0.svelte-zlc8y0{color:var(--accent2);font-weight:bold}.video.svelte-zlc8y0.svelte-zlc8y0{max-width:80%}.image-container.svelte-zlc8y0.svelte-zlc8y0{max-width:80%;max-height:900px}.image-container.svelte-zlc8y0 img.svelte-zlc8y0{width:100%}.metadata-item.svelte-zlc8y0 iframe.svelte-zlc8y0{max-width:80%;min-height:500px}",
  map: null
};
const MetadataCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pagesConfig = config.pages;
  let { itemMetadata } = $$props;
  if ($$props.itemMetadata === void 0 && $$bindings.itemMetadata && itemMetadata !== void 0)
    $$bindings.itemMetadata(itemMetadata);
  $$result.css.add(css);
  return `<div class="metadata-card svelte-zlc8y0"><ul class="svelte-zlc8y0">${each(pagesConfig.metadataToShow, ({ key, label, type }) => {
    return `${type === "text" ? `<li class="metadata-item svelte-zlc8y0"><span class="metadata-key svelte-zlc8y0">${escape(label)}:</span><span>${escape(itemMetadata[key])}</span></li>` : `${type === "link" ? `<li class="metadata-item svelte-zlc8y0"><a class="metadata-key svelte-zlc8y0"${add_attribute("href", itemMetadata[key], 0)} target="_blank">${escape(label)}</a></li>` : `${type === "ref" ? `<li class="metadata-item svelte-zlc8y0"><span class="metadata-key svelte-zlc8y0">${escape(label)}:</span> ${each(itemMetadata[key].split("/"), (ref) => {
      let item = metadata.find((d) => d.pid === ref.trim());
      return ` ${item !== void 0 ? `<a href="${escape(base, true) + "/pages/" + escape(item.pid, true)}" data-sveltekit-reload class="svelte-zlc8y0">${escape(item.label)}</a>` : ``}`;
    })} </li>` : `${type === "image" ? `<li class="metadata-item block-item svelte-zlc8y0"><span class="metadata-key svelte-zlc8y0">${escape(label)}:</span> <div class="image-container svelte-zlc8y0"><img${add_attribute(
      "src",
      /(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`,
      0
    )}${add_attribute("alt", label, 0)} class="svelte-zlc8y0"></div> </li>` : `${type === "video" ? `<li class="metadata-item block-item svelte-zlc8y0"><span class="metadata-key svelte-zlc8y0">${escape(label)}:</span> <div class="video-container"> <video${add_attribute(
      "src",
      /(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`,
      0
    )} class="video svelte-zlc8y0" controls controlslist="nodownload noremoteplayback">Your browser does not support the video element / Tu buscador no soporta reprodución de video</video></div> </li>` : `${type === "audio" ? `<li class="metadata-item block-item svelte-zlc8y0"><span class="metadata-key svelte-zlc8y0">${escape(label)}:</span> <audio controls><source${add_attribute(
      "src",
      /(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`,
      0
    )}>Your browser does not support the audio element / Tu buscador no soporta reproducción de audio</audio> </li>` : `${type === "youtube" ? `<li class="metadata-item block-item svelte-zlc8y0"><span class="metadata-key svelte-zlc8y0">${escape(label)}:</span> <iframe${add_attribute("src", `https://www.youtube.com/embed/${itemMetadata[key]}`, 0)} title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-zlc8y0"></iframe> </li>` : ``}`}`}`}`}`}`}`;
  })}</ul> </div>`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const itemMetadata = data.itemMetadata;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>${escape(itemMetadata.label)}</h1> ${itemMetadata._images > 0 ? `${validate_component(IIIFViewer, "IIIFViewer").$$render($$result, { pid: itemMetadata.pid }, {}, {})}` : ``} ${validate_component(MetadataCard, "MetadataCard").$$render($$result, { itemMetadata }, {}, {})}`;
    }
  })}`;
});
export {
  Page_1 as default
};
