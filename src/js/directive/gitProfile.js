angular.module('profile')
	.directive('gitProfile', function() {
		return {
			restrict: 'AE',
			templateUrl: 'partial/gitProfile.tpl.html',
			link: function(scope) {
				scope.descPic = "static/github.png";
				scope.descText = "For more details about my projects, please check my github"
			}
		}
	})