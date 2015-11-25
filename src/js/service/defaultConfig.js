angular.module('profile').service('DefaultConfig', function() {
		this.metadata = {
				nav: {
					caption: "Shaojie Li | Engineer",
					navs: [
						{name: 'About', url: '#'},
						{name: 'Work', url: '#'},
						{name: 'Life', url: '#'},
						{name: 'Project', url: '#'},
						{name: '中文', url: '#'}
					]
				},
				carousel: {
					greeting: "Hi, I am Shaojie Li",
					greeting2: "and I am a",
					positions: ['developer', 'Learner', 'worker'],
					bgImg: [
						{active: true, image: 'static/header3.jpg'}
					]
				},
				overview: {
					title: "Hello, World",
					profileImg: "static/bluemonster.jpg",
					heavyText: [
						`I am a Software Engineer at AOL Platforms who takes 
						 care of our whole Demand Side Platform stack (angular based UI, 
						 	spring/jersey webapp, mysql db, solr index, rtb server, mapr)`
						,
						`Touch code at every level in daily work, from javascript 
						to servlet and backend services down to the database and hadoop.`
						,
						// `Specialties: Javascript, AngularJS, Ember, 
						// D3, Human Computer Interaction, Java, Hadoop`,
						`During my spare time, I like doing some experiments with new technologies to 
						stay updated with the trend,
						also enjoy traveling with my wife, playing tennis, and eating food. `,
					]
				},
				category: {
					title: "Work and Project",
					subtitle: "see what I am doing and interested in",
					config: [
						{image: 'static/work.jpg', alt: 'dailyWork', caption: 'Daily Work'},
						{image: 'static/js.jpg', alt: 'javascript', caption: 'Javascript'},
						{image: 'static/hci.png', alt: 'hci', caption: 'Human Computer Interaction'},
						{image: 'static/algo.jpg', alt: 'cool stuff', caption: 'Cool Stuff'}
					]
				},
				footer: {
					githubImg: "static/github.png",
					descText: "For more details about my projects, please check my github",
					navs: [
						{name: 'About', url: '#'},
						{name: 'Work', url: '#'},
						{name: 'Life', url: '#'},
						{name: 'Project', url: '#'},
						{name: '中文', url: '#'}
					]
				}
			}	
});