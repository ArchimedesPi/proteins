#!/usr/bin/env node

var crypto = require('crypto');
var Protein = require('./protein');

require('cli').withStdin(function (stdin) {
	protein = new Protein();
	protein.load(stdin);

	console.log(protein.id());
});