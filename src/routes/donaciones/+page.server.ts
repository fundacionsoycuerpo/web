export async function get() {
	return {
		flow: process.env['FLOW_URL']
	};
}
