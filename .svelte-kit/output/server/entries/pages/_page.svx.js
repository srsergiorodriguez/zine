import { c as create_ssr_component, b as add_attribute, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { D as Default, H as Header, C as ContentSlot, F as Footer } from "../../chunks/Footer.js";
import { b as base } from "../../chunks/paths.js";
import { p as projectMetadata } from "../../chunks/metadata.js";
const css$1 = {
  code: ".preview-carousel.svelte-1scsiv2.svelte-1scsiv2{display:flex;flex-wrap:wrap;flex-direction:var(--direction);justify-content:space-evenly;gap:1.5em;overflow:scroll}.preview-item.svelte-1scsiv2.svelte-1scsiv2{display:flex;flex-direction:column;width:256px;text-align:center}.preview-item.svelte-1scsiv2 img.svelte-1scsiv2{max-width:200px;max-height:200px;object-fit:cover;object-position:100% 0}",
  map: `{"version":3,"file":"RandomBar.svelte","sources":["RandomBar.svelte"],"sourcesContent":["<script>\\n  import { base } from '$app/paths';\\n  import serieConfig from '$config/serie.config';\\n  import { projectMetadata } from '$data/metadata.js';\\n\\n  export let metadata = projectMetadata;\\n  export let direction = \\"row\\";\\n  export let itemsNr = 3;\\n\\n  const selectNr = Math.min(itemsNr, metadata.length);\\n  const selected = getSelection(metadata);\\n  \\n  function getSelection(arr) {\\n    const selected = [];\\n    while (selected.length < selectNr) {\\n      const rnd = Math.floor(Math.random() * metadata.length);\\n      if (!selected.includes(rnd)) {\\n        selected.push(rnd);\\n      }\\n    }\\n    return selected.map(d => arr[d])\\n  }\\n\\n<\/script>\\n\\n<div class=\\"preview-carousel\\" style={\`--direction:\${direction}\`}>\\n  {#each selected as d (d.pid)}\\n    <div class=\\"preview-item\\">\\n      {#if serieConfig.pages.iiifViewer && d._images > 0}\\n        <a href=\\"{base}/pages/{d.pid}\\"><img src=\\"{base}/iiif/{d.pid}/0/full/256,/0/default.jpg\\" alt={d.label}/></a>\\n      {/if}\\n      <a class=\\"silent-link\\" href=\\"{base}/pages/{d.pid}\\">{d.label}</a>\\n    </div>\\n  {/each}\\n</div>\\n\\n<style>\\n  .preview-carousel {\\n    display: flex;\\n    flex-wrap: wrap;\\n    flex-direction: var(--direction);\\n    justify-content: space-evenly;\\n    gap: 1.5em;\\n    overflow: scroll;\\n  }\\n\\n  .preview-item {\\n    display: flex;\\n    flex-direction: column;\\n    width: 256px;\\n    text-align: center;\\n  }\\n\\n  .preview-item img {\\n    max-width: 200px;\\n    max-height: 200px;\\n    object-fit: cover;\\n    object-position: 100% 0;\\n  }\\n\\n</style>"],"names":[],"mappings":"AAqCE,+CAAkB,CAChB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,IAAI,WAAW,CAAC,CAChC,eAAe,CAAE,YAAY,CAC7B,GAAG,CAAE,KAAK,CACV,QAAQ,CAAE,MACZ,CAEA,2CAAc,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MACd,CAEA,4BAAa,CAAC,kBAAI,CAChB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACjB,eAAe,CAAE,IAAI,CAAC,CACxB"}`
};
const RandomBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metadata: metadata2 = projectMetadata } = $$props;
  let { direction = "row" } = $$props;
  let { itemsNr = 3 } = $$props;
  const selectNr = Math.min(itemsNr, metadata2.length);
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
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata2 !== void 0) $$bindings.metadata(metadata2);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  if ($$props.itemsNr === void 0 && $$bindings.itemsNr && itemsNr !== void 0) $$bindings.itemsNr(itemsNr);
  $$result.css.add(css$1);
  return `<div class="preview-carousel svelte-1scsiv2"${add_attribute("style", `--direction:${direction}`, 0)}>${each(selected, (d) => {
    return `<div class="preview-item svelte-1scsiv2">${d._images > 0 ? `<a href="${escape(base, true) + "/pages/" + escape(d.pid, true)}"><img src="${escape(base, true) + "/iiif/" + escape(d.pid, true) + "/0/full/256,/0/default.jpg"}"${add_attribute("alt", d.label, 0)} class="svelte-1scsiv2"></a>` : ``} <a class="silent-link" href="${escape(base, true) + "/pages/" + escape(d.pid, true)}">${escape(d.label)}</a> </div>`;
  })} </div>`;
});
const css = {
  code: ".two-columns.svelte-1yslg7q{display:flex;flex-direction:row}@media screen and (max-width: 800px){.two-columns.svelte-1yslg7q{flex-direction:column}}",
  map: '{"version":3,"file":"Home.svelte","sources":["Home.svelte"],"sourcesContent":["<script>\\n  import Default from \\"./Default.svelte\\";\\n  import Header from \\"$components/Header.svelte\\";\\n  import ContentSlot from \\"$components/ContentSlot.svelte\\";\\n  import Footer from \\"$components/Footer.svelte\\";\\n  import RandomBar from \\"$components/RandomBar.svelte\\";\\n<\/script>\\n\\n<Default>\\n  <Header />\\n  <ContentSlot>\\n    <div class=\\"two-columns\\">\\n      <div>\\n        <slot></slot>\\n      </div>\\n      <div>\\n        <h2 style=\\"text-align: center;\\">Al azar</h2>\\n        <RandomBar />\\n      </div>\\n    </div>\\n  </ContentSlot>\\n  <Footer />\\n</Default>\\n\\n<style>\\n  .two-columns {\\n    display: flex;\\n    flex-direction: row;\\n  }\\n\\n  @media screen and (max-width: 800px) {\\n    .two-columns {\\n      flex-direction: column;\\n    }\\n  }\\n</style>"],"names":[],"mappings":"AAyBE,2BAAa,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAClB,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,2BAAa,CACX,cAAc,CAAE,MAClB,CACF"}'
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Default, "Default").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(ContentSlot, "ContentSlot").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="two-columns svelte-1yslg7q"><div>${slots.default ? slots.default({}) : ``}</div> <div><h2 style="text-align: center;" data-svelte-h="svelte-l6qnwy">Al azar</h2> ${validate_component(RandomBar, "RandomBar").$$render($$result, {}, {}, {})}</div></div>`;
        }
      })} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const metadata = { "name": "home", "layout": "home" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1774cwa">¿Qué es esto?</h3> <p data-svelte-h="svelte-1f5csbn">Archivo digital personal de zines y otras publicaciones alternativas</p> <h3 data-svelte-h="svelte-1cu5qkj">¿Y eso qué quiere decir?</h3> <p data-svelte-h="svelte-16rutgs">Es un archivo digital porque contiene reproducciones digitalizadas de piezas físicas existentes en un archivo y metadatos que acompañan y dan sentido a esas reproducciones. Esos metadatos pueden servir para ver distintos aspectos de las obras y encontrar patrones comúnes: autores, fechas, ciudades, medios de reproducción, decisiones formales, etc.</p> <p data-svelte-h="svelte-1rgn6of">Concretamente, es un archivo de zines, es decir, publicaciones autogestionadas, de tiraje corto, normalmente reproducidas por medios no industriales como fotocopias, risografía, serigrafía o interveciones manuales, que suele tener contenidos de nichos específicos: ilustración, poesía, cómic, temas relacionados con un <em>fandom</em> (fanzines). La colección también inclye otras publicaciones que, tal vez, no encajan dentro de la categoría de zine, pero que guardan un cierto espíritu alternativo a formas de publicación masificada o con fines principalmente comerciales.</p> <p data-svelte-h="svelte-ckgx3s">Y es personal porque es una colección subjetiva construida por una sola persona a lo largo de los años: yo, <a href="https://srsergiorodriguez.github.io/" target="_blank">Sergio Rodríguez Gómez</a>. Este archivo surgió con el interés de sistematizar digitalmente los zines que he conseguido en ferias y tiendas, que he comprado o me han obsequiado sus autores, que yo mismo he hecho, o que me han regalado personas que aprecio. Como es personal, la colección corresponde a mi gusto y no pretende ser exhaustiva o estar libre de sesgos</p> <h3 data-svelte-h="svelte-j2vvrb">¿Cómo se construyó este archivo?</h3> <p data-svelte-h="svelte-dp76ac">Este archivo fue construido con <a href="https://github.com/srsergiorodriguez/serie-mini" target="_blank">Serie Mini</a>, un sistema para la producción de colecciones digitales bajo los principios de la computación mínima, es decir, procurando las infraestructuras digitales más sencillas y sostenibles posibles.</p> <p data-svelte-h="svelte-wlvq4l">El archivo contiene principalmente reproducciones digitalizadas de las portadas de los zines y otros metadatos, además de ensayos interactivos curados sobre aspectos de la colección. El archivo se puede navegar de varias formas, como se ve en el menú de la barra superior: navegando la colección a través de filtros, buscando términos concretos, o visitando las curadurías temáticas.</p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
