angular.module('profile')
	.directive('gitProfile', function() {
		return {
			restrict: 'AE',
			scope: {
				githubImg: "=",
				descText: "=",
				navs: "="
			},
			templateUrl: 'partial/gitProfile.tpl.html',
			link: function(scope) {
			}
		}
	})