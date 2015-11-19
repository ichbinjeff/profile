angular.module('app')
	.directive('createCampaign', ['$uibModal', function($uibModal) {
	return {
		restrict: 'A',
		scope: {
			campaignSaved: '='
		},
		templateUrl: 'partial/create-campaign.tpl.html',
		link: function(scope, ele, attr, ctrl) {
			scope.animationsEnabled = true;

			// open modal
			scope.open = function(size) {
				var modalInstance = $uibModal.open({
					animation: scope.animationsEnabled,
					templateUrl: 'partial/create-campaign-modal.tpl.html',
					controller: 'createCampaignModalCtrl',
					size: size
				});

				modalInstance.result.then(function(saved) {
					scope.campaignSaved = saved;
				}, function() {
					console.log('modal dismissed with error');
				});
			};
		}
	}
}]);

angular.module('app')
	.controller('createCampaignModalCtrl', ['$scope', '$uibModalInstance', 'CreateCampaignConfig', 'FormValidation', 'CampaignResource',
		function($scope, $uibModalInstance, CreateCampaignConfig, Validator, CampaignResource) {
		// init
		let formInfo = CreateCampaignConfig.form;
		$scope.init = init;
		$scope.init(formInfo);

		$scope.create = function() {
			$scope.warnMsg = [];
			let campaign = {};
			let isReady = build(formInfo, campaign);
			if (isReady) {
				CampaignResource.save(campaign)
				.$promise.then(function() {
					$uibModalInstance.close(true);
				});
			}
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
		
		function init (formInfo) {
			formInfo.forEach(item => {
				$scope[item.name] = item.defaultVal 
					? item.defaultVal
					: "";
			});
		};
		function validate(validateMethod, value) {
			// do validation
			var isValid = true;
			if (validateMethod) {
				isValid = validateMethod
							.every(method => {
							if (!Validator[method](value)) {
								return false;
							}
							return true;
						});
			}
			return isValid;
		}

		function showWarnMsg(isValid, field) {
			if (!isValid) {
				if (field.warnMsg && $scope.warnMsg) {
					$scope.warnMsg.push(field.warnMsg);
				}
				return false;	
			}
		}

		function build(form, campaign) {
			return form.every(field => {
					let fieldName = field.name,
					    validateMethod = field.validate,
						value = $scope[fieldName];

					let isValid = validate(validateMethod, value);
					showWarnMsg(isValid, field);

					if (!isValid) {
						return false;
					}
					// construct campaign DTO
					campaign[fieldName] = $scope[fieldName];
					return true;
			});
		}
	}]);