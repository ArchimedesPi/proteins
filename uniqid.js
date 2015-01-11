var crypto = require('crypto');
var _ = require('underscore');
var debug = require('debug')('uniqid');

module.exports = function (protein) {
	var hash = crypto.createHash('md5');
	var proteinHashes = ['fullName']
	_.each(proteinHashes, function (proteinkey) {
		hash.update(protein[proteinkey].toLowerCase().replace(/\s+/g, ''));
		debug("hashed " + proteinkey);
	});
	debug("done updating hashes");
	return hash.digest('hex');
};