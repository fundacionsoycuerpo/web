<script context="module">
  export function preload({ params, query }) {
    return Promise.all([this.fetch('index.json'), this.fetch('eventos.json')])
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(([data, events]) => {
        return { articles: data.articles, events: events.slice(0, 5) };
      });
  }
</script>

<script>
  import Article from '../components/Article.svelte';
  import Event from '../components/Event.svelte';

  export let articles;
  export let events;

  export let head_title = 'Fundación Soy Cuerpo';
  export let head_description =
    'Fundación Soy Cuerpo es una organización sin fines de lucro, que nace como una respuesta concreta a la necesidad de poner en valor el cuerpo humano, potenciando el entendimiento integral de éste.';
  export let head_img = 'https://fundacionsoycuerpo.cl/img/logo_bg.jpg';
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
    max-height: 80vh;
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
  <title>{head_title}</title>
  <meta property="og:title" content={head_title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={head_img} />
  <meta property="og:url" content="https://fundacionsoycuerpo.cl" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={head_title} />
  <meta name="twitter:description" content={head_description} />
  <meta name="twitter:image" content={head_img} />
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
    {#if articles && articles.length}
      <section class="news">
        <h1>Noticias</h1>
        {#each articles as article, i}
          <Article {article} />
        {/each}
      </section>
    {/if}
    <section class="big-banner">
      <img src="img/colabora - generico2.png" alt="Afiche colaboración" />
    </section>
  </div>
</div>
