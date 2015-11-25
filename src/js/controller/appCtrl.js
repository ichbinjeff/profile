angular.module('profile').controller('AppCtrl', 
	['$q', '$timeout', '$scope', '$window', 'MetaResource', 'DefaultConfig',
	function($q, $timeout, $scope, $window, MetaResource, DefaultConfig) {
		MetaResource.get()
			.$promise.then(function(rst) {
				fill(rst);
		}).catch(function(err) {
			console.log('error fetch backend ', err);
			fill(DefaultConfig.metadata);
		});
		
		function fill(meta) {
			var metadata = meta;
			for (var k in metadata) {
				$scope[k] = metadata[k];
			}
		}
	}]);