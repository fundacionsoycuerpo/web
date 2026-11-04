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
	<div class="image">
		<img
			class="gallery-item"
			src="/{data.gallery.slug}/portada.jpg"
			width={data.cover?.width}
			height={data.cover?.height}
			alt=""
			fetchpriority="high"
		/>
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

	.image img {
		/* El hero usa siempre el 100% del ancho. La altura sale de la
		   proporcion natural de la imagen, que ahora viene declarada en los
		   atributos width/height: el navegador la conoce antes de descargar,
		   reserva el espacio y no hay salto (CLS). */
		display: block;
		width: 100%;
		height: auto;
	}

	.image {
		width: 100%;
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
