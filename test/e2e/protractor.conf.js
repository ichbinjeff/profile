exports.config = {
  framework: 'jasmine',
  seleniumServerJar: '../../node_modules/selenium-server/lib/runner/selenium-server-standalone-2.48.2.jar',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.e2e.js'],
  baseUrl: "http://localhost:9002/",
  capabilities: {
    browserName: 'firefox'
  }
}