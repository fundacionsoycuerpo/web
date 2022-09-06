import { dev } from '$app/environment';
import fs from 'fs';
import path from 'path';
import imageSize from 'image-size';
import { galleries } from '$lib/_data/_galerias';

function getImages(params: { slug: string }) {
	let envPath = dev ? path.join('static', params.slug, 'gallery') : path.join(__dirname, params.slug, 'gallery')
	return fs
		.readdirSync(envPath)
		.filter((i) => i.includes('.jpg'))
		.map((i) => {
			const { width, height } = imageSize(
				fs.readFileSync(path.join(envPath, i))
			);
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
