angular.module('app')
	.controller('campListCtrl', ['$scope', 'CampaignResource',
	function($scope, CampaignResource) {
		// init 
		CampaignResource.query()
			.$promise.then(function(campaignList) {
				$scope.campaignList = campaignList.campaigns;
			});

		$scope.campaignSaved = false;
		$scope.$watch('campaignSaved', function(newVal, oldVal) {
			if (newVal) {
				console.log('trigger new ajax call');
				CampaignResource.query()
				.$promise.then(function(campaignList) {
					$scope.campaignList = campaignList.campaigns;
				});
			}
		});
	}]);

angular.module('app').directive('campaignList', function() {
	return {
		restrict: 'E',
		templateUrl: 'partial/campaign-list.tpl.html',
		controller: 'campListCtrl',
		link (scope, ele, attr, ctrl) {
			
		}
	}
});