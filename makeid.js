#!/usr/bin/env node

var crypto = require('crypto');
var uniqid = require('./uniqid');

require('cli').withStdin(function (stdin) {
	try {
		protein = JSON.parse(stdin);
	} catch (er) {
		console.log('error parsing json file', er);
		return;
	}

	console.log(uniqid(protein));
});