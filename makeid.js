#!/usr/bin/env node

var Protein = require('./protein');

require('cli').withStdin(function (stdin) {
	var protein = new Protein();
	protein.load(stdin);

	console.log(protein.id());
});
