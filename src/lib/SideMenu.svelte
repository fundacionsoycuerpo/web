<script>
	import { menuIsOpen } from '../stores';

	function toggle() {
		menuIsOpen.update((isOpen) => !isOpen);
	}
</script>

<nav class={$menuIsOpen ? 'open' : ''}>
	<ul>
		<li>
			<a href="/" onclick={toggle}>Inicio</a>
		</li>
		<li>
			<a href="/quienes_somos" onclick={toggle}>Quienes somos</a>
		</li>
		<li>
			<a href="/equipo" onclick={toggle}>Equipo</a>
		</li>
		<li>
			<a href="/donaciones" onclick={toggle}>Donaciones</a>
		</li>
		<li>
			<a href="/proyectos" onclick={toggle}>Proyectos</a>
		</li>
		<li id="deps">
			<b>Departamentos</b>
			<ul>
				<li>
					<a href="/departamentos/arte" onclick={toggle}>Arte</a>
				</li>
				<li>
					<a href="/departamentos/plataformas" onclick={toggle}>Plataformas</a>
				</li>
				<li>
					<a href="/departamentos/salud" onclick={toggle}>Salud</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="/galeria" onclick={toggle}>Galería</a>
		</li>

		<li>
			<a href="/noticias" onclick={toggle}>Noticias</a>
		</li>
		<li>
			<a href="/documentos" onclick={toggle}>Documentos</a>
		</li>
	</ul>
</nav>

{#if $menuIsOpen}
	<div class="overlay" onclick={toggle}></div>
{/if}

<style lang="css">
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
	}

	nav.open {
		transform: none;
		height: 100%;
		overflow: scroll;
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
	}
	ul li {
		padding: 10px 0;
		font-size: 22px;
	}

	ul li > ul {
		padding: 0;
	}

	a {
		text-decoration: none;
		color: var(--contrast-text-color);
	}
	
	a:hover {
		text-decoration: underline;
	}

	#deps {
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
