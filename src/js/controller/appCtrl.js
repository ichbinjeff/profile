angular.module('profile').controller('AppCtrl', 
	['$q', '$timeout', '$scope', '$window', 'MetaResource', 'DefaultConfig', '$location', '$anchorScroll','$compile',
	function($q, $timeout, $scope, $window, MetaResource, DefaultConfig, $location, $anchorScroll, $compile) {
		// MetaResource.get()
		// 	.$promise.then(function(rst) {
		// 		fill(rst);
		// }).catch(function(err) {
		// 	fill(DefaultConfig.english);
		// });

		fill(DefaultConfig.english);
		
		function fill(meta) {
			var metadata = meta;
			for (var k in metadata) {
				$scope[k] = metadata[k];
			}
		}

		$scope.goToAnchor = function(elm) {
			var newhash = elm;
			if ($location.hash() != newhash) {
				$location.hash(elm);
			} else {
				$anchorScroll();
			}
		};

		$scope.changeLang = function() {
			fill(DefaultConfig.chineseMeta);
		};

	}]);