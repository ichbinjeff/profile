angular.module('profile').directive('banner', function($interval) {
	return {
		restrict: "AE",
		scope: {
			greetingMsg: '=',
			greetingMsg2: '=',
			items: '=',
			slides: '='
		},
		templateUrl: 'partial/banner.tpl.html',
		link: function(scope, ele, attr) {
			var setInterval = scope.$watch('items', function(newVal, oldVal) {
				if (newVal && newVal.length > 0) {
					changePos(newVal);
					setInterval();
				}
			});
			
			function changePos(data) {
				var interval = 1000;
				var changeText = function() {
					var first = data.shift();
					scope.position = first;
					data.push(first);
				};
				
				scope.position = data[data.length - 1];
				$interval(changeText, interval);
			}
		}
	}
});