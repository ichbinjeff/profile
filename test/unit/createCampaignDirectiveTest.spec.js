describe('Unit test create campaign directive', function() {
	var $compile,
		$rootScope;
	
	beforeEach(function() {
		module('app');
	});

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$rootScope.campaignSaved = true;
	}));

	it('Should replace the element with proper content', function() {
		var element = $compile('<div create-campaign campaign-saved="campaignSaved"></div>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toContain("Create Campaign");
	});
})