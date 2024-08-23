<script>
  import Default from "./Default.svelte";
  import Header from "$components/Header.svelte";
  import ContentSlot from "$components/ContentSlot.svelte";
  import Footer from "$components/Footer.svelte";
  import RandomBar from "$components/RandomBar.svelte";
</script>

<Default>
  <Header />
  <ContentSlot>
    <div class="two-columns">
      <div>
        <slot></slot>
      </div>
      <div>
        <h2 style="text-align: center;">Al azar</h2>
        <RandomBar />
      </div>
    </div>
  </ContentSlot>
  <Footer />
</Default>

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