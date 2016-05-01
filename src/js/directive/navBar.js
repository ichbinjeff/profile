angular.module('profile').directive('navBar', function($window) {
	return {
		restrict: 'AE',
		scope: {
			caption: '=',
			navs: '=',
			scroll: '&',
			changeLang: '&'
		},
		templateUrl: 'partial/navBar.tpl.html',
		link: function(scope, ele, att, ctrl) {
			scope.n = {
				scroll: scope.scroll
			};

			$window.onscroll = function(e) {
				var scrollPos = document.body.scrollTop 
				|| document.documentElement.scrollTop 
				|| 0;

				if (scrollPos > 10) {
					scope.scroll = "invert-nav";
				} else {
					scope.scroll = "";
				}
			}
		}
	}
})