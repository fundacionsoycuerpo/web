<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';

	let projects = [
		{
			title: 'El Cuerpo de la Memoria',
			description:
				'Encuentro que reflexiona desde el cuerpo y su existencia saludable, en armonía con su historia, reivindicando su memoria y visibilizando la emancipación de nuestro territorio cuerpo.',
			link: '/proyectos/el_cuerpo_de_la_memoria',
			color: 'rgba(206, 105, 138, 0.3)'
		},
		{
			title: 'Somos Cerro',
			description:
				'Primera Jornada de auto-cuidado en espacios naturales, una invitación a habitar nuestro territorio corporal y geográfico.',
			link: '/proyectos/somos_cerro',
			color: 'rgba(196, 253, 213, 0.3)'
		},
		{
			title: 'Cuerpo territorio',
			description:
				'Talleres virtuales enfocados en fomentar el desarrollo saludable y sustentable del ser humano, ofreciendo a la comunidad un espacio inclusivo para el auto-cuidado y conocimiento personal.',
			link: '/proyectos/cuerpo_territorio',
			color: 'rgba(255, 191, 176, 0.3)'
		}
	];
</script>

<div class="container">
	<div class="inner-content">
		<section>
			<h1>Proyectos</h1>
			{#if projects && projects.length}
				<div class="projects-list">
					{#each projects as project, i}
						<ProjectCard {project} />
					{/each}
				</div>
			{/if}
		</section>
	</div>
</div>

<style>
	.projects-list {
		display: grid;
		width: 100%;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
