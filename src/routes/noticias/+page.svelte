<script lang="ts">
	import Article from '$lib/Article.svelte';
	import type { Article as ArticleModel } from '$types/Article';
	interface Props {
		data: { articles: ArticleModel[] };
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - Noticias</title>
</svelte:head>

<div class="inner-content">
	<h1>Noticias</h1>
	{#if data.articles && data.articles.length}
		{#each data.articles as article, i}
			<Article {article} />
		{/each}
	{/if}
</div>
