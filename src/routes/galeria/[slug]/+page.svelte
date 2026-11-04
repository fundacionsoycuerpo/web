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
		style:--cover-ratio={data.cover ? `${data.cover.width} / ${data.cover.height}` : undefined}
	>
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
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.image {
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 70vh;
		/* Reserva la proporcion real de portada.jpg antes de que descargue,
		   asi el contenido de abajo no se desplaza (CLS).
		   Sin width/height conocidos no hay aspect-ratio: cae en un 16:9. */
		aspect-ratio: var(--cover-ratio, 16 / 9);
		overflow: hidden;
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
