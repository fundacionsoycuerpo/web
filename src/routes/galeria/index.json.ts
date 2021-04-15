import { galleries } from '$lib/_data/_galerias';

export function get({ params }) {
	return { body: galleries };
}
