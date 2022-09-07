<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import SideMenu from '$lib/SideMenu.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav />
<SideMenu />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		margin-top: 80px;
		min-height: calc(100vh - 80px - 4rem);
	}
	@media (min-width: 490px) {
		main {
			margin-top: 80px;
			min-height: calc(100vh - 80px - 10rem);
		}
	}
</style>
