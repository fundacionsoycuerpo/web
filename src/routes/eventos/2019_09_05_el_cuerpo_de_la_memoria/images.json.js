const fs = require('fs');
const path = require('path');

function getImages (){
    return fs.readdirSync(path.join('static', 'el_cuerpo_de_la_memoria', 'gallery' ))
}

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(getImages())); }