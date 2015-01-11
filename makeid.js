#!/usr/bin/env node

var crypto = require('crypto');
var Protein = require('./protein');
var debug = require('debug')('makeid')

require('cli').withStdin(function (stdin) {
	protein = new Protein();
	protein.load(stdin);

	console.log(protein.id());
});