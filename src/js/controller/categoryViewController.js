angular.module('profile').controller('CategoryViewController', categoryViewCtrl);

categoryViewCtrl.$inject = ['DefaultConfig'];
function categoryViewCtrl(DefaultConfig) {
	var ct = this;

	ct.backToCategory = function() {
		ct.category.elaborate = false;
		ct.category.config = ct.category.config[ct.category.index];
		delete ct.category.sub;
		delete ct.category.view;
	};

	ct.click = function(index) {				
		if (ct.category.view === 'detail') {
			alert('detail');
		} else {
			var detailView = ct.category.config[index].detail,
				sub = ct.category.config[index].caption;

			ct.category.index = index;
			ct.category.view = 'detail';
			ct.category.elaborate = true;

			if (DefaultConfig.lang === 'Chinese') {
				ct.category.setting = DefaultConfig.chineseMeta.category.config;
			}

			ct.category.config = detailView;
			ct.category.sub = sub;
		}
	};
}