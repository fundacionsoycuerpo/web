<script lang="ts">
	import Article from '$lib/Article.svelte';

	interface Props {
		data: { department: any; articles: any[] };
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - {data.department.name}</title>
</svelte:head>

<div class="inner-content">
	<h1>{data.department.name}</h1>
	<p>{data.department.description}</p>
	<section class="manifest">
		<h2>Manifiesto</h2>
		<p class="italic">"{data.department.manifest}"</p>
	</section>

	{#if data.articles && data.articles.length}
		<section class="news">
			<h2>Noticias</h2>
			{#each data.articles as article, i}
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
