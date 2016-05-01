angular.module('profile').controller('AppCtrl', 
	['$q', '$timeout', '$scope', '$window', 'MetaResource', 'DefaultConfig', '$location', '$anchorScroll','$compile',
	function($q, $timeout, $scope, $window, MetaResource, DefaultConfig, $location, $anchorScroll, $compile) {
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

		$scope.goToAnchor = function(elm) {
			debugger;
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