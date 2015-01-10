var crypto = require('crypto');

module.exports = function (protein) {
	var hash = crypto.createHash('md5');
	hash.update(protein.fullName.toLowerCase());
	return hash.digest('hex');
};