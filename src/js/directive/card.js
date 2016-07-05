angular.module('profile').directive('card', card);

card.$inject = ['$uibModal'];
function card($uibModal) {
	return {
		restrict: 'AE',
		templateUrl: 'partial/card.tpl.html',
		scope: {
			thumbnail: '=',
			category: '='
		},
		link: function(scope) {
			

			
			// scope.showContent = function(index, event) {
			// 	event.preventDefault();
			// 	var size = 'lg',
			// 		modalInstance = $uibModal.open({
			// 	      animation: scope.animationsEnabled,
			// 	      templateUrl: 'partial/modalContent.tpl.html',
			// 	      //controller: 'ModalInstanceCtrl',
			// 	      size: size,
			// 	      resolve: {
			// 	        items: function () {
			// 	          return scope.items;
			// 	        }
			// 	      }
   //  			});
			// };
		}
	}
}