angular.module('app').factory('CampaignResource', ['$resource', 'AppConfig',
	function($resource, AppConfig) {
		let url = AppConfig.baseUrl + 'campaigns/:campaignId';
		return $resource(url, 
			{campaignId: '@id'},
			{ 
			  'get':    {method:'GET'},
			  'save':   {method:'POST'},
			  'query':  {method:'GET'},
			  'remove': {method:'DELETE'},
			  'delete': {method:'DELETE'} 
			});
}]);