"use strict";
let crypto = require('crypto');
let _ = require('underscore');
let debug = require('debug')('uniqid');

module.exports = function (protein) {
	let hash = crypto.createHash('md5');
	const proteinHashes = ['fullName', 'organism'];
	_.each(proteinHashes, function (proteinkey) {
		debug("hashing " + proteinkey);
		hash.update(protein[proteinkey].toLowerCase().replace(/\s+/g, ''));
	});
	debug("done updating hashes");
	return hash.digest('hex');
};
