angular.module('profile').directive('myCarousel', function($interval) {
	return {
		restrict: "AE",
		scope: {
			greetingMsg: '=',
			greetingMsg2: '=',
			items: '=',
			slides: '='
		},
		templateUrl: 'partial/carousel.tpl.html',
		link: function(scope, ele, attr) {
			var index = 1;
			if (!scope.items) {
				scope.positions = [];
			} else {
				scope.positions = [scope.items[0].toUpperCase()];
			}
			
			$interval(function() {
				if (scope.positions.length > 0) {
					scope.positions.pop();
				}
				scope.positions.push(scope.items[index].toUpperCase());
				index ++;
				if (index === scope.items.length) {
					index = 0;
				}
			}, 1000);

		}
	}
});