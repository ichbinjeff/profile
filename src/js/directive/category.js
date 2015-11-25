angular.module('profile').directive('categoryView', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partial/categoryView.tpl.html',
		scope: {
			title: '=',
			subtitle: '=',
			config: '='
		},
		link: function(scope) {
		}
	}
})