describe("test framework health check", function() {
	beforeEach(function(){
		module("app");
	});
	
	it("should pass", function() {
		expect(true).toBe(true);
	});
});