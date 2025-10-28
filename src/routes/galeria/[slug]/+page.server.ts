import fs from 'fs';
import path from 'path';
import imageSize from 'image-size';
import { galleries } from '$lib/_data/_galerias';

function getImages(params: { slug: string }) {
	return fs
		.readdirSync(path.join('static', params.slug, 'gallery'))
		.filter((i) => i.includes('.jpg'))
		.map((i) => {
			const imagePath = path.join('static', params.slug, 'gallery', i);
			const { width, height } = imageSize(imagePath);
			return { src: i, height, width };
		});
}

export function load({ params }: { params: { slug: string } }) {
	const gallery = galleries.find((g) => g.slug === params.slug);
	if (!gallery) {
		return { status: 404, error: new Error('Page Not found') };
	}

	return { gallery, images: getImages(params) };
}
