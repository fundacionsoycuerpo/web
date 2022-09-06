export async function get() {
	const body = {
		flow: process.env['FLOW_URL']
	};

	return { body };
}
