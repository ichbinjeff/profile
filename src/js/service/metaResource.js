angular.module('profile').factory('MetaResource', function($resource) {
	let url = "http://localhost:3000/meta";
	return $resource(url,  {},
			{ 
			  'get':    {method:'GET'},
			  'save':   {method:'POST'},
			  'query':  {method:'GET', isArray: true},
			  'remove': {method:'DELETE'},
			  'delete': {method:'DELETE'} 
	});
})