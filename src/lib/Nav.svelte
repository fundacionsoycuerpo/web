<script>
	import { menuIsOpen } from '../stores';

	import Hamburguer from '$lib/Hamburguer.svelte';

	function close() {
		menuIsOpen.update((isOpen) => false);
	}
</script>

<header>
	<Hamburguer />
	<a aria-label="Ir al inicio" class="logo-link" href="/" on:click={close}>
		<img
			src="/img/2610_Fundacion_Soy_Cuerpo_D_01-60x60.png"
			srcset="/img/2610_Fundacion_Soy_Cuerpo_D_01-60x60.png 1x, /img/2610_Fundacion_Soy_Cuerpo_D_01-120x120.png 2x, /img/2610_Fundacion_Soy_Cuerpo_D_01-240x240.png 4x"
			alt="Logo"
		/>
	</a>
	<a class="button" href="/donaciones" on:click={close}>Colabora</a>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		width: 100%;
		height: 80px;
		color: var(--text-color);
		z-index: 10;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
		background: white;
	}

	img {
		height: 60px;
		width: 60px;
		object-fit: contain;
		object-position: center;
	}

	.logo-link {
		position: absolute;
		left: calc(50% - 30px);
	}

	a {
		text-decoration: none;
		&.button {
			cursor: pointer;
			background: var(--contrast-bg);
			color: white;
			padding: 8px 16px;
			border-radius: 5px;
		}
	}
</style>
