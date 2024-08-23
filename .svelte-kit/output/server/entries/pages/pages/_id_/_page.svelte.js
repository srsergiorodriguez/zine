import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Page } from "../../../../chunks/Page.js";
import { u as uniqueId } from "../../../../chunks/helpers.js";
import { b as base } from "../../../../chunks/paths.js";
import { p as projectMetadata } from "../../../../chunks/metadata.js";
import { c as config } from "../../../../chunks/Footer.js";
const css$1 = {
  code: ".viewer-container.svelte-1wx3wfr{border:1px solid rgba(0,0,0,0.2);max-width:100%;height:500px;margin:auto}.manifest-link.svelte-1wx3wfr{position:relative;bottom:20px;right:5px;text-align:right}.osd-container.svelte-1wx3wfr{width:100%;height:100%}",
  map: `{"version":3,"file":"IIIFViewer.svelte","sources":["IIIFViewer.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { uniqueId } from '$lib/helpers';\\n  import { base } from '$app/paths';\\n  import { projectMetadata } from '$routes/data/metadata';\\n  import { dev } from '$app/environment';\\n\\n  export let pid;\\n\\n  const viewerID = uniqueId();\\n\\n  const itemMetadata = projectMetadata.find(d => d.pid === pid);\\n\\n  const tileSources = getTileSources(itemMetadata._images);\\n\\n  function getTileSources(n) {\\n    const tileSources = [];\\n    for (let i = 0; i < n; i++) {\\n      const path = \`\${base}/iiif/\${pid}/\${i}/\${dev ? \\"_info\\" : \\"info\\"}.json\`;\\n      tileSources.push(path);\\n    }\\n    return tileSources\\n  }\\n\\n  let viewer;\\n  onMount(() => {\\n    import('openseadragon').then(module => {\\n      const OpenSeadragon = module.default;\\n      viewer = OpenSeadragon({\\n        id: \`osd-container-\${viewerID}\`,\\n        preload: false,\\n        sequenceMode: true,\\n        prefixUrl: \`\${base}/openseadragon/images/\`,\\n        tileSources\\n      });\\n    }).catch(error => {\\n      console.error('Error loading OpenSeadragon:', error);\\n    });\\n  });\\n<\/script>\\n\\n<div class=\\"viewer-container\\">\\n  <div id=\\"osd-container-{viewerID}\\" class=\\"osd-container\\"></div>\\n  {#if itemMetadata.manifest !== undefined}\\n    <div class=\\"manifest-link\\"><a href=\\"{dev ? itemMetadata._manifest : itemMetadata.manifest}\\" target=\\"_blank\\">IIIF Manifest</a></div>\\n  {/if}\\n</div>\\n\\n<style>\\n  .viewer-container {\\n    border: 1px solid rgba(0,0,0,0.2);\\n    max-width: 100%;\\n    height: 500px;\\n    margin: auto;\\n  }\\n\\n  .manifest-link {\\n    position: relative;\\n    bottom: 20px;\\n    right: 5px;\\n    text-align: right;\\n  }\\n\\n  .osd-container {\\n    width: 100%;\\n    height: 100%;\\n  }\\n</style>"],"names":[],"mappings":"AAiDE,gCAAkB,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACjC,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IACV,CAEA,6BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,KACd,CAEA,6BAAe,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}`
};
const IIIFViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pid } = $$props;
  const viewerID = uniqueId();
  const itemMetadata = projectMetadata.find((d) => d.pid === pid);
  getTileSources(itemMetadata._images);
  function getTileSources(n) {
    const tileSources = [];
    for (let i = 0; i < n; i++) {
      const path = `${base}/iiif/${pid}/${i}/${"info"}.json`;
      tileSources.push(path);
    }
    return tileSources;
  }
  if ($$props.pid === void 0 && $$bindings.pid && pid !== void 0) $$bindings.pid(pid);
  $$result.css.add(css$1);
  return `<div class="viewer-container svelte-1wx3wfr"><div id="${"osd-container-" + escape(viewerID, true)}" class="osd-container svelte-1wx3wfr"></div> ${itemMetadata.manifest !== void 0 ? `<div class="manifest-link svelte-1wx3wfr"><a${add_attribute("href", itemMetadata.manifest, 0)} target="_blank">IIIF Manifest</a></div>` : ``} </div>`;
});
const css = {
  code: ".metadata-card.svelte-18ajzuo.svelte-18ajzuo{padding:0;border:1px solid rgba(0,0,0,0.2);max-width:100%;margin:auto;margin-top:1em;padding:0px 1em}.metadata-card.svelte-18ajzuo ul.svelte-18ajzuo{display:flex;flex-direction:column;gap:0.3em;padding:0}.metadata-item.svelte-18ajzuo.svelte-18ajzuo{display:flex;flex-wrap:wrap;gap:1em;justify-content:left;list-style-type:none}.metadata-item.block-item.svelte-18ajzuo.svelte-18ajzuo{gap:0.3em;flex-direction:column}.metadata-key.svelte-18ajzuo.svelte-18ajzuo,a.svelte-18ajzuo.svelte-18ajzuo{color:var(--accent2);font-weight:bold}.video.svelte-18ajzuo.svelte-18ajzuo{max-width:80%}.image-container.svelte-18ajzuo.svelte-18ajzuo{max-width:80%;max-height:900px}.image-container.svelte-18ajzuo img.svelte-18ajzuo{max-width:100%;max-height:100%}.metadata-item.svelte-18ajzuo iframe.svelte-18ajzuo{max-width:80%;min-height:500px}",
  map: '{"version":3,"file":"MetadataCard.svelte","sources":["MetadataCard.svelte"],"sourcesContent":["<script>\\n  import serieConfig from \'$config/serie.config\';\\n  import { base } from \'$app/paths\';\\n  import { projectMetadata } from \'$routes/data/metadata\';\\n\\n  const pagesConfig = serieConfig.pages;\\n\\n  export let itemMetadata;\\n<\/script>\\n\\n<div class=\\"metadata-card\\">\\n  <ul>\\n    {#each pagesConfig.metadataToShow as {key, label, type} (key)}\\n      {#if type === \\"text\\"}\\n        <li class=\\"metadata-item\\"><span class=\\"metadata-key\\">{label}:</span><span>{itemMetadata[key]}</span></li>\\n      {:else if type === \\"link\\"}\\n        <li class=\\"metadata-item\\"><a class=\\"metadata-key\\" href={itemMetadata[key]} target=\\"_blank\\">{label}</a></li>\\n      {:else if type === \\"ref\\"}\\n        <li class=\\"metadata-item\\">\\n          <span class=\\"metadata-key\\">{label}:</span>\\n          {#each itemMetadata[key].split(\\"/\\") as ref}\\n            {@const item = projectMetadata.find(d => d.pid === ref.trim())}\\n            {#if item !== undefined}\\n              <a href=\\"{base}/pages/{item.pid}\\" data-sveltekit-reload>{item.label}</a>\\n            {/if}\\n          {/each}\\n        </li>\\n      {:else if type === \\"image\\"}\\n        <li class=\\"metadata-item block-item\\">\\n          <span class=\\"metadata-key\\">{label}:</span>\\n          <div class=\\"image-container\\">\\n            <img src={/(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`} alt={label} />\\n          </div>\\n        </li>\\n      {:else if type === \\"video\\"}\\n        <li class=\\"metadata-item block-item\\">\\n          <span class=\\"metadata-key\\">{label}:</span>\\n          <div class=\\"video-container\\">\\n            <!-- svelte-ignore a11y-media-has-caption -->\\n            <video src={/(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`} class=\\"video\\" controls controlsList=\\"nodownload noremoteplayback\\">Your browser does not support the video element / Tu buscador no soporta reprodución de video</video>\\n          </div>\\n        </li>\\n      {:else if type === \\"audio\\"}\\n        <li class=\\"metadata-item block-item\\">\\n          <span class=\\"metadata-key\\">{label}:</span>\\n          <audio controls><source src={/(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`}>Your browser does not support the audio element / Tu buscador no soporta reproducción de audio</audio>\\n        </li>\\n      {:else if type === \\"youtube\\"}\\n        <li class=\\"metadata-item block-item\\">\\n          <span class=\\"metadata-key\\">{label}:</span>\\n          <iframe src={`https://www.youtube.com/embed/${itemMetadata[key]}`} title=\\"YouTube video player\\" frameborder=\\"0\\" referrerpolicy=\\"strict-origin-when-cross-origin\\" allowfullscreen></iframe>\\n        </li>\\n      {/if}\\n    {/each}\\n  </ul>\\n</div>\\n\\n<style>\\n  .metadata-card {\\n    padding: 0;\\n    border: 1px solid rgba(0,0,0,0.2);\\n    max-width: 100%;\\n    margin: auto;\\n    margin-top: 1em;\\n    padding: 0px 1em;\\n  }\\n\\n  .metadata-card ul{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.3em;\\n    padding: 0;\\n  }\\n\\n  .metadata-item {\\n    display: flex;\\n    flex-wrap: wrap;\\n    gap: 1em;\\n    justify-content: left;\\n    list-style-type: none;\\n  }\\n\\n  .metadata-item.block-item {\\n    gap: 0.3em;\\n    flex-direction: column;\\n  }\\n\\n  .metadata-key, a {\\n    color: var(--accent2);\\n    font-weight: bold;\\n  }\\n\\n  .video {\\n    max-width: 80%;\\n  }\\n\\n  .image-container {\\n    max-width: 80%;\\n    max-height: 900px;\\n  }\\n\\n  .image-container img {\\n    max-width: 100%;\\n    max-height: 100%;\\n  }\\n\\n  .metadata-item iframe {\\n    max-width: 80%;\\n    min-height: 500px;\\n  }\\n\\n</style>"],"names":[],"mappings":"AA0DE,4CAAe,CACb,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACjC,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,GAAG,CAAC,GACf,CAEA,6BAAc,CAAC,iBAAE,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,OAAO,CAAE,CACX,CAEA,4CAAe,CACb,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,IACnB,CAEA,cAAc,yCAAY,CACxB,GAAG,CAAE,KAAK,CACV,cAAc,CAAE,MAClB,CAEA,2CAAa,CAAE,+BAAE,CACf,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,WAAW,CAAE,IACf,CAEA,oCAAO,CACL,SAAS,CAAE,GACb,CAEA,8CAAiB,CACf,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,KACd,CAEA,+BAAgB,CAAC,kBAAI,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CAEA,6BAAc,CAAC,qBAAO,CACpB,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,KACd"}'
};
const MetadataCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pagesConfig = config.pages;
  let { itemMetadata } = $$props;
  if ($$props.itemMetadata === void 0 && $$bindings.itemMetadata && itemMetadata !== void 0) $$bindings.itemMetadata(itemMetadata);
  $$result.css.add(css);
  return `<div class="metadata-card svelte-18ajzuo"><ul class="svelte-18ajzuo">${each(pagesConfig.metadataToShow, ({ key, label, type }) => {
    return `${type === "text" ? `<li class="metadata-item svelte-18ajzuo"><span class="metadata-key svelte-18ajzuo">${escape(label)}:</span><span>${escape(itemMetadata[key])}</span></li>` : `${type === "link" ? `<li class="metadata-item svelte-18ajzuo"><a class="metadata-key svelte-18ajzuo"${add_attribute("href", itemMetadata[key], 0)} target="_blank">${escape(label)}</a></li>` : `${type === "ref" ? `<li class="metadata-item svelte-18ajzuo"><span class="metadata-key svelte-18ajzuo">${escape(label)}:</span> ${each(itemMetadata[key].split("/"), (ref) => {
      let item = projectMetadata.find((d) => d.pid === ref.trim());
      return ` ${item !== void 0 ? `<a href="${escape(base, true) + "/pages/" + escape(item.pid, true)}" data-sveltekit-reload class="svelte-18ajzuo">${escape(item.label)}</a>` : ``}`;
    })} </li>` : `${type === "image" ? `<li class="metadata-item block-item svelte-18ajzuo"><span class="metadata-key svelte-18ajzuo">${escape(label)}:</span> <div class="image-container svelte-18ajzuo"><img${add_attribute(
      "src",
      /(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`,
      0
    )}${add_attribute("alt", label, 0)} class="svelte-18ajzuo"></div> </li>` : `${type === "video" ? `<li class="metadata-item block-item svelte-18ajzuo"><span class="metadata-key svelte-18ajzuo">${escape(label)}:</span> <div class="video-container"> <video${add_attribute(
      "src",
      /(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`,
      0
    )} class="video svelte-18ajzuo" controls controlslist="nodownload noremoteplayback">Your browser does not support the video element / Tu buscador no soporta reprodución de video</video></div> </li>` : `${type === "audio" ? `<li class="metadata-item block-item svelte-18ajzuo"><span class="metadata-key svelte-18ajzuo">${escape(label)}:</span> <audio controls><source${add_attribute(
      "src",
      /(^http)/.test(itemMetadata[key]) ? itemMetadata[key] : `${base}/${itemMetadata[key]}`,
      0
    )}>Your browser does not support the audio element / Tu buscador no soporta reproducción de audio</audio> </li>` : `${type === "youtube" ? `<li class="metadata-item block-item svelte-18ajzuo"><span class="metadata-key svelte-18ajzuo">${escape(label)}:</span> <iframe${add_attribute("src", `https://www.youtube.com/embed/${itemMetadata[key]}`, 0)} title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="svelte-18ajzuo"></iframe> </li>` : ``}`}`}`}`}`}`}`;
  })}</ul> </div>`;
});
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const itemMetadata = data.itemMetadata;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1dkgvkw_START -->${$$result.title = `<title>${escape(`${itemMetadata.label} - ${config.title}`)}</title>`, ""}<!-- HEAD_svelte-1dkgvkw_END -->`, ""} ${validate_component(Page, "Page").$$render($$result, { name: itemMetadata.label }, {}, {
    default: () => {
      return `<h1>${escape(itemMetadata.label)}</h1> ${`${validate_component(IIIFViewer, "IIIFViewer").$$render($$result, { pid: itemMetadata.pid }, {}, {})}`} ${validate_component(MetadataCard, "MetadataCard").$$render($$result, { itemMetadata }, {}, {})}`;
    }
  })}`;
});
export {
  Page_1 as default
};
