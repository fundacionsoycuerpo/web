export async function load() {
	const flow = process.env['FLOW_URL'];

	// FLOW_URL alimenta la seccion "Donacion unica online". Sin ella el bloque
	// no se renderiza y el build termina igual con exit 0, asi que la pagina de
	// donaciones se desplegaria sin su boton principal y sin ninguna alerta.
	// Preferimos romper el build: un deploy fallido se nota, un boton faltante
	// no. El valor es publico (aparece en el HTML del sitio).
	if (!flow) {
		throw new Error(
			'FLOW_URL no esta definida. La pagina de donaciones se desplegaria sin el ' +
				'boton de donar. Definirla en el entorno de build (Netlify) o en el CI.'
		);
	}

	return { flow };
}
