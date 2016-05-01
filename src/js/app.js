angular.module('profile', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngAnimate']);
/**********************************************************************************
********************************Filter*********************************************
**********************************************************************************/
angular.module('profile').filter('reverse', function() {
	return function(text) {
		if (text) {
			return text.split("").reverse().join("");
		}
	}
})

