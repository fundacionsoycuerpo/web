<script>
	import { dev } from '$app/env';
	export let status;
	export let error;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="inner-content">
	{#if !dev && status === 404}
		<h1>:(</h1>

		<p>La página que buscas no existe</p>
	{:else}
		<h1>{status}</h1>

		<p>{error && error.message}</p>
	{/if}

	{#if dev && error && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>
