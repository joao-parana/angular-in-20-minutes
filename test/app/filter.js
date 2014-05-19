var module = angular.module('filterTest', []);
module.filter('encode', function() {
	return function(input) {
		return encodeURI(input);
	};
});
