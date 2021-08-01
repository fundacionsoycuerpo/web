export async function get({ params }) {
	const body = {
		apiUrl: process.env['API_URL']
	};

	return { body };
}
