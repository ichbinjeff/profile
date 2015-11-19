angular.module('app')
	.service('CreateCampaignConfig', function() {
		return {
			form: [
				{
					name: 'externalId',
					label: 'MYDAS PC ID',
					warnMsg: 'PC ID is required and should look like a number',
					defaultVal: '',
					validate: ['checkNotNull', 'checkNumber']
				},
				{
					name: 'name',
					label: 'Campaign Name',
					warnMsg: 'Campaign Name is required',
					defaultVal: '',
					validate: ['checkNotNull']
				},
				{
					name: 'brandSafety',
					defaultVal: false,
					label: 'Brand Safe Only',
				},
				{
					name: 'pricingMetric',
					label: 'Pricing Metric',
					defaultVal: 'CPM',
				},
				{
					name: 'budget',
					label: 'Total Budget',
					warnMsg: 'Please fill in a valid total budget',
					validate: ['checkNotNull', 'checkNumber']	
				},
				{
					name: 'warnMsg',
					defaultVal: []
				},
				{
					name: 'metrics',
					defaultVal: ['CPC', 'CPM']
				}
			]}
	
	});