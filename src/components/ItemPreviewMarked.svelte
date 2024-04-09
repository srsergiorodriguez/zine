<script>
  import { base } from '$app/paths';
  import { metadata } from '../routes/data/metadata_';
  import serieConfig from '../config/serie.config'

  export let href = "";
  export let title = "";
  export let text = "";

  let pid = href;
  let page = 0;
  let label = "";
  let found;
  let isPreview = false;

  if (/^\!/.test(href) && serieConfig.pages.iiifViewer) {
    pid = pid.replace(/^\!/, "");
    const match = /(?<page>\|[0-9]+)/.exec(pid);
    if (match) {
      page = +match.groups.page.replace("|","") - 1;
      pid = pid.replace(match.groups.page, "");
    }

    found = metadata.find(d => d.pid === pid);
    if (found !== undefined) {
      label = found.label;
      page = page > found._images - 1 ? 0 : page;
      isPreview = true;
    } else {
      text = "¡pid INCORRECTO, REVISAR! / INCORRECT pid!"
    }
  }

</script>

{#if isPreview}
  <div class="preview-item">
    <a href="{base}/pages/{pid}"><img src="{base}/iiif/{pid}/{page}/full/512,/0/default.jpg" title={title} alt={text}/></a>
    <div>
      <a class="silent-link" href="{base}/pages/{pid}">{found.label}</a>
      {#if title}<p><em>{title}</em></p>{/if}
    </div>
  </div>
{:else}
  <img src={href} {title} alt={text} />
  {#if title}<p><em>{title}</em></p>{/if}
{/if}

<style>
  .preview-item {
    padding: 1em;
    border: 1px solid rgba(0,0,0,0.2);
    max-width: 400px;
    margin: auto;
    text-align: center;
  }

  img {
    max-width: 400px;
    max-height: 400px;
  }
  
</style>