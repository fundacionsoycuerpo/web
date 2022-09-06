<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="inner-content">
	{#if !dev && $page.status === 404}
		<h1>:(</h1>

		<p>La página que buscas no existe</p>
	{:else}
		<h1>{$page.status}</h1>

		<p>{$page.error && $page.error.message}</p>
	{/if}

	{#if dev && $page.error && $page.error.stack}
		<pre>{$page.error.stack}</pre>
	{/if}
</div>
