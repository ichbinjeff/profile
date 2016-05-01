/*************************************************************************
***********************INJECT CTRL BETWEEN DIRECTIVE*********************
*************************************************************************/
angular.module('profile').directive('nest', function() {
	function ctrl($scope, $element) {
		$scope.inventory = [];
		this.addBook = function() {
			var rand = Math.floor(Math.random() * (9) + 1);
			$scope.inventory.push('random book' + rand);
			console.log(rand);
			console.dir($scope.inventory);
		};

		this.removeBook = function() {
			$scope.inventory.pop();
			console.dir($scope.inventory);
		};

		$scope.$watch('inventory', function(newVal, oldVal) {
			console.log('inventory changed');
		});
	}

	return {
		restrict: 'E',
		controller: ctrl
	}
});

angular.module('profile').directive('nest1', function() {
	function ctrl($scope, $element) {
		$scope.inventory = [];
		$scope.addMyBook = function(book) {
			$scope.inventory.push(book);
		};

		$scope.removeFirstBook = function() {
			$scope.inventory.shift();
		};
	}

	return {
		restrict: 'A',
		controller: ctrl
	}
});

angular.module('profile').directive('nest2', function() {
	return {
		restrict: 'A',
		require: 'nest',
		scope: {},
		link: function(scope, ele, attr, ctrl) {
			debugger;
			for (var i = 0; i < 10; i++) {
				ctrl.addBook();
			}
			ctrl.removeBook();
			console.log()
		}
	}
});

/**********************************************************************************
********************************Transclude****************************************
**********************************************************************************/
// 所谓transclude就是把外面的ng-transclude replace成directive 嵌套的部分
angular.module('profile').directive('panel', function() {
	return {
		restrict: "E",
		transclude: true,
		template: 'this is a panel <div ng-transclude></div>'
	}
});



















