angular.module('profile').directive('categoryView', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partial/categoryView.tpl.html',
		controller: 'CategoryViewController',
		controllerAs: 'ct',
		bindToController: {
			title: '=',
			subtitle: '=',
			category: '='
		}
	}
});