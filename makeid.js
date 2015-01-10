#!/usr/bin/env node

var crypto = require('crypto');

require('cli').withStdin(function (stdin) {
	try {
		protein = JSON.parse(stdin);
	} catch (er) {
		console.log('error parsing json file', er);
		return;
	}

	var hash = crypto.createHash('md5');
	
	/* Feed our hash with some fields,
	   which will all be lowercased, 
	   so later changing the capitalization
	   will not effect the hashes. */

	hash.update(protein.fullName.toLowerCase());


	/* Calculate digest */
	var digest = hash.digest('hex');

	/* Output the hash */
	console.log(digest);
});