angular.module('profile').service('DefaultConfig', function() {
		this.lang = 'english';
		this.english = {
				nav: {
					caption: "Shaojie Li | Engineer",
					navs: [
						{name: 'About', url: '', id: "about"},
						{name: 'Work', url: '', id: "work"},
						{name: 'Life', url: 'life', id: ''},
						{name: 'Contact', url: 'contact', id: ''}
					],
					lang: {name: '中文', url: '#', id: 'chinese'}
				},
				carousel: {
					id: 'carousel',
					greeting: "Hi, I am Shaojie Li",
					greeting2: "and I am a",
					positions: ['worker', 'learner', 'player'],
					bgImg: [
						{active: true, image: 'static/header3.jpg'}
					]
				},
				overview: {
					id: "about",
					title: "Hello, World",
					profileImg: "static/photo.jpg",
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
					id: "project",
					title: "Work and Project",
					subtitle: "see what I am doing and interested in",
					config: [
						{image: 'static/work.jpg', alt: 'dailyWork', caption: 'Daily Work', detail: [
							{image: 'static/deal.png', alt: 'deal config', caption: 'Deal Configuration'},
							{image: 'static/oozie.png', alt: 'oozie/MapR', caption: 'OOZIE/MapR'},
							{image: 'static/mmdsp.png', alt: 'MM DSP', caption: 'MM DSP'}
						]},
						{image: 'static/js.jpg', alt: 'javascript', caption: 'Javascript', detail: [
							{image: 'static/algorithm.png', alt: 'OO js', caption: 'Object Oriented js'},
							{image: 'static/visualization.png', alt: 'visualization', caption: 'Visualization'}
						]},
						{image: 'static/hci.png', alt: 'hci', caption: 'Human Computer Interaction', detail: [
							{image: 'static/algorithm.png', alt: 'OO js', caption: 'Object Oriented js'},
							{image: 'static/visualization.png', alt: 'visualization', caption: 'Visualization'}
						]},
						{image: 'static/algo.jpg', alt: 'cool stuff', caption: 'Cool Stuff', detail: [
							{image: 'static/algorithm.png', alt: 'OO js', caption: 'Object Oriented js'},
							{image: 'static/visualization.png', alt: 'visualization', caption: 'Visualization'}
						]}
					],
					view: "list"
				},
				footer: {
					id: "footer",
					githubImg: "static/github.png",
					descText: "For more details about my projects, please check my github",
					navs: [
						{name: 'About', url: '#'},
						{name: 'Work', url: '#'},
						{name: 'Life', url: '#'},
						{name: 'Project', url: '#'}
					]
				}
			};

			this.chinese = {
				nav: {
					caption: "李韶杰 | 全栈工程师",
					navs: [
						{name: '关于我', url: '#', id: "about"},
						{name: '我的工作', url: '#', id: "work"},
						{name: '我的生活', url: 'life', id: ''},
						{name: '找到我', url: 'contact', id: ''}
					],
					lang: {name: 'English', url: '#', id: 'english'}
				},
				carousel: {
					id: 'carousel',
					greeting: "您好, 我是韶杰",
					greeting2: "我是一名",
					positions: ['worker', 'learner', 'player']
				},
				overview: {
					id: "about",
					title: "你好，世界",
					profileImg: "static/photo.jpg",
					heavyText: [
						`小可江南人氏，年不过而立，不务正业，今落魄于江湖，为生计所困。`,
						`少尝有奇节，然不学无术，一事无成。幸师门不弃，
						得以混迹师大，马大。寄身学府，耳濡目染，恨学渣本性难改，虽蒙混毕业，实学无所长。离家去国，于今五载。`,
						`今供职于米国在线，全栈开发广告平台`,
						`若得闲暇，或闭门造车，或与内子寄情山水，或醉心易牙之调。然浮生若梦，为欢几何`
					]
				},
				category: {
					id: "project",
					title: "工作与项目",
					subtitle: "看看我正在做的和我想做的...",
					config: [
						{image: 'static/work.jpg', alt: 'dailyWork', caption: '日常工作', detail: [
							{image: 'static/deal.png', alt: 'deal config', caption: 'Deal Configuration'},
							{image: 'static/oozie.png', alt: 'oozie/MapR', caption: 'OOZIE/MapR'},
							{image: 'static/mmdsp.png', alt: 'MM DSP', caption: 'MM DSP'}
						]},
						{image: 'static/js.jpg', alt: 'javascript', caption: 'JS 脚本', detail: [
							{image: 'static/algorithm.png', alt: 'OO js', caption: '面向对象 JS'},
							{image: 'static/visualization.png', alt: 'visualization', caption: '信息可视化'}
						]},
						{image: 'static/hci.png', alt: 'hci', caption: '人机交互', detail: [
							{image: 'static/algorithm.png', alt: 'OO js', caption: '面向对象 JS'},
							{image: 'static/visualization.png', alt: 'visualization', caption: '信息可视化'}
						]},
						{image: 'static/algo.jpg', alt: 'cool stuff', caption: '酷炫的东西', detail: [
							{image: 'static/algorithm.png', alt: 'OO js', caption: '面向对象 JS'},
							{image: 'static/visualization.png', alt: 'visualization', caption: '信息可视化'}
						]}
					],
				},
				footer: {
					id: "footer",
					githubImg: "static/github.png",
					descText: "更多项目信息，请戳 github",
					navs: [
						{name: '关于我', url: '#about'},
						{name: '我的工作', url: '#'},
						{name: '我的生活', url: '#'},
						{name: '找到我', url: '#'}
					]
				}	
			}

});