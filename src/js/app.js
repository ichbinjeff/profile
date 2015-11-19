angular.module('app', ['ui.router', 'ui.bootstrap', 'ngResource']);

angular.module('app').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/index");

		$stateProvider.state('index', {
			url: "/index",
			templateProvider: function($templateCache){  
		        return $templateCache.get('partial/index.tpl.html'); 
		    },
			controller: 'AppCtrl'
		})
		.state('campaigns', {
			url: "/campaigns",
			templateProvider: function($templateCache){  
		        return $templateCache.get('partial/campaigns.tpl.html'); 
		    }
		});
	}
]);