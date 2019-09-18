<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`noticias.json`)
      .then(res => res.json())
      .then(news => {
        return { news: news.filter(n => n.type === "arts").slice(0, 5) };
      });
  }
</script>

<script>
  import Article from "../../components/Article.svelte";

  export let news;
</script>

<svelte:head>
  <title>Fundación Soy Cuerpo - Departamento de Arte</title>
</svelte:head>

<div class="inner-content">
  <h1>Departamento de Arte</h1>
  <section>
    <p>
      Se ocupa de la gestión de proyectos de investigación, creación y fomento
      de las artes, impulsando festivales, encuentros y obras de arte.
    </p>

    <h2>Manifiesto</h2>
    <p class="italic">
      "Es el arte nuestra herramienta, nuestro mas elocuente modo, la
      performance necesaria para nuestra transformación, el espacio que
      reflexiona, que construye y de-construye nuestro cuerpo, nuestro
      territorio, nuestro habitar el ser. Este será el espacio seguro que
      potenciará instancias investigativas tan necesarias y al debe en el Chile
      actual. La creación desde un prisma fenomenológico, desde el ser en
      movimiento somático, real y vibrante. La creación-investigación como un
      lineamiento que invita a la transculturalidad. Desarrollaremos proyecto de
      investigación y creación artística, performance, danza y circo. Festivales
      y encuentros de arte en torno al cuerpo. Generar encuentros nacionales e
      internacionales, festivales, exhibiciones, concursos y conferencias de
      artes corporales."
    </p>
  </section>

  {#if news && news.length}
    <section class="news">
      <h2>Noticias</h2>
      {#each news as article, i}
        <Article {article} />
      {/each}
    </section>
  {/if}
</div>
