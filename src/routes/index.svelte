<script lang="ts">
	import type { Article as ArticleModel } from '$types/Article';
	import Article from '$lib/Article.svelte';
	import Event from '$lib/Event.svelte';

	export let articles: ArticleModel[];
	export let events;

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

		<!-- <section class="video-section">
			<h2>DARIA - Danzas Rituales de la Abundacia</h2>
			<h3>Red de Trabajadoras de las Danzas</h3>
			<p class="sub">Videodanza - Estreno del 29 de Abril al 7 de mayo</p>
			<br />
			<div class="video-wrapper">
				<div class="video-container">
					<iframe
						src="https://www.youtube.com/embed/teOoQU_TSaY?rel=0"
						title="Daria"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</div>
			</div>
		</section> -->

		{#if events && events.length}
			<section class="events">
				<h2>Próximos eventos</h2>
				{#each events as event, i}
					<Event {event} />
				{/each}
			</section>
		{/if}
		{#if articles && articles.length}
			<section class="news">
				<h2>Noticias</h2>
				{#each articles as article, i}
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

<style lang="scss">
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
	article {
		h3 {
			word-break: break-all;
		}
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
	.video-section {
		position: relative;
		padding: 40px 0px 80px;
		background-color: black;
		margin-left: -2rem;
		padding-left: 2rem;
		padding-right: 2rem;
		width: 100vw;
		max-width: 1400px;
		color: white;
		@media (min-width: 490px) {
			margin-left: -5rem;
			padding-left: 5rem;
			padding-right: 5rem;
		}
	}

	.video-section p {
		margin-top: 40px;
		margin-bottom: 40px;
		&.sub {
			margin-top: 8px;
		}
	}
</style>
