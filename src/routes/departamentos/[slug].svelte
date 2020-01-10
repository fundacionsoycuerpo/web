<script context="module">
  export function preload({ params, query }) {
    const { slug } = params;
    return Promise.all([
      this.fetch(`departamentos.json`),
      this.fetch(`noticias.json`)
    ])
      .then(res => Promise.all(res.map(r => r.json())))
      .then(([deps, news]) => {
        const dep = deps.find(d => d.slug === slug);
        if (!dep) {
          return this.error(404, "Not Found");
        }
        return {
          department: dep,
          news: news.filter(n => n.department_slug === dep.slug).slice(0, 5)
        };
      });
  }
</script>

<script>
  import Article from "../../components/Article.svelte";

  export let department;
  export let news;
</script>

<svelte:head>
  <title>{department.head_title}</title>
</svelte:head>

<div class="inner-content">
  <h1>{department.content_title}</h1>
  <section>
    <p>{department.content_description}</p>
    <h2>Manifiesto</h2>
    <p class="italic">{department.content_manifest}</p>
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
