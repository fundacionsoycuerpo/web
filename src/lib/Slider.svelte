<script>
	import { onMount } from 'svelte';
	export let slides = [];
	export let auto = true;
	export let interval = 5000;

	let cur = 0;

	function next(e) {
		if (cur < slides.length - 1) {
			cur = cur + 1;
		} else {
			cur = 0;
		}
	}

	onMount(() => {
		if (auto) {
			setInterval(() => {
				next();
			}, interval);
		}
	});
</script>

<div class="extra-outer-wrapper">
	<div class="inner-wrapper">
		{#each slides as slide (slide.imgSrc)}
			<div style="transform: translateX({cur * -1 * 100}vw)" class="slide">
				<img src={slide.imgSrc} alt={slide.imgAlt} />
			</div>
		{/each}
	</div>
</div>

<style lang="css">
	.extra-outer-wrapper {
		width: 100vw;
		height: 100%;
		overflow: hidden;
	}

	.inner-wrapper {
		display: flex;
		width: 100vw;
		height: 100%;
		overflow: hidden;
		will-change: contents;
	}

	.slide {
		flex: 1 0 auto;
		width: 100%;
		height: 100%;
		background: transparent;
		color: white;
		transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
		position: relative;
	}

	:global(.slide img) {
		height: 100%;
		width: 100vw;
	}
</style>
