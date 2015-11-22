angular.module('profile').directive('myCarousel', function($interval) {
	return {
		restrict: "AE",
		templateUrl: 'partial/carousel.tpl.html',
		link: function(scope, ele, attr) {
			scope.slides = [
				{active: true, image: 'static/header3.jpg'}
			];

			scope.greeting = "Hi, I am Shaojie Li";
			scope.greeting2 = "and I am a";
			var positions = ['developer', 'Learner', 'worker'],
				index = 0;

			scope.positions = [];
			$interval(function() {
				if (scope.positions.length > 0) {
					scope.positions.pop();
				}
				scope.positions.push(positions[index].toUpperCase());
				index ++;
				if (index === positions.length) {
					index = 0;
				}
			}, 1000);

		}
	}
});