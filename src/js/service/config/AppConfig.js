// this is a singleton that stores the app level config info
angular.module('app').service('AppConfig', function() {
	return {
		baseUrl: 'https://localhost:8080/'
	}
});