describe('unit test createCampaignModalCtrl', function() {
	beforeEach(function(){
		module('app');
	});

	var $controller,
		$scope,
		form;

	beforeEach(inject(["$rootScope", "$controller", "$uibModal", "FormValidation", "CreateCampaignConfig", "CampaignResource", 
		function($rootScope, _$controller, _$uibModal, validator, CreateCampaignConfig, CampaignResource) {
			$scope = $rootScope.$new();
			form = CreateCampaignConfig.form;
			uiModalInstance = _$uibModal.open({
				template: '<div></div>'
			});

			$controller = _$controller('createCampaignModalCtrl', {
				$scope: $scope,
				$uibModalInstance: uiModalInstance,
				validator: validator,
				CreateCampaignConfig: CreateCampaignConfig,
				CampaignResource: CampaignResource
			});
	}]));

	describe('$scope.init', function() {
		it('should initialize scope values based on create campaign config', function() {
			 $scope.init(form);
			 var checkList = [
			 	{'externalId': ''},
			 	{'name': ''},
			 	{'brandSafety': ''},
			 	{'pricingMetric': ''},
			 	{'budget': ''},
			 	{'warnMsg': ''},
			 	{'metrics': ['CPC', 'CPM']}
			 ];

			 checkList.forEach(item => {
			 	expect($scope[item]).toBe(checkList[item]);
			 });
		});
	});

	describe('$scope.cancel', function() {});
	describe('$scope.create', function() {});
});