// spec.js
describe('Protractor Demo App', function() {
  beforeEach(function() {
    browser.get('http://localhost:9002/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('angular boilerplate');
  });
});