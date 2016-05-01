angular.module('profile').directive('test', function() {
	return {
		restrict: "E",
		template: '<input ng-model="state.select"> dsfasfds',
		link: function(scope, ele, attr, ctrl) {
			scope.state = scope[attr.value];
		}
	}
})