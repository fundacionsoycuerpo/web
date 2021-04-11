import { events } from '$lib/_data/_eventos';
import marked from 'marked';

export function get({ params }) {
	const body = events.map((e) => {
		return { ...e, description: marked(e.description) };
	});
	return { body };
}
