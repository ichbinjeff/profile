angular.module('profile').directive('categoryView', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partial/categoryView.tpl.html',
		scope: {

		},
		link: function(scope) {
			scope.title = "Work and Project";
			scope.subtitle = "see what I am doing and interested in";
			scope.config = [
				{image: 'static/work.jpg', alt: 'dailyWork', caption: 'Daily Work'},
				{image: 'static/js.jpg', alt: 'javascript', caption: 'Javascript'},
				{image: 'static/hci.png', alt: 'hci', caption: 'Human Computer Interaction'},
				{image: 'static/algo.jpg', alt: 'cool stuff', caption: 'Cool Stuff'}
			]
		}
	}
})