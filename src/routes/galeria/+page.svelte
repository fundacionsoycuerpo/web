<script lang="ts">
	export let data:{galleries:any[]}
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - Galería</title>
</svelte:head>

<div class="inner-content">
	<h1>Galería</h1>
	<ul class="galleries">
		{#each data.galleries as event}
			<li>
				<a href={'galeria/' + event.slug}>{event.content_title}</a>
			</li>
		{/each}
	</ul>
</div>
