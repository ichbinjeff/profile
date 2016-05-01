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
			scope.$watch('items', function(newVal, oldVal) {
				if (newVal && newVal.length > 0) {
					changePos(newVal);
				}
			});
			
			function changePos(data) {
				var interval = 1000;
				scope.position = data[data.length - 1];
				$interval(function() {
					var first = data.shift();
					scope.position = first;
					data.push(first);
				}, interval);
			}

		}
	}
});