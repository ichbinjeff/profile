angular.module('profile').directive('thumbnail', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partial/thumbnail.tpl.html',
		scope: {
			config: "="
		},
		link: function(scope) {
			scope.thumbnails = scope.config;
		}
	}
})