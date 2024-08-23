import { c as create_ssr_component, a as subscribe, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { P as Page$1 } from "../../../chunks/Page.js";
import { t } from "../../../chunks/Footer.js";
import { p as projectMetadata } from "../../../chunks/metadata.js";
const css = {
  code: ".metadata-table-container.svelte-1akrh8d{border-bottom:1px solid rgba(0,0,0,0.2);max-height:700px;max-width:100%;overflow:scroll}",
  map: '{"version":3,"file":"MetadataTable.svelte","sources":["MetadataTable.svelte"],"sourcesContent":["<script>\\n  import { t } from \'$stores/translations\';\\n  import { projectMetadata } from \\"$data/metadata\\";\\n  export let metadata = projectMetadata;\\n\\n  const metadataFiltered = metadata.map(d => {\\n    const filtered = {};\\n    for (let [key, value] of Object.entries(d)) {\\n      if (!(/^_/.test(key))) filtered[key] = value;\\n    }\\n    return filtered\\n  });\\n\\n  function downloadMetadata() {\\n    const separator = \\",\\"\\n    let str = [Object.keys(metadataFiltered[0]).join(separator)]\\n    for (let d of metadataFiltered) {\\n      str.push(Object.values(d).map(e => (new RegExp(`${separator}`)).test(e) ? `\\"${e}\\"` : e).join(separator));\\n    }\\n    str = str.join(\\"\\\\n\\");\\n\\n    const link = document.createElement(\\"a\\");\\n    const file = new Blob([str], {type: \\"text/plain\\"});\\n    link.href = URL.createObjectURL(file);\\n    link.download = \\"metadata.csv\\";\\n    link.click();\\n    URL.revokeObjectURL(link.href);\\n  }\\n\\n<\/script>\\n\\n<h2>{$t.metadataTable}</h2>\\n\\n<div class=\\"metadata-table-container\\">\\n  <table class=\\"metadata-table\\">\\n    <tr>\\n      {#each Object.keys(metadataFiltered[0]) as h}\\n        <th>{h}</th>\\n      {/each}\\n    </tr>\\n    {#each metadataFiltered as row}\\n      <tr>\\n        {#each Object.values(row) as d}\\n          <td>{d}</td>\\n        {/each}\\n      </tr>\\n    {/each}\\n  </table>\\n</div>\\n\\n<div class=\\"button-container\\">\\n  <button class=\\"default-button\\" on:click={downloadMetadata}>{$t.download} CSV</button>\\n</div>\\n\\n<style>\\n  .metadata-table-container {\\n    border-bottom: 1px solid rgba(0,0,0,0.2);\\n    max-height: 700px;\\n    max-width: 100%;\\n    overflow: scroll;\\n  }\\n</style>"],"names":[],"mappings":"AAuDE,wCAA0B,CACxB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,MACZ"}'
};
const MetadataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { metadata: metadata2 = projectMetadata } = $$props;
  const metadataFiltered = metadata2.map((d) => {
    const filtered = {};
    for (let [key, value] of Object.entries(d)) {
      if (!/^_/.test(key)) filtered[key] = value;
    }
    return filtered;
  });
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata2 !== void 0) $$bindings.metadata(metadata2);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `<h2>${escape($t.metadataTable)}</h2> <div class="metadata-table-container svelte-1akrh8d"><table class="metadata-table"><tr>${each(Object.keys(metadataFiltered[0]), (h) => {
    return `<th>${escape(h)}</th>`;
  })}</tr> ${each(metadataFiltered, (row) => {
    return `<tr>${each(Object.values(row), (d) => {
      return `<td>${escape(d)}</td>`;
    })} </tr>`;
  })}</table></div> <div class="button-container"><button class="default-button">${escape($t.download)} CSV</button> </div>`;
});
const metadata = { "name": "metadata", "layout": "page" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page$1, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-rtrtq6">Metadatos</h1> <p data-svelte-h="svelte-1fxghb2">En esta sección se encuentran los metadatos de la colección. Pueden descargarse y usarse libremente.</p> <h2 data-svelte-h="svelte-1oups7d">Protocolo</h2> <p data-svelte-h="svelte-19wuz58">Este es el protocolo que especifica la construcción de los datos de la colección:</p> <table data-svelte-h="svelte-p7cc4"><thead><tr><th>Dato</th> <th>Descripción</th> <th>Tipo</th></tr></thead> <tbody><tr><td>pid</td> <td>Identificador único</td> <td>id</td></tr> <tr><td>label</td> <td>Nombre de la obra. Iniciales con mayúsculas</td> <td>texto</td></tr> <tr><td>autores</td> <td>Autores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos</td> <td>categórico</td></tr> <tr><td>descripcion</td> <td>Descripción corta de la obra</td> <td>texto</td></tr> <tr><td>grupo</td> <td>Grupo o colectivo que produjo o editó la obra</td> <td>categórico</td></tr> <tr><td>editores</td> <td>Editores de la obra separados por comas. Iniciales con mayúsculas, incluir acentos</td> <td>categórico</td></tr> <tr><td>fecha</td> <td>Año de publicación. Escrito en número completo (Ej. 1990)</td> <td>ordinal</td></tr> <tr><td>ciudad</td> <td>Ciudad de publicación. Iniciales con mayúsculas, incluir acentos</td> <td>categórico</td></tr> <tr><td>conseguido</td> <td>Forma de adquisición de la obra. (Ej. regalo, compra, intercambio y persona o lugar)</td> <td>texto</td></tr> <tr><td>tipo_principal</td> <td>Tipo de contenido principal: (Ilustración, Texto, Cómic Fotografía)</td> <td>categórico</td></tr> <tr><td>nota</td> <td>Información adicional</td> <td>texto</td></tr> <tr><td>medio_impresion</td> <td>Medio de impresión principal: (Offset, Digital, Fotocopia, Risografía, Tipos Móviles)</td> <td>categórico</td></tr> <tr><td>intervencion_manual</td> <td>¿Tiene la obra algún tipo de intervención manual?: (sí, no)</td> <td>categórico</td></tr> <tr><td>portada_color</td> <td>¿Tiene la obra portada full color, duotono o monotono?: (full, duo, tri, no)</td> <td>categórico</td></tr> <tr><td>portada_especial</td> <td>¿Usa la portada una técnica de impresión diferente al contenido?: (No o especificar)</td> <td>categórico</td></tr> <tr><td>internas_color</td> <td>¿Tienen la páginas internas full color, duotono o monotono?: (full, duo, tri, no)</td> <td>categórico</td></tr> <tr><td>papel_portada_color</td> <td>¿Tiene la portada un papel de color diferente al blanco?: (sí, no)</td> <td>categórico</td></tr> <tr><td>compaginado</td> <td>Formato de compaginación: (Cuadernillo, Periódico, Ruanita, Plegable)</td> <td>categórico</td></tr></tbody></table> ${validate_component(MetadataTable, "MetadataTable").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
