<script>
	import { menuIsOpen } from '../stores.js';

	function toggle() {
		menuIsOpen.update((isOpen) => !isOpen);
	}
</script>

<nav class={$menuIsOpen ? 'open' : ''}>
	<ul>
		<li>
			<a href="/" on:click={toggle}>Inicio</a>
		</li>
		<li>
			<a href="/quienes_somos" on:click={toggle}>Quienes somos</a>
		</li>
		<li>
			<a href="/equipo" on:click={toggle}>Equipo</a>
		</li>
		<li>
			<a href="/donaciones" on:click={toggle}>Donaciones</a>
		</li>
		<li>
			<a href="/proyectos" on:click={toggle}>Proyectos</a>
		</li>
		<li id="deps">
			<b>Departamentos</b>
			<ul>
				<li>
					<a href="/departamentos/arte" on:click={toggle}>Arte</a>
				</li>
				<li>
					<a href="/departamentos/plataformas" on:click={toggle}>Plataformas</a>
				</li>
				<li>
					<a href="/departamentos/salud" on:click={toggle}>Salud</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="/galeria" on:click={toggle}>Galería</a>
		</li>

		<li>
			<a href="/noticias" on:click={toggle}>Noticias</a>
		</li>
		<li>
			<a href="/documentos" on:click={toggle}>Documentos</a>
		</li>
	</ul>
</nav>

{#if $menuIsOpen}
	<div class="overlay" on:click={toggle} />
{/if}

<style lang="scss">
	nav {
		position: fixed;
		top: 0;
		min-height: 100vh;
		width: 300px;
		padding: 50px;
		padding-top: 100px;
		background: #161616;
		color: var(--contrast-text-color);
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		transform-origin: 0% 0%;
		transform: translate(-100%, 0);
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		user-select: none;
		z-index: 2;

		&.open {
			transform: none;
			height: 100%;
			overflow: scroll;
		}
	}

	.overlay {
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: rgba(0, 0, 0, 50%);
		z-index: 1;
	}

	ul {
		list-style-type: none;
		li {
			padding: 10px 0;
			font-size: 22px;
			& > ul {
				padding: 0;
			}
		}
	}

	a {
		text-decoration: none;
		color: var(--contrast-text-color);
		&:hover {
			text-decoration: underline;
		}
	}

	#deps {
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
