<script lang="ts">
	interface Props {
		images: { src: string; width: number; height: number }[];
		/** Se conserva para no romper el `bind:alt` del padre, pero no se usa:
		 *  el <h1> de la página ya nombra el evento, así que las fotos son
		 *  decorativas. Repetir el mismo texto 84 veces solo hace que un
		 *  lector de pantalla enumere 84 frases idénticas.
		 *  El fix real es un alt por foto desde Strapi. */
		alt: string;
		source: string;
	}

	let { images, source }: Props = $props();
</script>

<div class="gallery">
	{#if images && images.length}
		<section>
			{#each images as image (image.src)}
				<img
					class="gallery-item"
					src="/{source}/gallery/{image.src}"
					alt=""
					width={image.width}
					height={image.height}
					loading="lazy"
					decoding="async"
				/>
			{/each}
		</section>
	{/if}
</div>

<style lang="css">
	.gallery {
		width: 100%;
	}

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	section img {
		position: relative;
		display: block;
		width: auto;
		height: 200px;
		min-width: 100px;
		margin: 2px;
		background: lightgray;
		object-fit: contain;
		object-position: center;
	}

	@media (max-width: 599px) {
		section img {
			width: 100%;
			height: auto;
			min-width: 50px;
		}
	}
</style>
