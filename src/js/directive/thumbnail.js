angular.module('profile').directive('thumbnail', function() {
	return {
		restrict: 'AE',
		scope: {
			thumbnails: "="
		},
		templateUrl: 'partial/thumbnail.tpl.html',
		link: function(scope) {
			
		}
	}
})