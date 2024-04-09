<script>
  import MainMenu from './MainMenu.svelte';
  import serieConfig from '../config/serie.config.js';
  import { base } from '$app/paths';
</script>

<header class="main-header" style={`background-image: url(${base}/banner/banner${Math.floor(Math.random() * 5)}.png`}>
  <div>
    <h1 class="main-title" id="main-title" style={`transform: rotate(${Math.floor((Math.random() * 10) - 5)}deg);`}><a href={base}>{serieConfig.title}</a></h1>
    <span class="main-subtitle">{serieConfig.subtitle}</span>
  </div>
  
  <MainMenu />
</header>

<style>
  a {
    text-decoration: none;
    color: var(--accent2);
  }

  .main-title {
    max-width: 600px;
    font-size: 5em;
    margin: 0.1em;
    padding: 0.1em;
  }

  .main-title a {
    background: var(--accent2);
    color: var(--fill);
  }

  .main-subtitle {
    background: var(--accent2);
    padding: 0.2em;
    color: var(--fill);
  }

  .main-header {
    display: flex;
    padding: 1em;
    justify-content: space-around;
    align-items: end;
    background: var(--accent1);
    border: solid 1px var(--accent1);
    flex-direction: row;
  }

  @media screen and (max-width: 800px) {
    .main-header {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
</style>