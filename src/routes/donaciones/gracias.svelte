<svelte:head>
	<title>Fundación Soy Cuerpo - Donación exitosa</title>
</svelte:head>

<div class="inner-content">
	<div class="thanks">
		<img src="/img/logo_bg.jpg" alt="Logo fundacion soy cuerpo" />
		<div>
			<h1>¡Gracias por tu aporte!</h1>
			<p>
				Con tu ayuda seguiremos desarrollando programas y proyectos en pos del cuerpo a nivel
				nacional.
			</p>
		</div>
	</div>
</div>

<style>
	.thanks {
		display: flex;
		flex-direction: column;
	}
	img {
		flex: 0 0 200px;
		width: 200px;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 600px) {
		.thanks {
			flex-direction: row;
			align-items: center;
		}
	}

	.thanks > div {
		flex: 1 1 calc(100% - 200px -2rem);
		margin-left: 2rem;
	}
</style>
