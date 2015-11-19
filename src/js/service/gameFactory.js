angular.module('app').factory('gameFactory', function() {
	return function() {
		this.title = "puzzlecraft from factory";
	}
});