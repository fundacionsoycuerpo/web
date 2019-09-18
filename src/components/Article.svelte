<script>
  export let article;
</script>

<style>
  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 600px) {
    img {
      width: 200px;
      min-width: 200px;
      margin-right: 2rem;
    }

    .content {
      flex-direction: row;
    }
  }

  a {
    color: var(--text-color);
  }

  article {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--text-color);
  }
  h3{
      margin-bottom: 1rem;
  }
</style>

<article>
  <small>{article.published}</small>
  <h3>{article.title}</h3>
  <div class="content">
    <img src={article.img} alt={article.imgAlt} />
    <div>
      {#each article.content as paragraph, i}
        <p>{paragraph}</p>
      {/each}
      {#if article.gallery}
        <a href={article.gallery}>Ir a la galería</a>
        <br />
      {/if}
    </div>
  </div>
</article>
