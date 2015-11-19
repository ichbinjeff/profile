angular.module('app').service('FormValidation', function() {
	return {
		checkNotNull(val) {
			if (!val) {
				return false;
			}
			return true;
		},
		/* TODO: logic might changed depends on requirements
			right now it would allow values like 
			[10, 100000, '20', 0, '0']
			and reject values like
			[false, 'false', null, undefined]
		*/
		checkNumber(val) {
			// we don't want to filter out 0
			// but we want to filter out null, undefined, boolean value
			if (val === null || val === true || val === false) {
				return false;
			}
			if (!isNaN(val) && isFinite(val)) {
				return true;
			}
			return false;
		}
	}
});