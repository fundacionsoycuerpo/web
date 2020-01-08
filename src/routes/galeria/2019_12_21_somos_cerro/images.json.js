const fs = require("fs");
const path = require("path");
const imageSize = require("image-size");


function getImages() {
  return fs
    .readdirSync(path.join("static", "somos_cerro", "gallery"))
	.filter(i => i.includes(".jpg"))
	.map(i=> {
		const { width, height } = imageSize(
			fs.readFileSync(
				path.join("static", "somos_cerro", "gallery", i)
			)
		);
		return { src: i, height, width}
	});
}

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(getImages()));
}
