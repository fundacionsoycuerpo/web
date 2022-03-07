<script>
	import Member from '$lib/Member.svelte';
	export let members;
	let expanded = null;
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - Equipo</title>
</svelte:head>

<div class="inner-content">
	<h1>Equipo Humano</h1>
	<div class="members">
		{#each members as member}
			<Member {member} on:expand={(e) => (expanded = e.detail)} />
		{/each}
	</div>
</div>

<style style="scss">
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
