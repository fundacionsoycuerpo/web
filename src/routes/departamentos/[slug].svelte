<script context="module">
  export function preload({ params, query }) {
    const { slug } = params;
    return this.fetch(`departamentos/${slug}.json`)
      .then(res => res.json())
      .catch(err => this.error(404, 'Page Not found'));
  }
</script>

<script>
  import Article from '../../components/Article.svelte';

  export let department;
  export let articles;
</script>

<svelte:head>
  <title>Fundación Soy Cuerpo - {department.name}</title>
</svelte:head>

<div class="inner-content">
  <h1>{department.name}</h1>
  <section>
    <p>{department.description}</p>
    <h2>Manifiesto</h2>
    <p class="italic">"{department.manifest}"</p>
  </section>

  {#if articles && articles.length}
    <section class="news">
      <h2>Noticias</h2>
      {#each articles as article, i}
        <Article {article} />
      {/each}
    </section>
  {/if}
</div>
