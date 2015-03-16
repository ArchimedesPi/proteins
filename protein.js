"use strict";
let uniqid = require('./uniqid');

module.exports = class Protein {
	load(jsonstring) {
		this.protein = JSON.parse(jsonstring);
	}

	get id() {
		return uniqid(this.protein);
	}
}
