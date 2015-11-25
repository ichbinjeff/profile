angular.module('profile').directive('overview', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partial/overview.tpl.html',
		scope: {
			title: "=",
			profileImg: "=",
			heavyText: "="
		},
		link: function(scope) {
		}
	}
})