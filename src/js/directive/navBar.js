angular.module('profile').directive('navBar', function($window) {
	return {
		restrict: 'AE',
		templateUrl: 'partial/navBar.tpl.html',
		link: function(scope, ele, att, ctrl) {
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
			scope.caption = "Shaojie Li | Engineer";
			scope.navs = [
				{name: 'About', url: '#'},
				{name: 'Work', url: '#'},
				{name: 'Life', url: '#'},
				{name: 'Project', url: '#'},
				{name: '中文', url: '#'}
			]
			//scope.caption = "Hello, world";
		}
	}
})