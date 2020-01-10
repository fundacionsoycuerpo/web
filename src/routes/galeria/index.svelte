<script context="module">
  export async function preload({ params, query }) {
    const { slug } = params;
    const galleriesResponse = await this.fetch(`galeria.json`);
    const galleries = await galleriesResponse.json();
    return { galleries };
  }
</script>

<script>
  export let galleries;
</script>

<style>
  .members {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }

  @media (max-width: 936px) {
    .members {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Fundación Soy Cuerpo - Galería</title>
</svelte:head>

<div class="inner-content">
  <h1>Galería</h1>
  <div class="members">
    <ul>
      {#each galleries as event}
        <li>
          <a href={'galeria/' + event.slug}>{event.content_title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
