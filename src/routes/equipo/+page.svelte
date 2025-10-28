<script lang="ts">
	import Member from '$lib/Member.svelte';
	interface Props {
		data: { members: any[] };
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - Equipo</title>
</svelte:head>

<div class="inner-content">
	<h1>Equipo Humano</h1>
	<div class="members">
		{#each data.members as member}
			<Member {member} />
		{/each}
	</div>
</div>

<style style="css">
	.members {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 936px) {
		.members {
			display: flex;
			flex-direction: column;
		}
	}
</style>
