<script lang="ts">
	import ProjectCard from '$lib/ProjectCard.svelte';

	let projects = [
		{
			title: 'El Cuerpo de la Memoria',
			description: 'lorem',
			link: '/proyectos/el_cuerpo_de_la_memoria',
			color: 'rgba(206, 105, 138, 0.3)'
		},
		{
			title: 'Somos Cerro',
			description: 'lorem',
			link: '/proyectos/somos_cerro',
			color: 'rgba(196, 253, 213, 0.3)'
		},
		{
			title: 'Cuerpo territorio',
			description: 'lorem',
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
