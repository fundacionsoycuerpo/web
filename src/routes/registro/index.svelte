<script lang="ts">
	import axios from 'axios';
	let sendingData = false;
	let error = false;
	async function onSubmit(e) {
		const formData = new FormData(e.target);
		const data = {};
		for (let field of formData as any) {
			const [key, value] = field;
			data[key] = value;
		}

		try {
			sendingData = true;
			error = false;
			await axios
				.post(`${process.env['API_URL']}/reg`, data, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(({ data }) => {
					window.location.href = data.url;
					sendingData = false;
				});
		} catch (e) {
			// TODO: handle error
			error = true;
			sendingData = false;
		}
	}
</script>

<div class="inner-content">
	<h1>Registro de socia/socio</h1>

	<form on:submit|preventDefault={onSubmit}>
		<label for="name"> Nombre </label>
		<input type="text" name="name" />
		<label for="email">Correo Electrónico</label>
		<input type="text" name="email" />
		<label for="amount">Aporte mensual (mínimo $1000)</label>
		<input type="number" name="amount" min="5000" max="9999999" />
		<button class="button contrast" disabled={sendingData} type="submit">Donar</button>
		{#if error}
			<p>
				Ocurrió un error en el registro. Si el problema persiste escríbenos a <a
					href="mailto:donaciones@fundacionsoycuerpo.cl">donaciones@fundacionsoycuerpo.cl</a
				>
			</p>
		{/if}
	</form>
	<p>
		* Luego de ingresar tus datos serás redirigido al portal de pagos para ingresar los datos de tu
		tarjeta. Por tu seguridad, nosotros no almacenaremos ningún dato de pago (el portal de pago se
		encarga de eso).
	</p>
	<p>
		* Una vez registrada la tarjeta, automáticamente se hará el cargo por el monto seleccionado.
		Luego el cobro se hará una vez al mes.
	</p>
	<p>
		* Si tienes cualquier duda puedes escribirnos a <a
			href="mailto:donaciones@fundacionsoycuerpo.cl">donaciones@fundacionsoycuerpo.cl</a
		>
	</p>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 300px;
	}
	input + label {
		margin-top: 18px;
	}
	input {
		width: 100%;
	}

	button {
		margin-top: 16px;
	}
	form {
		margin-bottom: var(--size-900);
	}

	p {
		margin-top: 8px;
		font-size: 16px;
	}
</style>
