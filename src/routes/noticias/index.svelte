<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`noticias.json`)
      .then(res => res.json())
      .catch(err => this.error(404, 'Page Not found'));
  }
</script>

<script>
  import Article from "../../components/Article.svelte";

  export let articles;
</script>

<svelte:head>
  <title>Fundación Soy Cuerpo - Noticias</title>
</svelte:head>

<div class="inner-content">
  <h1>Noticias</h1>
  {#if articles && articles.length}
    {#each articles as article, i}
      <Article {article} />
    {/each}
  {/if}
</div>
