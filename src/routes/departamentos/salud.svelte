<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`noticias.json`)
      .then(res => res.json())
      .then(news => {
        return { news: news.filter(n => n.type === "health").slice(0, 5) };
      });
  }
</script>

<script>
  import Article from "../../components/Article.svelte";

  export let news;
</script>

<svelte:head>
  <title>Fundación Soy Cuerpo - Departamento de Salud</title>
</svelte:head>

<div class="inner-content">
  <h1>Departamento de Salud</h1>
  <section>
    <p>
      Se aboca a la formación, potenciando programas que tengan por objeto la
      entrega de herramientas de auto-cuidado y/o medicina complementaria a la
      ciudadanía.
    </p>
    <h2>Manifiesto</h2>
    <p class="italic">
      "Soy la Meica de las heridas en mi alma y de los desequilibrios en mi
      organismo. Vivo en este cuerpo. En él se registran todas y cada una de las
      experiencias generadas en mi tránsito o quizás por el aleteo de alguna
      mariposa luego de su alucinante transformación. Soy Kalku [Bruja] vigilo
      desde mi interior hacia la solución, me acompañan pociones y decretos
      sacados de libros y relatos aprobados por las abuelas. Permanezco
      vigilante en la ruta hacia la liberación en habitar un hogar [Cuerpo/Ser]
      que ha sido invadido por prejuicios, creencias y hábitos dañinos
      sistemáticamente normalizados por los siglos y los ciclos. Me reconozco
      curandera dueña de mi poder de sanación cuando soy consistente en vivirme
      como la totalidad que hoy estoy siendo y sintiendo. Para sanar mi salud
      recurro a mi historia, a mis conductas y a espantar los moralismos que
      sobornan mi instinto animal. Insisto en el autoconocimiento para luego ir
      al reconociendo en un constante movimiento de transformación."
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
