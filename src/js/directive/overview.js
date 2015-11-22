angular.module('profile').directive('overview', function() {
	return {
		restrict: 'AE',
		templateUrl: 'partial/overview.tpl.html',
		scope: {

		},
		link: function(scope) {
			scope.title = "Hello, World";
			scope.profileImg = "static/bluemonster.jpg";
			scope.heavyText = [
			`I am a Software Engineer at AOL Platforms who takes 
			 care of our whole Demand Side Platform stack (angular based UI, 
			 	spring/jersey webapp, mysql db, solr index, rtb server, mapr)`
			,
			`Touch code at every level in daily work, from javascript 
			to servlet and backend services down to the database and hadoop.`
			,
			`Specialties: Javascript, AngularJS, Ember, 
			D3, Human Computer Interaction, Java, Hadoop`,
			`During my spare time, I am doing some experiments with new technologies to 
			stay updated with the trend,
			also enjoy traveling with my wife, playing tennis, and eating delicious food. `,
			];
		}
	}
})