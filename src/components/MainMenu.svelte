<script>
  import { base } from '$app/paths';
  import { t } from '../stores/translations';
</script>

<nav>
  <ul class="menu-list no-select">
    <li><a class="silent-link menu-link" href="{base}">{$t.home}</a></li>
    <li><a class="silent-link menu-link" href="{base}/pages">{$t.explore}</a></li>
    <li><a class="silent-link menu-link" href="{base}/tour">{$t.tour}</a></li>
    <li><a class="silent-link menu-link" href="{base}/metadata">{$t.metadata}</a></li>
  </ul>
</nav>

<style>
  .menu-list {
    display: flex;
    gap: 1em;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }

  .menu-list li {
    list-style-type: none;
    font-size: 1.2em;
  }

  .menu-link {
    background: var(--accent2);
    padding: 0.2em;
    color: var(--fill);
  }

  .menu-link:hover {
    background: var(--fill);
    background: var(--accent2);
  }

  @media screen and (max-width: 800px) {
    .menu-list {
      margin: 1em;
    }
  }

  @media screen and (max-width: 500px) {
    .menu-list {
      flex-direction: column;
      margin: 1em;
    }
  }
</style>