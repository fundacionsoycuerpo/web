<script lang="ts">
	import type { Article as ArticleModel } from '$types/Article';
	import Article from '$lib/Article.svelte';
	import Event from '$lib/Event.svelte';

	interface Props {
		data: { articles: ArticleModel[]; events: any[] };
	}

	let { data }: Props = $props();

	let head_title = 'Fundación Soy Cuerpo';
	let head_description =
		'Fundación Soy Cuerpo es una organización sin fines de lucro, que nace como una respuesta concreta a la necesidad de poner en valor el cuerpo humano, potenciando el entendimiento integral de éste.';
	let head_img = 'https://fundacionsoycuerpo.cl/img/logo_bg.jpg';
</script>

<svelte:head>
	<title>{head_title}</title>
	<meta property="og:title" content={head_title} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={head_img} />
	<meta property="og:url" content="https://fundacionsoycuerpo.cl" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={head_title} />
	<meta name="twitter:description" content={head_description} />
	<meta name="twitter:image" content={head_img} />
</svelte:head>

<div class="container">
	<div class="inner-content">
		<h1>Fundación Soy Cuerpo</h1>

		{#if data.events && data.events.length}
			<section class="events">
				<h2>Próximos eventos</h2>
				{#each data.events as event, i}
					<Event {event} />
				{/each}
			</section>
		{/if}
		{#if data.articles && data.articles.length}
			<section class="news">
				<h2>Noticias</h2>
				{#each data.articles as article, i}
					<Article {article} />
				{/each}
				<div class="more-news">
					<a href="/noticias">Ver todas las noticias</a>
				</div>
			</section>
		{/if}

		<section class="partners">
			<h2>Alianzas y Colaboraciones</h2>
			<div class="partners-list">
				<img src="/img/logos_ext/centro_cultural_espana.jpg" alt="Logo centro cultural de españa" />
				<img src="/img/logos_ext/sendero_de_chile.png" alt="Logo fundación sendero de chile" />
				<img src="/img/logos_ext/coanil.png" alt="Logo fundación coanil" />
				<img src="/img/logos_ext/somos_yoga.jpg" alt="Logo fundación somos yoga" />
				<img src="/img/logos_ext/museo_de_la_memoria.svg" alt="Logo museo de la memoria" />
			</div>
		</section>

		<section class="big-banner">
			<img src="/img/colabora_-_generico2.png" alt="Afiche colaboración" />
		</section>
	</div>
</div>

<style lang="css">
	.container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
	}

	.big-banner {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.big-banner img {
		width: 100%;
		max-width: 800px;
		height: 100%;
		margin: 0 auto;
		object-fit: contain;
		object-position: center;
	}

	/* :global(h2 + article) {
    margin-top: 1rem;
  } */

	.more-news {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	article h3 {
		word-break: break-all;
	}

	.more-news a,
	.more-news a:visited {
		margin-top: 10px;
		padding: 8px 16px;
		border: 2px solid black;
		text-decoration: none;
		color: black;
		border-radius: 5px;
	}

	.partners-list {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 2rem;
		align-items: center;
	}

	.partners-list img {
		max-height: 150px;
		width: 100%;
		object-fit: contain;
		display: block;
	}
</style>
