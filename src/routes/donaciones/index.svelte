<script context="module">
	export function load({ page, fetch, session, context }) {
		return fetch(`/donaciones.json`)
			.then((res) => res.json())
			.then((data) => ({ props: data }))
			.catch((err) => ({ status: 404, error: new Error('Page Not found') }));
	}
</script>

<script>
	export let flow;
</script>

<svelte:head>
	<title>Fundación Soy Cuerpo - Donaciones</title>
</svelte:head>

<div class="inner-content">
	<h1>Donaciones</h1>
	<p class="sub-h1">
		Con tu ayuda seguiremos desarrollando programas y proyectos en pos del cuerpo a nivel nacional.
		Gracias por ser parte de estas iniciativas.
	</p>

	{#if flow}
		<section>
			<h2>¡Hazte socia/socio!</h2>
			<small>Contribuye con una donación mensual</small>
			<p>Pronto...</p>
			<!-- <a href="/registro_donacion"> Ir a registro </a> -->
		</section>
	{/if}
	{#if flow}
		<section>
			<h2>Donación única online</h2>
			<a href={flow} target="_blank"> Donar </a>
			<small>*Serás redirigido al portal de pagos</small>
		</section>
	{/if}
	<section>
		<h2>Donación por transferencia bancaria</h2>
		<div class="card">
			<span>Nro de cuenta: 20200055391</span>
			<span>Banco: Banco Estado</span>
			<span>Tipo de cuenta: Cuenta Corriente</span>
			<span>RUT: 65.176.067-4</span>
			<span>Correo: donaciones@fundacionsoycuerpo.cl</span>
		</div>
	</section>
	<section class="big-banner">
		<img src="/img/colabora_-_generico2.png" alt="Afiche colaboración" />
	</section>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 0 rgba(14, 30, 37, 0.12);
		transition: 0.3s;
		padding: 1rem;
		border-radius: 5px;
		align-items: left;
		margin-bottom: 2rem;
		max-width: 400px;
		margin-top: 12px;
	}

	.big-banner {
		width: 100%;
		display: flex;
	}

	.big-banner img {
		width: 100%;
		max-width: 800px;
		height: 100%;
		margin: auto;
		object-fit: contain;
		object-position: center;
	}

	a {
		padding: 12px 24px;
		background: white;
		color: var(--contrast-bg);
		border: 1px solid var(--contrast-bg);
		border-radius: 10px;
		margin-top: 12px;
		display: inline-block;
		text-decoration: none;
		margin-bottom: 1rem;
	}

	a:hover {
		cursor: pointer;
		background: var(--contrast-bg);
		color: white;
	}

	small {
		display: block;
	}
	section {
		margin-top: 3rem;
	}
	h1 {
		margin-bottom: 1rem;
	}
</style>
