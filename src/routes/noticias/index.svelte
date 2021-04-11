<script context="module">
	export function load({ page, fetch, session, context }) {
		return fetch(`/noticias.json`)
			.then((res) => res.json())
			.then((data) => ({ props: { ...data } }))
			.catch((err) => ({ status: 404, error: new Error('Page Not found') }));
	}
	export const prerender = true;
	export const ssr = false;
</script>

<script>
	import Article from '$lib/Article.svelte';

	export let articles;
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - Noticias</title>
</svelte:head>

<div class="inner-content">
	<h1>Noticias</h1>
	{#if articles && articles.length}
		{#each articles as article, i}
			<Article {article} />
		{/each}
	{/if}
</div>
