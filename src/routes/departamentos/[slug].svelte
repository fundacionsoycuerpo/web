<script context="module">
	export function load({ page, fetch, session, context }) {
		const { slug } = page.params;
		return fetch(`/departamentos/${slug}.json`)
			.then((res) => res.json())
			.then((data) => ({ props: { ...data } }))
			.catch((err) => ({ status: 404, error: new Error('Page Not found') }));
	}

	export const prerender = true;
	export const ssr = false;
</script>

<script>
	import Article from '$lib/Article.svelte';

	export let department;
	export let articles;
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - {department.name}</title>
</svelte:head>

<div class="inner-content">
	<h1>{department.name}</h1>
	<p>{department.description}</p>
	<section class="manifest">
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

<style>
	.manifest {
		margin-top: 2rem;
	}
</style>
