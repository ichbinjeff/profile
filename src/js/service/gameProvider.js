angular.module('app').provider('game', function() {
	var type;
	return {
		setType: function(value) {
			type = value;
		},
		$get: function() {
			return {
				title: 'dummy title'
			};
		}
	}
});