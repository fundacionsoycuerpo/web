<script>
	export let project;
</script>

<a
	class="project"
	style="background: {project.color}; border:2px solid {project.color}"
	href={project.link}>{project.title}</a
>

<style lang="scss">
	.project {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		padding: 8px 16px;
		border-radius: 5px;
	}

	a,
	a:visited {
		color: black;
		display: block;
		height: 100%;
		width: 100%;
		font-weight: bold;
		text-decoration: none;
	}
</style>
