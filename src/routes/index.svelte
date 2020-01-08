<script context="module">
  export function preload({ params, query }) {
    return Promise.all([
      this.fetch("noticias.json"),
      this.fetch("eventos.json")
    ])
      .then((responses) => Promise.all(responses.map(res=>res.json())))
      .then(([news, events]) => {
        return { news: news.slice(0, 5), events: events.slice(0, 5) };
      });
  }
</script>

<script>
  import Article from "../components/Article.svelte";
  import Event from "../components/Event.svelte";

  export let news;
  export let events;
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
    {#if events && events.length}
      <section class="events">
        <h1>Próximos eventos</h1>
        {#each events as event, i}
          <Event {event} />
        {/each}
      </section>
    {/if}
    {#if news && news.length}
      <section class="news">
        <h1>Noticias</h1>
        {#each news as article, i}
          <Article {article} />
        {/each}
      </section>
    {/if}
    <section class="big-banner">
      <img src="img/colabora - generico.jpg" alt="Afiche colaboración" />
    </section>
  </div>
</div>
