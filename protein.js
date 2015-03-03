var uniqid = require('./uniqid');

function Protein() {
}

Protein.prototype.load = function (jsondata) {
	this.protein = JSON.parse(jsondata);
};

Protein.prototype.id = function () {
	return uniqid(this.protein);
};

module.exports = Protein;
