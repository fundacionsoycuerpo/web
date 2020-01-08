<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`noticias.json`)
      .then(res => res.json())
      .then(news => {
        return { news: news.filter(n => n.type === "platforms").slice(0, 5) };
      });
  }
</script>

<script>
  import Article from "../../components/Article.svelte";

  export let news;
</script>

<svelte:head>
  <title>Fundación Soy Cuerpo - Departamento de Plataformas</title>
</svelte:head>

<div class="inner-content">
  <h1>Departamento de Plataformas</h1>
  <section>
    <p>
      Apunta a la habilitación de espacios virtuales o reales que promuevan,
      acojan temáticas del cuerpo; aplicaciones, páginas web, museo, libros.
    </p>

    <h2>Manifiesto</h2>
    <p class="italic">
      "Las plataformas como un espacio atemporal, que permanece resguardando el
      patrimonio corporal. Que combate la muerte, que resiste la finitud del
      cuerpo humano. El hilo tácito y explícito que tejerá la red de quehaceres
      corporales plasmándose en este fértil espacio tangible. Accionaremos a
      través de proyectos digitales, libros, museos, centros culturales y
      patrimonio vivo. Desarrollaremos publicaciones y ediciones de cualquier
      naturaleza; además de gestionar marcas símbolos, slogans, frases
      publicitarias, dominios de Internet y demás derechos de propiedad
      intelectual."
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
