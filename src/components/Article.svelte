<script>
  export let article;
</script>

<style>
  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
    margin-bottom: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  @media (min-width: 700px) {
    img {
      width: 200px;
      min-width: 200px;
      margin-right: 2rem;
      margin-bottom:0;
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
  h3 {
    margin-bottom: 1rem;
  }
  .tags {
    margin-bottom: 1rem;
  }
  a .tag {
    color: var(--contrast-text-color);
    padding: 5px 10px;
    background: var(--contrast-bg-light);
    text-decoration: none;
    border-radius: 5px;
  }
</style>

<article>
  <small>{article.published_at}</small>
  <h3>{article.title}</h3>
  <div class="content">
    <img src={article.image.url} alt={article.imgAlt} />
    <div>
      {@html article.content}
      {#if article.tags && article.tags.length}
        <div class="tags">
          {#each article.tags as tag, i}
            <a href="/{tag.url}">
              <span class="tag">#{tag.name}</span>
            </a>
          {/each}
        </div>
      {/if}
      {#if article.gallery_url}
        <a href={article.gallery_url}>Ir a la galería</a>
        <br />
      {/if}
    </div>
  </div>
</article>
