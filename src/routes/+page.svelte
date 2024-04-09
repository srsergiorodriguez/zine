<script>
  import Home from "../layouts/Home.svelte";
  import VCarousel from "../components/VCarousel.svelte";
  import ItemPreviewMarked from "../components/ItemPreviewMarked.svelte";

  import { metadata } from "../routes/data/metadata";
  
  import SvelteMarkdown from "svelte-markdown";
  import { mdData } from "./data/md";
  const md = mdData.home.body;
</script>

<Home>
  <div class="two-columns">
    <div>
      <SvelteMarkdown source={md} renderers={{ image: ItemPreviewMarked }} />
    </div>
    <div>
      <h2 style="text-align: center;">Al azar</h2>
      <VCarousel {metadata} />
    </div>
  </div>
</Home>

<style>
  .two-columns {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 800px) {
    .two-columns {
      flex-direction: column;
    }
  }
</style>