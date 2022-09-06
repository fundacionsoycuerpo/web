export async function get() {
	const body = {
		apiUrl: process.env['API_URL']
	};

	return body;
}
