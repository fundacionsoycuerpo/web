import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import imageSize from 'image-size';
import { galleries } from '$lib/_data/_galerias';

function getImages(slug: string) {
	const dir = path.join('static', slug, 'gallery');

	// El load ya validó que el slug exista en _galerias, pero eso no garantiza
	// que la carpeta de fotos exista en disco. Sin esta guarda, declarar una
	// galería nueva antes de subir las fotos rompe el build COMPLETO con un
	// ENOENT, no solo esa página, porque prerender recorre todas las rutas.
	if (!fs.existsSync(dir)) {
		throw new Error(
			`Falta la carpeta de fotos de la galería "${slug}": ${dir}. ` +
				'Está declarada en _galerias.ts pero sus fotos no están en el repo.'
		);
	}

	return fs
		.readdirSync(dir)
		.filter((i) => /\.jpe?g$/i.test(i))
		.map((i) => {
			const { width, height } = imageSize(path.join(dir, i));
			return { src: i, height, width };
		});
}

export function load({ params }: { params: { slug: string } }) {
	const gallery = galleries.find((g) => g.slug === params.slug);
	if (!gallery) {
		error(404, 'Page Not found');
	}

	// Portada del hero: se mide en build con el mismo image-size que las fotos
	// de la galería. Sin width/height el navegador no reserva la altura y todo
	// el contenido de abajo salta cuando la imagen termina de cargar.
	const coverPath = path.join('static', params.slug, 'portada.jpg');
	const cover = fs.existsSync(coverPath) ? imageSize(coverPath) : undefined;

	return { gallery, images: getImages(params.slug), cover };
}
