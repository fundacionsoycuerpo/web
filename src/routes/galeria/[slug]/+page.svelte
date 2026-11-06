<script lang="ts">
	import Gallery from '$lib/Gallery.svelte';

	interface Props {
		data: { gallery: any; images: any }; // export let gallery;
	}

	let { data = $bindable() }: Props = $props();
	
	// export let images;
</script>

<svelte:head>
	<title>{data.gallery.head_title}</title>
	<meta property="og:title" content={data.gallery.head_title} />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content={'https://fundacionsoycuerpo.cl/' + data.gallery.slug + '/portada.jpg'}
	/>
	<meta property="og:url" content={'https://fundacionsoycuerpo.cl/galeria/' + data.gallery.slug} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.gallery.head_title} />
	<meta
		name="twitter:image"
		content={'https://fundacionsoycuerpo.cl/' + data.gallery.slug + '/portada.jpg'}
	/>
</svelte:head>

<div class="container">
	<div
		class="image"
		style:--cover-w={data.cover?.width}
		style:--cover-h={data.cover?.height}
	>
		<img class="gallery-item" src="/{data.gallery.slug}/portada.jpg" alt="" fetchpriority="high" />
	</div>
	<div class="inner-content">
		<h1>{data.gallery.content_title}</h1>
		<p>{data.gallery.content_date}</p>
		<p>{data.gallery.content_location}</p>
		<div class="gallery">
			<Gallery images={data.images} bind:alt={data.gallery.imgsAlt} bind:source={data.gallery.slug} />
		</div>
		<a href="/galeria">Volver a Galería</a>
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
	}

	.image {
		display: flex;
		align-items: center;
		justify-content: center;
		/* Misma caja que termina ocupando la portada: 100% del ancho, con el
		   tope de 55rem que impone app.css, y centrada.
		   Sobre esa caja se declara la proporcion real del archivo, asi el
		   navegador reserva la altura final antes de descargar la imagen y el
		   contenido de abajo no se desplaza.
		   Las dimensiones vienen medidas en build desde el archivo (ver
		   +page.server.ts), no estan hardcodeadas. Sin ese dato cae en 16/9. */
		width: 100%;
		max-width: min(55rem, 100%);
		margin-left: auto;
		margin-right: auto;
		aspect-ratio: var(--cover-w, 16) / var(--cover-h, 9);
		max-height: 70vh;
	}

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.gallery {
		margin-top: 3rem;
	}

	a {
		margin-left: auto;
		margin-right: auto;
		margin-top: 2rem;
	}

	h1 {
		margin-bottom: 1rem;
	}
</style>
