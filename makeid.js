#!/usr/bin/env node
"use strict";

var Protein = require('./protein');

require('cli').withStdin(function (stdin) {
	let protein = new Protein();
	protein.load(stdin);

	console.log(protein.id);
});
