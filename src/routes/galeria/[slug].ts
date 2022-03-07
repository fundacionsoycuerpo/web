import fs from 'fs';
import path from 'path';
import imageSize from 'image-size';
import { galleries } from '$lib/_data/_galerias';

function getImages(params) {
	return fs
		.readdirSync(path.join('static', params.slug, 'gallery'))
		.filter((i) => i.includes('.jpg'))
		.map((i) => {
			const { width, height } = imageSize(
				fs.readFileSync(path.join('static', params.slug, 'gallery', i))
			);
			return { src: i, height, width };
		});
}

export function get({ params }) {
	const gallery = galleries.find((g) => g.slug === params.slug);
	if (!gallery) {
		return { status: 404, error: new Error('Page Not found') };
	}

	return { body: { gallery, images: getImages(params) } };
}