import { c as create_ssr_component, d as each, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as Page$1 } from "../../../chunks/Page.js";
import * as d3 from "d3";
import { p as projectMetadata } from "../../../chunks/metadata.js";
import { b as base } from "../../../chunks/paths.js";
const css$3 = {
  code: ".items-bar.svelte-22wd18.svelte-22wd18{padding:1em;display:flex;gap:1em;overflow-x:scroll;border:solid 1px var(--accent1)}.work-preview.svelte-22wd18.svelte-22wd18{display:flex;flex-direction:column;max-width:130px;font-size:0.8em}.thumb.svelte-22wd18.svelte-22wd18{height:100px;width:130px;object-fit:contain}.thumb.svelte-22wd18 img.svelte-22wd18{height:100%;width:100%;object-fit:cover}",
  map: `{"version":3,"file":"ItemsBar.svelte","sources":["ItemsBar.svelte"],"sourcesContent":["<script>\\n  import serieConfig from '$config/serie.config';\\n  import { base } from '$app/paths';\\n  import { fade } from 'svelte/transition';\\n\\n  export let items = [];\\n<\/script>\\n\\n{#if items.length > 0}\\n  <div transition:fade={{ duration: 200 }} class=\\"items-bar\\">\\n      {#each items as d (d.pid)}\\n        <div class=\\"work-preview no-select\\">\\n          {#if serieConfig.pages.iiifViewer}\\n            <a class=\\"thumb\\" href=\\"{base}/pages/{d.pid}\\"><img class=\\"noevents\\" src=\\"{base}/iiif/{d.pid}/0/full/256,/0/default.jpg\\" alt={d.label}/></a>\\n          {/if}\\n          <a href=\\"{base}/pages/{d.pid}\\"><span>{d.label}</span></a>\\n        </div>\\n      {/each}\\n  </div>\\n{/if}\\n\\n<style>\\n  .items-bar {\\n    padding: 1em;\\n    display: flex;\\n    gap: 1em;\\n    overflow-x: scroll;\\n    border: solid 1px var(--accent1);\\n  }\\n\\n  .work-preview {\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 130px;\\n    font-size: 0.8em;\\n  }\\n\\n  .thumb {\\n    height: 100px;\\n    width: 130px;\\n    object-fit: contain;\\n  }\\n\\n  .thumb img {\\n    height: 100%;\\n    width: 100%;\\n    object-fit: cover;\\n  }\\n</style>"],"names":[],"mappings":"AAsBE,sCAAW,CACT,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,IAAI,SAAS,CACjC,CAEA,yCAAc,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,KACb,CAEA,kCAAO,CACL,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,OACd,CAEA,oBAAM,CAAC,iBAAI,CACT,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KACd"}`
};
const ItemsBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  $$result.css.add(css$3);
  return `${items.length > 0 ? `<div class="items-bar svelte-22wd18">${each(items, (d) => {
    return `<div class="work-preview no-select svelte-22wd18">${`<a class="thumb svelte-22wd18" href="${escape(base, true) + "/pages/" + escape(d.pid, true)}"><img class="noevents svelte-22wd18" src="${escape(base, true) + "/iiif/" + escape(d.pid, true) + "/0/full/256,/0/default.jpg"}"${add_attribute("alt", d.label, 0)}></a>`} <a href="${escape(base, true) + "/pages/" + escape(d.pid, true)}"><span>${escape(d.label)}</span></a> </div>`;
  })}</div>` : ``}`;
});
const css$2 = {
  code: ".timeline-container.svelte-1rmrcxp{margin:1em;position:relative}.network-container-overlay.svelte-1rmrcxp{position:absolute;top:10px;left:2%}svg.svelte-1rmrcxp{height:100px;cursor:grab}svg.svelte-1rmrcxp:active{cursor:grabbing}",
  map: `{"version":3,"file":"VizTimeline.svelte","sources":["VizTimeline.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import * as d3 from \\"d3\\";\\n  import { projectMetadata } from '$routes/data/metadata';\\n  import ItemsBar from '$components/ItemsBar.svelte';\\n  \\n  export let dateKey;\\n  export let metadata = projectMetadata;\\n\\n  let items = [];\\n\\n  const formattedObject = {};\\n  for (let d of metadata) {\\n    if (formattedObject[d[dateKey]] === undefined) {\\n      formattedObject[d[dateKey]] = {date: new Date(d[dateKey]), data: []}\\n    }\\n    // Para testear\\n    // for (let i = 0; i < 100; i++) {\\n    //   formattedObject[d[dateKey]].data.push({pid: d.pid, label: d.label});\\n    // }\\n    formattedObject[d[dateKey]].data.push({pid: d.pid, label: d.label});\\n  }\\n  const formattedData = Object.values(formattedObject);\\n\\n  let svgElement;\\n  let resetZoom;\\n\\n  onMount(makeTimeline);\\n\\n  function rerender() {\\n    d3.select(svgElement).selectAll(\\"g\\").remove();\\n    makeTimeline();\\n  }\\n\\n  function makeTimeline() {\\n    const svg = d3.select(svgElement);\\n    const svgStyle = getComputedStyle(svgElement);\\n    const w = +svgStyle.width.replace(\\"px\\",\\"\\");\\n    const h = +svgStyle.height.replace(\\"px\\",\\"\\");\\n    const m = {h: w * 0.05, v: h * 0.2};\\n\\n    const zoom = d3.zoom()\\n      .scaleExtent([1, 32])\\n      .on(\\"zoom\\", zoomed);\\n\\n    const g = svg.append(\\"g\\").attr(\\"transform\\", \`translate(\${m.h}, \${m.v})\`);\\n    const gx = svg.append(\\"g\\");\\n    \\n    const xAxis = (g, x) => g\\n      .attr(\\"transform\\", \`translate(\${m.h},\${h * 0.7})\`)\\n      .call(\\n        d3.axisBottom(x)\\n        .tickFormat((d, index, ticks) => {\\n          const formatToYear = d3.timeFormat(\\"%Y\\");\\n          const formatToMonth = d3.timeFormat(\\"%m\\");\\n          const dates = ticks.map(d => d.__data__);\\n          if (index === 0) {\\n            return \\"...\\" + formatToYear(d);\\n          }\\n          if (dates[index - 1].getFullYear() === d.getFullYear()) {\\n            return formatToMonth(d);\\n          }\\n          return formatToYear(d)\\n        })\\n      )\\n\\n    const gDot = g.append(\\"g\\")\\n      .attr(\\"fill\\", \\"none\\")\\n      .attr(\\"stroke-linecap\\", \\"round\\")\\n      .style(\\"stroke-width\\", 1)\\n\\n    const x = d3.scaleTime()\\n      .domain(d3.extent(formattedData, d => d.date))\\n      .range([0, w - (m.h * 2)])\\n      .nice()\\n\\n    svg.call(zoom).call(zoom.transform, d3.zoomIdentity);\\n    update(x);\\n    \\n    function zoomed({transform}) {\\n      const zx = transform.rescaleX(x).interpolate(d3.interpolateRound);\\n      gx.call(xAxis, zx);\\n      update(zx);\\n    }\\n\\n    resetZoom = () => {  \\n      const transform = d3.zoomIdentity.translate(0, 0).scale(1); \\n      items = [];\\n      \\n      svg.transition()\\n          .ease(d3.easeQuadOut)\\n          .duration(500)\\n          .call(zoom.transform, transform);\\n      \\n      return d3.zoomTransform(svg.node())\\n    }\\n\\n    function update(scale) {\\n      const dots = gDot.selectAll(\\"circle\\")\\n      .data(formattedData)\\n      .join(\\"circle\\")\\n        .attr(\\"cx\\", d => scale(d.date))\\n        .attr(\\"cy\\", m.v)\\n        .attr(\\"r\\", 10)\\n        .attr(\\"stroke\\", \\"var(--accent2)\\")\\n        .attr(\\"fill\\", \\"var(--accent1)\\")\\n        .attr(\\"cursor\\", \\"pointer\\")\\n\\n      dots.on(\\"click\\", function(event, d) {\\n        items = d.data;  \\n      })\\n    }\\n  }\\n\\n<\/script>\\n\\n<svelte:window on:resize={() => {rerender()}} />\\n\\n<div class=\\"timeline-container\\">\\n  <svg bind:this={svgElement} width=\\"100%\\"></svg>\\n  {#if items.length > 0}\\n    <div class=\\"network-container-overlay\\">\\n      <button class=\\"reset-button\\" on:click={resetZoom}><img src='./icons/reset.png' alt='reset'></button>\\n    </div>\\n  {/if}\\n  <ItemsBar {items} />\\n</div>\\n\\n<style>\\n  .timeline-container {\\n    margin: 1em;\\n    position: relative;\\n  }\\n\\n  .network-container-overlay {\\n    position: absolute;\\n    top: 10px;\\n    left: 2%;\\n  }\\n\\n  svg {\\n    height: 100px;\\n    cursor: grab;\\n  }\\n\\n  svg:active {\\n    cursor: grabbing;\\n  }\\n</style>"],"names":[],"mappings":"AAiIE,kCAAoB,CAClB,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,QACZ,CAEA,yCAA2B,CACzB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,EACR,CAEA,kBAAI,CACF,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IACV,CAEA,kBAAG,OAAQ,CACT,MAAM,CAAE,QACV"}`
};
const VizTimeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dateKey } = $$props;
  let { metadata: metadata2 = projectMetadata } = $$props;
  let items = [];
  const formattedObject = {};
  for (let d of metadata2) {
    if (formattedObject[d[dateKey]] === void 0) {
      formattedObject[d[dateKey]] = { date: new Date(d[dateKey]), data: [] };
    }
    formattedObject[d[dateKey]].data.push({ pid: d.pid, label: d.label });
  }
  Object.values(formattedObject);
  let svgElement;
  if ($$props.dateKey === void 0 && $$bindings.dateKey && dateKey !== void 0) $$bindings.dateKey(dateKey);
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata2 !== void 0) $$bindings.metadata(metadata2);
  $$result.css.add(css$2);
  return ` <div class="timeline-container svelte-1rmrcxp"><svg width="100%" class="svelte-1rmrcxp"${add_attribute("this", svgElement, 0)}></svg> ${items.length > 0 ? `<div class="network-container-overlay svelte-1rmrcxp"><button class="reset-button" data-svelte-h="svelte-9rp6jw"><img src="./icons/reset.png" alt="reset"></button></div>` : ``} ${validate_component(ItemsBar, "ItemsBar").$$render($$result, { items }, {}, {})} </div>`;
});
const css$1 = {
  code: ".viz-container.svelte-y2v6ki{margin:1em;height:calc( var(--height) * 1px )}svg.svelte-y2v6ki{height:100%}",
  map: '{"version":3,"file":"VizBarChart.svelte","sources":["VizBarChart.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \'svelte\';\\n  import * as d3 from \\"d3\\";\\n\\n  import { projectMetadata } from \'$routes/data/metadata\';\\n  \\n  export let key;\\n  export let metadata = projectMetadata;\\n  export let top = 10;\\n\\n  const formattedObject = {};\\n  for (let d of metadata) {\\n    if (formattedObject[d[key]] === undefined) {\\n      formattedObject[d[key]] = {key: d[key], count: 0}\\n    }\\n    formattedObject[d[key]].count++;\\n  }\\n  let formattedData = Object.values(formattedObject).sort((a, b) => d3.descending(a.count, b.count))\\n  if (top !== undefined) {\\n    formattedData = formattedData.slice(0, top);\\n  }\\n\\n  const rows = formattedData.length * 70;\\n\\n  let svgElement;\\n\\n  onMount(makeViz);\\n\\n  function rerender() {\\n    d3.select(svgElement).selectAll(\\"g\\").remove();\\n    makeViz();\\n  }\\n\\n  function makeViz() {\\n    const svg = d3.select(svgElement);\\n    const svgStyle = getComputedStyle(svgElement);\\n    const w = +svgStyle.width.replace(\\"px\\",\\"\\");\\n    const h = +svgStyle.height.replace(\\"px\\",\\"\\");\\n    const m = {h: w * 0.2, v: h * 0.1};\\n\\n    const g = svg.append(\\"g\\").attr(\\"transform\\", `translate(${m.h}, ${m.v})`);\\n    const gBar = g.append(\\"g\\");\\n\\n    const y = d3.scaleBand().domain(formattedData.map(d => d.key)).range([0, h - (m.v * 2)]).padding(0.33);\\n    const x = d3.scaleLinear().domain([0, d3.max(formattedData, d => d.count)]).range([0, w - (m.h * 2)]).nice();\\n\\n    const xAxis = d3.axisBottom(x);\\n    const gx = svg.append(\\"g\\").attr(\\"transform\\", `translate(${m.h},${h - m.v})`).call(xAxis);\\n    \\n    const yAxis = d3.axisLeft(y);\\n    const gy = svg.append(\\"g\\").attr(\\"transform\\", `translate(${m.h},${m.v})`).call(yAxis);\\n\\n    update();\\n    \\n    function update() {\\n      gBar.selectAll(\\"rect\\")\\n        .data(formattedData)\\n        .join(\\"rect\\")\\n          .attr(\\"x\\", 0)\\n          .attr(\\"y\\", d => y(d.key))\\n          .attr(\\"width\\", d => x(d.count))\\n          .attr(\\"height\\", y.bandwidth())\\n          .attr(\\"fill\\", \\"var(--accent2)\\")\\n    }\\n  }\\n\\n<\/script>\\n\\n<svelte:window on:resize={() => {rerender()}} />\\n\\n<div class=\\"viz-container\\" style=\\"--height:{rows}\\">\\n  <svg bind:this={svgElement} width=\\"100%\\"></svg>\\n</div>\\n\\n<style>\\n  .viz-container {\\n    margin: 1em;\\n    height: calc( var(--height) * 1px );\\n    /* border: solid 1px black; */\\n  }\\n\\n  svg {\\n    height: 100%;\\n  }\\n</style>"],"names":[],"mappings":"AA2EE,4BAAe,CACb,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,MAAM,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,GAAG,EAEnC,CAEA,iBAAI,CACF,MAAM,CAAE,IACV"}'
};
const VizBarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key } = $$props;
  let { metadata: metadata2 = projectMetadata } = $$props;
  let { top = 10 } = $$props;
  const formattedObject = {};
  for (let d of metadata2) {
    if (formattedObject[d[key]] === void 0) {
      formattedObject[d[key]] = { key: d[key], count: 0 };
    }
    formattedObject[d[key]].count++;
  }
  let formattedData = Object.values(formattedObject).sort((a, b) => d3.descending(a.count, b.count));
  if (top !== void 0) {
    formattedData = formattedData.slice(0, top);
  }
  const rows = formattedData.length * 70;
  let svgElement;
  if ($$props.key === void 0 && $$bindings.key && key !== void 0) $$bindings.key(key);
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata2 !== void 0) $$bindings.metadata(metadata2);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0) $$bindings.top(top);
  $$result.css.add(css$1);
  return ` <div class="viz-container svelte-y2v6ki" style="${"--height:" + escape(rows, true)}"><svg width="100%" class="svelte-y2v6ki"${add_attribute("this", svgElement, 0)}></svg> </div>`;
});
const css = {
  code: ".viz-container.svelte-18nu962{margin:1em;position:relative}.network-container-overlay.svelte-18nu962{position:absolute;top:10px;left:2%}svg.svelte-18nu962{height:calc( var(--height) * 1px )}",
  map: `{"version":3,"file":"VizTree.svelte","sources":["VizTree.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import * as d3 from \\"d3\\";\\n  import { projectMetadata } from '$routes/data/metadata';\\n  import ItemsBar from '$components/ItemsBar.svelte';\\n  \\n  export let keys;\\n  export let metadata = projectMetadata;\\n\\n  let items = [];\\n\\n  const formattedMetadata = formatData(metadata);\\n  const root = d3.hierarchy(formattedMetadata).sum(d => d.value);\\n  const height = root.leaves().length * 30;\\n\\n  function reset() {\\n    items = [];\\n  }\\n\\n  function formatData(data) {\\n    const fns = [];\\n    for (let key of keys) {\\n      fns.push(d => d[key]);\\n    }\\n    const rollup = d3.rollups(data, v => v.length, ...fns);\\n    const root = {name: \\"\\", children: getChildren(rollup)};\\n\\n    function getChildren(parentList) {\\n      const objs = [];\\n      for (let parent of parentList) {\\n        const obj = { name: parent[0] };\\n        if ( typeof parent[1] === \\"number\\") {\\n          obj.value = parent[1]\\n        } else if ( Array.isArray(parent[1])) {\\n          obj.children = getChildren(parent[1]);\\n        }\\n        objs.push(obj);\\n      }\\n      return objs\\n    }\\n\\n    return root\\n  }\\n\\n  let svgElement;\\n\\n  onMount(makeViz);\\n\\n  function getItems(data) {\\n    let currentNode = data;\\n    const filters = [];\\n    for (let i = 0; i < data.depth; i++) {\\n      const filter = {\\n        key: keys[currentNode.depth - 1],\\n        value: currentNode.data.name,\\n        depth: currentNode.depth\\n      }\\n      filters.push(filter);\\n      currentNode = currentNode.parent;\\n    }\\n\\n    const filterFn = (d) => {\\n      let valid = true;\\n      for (let f of filters) {\\n        if (d[f.key] !== f.value) {\\n          valid = false;\\n          break\\n        }\\n      }\\n      return valid\\n    }\\n    const filtered = metadata.filter(d => filterFn(d));\\n    return filtered\\n  }\\n\\n  function rerender() {\\n    d3.select(svgElement).selectAll(\\"g\\").remove();\\n    makeViz();\\n  }\\n\\n  function makeViz() {\\n    const svg = d3.select(svgElement);\\n    const svgStyle = getComputedStyle(svgElement);\\n    const w = +svgStyle.width.replace(\\"px\\",\\"\\");\\n    const h = +svgStyle.height.replace(\\"px\\",\\"\\");\\n    const m = {h: w * 0.1, v: 10};\\n    const r = 7;\\n\\n    const g = svg.append(\\"g\\").attr(\\"transform\\", \`translate(\${m.h}, \${m.v})\`);\\n\\n    const tree = d3.tree().size([h - (m.v * 2), w - (m.h * 4)]);\\n    tree(root);\\n\\n    update();\\n    \\n    function update() {\\n      g.append(\\"g\\")\\n      .attr(\\"fill\\", \\"none\\")\\n      .attr(\\"stroke\\", \\"black\\")\\n      .attr(\\"stroke-width\\", 1)\\n      .selectAll(\\"path\\")\\n        .data(root.links())\\n        .join(\\"path\\")\\n        .attr(\\"d\\", d3.link(d3.curveBumpX)\\n            .x(d => d.y)\\n            .y(d => d.x));\\n\\n      const nodes = g.append(\\"g\\")\\n        .selectAll(\\"g\\")\\n        .data(root.descendants())\\n        .join(\\"g\\")\\n          .attr(\\"transform\\", d => \`translate(\${d.y},\${d.x})\`);\\n\\n      const dots = nodes.append(\\"circle\\")\\n        .attr(\\"stroke\\", \\"var(--accent2)\\")\\n        .attr(\\"fill\\", \\"var(--accent1)\\")\\n        .attr(\\"cursor\\", \\"pointer\\")\\n        .attr(\\"r\\", r);\\n\\n      dots.on(\\"click\\", function(event, d) {\\n        items = getItems(d);\\n      })\\n\\n      nodes.append(\\"text\\")\\n        .text(d => d.data.name)\\n        .attr(\\"font-size\\", 7 + (w/150))\\n        .attr(\\"text-anchor\\", d => d.children ? \\"end\\" : \\"start\\")\\n        .attr(\\"paint-order\\", \\"stroke\\")\\n        .attr(\\"stroke\\", \\"var(--fill)\\")\\n        .attr(\\"stroke-width\\", 6)\\n        .attr(\\"x\\", d => d.children ? -r - 4 : r + 4)\\n        .attr(\\"dy\\", \\"0.32em\\")\\n    }\\n  }\\n\\n<\/script>\\n\\n<svelte:window on:resize={() => {rerender()}} />\\n\\n<div class=\\"viz-container\\" style=\\"--height:{height}\\">\\n  <svg bind:this={svgElement} width=\\"100%\\"></svg>\\n  {#if items.length > 0}\\n    <div class=\\"network-container-overlay\\">\\n      <button class=\\"reset-button\\" on:click={reset}><img src='./icons/reset.png' alt='reset'></button>\\n    </div>\\n  {/if}\\n  <ItemsBar {items} />\\n</div>\\n\\n<style>\\n  .viz-container {\\n    margin: 1em;\\n    position: relative;\\n  }\\n\\n  .network-container-overlay {\\n    position: absolute;\\n    top: 10px;\\n    left: 2%;\\n  }\\n\\n  svg {\\n    height: calc( var(--height) * 1px );\\n  }\\n</style>"],"names":[],"mappings":"AAsJE,6BAAe,CACb,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,QACZ,CAEA,yCAA2B,CACzB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,EACR,CAEA,kBAAI,CACF,MAAM,CAAE,MAAM,IAAI,QAAQ,CAAC,CAAC,CAAC,CAAC,GAAG,EACnC"}`
};
const VizTree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { keys } = $$props;
  let { metadata: metadata2 = projectMetadata } = $$props;
  let items = [];
  const formattedMetadata = formatData(metadata2);
  const root = d3.hierarchy(formattedMetadata).sum((d) => d.value);
  const height = root.leaves().length * 30;
  function formatData(data) {
    const fns = [];
    for (let key of keys) {
      fns.push((d) => d[key]);
    }
    const rollup = d3.rollups(data, (v) => v.length, ...fns);
    const root2 = { name: "", children: getChildren(rollup) };
    function getChildren(parentList) {
      const objs = [];
      for (let parent of parentList) {
        const obj = { name: parent[0] };
        if (typeof parent[1] === "number") {
          obj.value = parent[1];
        } else if (Array.isArray(parent[1])) {
          obj.children = getChildren(parent[1]);
        }
        objs.push(obj);
      }
      return objs;
    }
    return root2;
  }
  let svgElement;
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0) $$bindings.keys(keys);
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata2 !== void 0) $$bindings.metadata(metadata2);
  $$result.css.add(css);
  return ` <div class="viz-container svelte-18nu962" style="${"--height:" + escape(height, true)}"><svg width="100%" class="svelte-18nu962"${add_attribute("this", svgElement, 0)}></svg> ${items.length > 0 ? `<div class="network-container-overlay svelte-18nu962"><button class="reset-button" data-svelte-h="svelte-ujund3"><img src="./icons/reset.png" alt="reset"></button></div>` : ``} ${validate_component(ItemsBar, "ItemsBar").$$render($$result, { items }, {}, {})} </div>`;
});
const metadata = { "name": "tour", "layout": "page" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page$1, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-os43d4">La colección</h1> <p data-svelte-h="svelte-gxj86e">Esta colección contiene fanzines entre 2006 y el presente, aproximadamente. Haz clic en los círculos de esta línea de tiempo para filtrar publicaciones por fecha:</p> ${validate_component(VizTimeline, "VizTimeline").$$render($$result, { dateKey: "fecha" }, {}, {})} <p data-svelte-h="svelte-13z0p1s">Aunque los fanzines pueden tener distintos tipos de contenido, en esta colección hay principalmente publicaciones centradas en la ilustración y el cómic:</p> ${validate_component(VizBarChart, "VizBarChart").$$render($$result, { key: "tipo_principal" }, {}, {})} <p data-svelte-h="svelte-1kt7avw">Adicionalmente, los fanzines fueron producidos a través de distintos tipos de medios de impresión:</p> ${validate_component(VizBarChart, "VizBarChart").$$render($$result, { key: "medio_impresion" }, {}, {})} <p data-svelte-h="svelte-pg8faf">Este árbol muestra los lugares de publicación de los fanzines de la colección:</p> ${validate_component(VizTree, "VizTree").$$render($$result, { keys: ["pais", "ciudad"] }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
