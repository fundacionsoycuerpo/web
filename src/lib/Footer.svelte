<footer>
	<div class="registration-form">
		<div id="mc_embed_signup">
			<p>Suscríbete para recibir noticias de Fundación Soy Cuerpo</p>
			<form
				action="https://fundacionsoycuerpo.us17.list-manage.com/subscribe/post?u=f96ce267105ee7db008242de1&amp;id=e19bac6bc8"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				class="validate"
				target="_blank"
				novalidate
			>
				<div id="mc_embed_signup_scroll">
					<div class="flex-section">
						<div class="mc-field-group">
							<label for="mce-EMAIL">Correo electrónico <span class="asterisk">*</span> </label>
							<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
						</div>
						<div class="clear">
							<input
								type="submit"
								value="Suscribirse"
								name="subscribe"
								id="mc-embedded-subscribe"
								class="button"
							/>
						</div>
						<div id="mce-responses" class="clear"></div>
						<div class="response" id="mce-error-response" style="display:none"></div>
						<div class="response" id="mce-success-response" style="display:none"></div>
					</div>
					<div style="position: absolute; left: -5000px;" aria-hidden="true">
						<input
							type="text"
							name="b_f96ce267105ee7db008242de1_e19bac6bc8"
							tabindex="-1"
							value=""
						/>
					</div>
				</div>
			</form>
		</div>
	</div>
	<hr />
	<nav>
		<div>
			<a href="/">
				<img
					class="logo"
					src="/img/2610_Fundacion_Soy_Cuerpo_D_01-120x120.png"
					srcset="/img/2610_Fundacion_Soy_Cuerpo_D_01-120x120.png 1x,/img/2610_Fundacion_Soy_Cuerpo_D_01-240x240.png 2x, /img/2610_Fundacion_Soy_Cuerpo_D_01-480x480.png 4x"
					alt="Logo"
				/>
				<span class="home-anchor">Inicio</span>
			</a>
		</div>
		<div>
			<a href="/quienes_somos">Quienes somos</a>
			<a href="/equipo">Equipo</a>
			<a href="/donaciones">Donaciones</a>
			<a href="/noticias">Noticias</a>
			<a href="/proyectos">Proyectos</a>
		</div>
		<div>
			<a href="/departamentos/arte">Departamento de arte</a>
			<a href="/departamentos/plataformas">Departamento de plataformas</a>
			<a href="/departamentos/salud">Departamento de salud</a>
			<a href="/galeria">Galería</a>
			<a href="/documentos">Documentos</a>
		</div>
		<div class="social">
			<a href="https://www.facebook.com/fundacionsoycuerpo">
				<img src="/svg/facebook.svg" alt="Facebook Logo" />
			</a>
			<a href="https://www.instagram.com/fundacionsoycuerpo">
				<img src="/svg/instagram.svg" alt="Instagram Logo" />
			</a>
			<a href="https://fundacionsoycuerpo.cl/youtube" style="margin-left:10px;">
				<img src="/svg/youtube.svg" alt="Youtube Logo" />
			</a>
		</div>
	</nav>
</footer>

<style lang="css">
	nav div.social {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	nav > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.home-anchor {
		display: none;
	}

	img.logo {
		height: 120px;
		width: 120px;
		object-fit: contain;
		object-position: center;
		filter: brightness(0) invert(1);
	}

	.social img {
		height: 40px;
		width: 40px;
		object-fit: contain;
		object-position: center;
		filter: brightness(0) invert(1);
	}

	a {
		color: var(--contrast-text-color);
		text-decoration: none;
		margin-bottom: 1rem;
	}

	a:hover {
		text-decoration: underline;
		text-decoration-color: var(--contrast-text-color);
	}

	footer {
		background: var(--contrast-bg);
		padding: 2.5rem 4rem;
	}

	@media (max-width: 880px) {
		footer {
			padding: 2.5rem 2rem;
		}
	}

	@media (max-width: 700px) {
		nav {
			flex-direction: column;
			align-items: center;
		}
		nav > div,
		div.social {
			align-items: center;
			text-align: center;
			font-size: 1.5rem;
		}

		img.logo {
			display: none;
		}

		.home-anchor {
			display: block;
		}
	}

	#mc_embed_signup {
		color: white;
		text-align: center;
	}
	.registration-form {
		padding: 8px 16px;
		/* border: 2px solid white;
    border-radius: 10px;
    margin-bottom: 40px; */
	}

	form {
		margin-top: 10px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20px;
	}
	input[type='submit'] {
		cursor: pointer;
		background: var(--contrast-bg);
		color: white;
		padding: 3px 16px;
		border-radius: 5px;
		margin-left: 6px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	.flex-section {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 600px) {
		.flex-section {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.flex-section input {
			margin-top: 10px;
		}
	}

	hr {
		margin-bottom: 20px;
	}
</style>
