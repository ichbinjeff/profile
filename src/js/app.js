angular.module('profile', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngRoute'])
.config(setupRoute);


setupRoute.$inject = ['$routeProvider'];
function setupRoute($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partial/main.tpl.html'
		})
		.when('/detailView', {
			templateUrl: 'partial/detailView.tpl.html'
		});
}

/**********************************************************************************
********************************Filter*********************************************
**********************************************************************************/
angular.module('profile')
	.filter('reverse', reverseFilter);


function reverseFilter() {
	return function(text) {
		if (text) {
			return text.split("").reverse().join("");
		}
	}
}


