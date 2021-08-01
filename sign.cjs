var crypto = require('crypto');
function sign(thing, secret) {
	//Name of the file : sha256-hmac.js
	//Loading the crypto module in node.js
	//creating hmac object
	var hmac = crypto.createHmac('sha256', secret);
	//passing the data to be hashed
	data = hmac.update(thing);
	//Creating the hmac in the required format
	gen_hmac = data.digest('hex');
	//Printing the output on the console
	return gen_hmac;
}

module.exports = sign;
