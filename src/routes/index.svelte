<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`noticias.json`)
      .then(res => res.json())
      .then(news => {
        return { news: news.slice(0, 5) };
      });
  }
</script>

<script>
  import Article from "../components/Article.svelte";

  export let news;

</script>

<style>
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 70vh; */
    max-height: 70vh;
  }

  .big-banner {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .big-banner img {
    width: 100%;
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
    object-fit: contain;
    object-position: center;
  }
</style>

<svelte:head>
  <title>Fundación Soy Cuerpo</title>
</svelte:head>

<div class="container">
  <div class="image">
    <img src="img/bg-home.jpg" alt="Background" />
  </div>
  <div class="inner-content">
    {#if news && news.length}
      <section class="news">
        <h1>Noticias</h1>
        {#each news as article, i}
          <Article {article} />
        {/each}
      </section>
    {/if}
    <section class="big-banner">
      <img src="img/colabora - 02.jpg" alt="Afiche colaboración" />
    </section>
  </div>
</div>
