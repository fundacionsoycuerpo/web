<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`noticias.json`)
      .then(res => res.json())
      .then(news => {
        return { news };
      });
  }
</script>

<script>
  import Article from "../../components/Article.svelte";

  export let news;
</script>

<svelte:head>
  <title>Fundación Soy Cuerpo - Noticias</title>
</svelte:head>

<div class="inner-content">
  <h1>Noticias</h1>
  {#if news && news.length}
    {#each news as article, i}
      <Article {article} />
    {/each}
  {/if}
</div>
