<script lang="ts">
	import type { Article } from '$types/Article';
	export let article: Article;
</script>

<article>
	<small>{article.published_at}</small>
	<h3>{article.title}</h3>
	<div class="content">
		<img src={article.media.image.url} alt={article.media.caption} />
		<div>
			{@html article.content}
			{#if article.tags && article.tags.length}
				<div class="tags">
					{#each article.tags as tag, i}
						<a class="tag" href="/{tag.url}"> #{tag.name} </a>
					{/each}
				</div>
			{/if}
			{#if article.gallery_url}
				<a href={article.gallery_url}>Ir a la galería</a>
			{/if}
		</div>
	</div>
</article>

<style lang="scss">
	img {
		width: 100%;
		object-fit: contain;
		object-position: center;
		margin-bottom: 2rem;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	:global(h5 + *) {
		margin-top: 8px;
	}

	:global(h4) {
		margin-top: 16px;
	}

	:global(div.footer) {
		margin-top: 24px;
	}
	@media (min-width: 700px) {
		img {
			width: 200px;
			min-width: 200px;
			margin-right: 2rem;
			margin-bottom: 0;
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

	a.tag {
		color: var(--contrast-text-color);
		padding: 5px 10px;
		background: var(--contrast-bg-light);
		text-decoration: none;
		border-radius: 5px;
		margin-top: 20px;
		display: inline-block;
	}
</style>
