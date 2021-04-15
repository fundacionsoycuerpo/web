export async function get({ params }) {
	const body = {
		flow: process.env['FLOW_URL']
	};

	return { body };
}
