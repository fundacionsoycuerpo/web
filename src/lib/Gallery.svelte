<script lang="ts">
	import { afterUpdate } from 'svelte';

	const lazyLoad = (target) => {
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					const src = img.getAttribute('data-lazy');
					if (src) {
						img.setAttribute('style', setStyle(src));
						img.setAttribute('src', src);
						img.removeAttribute('data-lazy');
					}
					observer.disconnect();
				}
			});
		});
		io.observe(target);
	};

	export let images: { src: string; width: number; height: number }[], alt, source;

	const setStyle = (src) => {
		const image = images.find((i) => src.includes(i.src));
		if (window) {
			if (window.matchMedia('(min-width: 600px)').matches) {
				return `min-width:${(image.width * 200) / image.height}px;`;
			} else {
				const gallery = document.querySelector('.gallery');
				return `min-height:${(image.height * gallery.clientWidth) / image.width}px`;
			}
		}
		return '';
	};

	afterUpdate(() => {
		if (images.length) {
			const targets = document.querySelectorAll('img.gallery-item');
			targets.forEach((target: HTMLImageElement) => {
				target.onload = function () {
					target.removeAttribute('style');
					target.setAttribute('alt', alt);
				};
				lazyLoad(target);
			});
		}
	});
</script>

<div class="gallery">
	{#if images && images.length}
		<section>
			{#each images as image, i}
				<img class="gallery-item" data-lazy="/{source}/gallery/{image.src}" alt="" />
			{/each}
		</section>
	{/if}
</div>

<style lang="scss">
	.gallery {
		width: 100%;
	}

	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		img {
			position: relative;
			width: 100%;
			height: 100%;
			min-height: 100px;
			min-width: 50px;
			margin: 2px;
			background: lightgray;
			object-fit: contain;
			object-position: center;
		}
	}

	@media (min-width: 600px) {
		section img {
			position: relative;
			height: 200px;
			width: auto;
			min-height: 200px;
			min-width: 100px;
		}
	}
</style>
