angular.module('profile').directive('thumbnail', function() {
	return {
		restrict: 'AE',
		scope: {
			thumbnails: "="
		},
		templateUrl: 'partial/thumbnail.tpl.html',
		link: function(scope) {
			scope.showContent = function(index, event) {
				alert(index);
				event.preventDefault();

				var modalInstance = $uibModal.open({
				      animation: $scope.animationsEnabled,
				      templateUrl: 'myModalContent.html',
				      controller: 'ModalInstanceCtrl',
				      size: size,
				      resolve: {
				        items: function () {
				          return $scope.items;
				        }
				      }
    			});
			}
		}
	}
});

angular.module('profile').controller('ModalInstanceCtrl', function() {
	return {

	}
});