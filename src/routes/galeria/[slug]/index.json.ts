import fs from 'fs';
import path from 'path';
import * as imgSize from 'image-size';

function getImages(params) {
	return fs
		.readdirSync(path.join('static', params.slug, 'gallery'))
		.filter((i) => i.includes('.jpg'))
		.map((i) => {
			const { width, height } = imgSize.imageSize(
				fs.readFileSync(path.join('static', params.slug, 'gallery', i))
			);
			return { src: i, height, width };
		});
}

export function get({ params }) {
	return { body: getImages(params) };
}
