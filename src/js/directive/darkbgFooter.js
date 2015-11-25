angular.module('profile').directive('darkbgFooter', function() {
	return {
		restrict: 'AE',
		scope: {
			githubImg: "=",
			descText: "=", 
			navs: "="
		},
		templateUrl: 'partial/darkbgFooter.tpl.html',
		link: function(scope) {
		}
	}
})