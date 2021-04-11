<script lang="ts">
	export const prerender = true;
	export const ssr = false;
</script>

<div class="inner-content">
	<section class="ct description">
		<div class="container">
			<h1>Cuerpo Territorio</h1>
			<p>
				El programa "Cuerpo Territorio" comprende la realización de talleres virtuales, enfocados en
				fomentar el desarrollo saludable y sustentable del ser humano, ofreciendo a la comunidad un
				espacio inclusivo para el auto-cuidado y conocimiento personal.
			</p>
		</div>
	</section>
	<section class="projects">
		<h2>Otros proyectos</h2>
		<ul>
			<li>
				<a href="/proyectos/el_cuerpo_de_la_memoria">El cuerpo de la memoria</a>
			</li>
			<li>
				<a href="/proyectos/somos_cerro">Somos Cerro</a>
			</li>
		</ul>
	</section>
</div>

<style>
	:global(section.ct h1::before) {
		content: '';
		position: absolute;
		height: 100px;
		background: rgba(255, 191, 176, 0.3);
		width: 22ch;
		top: -2rem;
		z-index: -1;
	}

	section.description {
		position: relative;
		overflow: hidden;
		background: white;
		width: 100%;
	}

	section.description .container {
		width: 100%;
	}

	section.description p {
		flex: 1 1 50%;
		font-size: 1.5rem;
		line-height: 1.2em;
		margin-top: 1rem;
	}

	section.description h1 {
		display: block;
		position: relative;
		text-transform: uppercase;
		z-index: 1;
		font-size: 3rem;
	}

	@media (min-width: 415px) {
		section.description h1 {
			font-size: 5rem;
		}

		section.description p {
			margin-top: 2rem;
		}
	}

	section.projects {
		position: relative;
		overflow: hidden;
		background: white;
		width: 100%;
	}

	section.projects .project a {
		margin-top: 20px;
		color: white;
	}

	section.projects {
		background: white;
		display: flex;
		flex-direction: column;
	}

	section.projects {
		display: flex;
		flex-direction: column;
	}

	section.projects a {
		line-height: 1.5;
		color: black;
	}

	section.projects ul {
		margin-top: 1rem;
	}
</style>
