describe('unit test campaignResource', function() {
	var CampaignResource,
		httpBackend;
	
	beforeEach(module('app'));
	beforeEach(inject(['CampaignResource', '$httpBackend', function(CR, $httpBackend) {
		CampaignResource = CR;
		httpBackend = $httpBackend;

		httpBackend.when('GET', '/campaigns')
			.respond({campaigns: [1,2,3]});

		httpBackend.when('GET', '/campaigns/:id')
			.respond({campaign: {name: 'test'}});
	}]));

	describe('should be able to fetch campaign', function() {
		it('fetch campaign list', function() {
			CampaignResource.query()
			.$promise.then(function(campaigns) {
					expect(campaigns.campaigns.length).toBe(3);
			});
			
			CampaignResource.get()
			.$promise.then(function(campaigns) {
					expect(campaign.campaign).toBeDefined();
					expect(campaign.campaign.name).toBe('test');
			});
		});
	});
});