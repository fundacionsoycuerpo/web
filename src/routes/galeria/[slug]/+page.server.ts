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

	// Portada del hero: se mide en build con el mismo image-size que las fotos
	// de la galería. Sin width/height el navegador no reserva la altura y todo
	// el contenido de abajo salta cuando la imagen termina de cargar.
	const coverPath = path.join('static', params.slug, 'portada.jpg');
	const cover = fs.existsSync(coverPath) ? imageSize(coverPath) : undefined;

	return { gallery, images: getImages(params), cover };
}
