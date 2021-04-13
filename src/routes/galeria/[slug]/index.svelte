<script context="module">
	export async function load({ page, fetch, session, context }) {
		const { slug } = page.params;
		const galleriesResponse = await fetch(`/galeria.json`);
		const galleries = await galleriesResponse.json();
		const gallery = galleries.find((g) => g.slug === slug);
		if (!gallery) {
			return { status: 404, error: new Error('Page Not found') };
		}

		return fetch(`/galeria/${slug}.json`)
			.then((r) => r.json())
			.then((images) => {
				return { gallery, images };
			})
			.then((data) => ({ props: { ...data } }));
	}
</script>

<script>
	import Gallery from '$lib/Gallery.svelte';

	export let gallery;
	export let images;
</script>

<svelte:head>
	<title>{gallery.head_title}</title>
	<meta property="og:title" content={gallery.head_title} />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content={'https://fundacionsoycuerpo.cl/' + gallery.slug + '/portada.jpg'}
	/>
	<meta property="og:url" content={'https://fundacionsoycuerpo.cl/galeria/' + gallery.slug} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={gallery.head_title} />
	<meta
		name="twitter:image"
		content={'https://fundacionsoycuerpo.cl/' + gallery.slug + '/portada.jpg'}
	/>
</svelte:head>

<div class="container">
	<div class="image">
		<img class="gallery-item" src="/{gallery.slug}/portada.jpg" alt="Background" />
	</div>
	<div class="inner-content">
		<h1>{gallery.content_title}</h1>
		<p>{gallery.content_date}</p>
		<p>{gallery.content_location}</p>
		<div class="gallery">
			<Gallery {images} bind:alt={gallery.imgsAlt} bind:source={gallery.slug} />
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
