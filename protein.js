var uniqid = require('./uniqid');

Protein = module.exports = function () {
};

protein.prototype.id = function () {
	return uniqid(this);
};